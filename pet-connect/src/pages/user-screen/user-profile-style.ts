import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// 🔹 Escalando valores para diferentes telas
const scaleSize = (size: any) => (size / 375) * width; // 375px é o tamanho padrão do iPhone X
const scaleFont = (size : any) => size * PixelRatio.getFontScale();

export const userScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: "#fff",
    paddingHorizontal: scaleSize(10),
  },

  // ✅ HEADER
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

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  
    gap: scaleSize(10),
    marginTop: scaleSize(8),
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: scaleFont(16),
    fontWeight: "bold",
  },

  statButton: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5
  },

  editButton: {
    paddingVertical: scaleSize(8),
    borderRadius: scaleSize(5),
    alignItems: "center",
    marginVertical: scaleSize(10),
  },
  editButtonText: {
    fontSize: scaleFont(14),
    fontWeight: "bold",
  },

  bio: {
    textAlign: "left",
    fontSize: scaleFont(14),
    marginVertical: scaleSize(5),
  },
  
  textContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },

  highlightsList: {
    marginVertical: scaleSize(10),
  },
  highlight: {
    width: scaleSize(60),
    height: scaleSize(60),
    borderRadius: scaleSize(30),
    marginHorizontal: scaleSize(5),
    borderWidth: 1,
    borderColor: "#ddd",
  },

  feed: {
    marginTop: scaleSize(10),
  },

  feedItem: {
    alignItems: "center",
    margin: scaleSize(5),
    width: "30%", // Cada item ocupa 30% da largura da tela
  },

  feedImage: {
    width: width * 0.25, // 25% da largura da tela
    height: height * 0.15, // 15% da altura da tela
    borderRadius: scaleSize(10),
    alignSelf: "center",
  },

  statusUser: {
    width: scaleSize(10),
    height: scaleSize(10),
    borderRadius: scaleSize(5),
    marginTop: scaleSize(5),
    backgroundColor: "green",
  },
  formrow:{
    display: "flex",
    flexDirection: "row",
    gap: scaleSize(5),
  }
});
