import axios from 'axios'


const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}


export const sendNote = async (message) => {
    const dataToSend = { message }

    try {
        await axios.post('http://localhost:8008/addNewNote', dataToSend, { headers })
        return true
    } catch (error) {
        throw error
    }
}

export const fetchNotes = async () => {
    const response = await axios.get('http://localhost:8008/getNotes', { headers })

    return response.data
}

export const fetchAllNotices = async () => {
    try {
        const response = await axios.get('http://localhost:8008/getAllNotices', { headers })
        return response.data
    } catch (error) {
        console.error('Error fetching all notices:', error)
        throw error
    }
}

export const fetchCurrentNotices = async () => {
    try {
        const response = await axios.get('http://localhost:8008/getCurrentNotices', { headers })
        return response.data
    } catch (error) {
        console.error('Error fetching current notices:', error)
        throw error
    }
}