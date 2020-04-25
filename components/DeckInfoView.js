import React from 'react'
import {Text,View} from 'react-native'
import {connect} from 'react-redux'
import CreateButton from './CreateButton'
import { white } from '../utils/stylecolors'
import { DIVstyles } from "../utils/Applicationstyle";

class DeckInfoView extends React.Component{

    render(){
        const deck = this.props.route.params.entryId
        const {decks} = this.props
        if(deck===undefined){
            return(
                <View>
                    <Text>
                        Featching Data..
                    </Text>
                </View>
            )
        }
        return(
            <View style={DIVstyles.container}>
                <View style={DIVstyles.card}>
                    <Text style={DIVstyles.mainText}>{decks[deck].title}</Text>
                    <Text style={DIVstyles.subText}>{decks[deck].questions.length}</Text>

                    <CreateButton 
                    styles={DIVstyles} 
                    text={'Add Card'} 
                    onPress={()=>this.props.navigation.navigate('AddCard',{entryId:deck})}
                    color={white}
                    />
                    <CreateButton 
                    styles={DIVstyles}
                    text={'Start Quiz'}
                    color={white}
                    onPress={()=>this.props.navigation.navigate('TryQuiz',{entryId:deck})}
                    />
                </View>
            </View>
        )
    }
}
function mapStateToProps(decks){
    return {
        decks
    }
}
export default connect(mapStateToProps)(DeckInfoView)