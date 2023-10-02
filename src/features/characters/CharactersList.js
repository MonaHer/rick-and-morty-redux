import CharacterCard from "./CharacterCard";
import { useGetAllCharactersQuery } from "./apiSlice";
import { useState } from "react";

export default function CharactersList() {
  const { data, isError, isLoading } = useGetAllCharactersQuery();
  const [isVisible, setIsVisible] = useState(3);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  function handleShowMore() {
    setIsVisible(isVisible + 3);
  }

  function handleShowLess() {
    setIsVisible(isVisible - 3);
  }

  return (
    <>
      <h1>Characters</h1>
      <ul>
        {data.results.slice(0, isVisible).map((result) => (
          <>
            <CharacterCard key={result.id} result={result} />
          </>
        ))}
      </ul>
      <button onClick={handleShowLess} disabled={isVisible <= 3}>
        Show Less
      </button>
      <button
        onClick={handleShowMore}
        disabled={isVisible >= data.results.length}
      >
        Show More
      </button>
    </>
  );
}
