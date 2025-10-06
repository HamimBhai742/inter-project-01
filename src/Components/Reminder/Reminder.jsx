import React from 'react';

const Reminder = () => {
  return (
    <div className='px-8'>
      <h1 className='text-[#333333] text-center font-bold text-4xl'>
        ডেইলি রিমেইন্ডার
      </h1>
      <div className='my-6 flex gap-4'>
        <div className='border-2 border-[#737373] p-5 rounded-xl'>
          <figure>
            <img src='/public/Picture.png' alt='' />
          </figure>
          <h4 className='text-[#333333] font-bold text-xl'>৪০ হাদিস</h4>
          <p className='text-gray-700 font-medium leading-7  mt-2 '>
            আবূ হুরায়রা রাদিয়াল্লাহু ’আনহু হতে বর্ণিত হয়েছে, তিনি
            বলেন-রাসূলুল্লাহ্ সাল্লাল্লাহু ’আলাইহি ওয়াসাল্লাম বলেছেন: “অনর্থক
            অপ্রয়োজনীয় বিষয় ত্যাগ করাই একজন ব্যক্তির উত্তম ইসলাম।”
          </p>
          <p className='text-gray-700 font-medium  mt-2 '>
            [হাদীসটি হাসান। তিরমিযী: ২৩১৮, ইবনু মাজাহ: ৩৯৭৬]
          </p>
        </div>
        <div className='border-2 border-[#737373] p-5 rounded-xl'>
          <figure>
            <img src='/public/image 14.png' alt='' />
          </figure>
          <h4 className='text-[#333333] font-bold text-xl'>আজকের দোয়া</h4>
          <p className='text-gray-700 font-medium  mt-2 leading-7 '>
            প্রয়োজনীয় চাহিদা মেটাতে আল্লাহর অনুগ্রহ পাওয়ার জন্য মূসা (আঃ) এর
            দোয়া [২৮:২৪] رَبِّ اِنِّىۡ لِمَاۤ اَنۡزَلۡتَ اِلَىَّ مِنۡ خَيۡرٍ
            فَقِيۡرٌ‏ হে আমার রব, নিশ্চয় আপনি আমার প্রতি যে অনুগ্রহই নাযিল
            করবেন, আমি তার মুখাপেক্ষী
          </p>
        </div>
        <div className='border-2 border-[#737373] p-5 rounded-xl'>
          <figure>
            <img src='/public/image 15.png' alt='' />
          </figure>
          <h4 className='text-[#333333] font-bold text-xl'>আজকের হাদিস</h4>
          <p className='text-gray-700 font-medium  mt-2 leading-7'>
            রাসূল (সাল্লাল্লাহু ‘আলাইহি ওয়াসাল্লাম) বলেছেন, ‘তোমাদের মধ্যে সে
            ব্যক্তিই সর্বপেক্ষা উত্তম, যে চরিত্রের দিক দিয়ে উত্তম’ (বুখারী,
            মুসলিম, মিশকাত হা/৫০৭৫)।
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='border-2 text-lg font-medium border-[#066F4A] py-4 px-6 rounded-xl'>
          আরো দেখুন...
        </button>
      </div>
    </div>
  );
};

export default Reminder;
