export const selectAllData = (state) => {
  return state.cold && state.warm && state.hot ? state : undefined;
};

export const selectCold = (state) => state.cold;

export const selectWarm = (state) => state.warm;

export const selectHot = (state) => state.hot;
