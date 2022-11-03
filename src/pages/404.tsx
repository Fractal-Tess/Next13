import StyledText from '$components/text/StyledText';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>NotFound</title>
        <meta
          name="description"
          content="A sample description about the page"
        />
      </Head>
      <div className="flex-1 flex flex-col items-center justify-center select-none space-y-4 text-5xl">
        <h1 className="text-6xl font-bold">
          <StyledText>404</StyledText> Error
        </h1>
        <Link href="/">
          <a className="underline decoration-primary underline-offset-8">
            Go somewhere safe
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
