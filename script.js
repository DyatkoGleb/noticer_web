const form = document.getElementById('form')
const input = document.getElementById('input')
const btnAdd = document.getElementById('btn-add')



btnAdd.addEventListener('click', () => {
    if (sendNote()) {
        noteType = null
        input.value = ''
        input.focus()
    }
})


const sendNote = async () => {
    const dataToSend = {message: input.value}
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }

    try {
        const response = await axios.post('http://localhost:8008/addNewNote', dataToSend, { headers })

        console.log(response.data)
        return true
    } catch (err) {
        return false
    }
}