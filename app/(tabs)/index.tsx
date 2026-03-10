import { Button, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.containerColumn}>
      <View style={styles.containerRow}>
        <Button
          title="Click Me"
          onPress={() => alert("Stop pressing my button!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 40,
  },
  containerRow: {},
});
