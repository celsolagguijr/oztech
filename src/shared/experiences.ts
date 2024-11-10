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
      "Analyze complex problems, identify root causes, and provide solutions.",
      "Debug and resolve critical issues.",
      "Fix bugs and issues reported by users or testers.",
      "Oversee and participate in the deployment of the software.",
      "Lead junior develop/s, assign tasks, and manage resources to ensure project milestone are met.",
      "Ensure the delivery of high-quality, and efficient software.",
      "Collaborate with Operations Department to deliver successful products.",
      "Provide guidance and support to team members.",
      "Regularly evaluate software systems to ensure optimal performance.",
      "Lead a team of developers in the execution of projects, ensuring deadlines are met and quality standards are upheld."
    ],
  },
  {
    title: "Job Order",
    company: "Government Service Insurance System – Cauayan Branch",
    startDate: new Date('2019-10-01'),
    endDate: new Date('2021-06-01'),
    present: false,
    dutiesAndResponsibilities: [
      "Provided technical support to address software, hardware, and network-related issues.",
      "Developed and deployed an eCard Inventory System to streamline tracking, management, and distribution of digital cards, enhancing operational efficiency and minimizing errors."
    ]
  },
  {
    title: "Part-time Web Developer	",
    company: "Technosite I.T. Business Solutions",
    startDate: new Date('2019-07-01'),
    endDate: new Date('2020-06-01'),
    present: false,
    dutiesAndResponsibilities: [
      "Contributed to the development of web-based applications.",
      "Maintained and optimized software to improve performance",
      "Enhanced software functionality to minimize technical issues."
    ]
  }
];

export default experiences;
