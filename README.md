# MiPrimeraApp

Aplicación Expo React Native (JS) con 3 pantallas y navegación básica para la guía de entrega.

## Requisitos
- Node.js 18+ y npm/npx
- Expo CLI (se usa con 
px expo start)
- Expo Go en el teléfono (Android/iOS)

## Instalación
`ash
npm install
`

## Ejecución
`ash
npx expo start
`
- Elige LAN o Tunnel según tu red.
- Escanea el QR con Expo Go.

## Estructura clave
- pp/index.js — Página Principal, modal para nombre, links a pantallas.
- pp/about.js — Pantalla de “Acerca de”.
- pp/technologies.js — Lista interactiva con alerts por ítem.
- pp/_layout.tsx — Stack de navegación y títulos.
- src/styles/colors.js y src/styles/globalStyles.js — Paleta y estilos globales.
- src/components/WelcomeCard.js, src/components/TechnologyItem.js — Componentes reutilizables.
- src/data/mockData.js — Datos mock de tecnologías.

## Funcionalidad
- Modal inicial para capturar el nombre del usuario.
- Navegación entre Página Principal, Tecnologías y Acerca de.
- Lista de tecnologías con alert al tocar.
- Hot reload activo al guardar.

## Entregables
- (Screenshots de la App Demo)[https://drive.google.com/file/d/14jmbhpBNCAS8oXDnMO6mVJvukapqHKF6/view?usp=sharing]
- (Video de la App Demo)[https://youtube.com/shorts/kOQR91Iz0Pk?feature=share]