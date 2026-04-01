import Image from "next/image";
import styles from "./About.module.css";
import SectionHeader from "@/components/common/SectionHeader";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <SectionHeader label="About" index="01" />

        <div className={styles.content}>
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
              커피와 노트북만 있다면,
              <br />
              어디서든{" "}
              <em className={styles.accent}>즐겁게</em>{" "}
              일하는 사람.
            </p>

            <p className={styles.description}>
              재사용 가능한 컴포넌트와 효율적인 상태 관리를 바탕으로,
              유지보수가 쉬운 코드를 작성하는 프론트엔드 개발자입니다. 다양한
              프로젝트 경험을 바탕으로, 기술 선택보다는 문제 해결과 사용자
              경험을 우선하는 개발을 추구합니다.
            </p>

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
                <dd className={styles.infoVal}>wjdxodbs@gmail.com</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
