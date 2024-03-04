import React from 'react'

export default function Profile() {
  let user = JSON.parse(localStorage.getItem('user'));
  let { first_name, last_name, age, email } = user[0];
  
  return <>
    <div className="row about">
      <div className="col-md-6 offset-3 cern justify-content-center align-items-center d-flex">
        <div className="container justify-content-center align-items-center d-flex">
          <div className="row justify-content-center align-items-center">
            <div className="emi d-flex flex-column align-items-center justify-content-center  p-4 rounded-bottom-pill">
              <h3>Your Email is</h3>
              <h4>{email}</h4>
            </div>
            <div className="d-flex justify-content-around px-5">
              <div className=" rounded-circle cir tex-center d-flex flex-column justify-content-center align-items-center">
                <div className="spin"></div>
                <h5 className="">Your name is  </h5>
                <h5>{first_name} {last_name}</h5>
              </div>
              <div className="rounded-circle cir tex-center d-flex flex-column justify-content-center align-items-center">
                <div className="spin"></div>
                <h5 className="">Your Age is  </h5>
                <h5>{age}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}
