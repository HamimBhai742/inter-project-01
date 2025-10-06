import React from 'react';

const Card = () => {
  return (
    <div className='bg-[#34AB821F] flex justify-between items-center rounded-lg py-4 pr-4 mx-14'>
      <div className='flex gap-4 items-center'>
        <figure className='-ml-14'>
          <img src='/image 6.png' alt='' />
        </figure>
        <p className='text-[#333333] text-2xl'>
          প্রতিদিন ইমেইলে হাদিস পেতে আমাদের সাবস্ক্রাইব করুন
        </p>
      </div>
      <div className='flex gap-2'>
        <input
          className='bg-white rounded-lg py-3 px-4 border-2 border-[#333333]'
          type='text'
          placeholder='Enter your email address'
        />
        <button className='bg-[#2FAA7B] rounded-lg py-3 px-4 text-white'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Card;
