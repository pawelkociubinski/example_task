import styled from 'styled-components';

export default {
  default: {
    color: '#DEDFE0',
  },
  active: {
    color: '#E30015',
  },
};

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color};
  font-size: 16px;
`;
