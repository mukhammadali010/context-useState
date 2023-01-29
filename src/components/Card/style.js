import styled from "styled-components";

const Container = styled.div`
    width:250px ;
    background-color:#222222;
    border-radius:5px;
    height: 400px;
    margin:20px;
    word-break: break-all; 
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction:column;
    h3{
        margin: 10px 20px;
        font-size: 18px;
        white-space:nowrap;
    }
    p{
        margin: 10px 20px;
    }
    overflow-x: hidden;
    button{
        background-color:#C78E58;
        border: none;
        border-radius:5px;
        margin-top:10px;
        padding:10px;
        cursor: pointer;
        :active{
            transform:scale(0.97)
        }        
    }
`
const ImgWrapper = styled.div`
    width: 250px;
    background-color:white;
    padding:10px;
    display:flex;
    align-items: center;
    justify-content: center;
    img{
        height:200px;
        width: 200px;
    }
`

export {Container , ImgWrapper}