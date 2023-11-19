import React from 'react'
import styled from 'styled-components';
import { Navibar, Logo, NavLink, NavLinks, Dropdown, DropdownItem, SearchButton, SearchContainer, SearchInput} from '../constants/Styles/Navbar';
import { navbarLinks } from '../constants/Styles/Navbar';


const Navbar = () => {

  return (
    <Navibar>
        <Logo>FlavorFusion</Logo>
        <NavLinks>
            {navbarLinks.map(({text, id, dropdownContent}) => (
                <NavLink key={id}>
                {text}
                    <Dropdown>
                        {dropdownContent.map((text, id) => ( 
                            <DropdownItem key={id}>{text}</DropdownItem>
                        ))}
                    </Dropdown>
            </NavLink>
            ))}
        </NavLinks>
        <SearchContainer>
            <SearchInput type="text" placeholder="Search..." />
            <SearchButton type="button">Search</SearchButton>
        </SearchContainer>
    </Navibar>
  )
}

export default Navbar