import Container from '@src/components/Container';
import TechStackList from './TechStackList';
import Filter from './Filter';
import { Disclosure } from '@headlessui/react';
import useTechStacks from './useTechStacks';

function TechStack() {
  const { filters, addFilter, techStacks, tags, selectAll } = useTechStacks();

  return (
    <Disclosure as="section">
      <Container>
        <Disclosure as="div" className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent md:text-4xl">
            Tech Stack
          </h1>
          <p className="text-sm text-gray-600 md:text-base lg:text-lg">
            Technologies I Use to Create Web Solutions
          </p>
        </Disclosure>

        <Disclosure as="div" className="mb-6">
          <Filter
            items={tags}
            filters={filters}
            addFilter={addFilter}
            selectAll={selectAll}
          />
        </Disclosure>

        <Disclosure as="div">
          <TechStackList items={techStacks} />
        </Disclosure>
      </Container>
    </Disclosure>
  );
}

export default TechStack;
