import React,{ Component } from "react";
import Section from "./Section/Section.jsx";
import Statistics from "./Statistics/Statistics.jsx"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Notification from  "./Notification/Notification"

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onFeedbackBtnClick =(event) => {
    this.setState(
        (prevState) => {
            return {[event.target.value]: prevState[event.target.value]+1}
        }
    )
  }
  
  countTotalFeedback = () => Object.values(this.state).reduce((acc,el)=>{return acc+=el},0); 
    
  countPositiveFeedbackPercentage =() => {
    if (this.state.good === 0) return "0%";
    const avg = Math.floor( this.state.good / this.countTotalFeedback() * 100);
    return `${avg}%` 
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div style={{padding: "1rem"}}>
      <Section title="Welcome to Expresso cafe"
               motto="the best mix of an express train and a coffie drink">
        <FeedbackOptions options={Object.keys(this.state)}
                         onLeaveFeedback={this.onFeedbackBtnClick}/>
      </Section>
      <Section title="Statistics">
        { this.countTotalFeedback() ? (
          <Statistics good={good} 
                      neutral={neutral} 
                      bad={bad} 
                      total={this.countTotalFeedback} 
                      positivePercentage={this.countPositiveFeedbackPercentage}/> )  :
          (<Notification msg = "There is no feedback"/>) }
      </Section>
      </div>
    );
  }
};

export default App;
