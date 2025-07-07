import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { screenHeight } from '@utils/Scaling';
import { Colors } from '@utils/Constants';

interface LiveMapProps {
  deliveryPersonalLocation: any;
  pickupLocation: any;
  deliveryLocation: any;
  hasPickedUp: any;
  hasAccepted: any;
}

const LiveMap: FC<LiveMapProps> = ({
  deliveryLocation,
  deliveryPersonalLocation,
  hasAccepted,
  hasPickedUp,
  pickupLocation,
}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.35,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    position: 'relative',
  },
  fitButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderWidth: 0.8,
    borderColor: Colors.border,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: 'black',
    elevation: 5,
    borderRadius: 35,
  },
});
export default LiveMap;
