export interface ISearchResult {
  sampleTextProp: string;
}

const SearchResult: React.FC<ISearchResult> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-bl from-orange-500 via-blue-800 to-black">
      {sampleTextProp}
    </div>
  );
};

export default SearchResult;
