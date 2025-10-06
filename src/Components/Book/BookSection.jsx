import React from 'react';

const BookSection = () => {
  return (
    <div>
      <h3 className='text-[#333333] text-center font-bold text-4xl'>
        হাদিসের বইসমূহ
      </h3>
      <p className='text-gray-700 text-center mx-auto font-medium w-[650px] my-4 text-xl'>
        হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি
        গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া
        সালাম)-এর সীরাত(জীবনী) ও দিক-নির্দেশনার প্রতি অন্তর্দৃষ্টি প্রদান করে।
      </p>
      <div className='grid grid-cols-3 gap-5 mx-8'>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>সহীহ বুখারী</h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ৭০৫৩
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1.png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>সহীহ মুসলিম</h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ৭৪৫৩
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (1).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>
              সুনানে আবু দাউদ
            </h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ৫২৭৪
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (2).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>
              জাল যয়ীফ হাদিস সিরিজ
            </h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ১০২
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (3).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76] flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>
              মুয়াত্তা ইমাম মালিক{' '}
            </h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ১৮৩২
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (4).png' alt='' />
          </figure>
        </div>
        <div className='bg-[#EEF9F8] border-2 border-[#2B9E76]  flex justify-between items-center rounded-lg p-3'>
          <div>
            <h3 className='text-[#333333] font-bold text-xl'>
              সুনানে ইবনে মাজাহ
            </h3>
            <p className='text-gray-700 font-medium  mt-2 text-xl'>
              হাদিসের রেঞ্জ ৪৩৪১
            </p>
          </div>
          <figure>
            <img src='/public/Rectangle 1 (5).png' alt='' />
          </figure>
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <button className='bg-[#2B9E76] text-white flex items-center gap-2 px-4 py-3 rounded-lg'>
          <img src='/public/Frame (3).svg' alt='' />
          <span>সকল হাদিস গ্রন্থসমূহ</span>
          <img src='/public/Frame (4).svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default BookSection;
