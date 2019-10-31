import React from 'react';
import { Link } from 'react-router-dom';
import routing from '../../../config/routing';

export default function Header() {
  return (
    <header className="container-fluid bg-primary text-white py-3">
      <Link to={routing().root} className="text-white">
        Express Blog
      </Link>
    </header>
  );
}
