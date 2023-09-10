import React from "react";
import axios from "axios";
import './App.css'; // Путь к файлу стилей


function App() {

  const addNewNote = () => {
    const input = document.getElementById('input')

    if (sendNote()) {
      input.value = ''
      input.focus()
    }
  }


  const sendNote = async () => {
    const input = document.getElementById('input')
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

  return (
    <div class="content">
      <div class="d-flex content-center align-center" id="form">
        <input 
          class="input" 
          id="input" 
          type="text" 
          placeholder="11.11.2023 11:11 Text.." 
          autofocus
        ></input>
        <input 
          class="btn" 
          id="btn-add" 
          type="button" 
          value="Добавить"
          onClick={addNewNote}
        ></input>
      </div>
    </div>
  );
}

export default App;
