import styled from 'styled-components'
import iconCheckmark from '../../assets/images/icons8-done-100.png'


const ImageCheckmark = styled.div`
    width: 14px;
    height: 14px;
    background-image: url(${iconCheckmark});
    background-size: 100%;
    background-repeat: no-repeat;
    fill: #eeeeee;

    &:hover {
        opacity: 0.8;
    }
`


const IconCheckmark = () => {
    return (
        <ImageCheckmark />
    )
}


export default IconCheckmark