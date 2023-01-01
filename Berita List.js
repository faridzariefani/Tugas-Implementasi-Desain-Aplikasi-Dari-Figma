import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const BeritaList = () => {
  return (
    <View style={styles.beritaList}>
      <Image
        style={[
          styles.menuBelowIcon,
          styles.tabBarChildPosition,
          styles.iconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/menu-below1.png")}
      />
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={[styles.tabBarChild, styles.tabBarChildPosition]} />
        <View style={styles.shape} />
      </View>
      <View style={styles.upPosition}>
        <View style={[styles.upChild, styles.upPosition]} />
        <Text
          style={[styles.informasiBerita, styles.time1FlexBox]}
        >{`Informasi & Berita`}</Text>
      </View>
      <Image
        style={[styles.fichevronLeftIcon, styles.timePosition]}
        resizeMode="cover"
        source={require("../assets/fichevronleft.png")}
      />
      <View style={styles.asramaAkademiPolisiKebocoraParent}>
        <Text
          style={[
            styles.asramaAkademiPolisiKebocora,
            styles.mobilHanyutTerbawaArus31DLayout,
          ]}
        >
          <Text style={styles.asramaAkademiPolisiKebocora1}>
            <Text
              style={styles.asramaAkademiPolisi}
            >{`Asrama akademi Polisi kebocoran gas `}</Text>
          </Text>
          <Text style={styles.oktober2019}>
            <Text style={styles.oktober20191}>22 Oktober 2019</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.jakartaTerkenaBanjir27Juli,
            styles.mobilHanyutTerbawaArus31DLayout,
          ]}
        >
          <Text style={styles.asramaAkademiPolisiKebocora1}>
            <Text style={styles.asramaAkademiPolisi}>
              Jakarta terkena banjir
            </Text>
          </Text>
          <Text style={styles.oktober2019}>
            <Text style={styles.oktober20191}>27 Juli 2020</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.mobilHanyutTerbawaArus31D,
            styles.mobilHanyutTerbawaArus31DLayout,
          ]}
        >
          <Text style={styles.asramaAkademiPolisiKebocora1}>
            <Text style={styles.asramaAkademiPolisi}>
              29 Mobil hanyut terbawa arus
            </Text>
          </Text>
          <Text style={styles.oktober2019}>
            <Text style={styles.oktober20191}>31 Desember 2022</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.perlombaanMandalikaTerlihat,
            styles.mobilHanyutTerbawaArus31DLayout,
          ]}
        >
          <Text style={styles.asramaAkademiPolisiKebocora1}>
            <Text style={styles.asramaAkademiPolisi}>
              Perlombaan Mandalika terlihat sepi
            </Text>
          </Text>
          <Text style={styles.oktober2019}>
            <Text style={styles.oktober20191}>22 Mei 2022</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.ferdySamboTerancam100Tahun,
            styles.mobilHanyutTerbawaArus31DLayout,
          ]}
        >
          <Text style={styles.asramaAkademiPolisiKebocora1}>
            <Text style={styles.asramaAkademiPolisi}>
              Ferdy Sambo terancam 100 tahun penjara
            </Text>
          </Text>
          <Text style={styles.oktober2019}>
            <Text style={styles.oktober20191}>20 November 2022</Text>
          </Text>
        </Text>
        <Image
          style={[styles.iconLayout, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/image-9.png")}
        />
        <Image
          style={[styles.image10Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-9.png")}
        />
      </View>
      <View style={[styles.image10Wrapper, styles.image10Layout]}>
        <Image
          style={[styles.image10Icon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-101.png")}
        />
      </View>
      <View style={[styles.image10Container, styles.image10Layout]}>
        <Image
          style={[styles.image10Icon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-101.png")}
        />
      </View>
      <Image
        style={[styles.image11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
      <View
        style={[styles.statusBar, styles.statusBarPosition, styles.barLayout]}
      >
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
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  barLayout: {
    width: 375,
    position: "absolute",
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
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  timePosition: {
    left: 21,
    position: "absolute",
  },
  mobilHanyutTerbawaArus31DLayout: {
    height: 56,
    width: 167,
    textAlign: "left",
    lineHeight: 18,
    left: 150,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    position: "absolute",
  },
  statusBarPosition: {
    top: 0,
    left: 0,
  },
  iconLayout: {
    height: 100,
    width: 139,
    borderRadius: GlobalStyles.Border.br_sm,
    position: "absolute",
  },
  image10Layout: {
    height: 101,
    width: 139,
    borderRadius: GlobalStyles.Border.br_sm,
    left: 27,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: GlobalStyles.Color.white,
  },
  menuBelowIcon: {
    height: "14.04%",
    top: "85.96%",
  },
  tabBarChild: {
    height: "108.43%",
    top: "-8.43%",
    backgroundColor: GlobalStyles.Color.white,
    bottom: "0%",
    right: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
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
    left: 0,
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
  informasiBerita: {
    top: 80,
    left: 52,
    fontSize: GlobalStyles.FontSize.size_3xl,
    letterSpacing: -0.4,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    textAlign: "center",
  },
  fichevronLeftIcon: {
    top: 75,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  asramaAkademiPolisi: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.black,
  },
  asramaAkademiPolisiKebocora1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  oktober20191: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_400,
  },
  oktober2019: {
    margin: GlobalStyles.Margin.margin_sm,
  },
  asramaAkademiPolisiKebocora: {
    top: 18,
  },
  jakartaTerkenaBanjir27Juli: {
    top: 137,
  },
  mobilHanyutTerbawaArus31D: {
    top: 500,
  },
  perlombaanMandalikaTerlihat: {
    top: 250,
  },
  ferdySamboTerancam100Tahun: {
    top: 365,
  },
  image10Icon: {
    top: 347,
    left: 0,
  },
  asramaAkademiPolisiKebocoraParent: {
    top: 171,
    width: 317,
    height: 556,
    left: 27,
    position: "absolute",
  },
  image10Icon1: {
    height: "126.43%",
    width: "253.04%",
    top: "0%",
    right: "-153.04%",
    bottom: "-26.43%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  image10Wrapper: {
    top: 286,
  },
  image10Container: {
    top: 634,
  },
  image11Icon: {
    top: 403,
    left: 27,
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
    width: 56,
    height: 23,
  },
  statusBar: {
    height: 44,
  },
  beritaList: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default BeritaList;
