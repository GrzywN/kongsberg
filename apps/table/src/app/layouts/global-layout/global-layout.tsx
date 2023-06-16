import { RecruitmentTaskButton } from '../../shared/components/recruitment-task-button/recruitment-task-button';

export interface GlobalLayoutProps {
  children: React.ReactNode;
}

export function GlobalLayout(props: GlobalLayoutProps) {
  const { children } = props;

  return (
    <main className="mx-auto mt-32 p-8 max-w-7xl rounded-t-2xl sm:rounded-2xl border-neutral-100 bg-primary-800 h-full grid gap-8 sm:mt-16 md:p-12 lg:p-16 lg:mt-8">
      <RecruitmentTaskButton />
      {children}
    </main>
  );
}

export default GlobalLayout;
