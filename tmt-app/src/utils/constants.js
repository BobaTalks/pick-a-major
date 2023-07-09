import AnatomyIcon from '../Images/icons/anatomy.svg';
export const CAREERS_AND_MAJORS = {
  careers: {
    'accounting-finance': {
      id: 0,
      name: 'Accounting/Finance',
      desc: 'Accounting is the process of recording, classifying, and summarizing financial transactions to provide information that is useful in making business decisions. Finance is the study of how individuals and organizations manage their money, including the processes of acquiring and using financial resources over time. Accountants and financial professionals use tools such as financial statements and spreadsheets to analyze and interpret financial data, and they may also be involved in forecasting and budgeting, risk management, and decision-making',
      link: 'https://www.zippia.com/accountant-jobs/',
      skills: ['Accounting', 'Financial Reporting', 'Data Management'],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
        {
          label: 'Economics & Business',
          url: '/majors/economics-and-business',
        },
      ],
      key: 'accounting-finance',
    },
    art: {
      id: 1,
      name: 'Art',
      desc: 'An art career often refers to a job that involves being creative or producing works of art, often using a specific medium. This can include professionals who produce their own art, like painters and sculptors, as well as jobs that entail working with art or evaluating its value. Art careers encompass a broad field of subjects, from art history to interior design to illustration. Professionals typically choose a specific concentration in college and hone their skills for that particular industry. Many art careers exist in the entertainment industry, but you can also find artistic jobs in industries like marketing, fashion and news reporting',
      link: 'https://www.zippia.com/artist-jobs/',
      skills: ['Communication', 'Time Management', 'Art Knowledge'],
      majors: [
        {
          label: 'Visual Arts & Design',
          url: '/majors/visual-arts-and-design',
        },
      ],
      key: 'art',
    },
    consultant: {
      id: 2,
      name: 'Consultant',
      desc: 'Consulting is the practice of providing expert advice to organizations in order to help them solve problems, improve their performance, and achieve their goals. Consultants may work in a variety of industries and may specialize in areas such as strategy, operations, finance, or technology. Consultants work with clients to understand their needs, conduct research and analysis, and develop recommendations and solutions to address their challenges. Consultants may also be involved in implementing their recommendations and helping clients to achieve their desired outcomes',
      link: 'https://www.zippia.com/consultant-jobs/',
      skills: ['Communication', 'Time Management', 'Research'],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
        {
          label: 'Economics & Business',
          url: '/majors/economics-and-business',
        },
        {
          label: 'Physical Science & Engineering',
          url: '/majors/physical-science-and-engineering',
        },
      ],
      key: 'consultant',
    },
    'data-science': {
      id: 3,
      name: 'Data Science',
      desc: 'Data science is the field that deals with the collection, analysis, and interpretation of large datasets. It involves using statistical and computational techniques to extract insights and knowledge from data, and applying this knowledge to solve real-world problems. Data scientists often use tools such as machine learning algorithms and programming languages like Python to analyze and interpret data',
      link: 'https://www.zippia.com/data-scientist-jobs/',
      skills: ['Data Visualization', 'Statistical Analysis', 'Programming'],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
      ],
      key: 'data-science',
    },
    design: {
      id: 4,
      name: 'Design',
      desc: 'UX/UI design is the process of designing the user experience and user interface of a product, such as a website or application. It involves creating wireframes, prototypes, and user flows to understand how a user will interact with a product, and then designing the visual elements, such as the layout, color scheme, and typography, to create an intuitive and enjoyable experience for the user',
      link: 'https://www.zippia.com/user-experience-designer-jobs/demographics/',
      skills: ['Design Software', 'Design Principles'],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
        { label: 'Performing Arts', url: '/majors/performing-arts' },
        {
          label: 'Psychology & Neuroscience',
          url: '/majors/psychology-and-neuroscience',
        },
        {
          label: 'Visual Arts & Design',
          url: '/majors/visual-arts-and-design',
        },
      ],
      key: 'design',
    },
    education: {
      id: 5,
      name: 'Education',
      desc: 'Being a teacher involves planning and delivering lessons to students in a classroom setting, as well as grading assignments and providing feedback to help students learn and grow. Teachers also play a role in developing lesson plans, creating a positive learning environment, and fostering meaningful relationships with students. Teachers may work with students of all ages, from early childhood education to post-secondary education, and may specialize in a particular subject area or grade level',
      link: 'https://www.zippia.com/teacher-jobs/',
      skills: ['Communication', 'Empathy', 'Subject Knowledge'],
      majors: [
        { label: 'Education', url: '/majors/education' },
        {
          label: 'Humanities & Cultures',
          url: '/majors/humanities-and-cultures',
        },
      ],
      key: 'education',
    },
    'engineering-non-software': {
      id: 6,
      name: 'Engineering (non-software)',
      desc: 'Engineering is the application of scientific, economic, and practical knowledge in order to design, build, and maintain structures, machines, devices, systems, and processes. Engineers use math and science to solve problems and improve the world around us through the design and development of new technologies and products',
      link: 'https://www.zippia.com/engineer-jobs/',
      skills: ['Quality Control', 'Troubleshooting'],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
        {
          label: 'Physical Science & Engineering',
          url: '/majors/physical-science-and-engineering',
        },
      ],
      key: 'engineering-non-software',
    },
    'healthcare-professional': {
      id: 7,
      name: 'Healthcare Professional',
      desc: "Being a healthcare professional involves providing medical care and treatment to patients, often in a clinical setting such as a hospital or doctor's office. Healthcare professionals may work in a variety of roles, including doctors, nurses, and other specialized positions, and may be responsible for diagnosing and treating illnesses, administering medication, and providing preventive care and education to patients. Healthcare professionals also play an important role in advocating for the health and well-being of their patients and may be involved in research and education to advance the field of medicine",
      link: 'https://www.zippia.com/health-care-provider-jobs/',
      skills: ['Communication', 'Empathy', 'Technical Knowledge'],
      majors: [
        {
          label: 'Biology & Health',
          url: '/majors/biology-and-health',
        },
        {
          label: 'Humanities & Cultures',
          url: '/majors/humanities-and-cultures',
        },
        {
          label: 'Psychology & Neuroscience',
          url: '/majors/psychology-and-neuroscience',
        },
      ],
      key: 'healthcare-professional',
    },
    hr: {
      id: 8,
      name: 'HR',
      desc: "Human resources (HR) is the department within a company that is responsible for managing the personnel and administrative functions of the organization. This includes tasks such as recruiting and hiring employees, managing payroll and benefits, training and developing staff, and handling employee relations and conflict resolution. HR professionals work to ensure that the company's workforce is aligned with the organization's goals and objectives and that employees are treated fairly and with respect",
      link: 'https://www.zippia.com/advice/human-resources/',
      skills: [
        'Human Resource Management',
        'Talent Management',
        'Learning and Development',
      ],
      majors: [
        {
          label: 'Economics & Business',
          url: '/majors/economics-and-business',
        },
        { label: 'Education', url: '/majors/education' },
        {
          label: 'Humanities & Cultures',
          url: '/majors/humanities-and-cultures',
        },
        {
          label: 'Psychology & Neuroscience',
          url: '/majors/psychology-and-neuroscience',
        },
        {
          label: 'Social & Political Science',
          url: '/majors/social-and-political-science',
        },
      ],
      key: 'hr',
    },
    'investment-banking': {
      id: 9,
      name: 'Investment Banking',
      desc: 'Investment banking is the division of a bank that helps clients raise capital by underwriting and issuing securities, as well as providing financial advisory services. Investment bankers work with companies, governments, and other organizations to raise the necessary capital to fund their operations, expand their businesses, or complete mergers and acquisitions. Investment bankers may also be involved in trading securities, structuring financial deals, and providing market insights and analysis to clients',
      link: 'https://www.zippia.com/investment-banker-jobs/',
      skills: [
        'Data Interpretation',
        'Financial Analysis',
        'Risk Management',
        'Physical Science & Engineering',
      ],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
      ],
      key: 'investment-banking',
    },
    'law-legal': {
      id: 10,
      name: 'Law/Legal',
      desc: 'Law is the system of rules and principles that a society or government recognizes and enforces through its courts and other institutions. The legal profession involves the study, interpretation, and application of these laws, as well as the representation of clients in legal matters such as litigation, contracts, and negotiations. Lawyers may work in private practice, for a government agency, or in-house for a corporation or other organization, and may specialize in areas such as criminal law, corporate law, or intellectual property law',
      link: 'https://www.zippia.com/lawyer-jobs/',
      skills: ['Information Analysis', 'Public Speaking', 'Writing'],
      majors: [
        {
          label: 'Economics & Business',
          url: '/majors/economics-and-business',
        },
        { label: 'Languages', url: '/majors/languages' },
        {
          label: 'Physical Science & Engineering',
          url: '/majors/physical-science-and-engineering',
        },
        {
          label: 'Social & Political Science',
          url: '/majors/social-and-political-science',
        },
      ],
      key: 'law-legal',
    },
    marketing: {
      id: 11,
      name: 'Marketing',
      desc: "Marketing is the process of identifying, anticipating, and satisfying customer needs and wants through the creation, promotion, and distribution of products and services. It involves conducting market research, developing marketing strategies and campaigns, and using various tactics, such as advertising and social media, to reach and engage with potential customers. Marketing professionals are responsible for promoting products and services to target audiences in order to increase sales and grow a company's market share",
      link: 'https://www.zippia.com/marketing-manager-jobs/',
      skills: [
        'Copywriting',
        'Search Engine Optimization',
        'Customer Relationship Management',
      ],
      majors: [
        {
          label: 'Economics & Business',
          url: '/majors/economics-and-business',
        },
        {
          label: 'Humanities & Cultures',
          url: '/majors/humanities-and-cultures',
        },
        {
          label: 'Languages',
          url: '/majors/languages',
        },
        {
          label: 'Psychology & Neuroscience',
          url: '/majors/psychology-and-neuroscience',
        },
        {
          label: 'Social & Political Science',
          url: '/majors/social-and-political-science',
        },
      ],

      key: 'marketing',
    },
    'product-management': {
      id: 12,
      name: 'Product Management',
      desc: 'Product management is the process of defining, developing, and bringing a product to market. It involves working with a team of designers, engineers, and other stakeholders to identify the needs of the target audience, develop a product roadmap, and create a plan to bring the product to market. Product managers are responsible for overseeing the entire product lifecycle, from conception to launch and beyond, and for making strategic decisions about the direction of the product',
      link: 'https://www.zippia.com/product-manager-jobs/demographics/',
      skills: ['Market Research', 'Product Vision', 'Roadmapping'],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
        {
          label: 'Physical Science & Engineering',
          url: '/majors/physical-science-and-engineering',
        },
        {
          label: 'Visual Arts & Design',
          url: '/majors/visual-arts-and-design',
        },
      ],
      key: 'product-management',
    },

    'project-program-management': {
      id: 13,
      name: 'Project/Program Management',
      desc: 'Project management is the process of planning, organizing, and overseeing the work of a team to achieve specific goals and meet deadlines. It involves establishing a project plan, identifying and acquiring the necessary resources, and managing the budget, scope, and risks of the project. Project managers are responsible for ensuring that the project stays on track and is completed successfully',
      link: 'https://www.zippia.com/program-manager-jobs/',
      skills: [
        'Stakeholder Engagement',
        'Risk Management',
        'Change Management',
      ],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
        { label: 'Economics & Business', url: 'economics-and-business' },
        { label: 'Education', url: '/majors/education' },
        {
          label: 'Humanities & Cultures',
          url: '/majors/humanities-and-cultures',
        },
        {
          label: 'Physical Science & Engineering',
          url: '/majors/physical-science-and-engineering',
        },
        {
          label: 'Psychology & Neuroscience',
          url: '/majors/psychology-and-neuroscience',
        },
      ],
      key: 'project-program-management',
    },
    recruiting: {
      id: 14,
      name: 'Recruiting',
      desc: 'Talent recruiting is the process of identifying and attracting qualified candidates for employment opportunities within a company. This involves conducting job postings, sourcing candidates through various channels such as job boards and social media, reviewing resumes and conducting interviews, and making hiring decisions. Talent recruiters work to build relationships with potential candidates and help connect them with job opportunities that align with their skills and experience',
      link: 'https://www.zippia.com/recruiter-jobs/',
      skills: [
        'Communication',
        'Applicant Tracking System Knowledge',
        'Talent Analytics',
      ],
      majors: [
        { label: 'Education', url: '/majors/education' },
        {
          label: 'Humanities & Cultures',
          url: '/majors/humanities-and-cultures',
        },
        { label: 'Languages', url: '/majors/languages' },
        { label: 'Performing Arts', url: '/majors/performing-arts' },
        {
          label: 'Psychology & Neuroscience',
          url: '/majors/psychology-and-neuroscience',
        },
        {
          label: 'Social & Political Science',
          url: '/majors/social-and-political-science',
        },
      ],
      key: 'recruiting',
    },
    'software-engineering': {
      id: 15,
      name: 'Software Engineering',
      desc: 'A software engineer is responsible for designing, developing, and maintaining software systems. This involves working with a team to identify the needs of the users, writing and testing code, and ensuring that the software is efficient, reliable, and easy to use. Software engineers may also be involved in the ongoing maintenance and improvement of existing software systems',
      link: 'https://www.zippia.com/software-engineer-jobs/',
      skills: ['Programming', 'Software Architecture', 'Software Testing'],
      majors: [
        {
          label: 'Computer Science & Math',
          url: '/majors/computer-science-and-math',
        },
        {
          label: 'Physical Science & Engineering',
          url: '/majors/physical-science-and-engineering',
        },
      ],
      key: 'software-engineering',
    },
  },
  majors: {
    'biology-and-health': {
      id: 0,
      name: 'Biology & Health',
      desc: 'Biology is the scientific study of living organisms and their interactions with each other and their environment. Health majors focus on the study of health and wellness and may include coursework in areas such as public health, nutrition, and healthcare administration',
      classes: [
        'Public Health',
        'Neurobiology',
        'Ecology',
        'Evolution',
        'Gene Expression',
      ],
      skills: ['Technical Communication', 'Research', 'Data Analysis'],
      careers: [
        {
          label: 'Healthcare Professionals',
          url: '/careers/healthcare-professionals',
        },
      ],
      key: 'biology-and-health',
    },
    'computer-science-and-math': {
      id: 1,
      name: 'Computer Science & Math',
      desc: 'Computer Science is a field that involves the study of computers and computational systems, including their hardware and software design and implementation. Math is a field that involves the study of numbers, quantities, and shapes, and the use of logical reasoning and abstract thinking to solve problems',
      classes: [
        'Data Structures',
        'Discrete Mathematics',
        'Linear Algebra',
        'Algorithms',
      ],
      skills: [
        'Mathematical/Logical Reasoning',
        'Data Manipulation',
        'Complex Problem Solving',
        'Programming Languages',
        'Data Analysis',
        'Technical Writing',
        'Software Development',
        'Cloud Skills',
      ],
      careers: [
        { label: 'Software Engineering', url: '/careers/software-engineering' },
        { label: 'Data Science', url: '/careers/data-science' },
        { label: 'Product Management', url: '/careers/product-management' },
        { label: 'Design', url: '/careers/design' },
        {
          label: 'Project/Program Management',
          url: '/careers/project-program-management',
        },
        {
          label: 'Engineering (non-software)',
          url: '/careers/engineering-non-software',
        },
        { label: 'Accounting/Finance', url: '/careers/accounting-finance' },
        { label: 'Investment Banking', url: '/careers/investment-banking' },
        { label: 'Consultant', url: '/careers/consultant' },
      ],
      key: 'computer-science-and-math',
    },
    'economics-and-business': {
      id: 2,
      name: 'Economics & Business',
      desc: 'Economics is a social science that deals with the production, distribution, and consumption of goods and services. Business is a field that involves the study of how organizations operate and how they make and manage money, as well as topics such as marketing, finance, and management',
      classes: ['Financial Accounting', 'Marketing Research', 'Human Resource'],
      skills: [
        'Financial Literacy',
        'Understanding of Organizations',
        'Customer Empathy',
        'Presentation Skills',
      ],
      careers: [
        { label: 'Accounting/Finance', url: '/careers/accounting-finance' },
        {
          label: 'Project/Program Management',
          url: '/careers/project-program-management',
        },
        { label: 'Marketing', url: '/careers/marketing' },
        { label: 'HR', url: '/careers/hr' },
        { label: 'Consultant', url: '/careers/consultant' },
        { label: 'Law/Legal', url: '/careers/law-legal' },
      ],
      key: 'economics-and-business',
    },
    education: {
      id: 3,
      name: 'Education',
      desc: 'Education is a field that involves the study of teaching and learning, including the theories and practices of educational psychology, instructional design, and the sociology of education. Education majors typically prepare to become teachers or work in related fields such as educational administration or policy',
      classes: [
        'Educational Psychology',
        'Language Development',
        'Social Issues in Education',
      ],
      skills: ['People Management', 'Conflict Resolution'],
      careers: [
        { label: 'Education', url: '/careers/education' },
        { label: 'HR', url: '/careers/hr' },
        { label: 'Recruiting', url: '/careers/recruiting' },
        {
          label: 'Project/Program Management',
          url: '/careers/project-program-management',
        },
      ],
      key: 'education',
    },
    'humanities-and-cultures': {
      id: 4,
      name: 'Humanities & Cultures',
      desc: 'Humanities is a broad field that encompasses the study of language, literature, art, music, history, philosophy, and other cultural practices and products. Culture majors focus on the study of the ways in which people from different societies and communities create, share, and transmit their traditions, beliefs, and values',
      classes: ['Food in Culture', 'Comparative Literature', 'Race Theory'],
      skills: ['Critical Thinking', 'Written Communication', 'Empathy'],
      careers: [
        { label: 'HR', url: '/careers/hr' },
        { label: 'Marketing', url: '/careers/marketing' },
        {
          label: 'Healthcare Professionals',
          url: '/careers/healthcare-professionals',
        },
        {
          label: 'Project/Program Management',
          url: '/careers/project-program-management',
        },
        { label: 'Recruiting', url: '/careers/recruiting' },
        { label: 'Education', url: '/careers/education' },
      ],
      key: 'humanities-and-cultures',
    },
    languages: {
      id: 5,
      name: 'Languages',
      desc: 'Language majors involve the study of one or more foreign languages, including their structure, grammar, and literature, as well as the cultures and societies in which they are spoken. Language majors may also include coursework in linguistics, the scientific study of language, and may prepare students for careers in translation, interpretation, language teaching, or international relations',
      classes: [
        'Elementary/Accelerated Language',
        'Introduction to Culture (Film/Literature/Entertainment)',
        'Linguistics',
      ],
      skills: ['Critical Thinking', 'Written Communication', 'Empathy'],
      careers: [
        { label: 'Marketing', url: '/careers/marketing' },
        { label: 'Recruiting', url: '/careers/recruiting' },
        { label: 'Law/Legal', url: '/careers/law-legal' },
      ],
      key: 'languages',
    },
    'performing-arts': {
      id: 6,
      name: 'Performing Arts',
      desc: 'Performing arts is a field that includes the study of music, theater, and dance, as well as the technical aspects of stage production. Performing arts majors typically focus on developing their skills in performance, composition, or production, and may prepare for careers as musicians, actors, dancers, or stage managers',
      classes: [
        'Acting',
        'Modern Dance',
        'Principles of Theatrical Design',
        'Entertainment Engineering & Management',
      ],
      skills: ['Public Speaking', 'Creativity'],
      careers: [
        { label: 'Design', url: '/careers/design' },
        { label: 'Recruiting', url: '/careers/recruiting' },
      ],
      key: 'performing-arts',
    },
    'physical-science-and-engineering': {
      id: 7,
      name: 'Physical Science & Engineering',
      desc: 'Physical Science is a field that encompasses the study of the natural sciences, including physics, chemistry, and astronomy, as well as the properties and behavior of matter and energy. Engineering is a field that involves the application of scientific and mathematical principles to the design, construction, and operation of systems, machines, and structures',
      classes: ['Quantum Mechanics', 'Electricity & Magnetism', 'Biochemistry'],
      skills: [
        'Research',
        'Record and Date Maintenance',
        'Analytical Problem-Solving',
        'Data Interpretation',
        'Problem solving',
        'research and data analysis',
        'Mathematical/Logical Reasoning',
      ],
      careers: [
        {
          label: 'Engineering (non-software)',
          url: '/careers/engineering-non-software',
        },
        {
          label: 'Software Engineering',
          url: '/careers/software-engineering',
        },
        { label: 'Product Management', url: '/careers/product-management' },
        {
          label: 'Project/Program Management',
          url: '/careers/project-program-management',
        },
        { label: 'Investment Banking', url: '/careers/investment-banking' },
        { label: 'Consultant', url: '/careers/consultant' },
        { label: 'Law/Legal', url: '/careers/law-legal' },
      ],
      key: 'physical-science-and-engineering',
    },
    'psychology-and-neuroscience': {
      id: 8,
      name: 'Psychology & Neuroscience',
      desc: 'Psychology is a field that involves the scientific study of the mind and behavior, including topics such as cognition, perception, emotion, and social interactions. Neurology is a medical specialty that deals with the diagnosis, treatment, and management of disorders of the nervous system',
      classes: [
        'Abnormal Psychology',
        'Human Learning & Memory',
        'Hormones & Behavior',
        'Social Cognition',
      ],
      skills: [
        'R (Data Software)',
        'Research Methods',
        'Statistical and Computing Techniques',
      ],
      careers: [
        {
          label: 'Healthcare Professional',
          url: '/careers/healthcare-professional',
        },
        { label: 'HR', url: '/careers/hr' },
        { label: 'Marketing', url: '/careers/marketing' },
        { label: 'Recruiting', url: '/careers/recruiting' },
        { label: 'Design', url: '/careers/design' },
        {
          label: 'Product/Program Management',
          url: '/careers/product-program-management',
        },
      ],
      key: 'psychology-and-neuroscience',
    },
    'social-and-political-science': {
      id: 9,
      name: 'Social & Political Science',
      desc: 'Social science is a field that deals with the study of human society and social relationships, including topics such as anthropology, sociology, and psychology. Political science is a field that involves the study of government, politics, and political systems, including topics such as political theory, public policy, and international relations',
      classes: [
        'Political Psychology',
        'Cultural Anthropology',
        'Sociology of Culture',
      ],
      skills: [
        'Written Communication',
        'Critical Thinking',
        'Presentation/Public Skills',
      ],
      careers: [
        { label: 'HR', url: '/careers/hr' },
        { label: 'Marketing', url: '/careers/marketing' },
        { label: 'Recruiting', url: '/careers/recruiting' },
        { label: 'Law/Legal', url: '/careers/law-legal' },
      ],
      key: 'social-and-political-science',
    },
    'visual-arts-and-design': {
      id: 10,
      name: 'Visual Arts & Design',
      desc: 'Visual art is a field that involves the creation of art using a variety of mediums, such as painting, sculpture, drawing, and printmaking. Design is a field that involves the creation of functional, aesthetically pleasing products and environments, including topics such as graphic design, fashion design, and interior design',
      classes: [
        'Human Centered Design',
        'Visual Communication',
        'Sculpture/Drawing/Painting',
      ],
      skills: ['Creativity', 'Empathy', 'Computer software skills'],
      careers: [
        {
          label: 'Design',
          url: '/careers/design',
        },
        { label: 'Art', url: '/careers/art' },
        { label: 'Product Management', url: '/careers/product-management' },
      ],
      key: 'visual-arts-and-design',
    },
  },
};

