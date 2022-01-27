import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Typography from "../../../components/common/Typography";
import TextField from "../../../components/common/TextField";
import { useState } from "react";
import { svgIcons } from "../../../assets/icons/svgIcons";
import SimpleReactValidator from "simple-react-validator";

import Button from '../../../components/common/Button';
import JobInformation from "./jobInformation";
import LocationInformation from "./LocationInformation";
import ContactInformation from "./ContactInformation";
import AddAvatar from './AddAvatar';
import { Box } from '@mui/material';

const CompleteRegister = () => {
  const simpleValidator = useRef(
    new SimpleReactValidator({
      className: "text-danger",
      messages: {
        faild: "موارد خواسته شده را به درستی وارد کنید !",
        name: "مقدار نام را به درستی وارد کنید",
        email: "ایمیل را به درستی وارد کنید",
        password: "رمز عبور را به درستی وارد کنید",
        confirmPassword: "تکرار رمز به درستی وارد نشده !",
      },
    })
  );
  const [avatar, setAvatar] = useState();
  const [specialty, setSpecialty] = useState();
  const [personPosition, setPersonPosition] = useState();
  const [company, setCompany] = useState();
  const [workExprience, setWorkExprience] = useState();
  const [resume, setResume] = useState();
  const [resumeFile, setResumeFile] = useState();
  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [birthDay, setBirthDay] = useState();
  const [linkedin, setLinkedin] = useState();
  const [instagram, setInstagram] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [website, setWebsite] = useState();
  
  
  return (
    <>
      <Head>
        <title>تکمیل ثبت نام | منتور یاب</title>
        <meta name="description" content="صفحه ثبت نام در منتور یاب" />
      </Head>
      <main className="container">
        <form>
         <AddAvatar/>
          <Box className="row mt-md-5 pt-md-5 mb-5">
           <JobInformation
              specialty={specialty}
              setSpecialty={setSpecialty}
              personPosition={personPosition}
              setPersonPosition={setPersonPosition}
              company={company}
              setCompany={setCompany}
              workExprience={workExprience}
              setWorkExprience={setWorkExprience}
              resume={resume}
              setResume={setResume}
              setResumeFile={setResumeFile}
              simpleValidator={simpleValidator}
           />
           <LocationInformation
               province={province}
               setProvince={setProvince}
               simpleValidator={simpleValidator}
               city={city}
               setCity={setCity}
               address={address}
               setAddress={setAddress}
               birthDay={birthDay}
               setBirthDay={setBirthDay}
           />
          <ContactInformation
              simpleValidator={simpleValidator}
              linkedin={linkedin}
              setLinkedin={setLinkedin}
              instagram={instagram}
              setInstagram={setInstagram}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              website={website}
              setWebsite={setWebsite}
          />
            <Button parentClassName='d-flex flex-row-reverse' >ثبت و ورود</Button>
          </Box>
        </form>
      </main>
    </>
  );
};

export default CompleteRegister;
