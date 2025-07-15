import React from 'react';
import { useState } from 'react';


function QuestionCard({quesstions}) {


    return (
    <div>
      <div>
          <div>
              {/* <img src="" alt="" /> */}
              <h5>title</h5>
          </div>

          <span>Questions x of 10</span>

          <p>Question</p>
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
