import { useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <form
      className="flex flex-col gap-y-4 max-w-md items-center"
      onSubmit={(e) => {
        e.preventDefault();
        alert(searchTerm);
      }}
    >
      <div className="border-2 rounded-l-3xl rounded-r-md bg-slate-100  border-slate-200 w-5/6 sm:w-96 h-12 flex flex-row items-center">
        <div className="font-bold rounded-full bg-lime-500 p-auto w-10 h-8 m-2 flex justify-center items-center select-none">
          X
        </div>
        <input
          type="text"
          className="border-2 rounded-md bg-transparent p-1 px-3 w-full h-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-row gap-x-4">
        <button className="btn-primary" type="submit">
          Google Search
        </button>

        <button className="btn-primary" type="submit">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
