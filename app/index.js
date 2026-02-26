import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';
import { Link } from 'expo-router';
import { WelcomeCard } from '../src/components/WelcomeCard';
import { Colors } from '../src/styles/colors';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [tempName, setTempName] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const handleGetStarted = () => {
    Alert.alert('No se que poner aca, asi que...', 'Sabias que en 2014 PHP casi se extingue, por la falta de innovacion en PHP 5, por lo que sacaron PHPNG (PHP New Generation) o tambien conocido como PHP 7', [
      { text: 'Claro que yes', style: 'default' },
    ]);
  };

  const handleSaveName = () => {
    if (!tempName.trim()) return;
    setName(tempName.trim());
    setModalVisible(false);
  };

  const displayName = name || 'Invitado';

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Pressable style={[styles.menuButton, styles.menuActive]}>
          <Text style={[styles.menuText, styles.menuTextActive]}>Inicio</Text>
        </Pressable>
        <Link href="/technologies" asChild>
          <Pressable style={styles.menuButton}>
            <Text style={styles.menuText}>Tecnologías</Text>
          </Pressable>
        </Link>
        <Link href="/about" asChild>
          <Pressable style={styles.menuButton}>
            <Text style={styles.menuText}>About</Text>
          </Pressable>
        </Link>
      </View>

      <WelcomeCard userName={displayName} onGetStarted={handleGetStarted} />

      <View style={styles.buttons}>
        <Pressable style={[styles.button, styles.neutral]} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Cambiar nombre</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ingresa tu nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe tu nombre"
              value={tempName}
              onChangeText={setTempName}
              placeholderTextColor={Colors.textLight}
            />
            <View style={styles.modalButtons}>
              <Pressable style={[styles.button, styles.secondary, styles.modalButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cerrar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.primary, styles.modalButton]}
                onPress={handleSaveName}
              >
                <Text style={styles.buttonText}>Guardar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
  },
  menu: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
    gap: 8,
  },
  menuButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    alignItems: 'center',
  },
  menuActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  menuText: {
    color: Colors.text,
    fontWeight: '700',
    fontSize: 14,
  },
  menuTextActive: {
    color: Colors.surface,
  },
  buttons: {
    paddingHorizontal: 16,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  neutral: {
    backgroundColor: Colors.border,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    color: Colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: Colors.text,
    backgroundColor: Colors.background,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    minWidth: 110,
    marginLeft: 10,
  },
});
