import { Home, Slider, Table } from '../pages';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider,
  },
  {
    path: '/clients',
    name: 'Table',
    component: Table,
  }, 
];

export default routes;
