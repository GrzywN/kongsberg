export const routes = {
  home: {
    path: '/',
  },
  table: {
    users: {
      path: '/table/users',
    },
    posts: {
      path: '/table/users/:userId/posts',
      url: (userId: string) =>
        '/table/users/:userId/posts'.replace(':userId', userId),
    },
    comments: {
      path: '/table/users/:userId/posts/:postId/comments',
      url: (userId: string, postId: string) =>
        '/table/users/:userId/posts/:postId/comments'
          .replace(':userId', userId)
          .replace(':postId', postId),
    },
  },
};
