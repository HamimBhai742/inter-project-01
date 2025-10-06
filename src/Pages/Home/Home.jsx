import BookSection from '../../Components/Book/BookSection';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Reminder from '../../Components/Reminder/Reminder';

const Home = () => {
  return (
    <div className=''>
      <HeaderSection />
      <div className=' mt-8'>
        <HeroSection />
      </div>
      <div className='my-10'>
        <BookSection />
      </div>
      <div>
        <Reminder />
      </div>
    </div>
  );
};

export default Home;
