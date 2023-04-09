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
            <label>Add new comment:</label>
            <form className={styles.comment} onSubmit={onSubmit}>
                <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                <input className={styles.btnSubmit} type="submit" value="Add Comment" />
            </form>
        </article>
    )
}