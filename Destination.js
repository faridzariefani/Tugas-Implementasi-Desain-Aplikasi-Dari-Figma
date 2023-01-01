import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Destinasi = () => {
  return (
    <View style={styles.destinasi}>
      <Image
        style={[
          styles.menuBelowIcon,
          styles.iconLayout,
          styles.tabBarChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/menu-below.png")}
      />
      <View style={[styles.tabBar, styles.upPosition]}>
        <View style={[styles.tabBarChild, styles.tabBarChildPosition]} />
      </View>
      <View style={[styles.upLayout, styles.upPosition]}>
        <View
          style={[
            styles.upChild,
            styles.childShadowBox,
            styles.upItemShadowBox,
          ]}
        />
        <View
          style={[
            styles.upItem,
            styles.childShadowBox,
            styles.upItemShadowBox,
            styles.upLayout,
          ]}
        />
        <View style={styles.upInner} />
        <Text
          style={[
            styles.roundTrip,
            styles.time1FlexBox,
            styles.time1Color,
            styles.oneWayTypo,
          ]}
        >
          Round Trip
        </Text>
        <Text style={[styles.oneWay, styles.time1FlexBox, styles.oneWayTypo]}>
          One way
        </Text>
        <Text style={[styles.destinasi1, styles.destinasiTypo]}>Destinasi</Text>
      </View>
      <View style={styles.upPosition}>
        <View
          style={[
            styles.upChild,
            styles.childShadowBox,
            styles.upItemShadowBox,
          ]}
        />
        <View
          style={[
            styles.upItem,
            styles.childShadowBox,
            styles.upItemShadowBox,
            styles.upLayout,
          ]}
        />
        <View style={styles.upInner} />
        <Text
          style={[
            styles.roundTrip,
            styles.time1FlexBox,
            styles.time1Color,
            styles.oneWayTypo,
          ]}
        >
          Round Trip
        </Text>
        <Text style={[styles.oneWay, styles.time1FlexBox, styles.oneWayTypo]}>
          One way
        </Text>
        <Text style={[styles.destinasi2, styles.destinasiTypo]}>Destinasi</Text>
      </View>
      <Image
        style={styles.fichevronLeftIcon}
        resizeMode="cover"
        source={require("../assets/fichevronleft.png")}
      />
      <Image
        style={[styles.iconlylightOutlinefilter, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/umetro.png")}
      />
      <Image
        style={[styles.iconlylightsearch, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightsearch1.png")}
      />
      <Image
        style={[styles.line181Icon, styles.shapeLayout, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/line-181.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.ellipse739Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-739.png")}
      />
      <View
        style={[
          styles.activites7,
          styles.activitesLayout,
          styles.activitesPosition3,
        ]}
      >
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/2018-09-28-55011-1538134470-1.png")}
        />
        <Text style={[styles.safari, styles.dufanFlexBox]}>Safari</Text>
        <Text style={[styles.rp160000, styles.rp75000Typo]}>Rp 160.000</Text>
      </View>
      <View style={[styles.activites8, styles.activitesPosition2]}>
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/2018-09-28-55011-1538134470-1.png")}
        />
        <Text style={[styles.safari, styles.dufanFlexBox]}>Safari</Text>
        <Text style={[styles.rp160000, styles.rp75000Typo]}>Rp 160.000</Text>
      </View>
      <View
        style={[
          styles.activites71,
          styles.activitesLayout,
          styles.activitesPosition3,
        ]}
      >
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/bounce-street-jakarta-trampoline-park-4-1.png")}
        />
        <Text style={[styles.bounceStreet, styles.dufanFlexBox]}>
          Bounce Street
        </Text>
        <Text style={[styles.rp75000, styles.rp75000Typo]}>Rp 75.000</Text>
      </View>
      <View style={[styles.activites9, styles.activitesPosition2]}>
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/bounce-street-jakarta-trampoline-park-4-1.png")}
        />
        <Text style={[styles.bounceStreet, styles.dufanFlexBox]}>
          Bounce Street
        </Text>
        <Text style={[styles.rp75000, styles.rp75000Typo]}>Rp 75.000</Text>
      </View>
      <View style={[styles.activites72, styles.activitesPosition1]}>
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/manualexcursionmuseummacan21980x719-1.png")}
        />
        <Text style={[styles.macanMuseum, styles.dufanFlexBox]}>
          Macan Museum
        </Text>
        <Text style={[styles.rp75000, styles.rp75000Typo]}>Rp 75.000</Text>
      </View>
      <View style={[styles.activites11, styles.activitesPosition]}>
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/manualexcursionmuseummacan21980x719-1.png")}
        />
        <Text style={[styles.macanMuseum, styles.dufanFlexBox]}>
          Macan Museum
        </Text>
        <Text style={[styles.rp75000, styles.rp75000Typo]}>Rp 75.000</Text>
      </View>
      <View style={[styles.activites73, styles.activitesPosition1]}>
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/b87bb978f61967fe8091bc4bc2172a69-1.png")}
        />
        <Text style={[styles.dufan, styles.dufanFlexBox]}>Dufan</Text>
        <Text style={[styles.rp200000, styles.rp75000Typo]}>Rp 200.000</Text>
      </View>
      <View style={[styles.activites10, styles.activitesPosition]}>
        <View
          style={[
            styles.activites7Child,
            styles.activitesLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/b87bb978f61967fe8091bc4bc2172a69-1.png")}
        />
        <Text style={[styles.dufan, styles.dufanFlexBox]}>Dufan</Text>
        <Text style={[styles.rp200000, styles.rp75000Typo]}>Rp 200.000</Text>
      </View>
      <View style={[styles.shape, styles.shapeLayout]} />
      <Image
        style={styles.menuBelowIcon1}
        resizeMode="cover"
        source={require("../assets/menu-below6.png")}
      />
      <View style={styles.statusBar}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={[styles.time1, styles.time1FlexBox, styles.time1Color]}>
            9:27
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tabBarChildPosition: {
    left: "0%",
    right: "0%",
    display: "none",
    position: "absolute",
    width: "100%",
  },
  upPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
  },
  upItemShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    position: "absolute",
    borderRadius: GlobalStyles.Border.br_lg,
  },
  upLayout: {
    height: 155,
    top: 0,
  },
  time1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  time1Color: {
    color: GlobalStyles.Color.black,
    textAlign: "center",
  },
  oneWayTypo: {
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: GlobalStyles.FontSize.size_base,
    top: 171,
    display: "none",
  },
  destinasiTypo: {
    letterSpacing: -0.4,
    fontSize: GlobalStyles.FontSize.size_3xl,
    textAlign: "center",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    position: "absolute",
  },
  shapeLayout: {
    height: "0.35%",
    position: "absolute",
  },
  activitesLayout: {
    height: 250,
    width: 150,
    position: "absolute",
  },
  activitesPosition3: {
    top: 186,
    height: 250,
  },
  dufanFlexBox: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: GlobalStyles.Color.gray_400,
    left: 12,
    top: 174,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  rp75000Typo: {
    fontWeight: "700",
    letterSpacing: 0.3,
    top: 210,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: 12,
    textAlign: "center",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  activitesPosition2: {
    top: 730,
    height: 250,
    width: 150,
    position: "absolute",
  },
  activitesPosition1: {
    top: 458,
    height: 250,
    width: 150,
    position: "absolute",
  },
  activitesPosition: {
    top: 1002,
    height: 250,
    width: 150,
    position: "absolute",
  },
  menuBelowIcon: {
    height: "8.07%",
    top: "49.43%",
    bottom: "42.49%",
    display: "none",
  },
  tabBarChild: {
    height: "108.43%",
    top: "-8.43%",
    bottom: "0%",
    display: "none",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
    right: "0%",
  },
  tabBar: {
    bottom: 600,
    height: 83,
  },
  upChild: {
    top: 36,
    height: 164,
    display: "none",
    backgroundColor: GlobalStyles.Color.white,
  },
  upItem: {
    backgroundColor: GlobalStyles.Color.beige,
  },
  upInner: {
    top: 167,
    left: 75,
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 106,
    height: 25,
    borderRadius: GlobalStyles.Border.br_sm,
    display: "none",
    position: "absolute",
  },
  roundTrip: {
    left: 202,
  },
  oneWay: {
    left: 95,
    color: GlobalStyles.Color.white,
  },
  destinasi1: {
    top: 82,
    left: 53,
  },
  destinasi2: {
    top: 80,
    left: 124,
  },
  fichevronLeftIcon: {
    top: 75,
    width: 43,
    height: 43,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  iconlylightOutlinefilter: {
    height: "1.7%",
    width: "6.4%",
    top: "11.47%",
    right: "23.47%",
    bottom: "86.83%",
    left: "70.13%",
    position: "absolute",
  },
  iconlylightsearch: {
    height: "1.42%",
    width: "5.33%",
    top: "6.09%",
    right: "8.27%",
    bottom: "92.49%",
    left: "86.4%",
    position: "absolute",
  },
  line181Icon: {
    width: "1.32%",
    top: "0.88%",
    right: "95.48%",
    bottom: "98.77%",
    left: "3.2%",
  },
  vectorIcon: {
    height: "1.66%",
    width: "3.4%",
    top: "6%",
    right: "86.97%",
    bottom: "92.33%",
    left: "9.63%",
    position: "absolute",
  },
  ellipse739Icon: {
    height: "1.2%",
    width: "4.53%",
    top: "6.18%",
    right: "8.72%",
    bottom: "92.61%",
    left: "86.75%",
    position: "absolute",
  },
  activites7Child: {
    shadowRadius: 4,
    elevation: 4,
    borderRadius: GlobalStyles.Border.br_sm,
    height: 250,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  icon: {
    height: 161,
    width: 150,
    borderRadius: GlobalStyles.Border.br_sm,
    top: 0,
    left: 0,
    position: "absolute",
  },
  safari: {
    width: 50,
  },
  rp160000: {
    width: 86,
  },
  activites7: {
    left: 21,
  },
  activites8: {
    left: 21,
  },
  bounceStreet: {
    width: 116,
  },
  rp75000: {
    width: 80,
  },
  activites71: {
    left: 200,
  },
  activites9: {
    left: 200,
  },
  macanMuseum: {
    width: 134,
  },
  activites72: {
    left: 21,
  },
  activites11: {
    left: 21,
  },
  dufan: {
    width: 51,
  },
  rp200000: {
    width: 90,
  },
  activites73: {
    left: 200,
  },
  activites10: {
    left: 200,
  },
  shape: {
    width: "36%",
    top: "98.65%",
    right: "32%",
    bottom: "0.99%",
    left: "32%",
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.black,
  },
  menuBelowIcon1: {
    top: 1292,
    left: 18,
    width: 339,
    height: 68,
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
    left: 0,
    color: GlobalStyles.Color.black,
  },
  time: {
    top: 8,
    width: 56,
    height: 23,
    left: 21,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  destinasi: {
    flex: 1,
    height: 1412,
    overflow: "hidden",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default Destinasi;
