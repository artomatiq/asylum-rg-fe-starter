import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const ProfilePage = () => {
  const { user, isLoading } = useAuth0();
  const { name, picture, email } = user;

  if (isLoading) return null;

  return (
    <div
      style={{
        fontFamily: 'acumin',
        margin: '12vh',
        paddingLeft: '5vh',
        borderLeft: '5px double black',
      }}
    >
      <img
        src={picture}
        alt="User"
        style={{ marginTop: '10vh', marginBottom: '6vh', borderRadius: '15%' }}
      />
      <h1 style={{}}>Name: {name}</h1>
      <h2 style={{ marginBottom: '10vh' }}>Email: {email}</h2>
    </div>
  );
};

export default withAuthenticationRequired(ProfilePage);
