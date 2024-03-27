import { View, Text, ScrollView, Alert } from "react-native"

import { styles } from "./styles"

import React, { useState } from "react"
import { Ingredient } from "@/components/Ingredient"
import { Selected } from "@/components/Selected"
import { router } from "expo-router"



export default function Index(){
    const [selected,setSelected] = useState<string[]>([])

 // Função para alternar o estado selecionado de um ingrediente
 //`onClear`: Esta propriedade está recebendo uma função chamada `handleClearSelected`. Presumivelmente, essa função será chamada quando o usuário quiser limpar as seleções.
 //`onSearch`: Esta propriedade está recebendo uma função anônima vazia `() => {}`. Presumivelmente, essa função está destinada a ser usada para lidar com algum evento de pesquisa, mas atualmente está vazia. 
 function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
        setSelected(state => state.filter(item => item !== value));
    } else {
        setSelected(state => [...state, value]);
    }
    console.log(selected);
}
// Alert serve para o caso de clicar no botão limpar , aparece uma mensagem. colocamos um arrey com 2 opcões
function handleClearSelected(){
    Alert.alert("Limpar","Deseja limpar tudo?",[
        {text: "Não", style: "cancel"},
        {text: "Sim", onPress:()=> setSelected([])},

    ])
    setSelected([])
}
//Esta função serve para mudar de pagina assim que clicar no botão encontar
function handleSearch(){
    router.navigate("/Recipes/")
}

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"} 
                <Text style={styles.subtitle}>
                os Ingredientes
                </Text>
            </Text>

            <Text style={styles.message}>
                Descubra Receitas baseadas nos Ingredientes que você escolher 
            </Text>

            <ScrollView contentContainerStyle={styles.ingredients}>
            {
                 Array.from({ length: 100 }).map((item, index) => (
                <Ingredient
                 key={index} 
                 name="Tomate" 
                 image="" 
                 selected={selected.includes(String(index))}
                 onPress={() => handleToggleSelected(String(index))}//esta função fez com que o estado de selecionado mudasse a cada click
                 
                 />
                     ))
            }
            </ScrollView>
            
            {selected.length > 0 && (
                <Selected
                    quantity={selected.length}
                    onClear={handleClearSelected}
                    onSearch={handleSearch}
                />
           )}

        </View>

      )
    }
