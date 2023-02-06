import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
list-style: none;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 45px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    
`;

export const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 25px;
  color: white;
  margin-left: 3px;
  margin-right: 30px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;