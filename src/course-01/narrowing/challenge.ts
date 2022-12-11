// Task: Handle all feedback values | Undefined or 0 to 5 stars
function checkFeedbackStatus(stars?: number) {
  if (!stars || stars < 0 || stars > 5) {
    return console.log(`Leave a valid feedback, please!`);
  }

  console.log(`Feedback: ${stars} stars!`);
}

checkFeedbackStatus();
checkFeedbackStatus(-2);
checkFeedbackStatus(10);

checkFeedbackStatus(1);
checkFeedbackStatus(2);
checkFeedbackStatus(3);
checkFeedbackStatus(4);
checkFeedbackStatus(5);
