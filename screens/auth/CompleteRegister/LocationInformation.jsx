import React, { useEffect } from "react";
import TextField from "../../../components/common/TextField";
import { svgIcons } from "../../../assets/icons/svgIcons";
import DatePicker from "react-multi-date-picker";
import shamsiCalendar from "react-date-object/calendars/persian";
import farsiCalendar from "react-date-object/locales/persian_fa";
import provinces from "./../../../utils/json/locations/provinces.json";
import cities from "./../../../utils/json/locations/cities.json";

const JobInformation = ({
  province,
  setProvince,
  provinceID,
  setProvinceID,
  simpleValidator,
  city,
  setCity,
  address,
  setAddress,
  birthDay,
  setBirthDay,
}) => {
  useEffect(() => {
    let selectedProvince = provinces.filter((item) => item.name === province);
    setProvinceID(selectedProvince[0]?.id);
    let data = cities.filter((item) => item.province_id === provinceID);
    console.log(data);
  }, [province]);

  return (
    <div className="col-md-4">
      <h2 className="fs-32 fw-400 text-gray-900">اطلاعات مکانی</h2>

      <TextField
        name="province"
        value={province}
        onChange={(e) => {
          setProvince(e.target.value);
          setCity('')
        }}
        onBlur={() => {
          simpleValidator.current.showMessageFor("province");
        }}
        icon={svgIcons.location}
        endIcon={svgIcons.arrowDown}
        component="select"
        placeholder="استان"
        options={provinces.map((item) => item.name)}
        validationMessage={simpleValidator.current.message(
          "province",
          province,
          "required|min:2|max:255"
        )}
      />
      <TextField
        name="city"
        value={city}
        options={
          provinceID
            ? cities
                .filter((item) => item.province_id === provinceID)
                .map((item) => item.name)
            : []
        }
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
        inputId="datepicker"
      >
        <DatePicker
          id="datepicker"
          value={birthDay}
          onChange={(value) => {
            console.log(value);
            console.log(`${value.year}/${value.month.number}/${value.day}`);
            setBirthDay(`${value.year}/${value.month.number}/${value.day}`);
          }}
          placeholder="تاریخ تولد"
          inputClass="h-100 w-100 border-0 fs-16"
          containerStyle={{
            display: "flex",
            width: "100%",
            height: "100%",
            fontSize: "1.6rem",
            marginRight: "2rem",
          }}
          calendar={shamsiCalendar}
          locale={farsiCalendar}
        />
      </TextField>
    </div>
  );
};

export default JobInformation;
