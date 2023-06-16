import { Comment } from '@kongsberg/table/fetch';

export interface MoreInfoCommentProps {
  comment: Comment;
}

export function MoreInfoComment(props: MoreInfoCommentProps) {
  const { comment } = props;
  const { id, name, email: author, body } = comment;

  return (
    <div>
      <h2 className="text-lg text-primary-900 uppercase font-bold">
        {name} (Comment ID: {id})
      </h2>
      <p>{author}</p>
      <p className="mt-4 grid gap-2 max-w-prose">{body}</p>
    </div>
  );
}

export default MoreInfoComment;
