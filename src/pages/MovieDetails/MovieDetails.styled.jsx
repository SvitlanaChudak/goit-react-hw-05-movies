import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  border: none;
  background-color: transparent;
  margin: 20px 0 0 35px;
  padding: 0;
  font-weight: 700;
  cursor: pointer;
  :hover {
text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 30px;
  background-color: #78BBF5;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Image = styled.img`
  width: 300px;
`;

export const Info = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  margin-left: 30px;
`;

export const InfoList = styled.ul`
  text-decoration: none;
  margin-left: 20px;
  margin-top: 0;
  list-style: none;
`;

export const InfoLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  :hover {
    text-decoration: underline;
`;
