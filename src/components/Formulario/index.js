import React, {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './style';

export default function Formulario() {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    return (
        <View style={styles.planoFundo}>
            <View style={styles.fundoFormulario}>
                <Text style={styles.legendaCampo}>Altura</Text>
                <TextInput 
                    placeholder="Ex. 1.75"
                    inputMode="numeric"
                    style={styles.campoTexto}
                    onChangeText={setAltura}
                />

                <Text style={styles.legendaCampo}>Peso</Text>
                <TextInput 
                    placeholder="Ex. 75.36"
                    inputMode="numeric"
                    style={styles.campoTexto}
                    onChangeText={setPeso}
                />

                <Text style={styles.legendaCampo}>IMC: { Math.round(imc) }</Text>

                <Button
                    title="Calcular"
                    onPress={() => {
                        setImc(peso / (altura * altura));
                    }}
                />
            </View>
        </View>
    );
}