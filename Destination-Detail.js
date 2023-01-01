import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const DestinasiDetail = () => {
  return (
    <View style={styles.destinasiDetail}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/2018-09-28-55011-1538134470-2.png")}
      />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/2018-09-28-55011-1538134470-2.png")}
      />
      <View style={[styles.up, styles.upPosition]}>
        <View
          style={[
            styles.upChild,
            styles.upChildPosition,
            styles.upItemShadowBox,
          ]}
        />
        <View
          style={[styles.upItem, styles.upItemShadowBox, styles.upPosition]}
        />
        <View style={[styles.upInner, styles.upChildPosition]} />
        <Text
          style={[
            styles.roundTrip,
            styles.safariFlexBox,
            styles.time1Color,
            styles.oneWayTypo,
          ]}
        >
          Round Trip
        </Text>
        <Text style={[styles.oneWay, styles.safariFlexBox, styles.oneWayTypo]}>
          One way
        </Text>
        <Text style={[styles.safari, styles.safariFlexBox, styles.time1Color]}>
          Safari
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.statusBar}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={[styles.time1, styles.safariFlexBox, styles.time1Color]}>
            9:27
          </Text>
        </View>
      </View>
      <Image
        style={[styles.iconlylightsearch, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightsearch2.png")}
      />
      <Text style={[styles.safari1, styles.safariFlexBox]}>Safari</Text>
      <Text style={[styles.rp160000, styles.rp160000FlexBox]}>Rp 160.000</Text>
      <Text style={[styles.tamanWisata, styles.rp160000FlexBox]}>
        Taman Wisata
      </Text>
      <Text style={[styles.descriptionItIsALongEstab, styles.galeriLayout]}>
        Description It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout
      </Text>
      <Text style={[styles.call626262626262, styles.galeriLayout]}>
        <Text style={styles.call}>{`Call `}</Text>
        <Text style={styles.text}>+626262626262</Text>
      </Text>
      <Text style={[styles.call626262626262, styles.galeriLayout]}>
        <Text style={styles.call}>{`Call `}</Text>
        <Text style={styles.text}>+626262626262</Text>
      </Text>
      <Text style={[styles.galeri, styles.galeriLayout]}>Galeri</Text>
      <Text style={[styles.lokasi, styles.galeriLayout]}>Lokasi</Text>
      <Text style={[styles.instagramTamanSafari, styles.galeriLayout]}>
        <Text style={styles.call}>Instagram</Text>
        <Text style={styles.text}>Taman_Safari</Text>
      </Text>
      <Image
        style={[
          styles.destinasiDetailChild,
          styles.destinasiLayout,
          styles.destinasiPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.destinasiDetailItem, styles.destinasiLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.image1Icon, styles.iconPosition, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[
          styles.image2Icon,
          styles.iconPosition1,
          styles.vectorIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.image5Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={[
          styles.destinasiDetailInner,
          styles.destinasiLayout,
          styles.destinasiPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={styles.image6Icon}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.menuBelowIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/menu-below7.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <View
        style={[styles.destinasiDetailChild1, styles.rectangleViewLayout]}
      />
      <Image
        style={styles.shapeIcon}
        resizeMode="cover"
        source={require("../assets/shape.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  upPosition: {
    height: 155,
    top: 0,
    position: "absolute",
  },
  upChildPosition: {
    display: "none",
    position: "absolute",
  },
  upItemShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    left: 0,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  safariFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  time1Color: {
    color: GlobalStyles.Color.black,
    textAlign: "center",
  },
  oneWayTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    top: 171,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
    display: "none",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rp160000FlexBox: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  galeriLayout: {
    width: 326,
    textAlign: "left",
    color: GlobalStyles.Color.gray800,
    lineHeight: 18,
    left: 27,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  destinasiLayout: {
    height: 1,
    width: 326,
    position: "absolute",
  },
  destinasiPosition: {
    left: 27,
    height: 1,
  },
  iconPosition: {
    left: "4.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    bottom: "38.15%",
    top: "57.16%",
    width: "16%",
    height: "4.7%",
  },
  iconLayout: {
    height: 60,
    width: 60,
    top: 730,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 36,
    width: 36,
    backgroundColor: GlobalStyles.Color.gray_600,
    borderRadius: GlobalStyles.Border.br_xl,
    position: "absolute",
  },
  icon: {
    top: 166,
    left: 10,
    width: 355,
    height: 251,
    borderRadius: GlobalStyles.Border.br_sm,
    position: "absolute",
  },
  upChild: {
    top: 36,
    height: 164,
    backgroundColor: GlobalStyles.Color.white,
    display: "none",
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
  },
  roundTrip: {
    left: 202,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
  },
  oneWay: {
    left: 95,
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
  },
  safari: {
    top: 80,
    left: 142,
    fontSize: GlobalStyles.FontSize.size_3xl,
    letterSpacing: -0.4,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  up: {
    width: 375,
    left: 0,
  },
  vectorIcon: {
    height: "1.84%",
    width: "3.4%",
    top: "6.64%",
    right: "86.97%",
    bottom: "91.52%",
    left: "9.63%",
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
  },
  time: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconlylightsearch: {
    height: "1.57%",
    width: "5.33%",
    top: "6.73%",
    right: "7.73%",
    bottom: "91.7%",
    left: "86.93%",
  },
  safari1: {
    top: 428,
    left: 112,
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: -0.7,
    color: GlobalStyles.Color.gray_400,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  rp160000: {
    top: 388,
    left: 15,
    letterSpacing: 0.3,
    fontWeight: "700",
    width: 86,
    color: GlobalStyles.Color.white,
  },
  tamanWisata: {
    top: 472,
    left: 136,
    width: 104,
    color: GlobalStyles.Color.gray_400,
    letterSpacing: -0.2,
  },
  descriptionItIsALongEstab: {
    top: 500,
    fontFamily: GlobalStyles.FontFamily.roboto,
  },
  call: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    margin: GlobalStyles.Margin.margin_sm,
  },
  call626262626262: {
    top: 589,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  galeri: {
    top: 700,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  lokasi: {
    top: 833,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  instagramTamanSafari: {
    top: 635,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  destinasiDetailChild: {
    top: 577,
  },
  destinasiDetailItem: {
    top: 688,
    left: 25,
  },
  image1Icon: {
    right: "79.2%",
  },
  image2Icon: {
    right: "60.53%",
    left: "23.47%",
  },
  image3Icon: {
    left: 158,
  },
  image4Icon: {
    left: 228,
  },
  image5Icon: {
    left: 298,
  },
  destinasiDetailInner: {
    top: 821,
  },
  image6Icon: {
    top: 861,
    left: 2,
    height: 255,
    width: 375,
    position: "absolute",
  },
  menuBelowIcon: {
    height: "8.31%",
    width: "90.4%",
    top: "90.75%",
    right: "4.8%",
    bottom: "0.94%",
  },
  rectangleView: {
    top: 175,
    left: 322,
  },
  vectorIcon1: {
    height: "1.39%",
    width: "5.41%",
    top: "14.42%",
    right: "6.59%",
    bottom: "84.18%",
    left: "88%",
  },
  destinasiDetailChild1: {
    top: 221,
    left: 323,
  },
  shapeIcon: {
    width: 12,
    height: 17,
  },
  destinasiDetail: {
    flex: 1,
    width: "100%",
    height: 1276,
    overflow: "hidden",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default DestinasiDetail;
