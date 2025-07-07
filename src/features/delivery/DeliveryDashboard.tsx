import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const DeliveryDashboard = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>DeliveryDashboard</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
  },
});

export default DeliveryDashboard;
