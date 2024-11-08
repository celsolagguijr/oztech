import { Disclosure, Button } from '@headlessui/react';

interface FilterProps {
  items: string[];
  filters: string[];
  addFilter: (filter: string) => void;
  selectAll: () => void;
}

function Filter({ items, filters, addFilter, selectAll }: FilterProps) {
  return (
    <Disclosure as="div" className="flex flex-wrap gap-2">
      <Button
        key={'all'}
        className={`rounded-full border py-1 px-3 text-xs ${filters.length === 0 ? 'bg-blue-900 text-white' : ''}`}
        onClick={selectAll}
      >
        all
      </Button>

      {items.map((name) => (
        <Button
          key={name}
          className={`rounded-full border py-1 px-3 text-xs ${filters.includes(name) ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => addFilter(name)}
        >
          {name}
        </Button>
      ))}
    </Disclosure>
  );
}

export default Filter;
