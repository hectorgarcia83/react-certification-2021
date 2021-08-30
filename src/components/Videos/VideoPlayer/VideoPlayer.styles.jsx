import styled from 'styled-components';

export const TitleRow = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-weight: 400;
  margin: 0;
  color: ${(props) => props.theme.fontColor};
  flex: 1;
`;

export const FavoriteButton = styled.button`
  width: 150px;
  height: 30px;
  margin-right: 5px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.fontColor};
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  background-color: ${(props) => props.theme.bodyBackground};
`;

export const Statistics = styled.div`
  display: flex;
  color: ${(props) => props.theme.fontColor};
  font-size: 0.9rem;
  background-color: ${(props) => props.theme.bodyBackground};
`;

export const Views = styled.div`
  flex-grow: 1;
`;
export const Likes = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
`;

export const Dislikes = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
`;
