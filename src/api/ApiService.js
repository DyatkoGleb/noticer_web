import axios from 'axios'

export default class ApiService
{
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    static addNote = async (message, itemType) => {
        return await axios.post(process.env.REACT_APP_NOTICER_API_URL + '/addNewNote', { message, itemType }, { headers: this.headers })
    }

    static deleteNote = async (id) => {
        return await axios.post(process.env.REACT_APP_NOTICER_API_URL + '/deleteNote', { id }, { headers: this.headers })
    }

    static deleteNotice = async (id) => {
        return await axios.post(process.env.REACT_APP_NOTICER_API_URL + '/deleteNotice', { id }, { headers: this.headers })
    }

    static fetchNotes = async () => {
        return await axios.get(process.env.REACT_APP_NOTICER_API_URL + '/getNotes', { headers: this.headers })
    }

    static fetchAllNotices = async () => {
        return await axios.get(process.env.REACT_APP_NOTICER_API_URL + '/getAllNotices', { headers: this.headers })
    }

    static fetchCurrentNotices = async () => {
        return await axios.get(process.env.REACT_APP_NOTICER_API_URL + '/getCurrentNotices', { headers: this.headers })
    }
}