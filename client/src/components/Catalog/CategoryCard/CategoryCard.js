import { Link } from 'react-router-dom';
export const CategoryList = ({
    title,
    image
}) => {
    return (
        <li><Link to={`/recipes/${title}`}>
            <img src={image} alt="pic" />
            <h3>{title}</h3>
        </Link></li>

    )
}