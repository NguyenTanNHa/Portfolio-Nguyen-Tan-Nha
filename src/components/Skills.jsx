import React, { useEffect, useState, useRef } from 'react';

function SkillBar({ skill, isVisible }) {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = skill.percent;
      const duration = 1500; // 1.5 seconds animation
      const intervalTime = 16; // ~60fps
      const step = end / (duration / intervalTime);
      
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCurrentPercent(end);
          clearInterval(timer);
        } else {
          setCurrentPercent(Math.floor(start));
        }
      }, intervalTime);
      
      return () => clearInterval(timer);
    } else {
      // Reset số đếm về 0 khi cuộn màn hình đi nơi khác
      setCurrentPercent(0);
    }
  }, [isVisible, skill.percent]);

  return (
    <div className="mb-6">
      <h3 className="text-[16px] font-bold mb-2 text-heading">{skill.name}</h3>
      <div className="h-[6px] bg-surface rounded-lg relative overflow-visible">
        <div 
          className={`h-full rounded-lg ${skill.color} relative transition-all duration-[1500ms] ease-out`}
          style={{ width: isVisible ? `${skill.percent}%` : '0%' }}
        >
          <div className={`absolute -right-1 -top-[2px] w-2.5 h-2.5 rounded-full ${skill.color}`}></div>
          <span className={`absolute -top-6 right-0 text-xs font-bold ${skill.color.replace('bg-', 'text-')}`}>
            {currentPercent}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML, CSS, JS, Bootstrap', percent: 70, color: 'bg-primary' },
    { name: 'Python', percent: 80, color: 'bg-accent-red' },
    { name: 'C# (.NET Core, Win Forms, MVC)', percent: 85, color: 'bg-accent-yellow' },
    { name: 'Git & Github', percent: 100, color: 'bg-accent-purple' },
    { name: 'SQL', percent: 65, color: 'bg-accent-teal' },
    { name: 'Cloud Platforms', percent: 50, color: 'bg-indigo-600' },
    { name: 'Video Editor, Design Canva', percent: 80, color: 'bg-accent-red' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Gán trạng thái theo việc có đang nằm trong màn hình hay không
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-36 px-6 md:px-10 max-w-[1170px] mx-auto">
      <span className="block text-[10px] uppercase text-muted tracking-[5px] mb-4 font-medium">My Specialty</span>
      <h2 className="text-[18px] font-bold uppercase tracking-[5px] mb-12 font-serif text-heading">My Skills</h2>
      
      <p className="mb-12 leading-relaxed">
        My skill set spans from crafting visually appealing web interfaces to building secure and efficient server-side systems. I also have a strong grasp of version control with Git and project deployment processes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {skills.map((skill, idx) => (
          <SkillBar key={idx} skill={skill} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}
