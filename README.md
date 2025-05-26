# Sentinel Mobile App

A mobile application built with **React Native** and **Expo**, designed to designed to monitor and manage security-related incidents in real time.

---

## Features

- Consistent UI
- Light and dark theme 
- Stack-based navigation
- Login / Logout
- News feed
- Profile information
- Warning cards
- Collected data from sensors
- Local data storage using Expo Secure Store

---

## Figma Design

- [Dev Mode Link](https://www.figma.com/design/A0UtLXheRjdi2yvWByEiVq/Sentinel?node-id=19-101&m=dev&t=T5hnKkVLStgqyAOk-1)
- [Prototype Link](https://www.figma.com/proto/A0UtLXheRjdi2yvWByEiVq/Sentinel?node-id=19-101&t=T5hnKkVLStgqyAOk-1)

---

## Installation

### 1. Install Expo CLI (globally, if not already installed)

```bash
npm install -g expo-cli
```

### 2. Clone the repository

```bash
git clone https://github.com/chas-challenge-code-6/mobile-app
cd mobile.app
```

### 3. Install dependencies

#### Expo packages

```bash
npx expo install expo-font expo-secure-store
npx expo install @react-navigation/native-stack
```

#### React Navigation core

```bash
npm install @react-navigation/native
```

> Beroende på navigationsstruktur kan följande också behövas:
>
> ```bash
> npm install react-native-screens react-native-safe-area-context
> ```

#### Drawer navigation

```bash
npm install @react-native/drawer
```

>     Props Required
>
> | **Prop**      | **Type**                                | Förklaring                                                |
> | ------------- | --------------------------------------- | --------------------------------------------------------- |
> | **title**     | string                                  | Menyns titel                                              |
> | **actions**   | array med ett objekt med: id, title osv | Actions som visas i menyn                                 |
> | onPressAction | callback function                       | Kallar på funktionen när man trycker på meny-alternativet |

#### Other

```bash
npm install react-native-svg
```

```bash
npm install @react-native-async-storage/async-storage
```

---

## Project Structure

```bash
.
├── App.js               # Root component
├── assets/              # Fonts, images etc.
├── context/             # Theme context
├── components/          # Reusable components
│   └── layout/          # Layout
├── navigation/          # Navigation configuration
├── screens/             # App screens/views
└── README.md
```

---

## Running the App

### Start the development server

```bash
npx expo start
```

- Press `i` to open in iOS simulator (Mac only)
- Press `a` to open in Android emulator
- Scan the QR code in the terminal with the Expo Go app (iOS/Android)

---

## Useful Commands

- Clear cache:

  ```bash
  npx expo start -c
  ```

- Install a new Expo-compatible package:

  ```bash
  npx expo install [package-name]
  ```

- Build the app (requires EAS setup):
  ```bash
  npx eas build --platform ios|android
  ```

---
