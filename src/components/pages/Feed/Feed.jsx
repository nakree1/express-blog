import React, { Fragment } from 'react';
import ArticleTagsList from '../../shared/ArticleTags/ArticleTagsList';
import ArticleListItem from '../../shared/ArticleListItem/ArticleListItem.jsx';

export default function Feed() {
  return (
    <Fragment>
      <ArticleTagsList/>
      <ArticleListItem/>
      <ArticleListItem/>
      <ArticleListItem/>
    </Fragment>
  )
}
