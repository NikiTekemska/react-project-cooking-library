import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from './Details.module.css';

import { useService } from '../../hooks/useService'
import { recipeServiceFactory } from '../../services/recipeService';
import { AuthContext } from "../../contexts/AuthContext";
import * as commentService from '../../services/commentService';

import { AddComment } from "./AddComment/AddComment";
import { DeleteModal } from "./DeleteModal";



export const Details = () => {
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext);
    const [currentRecipe, setCurrentRecipe] = useState({});
    const recipeService = useService(recipeServiceFactory);
    const { category, recipeId } = useParams();
    const navigate = useNavigate();
    const [showDelete, setShowDelete] = useState(null);
    useEffect(() => {
        Promise.all([
            recipeService.getOne(recipeId),
            commentService.getAll(recipeId),
        ])
            .then(([recipeData, commentsData]) => {
                setCurrentRecipe({
                    ...recipeData,
                    comments: commentsData
                });
            })


    }, [recipeId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(recipeId, values.comment);
        setCurrentRecipe(state => ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...response,
                    author: {
                        userEmail
                    }
                }
            ]
        }));

    }

    const isOwner = currentRecipe._ownerId === userId;
    const onDelete = async () => {

        // const result = confirm(`Are ypu sure you want to delete this ?`)

        await recipeService.deleteOne(recipeId);

        // delete from the state
        navigate('/recipes');

    }
    
    const onClose = () => { 
        setShowDelete(null); 
    };
    const onDeleteClick = (userId) => {
        setShowDelete(userId);
    };

    const onDeleteHandler = () => {
        onDelete(showDelete);
        onClose();
    };

    return (
    <>{showDelete && <DeleteModal onClose={onClose} onDelete={onDeleteHandler} />}
        <section >
            <div className={styles.Details}>

                <div >
                    <img src={currentRecipe.image} alt="img" />
                    <h1>{currentRecipe.title}</h1>
                    <span className="">Preparation time: {currentRecipe.timePreparation}</span>
                    <p className="type">Ingridients: {currentRecipe.ingridients}</p>
                    <span className="">Preparation: {currentRecipe.preparation}</span>
                </div>


                {isOwner && (
                    <div className="buttons">
                        <Link to={`/recipes/${category}/${recipeId}/edit`} className="button"><button>Edit</button> </Link>
                        <button href="#" className="button" onClick={onDeleteClick}>Delete</button>
                    </div>)}

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {currentRecipe.comments && currentRecipe.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email ? x.author.email : x.author.userEmail}: {x.comment}</p>
                                {/* {x.author.email == userEmail && (
                                   <div> <button>Edit</button>
                                    <button>Delete</button>
                                    <div>
                                )} */}
                            </li>
                        ))}
                    </ul>
                    {!currentRecipe.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}

                </div>

            </div>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    </>
    )
}