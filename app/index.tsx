// app/index.tsx
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { useCameraPermissions } from "expo-camera";

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [showWebView, setShowWebView] = useState(false);

  useEffect(() => {
    if (!permission || permission.status !== "granted") {
      requestPermission();
    }
  }, []);

  if (!permission) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Checking camera permission...</Text>
      </View>
    );
  }

  if (permission.status !== "granted") {
    return (
      <View style={styles.centered}>
        <Text style={{ marginBottom: 16 }}>Camera access is required to continue.</Text>
        <Button title="Grant Camera Access" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {showWebView ? (
        <WebView
          source={{ uri: "https://dokaan.vercel.app/dashboard" }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          originWhitelist={["*"]}
          allowFileAccess={true}
          allowingReadAccessToURL={"*"}
        />
      ) : (
        <View style={styles.centered}>
          <Text style={{ marginBottom: 16 }}>Camera permission granted!</Text>
          <Button title="Go to Scanner" onPress={() => setShowWebView(true)} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
