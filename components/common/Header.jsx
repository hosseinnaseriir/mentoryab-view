import React,{ useEffect, useState } from 'react';
import Head from "next/head";
import axios from "axios";
import { getCookies } from "cookies-next";
import { BASE_API } from "../../api";
import Link from "next/link";
import getFetch from "../../utils/getFetch";
import Button from "./Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import styled from "styled-components";
import theme from "../../theme";
import IconButton from '@mui/material/IconButton'
import { svgIcons } from '../../assets/icons/svgIcons';
import { Box } from '@mui/material';
import { setCookies } from "cookies-next";

const Header = () => {
  const [headerData, setHeaderData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () =>{
    setCookies("token", "");
    setAnchorEl(null);
  }

  useEffect(() => {
    let url;
    let headers = {
      "ath-token": getCookies("token").token,
    };

    getCookies("token").token
      ? (url = `${BASE_API}/get-user-header`)
      : (url = `${BASE_API}/get-header`);

    getFetch(true, url, headers, (res) => {
      setHeaderData(res.data);
    });
  }, [anchorEl]);


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
               id="fade-button"
               aria-controls={open ? 'fade-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClick}
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
               open={open}
               onClose={handleClose}
               TransitionComponent={Fade}
             >
               <MenuItem onClick={handleClose}>پروفایل</MenuItem>
               <MenuItem onClick={handleLogout}>خروج از حساب</MenuItem>
             </Menu>
          </>
        ) : (
          <Link href="/login">
            <Button>حساب کاربری</Button>
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
