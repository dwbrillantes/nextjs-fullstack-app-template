import Image from 'next/image';
import Link from 'next/link';
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import Search from '@/components/utility/search/Search';
import { NextPageWithLayout } from '@/pages/page';
import Image from 'next/image';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/images/google-logo.svg"
        alt="Google Logo"
        width={272}
        height={92}
        priority
        className="mx-auto mb-3"
      />

      <Search />
      <div>language</div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
