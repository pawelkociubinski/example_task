import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const PreviousPage = styled.div`
  cursor: pointer;
  margin-right: 30px;
`;

export const NextPage = styled.div`
  cursor: pointer;
  margin-left: 30px;
`;

export const Dot = styled.div`
  display: flex;
  ${({ showEllipsis }) => {
    if (showEllipsis) {
      return css`
        & + & {
          display: none;
        }
      `;
    }
  }};
`;
