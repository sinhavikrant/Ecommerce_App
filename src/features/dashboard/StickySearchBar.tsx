import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '@utils/Constants';
import {
  StickyView,
  useCollapsibleContext,
} from '@r0b0t3d/react-native-collapsible';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import SearchBar from './SearchBar';

const StickySearchBar = () => {
  const { scrollY } = useCollapsibleContext();

  const animatedShadow = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 140], [0, 1]);
    return { opacity };
  });

  const backgroundOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [1, 80], [0, 1]);
    return { opacity };
  });

  return (
    <StickyView>
      {/* Background fade animation */}
      <Animated.View style={[styles.background, backgroundOpacity]} />

      <SearchBar />

      {/* Shadow animation */}
      <Animated.View style={[styles.shadow, animatedShadow]} />
    </StickyView>
  );
};

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    zIndex: -1,
  },
  shadow: {
    height: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
});

export default StickySearchBar;
