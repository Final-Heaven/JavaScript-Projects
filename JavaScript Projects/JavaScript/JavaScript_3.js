function displayType(car) {
    var carType = car.getAttribute("data-car-type");
    alert(carType + " is made by " + car.innerHTML);
}