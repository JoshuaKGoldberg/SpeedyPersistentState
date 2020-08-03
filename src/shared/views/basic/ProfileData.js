import React from "react";
import { Image, StyleSheet } from "react-native";

import { ProfileContainer } from "./ProfileContainer";

export const ProfileData = ({ source }) => {
  return (
    <ProfileContainer>
      <Image source={source} style={styles.image} />
    </ProfileContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
});
