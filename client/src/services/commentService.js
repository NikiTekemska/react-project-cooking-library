import { requestFactory } from "./requester"

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`);

    const comments = Object.values(result);

    return comments;
};

export const create = async(recipeId, comment) => {
    const result = await request.post(baseUrl, {recipeId, comment});

    return result;
}