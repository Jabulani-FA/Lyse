import axios from "axios"
import type {queryInterface as query} from "../interface/userInput"

export const createTicket = async(query: query) => {
    return await axios.post("http://localhost:8000/api", query)
}

