import React from 'react'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import NoticeList from './components/NoticeList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-bootstrap.css'


function App() {
  return (
    <div>
      <NewNoteForm></NewNoteForm>

        <div className="d-flex justify-content-center">
          <NoteList></NoteList>
          <NoticeList></NoticeList>
        </div>
    </div>
  );
}


export default App;
