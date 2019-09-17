import axios from 'axios'

export const getNote = () => {
    return {
        type: 'GET_NOTE',
        payload: axios.get('https://todolist-app-backend.herokuapp.com/notes')
    }
}

export const addnote = (data) => {
    return {
        type: 'ADD_NOTE',
        payload: axios.post('https://todolist-app-backend.herokuapp.com/notes', data)
    }
}

export const updatenote = (id_note, data) => {
    return {
        type: 'UPDATE_NOTE',
        payload: axios.patch('https://todolist-app-backend.herokuapp.com/notes/' + id_note, data)
    }
}

export const sortNote = (ket) => {
    return {
        type: 'SORT_NOTE',
        payload: axios.get('https://todolist-app-backend.herokuapp.com/notes/sort/' + ket)
    }
}

export const sortbyCategory = (id_category) => {
    return {
        type: 'BYCATEGORY_NOTE',
        payload: axios.get('https://todolist-app-backend.herokuapp.com/notes/' + id_category)
    }
}

export const searchNote = (data) => {
    return {
        type: 'SEARCH_NOTE',
        payload: axios.get('https://todolist-app-backend.herokuapp.com/notes/searchnote' + data)
    }
}