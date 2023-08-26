import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Login } from '@/components/Login';
import { User } from '@/types/api-types';
import axios from 'axios';

export default function LoginPage() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      // Effectuer une requête au backend pour obtenir les informations de l'utilisateur
      // Utiliser le jeton pour authentifier la requête
      axios.get('/user/current', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(response => {
        const user = response.data;
        setLoggedInUser(user);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
      });
    }
  }, []); // Exécutez ce code uniquement au chargement de la page

  const handleLogin = (user: User) => {
    setLoggedInUser(user);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar  />
      <Header />
      <Login onLogin={handleLogin}/>
      <Footer />
    </div>
  );
}
