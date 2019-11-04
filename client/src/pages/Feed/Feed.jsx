import React, { Fragment } from 'react';
import ArticleTagsList from '../../components/shared/articleTags/ArticleTagsList';
import ArticleListItem from '../../components/shared/articleListItem/ArticleListItem.jsx';

export default function Feed() {
  return (
    <Fragment>
      <ArticleTagsList />
      <ArticleListItem />
      <ArticleListItem />
      <ArticleListItem />
    </Fragment>
  );
}
