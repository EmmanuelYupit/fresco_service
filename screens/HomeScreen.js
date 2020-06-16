import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const width = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      src: require("../assets/images/products/aguacate.png"),
      name: "Aguacate",
      price: 25.5,
    },
    {
      id: 2,
      src: require("../assets/images/products/aguacate.png"),
      name: "Limon",
      price: 10.5,
    },
    {
      id: 3,
      src: require("../assets/images/products/aguacate.png"),
      name: "Cebolla Morada",
      price: 25.5,
    },
    {
      id: 4,
      src: require("../assets/images/products/aguacate.png"),

      name: "Calabaza",
      price: 25.5,
    },
    {
      id: 5,
      src: require("../assets/images/products/aguacate.png"),

      name: "Zanahoria",
      price: 7.5,
    },
  ]);

  function _renderItemFood(item) {
    return (
      <TouchableOpacity
        style={styles.divFood}
        onPress={() => navigation.push("Detail")}
      >
        <Image
          style={styles.imageFood}
          resizeMode="contain"
          source={item.src}
        />
        <View
          style={{
            height: width / 2 - 20 - 90,
            backgroundColor: "transparent",
            width: width / 1 - 1 - 1,
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          Descp Food and Details
        </Text>
        <Text style={{ fontSize: 20, color: "green" }}>${item.price}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <FlatList
          //horizontal={true}
          data={products}
          numColumns={3}
          renderItem={({ item }) => _renderItemFood(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.tabBarInfoContainer}></View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9F0C1",
  },

  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {},
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
  },

  navigationFilename: {},
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  divCategorie: {
    backgroundColor: "red",
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  imageFood: {
    width: width / 3 - 30 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -20,
  },
  divFood: {
    width: width / 3 - 13,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: "#E9F0C1",
  },
});
