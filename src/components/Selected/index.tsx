import { View, Text } from "react-native"
import Animated from "react-native-reanimated"//importação da biblioteca de animações 
import { styles } from "../Ingredient/style"
import { MaterialIcons} from "@expo/vector-icons"//importação da biblioteca de icones
import { styles } from "./styles"

type Props = { 
    quantity: number
    onClear: () => void
    onSearch: () => void//Função que busca 
}
//Animated view por ser uma View animada

export function selected ({quantity,onClear,onSearch}: Props){
    return(
        <Animated.View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>{quantity}Ingredientes selecionados </Text> 
                <MaterialIcons nome="close" size={24} onPress={onClear}/>

            </View>
        </Animated.View>
    )
}