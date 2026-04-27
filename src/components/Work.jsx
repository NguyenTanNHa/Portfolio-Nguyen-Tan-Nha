import React, { useState, useEffect, useRef } from 'react';

export default function Work() {
  const [filter, setFilter] = useState('all');
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

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'enrollment', label: 'Enrollment' },
    { id: 'activities', label: 'Activities' },
    { id: 'learning', label: 'Learning' },
    { id: 'events', label: 'Events' },
  ];

  const works = [
    { category: 'enrollment', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/GT8.jpg?updatedAt=1731581884493' },
    { category: 'enrollment', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/GT2.jpg?updatedAt=1731581884384' },
    { category: 'enrollment', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/GT4.JPG?updatedAt=1731581883969' },
    { category: 'enrollment', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_0803.png?updatedAt=1731937321182' },
    { category: 'enrollment', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_1403.JPG?updatedAt=1731937319034' },
    { category: 'enrollment', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_3734.png?updatedAt=1731937321051' },
    { category: 'activities', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_0213.png?updatedAt=1731937331429' },
    { category: 'activities', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_1352.JPG?updatedAt=1731937315192' },
    { category: 'activities', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_0703.JPG?updatedAt=1731937307305' },
    { category: 'activities', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/81F52B6E-8FBF-4EC5-AA20-A57EE492E348.jpg?updatedAt=1731937308073' },
    { category: 'activities', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_0232.JPG?updatedAt=1731937319845' },
    { category: 'activities', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_0069.JPG?updatedAt=1731937309750' },
    { category: 'learning', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_2776.JPG?updatedAt=1731937317058' },
    { category: 'learning', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/received_479720880267263.jpg?updatedAt=1731937319833' },
    { category: 'learning', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_0707.JPG?updatedAt=1731937314213' },
    { category: 'events', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_0851.JPG?updatedAt=1731937316571' },
    { category: 'events', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/NTTU-174.png?updatedAt=1731941436017' },
    { category: 'events', img: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/IMG_0225.JPG?updatedAt=1731937310587' }
  ];

  const filteredWorks = filter === 'all' ? works : works.filter(w => w.category === filter);

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-36 px-6 md:px-10 max-w-[1170px] mx-auto">
      <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="block text-[10px] uppercase text-muted tracking-[5px] mb-4 font-medium">My Work</span>
        <h2 className="text-[18px] font-bold uppercase tracking-[5px] mb-12 font-serif text-heading">Recent Work</h2>
      </div>
      
      <div className={`mb-10 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-wrap gap-4 text-[14px]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`transition-colors font-medium ${filter === cat.id ? 'text-primary border-b-2 border-primary' : 'text-primary/70 dark:text-muted hover:text-primary'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredWorks.map((work, idx) => (
          <div 
            key={idx} 
            className="h-[300px] md:h-[400px] w-full bg-cover bg-center bg-no-repeat transition-all duration-500 hover:scale-[1.02] hover:shadow-xl rounded-md cursor-pointer animate-fadeIn"
            style={{ backgroundImage: `url(${work.img})` }}
          >
          </div>
        ))}
      </div>

      <div className={`mt-12 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <a href="#" className="inline-block border border-heading text-heading px-4 py-2 uppercase tracking-[1px] hover:bg-heading hover:text-background transition-colors rounded-sm">
          Load more
        </a>
      </div>
    </section>
  );
}
