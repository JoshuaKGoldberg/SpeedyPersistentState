import React from "react";

import { TodayItems } from "./TodayItems";

export const TodayPlaceholder = () => {
  return (
    <TodayItems
      items={[
        ["···", "· · ·", " ··· ", " · · · "],
        ["· · ·", "···", " · · · ", " ··· "],
      ]}
    />
  );
};
