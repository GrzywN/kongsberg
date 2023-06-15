import { Comment } from '@kongsberg/table/fetch';

export interface CommentBodyProps {
  comment: Comment;
}

export function CommentBody(props: CommentBodyProps) {
  const { comment } = props;
  const { name, email: author, body } = comment;

  return (
    <div>
      <h2 className="text-lg text-primary-900 uppercase font-bold">{name}</h2>
      <p>{author}</p>
      <div className="mt-4 grid gap-2">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default CommentBody;