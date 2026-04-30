export const profile = {
  initials: 'XG',
  name: 'Xintian Gao',
  role: 'PhD Student',
  department: 'Educational Technology',
  university: 'University of Florida',
  email: 'gaoxintian@ufl.edu',
  location: 'Gainesville, Florida',
  // orcid: '0000-0000-0000-0000',
  bio: [`
    I am a PhD student at University of Florida, with an interest in understanding student
    thinking and improving learning through data-driven insights. My work explores how LLMs,
    research-backed softwares, and learning analytics can support teaching and enhance learning.`,

    `I am especially interested in translating research into practical tools that make a real
    difference in classrooms as well as informal settings by revealing students' thinking
    processes and exploring ways to help students construct their own knowledge. Always open
    to collaboration and conversations around AI, education, and learning design.`,

    `Before my doctorate, I completed an MA in Educational Studies at University of Michigan
    and worked as a learning experience designer.`],
  tags: [
    'Technology-enhanced learning',
    'Digital pedagogy',
    'Learning analytics',
    'EdTech',
    'Artificial Intelligence'
  ],
};

export const stats = [
  { n: '1', label: 'Years of doctoral research' },
  // { n: '1', label: 'Publications & papers' },
  { n: '100+', label: 'Students taught' },
  { n: '5', label: 'Current projects' },
  { n: '6', label: 'Certifications' }
  // { n: '2', label: 'Research grants' },
];

export const dissertation = {
  title: '[Your dissertation title here]',
  body: `My doctoral research investigates [2–3 sentences on your topic, methods, and contribution].
    Drawing on [methods — e.g. mixed methods, participatory design, learning analytics], I examine
    [core research question] in [context/setting]. Expected completion: [Year].`,
};

export const research = [
  {
    title: 'Jingle Jangle: Conceptualizing Learning in EdTech',
    meta: '2025 – Present · University of Florida · Graduate RA',
    badge: { label: 'In Progress', cls: 'bdg-purple' },
    desc: `Leading a systematic review of academic literature to synthesize how learning is conceptualized within the field. Utilizing Boolean search optimization and thematic analysis to identify theoretical gaps.`
  },
  {
    title: 'CHECKPOINT: Usability & Math Pedagogy',
    meta: '2025 – Present · University of Florida · RA',
    badge: { label: 'In Progress', cls: 'bdg-purple' },
    desc: `Conducting usability testing with K-12 math teachers to refine tool prototypes. Co-constructing surveys to inform LLM-driven assessment generation design.`
  },
  {
    title: 'Digital Learning Lab: Converse to Learn',
    meta: '2024 – 2025 · Harvard University · RA',
    badge: { label: 'Completed', cls: 'bdg-teal' },
    desc: `Evaluated children's understanding of computational thinking through qualitative coding of posttest responses in the Converse to Learn program.`
  },
  {
    title: 'Belong-Centered Instruction',
    meta: '2024 – 2025 · University of Michigan · RA',
    badge: { label: 'Completed', cls: 'bdg-teal' },
    desc: `Analyzed virtual coaching effectiveness in secondary math classrooms. Reconciled findings on how coaching structures impact teacher-student relationships and belonging.`
  }
];

export const publications = [
  {
    type: 'Journal Article',
    title: 'Belonging in Action: Nurturing a Learning Ecosystem for Mathematics Coaches, Teachers, and Students',
    authors: 'Matsko, K., Jennings, A., Zhu, J., Gao, X., et al.',
    journal: 'Under Review',
    year: '2026'
  },
  {
    type: 'Presentation',
    title: 'Generative AI Scaffolding for K-12 Inquiry-Based STEM Learning Across Levels',
    authors: 'Gao, X.',
    journal: 'National AI Literacy Day @ UF',
    year: '2026'
  },
  {
    type: 'Presentation',
    title: 'Chunk it up: Transforming Canvas with Smart Design',
    authors: 'Gao, X.',
    journal: 'Michigan Canvas Users Conference',
    year: '2024'
  }
];

