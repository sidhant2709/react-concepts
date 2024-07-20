import React, { useEffect, useState, ChangeEvent } from 'react';

const fruits: string[] = [
  'Apple',
  'Banana',
  'Cherry',
  'Apple',
  'Banana',
  'Grapes',
  'Cherry',
  'Mango',
  'Pineapple',
  'Mango',
  'Strawberry',
  'Blueberry',
  'Raspberry',
  'Strawberry',
  'Blueberry',
  'Raspberry',
  'Kiwi',
  'Watermelon',
  'Cantaloupe',
  'Lemon',
  'Lime',
  'Grapefruit',
  'Lemon',
  'Lime',
  'Grapefruit',
  'Plum',
  'Apricot',
  'Nectarine',
  'Plum',
  'Apricot',
  'Nectarine',
  'Fig',
  'Date',
  'Pomegranate',
  'Fig',
  'Date',
  'Pomegranate',
  'Guava',
  'Lychee',
  'Dragonfruit',
  'Pear',
  'Persimmon',
  'Tangerine',
  'Pear',
  'Persimmon',
  'Tangerine',
  'Cranberry',
  'Blackberry',
  'Mulberry',
  'Cucumber',
];
function getAutoCompleteResults(query: string, signal?: AbortSignal): Promise<string[]> {
  return new Promise((resolve: (value: string[] | PromiseLike<string[]>) => void, reject: (reason: string) => void) => {
    if (Math.random() * 10 !== 5) {
      setTimeout(() => {
        if (signal?.aborted) {
          reject(JSON.stringify(signal.reason));
        }
        resolve(
          fruits
            .filter((item: string, index: number) => fruits.indexOf(item) === index)
            .filter((fruit: string) => fruit.toLowerCase().includes(query.toLowerCase())),
        );
      }, Math.random() * 1000);
    } else {
      setTimeout(() => {
        reject('Error fetching data');
      }, Math.random() * 1000);
    }
  });
}

// function getAutoCompleteResults(query: string): Promise<string[]> {
//   return new Promise((resolve: (value: string[] | PromiseLike<string[]>) => void, _reject: (reason?: any) => void) =>{
//     setTimeout(() => {
//       resolve(fruits.filter((fruit: string) => fruit.toLowerCase().includes(query.toLowerCase())));
//     }, Math.random() * 1000);
//   });
// }

const useDebounceValue = (value: string, delay: number = 250) => {
  const [debouncedValue, setDebouncedValue]: [string, React.Dispatch<React.SetStateAction<string>>] =
    useState<string>(value);

  useEffect(() => {
    const timeout: number = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

const MockFetch = () => {
  const [query, setQuery]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');
  const [suggestions, setSuggestions]: [string[], React.Dispatch<React.SetStateAction<string[]>>] = useState<string[]>(
    [],
  );
  const debouncedQuery: string = useDebounceValue(query);
  const abortController: AbortController = new AbortController();

  useEffect(() => {
    const signal: AbortSignal = abortController.signal;
    void (async () => {
      setSuggestions([]);
      if (debouncedQuery.length > 0) {
        try {
          console.log(debouncedQuery);
          const data: string[] = await getAutoCompleteResults(debouncedQuery, signal);
          setSuggestions(data);
        } catch (error) {
          console.error(error);
        }
      }
    })();

    return () => abortController.abort('component unmounted/no longer needed/aborted/new request/cancelled');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-900">
      <input
        type="text"
        className="mt-24 mb-4 w-[20%] p-4 text-[2rem]"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      />
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        {suggestions.map((suggestion: string) => (
          <div key={suggestion} className="text-[2.5rem]">
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockFetch;
