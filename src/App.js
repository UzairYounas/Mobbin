import './assets/css/style.css';
import './assets/css/Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Apps from './components/Apps';
import Screens from './components/Screens';
import IOS from './Pages/IOS'
import Elements from './components/Elements';
import Flows from './components/Flows';
import Android from './Pages/Android';
import WebApp from './components/WebApp';
import Pricing from './Pages/Pricing';
import Changelog from './Pages/Changelog';
import Changelogdetail from './components/Changelogdetail';
import Setting from './Pages/Setting';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IOS />,
  },
  {
    path: "/android",
    element: <Android />,
  },
  {
    path: "/Apps",
    element: <Apps />
  },
  {
    path: "/Screens",
    element: <Screens />
  },
  {
    path: "/Elements",
    element: <Elements />
  },
  {
    path: "/Flows",
    element: <Flows />
  },
  {
    path: "/Web",
    element: <WebApp />
  },
  {
    path: "/pricing",
    element: <Pricing />
  },
  {
    path: "/changelog",
    element: <Changelog />
  },
  {
    path: "/changelogdetail",
    element: <Changelogdetail />
  },
  {
    path: "/setting",
    element: <Setting />
  }

]);

function App() {
  return (
    <RouterProvider router ={router} />
  );
}

export default App;
