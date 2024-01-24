import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function ProfilePage() {
  const { user, isLoading } = useAuth0();
  const { name, picture, email } = user;

  if (isLoading) return null;

  return (
    <div>
      <img
        src={picture}
        alt="User"
        style={{ marginLeft: '10vh', marginTop: '10vh', marginBottom: '9vh' }}
      />
      <h1 style={{ marginLeft: '10vh' }}>Name: {name}</h1>
      <h2 style={{ marginLeft: '10vh', marginBottom: '10vh' }}>
        Email: {email}
      </h2>
    </div>
  );
}
