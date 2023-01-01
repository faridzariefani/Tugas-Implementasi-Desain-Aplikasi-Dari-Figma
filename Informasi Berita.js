import * as React from "react";
import { Image, StyleSheet, View, Text, Linking } from "react-native";
import GlobalStyles from "../GlobalStyles";

const InformasiBerita = () => {
  return (
    <View style={styles.informasiBerita}>
      <Image
        style={[styles.menuBelowIcon, styles.tabBarChildPosition]}
        resizeMode="cover"
        source={require("../assets/menu-below1.png")}
      />
      <View style={[styles.tabBar, styles.upPosition]}>
        <View style={[styles.tabBarChild, styles.tabBarChildPosition]} />
      </View>
      <View style={styles.shape} />
      <View style={[styles.up, styles.upPosition]}>
        <View style={[styles.upChild, styles.upChildPosition]} />
        <Text
          style={[styles.informasiBerita1, styles.time1FlexBox]}
        >{`Informasi & Berita`}</Text>
      </View>
      <Image
        style={[styles.fichevronLeftIcon, styles.timePosition]}
        resizeMode="cover"
        source={require("../assets/fichevronleft.png")}
      />
      <Image
        style={styles.image12Icon}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
      <Text style={styles.pasarKriptoDatarPadaAwalP}>
        <Text style={styles.pasarKriptoDatarPadaAwalP1}>
          <Text style={styles.pasarKriptoDatar}>
            Pasar Kripto Datar pada Awal Pekan Terakhir November 2022
          </Text>
        </Text>
        <Text style={styles.november2022}>
          <Text style={styles.november20221}>28 November 2022</Text>
        </Text>
      </Text>
      <Text
        style={[
          styles.performaPasarKriptoSejakAk,
          styles.performaPasarKriptoSejakAkTypo,
        ]}
      >
        <Text style={styles.pasarKriptoDatarPadaAwalP1}>
          {`Performa pasar `}
          <Text>kripto</Text> sejak akhir pekan lalu, tidak ada pergerakan yang
          kuat di market, sehingga perdagangan cenderung sideways dan tidak
          menggairahkan.
        </Text>
        <Text style={styles.november2022}>
          Meskipun, ada sentimen positif dari perilisan laporan hasil FOMC
          meeting pada awal November 2022 lalu, tepatnya pada Kamis
          (24/11/2022), tidak membuat pasar kripto terus bergairah. Reli hanya
          sesaat, sebelum banyak trader melakukan aksi profit taking yang
          membuat sepanjang akhir pekan sejumlah kripto big cap turun.
        </Text>
      </Text>
      <Text
        style={[
          styles.traderTokocryptoAfidSugion,
          styles.performaPasarKriptoSejakAkTypo,
        ]}
      >
        <Text style={styles.pasarKriptoDatarPadaAwalP1}>
          Trader Tokocrypto, Afid Sugiono mengatakan aksi profit taking memang
          terlihat menjelang akhir pekan karena bertepatan dengan momen perayaan
          liburan Thanksgiving AS.
        </Text>
        <Text style={styles.pasarKriptoDatarPadaAwalP1}>
          “Banyak trader dan investor yang membutuhkan fiat untuk kebutuhan
          liburan. Efeknya masih terasa hingga Senin (28/11) pagi, sehingga
          market kripto belum kembali bergairah,” ujar Afid, dalam analisis
          pasar harian yang diterima Liputan6.com, Senin (28/11/2022).
        </Text>
        <Text style={styles.november2022}>
          Di samping itu, Afid menambahkan, Fear and Greed Index masih ditutup
          rendah pada level 28 dengan kategori Fear.
        </Text>
      </Text>
      <View style={[styles.statusBar, styles.upChildPosition]}>
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
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  upPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  upChildPosition: {
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
  performaPasarKriptoSejakAkTypo: {
    left: 37,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    lineHeight: 18,
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    position: "absolute",
  },
  menuBelowIcon: {
    height: "11.05%",
    top: "67.64%",
    bottom: "21.32%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  tabBarChild: {
    height: "108.43%",
    top: "-8.43%",
    bottom: "0%",
    backgroundColor: GlobalStyles.Color.white,
    left: "0%",
    right: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
  },
  tabBar: {
    bottom: 220,
    height: 83,
  },
  shape: {
    height: "0.48%",
    width: "36%",
    top: "98.74%",
    right: "32%",
    bottom: "0.78%",
    left: "32%",
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.black,
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
    height: 155,
    borderRadius: GlobalStyles.Border.br_lg,
    top: 0,
  },
  informasiBerita1: {
    top: 80,
    left: 52,
    fontSize: GlobalStyles.FontSize.size_3xl,
    letterSpacing: -0.4,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    color: GlobalStyles.Color.black,
  },
  up: {
    top: -3,
    height: 155,
  },
  fichevronLeftIcon: {
    top: 75,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  image12Icon: {
    top: 167,
    left: 20,
    borderRadius: GlobalStyles.Border.br_sm,
    width: 336,
    height: 207,
    position: "absolute",
  },
  pasarKriptoDatar: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.black,
  },
  pasarKriptoDatarPadaAwalP1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  november20221: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_400,
  },
  november2022: {
    margin: GlobalStyles.Margin.margin_sm,
  },
  pasarKriptoDatarPadaAwalP: {
    top: 378,
    left: 42,
    width: 292,
    height: 55,
    textAlign: "left",
    lineHeight: 18,
    fontFamily: GlobalStyles.FontFamily.comfortaa,
    position: "absolute",
  },
  performaPasarKriptoSejakAk: {
    top: 448,
    width: 307,
    height: 259,
  },
  traderTokocryptoAfidSugion: {
    top: 715,
    width: 303,
    height: 304,
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
  },
  informasiBerita: {
    flex: 1,
    height: 1032,
    overflow: "hidden",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
});

export default InformasiBerita;
