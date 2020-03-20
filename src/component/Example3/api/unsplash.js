import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YAUUomIkGT99pdavHFswrX1tattK22f94J31V4o0IMk'
    }
})

