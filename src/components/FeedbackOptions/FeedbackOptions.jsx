import css from "./FeedbackOptions.module.css";

const FeedBackOptions = ({ options, onLeaveFeedback }) => {

  console.log("Inside Feedback Options: ", onLeaveFeedback)
  return (
      <>
        {options.map(el => {
          return <button  key={el} 
                          type="button" 
                          className={css["button"]} 
                          value={el} 
                          onClick={onLeaveFeedback}>{el}
                 </button>
        })}
      </>
    );
  };
  
  export default FeedBackOptions;
  