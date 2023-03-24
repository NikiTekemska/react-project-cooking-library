import { Link } from 'react-router-dom';
export const CategoryList = ({
    name,
    image
}) => {
    return (
        <li><Link to={`/recipes/${name}`}>
            <img src={image} alt="pic" />
            <h3>{name}</h3>
        </Link></li>

    )
}