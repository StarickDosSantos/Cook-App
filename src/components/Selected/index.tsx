import { View, Text } from "react-native"
import Animated, {SlideInDown,BounceOutDown}from "react-native-reanimated"//importação da biblioteca de animações 
import { MaterialIcons} from "@expo/vector-icons"//importação da biblioteca de icones
import { styles } from "./styles"
import { theme } from "@/theme"

type Props = { 
    quantity: number
    onClear: () => void
    onSearch: () => void//Função que busca 
}
//Animated view por ser uma View animada

export function Selected ({quantity,onClear,onSearch}: Props){
    return(
        <Animated.View 
        style={styles.container} 
        entering={SlideInDown.duration(500)} 
        exiting={BounceOutDown}
        >
            <View style={styles.header}>
                <Text style={styles.label}>{quantity} Ingredientes selecionados </Text> 
                <MaterialIcons
                     nome="close" 
                     size={24} 
                     onPress={onClear}
                     color={theme.colors.gray_400}               
                />

            </View>
        </Animated.View>
    )
}