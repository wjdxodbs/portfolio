import styles from './page.module.css';

const projects = [
  {
    id: 1,
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 TypeScript를 활용하여 제작한 개인 포트폴리오 웹사이트입니다. CSS Modules를 사용하여 스타일링하고, 반응형 디자인을 적용했습니다.',
    image: '🌐',
    tags: ['Next.js', 'TypeScript', 'CSS Modules'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Todo 앱',
    description: 'React와 TypeScript로 만든 할 일 관리 애플리케이션입니다. 로컬 스토리지를 활용한 데이터 저장, 드래그 앤 드롭 기능을 구현했습니다.',
    image: '✅',
    tags: ['React', 'TypeScript', 'LocalStorage'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: '날씨 앱',
    description: 'OpenWeather API를 활용한 날씨 조회 애플리케이션입니다. 현재 위치 기반 날씨 정보와 5일 예보를 제공합니다.',
    image: '🌤️',
    tags: ['React', 'API', 'Geolocation'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: '팀 프로젝트: 이커머스 플랫폼',
    description: '부트캠프에서 4명의 팀원과 함께 진행한 이커머스 웹사이트입니다. 프론트엔드 개발을 담당하여 상품 목록, 장바구니, 결제 페이지를 구현했습니다.',
    image: '🛒',
    tags: ['React', 'Redux', 'Styled-components', 'REST API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Projects</span>
          <h1 className={styles.title}>프로젝트</h1>
          <p className={styles.subtitle}>
            지금까지 진행한 개인 프로젝트와 팀 프로젝트입니다.
          </p>
        </div>

        <section className={styles.featured}>
          <h2 className={styles.sectionTitle}>주요 프로젝트</h2>
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <span className={styles.projectEmoji}>{project.image}</span>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkPrimary}
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {otherProjects.length > 0 && (
          <section className={styles.other}>
            <h2 className={styles.sectionTitle}>기타 프로젝트</h2>
            <div className={styles.otherGrid}>
              {otherProjects.map((project) => (
                <article key={project.id} className={styles.smallCard}>
                  <div className={styles.smallCardHeader}>
                    <span className={styles.smallEmoji}>{project.image}</span>
                    <div className={styles.smallLinks}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconLink}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className={styles.smallTitle}>{project.title}</h3>
                  <p className={styles.smallDescription}>{project.description}</p>
                  <div className={styles.smallTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.smallTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

