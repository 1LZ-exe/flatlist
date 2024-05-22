import{Text,View,Image} from 'react-native'
import estilo from './style'
export default function Cardselecoes({porcentagem,titulo,imagem,descricao, tamanho}){
    return(
        <View style={estilo.cardTarefa}>
           <Text style={estilo.tituloCard}>{titulo}</Text>
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />  
        <View style={estilo.textos}>
             <Text style={estilo.textoCard}>{descricao}</Text>
            <Text style={estilo.porcentagem}>{porcentagem}</Text>

            <Text style={estilo.textoCard}>{tamanho}</Text>
           
        </View>
        </View>
        
    );
}