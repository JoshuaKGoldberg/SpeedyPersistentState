import profileImage from "../../assets/ProfileImage.png";

const intBetween = (min, max) => ((Math.random() * (max - min)) | 0) + min;

const wait = async (seconds) => {
  await new Promise((resolve) => setTimeout(resolve, seconds));
};

const createFetcher = (data, min, max) => {
  return async () => {
    await wait(intBetween(min, max));
    return data;
  };
};

export const fetchColdData = createFetcher(profileImage, 500, 1000);

export const fetchWarmData = createFetcher(3, 1000, 1500);

export const fetchHotData = createFetcher(
  [
    ["learn react", "learn redux", "learn thunks", "cry to sleep"],
    ["learn native", "learn expo", "learn hardware", "cry some more"],
  ],
  1500,
  2000
);
