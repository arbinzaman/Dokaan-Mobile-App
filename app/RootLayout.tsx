import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Customize status bar (e.g., set it to your app's color) */}
      <StatusBar style="dark" /> {/* Ensure proper value here */}
      {/* Other components */}
    </View>
  );
}
