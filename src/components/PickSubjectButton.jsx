import React from 'react';
import { useState } from 'react';


//so when you click on this button what will happen is am event handler - it will go to the data and display a random question in the category that is being clicked on
// so first lets do the hadler here
// and them lets create another component fo the question and the choices
// and also we will need to make a question randomizer function
function PickSubjectButton({subjectIcon, subjectTitle, handleButtonClick}) {

  return (
    <button value={subjectTitle} onClick={handleButtonClick}>
      <img src={subjectIcon} alt="" />
      <p>{subjectTitle}</p>
    </button>
  );
}

export default PickSubjectButton;
