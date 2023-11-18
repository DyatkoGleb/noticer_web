import styled from 'styled-components'
import iconNotice from '../../assets/images/icons8-tear-off-calendar-100.png'


const ImageNotice = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${iconNotice});
    background-size: 100%;
    background-repeat: no-repeat;
    fill: #eeeeee;
`


const IconNotice = () => {
    return (
        <ImageNotice />
    )
}


export default IconNotice