<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

function ProfileBar({ username }) {
  return (
    <div className="profile-bar">
      <div className="profile-info">
        <span>Welcome, {username}</span>
      </div>
      <div className="navigation">
        <Link to="/doctors">Doctors</Link>
        {/* You can add other links for profile, settings, etc. */}
      </div>
    </div>
  );
}

export default ProfileBar;
=======
import React from 'react';
import { Link } from 'react-router-dom';

function ProfileBar({ username }) {
  return (
    <div className="profile-bar">
      <div className="profile-info">
        <span>Welcome, {username}</span>
      </div>
      <div className="navigation">
        <Link to="/doctors">Doctors</Link>
        {/* You can add other links for profile, settings, etc. */}
      </div>
    </div>
  );
}

export default ProfileBar;
>>>>>>> eedae301eccb5a51a39aa8056aa790e48a74611f
