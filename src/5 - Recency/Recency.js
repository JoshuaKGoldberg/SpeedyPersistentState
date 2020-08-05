import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Cold, Warm } from "../shared/views/connected";
import { Hot } from "./hot";
import { hydrateData } from "./thunks";

export const Recency = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrateData());
  }, []);

  return (
    <>
      <Cold />
      <Warm />
      <Hot />
    </>
  );
};
