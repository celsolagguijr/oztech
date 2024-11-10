import Container from '@src/components/Container';
import { Disclosure } from '@headlessui/react';
import AboutPicture from '@assets/images/about_picture.jpg';

function About() {
  return (
    <Disclosure as="section">
      <Container>
        <Disclosure as="div" className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent md:text-4xl">
            About
          </h1>
        </Disclosure>

        <Disclosure
          as="div"
          className="flex flex-col-reverse gap-6 lg:flex-row lg:justify-between lg:gap-10"
        >
          <div className="flex-1">
            <p className="text-sm text-justify pb-2 indent-10 lg:text-base lg:pb-4">
              I’m Celso Laggui Jr, a software developer based in the Philippines
              with experience in the development and deployment of ERP systems.
              I specialize in creating tailored solutions that streamline
              operations across various industries. With a strong focus on
              problem-solving, I’ve handled projects that address complex
              business challenges, ensuring that the systems I build not only
              meet technical requirements but also align with broader business
              goals. My basic knowledge of accounting enhances my ability to
              bridge the gap between technical development and financial
              processes, adding value to the solutions I deliver.
            </p>

            <p className="text-sm text-justify indent-10 lg:text-base">
              Passionate about continuous learning, I stay up-to-date with
              emerging technologies to enhance my skill set. Whether it's
              optimizing existing systems or taking on new projects, I’m always
              eager to tackle challenges that push me to grow professionally. I
              thrive in environments where I can contribute my expertise, learn
              new concepts, and drive meaningful results.
            </p>
          </div>

          <img
            className="rounded-xl w-100 shadow-lg transition ease-in-out delay-150 grayscale hover:grayscale-0 lg:flex-1 lg:w-1/2 lg:object-cover"
            src={AboutPicture}
          />
        </Disclosure>
      </Container>
    </Disclosure>
  );
}

export default About;
