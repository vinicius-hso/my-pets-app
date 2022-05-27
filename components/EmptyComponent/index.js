import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import image from "../../assets/no-data.png";

export default function Empty(props) {
  const route = useRoute();
  const [message, setMessage] = useState({});

  useEffect(() => {
    function handleScreenNavigation() {
      switch (route.name) {
        case "Payment":
          setMessage({
            top: "Não há pagamento cadastrado",
            bottom: "Clique no botão para efetuar o cadastro",
          });
          break;
        case "Medicine":
          setMessage({
            top: "Não há medicamento cadastrado",
            bottom: "Clique no botão para efetuar o cadastro",
          });
          break;
        case "Pet":
          setMessage({
            top: "Não há pet cadastrado",
            bottom: "Clique no botão para efetuar o cadastro",
          });
          break;
        default:
          setMessage("");
          break;
      }
    }

    handleScreenNavigation();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          marginHorizontal: 40,
        }}
      >
        {message.top}
      </Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={image}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          marginHorizontal: 40,
        }}
      >
        {message.bottom}
      </Text>
    </View>
  );
}
