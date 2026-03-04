import Image from "next/image";
import styles from "./About.module.css";
import SectionHeader from "@/components/common/SectionHeader";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <SectionHeader
          label="About Me"
          title="저를 소개합니다"
        />

        <div className={styles.content}>
          <figure className={styles.imageContainer}>
            <Image
              src="/id_photo.jpg"
              alt="프로필 이미지"
              fill
              sizes="300px"
              priority
              className={styles.profileImage}
            />
          </figure>

          <div className={styles.info}>
            <p className={styles.intro}>
              커피와 노트북만 있다면, 어디서든 즐겁게 일하는
              <span className={styles.highlight}>
                {" "}
                프론트엔드 개발자 정태윤
              </span>
              입니다.
            </p>

            <p className={styles.description}>
              재사용 가능한 컴포넌트와 효율적인 상태 관리를 바탕으로, 유지보수가
              쉬운 코드를 작성하는 프론트엔드 개발자입니다. 다양한 프로젝트
              경험을 바탕으로, 기술 선택보다는 문제 해결과 사용자 경험을
              우선하는 개발을 추구합니다.
            </p>

            <p className={styles.description}>
              지속적인 학습을 통해 새로운 기술에 빠르게 적응하며, 사용자에게 더
              나은 경험을 제공하기 위해 고민하고 있습니다. 앞으로도 사용자
              중심의 개발을 통해 더 많은 사람들에게 가치를 전달하고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
