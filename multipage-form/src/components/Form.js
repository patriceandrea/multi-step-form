import React, { useState } from 'react'
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';

const Form = () => {
  const [page, setPage] = useState(0);

  const formTitles = ["Sign Up", "Personal Info", "Other"];

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />
    }
    else if (page === 1) {
      return <PersonalInfo />
    }
    else {
      return <OtherInfo />
    }
  }

  return (
    <div className='form'>
      <div className='progress-bar'></div>
      <div className='form-container'>
        <div className='header'>
          <h1>{formTitles[page]}</h1>
        </div>
        <div className='body'>{pageDisplay()}</div>
        <div className='footer'>
          <button
            disabled={page == 0}
            onClick={() => { setPage((currPage) => currPage - 1) }}
          >Prev</button>
          <button
            disabled={page === formTitles.length - 1}
            onClick={() => { setPage((currPage) => currPage + 1) }
            }>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
