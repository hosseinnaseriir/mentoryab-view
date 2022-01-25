

import React from 'react';
import TextField from "../../../components/common/TextField";
import { svgIcons } from '../../../assets/icons/svgIcons';
import DatePicker from "react-multi-date-picker";
import shamsiCalendar from "react-date-object/calendars/persian";
import farsiCalendar from "react-date-object/locales/persian_fa";

const JobInformation = ({
    province,
    setProvince,
    simpleValidator,
    city,
    setCity,
    address,
    setAddress,
    birthDay,
    setBirthDay
}) => {
    return ( <div className="col-md-4">
    <h2 className="fs-32 fw-400 text-gray-900">اطلاعات مکانی</h2>
    <TextField
      name="province"
      value={province}
      onChange={(e) => setProvince(e.target.value)}
      onBlur={() => {
        simpleValidator.current.showMessageFor("province");
      }}
      icon={svgIcons.location}
      endIcon={svgIcons.arrowDown}
      component="select"
      placeholder="استان"
      validationMessage={simpleValidator.current.message(
        "province",
        province,
        "required|min:2|max:255"
      )}
    />
    <TextField
      name="city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onBlur={() => {
        simpleValidator.current.showMessageFor("city");
      }}
      icon={svgIcons.location2}
      endIcon={svgIcons.arrowDown}
      component="select"
      placeholder="شهرستان"
      validationMessage={simpleValidator.current.message(
        "city",
        city,
        "required|min:2|max:255"
      )}
    />
    
    <TextField
      name="address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      onBlur={() => {
        simpleValidator.current.showMessageFor("address");
      }}
      icon={svgIcons.address}
      component="input"
      placeholder="آدرس دقیق محل کار"
      validationMessage={simpleValidator.current.message(
        "address",
        address,
        "required|min:2|max:255"
      )}
    />
    <TextField
      name="birthDay"
      value={birthDay}
      onChange={(e) => setBirthDay(e.target.value)}
      onBlur={() => {
        simpleValidator.current.showMessageFor("birthDay");
      }}
      icon={svgIcons.birthDay}
      component="input"
      placeholder="آدرس دقیق محل کار"
      validationMessage={simpleValidator.current.message(
        "birthDay",
        birthDay,
        "required|min:2|max:255"
      )}
      icon={svgIcons.birthDay}
      inputId='datepicker'
    >
      <DatePicker
      id="datepicker"
        placeholder="تاریخ تولد"
        inputClass="h-100 w-100 border-0 fs-16"
        containerStyle={{
          display: 'flex',
          width: '100%',
          height:'100%',
          fontSize:'1.6rem',
          marginRight:'2rem'
        }}
        calendar={shamsiCalendar}
        locale={farsiCalendar}
      />
    </TextField>
    </div> );
}
 
export default JobInformation;