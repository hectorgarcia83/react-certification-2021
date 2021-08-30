import styled from 'styled-components';

export const Item = styled.div`
  border: solid 1px #e4e4e4;
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.bodyBackground};
`;

export const Thumbnail = styled.img`
  width: 120px;
  height: 90px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 200;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin-left: 10px;
  color: ${(props) => props.theme.fontColor};
`;
