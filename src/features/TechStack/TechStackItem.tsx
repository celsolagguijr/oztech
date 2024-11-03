import { TechStackProps } from './TechStackList';

function TechStackItem({ name, img }: TechStackProps) {
  return (
    <div className="rounded-md flex flex-col items-center justify-center border border-gray-100 p-4 gap-2 shadow-sm hover:shadow-md">
      <img
        src={img}
        alt={name}
        className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
      />
      <p className="text-sm font-medium md:text-base">{name}</p>
    </div>
  );
}

export default TechStackItem;
