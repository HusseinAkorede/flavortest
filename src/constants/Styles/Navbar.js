// Navbar.js

import styled from 'styled-components';

const Navibar = styled.nav` 
  background-color: #fff    ;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #000;
  font-size: 20px;
  letter-spacing: 1px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 80px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavLink = styled.li`
  position: relative;
  color: #000;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    ul {
      display: block;
    }
  }
`;

const Dropdown = styled.ul`
width: max-content;
  list-style: none;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.1);`;

const DropdownItem = styled.li`
  padding-block: 15px;
  padding-left: 10px;
  padding-right: 20px;
  background-color: #FFF;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f0f0f0; /* Background color on hover */
    color: #000; /* Text color on hover */
  }
  `;
  const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 4px;
`;

const SearchButton = styled.button`
  padding: 8px 12px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #eee; /* Lighter background color on hover */
    color: #555; /* Lighter text color on hover */
  }
`;

export const navbarLinks = [
    {
        id: 1,
        text: 'Meals',
        dropdownContent: ['Option 1', 'Option 2', 'Option 3'] 
    },
    {
        id: 2,
        text: 'Ingredients',
        dropdownContent: ['Option 1', 'Option 2', 'Option 3'] 
    },
    {
        id: 3,
        text: 'Cuisines',
        dropdownContent: ['Option 1', 'Option 2', 'Option 3'] 
    },
    {
        id: 4,
        text: 'Ingredients',
        dropdownContent: ['Option 1', 'Option 2', 'Option 3'] 
    }
]
export { Navibar, Logo, NavLinks, NavLink, Dropdown, DropdownItem, SearchButton, SearchContainer, SearchInput };
