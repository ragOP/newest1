import React from "react";

const MainBox = () => {
  return (
    <>
      <div className="box">
        <p>How were you hurt? *</p>
        <input type="radio" id="automobile_accident" name="accident_type" />
        <label for="automobile_accident">Automobile Accident</label>
        <br />

        <input type="radio" id="pedestrian_accident" name="accident_type" />
        <label for="pedestrian_accident">Pedestrian or Bicycle Accident</label>
        <br />

        <input type="radio" id="truck_accident" name="accident_type" />
        <label for="truck_accident">Truck Accident</label>
        <br />

        <input type="radio" id="motorcycle_accident" name="accident_type" />
        <label for="motorcycle_accident">Motorcycle Accident</label>
        <br />

        <input type="radio" id="work_injury" name="accident_type" />
        <label for="work_injury">Accident or Injury at Work</label>
        <br />

        <input type="radio" id="medical_negligence" name="accident_type" />
        <label for="medical_negligence">Medical Negligence</label>
        <br />

        <input type="radio" id="fall_or_slip" name="accident_type" />
        <label for="fall_or_slip">Fall or Slip</label>
        <br />

        <input type="radio" id="other_injury" name="accident_type" />
        <label for="other_injury">Other Injury or Accident</label>
        <br />
      </div>
      <div className="submit">
        <div className="loader"></div>
        <button className="btn">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
    </>
  );
};

export default MainBox;
