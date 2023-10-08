import ErrorItem from './ErrorItem'
import styled from 'styled-components'
import {useEffect, useRef} from "react";


const StyledErrorList = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    max-height: 320px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`


const ErrorList = ({ errors, removeError }) => {
    const errorListRef = useRef()

    useEffect(() => {
        if (errorListRef.current) {
            errorListRef.current.scrollTop = errorListRef.current.scrollHeight;
        }
    }, [errors])

    if (!errors) {
        return null
    }

    return (
        <StyledErrorList id="error-list" ref={errorListRef}>
            {errors.map(error =>
                <ErrorItem key={error.id} error={error} onClick={() => removeError(error.id)} />
            )}
        </StyledErrorList>
    )
}


export default ErrorList