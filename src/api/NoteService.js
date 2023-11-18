import axios from 'axios'

export default class NoteService
{
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }


    static addNote = async (message, itemType) => {
        return await axios.post('http://localhost:8008/addNewNote', { message, itemType }, { headers: this.headers })
    }

    static fetchNotes = async () => {
        return await axios.get('http://localhost:8008/getNotes', { headers: this.headers })
    }

    static fetchAllNotices = async () => {
        return await axios.get('http://localhost:8008/getAllNotices', { headers: this.headers })
    }

    static fetchCurrentNotices = async () => {
        return await axios.get('http://localhost:8008/getCurrentNotices', { headers: this.headers })
    }
}