import { GetServerSideProps } from 'next';

import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SearchResult from '@/components/utility/searchResult/SearchResult';
import { ISearchData } from '@/lib/search/types';
import { IApiSearchResponseData } from '@/pages/api/search';
import { NextPageWithLayout } from '@/pages/page';

export interface IResults {
  searchResults: ISearchData[];
}

export const getServerSideProps: GetServerSideProps<IResults> = async ({
  query,
}) => {
  let searchResults: IApiSearchResponseData = [];
  const searchTerm = query.search;

  if (searchTerm && searchTerm.length > 0) {
    const response = await fetch(`http://localhost:3000/api/search`, {
      body: JSON.stringify({ searchTerm }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    searchResults = await response.json();
  }
  return {
    props: {
      searchResults,
    },
  };
};

const Results: NextPageWithLayout<IResults> = ({ searchResults }) => {
  return (
    <section className="flex flex-col items-center gap-y-5">
      <div className="font-bold text-xl">Search Results</div>
      {searchResults.length > 0 ? (
        <div className="flex flex-col space-y-8">
          {searchResults.map((result, idx) => (
            <SearchResult key={idx} {...result} />
          ))}
        </div>
      ) : (
        <p>No Results Found</p>
      )}
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
