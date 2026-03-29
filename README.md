# PetCare - Gestor de Mascotas

**Nombre del estudiante:** Victor Manuel Florez Taborda

**Aplicación:** PetCare

## Descripción

PetCare es una aplicación móvil desarrollada con React Native CLI que permite gestionar información de mascotas. El usuario puede registrar nuevas mascotas, consultar un listado con sus detalles y acceder a consejos de cuidado que se actualizan automáticamente.

## Tecnologías utilizadas

- React Native CLI (0.84.1)
- React Navigation (Stack + Bottom Tabs)
- React Hooks (useState, useEffect)
- react-native-vector-icons (MaterialIcons)
- StyleSheet (estilos separados por pantalla)

## Instalación y ejecución

### Requisitos previos

- Node.js >= 22.11.0
- React Native CLI configurado ([Guía de configuración](https://reactnative.dev/docs/set-up-your-environment))
- Android Studio (para Android) o Xcode (para iOS)

### Pasos

1. Clonar el repositorio:

```sh
git clone https://github.com/egracima/PetCare.git
cd PetCare
```

2. Instalar dependencias:

```sh
npm install
```

3. Ejecutar la app:

```sh
# Android
npx react-native run-android
```

## Estructura del proyecto

```
PetCare/
├── App.js                  # Punto de entrada con NavigationContainer
├── Navegation/
│   └── TapNavegation.js    # Tab + Stack Navigation
├── screen/
│   ├── PetListScreen.js    # Listado de mascotas
│   ├── PetDetailsScreen.js # Detalle de mascota
│   ├── RegisterPetScreen.js# Formulario de registro
│   └── TipsScreen.js       # Consejos de cuidado
├── styles/
│   ├── PetListStyles.js
│   ├── PetDetailStyles.js
│   ├── RegisterPetStyles.js
│   └── TipsStyles.js
└── data/
    └── tipsData.js         # data mock de consejos de cuidado
```
