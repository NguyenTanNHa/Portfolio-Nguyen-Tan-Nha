import React, { useState, useEffect, useRef } from 'react';

export default function Education() {
  const [openIndex, setOpenIndex] = useState(0);
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

  const education = [
    {
      title: 'Nguyen Tat Thanh University',
      period: '2021 - 2025',
      major: 'Information Technology (Software Engineering)',
      gpa: '2.91',
      activities: [
        'Collaborated as an advisor for student enrollment (May - July 2022)',
        'Participated in weekly minigames by the university\'s English Club',
        'Joined the "Tô Heo Đất NIIE" program',
        'Supported enrollment advisory at high schools (January - March 2023)',
        'Took part in the "NIIE Đồng Hành Cùng Sĩ Tử" competition',
        'Joined the "Giảng Viên Bí Ẩn Ấy Là Ai" program',
        'Assisted with enrollment activities in 2024',
        'Participated in the "Noel Trao Yêu Thương, Nhận Yêu Thương" event',
        'Engaged in the "Tái Tạo Đổi Lấy Yêu Thương" program',
        'Took part in the student advisory event organization by Thanh Niên and TP.HCM Newspapers',
        'Attended multiple student workshops at the university',
        'Participating in organizing the 15th-anniversary event of the NIIE International Training Institute of the university'
      ],
      skills: 'Problem-solving, teamwork, communication'
    },
    {
      title: 'Binh Chanh High School',
      period: '2018 - 2021',
      certificate: 'IT Basics',
      result: 'Good',
      activitiesList: [
        'Activities: Member of Ho Chi Minh Youth Union',
        'Extracurricular: Tug-of-war team, joined annual school sports events',
        'Skills: Problem-solving, teamwork, communication',
        'Career goal: Aspired to be a software engineer since high school'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-24 md:py-36 px-6 md:px-10 max-w-[1170px] mx-auto">
      <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="block text-[10px] uppercase text-muted tracking-[5px] mb-4 font-medium">Education</span>
        <h2 className="text-[18px] font-bold uppercase tracking-[5px] mb-12 font-serif text-heading">Education</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        {education.map((edu, idx) => (
          <div 
            key={idx} 
            className={`border border-border rounded-md overflow-hidden transition-all duration-700 ease-out shadow-sm
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: isVisible ? `${idx * 200}ms` : '0ms' }}
          >
            <button
              className={`w-full text-left px-6 py-5 font-bold uppercase tracking-[1px] transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-surface text-heading hover:bg-surface/80'}`}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              {edu.title}
            </button>
            
            {openIndex === idx && (
              <div className="p-6 bg-background text-primary/70 dark:text-muted animate-fadeIn">
                {edu.period && <p className="mb-1"><strong>Study Period:</strong> {edu.period}</p>}
                {edu.major && <p className="mb-1"><strong>Major:</strong> {edu.major}</p>}
                {edu.gpa && <p className="mb-1"><strong>Achievements:</strong> GPA {edu.gpa}</p>}
                {edu.certificate && <p className="mb-1"><strong>Certificate:</strong> {edu.certificate}</p>}
                {edu.result && <p className="mb-1"><strong>Academic result:</strong> {edu.result}</p>}
                
                {edu.activities && (
                  <>
                    <strong className="block mt-4 mb-2 text-heading">Highlighted Activities</strong>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.activities.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {edu.activitiesList && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {edu.activitiesList.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                )}
                
                {edu.skills && <p className="mt-4"><strong>Skills:</strong> {edu.skills}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
