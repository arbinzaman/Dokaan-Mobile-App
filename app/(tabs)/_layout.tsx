import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            borderTopWidth: 0, // hides border on iOS
            backgroundColor: 'transparent',
          },
          android: {
            elevation: 0, // hides shadow on Android
            borderTopWidth: 0,
            backgroundColor: 'transparent',
          },
          default: {
            borderTopWidth: 0,
            elevation: 0,
          },
        }),
      }}
    >
      {/* This hides the 'index' screen from the tab bar */}
      <Tabs.Screen name="index" options={{ href: null }} />
      
      {/* Add other screens like this example */}
      {/* 
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="user" color={color} size={size} />
          ),
        }}
      />
      */}
    </Tabs>
  );
}
