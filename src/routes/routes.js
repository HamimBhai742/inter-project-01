import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Hadis from '../Pages/Hadis/Hadis';
import OurProject from '../Pages/OurProject/OurProject';
import HadisGrantho from '../Pages/HadisGrontho/HadisGrantho';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
       Component: Home
      },
      {
        path: '/hadis',
        Component: Hadis
      },
      {
        path: '/our-projects',
        Component: OurProject
      },
      {
        path: '/hadis-grontho',
        Component: HadisGrantho
      }
    ]
  },
]);
