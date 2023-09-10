import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Axios from "axios";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // using filter method to clear out tour id by not equaling to thr related id and setting setTours to newTours 

  const removeTour = (id) =>{
   const newTour = tours.filter((tour) => tour.id !== id)
   setTours(newTour)
  }

  //  fetching url and setting setLoading to false to display the tour component & setting setTours to res.data
  const fetchUrl = () => {
    Axios.get(url).then((res) => {
      setLoading(false);
      setTours(res.data);
    });
  };
  useEffect(() => {
    fetchUrl();
  }, []);

  // conditional rendering for loading page otherWise it will return the tour component

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

// if length of tours is 0 then it will render h2 and refresh button will again fetch the url

if(tours.length === 0){
  return (

    <main className="title">
      <h2>No Tours Left</h2>
    <button className = "btn" onClick={fetchUrl}>Refresh </button>
    </main>
  )
}

  return (
    <main>
      <Tours tours={tours} removeTour = {removeTour}/>
    </main>
  );
}

export default App;
