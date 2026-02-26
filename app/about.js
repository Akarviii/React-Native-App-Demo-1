import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../src/styles/colors';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Acerca de mí</Text>
      <Text style={styles.content}>
        Esta es mi primera aplicación React Native, ya tengo bases en front-end y en backend, mas que todo PHP.{'\n\n'}
        La hice en VS Code, con Expo y NPX, nunca habia probado una herramienta tan curiosa como Expo, me recuerda a Quokka...{'\n\n'}
        Me llamo Daniel, tengo 19.7 años (Cumplo el 06 de Abril) y estoy en VII Semestre de Ingenieria de Software :{")"}.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 24,
  },
});
