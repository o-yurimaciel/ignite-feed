import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="https://avatars.githubusercontent.com/u/54074819?v=4" 
                        alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Yuri Maciel</strong>
                        <span>Front-end Engineer</span>
                    </div>
                </div>
                <time title='29 de Outubro a 12:39' dateTime='2023-10-29 12:39:00'>Publicado há 1h</time>

                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>
                        <a href="#">👉 jane.design/doctorcare</a>
                    </p>
                    <p>
                        <a href="#">#novoprojeto #nlw #rocketseat</a>
                    </p>
                </div>
            </header>
        </article>
    )
}