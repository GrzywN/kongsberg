import { EvaluationCriteria } from '../../components/evaluation-criteria/evaluation-criteria';
import { Instruction } from '../../components/instruction/instruction';
import { SeeItInAction } from '../../components/see-it-in-action/see-it-in-action';
import { TaskRequirements } from '../../components/task-requirements/task-requirements';
import { TaskTitle } from '../../components/task-title/task-title';

export function RecruitmentTaskView() {
  return (
    <section className="mx-auto">
      <article className="font-medium prose prose-sm prose-invert sm:prose-base md:prose-lg lg:prose-xl">
        <TaskTitle />
        <SeeItInAction />
        <Instruction />
        <TaskRequirements />
        <EvaluationCriteria />
      </article>
    </section>
  );
}

export default RecruitmentTaskView;
