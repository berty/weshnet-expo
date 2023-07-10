import { StyleSheet, Text, View } from 'react-native';

import * as WeshnetExpo from 'weshnet-expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{WeshnetExpo.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
