import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import ContentWrapper from './components/UI/ContentWrapper'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import NoticeList from './components/NoticeList'
import './assets/scss/style.scss'
import {fetchAllNotices, fetchCurrentNotices, useFetchNotes} from './api'


function App() {
    const fetchNotes = useFetchNotes()

    const [notes, setNotes] = useState([])
    const [notices, setNotices] = useState([])
    const [isLoadAllNotices, setIsLoadAllNotices] = useState(false)

    useEffect(() => {
        fetchNotes()
            .then(data => {
                setNotes(data)
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }, [fetchNotes])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (isLoadAllNotices ? fetchAllNotices() : fetchCurrentNotices())
                setNotices(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [isLoadAllNotices])

    return (
        <div>
            <Header />

            <ContentWrapper>
                <NewNoteForm />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <NoteList notes={notes} />
                    </div>
                    <div className="col-12 col-md-6">
                        <NoticeList notices={notices} isLoadAllNotices={isLoadAllNotices} setIsLoadAllNotices={setIsLoadAllNotices} />
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}


export default App
