import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative w-full flex items-center justify-center bg-cover bg-bottom" style={{ backgroundImage: 'url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3QyeGV1ejJ0eXMyemJud3Exc2c2NXV1bHFpdjVkNTNlcTVwZHF6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u01ioCe6G8URG/giphy.gif)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[1170px]">
        <div className="max-w-2xl mx-auto md:mx-0 md:ml-auto">
          <h1 className="text-[28px] md:text-[60px] font-bold text-white mb-5 leading-[1.3] font-serif">
            Hi ! <br/> I’m Tan Nha
          </h1>
          <h2 className="text-[18px] text-white/90 mb-[30px] font-light leading-[1.5] text-justify max-w-[600px]">
            As an Information Technology student at Nguyen Tat Thanh University, he has practical experience in Python, Java, C#, HTML, CSS, SQL, and ASP.NET, along with a solid level of Git. I am passionate about expanding my knowledge, dedicating myself to hard work, and improving my skills through hands-on projects. My goal is to contribute and play an important role in the growth of the company.
          </h2>
          
          <a 
            href="https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/NguyenTanNhaCV.pdf?updatedAt=1732462756456" 
            target="_blank" 
            rel="noreferrer"
            download
            className="inline-block border border-white text-white text-[12px] uppercase tracking-[2px] px-[15px] py-[10px] hover:bg-white hover:text-black transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
