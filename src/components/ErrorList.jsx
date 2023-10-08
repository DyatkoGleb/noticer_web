import ErrorItem from './ErrorItem'
import styled from 'styled-components'


const StyledErrorList = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`


const ErrorList = ({ errors, removeError }) => {
    if (!errors) {
        return
    }

    return (
        <StyledErrorList>
            {errors.map(error =>
                <ErrorItem key={error.id} error={error} onClick={() => removeError(error.id)}/>
            )}
        </StyledErrorList>
    )
}


export default ErrorList