export default function routing(params) {
  return {
    root: '/',

    tag: `/tag/${params ? params : ':tag'}`
  }
}
