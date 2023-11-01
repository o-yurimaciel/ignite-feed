import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ comment, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(comment)
    }

    return (
        <div className={styles.comment}>
            <Avatar src={'https://avatars.githubusercontent.com/u/54074819?v=4'} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yuri Maciel</strong>
                            <time title='29 de Outubro a 12:39' dateTime='2023-10-29 12:39:00'>Cerca de 1h atrás</time>
                        </div>
                        <button 
                        onClick={handleDeleteComment}
                        title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}