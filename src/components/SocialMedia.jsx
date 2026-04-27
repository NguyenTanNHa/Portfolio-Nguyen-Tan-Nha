import React, { useEffect, useState, useRef } from 'react';

export default function SocialMedia() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const socials = [
    { name: 'Facebook', url: 'https://www.facebook.com/NguyenTnNha/', icon: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/facebook.png?updatedAt=1731581888386', desc: 'Connecting with friends, staying in touch, exploring information and interacting' },
    { name: 'Instagram', url: 'https://www.instagram.com/_tanhang_/', icon: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/instagram.png?updatedAt=1731581880409', desc: 'A place to showcase creativity through posts, images, and videos about myself' },
    { name: 'Youtube', url: 'https://www.youtube.com/@nguyentannha1407', icon: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/youtube.png?updatedAt=1731581879591', desc: 'A platform to upload my videos, including vlogs, edited projects, tutorials' },
    { name: 'Github', url: 'https://github.com/NguyenTanNHa', icon: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/github.png?updatedAt=1731581888592', desc: 'A repository for sharing projects I\'ve worked on and accessing a wealth of reference materials' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/nha-nguyen-tan/', icon: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/linkedin-logo.png?updatedAt=1731727215978', desc: 'Building a personal brand, connecting with professionals, and seeking career opportunities' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/31ua3prlp5hbqgbpv23ata7vzw54?si=d166162849224874', icon: 'https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/Spofify.png?updatedAt=1731581884967', desc: 'Enjoying and sharing my favorite music playlists for entertainment, discovering new tracks' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="social-media" className="py-24 md:py-36 px-6 md:px-10 max-w-[1170px] mx-auto">
      <span className="block text-[10px] uppercase text-muted tracking-[5px] mb-4 font-medium">What do I do on social media?</span>
      <h2 className="text-[18px] font-bold uppercase tracking-[5px] mb-12 font-serif text-heading">Here are some things I do on social media platforms</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {socials.map((social, idx) => (
          <div 
            key={idx} 
            className={`group bg-white p-6 shadow-service border-b-2 border-primary relative mt-10 text-center transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-2xl cursor-pointer
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
            `}
            style={{ transitionDelay: isVisible ? `${idx * 150}ms` : '0ms' }}
          >
            <div className="absolute -top-[20px] left-0 right-0 mx-auto w-[100px] h-[50px] bg-primary flex items-center justify-center transition-transform duration-500 ease-bounce-soft group-hover:scale-110 group-hover:-rotate-6
              before:content-[''] before:absolute before:-top-[30px] before:left-0 before:border-l-[50px] before:border-r-[50px] before:border-b-[30px] before:border-transparent before:border-b-primary
              after:content-[''] after:absolute after:-bottom-[30px] after:left-0 after:border-l-[50px] after:border-r-[50px] after:border-t-[30px] after:border-transparent after:border-t-primary"
            >
              <a href={social.url} target="_blank" rel="noreferrer" className="z-10 transition-transform duration-500 group-hover:scale-110">
                <img src={social.icon} alt={social.name} width="50" height="50" />
              </a>
            </div>
            <div className="mt-16">
              <h3 className="text-[16px] font-bold uppercase mb-4 transition-colors duration-300 group-hover:text-primary">{social.name}</h3>
              <p className="text-primary/70">{social.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
