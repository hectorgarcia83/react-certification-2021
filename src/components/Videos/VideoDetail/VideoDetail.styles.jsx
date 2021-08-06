import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 770px) {
    padding: 0 40px;
    flex-direction: row;
    height: ${(props) => props.height};
  }
`;

export const VideoPlayerSection = styled.div`
  width: 100%;
  @media (min-width: 770px) {
    width: 70%;
    justify-content: center;
  }
`;

export const ListSection = styled.div`
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  @media (min-width: 770px) {
    width: 30%;
    margin-left: 3px;
    overflow-y: auto;
    margin-top: 0px;
  }
`;
