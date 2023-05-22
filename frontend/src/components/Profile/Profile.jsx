import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading, isAuthenticated} = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
    <div>
      <div>
        <img src={user.picture}  />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  ));
};

export default Profile;