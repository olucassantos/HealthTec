import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Formulario() {
    <View>
        <View>
            <Text>Altura</Text>
            <TextInput 
                placeholder="Ex. 1.75"
                inputMode="numeric"
            />

            <Text>Peso</Text>
            <TextInput 
                placeholder="Ex. 75.36"
                inputMode="numeric"
            />

            <Button
                title="Calcular"
            />
        </View>
    </View>
}