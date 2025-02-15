import React from 'react';
import { Title } from '../Title';
import { DestinationCard } from '../../../Cards/DestinationCard';
import { ArrowLink } from '../../../ArrowLink';
import styles from './styles.module.scss';

export const CentersVisitedBlock = () => (
  <div className={styles.centersWrapper}>
    <Title title="Dive Centers Visited" />
    <div className={styles.cardWrapper}>
      <DestinationCard
        imgSrc="/TEST_IMG_THEN_DELETE/photo8.jpg"
        destinationName="Koh Bida Nai"
        rating={4}
        country="Thailand"
        divesNumber={146}
      />
      <DestinationCard
        imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
        destinationName="Koh Bida Nai"
        rating={4}
        country="Thailand"
        divesNumber={146}
      />
      <DestinationCard
        imgSrc="/TEST_IMG_THEN_DELETE/photo7.jpg"
        destinationName="Koh Bida Nai"
        rating={4}
        country="Thailand"
        divesNumber={146}
      />
      <DestinationCard
        imgSrc="/TEST_IMG_THEN_DELETE/photo6.jpg"
        destinationName="Koh Bida Nai"
        rating={4}
        country="Thailand"
        divesNumber={146}
      />
    </div>
    <ArrowLink
      text="View More"
      color="#0059DE"
      link="/"
    />
  </div>
);
