import React from 'react'
import {Text, View,TextInput,KeyboardAvoidingView} from 'react-native'
import {addCardToDeck} from '../utils/Reduxapi'
import {connect} from 'react-redux'
import {addCard} from '../actions'
import SubButton from './SubButton'
import { ACstyles } from "../utils/Applicationstyle";

class AddCard extends React.Component{

    state={
        question:'',
        answer:'',
        correctAnswer:''
    }
    submitCard=(deck)=>{
        const {question,answer,correctAnswer} = this.state
        this.props.dispatch(addCard({question,answer,correctAnswer,deck}))
        addCardToDeck(deck,{question,answer,correctAnswer})
        this.setState({question:'',answer:'',correctAnswer:''})
        this.props.navigation.goBack()
    }
    render(){
        const deckName = this.props.route.params.entryId
        return(
            
            <KeyboardAvoidingView behavior="padding" style={ACstyles.container}>
                <View style={ACstyles.container}>
 
                        <Text style={ACstyles.title}>
                            What is the question?
                        </Text>
                        <TextInput 
                        style={ACstyles.input}
                        onChangeText={(question)=>this.setState({question})}
                        value={this.state.question}
                        >

                        </TextInput>
                        <Text style={ACstyles.title}>
                            Answer to show!
                        </Text>
                        <TextInput
                        style={ACstyles.input}
                        onChangeText={(answer)=>this.setState({answer})}
                        value={this.state.answer}
                        >
                            
                        </TextInput>
                        <Text style={ACstyles.title}>
                            true or false only
                        </Text>
                        <TextInput
                        style={ACstyles.input}
                        onChangeText={(correctAnswer)=>this.setState({correctAnswer})}
                        value={this.state.correctAnswer}
                        >
                            
                        </TextInput>
                        <SubButton onPress={()=>this.submitCard(deckName)} style={ACstyles.submitBtn}/>
                    </View>
  
            </KeyboardAvoidingView>
        )
    }
}

export default connect()(AddCard)