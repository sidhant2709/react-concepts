/* eslint-disable @typescript-eslint/typedef */
import React, { useEffect, useState } from 'react';

const plants: string[] = [
  'Cyperaceae',
  'Goodeniaceae',
  'Fabaceae',
  'Cactaceae',
  'Gesneriaceae',
  'Lamiaceae',
  'Pteridaceae',
  'Polygonaceae',
  'Asteraceae',
  'Salicaceae',
  'Rosaceae',
  'Fabaceae',
  'Asteraceae',
  'Asteraceae',
  'Brassicaceae',
  'Juncaceae',
  'Uncertain Ascomycota Family',
  'Poaceae',
  'Onagraceae',
  'Asteraceae',
  'Onagraceae',
  'Poaceae',
  'Aspleniaceae',
  'Asteraceae',
  'Brassicaceae',
  'Physciaceae',
  'Verrucariaceae',
  'Asteraceae',
  'Anacardiaceae',
  'Apocynaceae',
  'Fabaceae',
  'Violaceae',
  'Cornaceae',
  'Cactaceae',
  'Viscaceae',
  'Asteraceae',
  'Dicranaceae',
  'Fabaceae',
  'Thelotremataceae',
  'Crassulaceae',
  'Cactaceae',
  'Verbenaceae',
  'Apocynaceae',
  'Caryophyllaceae',
  'Scrophulariaceae',
  'Cyperaceae',
  'Asteraceae',
  'Pertusariaceae',
  'Cactaceae',
  'Sterculiaceae',
  'Caprifoliaceae',
  'Asteraceae',
  'Salicaceae',
  'Asteraceae',
  'Pterigynandraceae',
  'Cladoniaceae',
  'Malvaceae',
  'Pyrenulaceae',
  'Parmeliaceae',
  'Poaceae',
  'Cactaceae',
  'Asteraceae',
  'Apiaceae',
  'Poaceae',
  'Gesneriaceae',
  'Lamiaceae',
  'Ranunculaceae',
  'Lamiaceae',
  'Asteraceae',
  'Malvaceae',
  'Asteraceae',
  'Pteridaceae',
  'Halymeniaceae',
  'Fabaceae',
  'Convolvulaceae',
  'Ranunculaceae',
  'Poaceae',
  'Lecanoraceae',
  'Ranunculaceae',
  'Poaceae',
  'Scrophulariaceae',
  'Fabaceae',
  'Asclepiadaceae',
  'Rosaceae',
  'Poaceae',
  'Oleaceae',
  'Melianthaceae',
  'Cucurbitaceae',
  'Podocarpaceae',
  'Saxifragaceae',
  'Poaceae',
  'Solanaceae',
  'Fabaceae',
  'Poaceae',
  'Passifloraceae',
  'Boraginaceae',
  'Fabaceae',
  'Scrophulariaceae',
  'Asteraceae',
  'Sapotaceae',
];

function getAutoCompleteResults(query: string): Promise<string[]> {
  return new Promise((resolve: (value: string[] | PromiseLike<string[]>) => void, _reject: (reason?: any) => void) => {
    setTimeout(() => {
      resolve(
        plants
          .filter((item, index) => plants.indexOf(item) === index)
          .filter((plant) => plant.toLowerCase().includes(query.toLowerCase())),
      );
    }, Math.random() * 1000);
  });
}

// function getAutoCompleteResults(query: string): Promise<string[]> {
//   return new Promise((resolve: (value: string[] | PromiseLike<string[]>) => void, _reject: (reason?: any) => void) => {
//     setTimeout(() => {
//       resolve(plants.filter((plant: string) => plant.toLowerCase().includes(query.toLowerCase())));
//     }, Math.random() * 1000);
//   });
// }

const MockFetch = () => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    void (async () => {
      if (!query) {
        setSuggestions([]);
        return;
      }
      try {
        const data = await getAutoCompleteResults(query);
        setSuggestions(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-900">
      <input type="text" className="mt-24 mb-4" value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        {suggestions.map((suggestion: string) => (
          <div key={suggestion}>{suggestion}</div>
        ))}
      </div>
    </div>
  );
};

export default MockFetch;
