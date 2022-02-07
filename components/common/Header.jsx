import React,{ useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Button from "./Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import styled from "styled-components";
import theme from "../../theme";
import { svgIcons } from '../../assets/icons/svgIcons';
import { Box } from '@mui/material';
import { removeCookies } from "cookies-next";
import { useDispatch , useSelector  } from 'react-redux'
import { fetchUserHeader } from './../../redux/slices/userSlice';
import { getCookies } from 'cookies-next';
import { useRouter } from "next/router";


const Header = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const { pending , userDetails :headerData} = useSelector(state =>  state.userSlice);

  const [anchorEl, setAnchorEl] = React.useState(null);



  const handleLogout = () =>{
    removeCookies("token",null);
    setAnchorEl(null);
  }

  const handleProfile =() => {
    setAnchorEl(null);
    console.log(headerData.iWantBeMentor)
    if(headerData.iWantBeMentor) router.push('/complete-register')
  }

  useEffect(() => {
    dispatch(fetchUserHeader())
  }, [getCookies("token").token]);

  return (
    <StyledHeader className="py-16">
      <nav className="container d-flex align-items-center ">
        <div
          className="logo fs-20 d-flex align-items-center justify-content-center rounded-12"
          style={{
            background: "#65FFB5",
            width: "155px",
            height: "55px",
          }}
          onClick={()=>{
            console.log('clivk')
            dispatch(fetchUserHeader())}}
        >
          {" "}
          لوگــــو
        </div>
        <ul className="main-menu d-flex col">
          {headerData?.menu?.length &&
            headerData.menu.map((menuItem) => (
              <li className="mx-32 menu-item" key={menuItem.id}>
                <Link href={menuItem.path}>
                  <a className="text-dark">{menuItem.name}</a>
                </Link>
                <ul className="sub-menu py-16">
                  {menuItem.childs?.length &&
                    menuItem.childs.map((child) => (
                      <li key={child.id} className="py-8">
                        <Link href={child.path}>
                          <a className="text-dark"> {child.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
        {headerData?.fullName ? (
          <>
               <Button
               variant='contained'
               id="fade-button"
               aria-controls={Boolean(anchorEl) ? 'fade-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
               onClick={(e) => setAnchorEl(e.currentTarget)}
               startIcon={<Box sx={{
                 position:'relative',
                 top:'.5rem',
                 right:'-1.6rem'
               }} >{svgIcons.whiteUser}</Box>}
             >
               {headerData.fullName}  
             </Button>
             <Menu
               id="fade-menu"
               MenuListProps={{
                 'aria-labelledby': 'fade-button',
               }}
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={() =>setAnchorEl(null)}
               TransitionComponent={Fade}
             >
               <MenuItem onClick={handleProfile}>پروفایل</MenuItem>
               <MenuItem onClick={handleLogout}>خروج از حساب</MenuItem>
             </Menu>
          </>
        ) : (
          <Link href="/login">
            <Button 
               variant='contained'
            >حساب کاربری</Button>
          </Link>
        )}
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  .menu-item {
    position: relative;
    &:hover {
      > a {
        color: ${theme.colors.primary};
      }
      .sub-menu {
        display: block;
      }
    }
    .sub-menu {
      display: none;
      position: absolute;
      width: 200%;
      top: 100%;
      right: 0;
      li:hover {
        a {
          color: ${theme.colors.primary};
        }
      }
    }
  }
`;
