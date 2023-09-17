import React from 'react'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import NoticeList from './components/NoticeList'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom-bootstrap.css'
import styled from "styled-components"


const ContentContainer = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: 10px auto 0 auto;
`


function App() {
    return (
        <ContentContainer>
            <NewNoteForm></NewNoteForm>

            <div className="row">
                  <div className="col-12 col-md-6">
                        <NoteList></NoteList>
                  </div>
                  <div className="col-12 col-md-6">
                        <NoticeList></NoticeList>
                  </div>
            </div>
        </ContentContainer>
    )
}


export default App
