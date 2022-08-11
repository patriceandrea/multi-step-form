import React, { useState } from 'react'
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';
import Confirm from './Confirm';

const Form = () => {
  const [page, setPage] = useState(0);

  const formTitles = ["Sign Up", "Personal Info", "Other", "Confirmation"];

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />
    }
    else if (page === 1) {
      return <PersonalInfo />
    }
    else if (page === 2) {
      return <OtherInfo />
    } else {
      return <Confirm />
    }
  }

  return (
    <div className='form'>
      <div className='progress-bar'>
        <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
      </div>
      <div className='form-container'>
        <div className='header'>
          <h1>{formTitles[page]}</h1>
        </div>
        <div className='body'>{pageDisplay()}</div>
        <div className='footer'>
          <button
            disabled={page === 0}
            onClick={() => { setPage((currPage) => currPage - 1) }}
          >Prev</button>
          {page !== formTitles.length - 1 &&
            <button
              disabled={page === formTitles.length - 1}
              onClick={() => { setPage((currPage) => currPage + 1) }
              }>
              Next
            </button>}
          {page === formTitles.length - 1 &&
            <button>
              Confirm
            </button>}
        </div>
      </div>
    </div >
  )
}

export default Form
