export const routes = {
  home: {
    path: "/"
  },
  table: {
    users: {
      path: "/table/users",
    },
    posts: {
      path: "/table/posts",
      dynamicPath: "/table/posts/:userId",
      url: (userId: string) => "/table/posts/:userId".replace(':userId', userId)
    },
    comments: {
      path: "/table/comments",
      dynamicPath: "/table/comments/:postId",
      url: (postId: string) => "/table/comments/:postId".replace(':postId', postId)
    },
  },

};
