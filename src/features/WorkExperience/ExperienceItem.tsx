import { ExperienceProps } from '@src/shared/experiences';
import { formatDate } from '@src/helper';

const ExperienceItem = (props: ExperienceProps) => {
  const {
    title,
    company,
    startDate,
    endDate,
    present,
    dutiesAndResponsibilities,
  } = props;

  return (
    <li className="mb-10 lg:mb-10 lg:ms-4">
      <div className="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -start-1.5 border border-white " />
      <time className="mb-1 text-xs font-normal leading-none text-blue-800 lg:text-base">
        {formatDate(startDate)} - {formatDate(endDate, present)}
      </time>

      <h1 className="text-lg font-bold text-gray-800 lg:text-2xl">{title}</h1>
      <h4 className="text-sm font-semibold text-gray-500 lg:text-lg">
        {company}
      </h4>

      <ul className="mt-2 pl-4 list-disc">
        {dutiesAndResponsibilities.map((duty) => (
          <li key={duty} className="text-sm font-normal mb-2 lg:text-base">
            {duty}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ExperienceItem;
