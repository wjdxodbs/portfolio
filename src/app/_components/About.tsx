import Image from "next/image";
import styles from "./About.module.css";
import SectionHeader from "@/components/common/SectionHeader";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <SectionHeader label="About" index="01" />

        <AnimateOnScroll className={styles.content}>
          <figure className={styles.imageContainer}>
            <Image
              src="/id_photo.jpg"
              alt="프로필 이미지"
              fill
              sizes="200px"
              priority
              className={styles.profileImage}
            />
          </figure>

          <div className={styles.info}>
            <p className={styles.quote}>
              React · Next.js · TypeScript 기반의{" "}
              <em className={styles.accent}>프론트엔드</em> 개발자입니다.
            </p>

            <div className={styles.capabilities}>
              <ul className={styles.capList}>
                <li>단독 업무와 팀 협업을 유연하게 병행하며, 기능 개발부터 배포·운영까지 서비스의 전 과정을 경험했습니다.</li>
                <li>Vanilla JS 기반의 기존 서비스 유지보수부터 Next.js를 활용한 신규 개발까지, 다양한 코드 환경에 빠르게 적응하고 문제를 해결합니다.</li>
                <li>기획 의도를 정확히 이해하기 위해 적극적으로 소통하며, 맡은 기능은 끝까지 책임지고 완수합니다.</li>
                <li>Cursor, Claude Code 등 AI 도구를 워크플로우에 적극 활용하여 구현 속도를 높이고, 코드 리뷰와 리팩토링을 통해 작업의 완성도를 극대화합니다.</li>
              </ul>
            </div>

            <dl className={styles.infoGrid}>
              <div className={styles.infoCell}>
                <dt className={styles.infoKey}>위치</dt>
                <dd className={styles.infoVal}>서울, 대한민국</dd>
              </div>
              <div className={styles.infoCell}>
                <dt className={styles.infoKey}>상태</dt>
                <dd className={`${styles.infoVal} ${styles.infoValAccent}`}>
                  취업 준비 중
                </dd>
              </div>
              <div className={styles.infoCell}>
                <dt className={styles.infoKey}>관심 분야</dt>
                <dd className={styles.infoVal}>Frontend · UX</dd>
              </div>
              <div className={styles.infoCell}>
                <dt className={styles.infoKey}>이메일</dt>
                <dd className={styles.infoVal}>wjdxodbs52@naver.com</dd>
              </div>
            </dl>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
