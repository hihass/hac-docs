import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'HAC社区',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        HAC社区（Home Assistant in China Community）致力于Home Assistant在中国的本地化工作。
      </>
    ),
  },
  {
    title: 'Home Assistant',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我们推荐使用Home Assistant作为家居自动化控制中心的原因是，HA的数据处理和存储均在本地。我们相信自己的数据只有掌握在自己手中才是安全的。
      </>
    ),
  },
  {
    title: '初衷',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        建立社区的初衷是希望在众多汉语Home Assistant爱好者的支持下让普通的用户也可以便捷的使用HA驱动的家居控制系统。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
