import * as React from "react";
import { Text, Box, Pressable } from "native-base";

// Add Props in Home({navigation})
export default function Home({ navigation }) {
  return (
    <Box
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Want to know my profile?
      </Text>

      <Pressable
        onPress={() => navigation.navigate("IncDec")}
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text color={{ color: "white" }}>Klik Here</Text>
      </Pressable>
    </Box>
  );
}