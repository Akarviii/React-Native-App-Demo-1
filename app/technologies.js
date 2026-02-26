import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { TechnologyItem } from '../src/components/TechnologyItem';
import { technologies } from '../src/data/mockData';
import { Colors } from '../src/styles/colors';

export default function TechnologiesScreen() {
  const handleTechPress = (tech) => {
    Alert.alert(
      tech.name,
      `${tech.description}\n\nDificultad: ${tech.difficulty}`,
      [
        { text: 'Cerrar', style: 'cancel' },
        { text: 'Interesante...', style: 'default' },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <TechnologyItem technology={item} onPress={handleTechPress} />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Tecnologías</Text>
      <Text style={styles.subtitle}>
        Explora las tecnologías que estoy aprendiendo y aplicando.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={technologies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: {
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textLight,
  },
});
