import styled from 'styled-components'
import iconTodo from '../../assets/images/icons8-todo-list-100.png'


const ImageTodo = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${iconTodo});
    background-size: 100%;
    background-repeat: no-repeat;
    fill: #eeeeee;
`


const IconTodo = () => {
    return (
        <ImageTodo />
    )
}


export default IconTodo