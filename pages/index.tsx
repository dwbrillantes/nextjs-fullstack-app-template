import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import Search from '@/components/utility/search/Search';
import { NextPageWithLayout } from '@/pages/page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/images/google-logo.svg"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>
        Google Offered in:{' '}
        <Link
          href="/"
          locale={locale === 'en' ? 'fr' : 'en'}
          className="underline text-blue-600"
        >
          Francais
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
