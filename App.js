import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {

  btn = () => {
    alert("Logado com Sucesso");
  }

  return (
    <View style={styles.container}>
       <ImageBackground source={require('./assets/fundo.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.titulo}>Login</Text>
      
      <TextInput style={styles.inputname} placeholder='Digite seu Nome' />
      <TextInput style={styles.inputname} placeholder='Digite seu E-mail' />
      <TextInput style={styles.inputname} placeholder='Digite sua Senha' secureTextEntry={true}/>
      <Button 
        onPress={btn}
        style={styles.button} 
        title='Logar'  
      />
      <Image
        style={styles.senailogo}
        source={require('./assets/SENAI.png')}
      />
        </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
  inputname: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: 300,
    height: 50, 
    backgroundColor: 'white',
  
  },
  button: {
    color: 'white',
    backgroundColor: 'black',
    fontSize: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  senailogo: {
   width: 250,
   height: 50,
   bottom: 400,
  },
  image: {
    justifyContent: 'center',
    width:'100%',
    height: '100%',
  },
});



