import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Titulo() {
    return(
        <View style={styles.caixaTitulo}>
            <Text style={styles.textoTitulo}>HealthTec</Text>
        </View>
    );
}