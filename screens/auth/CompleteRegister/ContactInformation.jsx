import React from "react";
import TextField from "../../../components/common/TextField";
import { svgIcons } from "../../../assets/icons/svgIcons";

const ContactInformation = ({
  simpleValidator,
  linkedin,
  setLinkedin,
  instagram,
  setInstagram,
  phoneNumber,
  setPhoneNumber,
  website,
  setWebsite,
}) => {
  return (
    <div className="col-md-4">
      <h2 className="fs-32 fw-400 text-gray-900">اطلاعات تماس</h2>
      <TextField
        name="linkedin"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        onBlur={() => {
          simpleValidator.current.showMessageFor("linkedin");
        }}
        icon={svgIcons.linkedin}
        component="input"
        placeholder="ID یا ادرس Linkedin"
        validationMessage={simpleValidator.current.message(
          "linkedin",
          linkedin,
          "required|min:2|max:255"
        )}
      />
      <TextField
        name="instagram"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
        onBlur={() => {
          simpleValidator.current.showMessageFor("instagram");
        }}
        icon={svgIcons.instagram}
        component="input"
        placeholder="ID یا ادرس instagram"
        validationMessage={simpleValidator.current.message(
          "instagram",
          instagram,
          "required|min:2|max:255"
        )}
      />
      <TextField
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onBlur={() => {
          simpleValidator.current.showMessageFor("phoneNumber");
        }}
        icon={svgIcons.phoneNumber}
        component="input"
        placeholder="شماره تماس"
        validationMessage={simpleValidator.current.message(
          "phoneNumber",
          phoneNumber,
          "required|integer|min:2|max:255"
        )}
      />
      <TextField
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        onBlur={() => {
          simpleValidator.current.showMessageFor("website");
        }}
        icon={svgIcons.website}
        component="input"
        placeholder="آدرس وبسایت"
        validationMessage={simpleValidator.current.message(
          "website",
          website,
          "required|min:2|max:255"
        )}
      />
    </div>
  );
};

export default ContactInformation;
