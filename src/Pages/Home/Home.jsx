import BookSection from '../../Components/Book/BookSection';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Reminder from '../../Components/Reminder/Reminder';
import Card from '../../Components/Securibe/Card';
import SubBasedHadis from '../../Components/SubBasedHadis/SubBasedHadis';

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
      <div className='mt-8'>
        <Card />
      </div>
      <div className='mt-8'>
        <SubBasedHadis />
      </div>
    </div>
  );
};

export default Home;
