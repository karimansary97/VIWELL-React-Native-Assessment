import { StyleSheet } from "react-native";
import unit from "../../../styles/unit";
import colors from "../../../styles/colors";
import { IS_ANDROID } from "../../../helpers/common";

export default StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: colors.defaultBackGround,
    paddingHorizontal: 20 * unit,
  },
  content: {
    flexGrow: 1,
    paddingTop: IS_ANDROID ? 16 * unit : 0,
  },
});
