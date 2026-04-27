import React, { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    { title: 'Creative', letter: 'C', color: 'bg-primary', borderB: 'before:border-b-primary', borderT: 'after:border-t-primary' },
    { title: 'Web Design', letter: 'W', color: 'bg-accent-red', borderB: 'before:border-b-accent-red', borderT: 'after:border-t-accent-red' },
    { title: 'Database', letter: 'D', color: 'bg-accent-yellow', borderB: 'before:border-b-accent-yellow', borderT: 'after:border-t-accent-yellow' },
    { title: 'Application', letter: 'A', color: 'bg-accent-purple', borderB: 'before:border-b-accent-purple', borderT: 'after:border-t-accent-purple' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-36 px-6 md:px-10 max-w-[1170px] mx-auto">
      <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="block text-[10px] uppercase text-muted tracking-[5px] mb-4 font-medium">About Us</span>
        <h2 className="text-[18px] font-bold uppercase tracking-[5px] mb-12 font-serif text-heading">Who Am I?</h2>
        
        <div className="text-justify mb-8 text-muted dark:text-muted/80 leading-relaxed">
          <p className="mb-6">
            <strong className="text-heading">Hi I’m Tan Nha.</strong> I am a third-year student majoring in Information Technology with a specialization in Software Engineering at the NTT Institute of International Education, Nguyen Tat Thanh University. During my studies, I have been exposed to various programming languages such as HTML, CSS, Python, Java and C#, along with frameworks like ASP.NET Core and Bootstrap. I am also interested in software testing, reliability and software quality, as well as optimizing user systems.
          </p>
          <p>
            My goal is to become a Full Stack Developer capable of creating engaging, user-friendly application interfaces that meet practical needs. I am committed to learning every day to develop myself, not only in technical expertise but also in essential soft skills.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 mt-16">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className={`group bg-background dark:bg-surface p-6 shadow-service border-b-2 border-transparent relative mt-10 transition-all duration-700 ease-out hover:-translate-y-2
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
            `}
            style={{ 
              transitionDelay: isVisible ? `${idx * 150}ms` : '0ms',
              borderBottomColor: `var(--${card.color.replace('bg-', '')})` 
            }}
          >
            <div className={`absolute -top-[20px] left-0 right-0 mx-auto w-[100px] h-[50px] ${card.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110
              before:content-[''] before:absolute before:-top-[30px] before:left-0 before:border-l-[50px] before:border-r-[50px] before:border-b-[30px] before:border-transparent ${card.borderB}
              after:content-[''] after:absolute after:-bottom-[30px] after:left-0 after:border-l-[50px] after:border-r-[50px] after:border-t-[30px] after:border-transparent ${card.borderT}`}
            >
              <span className="text-white text-xl z-10 font-bold">{card.letter}</span>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-[16px] font-bold uppercase text-heading">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className={`bg-accent-yellow p-8 mt-16 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h2 className="text-xl font-medium leading-relaxed mb-6 text-black">Here are some projects I worked on and the experience I gained while I was in school</h2>
        <a href="#contact" className="inline-block border-2 border-black text-black font-bold px-6 py-2 uppercase tracking-[2px] hover:bg-black hover:text-white transition-colors">
          Hire me
        </a>
      </div>
    </section>
  );
}
