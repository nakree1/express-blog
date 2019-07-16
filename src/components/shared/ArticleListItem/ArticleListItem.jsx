import React from 'react';
import { Link } from 'react-router-dom';
import routing from '../../../config/routing';
import './ArticleListItem.scss';

export default function ArticleListItem({ data }) {

  const link = routing('test').article
  return (
    <div className="mx-auto col-8 article">
      <div className="row no-gutters">
        <div className="col-4">
          <Link to={link}>
            <img src="https://picsum.photos/600/450" className="rounded-left img-fluid" />
          </Link>
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
              longer.</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
