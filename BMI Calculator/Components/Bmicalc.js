import React from 'react'

const Bmicalc = ({bmi,type,changeWeight}) => {
  
  return (
    <div className="text-center shadow rounded p-4 bg-info">
      <div><h3>Your BMI Score</h3></div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmi}</div>
      </div>
      <div className="fs-3 fw-bold text-dark">{type}</div>
      {changeWeight.type === "positive" && (
        <div className="fs-4">"You need lose <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">"You need gain <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
      )}
       {changeWeight.type === "normal" && (
        <div className="fs-4">"You weight is Normal,Good for you" </div>
      )}
    </div>
  ) 
}

export default Bmicalc