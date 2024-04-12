import {classNames} from 'shared/lib/classNames/classNames';
import cls from './TestPage.module.scss';
import { useEffect, useRef, useState } from 'react';

interface TestPageProps {
   className?: string;
};

export const TestPage = ({className}: TestPageProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const testNavbarRef = useRef<HTMLDivElement>(null);
  const stickyNavbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const testNavbar = testNavbarRef.current;

      if (testNavbar) {
        const stickyOffset = testNavbar.offsetTop + testNavbar.offsetHeight;

        setIsSticky(window.scrollY >= stickyOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return (
      <div className={classNames(cls.TestPage, {}, [className])}>
        <div ref={testNavbarRef} className={cls.testNavbar}>test div</div>
        <div ref={stickyNavbarRef} className={cls.stickyNavbar} style={{opacity: isSticky ? 1 : 0, pointerEvents: isSticky ? 'auto' : 'none'}}>Sticky Navbar</div>
        <div className={cls.itemsWrapper}>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
        </div>
      </div>
    )
};

