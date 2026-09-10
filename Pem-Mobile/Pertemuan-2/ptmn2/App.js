import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Lengkap: Maddinatul Dzahra Aulia Gusman</Text>
      <Text>Tempat, Tanggal Lahir: Cirebon, 03 Maret 2007</Text>
      <Text>Cita-cita: Menjadi Pengusaha Sukses</Text>
      <Text>Rencana Hidup: Memulai usaha, Membangun Tim dan Perusahaan, Terus berinovasi, dan Membuka Anak Perusahaan</Text>
      <StatusBar style="auto" />
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
