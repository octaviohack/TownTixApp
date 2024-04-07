import { Button, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function SignInScreen({ promptAsync, promptAsyncGithub }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.signInText}>Sign In with:</Text>
      
      <Image 
        source={require('../Logos/logotowntixwhite.png')} 
        style={styles.logo}  
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#4285F4" }]}
        onPress={() => promptAsync()}
        accessibilityLabel="Sign in with Google"
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14
  },
  title: {
    fontSize: 28,
    fontWeight: "bold"
  },
  signInText: {
    fontSize: 28,
    fontWeight: "bold"
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 20
  },
  button: {
    width: "90%",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 17
  }
});
