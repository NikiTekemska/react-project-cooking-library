import * as request from "./requester";
const baseUrl = 'http://localhost:3030/jsonstore/recipes';
export const getAllCategory = async () => {
       const recipes = await request('GET', baseUrl);
       return recipes
};

export const getCategoryRecipes = () => {

};

export const getOne = () => {

};


export const create = async (data) => {
       const result = await request.post(`${baseUrl}/${data.category}/info`,data);
       return result;
}