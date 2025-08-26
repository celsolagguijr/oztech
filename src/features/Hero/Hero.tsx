kimport GridBackGround from '@src/components/GridBackGround';
import Container from '@src/components/Container';
import profile from '@assets/images/profile.jpg';
import resume from '@assets/files/CELSO GONZALES LAGGUI JR - RESUME.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const noOfYears =
  new Date().getFullYear() - new Date('2021-06-01').getFullYear();

function Hero() {
  return (
    <section className="relative border-b bg-slate-50">
      <GridBackGround />
      <Container>
        <div className="py-8 lg:px-56">
          <div className="mb-4 flex justify-center md:mb-6 lg:mb-8">
            <img
              src={profile}
              className="rounded-full h-24 md:h-28 lg:h-30"
              alt="profile"
            />
          </div>
          <div className="mb-4 flex justify-center md:mb-6 lg:mb-8">
            <p className="text-pretty text-sm font-medium md:text-base lg:text-lg">
              Hi there, I'm Celso <span className="wave">👋</span>
            </p>
          </div>
          <div>
            <h1
              className="
            text-center 
            text-balance 
            text-3xl 
            font-semibold 
            tracking-tight 
            bg-gradient-to-r 
            from-blue-600 
            to-blue-900 
            bg-clip-text 
            text-transparent
            md:text-4xl
            lg:text-6xl"
            >
              I create innovative digital solutions for the web
            </h1>
            <p className="text-center mt-4 text-pretty text-sm font-medium text-gray-500 md:text-base lg:text-lg md:mt-6 lg:mt-8">
              As a <span className="text-gray-900">software developer</span>{' '}
              with
              <span className="text-gray-900">
                {' '}
                over {noOfYears} years of experience
              </span>
              , I leverage my{' '}
              <span className="text-gray-900"> programming </span> 👨‍💻 expertise
              to deliver
              <span className="text-gray-900"> scalable </span> 📈 and{' '}
              <span className="text-gray-900">maintainable</span> 🛠️ software
              that meets client needs and{' '}
              <span className="text-gray-900">
                solves challenges across various industries 🏢
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-6 align-center justify-center md:flex-row md:mt-10 md:gap-6">
            <a
              href="mailto:celsolaggui@gmail.com"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm text-center font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span className="mr-2">Email Me</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
