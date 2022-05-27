import { View, ActivityIndicator, Text } from "react-native";

export default function Loading({ operation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFC125",
      }}
    >
      <Text
        style={{
          margin: 20,
        }}
      >
        {operation}
      </Text>
      <ActivityIndicator size="large" color="#666" />
    </View>
  );
}
