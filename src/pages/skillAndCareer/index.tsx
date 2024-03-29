import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import { editors, environments, langAndFrameworks, cloudAndDatabase, qualification } from '../../data/skills';
import { careersAtFreelance, personalDevelopment, careersAtCook } from '../../data/careers';

type Skill = {
  imgUrl: string;
  title: string;
  description: string;
};

const Skill = ({ imgUrl, title, description }: Skill) => {
  return (
    <div className="col col--3 text--center">
      {imgUrl && (
        <p className={styles.skillImageBlock}>
          <img className={styles.skillImage} src={useBaseUrl(imgUrl)} alt={title} />
        </p>
      )}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

type Career = {
  period: string;
  title: string;
  langAndFw: string;
  db: string;
  environment: string;
  cloudService: string;
  other: string;
  description: React.ReactNode;
};

const Career = ({ period, title, langAndFw, db, environment, cloudService, other, description }: Career) => {
  return (
    <div className="card-demo margin-vert--sm">
      <div className="card shadow--lw-custom">
        <div className="card__header">
          <p className="text--italic">{period}</p>
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <ul>
            {langAndFw && <li>言語・FW：{langAndFw}</li>}
            {db && <li>DB：{db}</li>}
            {environment && <li>環境：{environment}</li>}
            {cloudService && <li>クラウドサービス：{cloudService}</li>}
            {other && <li>その他：{other}</li>}
          </ul>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

type Qualification = {
  name: string;
  date: string;
};

const Qualification = ({ name, date }: Qualification) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
    </tr>
  );
};

function SkillAndCareer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Skill &amp; Career" description="サメパンのスキル &amp; 経歴">
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">Skill &amp; Career</h1>
          <p className="hero__subtitle">スキルと経歴</p>
        </div>
      </header>
      <main>
        <section className="container padding--md">
          <h2 className="text--center">スキル</h2>
          <section>
            <h3 className="text--center decoration-line">エディタ</h3>
            {editors && editors.length && (
              <div className="padding-vert--lg">
                <div className="row">
                  {editors.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">開発環境</h3>
            {environments && environments.length && (
              <div className="padding-vert--lg">
                <div className="row">
                  {environments.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">言語・フレームワーク</h3>
            {langAndFrameworks && langAndFrameworks.length && (
              <div className="padding-vert--lg">
                <div className="row">
                  {langAndFrameworks.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">データベース</h3>
            {cloudAndDatabase && cloudAndDatabase.length && (
              <div className="padding-vert--lg">
                <div className="row">
                  {cloudAndDatabase.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">所持資格</h3>
            {qualification && qualification.length && (
              <div className="padding-vert--lg">
                <table className="display-table full-width">
                  <thead>
                    <tr>
                      <th>名称</th>
                      <th>取得年月</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualification.map((props, idx) => (
                      <Qualification key={idx} {...props} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </section>
        <section className="container padding--md">
          <h2 className="text--center">経歴</h2>
          <small className="text--center padding-bottom--md display-block">
            ※ここで書いている技術スタックは、実際に使われているもののうち、自分が関わった部分のみ記載しています。
          </small>
          <section>
            <h3 className="text--center decoration-line">フリーランスウェブエンジニア 【2019/01 ~ 】</h3>
            {careersAtFreelance && careersAtFreelance.length && (
              <div className="padding-vert--md">
                {careersAtFreelance.map((props, idx) => (
                  <Career key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">調理職 【2012/10 ~ 2021/07】</h3>
            {careersAtCook && careersAtCook.length && (
              <div className="padding-vert--md">
                {careersAtCook.map((props, idx) => (
                  <Career key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">個人開発</h3>
            {personalDevelopment && personalDevelopment.length && (
              <div className="padding-vert--md">
                {personalDevelopment.map((props, idx) => (
                  <Career key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
        </section>
      </main>
    </Layout>
  );
}

export default SkillAndCareer;