export const CLASS_SUBJECT_LIST = [
  {
    id: 0,
    name: 'Anatomy',
    desc: 'Structure, function, and organization of living organisms, including humans, animals, and plants, at the level of cells, tissues, organs, and systems',
  },
  {
    id: 1,
    name: 'Biology',
    desc: 'Science of life and living organisms, including their structure, function, growth, evolution, distribution, and taxonomy',
  },
  {
    id: 2,
    name: 'Chemistry',
    desc: 'Composition, properties, and behavior of matter as well as chemical reactions and interactions',
  },
  {
    id: 3,
    name: 'Computer Science',
    desc: 'Computer simulation, programming languages, microcontrollers, and web development',
  },
  {
    id: 4,
    name: 'Digital Media',
    desc: 'Media content that is created, distributed, and consumed using digital technologies and electronic devices',
  },
  {
    id: 5,
    name: 'Economics',
    desc: 'How individuals, businesses, governments, and societies make choices about allocation and scarcity',
  },
  {
    id: 6,
    name: 'English Literature',
    desc: 'Texts from around the world written in the English language and creative writing',
  },
  {
    id: 7,
    name: 'Entrepreneurships',
    desc: 'How to start, manage, and grow a business venture through leadership, innovation, financial management, and strategic planning',
  },
  {
    id: 8,
    name: 'Foreign Languages',
    desc: 'Learning vocabulary, grammar, pronunciation, and cultural context for non-English languages',
  },
  {
    id: 9,
    name: 'Home Economics',
    desc: 'Personal and family finances, nutrition, food preparation, textiles, and apparel',
  },
  {
    id: 10,
    name: 'Law/Politics',
    desc: 'Principles, theories, and practices of law and governance, including legal systems, constitutional law, international law, and public policy',
  },
  {
    id: 11,
    name: 'Math',
    desc: 'Algebra, geometry, trigonometry, pre-calculus, and calculus',
  },
  {
    id: 12,
    name: 'Performing Arts',
    desc: 'Dance, music, theatre, and film',
  },
  {
    id: 13,
    name: 'Philosophy',
    desc: 'Fundamental questions about existence, knowledge, values, reason, mind, and language',
  },
  {
    id: 14,
    name: 'Physical Education',
    desc: 'Physical activity, fitness, sports, and games',
  },
  {
    id: 15,
    name: 'Physics',
    desc: 'Fundamental laws and properties of matter, energy, space, and time, and their interactions and relationships with each other',
  },
  {
    id: 16,
    name: 'Psychology',
    desc: 'Human behavior and mental processes, including cognition, emotion, perception, development, personality, social behavior, and mental health',
  },
  {
    id: 17,
    name: 'Robotics',
    desc: 'Design, construction, programming, and application of robots and autonomous systems',
  },
  {
    id: 18,
    name: 'Social Studies',
    desc: 'Societies, cultures, human behavior, and relationships',
  },
  {
    id: 19,
    name: 'Visual Arts',
    desc: 'Painting, drawing, ceramics, photography, video, filmmaking, design, crafts',
  },
];

