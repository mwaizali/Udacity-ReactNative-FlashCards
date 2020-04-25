import React from 'react'
import {View,Text,TextInput} from 'react-native'
import {saveDeckTitle} from '../utils/Reduxapi'
import {addDeck} from '../actions'
import {connect} from 'react-redux'
import SubButton from './SubButton'
import { ADIstyles } from '../utils/Applicationstyle';
class AddDeckItem extends React.Component{

    state={
        inputdata:''
    }
    submitData=()=>{
        const {inputdata} = this.state
        saveDeckTitle(inputdata)
        this.props.dispatch(addDeck(inputdata))
        this.props.navigation.navigate('DeckInfoView',{entryId:inputdata})
        this.setState({inputdata:''})
    }
    render(){
        return(
            <View style={ADIstyles.container}>
                <View style = {ADIstyles.card}>
                    <Text style={ADIstyles.title}>New Deck Title?</Text>
                        <TextInput
                        style={ADIstyles.input} 
                        onChangeText={(inputdata) =>this.setState({inputdata:inputdata})}
                        value={this.state.inputdata}
                    >
                    </TextInput>
                    <SubButton onPress={this.submitData} style={ADIstyles.submitBtn}/>
                </View>
            </View>
        )
    }
}


export default connect()(AddDeckItem)