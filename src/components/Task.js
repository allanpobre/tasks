import React from "react"
import { StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'
import  Icon  from "react-native-vector-icons/FontAwesome6"

export default props => {
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => alert("olá")}>
                <View style={styles.checkCountainer}>
                    {get_check_view(props.done_at)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.desc}>{props.estimate_at + " "}</Text>
                <Text style={styles.desc}>{props.done_at + " "}</Text>
            </View>
        </View>
    )
}

function get_check_view(done_at){
    if(done_at != null){
        return(
            <View style={styles.done}>
                <Icon name="check" size={20} color="#FFF"></Icon>
            </View>
        )
    }
    else{
        return(
            <View style={styles.pending}>
                <Icon name="check" size={20}></Icon>
            </View>
        )
    }
}

const styles = StyleSheet({
    container:{
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 20
    },
    desc:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#333'
    },
    date:{
        fontFamily: 'Arial',
        color: '3555'
    },
    checkCountainer:{
        width: '20%',
        alignItems: 'center',
        justifyCenter: 'center'
    },
    done:{
        height: 25,
        widht: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyCenter: 'center'
    },
    pending:{
        height: 25,
        widht: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555555'
    }
})