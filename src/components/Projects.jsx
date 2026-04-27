import React, { useState, useEffect, useRef } from 'react';
import { PenTool, Star, GitFork, Github } from 'lucide-react';

export default function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    // Fetch Github Repos
    fetch('https://api.github.com/users/NguyenTanNHa/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const colors = ['bg-primary', 'bg-accent-red', 'bg-accent-yellow', 'bg-accent-purple', 'bg-accent-teal', 'bg-indigo-600'];
          
          let formattedProjects = data.map((repo, index) => {
            return {
              id: repo.id,
              originalName: repo.name,
              title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
              link: repo.html_url,
              period: new Date(repo.updated_at).getFullYear().toString(),
              color: colors[index % colors.length],
              desc: repo.description || 'No description provided.',
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              language: repo.language || 'Code',
              updatedAt: new Date(repo.updated_at).getTime()
            };
          });

          // Các từ khoá nhận diện project tiếng Việt hoặc bài tập trên lớp
          const vietnameseKeywords = ['tro choi', 'danh lua', 'tim o chu', 'kiemke', 'kiemkho', 'doan', 'quanly', 'bai tap', 'giang sinh', 'noen', 'cau tuyet'];

          // Sắp xếp: Ưu tiên các tên Tiếng Anh (không chứa từ khóa tiếng Việt hoặc viết hoa toàn bộ có gạch dưới)
          formattedProjects.sort((a, b) => {
            const aNameLower = a.title.toLowerCase();
            const bNameLower = b.title.toLowerCase();
            
            const aIsViet = vietnameseKeywords.some(kw => aNameLower.includes(kw)) || (a.originalName.includes('_') && a.originalName === a.originalName.toUpperCase());
            const bIsViet = vietnameseKeywords.some(kw => bNameLower.includes(kw)) || (b.originalName.includes('_') && b.originalName === b.originalName.toUpperCase());

            if (!aIsViet && bIsViet) return -1; // English first
            if (aIsViet && !bIsViet) return 1;  // Viet last
            return b.updatedAt - a.updatedAt; // Nếu cùng nhóm thì xếp theo thời gian mới nhất
          });

          setAllProjects(formattedProjects);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Github repos", err);
        setLoading(false);
      });
  }, []);

  const visibleProjects = allProjects.slice(0, visibleCount);

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-36 px-6 md:px-10 max-w-[1170px] mx-auto">
      <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="flex items-center gap-2 text-[10px] uppercase text-muted tracking-[5px] mb-4 font-medium">
          <Github size={14} /> Github Projects
        </span>
        <h2 className="text-[18px] font-bold uppercase tracking-[5px] mb-12 font-serif text-heading">My Projects</h2>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="relative before:content-[''] before:absolute before:top-5 before:bottom-5 before:w-1 before:bg-surface before:left-[29px]">
          {visibleProjects.map((proj, idx) => (
            <div 
              key={proj.id} 
              className={`relative mt-2 ml-7 mb-6 clear-both transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
              `}
              style={{ transitionDelay: isVisible ? `${(idx % 6) * 150}ms` : '0ms' }}
            >
              <div className={`absolute -left-12 w-10 h-10 rounded-full flex items-center justify-center border-[5px] border-background dark:border-background z-10 ${proj.color}`}>
                <PenTool size={18} className="text-white" />
              </div>
              <div className="bg-surface p-6 ml-4 relative rounded-md shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md
                before:content-[''] before:absolute before:w-0 before:h-0 before:border-y-[9px] before:border-y-transparent before:border-r-[9px] before:border-r-surface before:left-[-9px] before:top-[10px]">
                <h2 className="text-[20px] font-bold mb-3 capitalize">
                  <a href={proj.link} target="_blank" rel="noreferrer" className="text-heading hover:text-primary transition-colors">{proj.title}</a> 
                  <span className="opacity-40 text-[14px] font-normal ml-3 bg-background px-2 py-1 rounded-sm">{proj.period}</span>
                </h2>
                <p className="text-justify text-primary/80 dark:text-muted mb-4 text-[15px]">{proj.desc}</p>
                <div className="flex items-center gap-4 text-sm font-medium text-primary/60 dark:text-muted/60">
                  {proj.language && (
                    <span className="flex items-center gap-1.5"><span className={`w-2 h-2 rounded-full ${proj.color}`}></span>{proj.language}</span>
                  )}
                  <span className="flex items-center gap-1"><Star size={14} /> {proj.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={14} /> {proj.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {visibleCount < allProjects.length && (
        <div className={`mt-12 text-center transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="inline-block border border-border text-heading px-6 py-3 uppercase tracking-[1px] hover:bg-heading hover:text-background transition-colors rounded-sm font-medium text-[13px]"
          >
            Load More Projects
          </button>
        </div>
      )}
    </section>
  );
}