export const SOFT_SKILL_LIST = [
  {
    id: 0,
    title: 'Public Speaking',
    info: 'Public speaking is the ability to deliver a spoken message to a live audience in an effective and engaging manner',
    icon: AnatomyIcon,
  },
  {
    id: 1,
    title: 'Written Communication',
    info: 'Written communication is the act of creating and conveying a message through the written word',
    icon: AnatomyIcon,
  },
  {
    id: 2,
    title: 'Analytical',
    info: 'Analytical skills refer to the ability to gather, process, and make decisions based on data and information',
    icon: AnatomyIcon,
  },
  {
    id: 3,
    title: 'Creative Thinking',
    info: 'Creative thinking is the ability to generate and implement novel and original ideas or solutions to problems',
    icon: AnatomyIcon,
  },
  {
    id: 4,
    title: 'Organization',
    info: "Time management and organization is the ability to prioritize tasks and effectively manage one's use of time to achieve goals and increase efficiency",
    icon: AnatomyIcon,
  },
  {
    id: 5,
    title: 'Emotional Intelligence',
    info: "Emotional intelligence is the capacity to be aware of, control, and express one's emotions, as well as the emotions of others, and use this information to guide thoughts and actions",
    icon: AnatomyIcon,
  },
  {
    id: 6,
    title: 'Tech Proficiency',
    info: 'Tech proficiency refers to the ability to effectively use technology, demonstrate technical knowledge, and solve problems innovatively in various technical domains',
    icon: AnatomyIcon,
  },
];

