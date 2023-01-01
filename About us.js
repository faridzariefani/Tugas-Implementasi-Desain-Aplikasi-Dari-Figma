import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const AboutUs = () => {
  return (
    <View style={styles.aboutUs}>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.aboutUsChild, styles.barLayout]} />
      <View style={styles.text}>
        <View style={[styles.view, styles.viewLayout, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childPosition, styles.viewLayout]}
          />
          <Image
            style={styles.fichevronRightIcon}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.time1FlexBox,
              styles.aboutUs1Typo,
              styles.changeTheDateTypo,
            ]}
          >
            Payment Confirmation
          </Text>
        </View>
        <View style={[styles.view1, styles.viewLayout, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childPosition, styles.viewLayout]}
          />
          <Image
            style={styles.fichevronRightIcon}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.time1FlexBox,
              styles.aboutUs1Typo,
              styles.changeTheDateTypo,
            ]}
          >
            Unsuccesfull Transaction
          </Text>
        </View>
        <View style={[styles.view2, styles.viewLayout, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childPosition, styles.viewLayout]}
          />
          <Image
            style={styles.fichevronRightIcon}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.time1FlexBox,
              styles.aboutUs1Typo,
              styles.changeTheDateTypo,
            ]}
          >
            Paid the Wrong Amount
          </Text>
        </View>
        <View style={[styles.view3, styles.viewLayout, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childPosition, styles.viewLayout]}
          />
          <Image
            style={styles.fichevronRightIcon}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.time1FlexBox,
              styles.aboutUs1Typo,
              styles.changeTheDateTypo,
            ]}
          >
            Cancel a Booking
          </Text>
        </View>
        <View style={[styles.view4, styles.viewLayout, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childPosition, styles.viewLayout]}
          />
          <Image
            style={styles.fichevronRightIcon}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.changeTheDate,
              styles.time1FlexBox,
              styles.aboutUs1Typo,
              styles.changeTheDateTypo,
            ]}
          >
            Change the date
          </Text>
        </View>
        <View style={[styles.view5, styles.viewLayout, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childPosition, styles.viewLayout]}
          />
          <Image
            style={styles.fichevronRightIcon}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.time1FlexBox,
              styles.aboutUs1Typo,
              styles.changeTheDateTypo,
            ]}
          >
            Others...
          </Text>
        </View>
        <Text
          style={[
            styles.commonProblems,
            styles.time1FlexBox,
            styles.aboutUs1Typo,
            styles.changeTheDateTypo,
            styles.childPosition,
          ]}
        >
          Common problems
        </Text>
        <Text
          style={[
            styles.cantFindAnAnswerContact,
            styles.time1FlexBox,
            styles.aboutUs1Typo,
            styles.changeTheDateTypo,
          ]}
        >
          <Text style={styles.cantFindAn}>Can’t find an answer?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.contactUs}>Contact Us</Text>
        </Text>
      </View>
      <View style={[styles.text2, styles.textLayout]}>
        <Text style={[styles.travelin, styles.travelinTypo]}>Travelin</Text>
      </View>
      <View style={[styles.text3, styles.textLayout]}>
        <Text style={[styles.version1002, styles.travelinTypo]}>
          Version 1.00.2
        </Text>
      </View>
      <Image
        style={styles.logoWarnaBaru2}
        resizeMode="cover"
        source={require("../assets/logo-warna-baru-2.png")}
      />
      <Text
        style={[styles.travelinAdalahAplikasiYang, styles.aplikasiFlexBox]}
      >{`Travelin adalah aplikasi yang dibuat bertujuan untuk memudahkan Pengguna dalam berwisata, baik dalam hal memilih destinasi, transportasi, dan penginapan.. `}</Text>
      <Text style={[styles.aboutUs1, styles.time1FlexBox, styles.aboutUs1Typo]}>
        About Us
      </Text>
      <Image
        style={[styles.fichevronLeftIcon, styles.timePosition]}
        resizeMode="cover"
        source={require("../assets/fichevronleft.png")}
      />
      <Text style={[styles.aplikasiIniJugaMenerapkanK, styles.aplikasiFlexBox]}>
        Aplikasi ini juga menerapkan kriteria Usability, yaitu Learnability,
        Efficiency, Memorability, Errors, dan Satisfaction. Sehingga pengguna
        dan menggunakan aplikasi ini untuk mencapai tujuannya secara efektif,
        efisien, dan memuaskan
      </Text>
      <View style={[styles.statusBar, styles.childPosition, styles.barLayout]}>
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
  barLayout: {
    width: 375,
    position: "absolute",
  },
  viewLayout: {
    height: 32,
    width: 283,
    position: "absolute",
  },
  viewLayout1: {
    left: 10,
    height: 32,
    width: 283,
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  time1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  aboutUs1Typo: {
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    textAlign: "center",
  },
  changeTheDateTypo: {
    letterSpacing: -0.2,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
  },
  textLayout: {
    height: 20,
    position: "absolute",
  },
  travelinTypo: {
    letterSpacing: -0.3,
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    top: 0,
    left: 0,
    position: "absolute",
  },
  aplikasiFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  timePosition: {
    left: 21,
    position: "absolute",
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
    left: 0,
  },
  aboutUsChild: {
    top: -292,
    backgroundColor: GlobalStyles.Color.beige,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 447,
    left: 0,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  child: {
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.gray_200,
  },
  fichevronRightIcon: {
    top: 4,
    left: 254,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  paymentConfirmation: {
    left: 15,
    color: GlobalStyles.Color.black,
    top: 8,
  },
  view: {
    top: 32,
  },
  view1: {
    top: 68,
  },
  view2: {
    top: 104,
  },
  view3: {
    top: 140,
  },
  changeTheDate: {
    left: 14,
    color: GlobalStyles.Color.black,
    top: 8,
  },
  view4: {
    top: 176,
  },
  view5: {
    top: 212,
  },
  commonProblems: {
    color: GlobalStyles.Color.black,
  },
  cantFindAn: {
    color: GlobalStyles.Color.black,
  },
  text1: {
    color: GlobalStyles.Color.turquoise,
  },
  contactUs: {
    color: GlobalStyles.Color.green,
  },
  cantFindAnAnswerContact: {
    top: "97.3%",
    left: "11.6%",
  },
  text: {
    top: 174,
    width: 293,
    height: 592,
    display: "none",
    left: 36,
    position: "absolute",
  },
  travelin: {
    color: GlobalStyles.Color.black,
  },
  text2: {
    top: 289,
    left: 152,
    width: 70,
  },
  version1002: {
    color: "rgba(0, 0, 0, 0.35)",
  },
  text3: {
    top: 316,
    left: 129,
    width: 116,
  },
  logoWarnaBaru2: {
    top: 173,
    left: 140,
    width: 95,
    height: 94,
    position: "absolute",
  },
  travelinAdalahAplikasiYang: {
    top: 382,
    left: 43,
    width: 288,
  },
  aboutUs1: {
    top: 82,
    left: 73,
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
  aplikasiIniJugaMenerapkanK: {
    top: 507,
    width: 301,
    left: 36,
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
    width: 56,
    height: 23,
    top: 8,
  },
  statusBar: {
    height: 44,
  },
  aboutUs: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default AboutUs;
