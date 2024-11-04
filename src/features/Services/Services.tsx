import Container from '@src/components/Container';
import { Disclosure } from '@headlessui/react';
import services from '@shared/services';
import Service from './Service';

function Services() {
  return (
    <Disclosure as="div">
      <Container>
        <Disclosure as="div" className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent md:text-4xl">
            Services
          </h1>
          <p className="text-sm text-gray-600 md:text-base lg:text-lg">
            Here’s a list of the services I provide
          </p>
        </Disclosure>

        <Disclosure
          as="div"
          className="flex justify-between gap-4 flex-col md:flex-row md:align-center md:gap-6"
        >
          {services.map(({ title, description, img }) => (
            <Service
              key={title}
              title={title}
              description={description}
              img={img}
            />
          ))}
        </Disclosure>
      </Container>
    </Disclosure>
  );
}

export default Services;
