import { Post } from '@kongsberg/table/fetch';

export interface MoreInfoPostProps {
  post: Post;
}

export function MoreInfoPost(props: MoreInfoPostProps) {
  const { post } = props;
  const { id, title, body } = post;

  return (
    <div>
      <h2 className="text-lg text-primary-900 uppercase font-bold">
        {title} (Post ID: {id})
      </h2>
      <div className="mt-4 grid gap-2 max-w-prose">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default MoreInfoPost;
