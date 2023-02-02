import axios from 'axios';

export default ()=>{
    const PORT = process.env.PORT || 3001;
    return axios.create({
        baseURL:`http://localhost:${PORT}`
    })
}