import styled from 'styled-components'
import iconUnchecked from '../../assets/images/icons8-unchecked-checkbox-100.png'


const ImageUnchecked = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${iconUnchecked});
    background-size: 100%;
    background-repeat: no-repeat;
    fill: #eeeeee;

    &:hover {
        opacity: 0.8;
    }
`


const IconUnchecked = () => {
    return (
        <ImageUnchecked />
    )
}


export default IconUnchecked