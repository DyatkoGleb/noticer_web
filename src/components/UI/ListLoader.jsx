import styled from 'styled-components'


const StyledNoteBlock = styled.div`
    margin: 10px 0;
    padding: 15px 20px;
    height: 44px;
    border-radius: 20px;
    background-color: #080808;
    background: linear-gradient(130deg, #080808, #121212);
    background-size: 150% 100%;
    animation: gradientAnimation .7s infinite alternate;


    @keyframes gradientAnimation {
        0% {
            background-position: 0 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }
`


const ListLoader = () => {
    const randomNumberBigBlock = Math.floor(Math.random() * 4) + 1
    const loaderBlocks = []

    for (let i = 1; i <= 4; i++) {
        loaderBlocks.push(<StyledNoteBlock key={i} style={{height: i === randomNumberBigBlock ? '71px' : ''}} />)
    }

    return (
        <div>
            { loaderBlocks }
        </div>
    )
}


export default ListLoader