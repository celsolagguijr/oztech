import Container from '@src/components/Container';
import { Disclosure } from '@headlessui/react';
import WorkExperienceList from './ExperienceList';
import workExperiences from '@shared/experiences';

function WorkExperience() {
  return (
    <Disclosure as="section" className="bg-slate-50">
      <Container>
        <Disclosure as="div" className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent md:text-4xl">
            Work Experience
          </h1>
          <p className="text-sm text-gray-600 md:text-base lg:text-lg">
            My career highlights and key contributions
          </p>
        </Disclosure>

        <Disclosure
          as="div"
          className="flex justify-between gap-4 flex-col md:flex-row md:align-center md:gap-6"
        >
          <WorkExperienceList items={workExperiences} />
        </Disclosure>
      </Container>
    </Disclosure>
  );
}

export default WorkExperience;
