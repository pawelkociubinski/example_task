import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 16px;
  position: relative;
`;

export const StyledTextField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  height: 48px;
  left: 0;
  outline: none;
  padding: 0 15px;
  position: relative;
  width: 100%;
`;

export const CoverLayer = styled.div`
  background-color: #f7f7f7;
  bottom: 0;
  height: ${({ active }) => (active ? '100%' : '0%')};
  left: 0;
  position: absolute;
  transition: all 0.3s;
  width: 100%;
  z-index: -1;
`;
