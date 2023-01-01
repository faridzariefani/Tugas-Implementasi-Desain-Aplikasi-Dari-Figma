import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const PetaDestinasi = () => {
  return (
    <View style={styles.petaDestinasi}>
      <Image
        style={[
          styles.menuBelowIcon,
          styles.tabBarChildPosition,
          styles.iconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/menu-below1.png")}
      />
      <View style={styles.tabBar}>
        <View style={[styles.tabBarChild, styles.tabBarChildPosition]} />
        <View style={styles.shape} />
      </View>
      <View style={styles.up}>
        <View style={styles.upChild} />
        <Text style={[styles.petaDestinasi1, styles.time1FlexBox]}>
          Peta Destinasi
        </Text>
      </View>
      <Image
        style={[styles.fichevronLeftIcon, styles.timePosition]}
        resizeMode="cover"
        source={require("../assets/fichevronleft.png")}
      />
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <View style={styles.petaDestinasiChild} />
      <Text style={styles.setRoute}>Set Route</Text>
      <View style={styles.labelNewParent}>
        <View style={[styles.labelNew, styles.labelSpaceBlock]}>
          <Text style={[styles.label, styles.labelTypo]}>Mobil</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml27, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.labelTypo]}>Motor</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml27, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.labelTypo]}>Sepeda</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml27, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.labelTypo]}>Jalan</Text>
        </View>
      </View>
      <View style={styles.petaDestinasiItem} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
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
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  tabBarChildPosition: {
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  time1FlexBox: {
    textAlign: "center",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  labelSpaceBlock: {
    paddingVertical: GlobalStyles.Padding.padding_sm,
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    borderRadius: GlobalStyles.Border.br_2xs,
    flexDirection: "row",
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.poppins,
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  menuBelowIcon: {
    height: "14.04%",
    top: "85.96%",
  },
  tabBarChild: {
    height: "108.43%",
    top: "-8.43%",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
    left: "0%",
    bottom: "0%",
    right: "0%",
  },
  shape: {
    height: "6.02%",
    width: "36%",
    top: "87.95%",
    right: "32%",
    bottom: "6.02%",
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
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 155,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
    borderRadius: GlobalStyles.Border.br_lg,
  },
  petaDestinasi1: {
    top: 80,
    left: 80,
    fontSize: GlobalStyles.FontSize.size_3xl,
    letterSpacing: -0.4,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    color: GlobalStyles.Color.black,
  },
  up: {
    height: 155,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  fichevronLeftIcon: {
    top: 75,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  image8Icon: {
    top: 199,
    left: 19,
    borderRadius: 30,
    width: 340,
    height: 344,
    position: "absolute",
  },
  petaDestinasiChild: {
    top: 564,
    left: 54,
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 268,
    height: 46,
    position: "absolute",
  },
  setRoute: {
    top: 577,
    left: 139,
    fontSize: GlobalStyles.FontSize.size_2xl,
    letterSpacing: -0.3,
    color: GlobalStyles.Color.white,
    display: "flex",
    justifyContent: "center",
    width: 99,
    alignItems: "center",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    position: "absolute",
  },
  label: {
    fontWeight: "500",
    color: "#0085cc",
  },
  labelNew: {
    backgroundColor: GlobalStyles.Color.blue050,
  },
  label1: {
    color: GlobalStyles.Color.gray800,
  },
  labelNew1: {
    backgroundColor: GlobalStyles.Color.white,
  },
  labelNewParent: {
    top: 164,
    left: 25,
    flexDirection: "row",
    position: "absolute",
  },
  petaDestinasiItem: {
    top: 347,
    left: 194,
    shadowRadius: 4,
    elevation: 4,
    width: 30,
    height: 30,
    borderRadius: GlobalStyles.Border.br_2xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  vectorIcon: {
    height: "2.46%",
    width: "3.73%",
    top: "43.35%",
    right: "42.4%",
    bottom: "54.19%",
    left: "53.87%",
    position: "absolute",
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
  petaDestinasi: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default PetaDestinasi;
