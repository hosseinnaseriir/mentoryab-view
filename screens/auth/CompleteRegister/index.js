import React, { useRef, useEffect ,useState } from "react";
import Head from "next/head";
import SimpleReactValidator from "simple-react-validator";
import { Box } from "@mui/material";

import Button from "../../../components/common/Button";
import JobInformation from "./jobInformation";
import LocationInformation from "./LocationInformation";
import ContactInformation from "./ContactInformation";
import AddAvatar from "./AddAvatar";
import { getCookies } from "cookies-next";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { BASE_API } from "./../../../api/index";
import postFetch from "./../../../utils/postFetch";
import getFetch from "./../../../utils/getFetch";
import putFetch from "./../../../utils/putFetch";

const CompleteRegister = () => {
  const router = useRouter();

  const simpleValidator = useRef(
    new SimpleReactValidator({
      className: "text-danger",
      messages: {
        faild: "موارد خواسته شده را به درستی وارد کنید !",
      },
    })
  );
  const [editProfile, setEditProfile] = useState(false);
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
  const { userDetails } = useSelector((state) => state.userSlice);

  const handleCompleteProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userID", userDetails.userID || "");
    formData.append("specialty", specialty || "");
    formData.append("avatar", avatar || "");
    formData.append("resume", resumeFile?.resume || resume || "");
    formData.append("personPosition", personPosition || "");
    formData.append("company", company || "");
    formData.append("workExperience", workExperience || "");
    formData.append("province", province || "");
    formData.append("city", city || "");
    formData.append("address", address || "");
    formData.append("birthDay", birthDay || "");
    formData.append(
      "socialMedia",
      JSON.stringify([{ linkedin }, { instagram }, { website }]) || ""
    );
    formData.append("phoneNumber", phoneNumber || "");

    if (editProfile) {
      putFetch(true, `${BASE_API}/auth/update-profile`, formData, {
        "ath-token": getCookies("token").token,
        "Content-Type": "multipart/form-data",
      })
        .then((res) => {
          router.push("/");
          toast.success(res?.data?.message);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    postFetch(true, `${BASE_API}/auth/complete-register`, formData, {
      "ath-token": getCookies("token").token,
      "Content-Type": "multipart/form-data",
    })
      .then((res) => {
        router.push("/");
        toast.success(res?.data?.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetProfileData = async () => {
    let res = await getFetch(true, `${BASE_API}/auth/get-profile`, {
      "ath-token": getCookies("token").token,
    });

    if (res?.data) {
      setEditProfile(true);
      let data = res.data;
      setSpecialty(data.specialty);
      setPersonPosition(data.personPosition);
      setWorkExperience(data.workExperience);
      setCompany(data.company);
      setCity(data.city);
      setProvince(data.province);
      setAddress(data.address);
      setPhoneNumber(data.phoneNumber);
      setBirthDay(data.birthDay);
      setAvatar(data.avatar);
      setResume(data.resume);
      let socialMedia = JSON.parse(data.socialMedia);
      setWebsite(socialMedia[2].website);
      setInstagram(socialMedia[1].instagram);
      setLinkedin(socialMedia[0].linkedin);
    }
  };

  useEffect(() => {
    handleGetProfileData();
  }, []);


  return (
    <>
      <Head>
        <title>تکمیل ثبت نام | منتور یاب</title>
        <meta name="description" content="صفحه ثبت نام در منتور یاب" />
      </Head>
      <main className="container">
  
        <form>
          <AddAvatar avatar={avatar} setAvatar={setAvatar} />
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
            <Box display="flex" gap={2} flexDirection="row-reverse">
              {editProfile ? (
                <Button
                  type="submit"
                  variant='contained'
                  onClick={(e) => handleCompleteProfile(e)}
                  parentClassName="d-flex flex-row-reverse"
                >
                  ویرایش
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant='contained'
                  onClick={(e) => handleCompleteProfile(e)}
                  parentClassName="d-flex flex-row-reverse"
                >
                تکمیل پروفایل
                </Button>
   
              )}
              <Button
                  type='link'
                  href='/'
                  variant='outlined'
                  parentClassName="d-flex flex-row-reverse"
                >
                انصراف
                </Button>
            </Box>
          </Box>
        </form>
      </main>
    </>
  );
};

export default CompleteRegister;
