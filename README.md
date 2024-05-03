# Image Gallery Mobile App

This is a simple mobile app that serves as an image gallery, displaying recent images from Flickr. The app is built using React Native and utilizes asynchronous storage for image caching, allowing users to view the last accessed images even when offline. The left navigation bar provides the "Home" option, and users can explore the gallery seamlessly.


## Features
1) **Homepage Display**: The homepage shows a grid of recent images fetched from Flickr using API 1.

2) **Navigation**: The left navigation bar offers a "Home" option, providing easy access to the image gallery.

3) **Image Caching**: The app implements image caching to retain the last viewed images when offline. The caching is based on saving image URLs in asynchronous storage. If the API response changes, the view automatically refreshes to ensure up-to-date content.

4) **Full-Screen Image View**: Users can tap on an image to view it in full-screen mode, allowing for a more immersive experience. The full-screen view includes zoom functionality for a closer look at the images.

5) **Offline Indicator**: When the app is opened offline, a message informs the user about the offline status, ensuring a clear understanding of the connectivity state.

## Usage

To run the app locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Satyaswarup11/Gallery_app.git
```
2. Change directory to the app folder:

```bash
cd Gallery_app
```
3. Install dependencies:

```bash
npm install
```
4. Run the app:

```bash
npm start
```

This will open the Metro Bundler in your default web browser. You can then use an emulator or a physical device to run the app.

## Dependencies
External libraries or packages used in the project.

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/docs/intro)
- [AsyncStorage](https://reactnative.dev/docs/asyncstorage)

  
