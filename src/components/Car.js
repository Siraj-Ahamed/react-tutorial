function Car(props) {
   
    // const { brand, color, type } = props
    // const text = `Hi, I am a ${brand} car and I am ${color} ${type}`;

    const { carInfo } = props;
    // const {brand, color } = carInfo;

    console.log("Car Info", carInfo);
    // const text = `Hi, I am a ${brand} car and I am ${color} }`;
    const text = `Hi, I am a ${carInfo.brand} car and I am ${carInfo.color}`;

    return (
      <h2>{ text }</h2>
    );
}

export default Car;
