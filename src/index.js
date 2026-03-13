import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GestionCookies from './GestionCookies';
import MentionsLegales from './MentionsLegales';
import PolitiqueConfidentialite from './PolitiqueConfidentialite';
import reportWebVitals from './reportWebVitals';

const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
const pageByPath = {
  "/mentions-legales": MentionsLegales,
  "/mentions-legales.html": MentionsLegales,
  "/politique-confidentialite": PolitiqueConfidentialite,
  "/politique-confidentialite.html": PolitiqueConfidentialite,
  "/gestion-cookies": GestionCookies,
  "/gestion-cookies.html": GestionCookies,
};
const ActivePage = pageByPath[normalizedPath] || App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActivePage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
