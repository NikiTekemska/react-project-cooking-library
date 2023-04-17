import { useForm } from "../../../hooks/useForm";
import styles from './AddComment.module.css';

export const AddComment = ({
    onCommentSubmit
}) => {
    const {values, changeHandler, onSubmit} = useForm ({
        comment:''
    }, onCommentSubmit)
    return (
        <article className={styles.createComment}>
            
            <form className={styles.comment} onSubmit={onSubmit}>
                <label>Add new comment:</label>
                <textarea className={styles.textBox} name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                <input className={styles.btnSubmit} type="submit" value="Add Comment" />
            </form>
        </article>
    )
}