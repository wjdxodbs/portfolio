import styles from './page.module.css';

const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '010-1234-5678',
    href: 'tel:010-1234-5678',
  },
  {
    icon: '📍',
    label: 'Location',
    value: '서울특별시',
    href: null,
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: '🐙',
    href: 'https://github.com',
    description: '코드와 프로젝트를 확인하세요',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    href: 'https://linkedin.com',
    description: '프로페셔널 프로필을 확인하세요',
  },
  {
    name: 'Blog',
    icon: '📝',
    href: 'https://blog.example.com',
    description: '개발 관련 글을 작성합니다',
  },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h1 className={styles.title}>연락하기</h1>
          <p className={styles.subtitle}>
            궁금한 점이 있으시거나 함께 일하고 싶으시다면 언제든 연락해 주세요!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>연락처 정보</h2>
            <div className={styles.contactList}>
              {contactInfo.map((item) => (
                <div key={item.label} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.contactValue}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValueText}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.socialSection}>
            <h2 className={styles.sectionTitle}>소셜 링크</h2>
            <div className={styles.socialList}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <span className={styles.socialIcon}>{link.icon}</span>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialName}>{link.name}</span>
                    <span className={styles.socialDescription}>{link.description}</span>
                  </div>
                  <span className={styles.arrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>함께 일하고 싶으시다면?</h2>
            <p className={styles.ctaDescription}>
              새로운 기회를 찾고 있습니다. 프론트엔드 개발자로서 
              팀에 기여하고 함께 성장하고 싶습니다.
            </p>
            <a href="mailto:hello@example.com" className={styles.ctaButton}>
              이메일 보내기 ✉️
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

