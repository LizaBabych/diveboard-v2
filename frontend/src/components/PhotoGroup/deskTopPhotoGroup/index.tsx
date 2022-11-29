import React, { FC } from 'react';
import styles from './styles.module.scss';
import { PhotoCard } from '../../Cards/PhotoCard';
import { PhotoGroupProps } from '../photoGroupProps';

export const DeskTopPhotoGroup: FC<PhotoGroupProps> = ({ photos }) => {
  if (photos.length !== 6) {
    throw new Error('there must be 6 pictures');
  }
  const photosElements = photos.map((photo, index) => {
    if (index % 3 === 0) {
      return (
        <PhotoCard
          imgSrc={photo}
          favourites={0}
          size="normal"
          authorName="Author"
        />
      );
    }
    return (
      <PhotoCard
        imgSrc={photo}
        favourites={0}
        size="small"
        authorName="Author"
      />
    );
  });
  return (
    <div className={styles.photoWrapper}>
      <div className={styles.column}>
        {photosElements[0]}
      </div>

      <div className={styles.column}>
        {photosElements[1]}
        {photosElements[2]}
      </div>

      <div className={styles.column}>
        {photosElements[3]}
      </div>

      <div className={styles.column}>
        {photosElements[4]}
        {photosElements[5]}
      </div>
    </div>
  );
};
