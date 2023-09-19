import FadedText from "./FadedText";


const FadedBlock = (props) => {
    return (
        <div>
            <FadedText>{props.children}</FadedText>
        </div>
    )
}


export default FadedBlock