import styled from 'styled-components'
import iconNote from '../../assets/images/icons8-note-100.png'


const ImageNote = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${iconNote});
    background-size: 100%;
    background-repeat: no-repeat;
    fill: #eeeeee;
`


const IconNote = () => {
    return (
        <ImageNote />
    )
}


export default IconNote