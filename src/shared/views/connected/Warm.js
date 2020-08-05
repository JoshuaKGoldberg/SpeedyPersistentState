import React from "react";
import { useSelector } from "react-redux";

import { selectWarm } from "../../state/selectors";
import { StreakText } from "../basic/StreakText";

export const Warm = () => {
  const warm = useSelector(selectWarm);

  return <StreakText count={warm ?? "···"} />;
};
