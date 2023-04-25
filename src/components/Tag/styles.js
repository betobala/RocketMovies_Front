import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Roboto';
  font-size: 12px;
  padding: 5px 16px;
  border-radius: 5px;
  margin-right: 8px;
  font-weight: 400;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
