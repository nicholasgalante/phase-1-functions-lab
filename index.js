// Code your solution in this file!

distanceFromHqInBlocks = (location) => {
    return Math.abs(location - 42);
}


distanceFromHqInFeet = (location) => {
    return distanceFromHqInBlocks(location) * 264;
}

distanceTravelledInFeet = (start, destination) => {
    return Math.abs((destination - start) * 264);
}

calculatesFarePrice = (start, destination) => {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    } else if (distance < 2000 && distance > 400) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }   
    else {
        return 'cannot travel that far';
    }
}