export const teaching = {
  courses: [
    {
      semester: 'Summer 2026',
      items: [
        {
          title: 'EME2040: Introduction to Educational Technology',
          meta: 'Instructor · University of Florida',
          badges: [
            { label: 'Online', cls: 'bdg-rose' },
          ],
          desc: 'Instructing 30 online students on digital literacy and tech integration.'
        }
      ]
    },
    {
      semester: 'Spring 2026',
      items: [
        {
          title: 'EME2040: Introduction to Educational Technology',
          meta: 'Instructor · University of Florida',
          badges: [
            { label: 'Online', cls: 'bdg-rose' },
            { label: 'In-person', cls: 'bdg-purple' },
          ],
          desc: 'Instructing 33 online and 18 in-person students on digital literacy and tech integration.'
        }
      ]
    },
    {
      semester: 'Fall 2025',
      items: [
        {
          title: 'EME3319: Design and Development of Educational Multimedia',
          meta: 'Instructor · University of Florida',
          badges: [{ label: 'Online', cls: 'bdg-rose' }],
          desc: 'Focused on multimedia learning principles and creating interactive digital assets.'
        },
        {
          title: 'EME2040: Introduction to Educational Technology',
          meta: 'Instructor · University of Florida',
          badges: [{ label: 'Online', cls: 'bdg-rose' }],
          desc: 'Guided 28 students in critically evaluating and integrating technology in their fields.'
        }
      ]
    },
    {
      semester: 'Spring 2023',
      items: [
        {
          title: 'Student Teacher: U.S. & World History',
          meta: 'East Kentwood High School · Kentwood, MI',
          badges: [
            { label: 'K-12 Experience', cls: 'bdg-amber' },
            { label: 'In-person', cls: 'bdg-purple' },
          ],
          desc: 'Planned and taught four History classes with 10-15 EAL students and managed a Civics class of 30 mainstream students. Focused on assessing student learning experiences and outcomes.'
        }
      ]
    }
  ],
};

