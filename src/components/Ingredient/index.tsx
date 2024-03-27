import { Pressable, PressableProps,Image,Text } from "react-native";
import { styles } from "./style";


// Definindo propriedades para cada ingrediente
export type IngredientsProps={
    name: string
    image: string
    selected?: boolean//Para saber se está selecionado ou não 
}
// Definindo o componente Ingredient
export function Ingredient({
    name,
    image,
    selected = false,
    ...rest}:
    IngredientsProps & PressableProps){
    return (
        <Pressable 
        style={[styles.container, selected && styles.selected]} {...rest}>
            <Image source={require("@/assets/tomato.png")} style={styles.image} />
            <Text style={styles.title}>Maçã</Text>
        </Pressable>
    )
};
