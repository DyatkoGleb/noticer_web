import React from 'react'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import NoticeList from './components/NoticeList'
import './App.css';


function App() {
  

  return (
    <div>
      <NewNoteForm></NewNoteForm>

        <div className="d-flex content-center">
          <NoteList></NoteList>
          <NoticeList></NoticeList>
        </div>
    </div>
  );
}

export default App;
