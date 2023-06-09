import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 64px;

  padding: 0 123px;

  > h1 {
    color: ${({ theme}) => theme.COLORS.PINK};
    font-size: 24px;
  }

`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  

  
  > div {
    display: flex;
    flex-direction: column;
    line-height: 18px;
    
    
    a {

      font-size: 14px;
      font-weight: 700;
      color: ${({ theme}) => theme.COLORS.WHITE};
    }
    button {
      margin-left: auto;
      font-size: 14px;
      color: ${({ theme}) => theme.COLORS.GRAY_100};
    }
    
  }
  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-left: 9px;
  }

`
