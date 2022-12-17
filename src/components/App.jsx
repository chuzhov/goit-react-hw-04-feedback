import { Component } from "react";
import Section from "./Section/Section.jsx";
import Statistics from "./Statistics/Statistics.jsx"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";

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
  
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad; 
    
  countPositiveFeedbackPercentage =() => {
    if (this.state.good === 0) return "0%";
    const avg = Math.floor( this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);
    return `${avg}%` 
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div style={{padding: "1rem"}}>
      <Section title="Welcome to Expresso cafe" >
              {/* motto="the best mix of an express train and a coffie drink" */}
        <FeedbackOptions options={options} 
                         onLeaveFeedback={this.onFeedbackBtnClick}/>
      </Section>
      <Section title="Statistics">
        <Statistics good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={this.countTotalFeedback()} 
                    positivePercentage={this.countPositiveFeedbackPercentage()}/>  
      </Section>
      </div>
    );
  }
};

export default App;
