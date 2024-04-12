import React, { useState } from "react";

const MainBox = () => {
  const [showFirstBox, setShowFirstBox] = useState(true);
  const [showSecondBox, setShowSecondBox] = useState(false);
  const [showThirdBox, setShowThirdBox] = useState(false);
  const [attorneyResponse, setAttorneyResponse] = useState(false);
  const [showFourthBox, setShowFourthBox] = useState(false);

  const handleFirstBoxChange = () => {
    setShowFirstBox(false);
    setShowSecondBox(true);
  };

  const handleSecondBoxChange = () => {
    setShowSecondBox(false);
    setShowThirdBox(true);
  };

  const handleAttorneyChange = () => {
    setAttorneyResponse(true);
  };

  const handleThirdBoxChange = () => {
    setShowThirdBox(false);
    console.log(showFirstBox);
    setShowFourthBox(true);
  };

  return (
    <>
      <div className={`box ${showFirstBox ? "fade-in" : "fade-out"}`}>
        <p>How were you hurt? *</p>
        <input
          type="radio"
          id="automobile_accident"
          name="accident_type"
          onChange={handleFirstBoxChange}
        />
        <label htmlFor="automobile_accident">Automobile Accident</label>
        <br />

        <input
          type="radio"
          id="pedestrian_accident"
          name="accident_type"
          onChange={handleFirstBoxChange}
        />
        <label htmlFor="pedestrian_accident">
          Pedestrian or Bicycle Accident
        </label>
        <br />

        <input
          type="radio"
          id="truck_accident"
          name="accident_type"
          onChange={handleFirstBoxChange}
        />
        <label htmlFor="truck_accident">Truck Accident</label>
        <br />

        <input
          type="radio"
          id="motorcycle_accident"
          name="accident_type"
          onChange={handleFirstBoxChange}
        />
        <label htmlFor="motorcycle_accident">Motorcycle Accident</label>
        <br />

        <input
          type="radio"
          id="work_injury"
          name="accident_type"
          onChange={handleFirstBoxChange}
        />
        <label htmlFor="work_injury">Accident or Injury at Work</label>
        <br />

        <input
          type="radio"
          id="medical_negligence"
          name="accident_type"
          onChange={handleFirstBoxChange}
        />
        <label htmlFor="medical_negligence">Medical Negligence</label>
        <br />

        <input
          type="radio"
          id="fall_or_slip"
          name="accident_type"
          onChange={handleFirstBoxChange}
        />
        <label htmlFor="fall_or_slip">Fall or Slip</label>
        <br />

        <input
          type="radio"
          id="other_injury"
          name="accident_type"
          onChange={handleFirstBoxChange}
        />
        <label htmlFor="other_injury">Other Injury or Accident</label>
        <br />
      </div>

      <div className={`box ${showSecondBox ? "fade-in" : "fade-out"}`}>
        <p>Did you have to go to the doctor? *</p>
        <input
          type="radio"
          id="yes"
          name="yes"
          onChange={handleSecondBoxChange}
        />
        <label htmlFor="yes">Yes</label>
        <br />

        <input
          type="radio"
          id="no"
          name="no"
          onChange={handleSecondBoxChange}
        />
        <label htmlFor="no">No</label>
        <br />
      </div>

      <div className={`box ${showThirdBox ? "fade-in" : "fade-out"}`}>
        <p>Are you currently represented by an attorney? *</p>
        <input
          type="radio"
          id="attorney_yes"
          name="attorney"
          value="yes"
          onChange={handleAttorneyChange}
        />
        <label htmlFor="attorney_yes">Yes</label>
        <br />

        <input
          type="radio"
          id="attorney_no"
          name="attorney"
          onChange={handleThirdBoxChange}
        />
        <label htmlFor="attorney_no">No</label>
        <br />
      </div>
      {attorneyResponse && (
        <div className={`box ${showThirdBox ? "fade-in" : "fade-out"}`}>
          <h3 style={{ textAlign: "center" }}>
            Thank you for taking the time to complete this survey.
          </h3>
        </div>
      )}

      {!attorneyResponse && showFourthBox && (
        <div className={`box ${showFourthBox ? "fade-in" : "fade-out"}`}>
          <p>Were you at fault? *</p>
          <input
            type="radio"
            id="fault_yes"
            name="fault"
            value="yes"
            onChange={handleAttorneyChange}
          />
          <label htmlFor="fault_yes">Yes</label>
          <br />

          <input type="radio" id="fault_no" name="fault" value="no" />
          <label htmlFor="fault_no">No</label>
          <br />
        </div>
      )}

      {attorneyResponse && (
        <div className={`box ${showFourthBox ? "fade-in" : "fade-out"}`}>
          <h3 style={{ textAlign: "center" }}>
            Thank you for taking the time to complete this survey.
          </h3>
        </div>
      )}

      {!attorneyResponse && (
        <div className="submit">
          <div className="loader"></div>
          <button className="btn">
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default MainBox;
