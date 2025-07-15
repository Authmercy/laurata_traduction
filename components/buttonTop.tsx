import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { div } from 'framer-motion/client';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div>
    <div className="hidden lg:flex "> <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-6 p-3 bg-[#c79c3e] text-white rounded-full shadow-lg hover:bg-blue-700 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button></div>
          <div className="block lg:hidden"> <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-4 p-3 bg-[#c79c3e] text-white rounded-full shadow-lg hover:bg-blue-700 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button></div></div>

  );
}
