import { StyleSheet,Dimensions } from "react-native";
import { themas } from "../../global/themes";
const { height: altura_da_tela } = Dimensions.get("window");

export const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingTop: 50,
        justifyContent:"center",
        backgroundColor:themas.colors.corDeFundo,
        
    },

    title:{
        marginLeft: 40,
    },

    boxTop: {
        alignItems:"center",
        justifyContent:"center",
        height:Dimensions.get("window").height / 1,
        width:"100%",
    },
    boxMid:{
        height:Dimensions.get("window").height / 2,
        width: "100%",
        marginLeft: 20,
    },
    boxBottom: {
        alignItems: "center",
        height: Dimensions.get("window").height / 1,
        width: "100%",
    },    
    boxInputEmail:{
        width: "90%",
        height: 40,
        backgroundColor:themas.colors.corDeFundo,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 10,
    },

    boxInputSenha:{
        width: "90%",
        height: 40,
        backgroundColor:themas.colors.corDeFundo,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 10,
    },
    input:{
        borderRadius:40,
        height: "100%",
        width: "90%",
        backgroundColor:themas.colors.lightGray,
    }

});    