import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/Titulo/';
import Formulario from './src/components/Formulario/';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <Formulario />
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
