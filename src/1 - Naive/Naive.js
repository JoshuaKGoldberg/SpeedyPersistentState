import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAllData } from "../shared/state/selectors";
import { LoadingText } from "../shared/views/basic/LoadingText";
import { Cold, Hot, Warm } from "../shared/views/unconnected";
import { hydrateData } from "./thunks";

export const Naive = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrateData());
  }, []);

  const data = useSelector(selectAllData);
  if (!data) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
    <>
      <Cold cold={data.cold} />
      <Warm warm={data.warm} />
      <Hot hot={data.hot} />
    </>
  );
};
