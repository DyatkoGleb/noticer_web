import axios from 'axios'

export default class NoteService
{
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }


    static sendNote = async (message) => {
        const dataToSend = { message }

        try {
            await axios.post('http://localhost:8008/addNewNote', dataToSend, { headers: this.headers })
            return true
        } catch (error) {
            throw error
        }
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