import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";


export default function Recipes(){
    return(
        <View style={styles.container}>
             <View style={styles.header}>
               <MaterialIcons 
                    name="arrow-back"
                    size={32} 
                    onPress={() => router.back()}
               />
               <Text style={styles.title}>Ingredientes</Text>
               <FlatList
                data={["1"]}
                keyExtractor={item => item}
                renderItem={() => <Recipe recipe={{name:"Omelete", image:"https://th.bing.com/th/id/R.78535f3e4a2999729725000e58800b61?rik=iV4hJu65EarYkQ&pid=ImgRaw&r=0", minutes:10}} />}
               />

             </View>
        </View>
    )

}