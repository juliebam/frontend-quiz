import './App.css'
import data from './data/data.json';
import PickSubjectButton from './components/PickSubjectButton.jsx'
import iconMap from './subjectIcons';
import { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard.jsx';



function App() {

  const { quizzes } = data;

  const [ subjectPicked, setSubjectPicked ] = useState('')
  const [ getQuestions, setGetQuestions ] = useState([])

  //handles the click of category button - picks the subject
  const handleClick = (event) => {
        const buttonValue = event.currentTarget.value;
        setSubjectPicked(buttonValue)
        console.log(buttonValue)
    }

  // this will get the set of questions from out data based on what was picked 
  const getQuestionsFromQuizzes = () => {
    const subject = quizzes.find(({ title }) => title === subjectPicked);
    if (subject) {
      setGetQuestions(subject.questions)
      console.log(getQuestions)
    }
   }


useEffect(() => {
  getQuestionsFromQuizzes();
}, [subjectPicked] )
 


  

  return (
    <>
     <div>
        <h1>Welcome to the Frontend Quiz</h1>
        <p>Pick a subject to get started</p>


        <div>
          {quizzes.map((subject, i) => 
            <PickSubjectButton subjectTitle={subject.title} subjectIcon={iconMap[subject.icon]} handleButtonClick={handleClick} key={i} />
          )}
        </div>
          {getQuestions.length > 0 && (
            <QuestionCard questions={getQuestions} /> 
          )}
          

        

     </div>
    </>
  )
}

export default App
