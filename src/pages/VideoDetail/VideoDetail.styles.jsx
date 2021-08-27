import styled from 'styled-components';

export const Body = styled.div`
  padding-top: 30px;
  background-color: ${(props) => props.theme.bodyBackground};
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
