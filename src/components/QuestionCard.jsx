import React from 'react';
import { useState } from 'react';


function QuestionCard({subject}) {

  console.log(subject)

  const { title, questions } = subject;
  
 //questions is an array 
 // I now have to loop through all the questions to get all the 
 // questions displayed but also the options for the answers  (answer will be needed to compare to what has been clicked on and to keep score)
// and also we need to figure our how to display one question at a time
// lets focus on figuring out how to do that just the questions.question

//look in countries app detailedCard component - for deconstructing an object and also login inside the return of the component (like mapping)
    return (
    <div>
      <div>
          <div>
              {/* <img src="" alt="" /> */}
              <h5>{title}</h5>
          </div>

          <span>Questions x of 10</span>

          <p>Question</p>
          {/* Are we looping through the question array here displaying the questions.question? */}
        </div>
        <fieldset>
          {/* to be looped through */}
          <input type="radio" id="" value=""/>
          <label htmlFor=""></label>
        </fieldset>
    </div>
  );


}

export default QuestionCard;
