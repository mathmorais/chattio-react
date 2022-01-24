import { UserRegisterService } from "../services/UserRegisterService";
import { IFormCardVM } from "../components/molecules/FormCard";
import { FormFieldModel } from "../models/FormFieldModel";

export class UserRegisterVM implements IFormCardVM {
  fields = {
    fullName: new FormFieldModel({
      label: "Full name",
      required: true,
      type: "text",
      placeholder: "e.g: Bob Martin",
      autoComplete: "name",
    }),
    email: new FormFieldModel({
      label: "Email",
      type: "text",
      required: true,
      placeholder: "e.g: ...@domain.com",
      autoComplete: "email",
    }),
    password: new FormFieldModel({
      label: "Password",
      type: "password",
      minLength: 8,
      required: true,
      placeholder: "Your password",
      autoComplete: "password",
    }),
  };

  handleOnSubmit = async (): Promise<void> => {
    const token = await new UserRegisterService({
      fullName: this.fields.fullName.handleGetInputValue(),
      email: this.fields.email.handleGetInputValue(),
      password: this.fields.password.handleGetInputValue(),
    }).handleRegisterUser();
  };
}
