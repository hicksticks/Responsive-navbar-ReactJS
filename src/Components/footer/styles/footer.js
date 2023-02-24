import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 10px;
  background-color: #070707;
  margin-top: auto;
  z-index: 101;
  @media (max-width: 1028px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1028px;
    margin: 0 auto;
    z-index: 101;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  width: 200px;
  color: white;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
  z-index: 101;
`;

export const LeftColumn = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
  width: 250px;
  z-index: 101;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: none;
  &:hover {
      color: #da575d;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 26px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;