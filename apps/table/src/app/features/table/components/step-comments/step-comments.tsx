import { useParams } from 'react-router-dom';

import useCommentsQuery from '../../hooks/queries/use-comments-query';

export function StepComments() {
  const { postId } = useParams();
  const { isLoading, isError, data: commentsData } = useCommentsQuery(postId);

  if (isError) {
    return <caption>An error occurred!</caption>;
  }

  if (isLoading || !commentsData) {
    return <caption>Loading...</caption>;
  }

  return <caption>{JSON.stringify(commentsData)}</caption>;
}

export default StepComments;
