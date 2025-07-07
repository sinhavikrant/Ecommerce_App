import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { screenHeight, screenWidth } from '@utils/Scaling';
import { useCollapsibleContext } from '@r0b0t3d/react-native-collapsible';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { darkWeatherColors } from '@utils/Constants';
import LottieView from 'lottie-react-native';

const Visuals = () => {
  const { scrollY } = useCollapsibleContext();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 120], [1, 0]);
    return { opacity };
  });

  return (
    <Animated.View style={[styles.container, headerAnimatedStyle]}>
      <LinearGradient colors={darkWeatherColors} style={styles.gradient} />
      <Image
        source={require('@assets/images/cloud.png')}
        resizeMode="stretch"
        style={styles.cloud}
      />
      <LottieView
        autoPlay
        loop
        style={styles.lottie}
        source={require('@assets/animations/raining.json')}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1, // Push behind content if needed
  },
  lottie: {
    width: '100%',
    height: 150,
    position: 'absolute',
    transform: [{ scaleX: -1 }],
  },
  gradient: {
    width: '100%',
    height: screenHeight * 0.4,
    position: 'absolute',
  },
  cloud: {
    width: screenWidth,
    height: 100,
  },
});

export default Visuals;
