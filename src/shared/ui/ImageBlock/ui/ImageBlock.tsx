import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ImageBlock.module.scss';
import { useState } from 'react';
import { ImageSizeSchema } from '../model/types/imageSizeSchema';
import { PageLoader } from 'widgets/PageLoader';

interface ImageBlockProps {
   className?: string;
   images: string[];
   maxWidthHeight: ImageSizeSchema;
   imageHeight: ImageSizeSchema;
};

export const ImageBlock = ({className, images, maxWidthHeight, imageHeight}: ImageBlockProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
      return <PageLoader />;
    }

    const goToNext = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const goToPrev = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
      <div className={classNames(cls.ImageBlockWrapper, {}, [cls[maxWidthHeight]])}>
        <img
            className={classNames(cls.imageBlock, {}, [cls[imageHeight]])}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
        />
        <div className={cls.counter}>
          {currentIndex + 1}/{images.length}
        </div>
        {images.length > 1 && (
        <>
          <button className={cls.prevPhotoBtn} onClick={goToPrev} >&lt;</button>
          <button className={cls.nextPhotoBtn} onClick={goToNext} >&gt;</button>
        </>
      )}
      </div>
    )
};

