
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, StatusBar, Animated } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    // عرض شاشة البداية الاحترافية 2.5 ثانية زي الصورة اللي بعتها
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShowSplash(false));
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
        <StatusBar backgroundColor="#FFD700" barStyle="dark-content" />
        <Image 
          source={require('./assets/splash.png')} 
          style={styles.splashImage}
          resizeMode="cover"
        />
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF9E5" barStyle="dark-content" />
      <WebView
        source={require('./assets/index.html')}
        style={styles.webview}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowFileAccess={true}
        mixedContentMode="always"
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
    paddingTop: StatusBar.currentHeight || 0,
  },
  webview: {
    flex: 1,
    backgroundColor: '#FFF9E5',
  }
});
