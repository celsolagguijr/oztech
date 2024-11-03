import { Disclosure } from '@headlessui/react';
import TechStackItem from './TechStackItem';
import { TechStack } from '@src/shared/tech_stack';

export interface TechStackProps extends Omit<TechStack, 'tags'> {}

interface TechStackListProps {
  items: TechStackProps[];
}

function TechStackList({ items }: TechStackListProps) {
  return (
    <Disclosure
      as="div"
      className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6"
    >
      {items.map(({ name, img }) => (
        <TechStackItem key={name} name={name} img={img} />
      ))}
    </Disclosure>
  );
}

export default TechStackList;
