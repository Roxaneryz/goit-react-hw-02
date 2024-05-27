import css from "./feedback.module.css"


const Feedback = ({ feedback, totalFeedback }) => {
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <div className={css.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
};
export default Feedback;