import React from "react";
import TextField from "../../../components/common/TextField/index";
import { svgIcons } from "../../../assets/icons/svgIcons";

const JobInformation = ({
  specialty,
  setSpecialty,
  personPosition,
  setPersonPosition,
  company,
  setCompany,
  workExperience,
  setWorkExperience,
  resume,
  setResume,
  setResumeFile,
  simpleValidator,
}) => {
  return (
    <div className="col-md-4">
      <h2 className="fs-32 fw-400 text-gray-900">اطلاعات کاری</h2>
      <TextField
        name="specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        onBlur={() => {
          simpleValidator.current.showMessageFor("specialty");
        }}
        icon={svgIcons.star}
        endIcon={svgIcons.arrowDown}
        component="select"
        placeholder="تخصص"
        validationMessage={simpleValidator.current.message(
          "specialty",
          specialty,
          "required|min:2|max:255"
        )}
      />
      <TextField
        name="personPosition"
        value={personPosition}
        onChange={(e) => setPersonPosition(e.target.value)}
        onBlur={() => {
          simpleValidator.current.showMessageFor("personPosition");
        }}
        icon={svgIcons.personPosition}
        component="input"
        placeholder="موقعیت شغلی"
        validationMessage={simpleValidator.current.message(
          "personPosition",
          personPosition,
          "required|min:2|max:255"
        )}
      />

      <TextField
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        onBlur={() => {
          simpleValidator.current.showMessageFor("company");
        }}
        icon={svgIcons.company}
        component="input"
        placeholder="شرکت یا محل کار"
        validationMessage={simpleValidator.current.message(
          "company",
          company,
          "required|min:2|max:255"
        )}
      />

      <TextField
        type="number"
        name="workExperience"
        value={workExperience}
        onChange={(e) => setWorkExperience(e.target.value)}
        onBlur={() => {
          simpleValidator.current.showMessageFor("workExperience");
        }}
        icon={svgIcons.workExprience}
        component="input"
        placeholder="سابقه کار (به سال)"
        validationMessage={simpleValidator.current.message(
          "workExperience",
          workExperience,
          "required|integer|min:0|max:100"
        )}
      />

      <TextField
        name="resume"
        // value={resume}
        onChange={(e) => {
          let file = e.target.files[0];
          console.log(file);
          setResumeFile({
            resume: file,
          });
          setResume(e.target.files[0].name);
        }}
        onBlur={() => {
          simpleValidator.current.showMessageFor("resume");
        }}
        icon={svgIcons.file}
        type="file"
        component="file"
        placeholder={resume || "آپلود رزومه (عکس یا PDF)"}
        validationMessage={simpleValidator.current.message(
          "resume",
          resume,
          "required|min:2|max:255"
        )}
      />
    </div>
  );
};

export default JobInformation;
