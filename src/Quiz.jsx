import './Quiz.css';

export default function Quiz() {
  const quizItems = [
    {
      question: "When did we meet?",
      a: "February 27, 2024",
      b: "March 27, 2023",
      c: "July 14, 2023",
      d: "WHO CARES!!!",
    },
    {
      question: "What's my favorite food?",
      a: "Carbonara",
      b: "Carbonara",
      c: "C for Carbonara",
      d: "Fried chicken???",
    }
  ]

  return (
    <>
      <h1 className="quiz-time">QUIZ TIME!!!</h1>
      <div className="boxes quiz-item">
        <h2 className="quiz-num">Question 1:</h2>
        <h3>When did we meet?</h3>
        <div className="quiz-answers">
          <button className="quiz-answer">
            <span className="ans-letter">A</span>
            <p>February 17, 2024</p>
          </button>
          <button className="quiz-answer">
            <span className="ans-letter">A</span>
            <p>February 17, 2024</p>
          </button>
          <button className="quiz-answer">
            <span className="ans-letter">A</span>
            <p>February 17, 2024</p>
          </button>
          <button className="quiz-answer">
            <span className="ans-letter">A</span>
            <p>February 17, 2024</p>
          </button>
        </div>
      </div>
    </>
  )
}