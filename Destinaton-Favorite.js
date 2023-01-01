import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const DestinasiFavorit = () => {
  return (
    <View style={styles.destinasiFavorit}>
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
            styles.destinasiFavorit1,
            styles.time1FlexBox,
            styles.searchTypo,
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
      <View style={styles.destinasiFavoritChild} />
      <Text style={[styles.search, styles.time1FlexBox, styles.searchTypo]}>
        Search
      </Text>
      <View style={[styles.destinasiFavoritItem, styles.timePosition]} />
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/2018-09-28-55011-1538134470-4.png")}
      />
      <Text style={[styles.tamanSafariWisataJalanKapt, styles.wisataTypo]}>
        <Text style={styles.tamanSafari}>
          <Text style={styles.tamanSafari1}>Taman Safari</Text>
        </Text>
        <Text style={styles.tamanSafari}>
          <Text style={styles.wisata1}>Wisata</Text>
        </Text>
        <Text style={styles.tamanSafari}>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
        <Text style={styles.jalanKaptenHarunKabirNo72}>
          <Text style={styles.text1}>{`Jalan Kapten Harun Kabir No.724 `}</Text>
        </Text>
      </Text>
      <Text style={[styles.bounceStreetWisataSentraBi, styles.wisataTypo]}>
        <Text style={styles.tamanSafari}>
          <Text style={styles.tamanSafari1}>Bounce Street</Text>
        </Text>
        <Text style={styles.tamanSafari}>
          <Text style={styles.wisata1}>Wisata</Text>
        </Text>
        <Text style={styles.tamanSafari}>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
        <Text style={styles.jalanKaptenHarunKabirNo72}>
          <Text style={styles.text1}>sentra bisnis, Jalan</Text>
        </Text>
      </Text>
      <Image
        style={[styles.bounceStreetJakartaTrampoliIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bounce-street-jakarta-trampoline-park-4-2.png")}
      />
      <View style={styles.statusBar}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.time1FlexBox]}>9:27</Text>
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
  time1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  searchTypo: {
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    textAlign: "center",
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  iconLayout: {
    height: 67,
    width: 60,
    borderRadius: GlobalStyles.Border.br_sm,
    left: 31,
    position: "absolute",
  },
  wisataTypo: {
    width: 262,
    textAlign: "left",
    lineHeight: 18,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
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
  destinasiFavorit1: {
    top: 80,
    left: 61,
    fontSize: GlobalStyles.FontSize.size_3xl,
    letterSpacing: -0.4,
    color: GlobalStyles.Color.black,
  },
  fichevronLeftIcon: {
    top: 75,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  destinasiFavoritChild: {
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
  },
  destinasiFavoritItem: {
    top: 260,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderTopWidth: 1,
    width: 327,
    height: 1,
  },
  icon: {
    top: 180,
  },
  tamanSafari1: {
    color: GlobalStyles.Color.black,
  },
  tamanSafari: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  wisata1: {
    color: GlobalStyles.Color.gray_400,
  },
  text1: {
    color: GlobalStyles.Color.gray800,
  },
  jalanKaptenHarunKabirNo72: {
    margin: GlobalStyles.Margin.margin_sm,
  },
  tamanSafariWisataJalanKapt: {
    top: 179,
    left: 99,
  },
  bounceStreetWisataSentraBi: {
    top: 270,
    left: 100,
  },
  bounceStreetJakartaTrampoliIcon: {
    top: 271,
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
    color: GlobalStyles.Color.black,
    textAlign: "center",
    left: 0,
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
  destinasiFavorit: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default DestinasiFavorit;
