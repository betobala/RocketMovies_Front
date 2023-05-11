import styled from "styled-components";

export const Container = styled.button`

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: none;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
  }

  > p {
    font-family: 'Roboto';
    font-size: 16px;
    line-height: none;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    height: 40px;


    margin-top: 15px;
    margin-bottom: 15px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

`