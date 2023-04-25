import styled from "styled-components";

export const Container = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  background-color: #0D0C0F;
  color: ${({ theme }) => theme.COLORS.PINK};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`