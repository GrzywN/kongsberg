import { Route, Routes } from 'react-router-dom';

import { StepComments } from '../step-comments/step-comments';
import { StepPosts } from '../step-posts/step-posts';
import { StepUsers } from '../step-users/step-users';

export function Table() {
  // TODO: dodać posts i comments do fetchowania wszystkich postów i komentarzy

  return (
    <div className="bg-white relative overflow-x-auto shadow-md sm:rounded-lg max-h-[37.125rem]">
      <table className="w-full text-sm text-left text-neutral-700 font-semibold">
        <Routes>
          <Route path="/" element={<StepUsers />} />
          <Route path="/posts/:userId" element={<StepPosts />} />
          <Route path="/comments/:postId" element={<StepComments />} />
        </Routes>
      </table>
    </div>
  );
}

export default Table;
