import BookSection from '../../Components/Book/BookSection';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import HeroSection from '../../Components/HeroSection/HeroSection';

const Home = () => {
  return (
    <div className=''>
      <HeaderSection/>
      <div className=' mt-8'>
        <HeroSection/>
      </div>
      <div className='my-10'>
        <BookSection/>
      </div>
    </div>
  );
};

export default Home;