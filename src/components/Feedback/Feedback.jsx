import React, { Component } from "react";
import css from "./Feedback.module.css"

class Feedback extends Component {
  
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

  render() {
    return <section className={css["feedback"]}>
        <h2>Welcome to Expresso cafe</h2>
        <p>the best mix of an express train and a coffie drink</p>
        <button type="button" className={css["button"]} value="good" onClick={this.onFeedbackBtnClick}>Good</button>
        <button type="button" className={css["button"]} value="neutral" onClick={this.onFeedbackBtnClick}>Neutral</button>
        <button type="button" className={css["button"]} value="bad" onClick={this.onFeedbackBtnClick}>Bad</button>
        <h1>Statistics</h1>
        <p>Good:<span className={css["stat-counter"]}>{this.state.good}</span></p>
        <p>Neutral:<span className={css["stat-counter"]}>{this.state.neutral}</span></p>
        <p>Bad:<span className={css["stat-counter"]}>{this.state.bad}</span></p>
    </section>;
  }
}

export default Feedback;