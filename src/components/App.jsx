import React, { useState } from 'react';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Notification from './Notification/Notification';

export const App = () => {
  // We could craete three separate states for each conditions: good, bad and neutral
  // pros: independent states and less render calls
  // cons: three similiar functions, manual statistics handling

  const initialStats = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [stats, setStats] = useState(initialStats);

  const onFeedbackBtnClick = event => {
    setStats(prevState => {
      return {
        ...prevState,
        [event.target.value]: prevState[event.target.value] + 1,
      };
    });
  };

  const countTotalFeedback = () =>
    Object.values(stats).reduce((acc, el) => {
      return (acc += el);
    }, 0);

  const countPositiveFeedbackPercentage = () => {
    // if (stats.good === 0) return '0%';
    // const avg = Math.floor((state.good / countTotalFeedback()) * 100);
    // return `${avg}%`;
    return stats.good === 0
      ? '0%'
      : `${Math.floor((stats.good / countTotalFeedback()) * 100)}%`;
  };

  const { good, neutral, bad } = stats;

  return (
    <div style={{ padding: '1rem' }}>
      <Section
        title="Welcome to Expresso cafe"
        motto="the best mix of an express train and a coffie drink"
      >
        <FeedbackOptions
          options={Object.keys(stats)}
          onLeaveFeedback={onFeedbackBtnClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification msg="There is no feedback yet" />
        )}
      </Section>
    </div>
  );
};

export default App;
