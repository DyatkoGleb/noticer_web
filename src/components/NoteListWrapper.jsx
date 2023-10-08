import NoteList from './NoteList'
import ListLoader from './UI/ListLoader'

const NoteListWrapper = ({ isNotesLoading, notes }) => {
    return (
        <div>
            <div className="row">
                <h2 className="mt-3 mb-3">Notes</h2>
            </div>

            {isNotesLoading
                ? <ListLoader/>
                : <NoteList notes={notes} />
            }
        </div>
    )
}

export default NoteListWrapper;