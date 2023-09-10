import React, { useState } from "react";

const Tour = ({ id, image, name, price, info, removeTour }) => {

  const [readMore, setReadMore] = useState(false);

  return (
    <section className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price"> {price}</h4>
        </div>
        
        <p>{readMore ? info: `${info.substring(0, 150)}` }</p>

        <button onClick = {() => setReadMore(!readMore)}> {readMore ? "Show Less" : "Read More"}
        </button>

        <button className="delete-btn" onClick={() =>
            {removeTour(id)}}>
            not interested
        </button>
      </footer>

    </section>
  );
};

export default Tour;

//  first logic => if readMore is true i.e. false in the above syntax then it will the characters upto 150 and vice-versa.

// toggling button states that if the default value is true i.e. false, the click function will set the value opposite to the default value then "Show-less" and "Show-more" text will appear according to the setReadMore value

// For removing the Tour item we created the function called removeTour in App.js and calling it to tours and then to tour thru props