import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./assets/styles/stylescomponent";

export default function App() {
  btn = () => {
    alert("Logado com Sucesso");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/fundo.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titulo}>Login</Text>

        <TextInput style={styles.inputname} placeholder="Digite seu Nome" />

        <TextInput style={styles.inputname} placeholder="Digite seu E-mail" />

        <TextInput
          style={styles.inputname}
          placeholder="Digite sua Senha"
          secureTextEntry={true}
        />

        <Button onPress={btn} style={styles.button} title="Logar" />

        <Image
          style={styles.senailogo}
          source={require("./assets/SENAI.png")}
        />

        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}

