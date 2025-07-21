
import data from '../data/data.json';
import iconMap from '../subjectIcons';
import PickSubjectButton from '../components/PickSubjectButton';
import { useNavigate } from 'react-router-dom';


function Home () {
    const { quizzes } = data;
  
    const navigate = useNavigate();


  //handles the click of category button - picks the subject
  const handleClick = (event) => {
        const buttonValue = event.currentTarget.value;
        console.log(buttonValue)
        navigate(`/quiz/${buttonValue}`);
    }  

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
     </div>
    </>
  )
}



export default Home;