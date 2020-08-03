import React from "react";

import { ProfileContainer } from "./ProfileContainer";
import { LoadingText } from "./LoadingText";

export const ProfilePlaceholder = () => {
  return (
    <ProfileContainer>
      <LoadingText>···</LoadingText>
    </ProfileContainer>
  );
};
