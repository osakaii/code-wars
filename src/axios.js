import axios from "axios"
import { API } from './consts/api';

export const getUserInfo = async ( userName, page = 0) =>{
    const response = await axios.get(API + `users/${userName}/code-challenges/completed?page=${page}`)
    return response.data
}

export const getChallenge = async (id) =>{
    const response = await axios.get(API + `code-challenges/${id}`)
    return response.data
}