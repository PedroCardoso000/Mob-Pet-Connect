import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// 🔹 Escalando valores para diferentes telas
const scaleSize = (size: any) => (size / 375) * width; // 375px é o tamanho padrão do iPhone X
const scaleFont = (size: any) => size * PixelRatio.getFontScale();

export const userScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: scaleSize(10),
    paddingTop: scaleSize(40),
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: scaleSize(15),
  },
  profilePic: {
    width: scaleSize(80),
    height: scaleSize(80),
    borderRadius: scaleSize(40),
    marginRight: scaleSize(15),
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: scaleFont(18),
    fontWeight: "bold",
  },
  formrow: {
    flexDirection: "row",
    gap: scaleSize(5),
  },
  statusUser: {
    width: scaleSize(10),
    height: scaleSize(10),
    borderRadius: scaleSize(5),
    backgroundColor: "green",
    marginTop: scaleSize(5),
  },

  textContainer: {
    marginBottom: scaleSize(10),
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#eee",
    marginVertical: scaleSize(15),
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "center",
    display: "flex",
    gap: scaleSize(10),
    marginTop: scaleSize(8),
  },
  statButton: {
    flexDirection: "row",

    alignItems: "center",
    gap: 5,
  },
  editButton: {
    paddingVertical: scaleSize(8),
    borderRadius: scaleSize(5),
    alignItems: "center",
    marginVertical: scaleSize(10),
  },

  sectionTitle: {
    fontSize: scaleFont(16),
    fontWeight: "bold",
    marginBottom: scaleSize(8),
    alignSelf: "flex-start",
  },

  feed: {
    marginTop: scaleSize(10),
  },
  feedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start", // Alinha à esquerda
    gap: scaleSize(10),
    paddingBottom: scaleSize(20),
  },

  feedItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: scaleSize(15),
    backgroundColor: "#f9f9f9",
    borderRadius: scaleSize(10),
    padding: scaleSize(10),
  },

  feedImage: {
    width: width * 0.25,
    height: height * 0.15,
    borderRadius: scaleSize(10),
    marginBottom: scaleSize(8),
  },

  feedText: {
    textAlign: "center",
  },
  scrollContainer: {
    paddingVertical: scaleSize(20),
    alignItems: "center",
  },


});

