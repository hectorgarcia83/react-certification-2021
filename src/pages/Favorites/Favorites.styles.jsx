import styled from 'styled-components';

export const Body = styled.div`
  padding-top: 30px;
  background-color: ${(props) => props.theme.bodyBackground};
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-size: 3.3rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
  padding: 0;
  margin: 0;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Message = styled.h3`
  text-align: center;
`;
