import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 10px;

  > main {
    margin-top: 40px;
  }

  .tags {
    display: flex;
    justify-content: flex-start;
    background: #0D0C0F;
    border-radius: 10px;
  }

`

export const Form = styled.form`
  
  margin: 0 123px 0;

  > a {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    margin-bottom: 10px;
  }

  > h1 {
      font-size: 36px;
      padding-top: 24px;
      padding-bottom: 40px;
  }

`
export const Content = styled.div`
    height: 500px;
    overflow-y: auto;
    padding-right: 20px;
    ::-webkit-scrollbar { width: 8px; };
    ::-webkit-scrollbar-track {   display: none; box-shadow: inset 0 0 5px grey;    border-radius: 10px; };
    ::-webkit-scrollbar-thumb {   background: ${({ theme }) => theme.COLORS.PINK};    border-radius: 10px; };
    ::-webkit-scrollbar-thumb:hover {   background-color: ${({ theme }) => theme.COLORS.PINK}; };
    
    > h1 {
      font-size: 36px;
      margin-top: 24px;
      margin-bottom: 40px;
  }
  `


export const Title_rate = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  `
export const Footer = styled.div`
  display: flex;
  justify-content: center;

  > button {
    width: 30%;
  }
  `


