// components/Tocbot.js
import { useEffect } from 'react';
import tocbot from 'tocbot';

const Tocbot = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.markdown',
      headingSelector: 'h1, h2, h3'
    });

    return () => tocbot.destroy(); // 清理 Tocbot 实例
  }, []);

  return <nav className="toc"></nav>;
};

export default Tocbot;
