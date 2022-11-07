import StyledText from '$components/text/StyledText';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center select-none space-y-4 text-5xl">
      <h1 className="text-6xl font-bold">
        Welcome to <StyledText>Next.js</StyledText>
      </h1>
      <p>This is the Home page</p>
    </div>
  );
};

export default Home;
