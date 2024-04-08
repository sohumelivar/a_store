import {classNames} from 'shared/lib/classNames/classNames';
import cls from './input.module.scss';
import React, { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface inputProps extends HTMLInputProps{
   className?: string;
   value?: string;
   onChange?: (value: string) => void;
};

export const Input = memo(( props: inputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
      <div className={classNames(cls.input, {}, [className])}>
            <input 
                type={type} 
                value={value}
                onChange={onChangeHandler}
            />
      </div>
    )
});

