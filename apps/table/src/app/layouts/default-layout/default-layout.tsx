import { RecruitmentTaskButton } from '../../shared/components/recruitment-task-button/recruitment-task-button';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <main className="mx-auto mt-32 p-8 max-w-7xl rounded-2xl border-neutral-100 bg-primary-800 h-full grid gap-8 sm:mt-8 md:p-12 lg:p-16">
      <RecruitmentTaskButton />
      {children}
    </main>
  );
}

export default DefaultLayout;
