import React from 'react';

const HeroSection = () => {
  return (
    <section className='bg-[#DCF2E9] mx-auto border-2 border-[#2B9E76] w-[1280px] flex justify-between items-center rounded-lg'>
      <div className='p-4'>
        <div className='img2 w-[180px] h-[320px] border-2 border-[#121515]'></div>
      </div>

      <div>
        <h3 className='text-[#333333] font-bold text-2xl'>
          আল হাদিস সাইটে আপনাকে স্বাগতম
        </h3>
        <p className='text-gray-700 font-medium w-[450px] my-4 text-xl'>
          আল হাদিস এপের মাধ্যমে হাদিস পড়া, বুকমার্ক, অনলাইন সিংকিং সহ আর ও অনেক
          কিছু সহজেই পারবেন।
        </p>
        <h3 className='text-black font-bold text-2xl'>ডাউনলোড করুন</h3>
        <h3 className='text-black font-bold text-2xl'>আল হাদিস মোবাইল আপ</h3>
        <div className=' mt-5'>
          <figure className='flex gap-4'>
            <img src='/apple.svg' alt='' />
            <img src='/Group.svg' alt='' />
          </figure>
        </div>
      </div>
      <div className='flex gap- overflow-clip'>
        <figure>
          <img
            src='/bfb9ff06f064f11e516a25928ba8bb302d6b66f6.png'
            alt=''
            className='w-[250px] h-[320px] -rotate-20 object-contain'
          />
        </figure>
        <figure>
          <img
            src='/6d545d7ec6a36ad58c03aa14047a017c432a762a.png'
            alt=''
            className='w-[220px] h-[320px] -rotate-20'
          />
        </figure>

        {/* <div className='img w-[280px] h-[320px] -rotate-20'></div>
        <div className='img1 w-[80px] h-[320px] -rotate-20'></div> */}
      </div>
    </section>
  );
};

export default HeroSection;
