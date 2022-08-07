import { connectStateResults } from "react-instantsearch-dom";
import Image from "next/image";

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <div className="pt-2 h-56 z-10 overflow-auto drop-shadow-xl">
          <ol>
            {searchResults.hits.map((hit) => (
              <li key={hit.objectID}>
                <a href={hit.link}>
                  <div className="p-4 bg-green-100 text-center hover:bg-green-400 text-gray-700 tracking-wide">
                    {hit.name}
                  </div>
                  <hr />
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}

export default connectStateResults(Hits);
