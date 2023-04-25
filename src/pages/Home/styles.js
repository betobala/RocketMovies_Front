import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
margin-bottom: 30px;
 
`

export const TopContent = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 123px 0;
  
  

  > button {
    width: 207px;
    height: 48px;
  }

  > h1 {
    font-size: 32px;
    line-height: 42px;
  }
`
export const Content = styled.div`
 
  padding-left:123px;
  padding-right: 5px;
  overflow-y: auto;
  margin-right: 123px;
  
  margin-top: 50px;
  height: 800px;
  

  ::-webkit-scrollbar { width: 8px; };
  ::-webkit-scrollbar-track {   display: none; box-shadow: inset 0 0 5px grey;    border-radius: 10px; };
  ::-webkit-scrollbar-thumb {   background: ${({ theme }) => theme.COLORS.PINK};    border-radius: 10px; };
  ::-webkit-scrollbar-thumb:hover {   background-color: ${({ theme }) => theme.COLORS.PINK}; };

  h1 {
    margin-bottom: 8px;
  }

  p {
    text-align: left;
  }
`



