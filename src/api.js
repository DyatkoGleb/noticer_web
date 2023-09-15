import { useMemo } from 'react';
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

export const useFetchNotes = () => {
    const fetchNotes = useMemo(() => async () => {
        try {
            const response = await axios.get('http://localhost:8008/getNotes', { headers })

            return response.data.data
        } catch (error) {
            throw error
        }
    }, [])

    return fetchNotes
}

export const useFetchNotices = () => {
    const fetchNotices = useMemo(() => async () => {
        try {
            const response = await axios.get('http://localhost:8008/getNotices', { headers })

            return response.data.data
        } catch (error) {
            throw error
        }
    }, [])

    return fetchNotices
}
