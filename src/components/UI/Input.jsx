import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'


const StyledEditableDiv = styled.div.attrs((props) => ({
	contentEditable: true,
	dangerouslySetInnerHTML: { __html: props.value },
}))`
	position: relative;
	margin: 15px 0;
	padding: 8px;
	height: max-content;
	max-height: 10em;
	min-width: 155px;
	max-width: 400px;
	background: none;
	border: none;
	color: white;
	transition: 0.1s;
	overflow-y: auto;

	&::-webkit-scrollbar {
        width: 0;
    }
	
	&:hover,
	&:focus {
		background-color: #080808;
		box-shadow: 0 0 8px #285134;
		border-radius: 20px;
	}

	&:empty::before {
		content: attr(placeholder);
		color: #757575;
		position: absolute;
		pointer-events: none;

}
`

const Input = React.forwardRef(({ value, ...props }, ref) => {
	useEffect(() => {
		ref.current.focus()
		const range = document.createRange()
		const selection = window.getSelection()
		range.selectNodeContents(ref.current)
		range.collapse(false)
		selection.removeAllRanges()
		selection.addRange(range)
	}, [value])

	return (
		<StyledEditableDiv
			placeholder="24.01.2023 11:11 Text.."
			ref={ref}
			value={value}
			{...props}
		></StyledEditableDiv>
	)
})


export default Input