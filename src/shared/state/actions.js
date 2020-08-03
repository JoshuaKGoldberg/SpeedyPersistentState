export const HYDRATED_DATA = "HYDRATED_DATA";

export const hydratedData = (payload) => ({
  payload,
  type: HYDRATED_DATA,
});
