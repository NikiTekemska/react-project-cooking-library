export const Details = ({
    name,
    image,
    timePreparation,
    ingredients,
    preparation
}) => {
    return(
        <div>
            <h1>{name}</h1>
            <img src={image} alt="img" />
            <h2>Time preparation:{timePreparation}</h2>
            <h2>Ingredients: {ingredients}</h2>
            <h2>Preparation: {preparation}</h2>
        </div>
    )
}