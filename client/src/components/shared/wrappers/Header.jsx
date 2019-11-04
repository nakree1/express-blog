import React from 'react';
import { Link } from 'react-router-dom';
import routing from '../../../config/routing';

export default function Header() {
  return (
    <header className="header no-auth">
      <div className="container">
        <div className="header__logo">
          <Link to={routing().root} className="title">
            Express
          </Link>
          <span className="subtitle">Technology</span>
        </div>
        <div className="header__search">
          <span>Icon</span>
        </div>
        <div className="header__auth">
          <button className="btn sign-in">Sign in</button>
          <button className="btn join">Join</button>
        </div>
      </div>
    </header>
  );
}
