import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import logo from './logo.svg';
import './App.css';
import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";

function App() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value); // Met à jour directement la variable email
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    const formData = { user_email: email };

    console.log('Sending email with data:', formData);

    emailjs
      .send(
        'service_l763e7g', // Remplacez par votre service ID EmailJS
        'template_gqw8am9', // Remplacez par votre template ID EmailJS
        formData,
        'Iw-kl6b1kOYSMatcX' // Remplacez par votre user ID EmailJS (clé publique)
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert(`Failed to send email. Error: ${error.text}`);
        }
      );

    setEmail(''); // Réinitialise l'email après l'envoi
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>LANDING PAGE</p>
      </header>
      <main>
        <form className="email-form" onSubmit={sendEmail}>
          <label>
            Email:
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <button type="submit">Entrer</button>
        </form>
      <ButtonsContainer>
      <GooglePlayButton
        theme={"dark"}
        className={"custom-style"}
      />

      <AppStoreButton
        theme={"dark"}
        className={"custom-style"}
      />
    </ButtonsContainer>
      </main>
    </div>
  );
}

export default App;
