import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://dokaan.vercel.app/dashboard' }} // 👈 Replace with your real URL
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      ios: 44, // Approximate height for iPhone notch devices
      default: 0,
    }),
  },
});
