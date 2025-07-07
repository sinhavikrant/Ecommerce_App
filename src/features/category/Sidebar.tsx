import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, { FC, useEffect, useRef } from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '@utils/Constants';

interface SidebarProps {
  selectedCategory: any;
  categories: any[];
  onCategoryPress: (category: any) => void;
}

const ITEM_HEIGHT = 90;

const Sidebar: FC<SidebarProps> = ({
  selectedCategory,
  categories,
  onCategoryPress,
}) => {
  const ScrollViewRef = useRef<ScrollView>(null);
  const indicatorPosition = useSharedValue(0);
  const animatedValues = categories?.map(() => useSharedValue(0));

  useEffect(() => {
    let targetIndex = -1;

    categories?.forEach((category: any, index: number) => {
      const isSelected = selectedCategory?._id === category?._id;
      animatedValues[index].value = withTiming(isSelected ? 2 : -15, {
        duration: 500,
      });
      if (isSelected) targetIndex = index;
    });

    if (targetIndex !== -1) {
      indicatorPosition.value = withTiming(targetIndex * 100, {
        duration: 500,
      });

      runOnJS(() => {
        ScrollViewRef.current?.scrollTo({
          y: targetIndex * 100,
          animated: true,
        });
      })();
    }
  }, [selectedCategory]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: indicatorPosition.value }],
  }));

  return (
    <View style={styles.sideBar}>
      <ScrollView
        ref={ScrollViewRef}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[styles.indicator, indicatorStyle]} />

        {categories.map((category, index) => {
          const animatedStyle = useAnimatedStyle(() => ({
            bottom: animatedValues[index].value,
          }));
          const isSelected = selectedCategory?._id === category?._id;

          return (
            <TouchableOpacity
              key={category._id}
              activeOpacity={0.8}
              style={styles.categoryButton}
              onPress={() => onCategoryPress(category)}
            >
              <View
                style={[
                  styles.imageContainer,
                  isSelected && styles.selectedImageContainer,
                ]}
              >
                <Animated.Image
                  source={{ uri: category?.image }}
                  style={[styles.image, animatedStyle]}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sideBar: {
    width: '24%',
    height: '100%',
    backgroundColor: '#fff',
    borderRightWidth: 0.8,
    borderRightColor: '#eee',
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    right: 0,
    width: 3,
    height: 70,
    backgroundColor: '#00A500',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    zIndex: 1,
  },
  categoryButton: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F7',
    overflow: 'hidden',
  },
  selectedImageContainer: {
    backgroundColor: '#CFFFDB',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
});

export default Sidebar;
