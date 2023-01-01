import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const HelpFeedback = () => {
  return (
    <View style={styles.helpFeedback}>
      <View style={styles.tabBar}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.helpFeedbackChild, styles.childShadowBox]} />
      <View style={[styles.text, styles.textPosition]}>
        <View style={[styles.view, styles.viewLayout1, styles.viewPosition1]}>
          <View
            style={[styles.child, styles.childLayout, styles.viewLayout1]}
          />
          <Image
            style={[
              styles.fichevronRightIcon,
              styles.iconLayout,
              styles.iconLayout1,
              styles.fichevronIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.problemsTypo,
              styles.aboutUsTypo,
              styles.fiuserIconPosition,
            ]}
          >
            Payment Confirmation
          </Text>
        </View>
        <View style={[styles.view1, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childLayout, styles.viewLayout1]}
          />
          <Image
            style={[
              styles.fichevronRightIcon,
              styles.iconLayout,
              styles.iconLayout1,
              styles.fichevronIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.problemsTypo,
              styles.aboutUsTypo,
              styles.fiuserIconPosition,
            ]}
          >
            Unsuccesfull Transaction
          </Text>
        </View>
        <View style={[styles.view2, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childLayout, styles.viewLayout1]}
          />
          <Image
            style={[
              styles.fichevronRightIcon,
              styles.iconLayout,
              styles.iconLayout1,
              styles.fichevronIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.problemsTypo,
              styles.aboutUsTypo,
              styles.fiuserIconPosition,
            ]}
          >
            Paid the Wrong Amount
          </Text>
        </View>
        <View style={[styles.view3, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childLayout, styles.viewLayout1]}
          />
          <Image
            style={[
              styles.fichevronRightIcon,
              styles.iconLayout,
              styles.iconLayout1,
              styles.fichevronIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.paymentConfirmation,
              styles.problemsTypo,
              styles.aboutUsTypo,
              styles.fiuserIconPosition,
            ]}
          >
            Cancel a Booking
          </Text>
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childLayout, styles.viewLayout1]}
          />
          <Image
            style={[
              styles.fichevronRightIcon,
              styles.iconLayout,
              styles.iconLayout1,
              styles.fichevronIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.changeTheDate,
              styles.figlobeIconPosition,
              styles.problemsTypo,
              styles.aboutUsTypo,
            ]}
          >
            Change the date
          </Text>
        </View>
        <View style={[styles.view5, styles.viewLayout1]}>
          <View
            style={[styles.child, styles.childLayout, styles.viewLayout1]}
          />
          <Image
            style={[
              styles.fichevronRightIcon,
              styles.iconLayout,
              styles.iconLayout1,
              styles.fichevronIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text
            style={[
              styles.aboutUs,
              styles.problemsTypo,
              styles.aboutUsTypo,
              styles.timePosition,
            ]}
          >
            About us
          </Text>
        </View>
        <Text
          style={[
            styles.commonProblems,
            styles.problemsTypo,
            styles.aboutUsTypo,
            styles.statusBarPosition,
          ]}
        >
          Common problems
        </Text>
        <Text
          style={[
            styles.cantFindAnAnswerContact,
            styles.problemsTypo,
            styles.aboutUsTypo,
          ]}
        >
          <Text style={styles.cantFindAn}>Can’t find an answer?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.contactUs}>Contact Us</Text>
        </Text>
      </View>
      <View style={[styles.text2, styles.textPosition]}>
        <View style={[styles.view6, styles.viewLayout, styles.viewPosition1]}>
          <View
            style={[
              styles.child3,
              styles.viewLayout,
              styles.childLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[
              styles.figlobeIconPosition,
              styles.iconLayout,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/figlobe.png")}
          />
          <Image
            style={[
              styles.timePosition,
              styles.iconLayout,
              styles.iconLayout1,
              styles.fichevronIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text style={[styles.generalInformation, styles.tourTypo]}>
            General Information
          </Text>
        </View>
        <View style={[styles.view7, styles.viewPosition]}>
          <View
            style={[
              styles.child3,
              styles.viewLayout,
              styles.childLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[
              styles.iconLayout,
              styles.iconLayout1,
              styles.fichevronIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Image
            style={[
              styles.fiuserIconPosition,
              styles.iconLayout,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/fiuser.png")}
          />
          <Text style={[styles.users, styles.tourTypo]}>Users</Text>
        </View>
        <View style={[styles.view8, styles.viewLayout]}>
          <View
            style={[
              styles.child3,
              styles.viewLayout,
              styles.childLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={[styles.iconLayout1, styles.fichevronIconPosition]}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/uplanefly.png")}
          />
          <Text style={[styles.generalInformation, styles.tourTypo]}>
            Flights
          </Text>
        </View>
        <View style={[styles.view9, styles.viewPosition]}>
          <View
            style={[
              styles.child3,
              styles.viewLayout,
              styles.childLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={styles.fichevronIconPosition}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text style={[styles.users, styles.tourTypo]}>Hotels</Text>
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/ubed.png")}
          />
        </View>
        <View style={[styles.view10, styles.viewLayout]}>
          <View
            style={[
              styles.child3,
              styles.viewLayout,
              styles.childLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={styles.fichevronIconPosition}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/umetro.png")}
          />
          <Text style={[styles.tour, styles.tourTypo]}>Tour</Text>
        </View>
        <View style={[styles.view11, styles.viewPosition]}>
          <View
            style={[
              styles.child3,
              styles.viewLayout,
              styles.childLayout,
              styles.childShadowBox,
            ]}
          />
          <Image
            style={styles.fichevronIconPosition}
            resizeMode="cover"
            source={require("../assets/fichevronright.png")}
          />
          <Text style={[styles.users, styles.tourTypo]}>Buses</Text>
        </View>
        <Text
          style={[
            styles.commonProblems,
            styles.problemsTypo,
            styles.aboutUsTypo,
            styles.statusBarPosition,
          ]}
        >
          Topics by product
        </Text>
      </View>
      <Image
        style={[styles.ubusIcon, styles.iconPosition, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ubus.png")}
      />
      <Image
        style={[styles.fiuserIcon1, styles.iconPosition, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/fiuser1.png")}
      />
      <Image
        style={[styles.tourism1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/tourism-1.png")}
      />
      <View style={[styles.upper, styles.upperLayout]}>
        <Image
          style={[
            styles.arrowChevronBigLeft,
            styles.iconLayout,
            styles.iconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/arrow--chevron-big-left.png")}
        />
        <View
          style={[styles.upperChild, styles.upperLayout, styles.childLayout]}
        />
        <Text style={[styles.searchProblems, styles.problemsTypo]}>
          Search problems
        </Text>
        <Image
          style={styles.iconlylightsearch}
          resizeMode="cover"
          source={require("../assets/iconlylightsearch.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={styles.connectionsIcon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
  },
  textPosition: {
    width: 293,
    left: 36,
    position: "absolute",
  },
  viewLayout1: {
    height: 32,
    width: 283,
    position: "absolute",
  },
  viewPosition1: {
    top: 32,
    left: 10,
  },
  childLayout: {
    borderRadius: GlobalStyles.Border.br_sm,
    top: 0,
  },
  iconLayout: {
    height: 24,
    overflow: "hidden",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  fichevronIconPosition: {
    left: 254,
    width: 24,
  },
  problemsTypo: {
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
    textAlign: "center",
  },
  aboutUsTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    letterSpacing: -0.2,
  },
  fiuserIconPosition: {
    left: 15,
    top: 8,
    position: "absolute",
  },
  figlobeIconPosition: {
    left: 14,
    top: 8,
    position: "absolute",
  },
  timePosition: {
    top: 8,
    position: "absolute",
  },
  statusBarPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  viewLayout: {
    height: 39,
    width: 283,
    position: "absolute",
  },
  tourTypo: {
    top: 12,
    textAlign: "center",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    letterSpacing: -0.2,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  viewPosition: {
    left: 9,
    height: 39,
    width: 283,
    position: "absolute",
  },
  iconPosition: {
    left: 60,
    width: 24,
    position: "absolute",
  },
  upperLayout: {
    height: 42,
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  helpFeedbackChild: {
    top: -292,
    backgroundColor: GlobalStyles.Color.beige,
    shadowRadius: 0,
    elevation: 0,
    height: 447,
    width: 375,
    position: "absolute",
    borderRadius: GlobalStyles.Border.br_lg,
  },
  child: {
    backgroundColor: GlobalStyles.Color.gray_200,
    left: 0,
  },
  fichevronRightIcon: {
    top: 4,
    position: "absolute",
  },
  paymentConfirmation: {
    textAlign: "center",
    color: GlobalStyles.Color.black,
  },
  view: {
    left: 10,
  },
  view1: {
    top: 68,
    left: 10,
  },
  view2: {
    top: 104,
    left: 10,
  },
  view3: {
    top: 140,
    left: 10,
  },
  changeTheDate: {
    textAlign: "center",
    color: GlobalStyles.Color.black,
  },
  view4: {
    top: 176,
    left: 10,
  },
  aboutUs: {
    left: 12,
    textAlign: "center",
    color: GlobalStyles.Color.black,
  },
  view5: {
    top: 212,
    left: 10,
  },
  commonProblems: {
    textAlign: "center",
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
    textAlign: "center",
    position: "absolute",
  },
  text: {
    top: 174,
    height: 592,
  },
  child3: {
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  generalInformation: {
    left: 54,
  },
  view6: {
    left: 10,
  },
  users: {
    left: 55,
  },
  view7: {
    top: 74,
  },
  view8: {
    top: 117,
    left: 10,
  },
  view9: {
    top: 159,
  },
  tour: {
    left: 56,
  },
  view10: {
    top: 201,
    left: 10,
  },
  view11: {
    top: 243,
  },
  text2: {
    top: 437,
    height: 282,
  },
  ubusIcon: {
    top: 688,
  },
  fiuserIcon1: {
    top: 519,
  },
  tourism1Icon: {
    top: 648,
    height: 19,
  },
  arrowChevronBigLeft: {
    top: 9,
    left: 0,
    position: "absolute",
  },
  upperChild: {
    left: 39,
    width: 277,
    backgroundColor: GlobalStyles.Color.white,
  },
  searchProblems: {
    top: 16,
    left: 87,
    fontSize: GlobalStyles.FontSize.size_sm,
    opacity: 0.3,
    textAlign: "center",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  iconlylightsearch: {
    height: "47.62%",
    width: "6.33%",
    top: "26.19%",
    right: "77.53%",
    bottom: "26.19%",
    left: "16.14%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  upper: {
    top: 76,
    left: 30,
    width: 316,
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
    textAlign: "center",
    color: GlobalStyles.Color.black,
    left: 0,
    position: "absolute",
  },
  time: {
    left: 21,
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
    width: 375,
  },
  helpFeedback: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default HelpFeedback;
