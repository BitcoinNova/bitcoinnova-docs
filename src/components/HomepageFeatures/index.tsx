import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  href: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About Bitcoin Nova',
    href: 'test',
    Svg: require('@site/static/img/undraw_about_spirit.svg').default,
    description: (
      <>
        Learn more about Bitcoin Nova and the community.
      </>
    ),
  },
  {
    title: 'Make a Wallet',
    href: 'test',
    Svg: require('@site/static/img/undraw_wallet.svg').default,
    description: (
      <>
        A guide on setting up a Bitcoin Nova Wallet to start receiving some novas!
      </>
    ),
    
  },
  {
    title: 'Mine Bitcoin Nova',
    href: 'test',
    Svg: require('@site/static/img/undraw_data_processing.svg').default,
    description: (
      <>
        A step-by-step guide to start mining Bitcoin Nova.
      </>
    ),
  },
  {
    title: 'Contributing',
    href: 'test',
    Svg: require('@site/static/img/undraw_developer_activity.svg').default,
    description: (
      <>
        Information on contributing to Bitcoin Nova.
      </>
    ),
  },
];

function Feature({title, href, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={href}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
