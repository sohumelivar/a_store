import {classNames} from 'shared/lib/classNames/classNames';
import cls from './DropdownElement.module.scss';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface DropdownElementProps {
   className?: string;
   classNameInitial?: string;
   classNameDrop?: string;
   firstChildren: ReactNode;
   secondChildren: ReactNode;
};

export const DropdownElement = ( props: DropdownElementProps ) => {
    const {
        className, 
        firstChildren, 
        secondChildren, 
        classNameInitial, 
        classNameDrop
    } = props;

    const [isDropDownElement, setIsDropDownElement] = useState(false);
    const initialBlockRef = useRef<HTMLDivElement>(null);
    const dropDownBlockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const initialBlock = initialBlockRef.current;
            if(initialBlock) {
                const dropdownOffset = initialBlock.offsetTop + initialBlock.offsetHeight;
                setIsDropDownElement(window.scrollY >= dropdownOffset);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
      <div className={classNames(cls.DropdownElementWrapper, {}, [cls[className]])}>
        <div 
            ref={initialBlockRef} 
            className={classNames(cls.initialBlock, {}, [cls[classNameInitial]])}
        >
            {firstChildren}
        </div>
        <div 
            ref={dropDownBlockRef}
            className={classNames(cls.dropDownBlock, {}, [cls[classNameDrop]])}
            style={{opacity: isDropDownElement ? 1 : 0, pointerEvents: isDropDownElement ? 'auto' : 'none'}}
        >
            {secondChildren}
        </div>
      </div>
    )
};

