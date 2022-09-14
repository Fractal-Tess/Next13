import StyledSpan from '$components/text/styledSpan';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center select-none space-y-4 text-5xl">
      <h1 className="text-6xl font-bold">
        Welcome to <StyledSpan text="Next.js" />
      </h1>
      <p>This is the Home page</p>
    </div>
  );
};

export default Home;
