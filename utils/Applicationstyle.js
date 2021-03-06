import {StyleSheet,} from 'react-native'
import {white,greenmix,red} from './stylecolors'

const quizstyles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:white,
        padding:10
    },
    iosBtn:{
        padding:10,
        borderRadius:7,
        height:45,
        margin:5,
        width:160
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        backgroundColor:greenmix,
        alignSelf:'stretch',
        borderRadius:10,
        shadowColor:'rgba(0,0,0,0.34)',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowRadius:4,
        shadowOpacity:1
    },
    allcorrect:{
        fontSize: 30,
        color: white
    },
    wrong:{
        fontSize: 30,
        color: red,
        textAlign:'center'

    },
    answer:{
        color:white,
        fontSize:20,
        margin:20
    },
    questions:{
        color: white,
        top:0,
        alignSelf:'flex-start',
        left:0,
        fontSize:20,
        margin:5,
        position:'absolute'
    },
    mainText:{
        fontSize:40,
        color:white,
        marginTop:40,
        textAlign:'center'
    },
    submitBtnText:{
        color:greenmix,
        fontSize:22,
        textAlign:'center'
    }
})

export const DLstyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignSelf:'stretch',
        padding:5
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:greenmix,
        margin:8,
        height:200,
        borderRadius:10,
        shadowColor: 'rgba(0,0,0,2.34)',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowRadius:4,
        shadowOpacity:1
    },
    cardText:{
        fontSize:30,
        color:white
    },
    cardBtn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textcolor:{
        color: white
    }
})

export const ADIstyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:white,
        padding:20,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:greenmix,
        alignSelf:'stretch',
        borderRadius:10,
        shadowColor:'rgba(0,0,0,0.34)',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowRadius:4,
        shadowOpacity:1
    },
    input:{
        width:200,
        height:44,
        padding:8,
        borderWidth:1,
        borderColor:white,
        margin:50,
        borderRadius:8,
        color:white
    },
    title:{
        fontSize:30,
        color: white,
        textAlign:'center'
    },
    submitBtn:{
        borderWidth:0.5,
        borderColor:'#d6d7da',
        padding:10,
        borderRadius:7,
        overflow:'hidden',
        backgroundColor:white
    }
})
export const DIVstyles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:white,
        padding:20,
    },
    iosBtn:{
        padding:10,
        borderRadius:7,
        height:45,
        margin:5,
        width:170
    },
    submitBtnText:{
        color:greenmix,
        fontSize:22,
        textAlign:'center'
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:greenmix,
        alignSelf:'stretch',
        borderRadius:10,
        shadowColor:'rgba(0,0,0,0.34)',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowRadius:4,
        shadowOpacity:1
    },
    mainText:{
        fontSize:40,
        color:white,
    },
    subText:{
        fontSize:30,
        color:white,
        marginBottom:160
    }
})

export const ACstyles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:greenmix,
        padding:5,
    },
   
    submitBtnText:{
        color:white,
        fontSize:22,
        textAlign:'center'
    },
    title:{
        fontSize:30,
        color:white,
    },
    submitBtn:{
        borderWidth:0.5,
        borderColor:'#d6d7da',
        padding:10,
        backgroundColor:white,
        borderRadius:7,
        overflow:'hidden'
    },
    input:{
        width:250,
        height:40,
        padding:8,
        borderWidth:1,
        borderColor:white,
        margin:20,
        borderRadius:7,
        color: white
    }
})
export default quizstyles; 