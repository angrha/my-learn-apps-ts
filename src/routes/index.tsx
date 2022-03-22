import ClassesPage from '../containers/ClassesPage';

interface Routes {
  path: string,
  name: string,
  element: any,
}

const routes:Routes[] = [
  { path: '/', name: 'ClassesPage', element: ClassesPage },	
];

export default routes;