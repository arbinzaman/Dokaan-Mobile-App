// app/index.tsx
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://dokaan.vercel.app/dashboard' }} style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      ios: 20,
      default: 0,
    }),
  },
});
