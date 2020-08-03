import React from "react";
import { useSelector } from "react-redux";

import { selectCold } from "../../state/selectors";
import { ProfilePlaceholder } from "../basic/ProfilePlaceholder";
import { ProfileData } from "../basic/ProfileData";

export const Cold = () => {
  const cold = useSelector(selectCold);

  if (!cold) {
    return <ProfilePlaceholder />;
  }

  return <ProfileData source={cold} />;
};
