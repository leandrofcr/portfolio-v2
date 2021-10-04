import { triviaGame, cookmaster, onlineShop, amongUs } from '../images';

const projects = [
  {
    name: 'Trivia Game',
    description:
      'The Trivia Game project is a quiz game based on a quiz game using React and Redux, developed its functionalities according to the demands defined in a Kanban board.',
    image: triviaGame,
    url: 'https://leandrofcr.github.io/trivia-game/',
    tags: ['React', 'Redux', 'JavaScript', 'CSS3', 'react-spring']
  },
  {
    name: 'Cookmaster API',
    description:
      'Cookmaster is a API for registration and search of recipes, using JWT, Multer, MSC and REST architecture.',
    image: cookmaster,
    url: 'https://github.com/leandrofcr/cookmaster-api',
    tags: ['Node.js', 'API REST', 'JWT', 'Express.js', 'MSC']
  },

  {
    name: 'Online Store',
    description:
      'In this project, a simplified version was created, without persistence in the database, of an online store, according to the demands defined in a Kanban board, in a scenario closer to the labor market.',
    image: onlineShop,
    url: 'https://github.com/leandrofcr/online-store',
    tags: ['React', 'JavaScript', 'MercadoLivre API']
  },
  {
    name: 'Among Us Timer',
    description:
      'This project is a themed timer based on the Among us game, developed with React and styled to bring a similar immersion to the game. ',
    image: amongUs,
    url: 'https://leandrofcr.github.io/among-us-timer/',
    tags: ['React', 'JavaScript', 'CSS3']
  }
];

export default projects;
