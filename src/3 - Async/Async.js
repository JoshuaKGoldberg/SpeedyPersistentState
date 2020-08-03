import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Cold, Hot, Warm } from "../shared/views/connected";
import { hydrateData } from "./thunks";

export const Async = () => {
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
