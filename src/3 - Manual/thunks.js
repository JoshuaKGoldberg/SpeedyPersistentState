import AsyncStorage from "@react-native-community/async-storage";

import { fetchColdData, fetchWarmData, fetchHotData } from "../shared/data";
import { hydratedData } from "../shared/state/actions";

export const hydrateData = () => {
  return async (dispatch) => {
    await Promise.all([
      AsyncStorage.getItem("cold").then((cold) =>
        dispatch(hydratedData({ cold }))
      ),
      AsyncStorage.getItem("warm").then((warm) =>
        dispatch(hydratedData({ warm }))
      ),
    ]);

    await Promise.all([
      fetchColdData().then(async (cold) => {
        await dispatch(hydratedData({ cold }));
        await AsyncStorage.setItem("cold", cold);
      }),
      fetchWarmData().then(async (warm) => {
        await dispatch(hydratedData({ warm }));
        await AsyncStorage.setItem("warm", warm);
      }),
      fetchHotData().then((hot) => dispatch(hydratedData({ hot }))),
    ]);
  };
};
