import React from "react";
import { Text, SafeAreaView } from "react-native";
import { useIsFocused } from "@react-navigation/core";

import { NFTData, COLORS } from "../constants";
import { NFTCard, FocusedStatusBar, HomeHeader } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  );
};

export default Home;
