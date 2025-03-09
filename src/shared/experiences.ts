export type ExperienceProps = {
  title: string;
  company: string;
  startDate: Date;
  endDate: Date;
  dutiesAndResponsibilities: string[];
  present: boolean;
};

const experiences: ExperienceProps[] = [
  {
    title: 'Senior Software Developer',
    company: 'Radztech Business Solutions',
    startDate: new Date('2021-06-01'),
    endDate: new Date(),
    present: true,
    dutiesAndResponsibilities: [
      "Contributed to the development of core features for a cloud-based ERP System that supports various industries, including Distribution, Restaurants, e-commerce, Motorcycle Dealers, and Government Accounting System.",
      "Created dynamic and interactive dashboards tailored to client needs, offering real-time insights and advanced data visualization for strategic decision-making.",
      "Created custom reports tailored to meet client needs and requests.",
      "Integrated APIs, such as JNT order creation and order tracking status, to streamline logistics for the e-commerce Industry.",
      "Collaborated with the Operations Department to deliver successful products.",
      "Led junior software developers, assigned tasks, and managed resources to meet project milestones.",
      "Debugged and resolved critical issues reported by users or testers."
    ],
  },
  {
    title: "Technical Support",
    company: "Government Service Insurance System – Cauayan Branch",
    startDate: new Date('2019-10-01'),
    endDate: new Date('2021-06-01'),
    present: false,
    dutiesAndResponsibilities: [
      "Developed and deployed an eCard Inventory System to streamline tracking, management, and distribution of  eCards, resulting in reduced data redundancy, optimized disk space usage, real-time information, minimized human errors, and the ability to serve multiple clients efficiently",
      "Provided technical support to address software, hardware, and network-related issues."
    ]
  },
  {
    title: "Web Developer	",
    company: "Technosite I.T. Business Solutions",
    startDate: new Date('2019-07-01'),
    endDate: new Date('2020-06-01'),
    present: false,
    dutiesAndResponsibilities: [
      "Developed and deployed a Hotel Management System with features such as reservation, check-in/check-out, amenities and discounts management, a customer master list, and an operational dashboard for efficient monitoring and management.",
      "Contributed to the development of web-based applications by implementing key features, optimizing performance, and enhancing functionality."
    ]
  }
];

export default experiences;
