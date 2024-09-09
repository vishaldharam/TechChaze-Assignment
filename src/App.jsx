import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    // Desktop View
   <div className='bg-[#F8F6E4]  w-screen '>
    <div className='max-w-screen-2xl  mx-auto xl:pl-24   px-6 '>
        <Navbar/>
    </div>
   </div>
  );
}

export default App;
