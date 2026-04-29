// src/lib/data.js

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

export const contact = [
  { label: 'Email', href: 'mailto:gaoxintian@ufl.edu' },
  // { label: 'ORCID', value: '0000-0000-0000-0000', href: 'https://orcid.org/0000-0000-0000-0000' },
  { label: 'LinkedIn', href: 'http://linkedin.com/in/xintian-gao-edtech' },
  { label: 'GitHub', href: 'https://github.com/xintiangao' },
  // { label: 'ResearchGate', href: 'https://researchgate.net' },
];
