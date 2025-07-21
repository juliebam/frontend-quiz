import { useParams } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import data from '../data/data.json';


function Quiz() {
    const { subjectName } = useParams();

    const { quizzes } = data;

    //  this will get the set of questions from out data based on what was picked 

    const subject = quizzes.find(({ title }) => title === subjectName);

    //Can I pass down props of specific subjects? instead of passing down the entire data --pass down just the specific subject object?
   


    return (
        <QuestionCard  subject={subject} />

        
    )
}

export default Quiz;