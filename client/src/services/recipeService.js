import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/recipe';

export const recipeServiceFactory = (token) => {
       const request = requestFactory(token);

       const getAll = async() =>{
              const result = await request.get(baseUrl);
              return result;
       };

       const getCategoryAll = async (category) => {
              const query = encodeURIComponent(`category="${category}"`);
              const result = await request.get(`${baseUrl}?where=${query}`);

              return result;
       };

       const getOne = async (recipeId) => {
              const result = await request.get(`${baseUrl}/${recipeId}`);
              return result;

       };
       const getAllMine = async (ownerId) => {
              const query = encodeURIComponent(`_ownerId="${ownerId}"`);

              const result = await request.get(`${baseUrl}?where=${query}`);

              return result;
       };


       const create = async (data) => {
              const result = await request.post(`${baseUrl}`, data);
              return result;
       }

       const deleteOne = (recipeId) => {
              request.del(`${baseUrl}/${recipeId}`);
       }

       const edit = (recipeId, value) => {

              request.put(`${baseUrl}/${recipeId}`, value)
       }

       return {
              getOne,
              getAll,
              create,
              getCategoryAll,
              getAllMine,
              deleteOne,
              edit
       }
}