This project was built using [Create React Native App](https://github.com/react-community/create-react-native-app). It is meant to be built/run on your local system and accessed on your device using the Expo app, as described below.
It was built and tested on an Android device. It may run on iOS, but has not been tested there. 

Also - you'll see in the code. I tried to make a flip animation for the cards. But... there appears to be a property that is very helpful for flip animations that is not fully? or reliably? available on Android yet. So ... if you the question/answer text button - it will flip sometimes and often quite slowly/jankily.

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
```
