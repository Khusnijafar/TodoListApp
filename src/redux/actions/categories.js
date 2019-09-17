import axios from 'axios'

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get('https://todolist-app-backend.herokuapp.com/category')
    }
} 