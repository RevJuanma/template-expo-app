import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import usePokemons from "../hooks/usePokemons";

export default function App() {
  const { pokemons } = usePokemons(20);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola Mundo!</Text>


      {/* <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => 
        <Text>{item.name}</Text>}
      /> */}


      <Link style={styles.aboutLink} href="/about">
        About screen
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#b3a",
    fontSize: 40,
  },
  aboutLink: {
    fontSize: 40,
  },
});
