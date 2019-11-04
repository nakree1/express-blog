import React from 'react';

export default function ArticleTagsList({ somearg }) {
  const tags = ['News', 'Fashion', 'Tech', 'Story'].map((item) => (
    <li className="nav-item" key={item}>
      <a className="nav-link" href={`/${item}`}>
        #{item}
      </a>
    </li>
  ));

  return (
    <div className="col">
      <ul className="nav justify-content-center">{tags}</ul>
    </div>
  );
}
