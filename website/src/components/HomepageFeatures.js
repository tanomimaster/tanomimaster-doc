import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '利用は簡単',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      メーカーはアカウント登録をして、商品登録をWebから行い、販売先の会社を選択、金額を設定するだけでタノミマスターを経由した販売を即座に開始できます。
      <br/>
      <br/>
      発注者はアカウント登録をして、取引先のメーカーが卸価格の設定を行えば発注を行えるようになります。タノミマスターの概要と申込みは<a href="https://service.tanomimaster.com/">サービスサイト</a>を御覧願います。
      </>
    ),
  },
  {
    title: 'プラットフォームの特徴',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        取引先との受発注をタノミマスターで集約できます。発注者はタノミマスターを利用することで複数メーカーに発注を行えるようになり、メーカーはタノミマスターを利用することで複数の発注者から注文を一元的に受けられます。
      </>
    ),
  },
  {
    title: 'API連携',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        受発注処理をAPIによって操作できます。基幹システム、物流システムと連携することによって受発注処理の自動化が可能になります。API仕様は近日中に公開予定です。現在は招待制になっております。
        APIは<a href="https://github.com/tanomimaster/tanomimaster-openapi">github上のレポジトリ</a>で管理されていて仕様に関してはオープンな議論を行っています。
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
