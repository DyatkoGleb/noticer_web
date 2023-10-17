import {useState} from 'react'

export const useDataMutation = (callback, inputValue) => {
    const [isMutating, setIsMutating] = useState(false)
    const [error, setError] = useState('')

    const mutating = async () => {
        try {
            setIsMutating(true)
            await callback(inputValue)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsMutating(false)
        }
    }

    return [mutating, isMutating, error, setError]
}