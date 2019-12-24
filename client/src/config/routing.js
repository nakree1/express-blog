export default function routing(params) {
  return {
    root: '/',

    settings: '/account/settings',

    article: `/article/${params ? params : ':slug'}`,

    tag: `/tag/${params ? params : ':tag'}`
  };
}
