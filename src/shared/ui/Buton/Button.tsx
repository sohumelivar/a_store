import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
   disabled?: boolean;
};

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        disabled,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
    }

    return (
        <button 
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            type='button'
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
};

