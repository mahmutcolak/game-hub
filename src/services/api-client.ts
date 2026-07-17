import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4ab7259fa2f04b878ee3017a71aa3025'
    }
})

