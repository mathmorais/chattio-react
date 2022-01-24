import React from "react";
import { CentralizedTemplate } from "../components/templates/CentralizedTemplate";
import { ThemeTemplate } from "../components/templates/ThemeTemplate";
import { UserRegisterVM } from "../view-models/UserRegisterVM";

import { AuthFormCard } from "../components/organisms/AuthFormCard";
import { navigate } from "gatsby-link";

const AccountRegisterPage: React.FC = () => {
  const { fields, handleOnSubmit } = new UserRegisterVM();

  return (
    <ThemeTemplate title="Chat - Register">
      <CentralizedTemplate>
        <AuthFormCard
          cardHeader="Register"
          cardSubTitle="Fill the fields below to create an account"
          fields={fields}
          handleOnSubmit={handleOnSubmit}
          onSuccess={() => navigate("/chat/messages")}
        />
      </CentralizedTemplate>
    </ThemeTemplate>
  );
};

export default AccountRegisterPage;
