import Navbar from './components/Common/Navbar';
import './assets/css/style.css';
import './assets/css/Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Apps from './components/Apps';


function App() {
  return (
    <div className='bg-1'>
      <Navbar />
      <Home />
      <Apps />
    </div>
  );
}

export default App;
