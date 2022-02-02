import React, {
  useRef
} from "react";
import Head from "next/head";
import Link from "next/link";
import Typography from "../../../components/common/Typography";
import TextField from "../../../components/common/TextField";
import {
  useState
} from "react";
import {
  svgIcons
} from "../../../assets/icons/svgIcons";
import SimpleReactValidator from "simple-react-validator";

import Button from '../../../components/common/Button';
import JobInformation from "./jobInformation";
import LocationInformation from "./LocationInformation";
import ContactInformation from "./ContactInformation";
import AddAvatar from './AddAvatar';
import {
  Box
} from '@mui/material';
import postFetch from './../../../utils/postFetch';
import {
  BASE_API
} from './../../../api/index';
import { Autocomplete } from '@mui/material';
import { getCookies } from 'cookies-next';
import { useSelector } from 'react-redux';

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
  const [workExperience, setWorkExperience] = useState();
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

  const { userDetails} = useSelector(state =>  state.userSlice);

  console.log(userDetails)

  const handleCompleteProfile = (e) => {
    e.preventDefault();
    console.log(`${BASE_API}'/complete-register`);

    const formData = new FormData();

    formData.append('userID', userDetails.userID);  
    formData.append('specialty', specialty);  
    formData.append('avatar', avatar);
    formData.append('resume', resumeFile?.resume);
    formData.append('personPosition', personPosition);
    formData.append('company', company);
    formData.append('workExperience', workExperience);
    formData.append('province', province);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('birthDay', birthDay);
    formData.append('linkedin', linkedin);
    formData.append('instagram', instagram);
    formData.append('phoneNumber', phoneNumber);
    formData.append('website', website);
 
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
    
    postFetch(true, `${BASE_API}/auth/complete-register`, formData, {
      "ath-token": getCookies("token").token,
      "Content-Type": "multipart/form-data"
    }).then(res => {
      console.log(res)
    })
  }
  console.log('specialty', specialty)
 

  return (
    <>
      <Head>
        <title>تکمیل ثبت نام | منتور یاب</title>
        <meta name="description" content="صفحه ثبت نام در منتور یاب" />
      </Head>
      <main className="container">
        <form>
         <AddAvatar setAvatar={setAvatar}/>
          <Box className="row mt-md-5 pt-md-5 mb-5">
 
           <JobInformation
              specialty={specialty}
              setSpecialty={setSpecialty}
              personPosition={personPosition}
              setPersonPosition={setPersonPosition}
              company={company}
              setCompany={setCompany}
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
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
            {/* <Button variant='secondary' type='submit' onClick={e=>handleCompleteProfile(e)} parentClassName='d-flex flex-row-reverse' >باشه برای بعد</Button> */}
            <Button type='submit' onClick={e=>handleCompleteProfile(e)} parentClassName='d-flex flex-row-reverse' >ثبت و ورود</Button>
          </Box>
        </form>
      </main>
    </>
  );
};

export default CompleteRegister;