export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <main className="mx-auto mt-8 px-8 max-w-7xl rounded-2xl border-neutral-100 bg-primary-800 h-full grid gap-8 md:p-12 lg:p-16">
      {children}
    </main>
  );
}

export default DefaultLayout;
