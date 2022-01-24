import { IFormCardVM } from "../components/molecules/FormCard";
import { FormFieldModel } from "../models/FormFieldModel";
import { asyncFetch } from "../utils/asyncFetch";

export class UserLoginVM implements IFormCardVM {
  fields = {
    email: new FormFieldModel({
      label: "Email",
      type: "email",
      autoComplete: "email",
    }),
    password: new FormFieldModel({
      label: "Password",
      type: "password",
      autoComplete: "password",
    }),
  };

  handleGenerateLoginObject = (): {} => {
    const keys = Object.keys(this.fields);
    let prevObj = {};
    for (let index = 0; index < keys.length; index++) {
      const currentKey = keys[index];
      const currentField = this.fields[currentKey] as FormFieldModel;
      prevObj = {
        ...prevObj,
        [currentKey]: currentField.ref.current.value,
      };
    }

    return prevObj;
  };

  handleOnSubmit = async (): Promise<boolean> => {
    const response = await asyncFetch(
      `${process.env.GATSBY_API_URL}/user/login`,
      {
        body: JSON.stringify(this.handleGenerateLoginObject()),
        method: "POST",
      }
    );

    console.log(response);

    return false;
  };
}
