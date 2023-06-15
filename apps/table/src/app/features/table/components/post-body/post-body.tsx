import { Post } from '@kongsberg/table/fetch';

export interface PostBodyProps {
  post: Post;
}

export function PostBody(props: PostBodyProps) {
  const { post } = props;
  const { title, body } = post;

  return (
    <div>
      <h2 className="text-lg text-primary-900 uppercase font-bold">{title}</h2>
      <div className="mt-4 grid gap-2">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default PostBody;
