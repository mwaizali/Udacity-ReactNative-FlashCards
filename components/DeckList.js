import React from 'react'
import {Text,View,Button} from 'react-native'
import {getDecks} from '../utils/Reduxapi'
import {connect} from 'react-redux'
import {receiveDecks} from '../actions'
import {DLstyles} from "../utils/Applicationstyle";

class DeckList extends React.Component{

    componentDidMount(){
        getDecks()
        .then(decks=>{
            this.props.dispatch(receiveDecks(decks))}
            )
    
        }
    render(){
        const {decks} = this.props
        if(decks===undefined){
            return(
                <View>
                    <Text>
                        ...loading
                    </Text>
                </View>
            )
        }
        return(
            <View style={DLstyles.container}>
                {Object.keys(decks).map((deck)=>{
                    const {title,questions} = decks[deck]
                    return(
                        <View key={deck} style={DLstyles.card}>
                            <Text style={DLstyles.cardText}>{title}</Text>
                            <Text style ={DLstyles.textcolor}>{questions.length}</Text>
                            <Button
                            style={DLstyles.cardBtn}
                            onPress={()=>this.props.navigation.navigate('DeckInfoView',{entryId:deck})}
                            title='View'
                            >

                            </Button>
                        </View>
                    )
                })}
            </View>
        )
    }
}

function mapStateToProps(decks){
    return {decks}
}

export default connect(mapStateToProps)(DeckList)