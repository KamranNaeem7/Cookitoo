import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../utils/theme";

function BButton({ title = "title", bgColor = colors.primary, onButtonPress }) {
  return (
    <TouchableOpacity
      style={[styles.btnCon, { backgroundColor: bgColor }]}
      onPress={onButtonPress}
    >
      <Text style={StyleSheet.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

export { BButton };

const styles = StyleSheet.create({
  btnCon: {
    padding: 10,
    height: 48,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: modifiers.itemMargin,
  },
  btnTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "400",
  },
});
