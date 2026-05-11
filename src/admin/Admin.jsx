import React, { useState } from 'react';
import './Admin.css';
import {
  FaUpload, FaLock, FaCheckCircle, FaTimesCircle,
  FaSpinner, FaFileAlt, FaSignOutAlt,
} from 'react-icons/fa';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const BUCKET = 'portfolio';
const RESUME_FILE = 'Prathik_Thelkar_Resume.pdf';
const DOWNLOAD_URL = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${RESUME_FILE}`;

const Admin = () => {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password.');
      setTimeout(() => setLoginError(''), 2500);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setStatus('uploading');
    setErrorMsg('');

    try {
      const res = await fetch(
        `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${RESUME_FILE}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/pdf',
            'x-upsert': 'true',
          },
          body: file,
        }
      );

      if (res.ok) {
        setUploadedUrl(DOWNLOAD_URL);
        setStatus('success');
        setFile(null);
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || data.message || `Upload failed (${res.status})`);
      }
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type === 'application/pdf') setFile(dropped);
  };

  if (!authed) {
    return (
      <div className="adm-page">
        <div className="adm-card">
          <div className="adm-logo">PT<span>.</span></div>
          <h2 className="adm-title">Admin Access</h2>
          <p className="adm-sub">Resume management portal</p>
          <form onSubmit={handleLogin} className="adm-form">
            <div className="adm-field">
              <FaLock className="adm-field-icon" />
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="adm-input"
              />
            </div>
            {loginError && <p className="adm-error-text">{loginError}</p>}
            <button type="submit" className="adm-btn">Unlock Dashboard</button>
          </form>
          <p className="adm-hint">
            Go to <a href="/#/" className="adm-link">portfolio</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="adm-page">
      <div className="adm-card adm-card--wide">
        <div className="adm-header-row">
          <div className="adm-logo">PT<span>.</span></div>
          <button className="adm-logout" onClick={() => setAuthed(false)}>
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <h2 className="adm-title">Resume Manager</h2>
        <p className="adm-sub">
          Upload your updated resume — the download link on your portfolio never changes.
        </p>

        <div className="adm-url-pill">
          <span className="adm-url-label">Stable Download URL (never changes)</span>
          <code className="adm-url-value">{DOWNLOAD_URL}</code>
        </div>

        {status === 'success' ? (
          <div className="adm-success">
            <FaCheckCircle className="adm-success-icon" />
            <h3>Resume Updated Successfully!</h3>
            <p>All visitors will now download the latest version of your resume.</p>
            <div className="adm-success-actions">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="adm-btn adm-btn--outline"
              >
                Test download
              </a>
              <button onClick={() => setStatus('idle')} className="adm-btn">
                Upload again
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleUpload} className="adm-form">
            <label
              className={`adm-dropzone ${file ? 'adm-dropzone--ready' : ''}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
                hidden
              />
              {file ? (
                <>
                  <FaFileAlt className="adm-drop-icon adm-drop-icon--ready" />
                  <span className="adm-drop-name">{file.name}</span>
                  <span className="adm-drop-meta">{(file.size / 1024).toFixed(0)} KB · PDF</span>
                  <span className="adm-drop-change">Click to change</span>
                </>
              ) : (
                <>
                  <FaUpload className="adm-drop-icon" />
                  <span className="adm-drop-primary">Click or drag & drop your PDF</span>
                  <span className="adm-drop-hint">Only .pdf files accepted</span>
                </>
              )}
            </label>

            {status === 'error' && (
              <div className="adm-error-box">
                <FaTimesCircle /> {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="adm-btn"
              disabled={!file || status === 'uploading'}
            >
              {status === 'uploading' ? (
                <><FaSpinner className="adm-spin" /> Uploading...</>
              ) : (
                <><FaUpload /> Upload Resume</>
              )}
            </button>
          </form>
        )}

        <p className="adm-hint" style={{ marginTop: 24 }}>
          <a href="/#/" className="adm-link">← Back to portfolio</a>
        </p>
      </div>
    </div>
  );
};

export default Admin;
