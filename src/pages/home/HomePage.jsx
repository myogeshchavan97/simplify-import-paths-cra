import Navbar from 'components/navbar/Navbar';
import Sidebar from 'components/sidebar/Sidebar';

const HomePage = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default HomePage;
