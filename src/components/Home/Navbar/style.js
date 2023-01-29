import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    background-color:#262626;
    padding: 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    .ant-drawer-content-wrapper{
        width:780px !important;
    }
`
const SidebarWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    .inc , .dec{
        background: #0D6BEE;
        padding:5px 10px;
        border: none;
        border-radius:3px;
        outline:none;
        color:white;
        cursor: pointer;
    }
    .remove{
        background: #EE4548;
        padding:5px 10px;
        border: none;
        border-radius:3px;
        outline:none;
        color:white;
        cursor: pointer;
    }
    table{
        td{
            width: 30%;
            padding:5px;
        }
    }
`

export {Container , SidebarWrapper}