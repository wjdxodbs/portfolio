'use client';

import { useState } from 'react';
import styles from './About.module.css';

const highlights = [
  { number: '2+', label: '개인 프로젝트' },
  { number: '1', label: '팀 프로젝트' },
  { number: '6+', label: '학습한 기술' },
];

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>About Me</span>
          <h2 className={styles.title}>저를 소개합니다</h2>
        </div>
        
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              {/* 프로필 이미지를 public/profile.jpg로 저장해주세요 */}
              {!imageError ? (
                <img
                  src="/profile.jpg"
                  alt="프로필 이미지"
                  className={styles.profileImage}
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className={styles.fallbackEmoji}>👨‍💻</span>
              )}
            </div>
            <div className={styles.imageDecor}></div>
          </div>
          
          <div className={styles.info}>
            <p className={styles.intro}>
              안녕하세요! 저는 사용자 경험을 최우선으로 생각하는 
              <span className={styles.highlight}> 프론트엔드 개발자 홍길동</span>입니다.
            </p>
            
            <p className={styles.description}>
              컴퓨터공학을 전공하며 웹 개발에 대한 열정을 키워왔습니다. 
              특히 React와 TypeScript를 활용한 모던 웹 개발에 관심이 많으며, 
              깔끔하고 유지보수하기 좋은 코드를 작성하기 위해 노력합니다.
            </p>
            
            <p className={styles.description}>
              새로운 기술을 배우는 것을 즐기며, 문제를 해결하는 과정에서 성장합니다. 
              협업과 소통을 중요시하며, 함께 성장하는 개발자가 되고 싶습니다.
            </p>
            
            <div className={styles.highlights}>
              {highlights.map((item) => (
                <div key={item.label} className={styles.highlightItem}>
                  <span className={styles.number}>{item.number}</span>
                  <span className={styles.highlightLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
