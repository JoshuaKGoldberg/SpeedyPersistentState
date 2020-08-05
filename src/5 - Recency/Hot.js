import React from "react";
import { useSelector } from "react-redux";

import { selectHot } from "../shared/state/selectors";
import { TodayPlaceholder } from "../shared/views/basic/TodayPlaceholder";
import { TodayItems } from "../shared/views/basic/TodayItems";

const arbitraryThreshold = 1000 * 60 * 5;

export const Hot = () => {
  const hot = useSelector(selectHot);

  if (!hot || Date.now() - hot.timestamp > arbitraryThreshold) {
    return <TodayPlaceholder />;
  }

  return <TodayItems items={hot.data} />;
};
