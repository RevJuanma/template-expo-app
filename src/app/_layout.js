import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ title: "Estoy en la home" }} />
      <Stack.Screen name="about" options={{ title: "Estoy en about" }} /> */}

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
