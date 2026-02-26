import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Página Principal' }} />
        <Stack.Screen name="about" options={{ title: 'Acerca de' }} />
        <Stack.Screen name="technologies" options={{ title: 'Tecnologías' }} />
      </Stack>
    </>
  );
}