export const skills = {
  methods: [
    {
      label: 'Qualitative & Systematic',
      iconBg: 'var(--clr-purple-bg)',
      iconColor: 'var(--clr-purple)',
      chips: ['Thematic Analysis', 'Qualitative Coding', 'Systematic Review', 'Usability Testing']
    },
    {
      label: 'Quantitative & Analytics',
      iconBg: 'var(--clr-teal-bg)',
      iconColor: 'var(--clr-teal)',
      chips: ['Learning Analytics', 'Educational Data Mining', 'Statistical Analysis']
    }
  ],
  tools: [
    {
      label: 'Development',
      chips: ['JavaScript', 'Svelte', 'Tailwind CSS', 'Python', 'HTML/CSS', 'MySQL']
    },
    {
      label: 'Research & Design',
      chips: ['R', 'Dedoose', 'Figma', 'Adobe Illustrator', 'Canvas LMS', 'OpenEdX']
    }
  ],
  awards: [
    {
      title: 'Marsal Family School of Education Excellence Award',
      meta: '2023 – 2024 · University of Michigan',
      badge: { label: '$39,000', cls: 'bdg-teal' },
      desc: 'Full-tuition merit award recognizing excellence in educational studies and design technology.'
    },
    {
      title: 'School of Teaching and Learning Travel Award',
      meta: '2026 · University of Florida',
      badge: { label: 'Awarded', cls: 'bdg-accent' },
      desc: 'Support for presenting research on Generative AI scaffolding at National AI Literacy Day.'
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// LXD Fellowship — Center for Academic Innovation, University of Michigan
// ─────────────────────────────────────────────────────────────────────────────

export const lxdIntro = {
  title: 'Learning Experience Design Fellow',
  subtitle: 'Center for Academic Innovation · University of Michigan',
  description: `This section showcases experiences and artifacts from my journey as a Learning Experience Design (LXD) fellow.
    Each course is accompanied by a course summary, my responsibilities, tools used, and selected metadata.
    Each artifact is accompanied by a description, my role in its construction, the LXD competencies
    addressed, and a rationale explaining how those competencies were met.`,
  competenciesUrl: 'https://docs.google.com/document/d/1BZV1vVAVQu3h3nXQVjcRpA5ayveVpnFDtTq3zhSWvmk/edit?tab=t.0',
};

export const lxdCategories = [
  { id: '*', label: 'All' },
  { id: 'theories', label: 'Applying Learning Theories & Design Frameworks' },
  { id: 'creation', label: 'Creating Design Resources & Documentation' },
  { id: 'relationships', label: 'Fostering Workplace Skills & Professional Relationships' },
  { id: 'inclusive', label: 'Integrating Inclusive Design Principles' },
  { id: 'affordances', label: 'Technology Affordances & Constraints' },
  { id: 'research', label: 'Research & Evaluation Skills' },
];

export const lxdTagColor = {
  creation: 'bdg-purple',
  theories: 'bdg-teal',
  research: 'bdg-amber',
  inclusive: 'bdg-rose',
  affordances: 'bdg-accent',
  relationships: 'bdg-blue',
};

export const lxdArtifacts = [
  {
    id: 'module-outline',
    title: 'Module Detail Outline',
    image: 'https://portfolio-xin.s3.amazonaws.com/photos/detailedOutlineModule2.png',
    link: 'https://docs.google.com/spreadsheets/d/1Y4caeaohhtTolSESeab_KIUH-einM4BhXl_AcFauOPk/edit?usp=sharing',
    tags: ['creation', 'affordances', 'research'],
    description: `A detailed outline for one of the six modules of the MOOC. Its goal is to guide the
      advancement of the course and create common ground for the LXD team and the faculty team to
      embed course resources.`,
    role: `Used resources such as former syllabi, course-packs, and referenced readings to construct
      a module outline that fits the flow of the content — considering opportunities for learners to
      reflect, interact with peers through discussion prompts, and engage with assessments aligned to
      learning objectives.`,
    competencies: [
      {
        label: 'Creating Design Resources & Documentation',
        detail: `Compiling relevant information from reference books and syllabi, I developed a
          comprehensive guide serving as a resource for both learners and instructors, aiding in the
          organisation and systematisation of course content.`,
      },
      {
        label: 'Technology Affordances & Constraints',
        detail: `Incorporating multimedia features supported by Coursera demonstrates proficiency in
          leveraging platform capabilities — integrating videos, interactive quizzes, and discussion
          forums to optimise learner engagement and comprehension.`,
      },
      {
        label: 'Research & Evaluation Skills',
        detail: `Selecting appropriate excerpts from reference books and including varied assessment
          activities aligned to learning objectives, drawing on Backward Design Principles to ensure
          instructional validity.`,
      },
    ],
  },
  {
    id: 'mcq',
    title: 'Assessment: Multiple Choice Questions',
    image: 'https://portfolio-xin.s3.amazonaws.com/photos/multipleChoiceQuestions.jpg',
    link: 'https://docs.google.com/document/d/1ROZBr8qAylc3ccPyuH2Y8YdmVLcd7naKDCyzHixxZdI/edit?usp=sharing',
    tags: ['creation', 'theories', 'research'],
    description: `A summative assessment following a lecture, meticulously designed to assess
      learners' comprehension of learning objectives. Crafted to ensure questions are accessible
      and easy to read.`,
    role: `Curated assessment activities to align with the module's learning objectives and provide
      examples for the faculty team to develop their own questions.`,
    competencies: [
      {
        label: 'Applying Learning Theories & Design Frameworks',
        detail: `Aligned each question with specific learning outcomes, incorporating principles of
          cognitive and affective taxonomies to prompt learners to engage with and apply their knowledge.`,
      },
      {
        label: 'Research & Evaluation Skills',
        detail: `Each question was carefully constructed to ensure validity and reliability, drawing
          on evidence-based practices in assessment design and Backward Design Principles.`,
      },
      {
        label: 'Creating Design Resources & Documentation',
        detail: `Generated objectives, templates, and documentation (slides and scripts) to support
          the development and implementation of assessments within the module.`,
      },
    ],
  },
  {
    id: 'paraphrase',
    title: 'Reading: Paraphrased Article',
    image: 'https://portfolio-xin.s3.amazonaws.com/photos/paraphraseArticle.jpg',
    link: 'https://docs.google.com/document/d/1ALjcUzDgVcFzPcy6ffGHAYg_RbXayTiwJXrZ0eD6ZRI/edit?usp=sharing',
    tags: ['theories', 'research'],
    description: `A concise summary derived from a reference chapter, focusing on a specific topic
      within the objectives of interest. Presents key ideas in condensed form while maintaining
      clarity and coherence.`,
    role: `Reviewed the reference chapter and extracted main points to create the paraphrased article,
      ensuring clear and accessible language while preserving the essence of the original content.`,
    competencies: [
      {
        label: 'Applying Learning Theories & Design Frameworks',
        detail: `Applied knowledge of learning theories to distill main concepts into a concise summary,
          articulating key ideas effectively for the target audience.`,
      },
      {
        label: 'Research & Evaluation Skills',
        detail: `Critically analysed the reference chapter to identify salient points and arguments,
          demonstrating proficiency in evaluating and synthesising academic literature.`,
      },
    ],
  },
  {
    id: 'discussion',
    title: 'Reading: Discussion Prompt',
    image: 'https://portfolio-xin.s3.amazonaws.com/photos/discussionPrompt.jpg',
    link: 'https://docs.google.com/document/d/10iCD3MtxIGWL1jokVJt9-qnnHzOBERoQLWsd5L40qKk/edit?usp=sharing',
    tags: ['creation', 'affordances', 'research'],
    description: `A discussion prompt that encourages learners to reflect on perspectives presented
      in the chosen article regarding the definition and nature of real estate development, while
      fostering peer interaction.`,
    role: `Crafted the prompt to stimulate meaningful dialogue and reflection, synthesising key
      points from the reading and framing questions that cater to the reading objective, emphasising
      peer interaction.`,
    competencies: [
      {
        label: 'Creating Design Resources & Documentation',
        detail: `Crafted thought-provoking questions with clear instructions, creating a structured
          framework for facilitating discussion within the module.`,
      },
      {
        label: 'Technology Affordances & Constraints',
        detail: `Ensured the discussion prompt is compatible with the digital learning platform,
          leveraging discussion forums and considering accessibility constraints.`,
      },
      {
        label: 'Research & Evaluation Skills',
        detail: `Drawing on Miles et al. (2015), designed questions that encourage critical analysis
          and formative self-assessment through peer review.`,
      },
    ],
  },
  {
    id: 'slides',
    title: 'Lecture: Slides',
    embed: 'https://docs.google.com/presentation/d/e/2PACX-1vR4ZfOINVAewTjBqA5aXXEdVnvcDRh6FMQJwXaxxbZSccmDYBl5NxR_C0h5YfpJg_1tgGqcs0VC0pjn/embed?start=false&loop=false&delayms=3000',
    link: 'https://docs.google.com/presentation/d/1Rot9Q8D1A3P2d6pCujl32b0TO7Rxf1DydUw6b7eGt6c/edit?usp=sharing',
    tags: ['creation', 'inclusive', 'research'],
    description: `A slideshow presentation for a lecture corresponding with learning objectives.
      Visually illustrates key concepts and definitions to complement video recordings and enhance
      learner engagement.`,
    role: `Designed the slideshow in alignment with lecture content, selecting appropriate visual
      elements to convey abstract concepts, with clear logical structure and headings.`,
    competencies: [
      {
        label: 'Creating Design Resources & Documentation',
        detail: `Synthesised lecture content into visually engaging slides, providing learners with a
          resource that complements recordings and supports comprehension of key concepts.`,
      },
      {
        label: 'Integrating Inclusive Design Principles',
        detail: `Prioritised colour-contrasting, content alignment, and strategic use of text
          decorations (italics, bold) to ensure accessibility across diverse learner audiences.`,
      },
      {
        label: 'Research & Evaluation Skills',
        detail: `Drew on principles of visual accessibility and cognitive load theory, and solicited
          iterative feedback from LXD mentors to improve the design.`,
      },
    ],
  },
  {
    id: 'eight-stages',
    title: 'Material: Eight-Stages Image',
    embed: 'https://drive.google.com/file/d/1anN8diBfC3_7TImop0xqSfjBxLRJwSZ_/preview',
    link: 'https://drive.google.com/file/d/1anN8diBfC3_7TImop0xqSfjBxLRJwSZ_/view?usp=sharing',
    tags: ['creation', 'inclusive', 'relationships', 'research'],
    description: `An image depicting the Eight-Stage Model of Real Estate Development, illustrating
      the sequential (and iterative) process from initial ideation to property management. Serves as
      a visual aid for understanding the non-linear nature of real estate development.`,
    role: `Designed the image based on readings and the original visual representation, incorporating
      accessibility principles and collaborating with LXD and the accessibility team to revise tags
      for voice-over learners.`,
    competencies: [
      {
        label: 'Creating Design Resources & Documentation',
        detail: `Designed a visual aid based on readings and existing representations, serving as a
          valuable resource to enhance learner comprehension of development stages.`,
      },
      {
        label: 'Integrating Inclusive Design Principles',
        detail: `Incorporated accessibility principles to ensure the image is accessible to all
          learners, including those requiring voice-over assistance.`,
      },
      {
        label: 'Fostering Workplace Skills & Professional Relationships',
        detail: `Collaborated with the LXD and accessibility teams to solicit feedback and revise
          tags for learners requiring alternative formats — exemplifying effective stakeholder collaboration.`,
      },
    ],
  },
  {
    id: 'listing',
    title: 'Material: Real Estate Listing',
    embed: 'https://drive.google.com/file/d/1qApOhb63T2-Sn5bIHIYc-S_d3TYlVj0S/preview',
    link: 'https://drive.google.com/file/d/1anN8diBfC3_7TImop0xqSfjBxLRJwSZ_/view?usp=sharing',
    tags: ['creation', 'inclusive', 'affordances', 'research'],
    description: `A real estate listing template designed to familiarise students with typical
      features and components of real estate listings, including property details, description,
      images, and contact information.`,
    role: `Designed the template in Adobe Illustrator, creating an effective layout, selecting
      appropriate fonts and colours for readability, and incorporating copyright-compliant graphics.`,
    competencies: [
      {
        label: 'Creating Design Resources & Documentation',
        detail: `Designed a visually appealing and informative template, providing students with a
          resource to practice analysing and interpreting real estate listings.`,
      },
      {
        label: 'Integrating Inclusive Design Principles',
        detail: `Ensured the template is accessible to all students using clear, legible fonts and
          a logical, intuitive information hierarchy.`,
      },
      {
        label: 'Technology Affordances & Constraints',
        detail: `Leveraged Adobe Illustrator's features — shapes, text boxes, and styles — to
          effectively communicate property information within the template.`,
      },
    ],
  },
];


export const interests = {
  quote: {
    text: '"The best researchers are curious people first."',
    source: 'Replace with a quote that resonates with you — or remove this block.',
  },
  cards: [
    {
      title: '[Community organising]',
      desc: '[A sentence or two on how this connects to your values or influences your research perspective.]',
      iconBg: 'var(--clr-purple-bg)',
      iconPath: `<path d="M4 16V8l6-5 6 5v8a1 1 0 01-1 1H5a1 1 0 01-1-1z" stroke="var(--clr-purple)" stroke-width="1.3"/><path d="M8 17v-5h4v5" stroke="var(--clr-purple)" stroke-width="1.3"/>`,
    },
    {
      title: '[Travel & fieldwork]',
      desc: '[I have lived and worked in X countries, which shaped how I think about cross-cultural learning contexts.]',
      iconBg: 'var(--clr-teal-bg)',
      iconPath: `<path d="M10 3C6.7 3 4 5.7 4 9c0 4 6 9 6 9s6-5 6-9c0-3.3-2.7-6-6-6z" stroke="var(--clr-teal)" stroke-width="1.3"/><circle cx="10" cy="9" r="2" stroke="var(--clr-teal)" stroke-width="1.3"/>`,
    },
    {
      title: '[Open-source tools]',
      desc: '[I contribute to open educational resource projects and believe in tools that put educators in control.]',
      iconBg: 'var(--clr-amber-bg)',
      iconPath: `<path d="M5 10h10M10 5v10" stroke="var(--clr-amber)" stroke-width="1.5" stroke-linecap="round"/><circle cx="10" cy="10" r="7" stroke="var(--clr-amber)" stroke-width="1.3"/>`,
    },
    {
      title: '[Fiction & storytelling]',
      desc: '[I read widely across speculative fiction and narrative nonfiction, and think a lot about how stories structure meaning.]',
      iconBg: 'var(--clr-rose-bg)',
      iconPath: `<path d="M10 4c-3.5 0-5 2-5 4 0 3 5 8 5 8s5-5 5-8c0-2-1.5-4-5-4z" stroke="var(--clr-rose)" stroke-width="1.3"/>`,
    },
    {
      title: '[Podcast hosting]',
      desc: '[I co-host a podcast on education futures, featuring conversations with researchers, teachers, and policymakers.]',
      iconBg: 'var(--clr-blue-bg)',
      iconPath: `<rect x="3" y="5" width="14" height="11" rx="2" stroke="var(--clr-blue)" stroke-width="1.3"/><path d="M7 5V4a3 3 0 016 0v1" stroke="var(--clr-blue)" stroke-width="1.3"/>`,
    },
    {
      title: '[Running & endurance sport]',
      desc: '[Training for long-distance events keeps me disciplined and gives me space to think through research problems.]',
      iconBg: 'var(--clr-sage-bg)',
      iconPath: `<circle cx="10" cy="10" r="7" stroke="var(--clr-sage)" stroke-width="1.3"/><path d="M7 10l2 2 4-4" stroke="var(--clr-sage)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
  ],
  currently: [
    { label: 'Reading', val: '[Book title]', sub: 'by [Author]' },
    { label: 'Listening to', val: '[Podcast or album]', sub: '[Channel or artist]' },
    { label: 'Learning', val: '[Skill or tool]', sub: '[Platform or context]' },
    { label: 'Thinking about', val: '[An idea or project]', sub: 'Outside the dissertation' },
  ],
};

export const courseraStats = [
  { n: '3+', label: 'Coursera Courses contributed to' },
  { n: '5+', label: 'For-credit courses contributed to' },
  { n: '20+', label: 'Modules designed' },
];

export const courseraCourses = [
  {
    id: 'course-1',
    title: 'DHYGRACK 693: Research Methods & Applications',
    platform: 'Canvas',
    institution: 'University of Michigan',
    // url: 'https://www.coursera.org/specializations/navigating-disruption-generative-ai-in-the-workplace',
    thumbnail: '',
    period: '2024-2025',
    status: 'Published',
    type: 'For-Credit',
    learners: '',
    // rating: '4.8 / 5',
    summary: `A 16-week for-credit course that provides a foundational introduction to research methods in health disciplines, guiding students through research design, critical reading, and practical application of research tools across the full research process.`,

    responsibilities: [
      'Supported the creation of instructional content, including module structures, learning objectives, and assessment strategies aligned with course outcomes.',
      'Utilized front-end components (HTML/CSS) and Cidi Labs to improve usability, accessibility, and learner experience.',
      'Assisted in course implementation and content organization within Canvas.',
    ],

    tools: [
      'Teachable Machine',
      'Coursera Authoring Platform',
      'Google Suite',
      'Instructional design frameworks',
    ],
  },
  {
    id: 'course-2',
    title: 'Navigating Disruption: Generative AI in the Workplace',
    platform: 'Coursera',
    institution: 'University of Michigan',
    url: 'https://www.coursera.org/specializations/navigating-disruption-generative-ai-in-the-workplace',
    thumbnail: '',
    period: '2024',
    status: 'Published',
    type: 'Certification',
    learners: '',
    rating: '4.8 / 5',
    summary: `A multi-course specialization examining how generative AI is reshaping work, organizations, and labor markets. The series introduces foundational concepts, explores task-level impacts, and addresses ethical, policy, and workforce implications of AI adoption.`,

    responsibilities: [
      'Supported the creation of instructional content, including module structures, learning objectives, and assessment strategies aligned with course outcomes.',
      'Developed and refined quiz questions, discussion prompts, and applied learning activities to support conceptual understanding of AI in workplace contexts.',
      'Assisted in course implementation and content organization within the Coursera authoring platform.',
    ],

    tools: [
      'Teachable Machine',
      'Coursera Authoring Platform',
      'Google Suite',
      'Instructional design frameworks',
    ],
  },

  {
    id: 'course-3',
    title: 'Stamps Pre-College Anytime',
    platform: 'Coursera',
    institution: 'University of Michigan',
    url: 'https://online.umich.edu/courses/artsculture101/',
    thumbnail: '',
    period: '2023',
    status: 'Published',
    type: 'Certification',
    rating: 'unpublished',
    summary: `An introductory course examining the role of arts and culture in society, with a focus on access, interpretation, and public engagement.`,

    responsibilities: [
      'Customized course banner, layouts, and front-end components (HTML/CSS) to improve usability, visual hierarchy, and learner experience.',
      'Assisted in designing accessible learning materials for diverse learner audiences.',
      'Contributed to content organization and course structure within the online learning platform.',
    ],

    tools: [
      'Abode Illustrator',
      'Figma',
      'HTML',
      'CSS',
      'edX'
    ],
  },
];

export const contact = [
  { label: 'Email', href: 'mailto:gaoxintian@ufl.edu' },
  // { label: 'ORCID', value: '0000-0000-0000-0000', href: 'https://orcid.org/0000-0000-0000-0000' },
  { label: 'LinkedIn', href: 'http://linkedin.com/in/xintian-gao-edtech' },
  { label: 'GitHub', href: 'https://github.com/xintiangao' },
  // { label: 'ResearchGate', href: 'https://researchgate.net' },
];
