interface ServiceProps {
  title: string;
  description: string;
  img: string;
}

function Service({ title, description, img }: ServiceProps) {
  return (
    <div className="rounded-md border border-gray-200 shadow p-6 md:p-8">
      <img src={img} alt={title} className="h-16 w-16 mb-6 md:h-20 md:w-20" />
      <h4 className="text-md font-medium mb-1 md:text-lg">{title}</h4>
      <p className="text-sm text-pretty text-gray-500 md:text-base">
        {description}
      </p>
    </div>
  );
}

export default Service;
