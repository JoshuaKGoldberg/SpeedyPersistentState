import { fetchColdData, fetchWarmData, fetchHotData } from "../shared/data";
import { hydratedData } from "../shared/state/actions";

export const hydrateData = () => {
  return async (dispatch) => {
    const [cold, warm, hot] = await Promise.all([
      fetchColdData(),
      fetchWarmData(),
      fetchHotData(),
    ]);

    dispatch(hydratedData({ cold, warm, hot }));
  };
};
