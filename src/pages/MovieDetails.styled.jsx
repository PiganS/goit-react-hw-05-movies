import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  color: white;
  margin-top: 10px;
`;

export const StyledDescrip = styled.div`
  max-width: 600px;

  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #4d4545;
  color: white;
`;

export const AdditionalInformation = styled.div`
  margin-bottom: 30px;
`;

export const StyledInformationTitle = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  text-align: start;
  color: white;
`;

export const StyledInformationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  color: white;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  background-color: #5f5d5d;

  &:hover {
    color: orangered;
    border: 1px solid orangered;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const StyledGoToBack = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;

  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    color: orangered;
  }
`;
