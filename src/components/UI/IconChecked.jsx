import styled from 'styled-components'
import iconChecked from '../../assets/images/icons8-checked-checkbox-100.png'


const ImageChecked = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${iconChecked});
    background-size: 100%;
    background-repeat: no-repeat;
    fill: #eeeeee;

    &:hover {
        opacity: 0.8;
    }
`


const IconChecked = () => {
    return (
        <ImageChecked />
    )
}


export default IconChecked