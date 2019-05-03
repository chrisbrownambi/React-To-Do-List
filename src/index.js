import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import styled from "styled-components"


var destination = document.querySelector("#container");

const Container = styled.div`
    
    margin: 50px;
    box-shadow: 0 10px 20px 0 rgba(50, 62, 99, 0.04);
    border-radius: 14px;
`


ReactDOM.render(
    <Container>
        <TodoList></TodoList>
    </Container>,

    destination
)