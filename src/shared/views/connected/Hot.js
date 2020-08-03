import React from "react";
import { useSelector } from "react-redux";

import { selectHot } from "../../state/selectors";
import { TodayPlaceholder } from "../basic/TodayPlaceholder";
import { TodayItems } from "../basic/TodayItems";

export const Hot = () => {
  const hot = useSelector(selectHot);
  if (!hot) {
    return <TodayPlaceholder />;
  }

  return <TodayItems items={hot} />;
};
