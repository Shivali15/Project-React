import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Tours from "./tours";

//exceute in other tab
//  taking api  from below http (url)
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // removing the tour

  //remov the tour if id get matched
  // if not matched will return in  newtours
  const removeTour = (id) => {
    const newtours = tours.filter((tour) => tour.id !== id);
    setTours(newtours);
  };

  //fetching the data
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    // console.log(tours)
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // agar sab hi  tour remove hogaye then array will get empty
  // then return below
  //  and again reset to fetch all the tours by clicking on it
  // then  again all tours get back to us
  if (tours.length === 0) {
    return (
      <main>
        <div className=" title">
          <h2> NO TOURS LEFT !!!</h2>

          <button className="refresh-btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  // using props in <Tours/> components
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
export default App;
