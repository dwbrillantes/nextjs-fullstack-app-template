import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import Search from '@/components/utility/search/Search';
import { NextPageWithLayout } from '@/pages/page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <div>Logo</div>
      <Search />
      <div>language</div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
