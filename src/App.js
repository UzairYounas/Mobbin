import Navbar from './components/Common/Navbar';
import './assets/css/style.css';
import './assets/css/Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import Apps from './components/Apps';
import Screens from './components/Screens';
import IOS from './Pages/IOS'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Elements from './components/Elements';
import Flows from './components/Flows';
import Android from './Pages/Android';

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
  }
]);

function App() {
  return (
    <RouterProvider router ={router} />
    // <div className='bg-1'>
    //   <Navbar />
    //   <Home />
    //   {/* <Apps /> */}
    //   {/* <Screens /> */}
    // </div>
  );
}

export default App;
