import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import Search from '@/components/utility/search/Search';
import { NextPageWithLayout } from '@/pages/page';
import Image from 'next/image';

const Home: NextPageWithLayout = () => {
  return (
    <section>
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
