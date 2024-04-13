import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainBox = () => {
  const [showFirstBox, setShowFirstBox] = useState(true);
  const [showSecondBox, setShowSecondBox] = useState(false);
  const [showThirdBox, setShowThirdBox] = useState(false);
  const [attorneyResponse, setAttorneyResponse] = useState(false);
  const [showFourthBox, setShowFourthBox] = useState(false);
  const [showFifthBox, setShowFifthBox] = useState(false);
  const [showSixthBox, setShowSixthBox] = useState(false);
  const [showSeventhBox, setShowSeventhBox] = useState(false);
  const [count, setCount] = useState(0);
  const [showEightBox, setShowEightBox] = useState(false);
  const [showNinthBox, setShowNinthBox] = useState(false);
  const [loader, setLoader] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigateTo = useNavigate();

  const handleFirstBoxChange = () => {
    setShowFirstBox(false);
    setShowSecondBox(true);
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const handleSecondBoxChange = () => {
    setShowSecondBox(false);
    setShowThirdBox(true);
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const handleAttorneyChange = () => {
    setAttorneyResponse(true);
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const handleThirdBoxChange = () => {
    setShowThirdBox(false);
    setShowFourthBox(true);
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const handleFourthBoxChange = () => {
    setShowFourthBox(false);
    setShowFifthBox(true);
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const handleFifthBoxChange = () => {
    setShowFifthBox(false);
    setShowSixthBox(true);
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const handleClicks = () => {
    setCount((prevCount) => prevCount + 1);
    if (count === 1) {
      setShowSixthBox(false);
      setShowSeventhBox(true);
      setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
    }
    if (count === 2) {
      setShowSeventhBox(false);
      setShowEightBox(true);
      setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
    }
    if (count === 3) {
      setShowEightBox(false);
      setShowNinthBox(true);
      setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
    }
    if (count === 4) {
      setLoader(true);
      setProgress((prevProgress) => Math.min(prevProgress + 20, 100));
      setTimeout(() => {
        navigateTo("/result");
      }, 4000);
    }
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

          <input
            type="radio"
            id="fault_no"
            name="fault"
            value="no"
            onChange={handleFourthBoxChange}
          />
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

      <div className={`box ${showFifthBox ? "fade-in" : "fade-out"}`}>
        <p>When did this accident happen? *</p>
        <input
          type="radio"
          id="within_1_week"
          name="accident_time"
          onChange={handleFifthBoxChange}
        />
        <label htmlFor="within_1_week">Within 1 Week</label>
        <br />

        <input
          type="radio"
          id="within_1_3_months"
          name="accident_time"
          onChange={handleFifthBoxChange}
        />
        <label htmlFor="within_1_3_months">Within 1-3 months</label>
        <br />

        <input
          type="radio"
          id="within_4_6_months"
          name="accident_time"
          onChange={handleFifthBoxChange}
        />
        <label htmlFor="within_4_6_months">Within 4-6 months</label>
        <br />

        <input
          type="radio"
          id="within_1_year"
          name="accident_time"
          onChange={handleFifthBoxChange}
        />
        <label htmlFor="within_1_year">Within 1 Year</label>
        <br />

        <input
          type="radio"
          id="within_2_years"
          name="accident_time"
          onChange={handleFifthBoxChange}
        />
        <label htmlFor="within_2_years">Within 2 Years</label>
        <br />

        <input
          type="radio"
          id="longer_than_2_years"
          name="accident_time"
          onChange={handleFifthBoxChange}
        />
        <label htmlFor="longer_than_2_years">Longer than 2 Years</label>
        <br />
      </div>

      <div className={`box ${showSixthBox ? "fade-in" : "fade-out"}`}>
        <p>Describe Your Incident *</p>
        <input type="text" placeholder="Describe Your Incident" />
      </div>

      <div className={`box ${showSeventhBox ? "fade-in" : "fade-out"}`}>
        <p>First Name *</p>
        <input type="text" placeholder="First Name" />
      </div>

      <div className={`box ${showEightBox ? "fade-in" : "fade-out"}`}>
        <p>Email *</p>
        <input type="email" placeholder="Email" />
      </div>

      <div className={`box ${showNinthBox ? "fade-in" : "fade-out"}`}>
        <p>Phone *</p>
        <input type="text" placeholder="Phone" />
      </div>

      {!attorneyResponse && (
        <div className="submit">
          {loader ? (
            <>
              <div className="progress-bar">
                <div className="loader" style={{ width: `${progress}%` }}>
                  <span>{progress}%</span>
                </div>
              </div>
              <div className="spinner"></div>
            </>
          ) : (
            <>
              <div className="progress-bar">
                <div className="loader" style={{ width: `${progress}%` }}>
                  <span>{progress}%</span>
                </div>
              </div>
              <button className="btn" onClick={handleClicks}>
                <i className="fa-solid fa-play"></i>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MainBox;
