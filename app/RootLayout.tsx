import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
     <SafeAreaProvider>
    <View style={{ flex: 1 }}>
      {/* Customize status bar (e.g., set it to your app's color) */}
      <StatusBar style="dark" /> {/* Ensure proper value here */}
      {/* Other components */}
    </View>
    </SafeAreaProvider>
  );
}
