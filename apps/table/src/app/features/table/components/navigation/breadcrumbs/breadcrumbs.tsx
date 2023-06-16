import { Link, useParams } from 'react-router-dom';

import { routes } from '../../../../shared/utils/routes';

export function Breadcrumbs() {
  const { userId, postId } = useParams();

  const separator = ' / ';
  const usersText = userId ? `User (ID: ${userId})` : 'Users';
  const postsText = postId ? `Post (ID: ${postId})` : 'Posts';
  const commentsText = 'Comments';

  return (
    <nav className="bg-white mr-auto shadow-md rounded-md p-4 mb-2 uppercase text-primary-900 font-bold">
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
    </nav>
  );
}

export default Breadcrumbs;
