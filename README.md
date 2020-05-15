# Choose Your Own Adventure

### Team

- Tom Murphy
- Beau Warren
- Sarah Murphy

### Getting Started

Set up the dev environment following this [guide](https://reactnative.dev/docs/environment-setup).

Follow the instructions under the React Native CLI Quickstart tab, pick your development OS and follow the instructions for both iOS and Android.

Install React Native
```
npm install -g react-native-cli
```

Clone this repo into your local environment:

```
git clone https://github.com/smurph7/ChooseYourOwnAdventure.git
```

Install dependencies:
```
yarn
```
and for iOS:
```
cd ios
pod install
```

You will also need 
* Android Studio
* Xcode (Mac only)

### Set up Android emulator
(iOS will configure an emulator with xcode, no extra setup necessary)

1. Open Android Studio
2. Click Configure > AVD Manager > Create virtual device

### Running the app - Android Emulator
```
react-native run-android
```

Troubleshooting
```
adb devices
```
If the above command lists nothing, then set your emulator with:
```
EMULATOR=emulator -list-avds
emulator -avd $EMULATOR
```
Now you can run the application on your emulator:
```
react-native run-android
```


