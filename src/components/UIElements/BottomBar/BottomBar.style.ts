import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import unit from "../../../styles/unit";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingHorizontal: 12 * unit,
    paddingTop: 18 * unit,
    paddingBottom: 32 * unit,
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    marginTop: 6 * unit,
  },
  focused: {
    color: colors.black,
  },
  unFocused: {
    color: colors.heavySmoke,
  },
});
