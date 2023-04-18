import { useEffect, useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log("I am Rendering");
  }, [count, newCount]);

  // const add = () => {
  //   setCount(count + 1);
  // };

  // const add = () => {
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  // };

  const add = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const minus = () => {
    setNewCount(newCount - 1);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Button title="Add" onPress={add} />

        <Text style={styles.label}>{count}</Text>

        <Button title="Minus" onPress={minus} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "black",
    fontSize: 20,
  },
});
