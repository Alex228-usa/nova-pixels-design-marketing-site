const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="z-[2] max-w-1920 px-4 md:px-5 2xl:px-8 mx-auto">
      {children}
    </main>
  );
};

export default Main;
