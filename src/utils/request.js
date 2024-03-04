import axios from 'axios'
const service=axios.create({
    baseURL:'https://rickandmortyapi.com'
})

export default service