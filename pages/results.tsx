import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SearchResult from '@/components/utility/searchResult/SearchResult';
import { mockSearchResultProps } from '@/components/utility/searchResult/SearchResult.mocks';
import { NextPageWithLayout } from '@/pages/page';

const Results: NextPageWithLayout = () => {
  const resultData = [...new Array(6)];

  return (
    <section className="flex flex-col items-center gap-y-5">
      <div>Search Results</div>
      <div className="flex flex-col space-y-8">
        {resultData.map((_, idx) => (
          <SearchResult key={idx} {...mockSearchResultProps.base} />
        ))}
      </div>
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
