import React from 'react';

const InputCity = ({ onSubmitHandler, city, onInputHandeler }) => {
  return (
    <div className="input">
      <input
        type="text"
        value={city}
        onChange={onInputHandeler}
        placeHolder="City"
      />
      <br />
      <button className="input_btn" type="submit" onClick={onSubmitHandler}>
        Search
      </button>
    </div>
  );
};

export default InputCity;
