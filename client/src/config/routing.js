export default function routing(params) {
  return {
    root: '/',
    article: `/article/${params ? params : ':slug'}`,

    tag: `/tag/${params ? params : ':tag'}`
  };
}
