import ExperienceItem from './ExperienceItem';
import { ExperienceProps } from '@src/shared/experiences';

interface WorkExperienceProps {
  items: ExperienceProps[];
}

const WorkExperienceList = ({ items }: WorkExperienceProps) => {
  return (
    <ol className="relative border-s border-gray-200 p-4 lg:pr-72">
      {items.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </ol>
  );
};

export default WorkExperienceList;
