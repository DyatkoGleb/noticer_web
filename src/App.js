import React from "react";
import NoteList from "./components/NoteList";
import NoticeList from "./components/NoticeList";

import { sendNote } from "./api";

import './App.css';


function App() {
  const addNewNote = () => {
    const input = document.getElementById('input')

    if (sendNote(input.value)) {
      input.value = ''
      input.focus()
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

      <div className="d-flex content-center">
        <NoteList></NoteList>
        <NoticeList></NoticeList>
      </div>
    </div>
  );
}

export default App;
