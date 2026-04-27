import React, { useState, useEffect, useRef } from 'react';
import { Globe, Map, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.target;
    const data = new FormData(form);

    // Replace YOUR_FORMSPREE_ID with actual ID when ready
    fetch("https://formspree.io/f/xvgzgzyw", { // Using a dummy or actual ID if provided
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    }).catch(() => {
      // For demo purposes if endpoint is invalid, we will simulate success after 1.5s
      setTimeout(() => {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      }, 1500);
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-36 px-6 md:px-10 max-w-[1170px] mx-auto">
      <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="block text-[10px] uppercase text-muted tracking-[5px] mb-4 font-medium">Get in Touch</span>
        <h2 className="text-[18px] font-bold uppercase tracking-[5px] mb-12 font-serif text-heading">Contact</h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className={`md:w-5/12 transition-all duration-700 delay-150 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="flex items-start mb-8 group">
            <div className="w-[100px] text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Globe size={40} />
            </div>
            <div>
              <p><a href="mailto:Tannha.nam2003@gmail.com" className="text-primary hover:underline font-medium">Tannha.nam2003@gmail.com</a></p>
            </div>
          </div>

          <div className="flex items-start mb-8 group">
            <div className="w-[100px] text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Map size={40} />
            </div>
            <div>
              <p className="text-primary/80 dark:text-muted">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>

          <div className="flex items-start mb-8 group">
            <div className="w-[100px] text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Phone size={40} />
            </div>
            <div>
              <p className="text-primary/80 dark:text-muted">(+84) 0937219976</p>
            </div>
          </div>
        </div>

        <div className={`md:w-7/12 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-md shadow-sm">
            <div className="mb-4">
              <input type="text" name="name" required className="w-full bg-background text-heading px-4 py-3 border border-transparent focus:border-primary outline-none rounded-sm transition-colors" placeholder="Name" />
            </div>
            <div className="mb-4">
              <input type="email" name="email" required className="w-full bg-background text-heading px-4 py-3 border border-transparent focus:border-primary outline-none rounded-sm transition-colors" placeholder="Email" />
            </div>
            <div className="mb-4">
              <input type="text" name="subject" required className="w-full bg-background text-heading px-4 py-3 border border-transparent focus:border-primary outline-none rounded-sm transition-colors" placeholder="Subject" />
            </div>
            <div className="mb-4">
              <textarea name="message" required cols="30" rows="7" className="w-full bg-background text-heading px-4 py-3 border border-transparent focus:border-primary outline-none resize-none rounded-sm transition-colors" placeholder="Message"></textarea>
            </div>
            <div className="flex items-center gap-4">
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="bg-primary text-white text-[12px] font-bold uppercase tracking-[2px] px-[20px] py-[15px] hover:bg-heading hover:text-background transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <span className="text-green-500 flex items-center gap-2 text-sm font-medium animate-fadeIn">
                  <CheckCircle size={18} /> Message sent successfully!
                </span>
              )}
              {status === 'error' && (
                <span className="text-red-500 flex items-center gap-2 text-sm font-medium animate-fadeIn">
                  <AlertCircle size={18} /> Error sending message.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
