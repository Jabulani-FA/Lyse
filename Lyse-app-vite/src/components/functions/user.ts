import axios from "axios";
import type{ User } from "../interface/reducers";

export const createUser = async(user: User, token: string) => {
    return await axios.post(`${process.env.SERVER_API}/user`, 
        user,
        {
            headers:{
                auth: token
            }
        }
    )
}