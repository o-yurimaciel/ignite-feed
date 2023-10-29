import styles from './Post.module.css'
import { Comment } from './Comment'

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
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>
                👉 <a href="#">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="#">#novoprojeto</a> {'\0'}
                    <a href="#">#nlw</a> {'\0'}
                    <a href="#">#rocketseat</a> {'\0'}
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                 />
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}