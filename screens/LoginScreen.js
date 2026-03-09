import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Stylesheet,
    Alert,
} from 'react-native';

export default function LoginScreen({navigation}){
    const [usuario,setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const manejarLogin = () => {
        //Validación
        if(usuario.trim() === '' || password.trim() === ''){
            Alert.alert('Error', 'Por favor ingresa usuario y contraseña');
            return;
        }
        if(usuario === 'admin' && password === '1234'){
            // Login exitoso: Navegar a Home SIN poder regresar
            navigation.replace('Home', { nombreUsuario: usuario });
        } else {
            Alert.alert('Error', 'Credenciales incorrectas');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Inicio de Sesión</Text>
            <Text style={styles.subtitulo}>Ingresa tus credenciales</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={usuario}
                onChangeText={setUsuario}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.boton} onPress={manejarLogin}>
            <Text style={styles.textoBoton}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text style={styles.ayuda}>
                Prueba: usuario = admin, password = 1234
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#1A1A1A',
    },
    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#4A4A4A',
        marginBottom: 40,
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    boton: {
        backgroundColor: '#FDB813',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    textoBoton: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ayuda: {
        textAlign: 'center',
        marginTop: 30,
        color: '#4A4A4A',
        fontSize: 14,
    },
});