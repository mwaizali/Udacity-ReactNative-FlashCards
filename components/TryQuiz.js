import React from 'react'
import {View,Text} from 'react-native'
import {white,} from '../utils/stylecolors'
import {connect} from 'react-redux'
import CreateButton from './CreateButton'
import Info from './Info'
import quizstyles from '../utils/Applicationstyle'

class TryQuiz extends React.Component{

    state={
        quesnum:0,
        showques:false,
        right:0,
        wrong:0
    }
    
    showAnswer=()=>{
        this.setState({showques:!this.state.showques})
    }
    submitAnswer=(answer)=>{ 
        const {quesnum} = this.state
        const deck = this.props.route.params.entryId
        const decks = this.props.decks
        const right = decks[deck].questions[quesnum].correctAnswer.toLowerCase()

        console.log('right: ',typeof right)
        console.log('answer: ',typeof answer)
        if(answer === right){
            console.log('coreect Answer')
            this.setState((prevState)=>({...prevState,right:prevState.right + 1}))
        }
        else{
            console.log('incorrect Answer')
            this.setState((prevState)=>({...prevState,wrong:prevState.wrong + 1}))
        }
        this.setState((prevState)=>({quesnum: prevState.quesnum +1,showques:false }))
    }
    tryAgain = () => {
        this.setState({
            quesNum:0,
            displayQues:false,
            correct:0,
            incorrect:0
        })
        this.props.navigation.goBack();
     }
     back = () => {
        this.props.navigation.goBack(); 
   }
    render(){
        const {quesnum} = this.state
        const {decks} = this.props
        const deck = this.props.route.params.entryId
        const number = this.state.quesnum+1
        
        if(quesnum === decks[deck].questions.length){
            return(
                <View style={quizstyles.container}>
                    <View style={quizstyles.card}>
                        <Text style={quizstyles.mainText}>You got {this.state.right} out of {decks[deck].questions.length}!</Text>
                        {this.state.right>this.state.wrong?
                        <Text style={quizstyles.allcorrect}>Wonderfull!</Text>:
                        <Text style={quizstyles.wrong}>Lets Try Again !</Text>}
                        <CreateButton styles={quizstyles} 
                        text='Try Again' color={white}
                        onPress = {this.tryAgain}
                        />
                        <CreateButton styles={quizstyles} 
                        text='Back' 
                        color={white}
                        onPress = {this.back}
                        />
                    </View>
                </View>
            )
        }
        return(
            <View style={quizstyles.container}>
                <View style={quizstyles.card}>
                    <Text style={quizstyles.question} color = {white}>{number} / {decks[deck].questions.length}</Text>
                    {
                    !this.state.showques?
                    <Text style={quizstyles.mainText}>{decks[deck].questions[quesnum].question}</Text>:
                    <Text style={quizstyles.mainText}>{decks[deck].questions[quesnum].answer}</Text>
                    }
                    {
                        !this.state.showques?
                        <Info text='Show Answer' style={quizstyles.answer} onPress={()=>this.setState({showques:!this.state.showques})}/>:
                        <Info text='Show Question' style={quizstyles.answer} onPress={()=>this.setState({showques:!this.state.showques})}/>
                    }
                    <CreateButton 
                        styles={quizstyles}text='Correct' 
                        color={white} 
                        onPress={()=>this.submitAnswer("true")}/>
                    <CreateButton 
                        styles={quizstyles}text='wrong' 
                        color={white} 
                        onPress={()=>this.submitAnswer("false")}/>
                </View>
            </View>
        )
    }
}


function mapStateToProps(decks){
    return{
        decks
    }
}
export default connect(mapStateToProps)(TryQuiz)
