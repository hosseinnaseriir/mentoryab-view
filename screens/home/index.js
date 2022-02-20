import React, { useRef, useState } from "react";
import Head from "next/head";
import TextField from "../../components/common/TextField";
import { svgIcons } from "../../assets/icons/svgIcons";
import Button from "../../components/common/Button";
import SimpleReactValidator from "simple-react-validator";
import postFetch from "../../utils/postFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookies } from "cookies-next";
import { useEffect } from "react";
import Header from "../../components/common/Header";
import { Box, Typography } from "@mui/material";
import { muiTheme } from "./../../theme/index";

const HomeScreen = () => {
  const [searchCategory, setSearchCategory] = useState();

  return (
    <div>
      <Head>
        <title> خانه | منتور یاب</title>
        <meta name="description" content="صفحه ورود به حساب منتور یاب" />
      </Head>

      <main className="d-flex flex-column justify-content-center mb-5 pb-5">
        <Header />
        <Box
        component='form'
          sx={{
            backgroundImage: `url('/images/home/Banner.jpg')`,
            backgroundSize: "cover",
          }}
        >
          <Typography
            pt={"12rem"}
            pb={"6rem"}
            color={muiTheme.palette.common.white}
            variant="h3"
            textAlign="center"
          >
            <Box
              color={muiTheme.palette.secondary.main}
              fontWeight="bold"
              component="span"
            >
              منتور
            </Box>{" "}
            یه دوست که میخواد{" "}
            <Box
              color={muiTheme.palette.secondary.main}
              fontWeight="bold"
              component="span"
            >
              موفق
            </Box>{" "}
            بشی !
          </Typography>
          <Box gap="1rem" pb='14rem' display="flex" width="50%" mx="auto">
            <Box>
              <TextField
                styles={{
                  background: muiTheme.palette.secondary.main,
                  width: "13rem",
                }}
                name="searchCategory"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                endIcon={svgIcons.arrowDown}
                component="select"
                placeholder="منتور"
                options={["منتور"]}
                validationMessage={null}
              />
            </Box>
            <Box flex={1}>
              <TextField
                placeholder="در چه زمینه ای میخوای ؟  مثلا درجاوا اسکریپت"
                styles={{ background: muiTheme.palette.common.white }}
              />
            </Box>
            <Button type='submit' styles={{alignSelf:'center'}} buttonProps={{size:'large'}} variant="contained">{svgIcons.search}</Button>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default HomeScreen;
