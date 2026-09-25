export const quickInfo = [
  { label: 'Full Name', value: 'Nguyen The Phong' },
  {
    label: 'University',
    value: 'Posts and Telecommunications Institute of Technology (PTIT)',
  },
  { label: 'Major', value: 'Information Security' },
  { label: 'Status', value: 'Fourth-year Student' },
  { label: 'Location', value: 'Hanoi, Vietnam' },
  {
    label: 'Email',
    value: 'phong245ntp@gmail.com',
    href: 'mailto:phong245ntp@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/the-phong',
    href: 'https://github.com/the-phong',
    external: true,
  },
]

export const skillGroups = [
  {
    id: 'development',
    label: 'Development',
    skills: [
      { name: 'HTML', emphasis: 'small' },
      { name: 'CSS', emphasis: 'small' },
      { name: 'JavaScript', emphasis: 'large' },
      { name: 'React', emphasis: 'medium' },
      { name: 'Node.js', emphasis: 'medium' },
      { name: 'Java', emphasis: 'small' },
      { name: 'Python', emphasis: 'medium' },
      { name: 'C/C++', emphasis: 'small' },
      { name: 'SQL', emphasis: 'small' },
    ],
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    skills: [
      { name: 'OWASP', emphasis: 'medium' },
      { name: 'Cryptography', emphasis: 'small' },
      { name: 'Security Testing', emphasis: 'small' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', emphasis: 'small' },
      { name: 'GitHub', emphasis: 'small' },
      { name: 'Docker', emphasis: 'small' },
      { name: 'Linux', emphasis: 'small' },
      { name: 'VS Code', emphasis: 'small' },
      { name: 'Burp Suite', emphasis: 'small' },
    ],
  },
]

export const interests = [
  'Sports',
  'Music',
  'Gaming',
  'Technology',
  'Travelling',
  'Reading',
  'Gym',
  'Movies',
  'Photography',
]

export const journeyItems = [
  {
    stage: 'Foundation',
    title: 'Building a programming mindset',
    description:
      'I developed my foundation through programming and technical problem solving, gradually learning how to break problems into smaller and more manageable parts.',
  },
  {
    stage: 'University',
    title: 'Studying Information Security at PTIT',
    description:
      'My studies have given me exposure to cybersecurity concepts while I continued strengthening my development skills through coursework and independent practice.',
  },
  {
    stage: 'Practice',
    title: 'Learning through real projects',
    description:
      'From building a Python Caro game to experimenting with post-quantum algorithms on blockchain workflows, projects have become an important part of how I learn.',
  },
  {
    stage: 'Now',
    title: 'Strengthening development and cybersecurity skills',
    description:
      'As a fourth-year student, I am focused on becoming more capable at building practical software while improving the security knowledge needed to understand and protect the systems I work with.',
  },
]

export const projects = [
  {
    name: 'Caro Game with Python',
    repository: 'https://github.com/the-phong/Game_Caro',
    description:
      'A Pygame-based Caro game supporting two-player and player-vs-bot modes, including win detection, restart controls, and a simple bot that blocks threats and chooses moves near existing pieces.',
    technologies: ['Python', 'Pygame', 'Game Logic'],
  },
  {
    name: 'PQC Algorithm Comparison on Blockchain',
    repository: 'https://github.com/the-phong/pqc-algorithm-comparison-on-blockchain',
    description:
      'A structured demo suite for comparing post-quantum algorithms in blockchain-oriented workflows, covering ML-DSA, Falcon, SPHINCS+ and ML-KEM with shared contracts, off-chain proof storage, and verification flows.',
    technologies: ['Python', 'Solidity', 'Blockchain', 'Post-Quantum Cryptography'],
  },
]
