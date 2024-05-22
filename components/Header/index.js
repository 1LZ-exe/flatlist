import {View, Text} from 'react-native'
import estilo from './style'

export default function Header(){
    return(

        <>
            <Text style={estilo.titulo}>WIL T-shirts</Text>
            <Text style={estilo.subtitulo}>camisas</Text>
             <View style={{width:'90%', flexDirection: 'row', marginTop: 50, }}>
            <Text style={estilo.tituloCard}>CAMISAS DE TIME</Text>
            </View>

        </>
    )
}