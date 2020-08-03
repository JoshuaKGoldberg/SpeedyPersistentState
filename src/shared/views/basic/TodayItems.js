import React from "react";

import { TodayContainer } from "./TodayContainer";
import { TodayItemList } from "./TodayItemList";

export const TodayItems = ({ items }) => {
  return (
    <TodayContainer>
      {items.map((list) => (
        <TodayItemList key={list.join()} list={list} />
      ))}
    </TodayContainer>
  );
};
