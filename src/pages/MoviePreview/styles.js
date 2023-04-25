import styled from "styled-components";


export const Container = styled.div`

  width: 100%;
  height: 100vh;
  margin-bottom: 10px;

> a {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    margin-top: 40px;
    margin-bottom: 10px;
    padding: 0 123px;
  }
`

export const MovieInfo = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
  "namerate"
  "author"
  "tags";
  overflow-y: auto;
  ::-webkit-scrollbar { width: 8px; };
  ::-webkit-scrollbar-track {   display: none; box-shadow: inset 0 0 5px grey;    border-radius: 10px; };
  ::-webkit-scrollbar-thumb {   background: ${({ theme }) => theme.COLORS.PINK};    border-radius: 10px; };
  ::-webkit-scrollbar-thumb:hover {   background-color: ${({ theme }) => theme.COLORS.PINK}; };

  padding-left: 123px;
  padding-right: 10px;
  margin-right: 123px;
  
  
`
export const NameRate = styled.div`
  display: flex;
  gap: 19px;
  grid-area: namerate;

  margin-bottom: 24px;
  margin-top: 10px;
  

   img {
    width: 20px;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 40px;
  
  grid-area: author;

 > img {
  width: 16px;
  height: 16px;
  border-radius: 50%;
 }
 
 > svg {
  margin-left: 5px;
  margin-right: -1px;
  color: ${({ theme }) => theme.COLORS.PINK};
 }
`
export const Tags = styled.div`
  grid-area: tags;

  > span {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK2};
  }
`

export const Description = styled.div`
  margin-top: 40px;
  
`