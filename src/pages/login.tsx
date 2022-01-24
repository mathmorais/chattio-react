import React from "react";
import { CentralizedTemplate } from "../components/templates/CentralizedTemplate";
import { ThemeTemplate } from "../components/templates/ThemeTemplate";
import { UserLoginVM } from "../view-models/UserLoginVM";
import { AuthFormCard } from "../components/organisms/AuthFormCard";
import { navigate } from "gatsby-link";

const AccountLoginPage: React.FC = () => {
  const { fields, handleOnSubmit } = new UserLoginVM();

  return (
    <ThemeTemplate title="Chat - Login">
      <CentralizedTemplate>
        <AuthFormCard
          cardHeader="Login"
          cardSubTitle="Fill the fields below to login"
          fields={fields}
          handleOnSubmit={handleOnSubmit}
          onSuccess={() => navigate("/chat/inbox")}
        />
      </CentralizedTemplate>
    </ThemeTemplate>
  );
};

export default AccountLoginPage;
