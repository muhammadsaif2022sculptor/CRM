import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    Text: {
        fontSize: 10
    },
    input : {
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 4, 
        width: 200,
        height: 50,
    },
    regionsSelected:{
        backgroundColor: '#7e9ebe',
         borderRadius: 5,
         width: 200,
         height: 50,
         margin: 10,
         alignItems: 'center',
         justifyContent: 'center'
    },
    regions:{
        backgroundColor: '#cadbed',
         borderRadius: 5,
         width: 200,
         height: 50,
         margin: 10,
         alignItems: 'center',
         justifyContent: 'center'
    },
    save:{
        backgroundColor: '#6f7a72',
         borderRadius: 5,
         width: 100,
         height: 50,
         margin: 10,
         alignItems: 'center',
         justifyContent: 'center'
    }
});

export default styles