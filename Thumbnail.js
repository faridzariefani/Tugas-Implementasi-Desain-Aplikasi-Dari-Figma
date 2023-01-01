import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Thumbnail = () => {
  return (
    <View style={styles.thumbnail}>
      <View style={[styles.tabBar, styles.barLayout, styles.tabBarPosition]}>
        <Text
          style={[
            styles.lihatLainnya,
            styles.lihatLainnyaTypo,
            styles.lihatLainnyaTypo1,
          ]}
        >
          Lihat Lainnya
        </Text>
      </View>
      <View
        style={[
          styles.thumbnailChild,
          styles.childShadowBox,
          styles.barLayout,
          styles.tabBarPosition,
        ]}
      />
      <View style={[styles.upper, styles.upperLayout]}>
        <View
          style={[styles.upperChild, styles.childPosition, styles.upperLayout]}
        />
        <Text
          style={[
            styles.searchDestinationItems,
            styles.seaworldTypo,
            styles.lihatLainnyaTypo1,
          ]}
        >
          Search destination, items....
        </Text>
        <Image
          style={styles.iconlylightsearch}
          resizeMode="cover"
          source={require("../assets/iconlylightsearch3.png")}
        />
      </View>
      <Image
        style={[styles.l2224mhb95jvm25552Icon, styles.seaworldPosition]}
        resizeMode="cover"
        source={require("../assets/0102l2224mhb95jvm2555-2.png")}
      />
      <Text
        style={[
          styles.seaworld,
          styles.seaworldFlexBox,
          styles.seaworldPosition,
          styles.seaworldTypo,
        ]}
      >{`Seaworld `}</Text>
      <Text
        style={[styles.destinasiWisataRecommended, styles.lihatLainnyaTypo]}
      >
        <Text style={styles.destinasiWisata}>
          <Text style={styles.destinasiWisata1}>Destinasi Wisata</Text>
        </Text>
        <Text style={styles.recommended}>
          <Text style={styles.recommended1}>Recommended</Text>
        </Text>
      </Text>
      <View
        style={[
          styles.activites6,
          styles.activitesLayout,
          styles.activitesPosition1,
        ]}
      >
        <View
          style={[
            styles.activites6Child,
            styles.activitesLayout,
            styles.childPosition,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/2018-09-28-55011-1538134470-12.png")}
        />
        <Text style={[styles.safari, styles.safariTypo]}>Safari</Text>
        <Text style={[styles.rp160000, styles.rp160000Typo]}>Rp 160.000</Text>
      </View>
      <View
        style={[
          styles.activites61,
          styles.activitesLayout,
          styles.activitesPosition1,
        ]}
      >
        <View
          style={[
            styles.activites6Child,
            styles.activitesLayout,
            styles.childPosition,
            styles.childShadowBox,
          ]}
        />
        <View
          style={[
            styles.activites6Child,
            styles.activitesLayout,
            styles.childPosition,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/bounce-street-jakarta-trampoline-park-4-12.png")}
        />
        <Text style={[styles.safari, styles.safariTypo]}>Bounce Street</Text>
        <Text style={[styles.rp160000, styles.rp160000Typo]}>Rp 75.000</Text>
      </View>
      <View style={[styles.activites62, styles.activitesPosition]}>
        <View
          style={[
            styles.activites6Child,
            styles.activitesLayout,
            styles.childPosition,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/manualexcursionmuseummacan21980x719-12.png")}
        />
        <Text style={[styles.safari, styles.safariTypo]}>Macan Museum</Text>
        <Text style={[styles.rp160000, styles.rp160000Typo]}>Rp 75.000</Text>
      </View>
      <View style={[styles.activites63, styles.activitesPosition]}>
        <View
          style={[
            styles.activites6Child,
            styles.activitesLayout,
            styles.childPosition,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/b87bb978f61967fe8091bc4bc2172a69-12.png")}
        />
        <Text style={[styles.safari, styles.safariTypo]}>Dufan</Text>
        <Text style={[styles.rp160000, styles.rp160000Typo]}>Rp 200.000</Text>
      </View>
      <Text style={[styles.rp100000, styles.rp160000Typo]}>Rp 100.000</Text>
      <View style={styles.thumbnailItem} />
      <Text style={[styles.flights, styles.busTypo]}>Flights</Text>
      <Text style={[styles.train, styles.busTypo]}>Train</Text>
      <Text style={[styles.bus, styles.busTypo]}>Bus</Text>
      <Text style={[styles.hotels, styles.busTypo]}>Hotels</Text>
      <Image
        style={[styles.thumbnailInner, styles.thumbnailChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.thumbnailChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.thumbnailChild1, styles.thumbnailChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.thumbnailChild2, styles.thumbnailChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.thumbnailChild3, styles.thumbnailChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <Image
        style={[styles.thumbnailChild4, styles.thumbnailChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={[styles.thumbnailChild5, styles.thumbnailChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.itsMovieTimePosition, styles.thumbnailChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Image
        style={[styles.thumbnailChild7, styles.thumbnailChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={styles.uplaneFly}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <Image
        style={styles.ubedIcon}
        resizeMode="cover"
        source={require("../assets/ubed1.png")}
      />
      <Image
        style={[styles.urestaurantIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/urestaurant.png")}
      />
      <Image
        style={[styles.ucarSideviewIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ucarsideview.png")}
      />
      <Image
        style={[styles.uplusCircleIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/upluscircle.png")}
      />
      <Image
        style={[styles.umetroIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/umetro1.png")}
      />
      <Image
        style={[styles.ubusIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/ubus1.png")}
      />
      <Image
        style={[styles.utransactionIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/utransaction.png")}
      />
      <Image
        style={[styles.fimoreHorizontalIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/fimorehorizontal.png")}
      />
      <Image
        style={[
          styles.oynmhygn2bo2qayvmptnpe2Icon,
          styles.itsMovieTimePosition,
        ]}
        resizeMode="cover"
        source={require("../assets/oynmhygn2bo2qayvmptnpe-2.png")}
      />
      <Text
        style={[
          styles.bestStreamingServiceIsHome,
          styles.itsMovieTimePosition,
          styles.safariTypo,
          styles.seaworldFlexBox,
        ]}
      >
        {" "}
        best streaming service is home to thousands of TV series and movies
      </Text>
      <Text
        style={[
          styles.itsMovieTime,
          styles.itsMovieTimePosition,
          styles.lihatLainnyaTypo,
        ]}
      >
        It’s Movie Time !
      </Text>
      <View style={styles.shape} />
      <Image
        style={styles.menuBelowIcon}
        resizeMode="cover"
        source={require("../assets/menu-below8.png")}
      />
      <Image
        style={[styles.discountLoyaltyCardLoyaltyIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/discountloyaltycardloyaltyprogramcustomerservicerewardscardpointsconceptisolatedconceptillustrationwithtinypeoplefloralelementsheroimagewebsite-126608770-1.png")}
      />
      <Image
        style={[styles.discou11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/discou-1-1.png")}
      />
      <Image
        style={[styles.onlineShoppingAndDiscount2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/onlineshoppinganddiscount26727972218274-1.png")}
      />
      <Image
        style={[styles.incorporatingVolumeValueAndIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/onlineshoppinganddiscount26727972218274-1.png")}
      />
      <View style={[styles.statusBar, styles.childPosition, styles.barLayout]}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barLayout: {
    width: 375,
    position: "absolute",
  },
  tabBarPosition: {
    left: 0,
    width: 375,
  },
  lihatLainnyaTypo: {
    color: GlobalStyles.Color.gray_400,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  lihatLainnyaTypo1: {
    letterSpacing: -0.2,
    fontSize: GlobalStyles.FontSize.size_sm,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  upperLayout: {
    height: 42,
    width: 327,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  seaworldTypo: {
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    color: GlobalStyles.Color.black,
    textAlign: "center",
  },
  seaworldPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  seaworldFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  activitesLayout: {
    height: 144,
    width: 129,
    position: "absolute",
  },
  activitesPosition1: {
    top: 445,
    height: 144,
  },
  safariTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_400,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
  },
  rp160000Typo: {
    fontWeight: "700",
    letterSpacing: 0.3,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    position: "absolute",
  },
  activitesPosition: {
    top: 610,
    height: 144,
    width: 129,
    position: "absolute",
  },
  busTypo: {
    top: 968,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "center",
    color: GlobalStyles.Color.gray_400,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
    position: "absolute",
  },
  thumbnailChildLayout1: {
    height: 59,
    width: 59,
    top: 899,
  },
  thumbnailChildLayout: {
    width: 42,
    top: 1022,
    height: 42,
    position: "absolute",
  },
  iconLayout2: {
    height: 30,
    width: 30,
    top: 1028,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 32,
    width: 32,
    top: 1027,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 907,
    width: 42,
    height: 42,
    position: "absolute",
    overflow: "hidden",
  },
  itsMovieTimePosition: {
    left: 34,
    position: "absolute",
  },
  iconLayout: {
    height: 111,
    width: 180,
    top: 1461,
    borderRadius: GlobalStyles.Border.br_sm,
    position: "absolute",
  },
  lihatLainnya: {
    top: 50,
    left: 145,
    textAlign: "center",
  },
  tabBar: {
    bottom: 932,
    height: 83,
  },
  thumbnailChild: {
    top: -292,
    backgroundColor: GlobalStyles.Color.beige,
    shadowRadius: 0,
    elevation: 0,
    height: 447,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  upperChild: {
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.white,
  },
  searchDestinationItems: {
    top: 16,
    opacity: 0.3,
    color: GlobalStyles.Color.black,
    left: 40,
    textAlign: "center",
  },
  iconlylightsearch: {
    height: "47.62%",
    width: "6.05%",
    top: "26.19%",
    right: "90.4%",
    bottom: "26.19%",
    left: "3.55%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  upper: {
    top: 76,
    left: 24,
  },
  l2224mhb95jvm25552Icon: {
    marginTop: -702,
    marginLeft: -165.5,
    width: 323,
    height: 210,
    borderRadius: GlobalStyles.Border.br_sm,
  },
  seaworld: {
    marginTop: -646,
    marginLeft: -122.5,
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: -0.7,
    justifyContent: "center",
    width: 241,
    height: 98,
    color: GlobalStyles.Color.black,
    textAlign: "center",
  },
  destinasiWisata1: {
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  destinasiWisata: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  recommended1: {
    fontSize: 10,
  },
  recommended: {
    margin: GlobalStyles.Margin.margin_sm,
  },
  destinasiWisataRecommended: {
    top: 395,
    left: 115,
    letterSpacing: "-1.5%",
    textAlign: "center",
    position: "absolute",
  },
  activites6Child: {
    shadowRadius: 4,
    elevation: 4,
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.white,
  },
  icon: {
    height: 93,
    width: 129,
    borderRadius: GlobalStyles.Border.br_sm,
    top: 0,
    left: 0,
    position: "absolute",
  },
  safari: {
    top: 100,
    left: 10,
    textAlign: "center",
    position: "absolute",
  },
  rp160000: {
    top: 121,
    left: 10,
    color: GlobalStyles.Color.black,
  },
  activites6: {
    left: 46,
  },
  activites61: {
    left: 198,
  },
  activites62: {
    left: 46,
  },
  activites63: {
    left: 198,
  },
  rp100000: {
    top: 356,
    left: 31,
    color: GlobalStyles.Color.white,
  },
  thumbnailItem: {
    top: 847,
    left: 25,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderTopWidth: 1,
    height: 1,
    width: 326,
    position: "absolute",
  },
  flights: {
    left: 40,
  },
  train: {
    left: 127,
  },
  bus: {
    left: 214,
  },
  hotels: {
    left: 286,
  },
  thumbnailInner: {
    left: 280,
    position: "absolute",
  },
  ellipseIcon: {
    left: 198,
    position: "absolute",
  },
  thumbnailChild1: {
    left: 46,
  },
  thumbnailChild2: {
    left: 105,
  },
  thumbnailChild3: {
    left: 282,
  },
  thumbnailChild4: {
    left: 164,
  },
  thumbnailChild5: {
    left: 223,
  },
  thumbnailChild7: {
    left: 116,
    position: "absolute",
  },
  vectorIcon: {
    width: 45,
    height: 26,
  },
  uplaneFly: {
    top: 904,
    width: 47,
    height: 49,
    paddingHorizontal: 2,
    paddingVertical: 13,
    left: 40,
    position: "absolute",
    overflow: "hidden",
  },
  ubedIcon: {
    top: 908,
    left: 289,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  urestaurantIcon: {
    left: 52,
  },
  ucarSideviewIcon: {
    left: 110,
  },
  uplusCircleIcon: {
    left: 228,
  },
  umetroIcon: {
    left: 124,
  },
  ubusIcon: {
    left: 206,
  },
  utransactionIcon: {
    left: 170,
  },
  fimoreHorizontalIcon: {
    left: 288,
  },
  oynmhygn2bo2qayvmptnpe2Icon: {
    top: 1196,
    width: 300,
    height: 150,
    borderRadius: GlobalStyles.Border.br_sm,
  },
  bestStreamingServiceIsHome: {
    top: 1144,
    textAlign: "left",
    width: 326,
  },
  itsMovieTime: {
    top: 1116,
    letterSpacing: -0.3,
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "center",
  },
  shape: {
    height: "0.29%",
    width: "35.62%",
    top: "99.71%",
    right: "32.2%",
    bottom: "0%",
    left: "32.19%",
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.black,
    position: "absolute",
  },
  menuBelowIcon: {
    top: 1643,
    left: 18,
    width: 339,
    height: 68,
    position: "absolute",
  },
  discountLoyaltyCardLoyaltyIcon: {
    left: 223,
  },
  discou11Icon: {
    left: 20,
  },
  onlineShoppingAndDiscount2Icon: {
    left: 426,
  },
  incorporatingVolumeValueAndIcon: {
    left: 629,
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
    fontSize: GlobalStyles.FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: GlobalStyles.FontFamily.sFProText,
    width: 54,
    top: "50%",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    left: 0,
    position: "absolute",
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
  },
  thumbnail: {
    flex: 1,
    width: "100%",
    height: 1744,
    overflow: "hidden",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default Thumbnail;
