import Button from '../UI/Button'
import IconTodo from '../UI/IconTodo'
import IconNote from '../UI/IconNote'
import IconNotice from '../UI/IconNotice'

const NoteTypeSelector = ({ typeNewNote, setTypeNewNote, onButtonClick }) => {
    const selectorStyle = {
        marginRight: 15
    }
    const buttonStyle = {
        marginLeft: 10,
        marginRight: 0,
        padding: 7,
        borderRadius: 7
    }
    const selectedButtonStyle = {
        marginLeft: 10,
        marginRight: 0,
        padding: 7,
        borderRadius: 7,
        boxShadow: "0 0 8px #525252"
    }
    const handleButtonClick = (type) => {
        setTypeNewNote(type)
        onButtonClick()
    }

    return (
        <div style={selectorStyle}>
            <Button
                style={typeNewNote === 'note' ? selectedButtonStyle : buttonStyle}
                onClick={() => handleButtonClick('note')}
                autoFocus
            >
                <IconNote/>
            </Button>
            <Button
                style={typeNewNote === 'notice' ? selectedButtonStyle : buttonStyle}
                onClick={() => handleButtonClick('notice')}
            >
                <IconNotice/>
            </Button>
            <Button
                style={typeNewNote === 'todo' ? selectedButtonStyle : buttonStyle}
                onClick={() => handleButtonClick('todo')}
            >
                <IconTodo/>
            </Button>
        </div>
    )
}

export default NoteTypeSelector