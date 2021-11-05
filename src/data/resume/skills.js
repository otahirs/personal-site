// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'English',
    competency: 5,
    category: ['Human stuff'],
  },
  {
    title: 'German',
    competency: 2,
    category: ['Human stuff'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Peep poop'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Peep poop'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Peep poop'],
  },
  {
    title: 'Python',
    competency: 1,
    category: ['Peep poop'],
  },
  {
    title: 'Rust',
    competency: 1,
    category: ['Peep poop'],
  },
  {
    title: 'J̶a̶v̶a̶',
    competency: 0,
    category: ['Peep poop'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
