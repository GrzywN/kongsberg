import { Link, useParams } from 'react-router-dom';

import { routes } from '../../../../shared/utils/routes';

export function Breadcrumbs() {
  const { userId, postId } = useParams();

  const separator = ' / ';
  const usersText = userId ? `User (ID: ${userId})` : 'Users';
  const postsText = postId ? `Post (ID: ${postId})` : 'Posts';
  const commentsText = 'Comments';

  return (
    <div className="bg-white mx-auto shadow-md sm:rounded-lg p-4 mb-2 uppercase text-primary-900">
      <Link className="underline" to={routes.table.users.path}>
        {usersText}
      </Link>
      {userId && (
        <>
          {separator}
          <Link className="underline" to={routes.table.posts.url(userId)}>
            {postsText}
          </Link>
        </>
      )}
      {userId && postId && (
        <>
          {separator}
          <Link
            className="underline"
            to={routes.table.comments.url(userId, postId)}
          >
            {commentsText}
          </Link>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