export const FIELD_OF_STUDY_LIST = [
  {
    id: 0,
    name: 'Biology & Health',
    major: [
      'Biology/Biological Sciences',
      'Public Health',
      'Dentistry, Medicine, Nursing (Healthcare Professions)',
    ],
  },
  {
    id: 1,
    name: 'Computer Science & Math',
    major: ['Data Science', 'Computer Science', 'Math', 'HCI (Duplicate)'],
  },
  {
    id: 2,
    name: 'Economics & Business',
    major: ['Marketing', 'Finance/Accounting', 'HR', 'Economics', 'Business'],
  },
  {
    id: 3,
    name: 'Education',
    major: ['Info coming soon'],
  },
  {
    id: 4,
    name: 'Humanities & Cultures',
    major: [
      'Sociology',
      'History',
      'Anthropology',
      'Race and Gender Studies',
      'Ethnic Studies',
    ],
  },
  {
    id: 5,
    name: 'Languages',
    major: ['Info coming soon'],
  },
  {
    id: 6,
    name: 'Performing Arts',
    major: ['Theater', 'Performing Arts', 'Music'],
  },
  {
    id: 7,
    name: 'Physical Science & Engineering',
    major: ['Chemistry', 'Physics', 'Mechanical Engineering', 'Bioengineering'],
  },
  {
    id: 8,
    name: 'Psychology & Neuroscience',
    major: ['Cognitive Science', 'Neuroscience', 'Psychology'],
  },
  {
    id: 9,
    name: 'Social & Political Science',
    major: ['Political Science', 'International Relations', 'Law/Philosophy'],
  },
  {
    id: 10,
    name: 'Visual Arts & Design',
    major: ['Media Art', 'Graphic Design', 'UX/UI Design', 'HCI (Duplicate)'],
  },
];

export const CAREERS_CARDS_PLACEHOLDERS = [
  {
    title: 'Anatomy',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'History',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Geography',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Math',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Computer Science',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'English',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Political Science',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Philosophy',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Home Studies',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Nursing',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Keyboard',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
  {
    title: 'Woodwork',
    info: 'Information for Anatomy.',
    icon: AnatomyIcon,
  },
];
