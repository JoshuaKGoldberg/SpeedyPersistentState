import { fetchColdData, fetchWarmData, fetchHotData } from "../shared/data";
import { hydratedData } from "../shared/state/actions";

export const hydrateData = () => {
  return async (dispatch) => {
    await Promise.all([
      fetchColdData().then((cold) => dispatch(hydratedData({ cold }))),
      fetchWarmData().then((warm) => dispatch(hydratedData({ warm }))),
      fetchHotData().then((hot) => dispatch(hydratedData({ hot }))),
    ]);
  };
};
