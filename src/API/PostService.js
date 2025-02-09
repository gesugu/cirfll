import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get('https://6747fb0f5801f515358ec7bd.mockapi.io/Ordita3d')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}