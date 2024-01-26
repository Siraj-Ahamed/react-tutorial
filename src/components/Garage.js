import Car from './Car';
import Apple from './Apple';

function Garage( ) {
    // const brand = "Ferrari";
    // const color = "Black";

    const isDoorOpened = true;
    const carInfo = {brand: "Ferrari", color: "Black" };
    // const carInfo = {};
    const appleInfo = {type: "Fuji", color: "Green"}
    return (
      <>
        <h1>Who lives inside my garage?</h1>
        {/* <Car brand={brand} color={color} type="Classic" /> */}
        { carInfo.brand !== undefined && carInfo.color !== undefined ?
        <Car carInfo={ carInfo } /> : null }
        <Apple appleInfo={ appleInfo } />

        {isDoorOpened ? <h2>Garage door is open</h2> : <h2>Garage door is closed</h2>}
        
        {isDoorOpened && <h2>Garage door is open</h2>}
      </>
    );
  }

  
  export default Garage;