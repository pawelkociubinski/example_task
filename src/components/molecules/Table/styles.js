import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid #dddddd;
  border-top: 0;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const HeadRow = styled.tr`
  background-repeat: repeat-x;
  background: #f2f2f2;
  color: #707070;
  font-weight: normal;
`;

export const BodyRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CellWrapper = styled.div`
  margin-right: 10px;
`;

export const BodyCell = styled.td`
  border: 1px solid #ddd;
  color: #393939;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  padding: 8px;
`;

export const HeadCell = styled.th`
  border-bottom-width: 2px;
  border-color: #ddd;
  border: 1px solid #ddd;
  border-top: 0;
  font-size: 12px;
  padding: 8px;
  width: ${({ width }) => width}%;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;
