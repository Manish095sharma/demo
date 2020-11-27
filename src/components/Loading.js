import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from "react-native-paper"
export default function Loading() {
  const { colors } = useTheme()

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
