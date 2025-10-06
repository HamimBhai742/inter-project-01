import React from 'react';

const Footer = () => {
  return (
    <footer className=' p-6 bg-[#F9FAFB]'>
      <div className='flex gap-4 items-center'>
        <img src='/Frame.svg' alt='' />
        <span className='text-[#34AB82] text-2xl'>আল হাদিস</span>
      </div>
      <div className='flex justify-between mt-8'>
        <aside className='space-y-5'>
          <h3 className='text-[#333333] font-bold text-2xl'>
            হাদিস পড়ুন,শিখুন এবং জানুন
          </h3>
          <p className='w-[400px] text-[#626D7D]'>
            আমাদের লক্ষ্য ও উদ্দেশ্য হল সবচেয়ে উত্তম উৎস থেকে বিশুদ্ধ হাদীস
            সকলের জন্য উন্মুক্ত করে দেয়া। আমরা এই ওয়েবসাইটটি সর্বাধিক গুরুত্বের
            সাথে তৈরি করেছি যাতে যে কেউ সহজেই হাদিস শিখতে ও শিখাতে পারে। আমরা
            আপনাদের একান্ত সহযোগিতা চাই এই ওয়েবসাইটটি সহ আমাদের পুরো প্রজেক্টের
            পরিসর বাড়িয়ে এগিয়ে যেতে। আমাদের একটি মোবাইল অ্যাপ রয়েছে যাতে আপনি
            যেকোনো স্থানে যেকোন সময় স্বাচ্ছন্দ্যে হাদীস পড়তে পারেন।
          </p>
        </aside>
        <div className='space-y-5'>
          <h3 className='text-[#333333] font-bold text-2xl'>নেভিগেট</h3>
          <ul className='grid grid-cols-2 text-lg text-[#626D7D] gap-3'>
            <li>হাদিস গ্রন্থসমূহ</li>
            <li>বিষয়ভিত্তিক হাদিস</li>
            <li>প্রাইভেসি পলিসি</li>
            <li>সাপোর্ট করুন</li>
            <li>আমাদের প্রজেক্ট</li>
            <li>তাহকিক</li>
            <li>লেখক</li>
            <li>ফেসবুক পেইজ</li>
          </ul>
        </div>
        <div className='space-y-5'>
          <h3 className='text-[#333333] font-bold text-2xl'>
            আমাদের প্রজেক্টসমূহ
          </h3>
          <ul className='space-y-3'>
            <li className='flex text-lg text-[#626D7D] justify-between'>
              <span>আল হাদিস</span>
              <img src='/image 7.png' alt='' />
            </li>
            <li className='flex text-lg text-[#626D7D] justify-between'>
              <span>কুরআন মাজিদ</span>
              <img src='/image 8.png' alt='' />
            </li>
            <li className='flex text-lg text-[#626D7D] justify-between'>
              <span>দোয়া ও রুকাইয়াহ</span>
              <img src='/image 9.png' alt='' />
            </li>
            <li className='flex text-lg text-[#626D7D] justify-between'>
              <span>আইআরডি ফাউন্ডেশন</span>
              <img src='/image 10.png' alt='' />
            </li>
          </ul>
        </div>
        <div className='space-y-5'>
          <h3 className='text-[#333333] font-bold text-2xl'>
            জনপ্রিয় সাইটসমূহ
          </h3>
          <ul className='text-[#626D7D] text-lg space-y-3'>
            <li>quran.com</li>
            <li>sunnah.com</li>
            <li>islamhouse.com</li>
            <li>response-anti-islam</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
