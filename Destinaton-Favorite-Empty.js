import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const DestinasiFavoritKosong = () => {
  return (
    <View style={styles.destinasiFavoritKosong}>
      <Image
        style={[styles.menuBelowIcon, styles.tabBarChildPosition]}
        resizeMode="cover"
        source={require("../assets/menu-below.png")}
      />
      <View style={styles.tabBar}>
        <View style={[styles.tabBarChild, styles.tabBarChildPosition]} />
        <View style={styles.shape} />
      </View>
      <View style={styles.upPosition}>
        <View style={[styles.upChild, styles.upPosition]} />
        <Text
          style={[
            styles.destinasiFavorit,
            styles.favoritFlexBox,
            styles.favoritColor,
          ]}
        >
          Destinasi Favorit
        </Text>
      </View>
      <Image
        style={[styles.fichevronLeftIcon, styles.timePosition]}
        resizeMode="cover"
        source={require("../assets/fichevronleft.png")}
      />
      <View style={styles.destinasiFavoritKosongChild} />
      <Text style={[styles.search, styles.favoritFlexBox]}>Search</Text>
      <Image
        style={styles.logoWarnaBaru2}
        resizeMode="cover"
        source={require("../assets/logo-warna-baru-21.png")}
      />
      <Text
        style={[
          styles.tidakAdaFavorit,
          styles.favoritFlexBox,
          styles.favoritColor,
        ]}
      >
        Tidak ada favorit
      </Text>
      <View style={styles.statusBar}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.timePosition]}>
          <Text
            style={[styles.time1, styles.favoritFlexBox, styles.favoritColor]}
          >
            9:27
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarChildPosition: {
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  upPosition: {
    height: 155,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  favoritFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  favoritColor: {
    color: GlobalStyles.Color.black,
    textAlign: "center",
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  menuBelowIcon: {
    height: "14.04%",
    top: "85.96%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  tabBarChild: {
    height: "108.43%",
    top: "-8.43%",
    backgroundColor: GlobalStyles.Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
  },
  shape: {
    height: "6.02%",
    width: "36%",
    top: "84.34%",
    right: "32%",
    bottom: "9.64%",
    left: "32%",
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.black,
    position: "absolute",
  },
  tabBar: {
    bottom: 0,
    height: 83,
    width: 375,
    left: 0,
    position: "absolute",
  },
  upChild: {
    backgroundColor: GlobalStyles.Color.beige,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderRadius: GlobalStyles.Border.br_lg,
    height: 155,
  },
  destinasiFavorit: {
    top: 80,
    left: 61,
    fontSize: GlobalStyles.FontSize.size_3xl,
    letterSpacing: -0.4,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  fichevronLeftIcon: {
    top: 75,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  destinasiFavoritKosongChild: {
    top: 710,
    left: 52,
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 268,
    height: 46,
    position: "absolute",
  },
  search: {
    top: 723,
    left: 154,
    fontSize: GlobalStyles.FontSize.size_2xl,
    letterSpacing: -0.3,
    color: GlobalStyles.Color.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  logoWarnaBaru2: {
    top: 350,
    left: 132,
    width: 112,
    height: 111,
    position: "absolute",
  },
  tidakAdaFavorit: {
    top: 465,
    left: 92,
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 18,
    width: 202,
    height: 62,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  connectionsIcon: {
    top: 15,
    right: 14,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time1: {
    marginTop: -5.5,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: GlobalStyles.FontFamily.sFProText,
    width: 54,
    left: 0,
    color: GlobalStyles.Color.black,
  },
  time: {
    top: 8,
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  destinasiFavoritKosong: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default DestinasiFavoritKosong;
