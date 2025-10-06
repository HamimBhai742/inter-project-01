import React from 'react';

const SubBasedHadis = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <h1 className='text-[#333333] text-center font-bold text-4xl'>
        বিষয়ভিত্তিক হাদিস
      </h1>
      <p className='text-gray-700 text-center mx-auto font-medium w-[650px] my-4 text-xl'>
        বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ দ্বারা
        নয় বরং বিষয় অনুসারে সজ্জিত। এর মাধ্যমে ইসলামের নির্দিষ্ট বিষয়গুলোর
        উপর সহজে জ্ঞানার্জন সম্ভব হয়। এই সঙ্কলন আলেমগণ ও শিক্ষকদের জন্যও সহায়ক
        হতে পারে যারা নির্দিষ্ট বিষয়ে শিক্ষা প্রদান করতে চাইছেন।
      </p>

      <div className='grid grid-cols-3 gap-5 mx-8'>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>আকিদা</h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ৭
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (6).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>ঈমান</h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ৫
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (7).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>পবিত্রতা</h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ১২
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (8).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>হাদিসের গল্প</h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ৩১
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (11).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76] flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>সালাত</h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ৩৮
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (9).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>দান সদকাহ</h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ১
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (10).png' alt='' />
          </figure>
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <button className='bg-[#2B9E76] text-white flex items-center gap-2 px-4 py-3 rounded-lg'>
          <img src='/public/Frame (5).svg' alt='' />
          <span>সকল ক্যাটাগরি দেখুন</span>
          <img src='/public/Frame (4).svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default SubBasedHadis;
