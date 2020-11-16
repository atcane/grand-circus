(function () {
    //Code goes in here
    let facingForward = true;
    let position = 0;

    function moveForward(distance) {
        position = positon + numOfSpacesToMove;
    }

    function moveBackward(distance) {

    }

    function turnAround() {
        facingForward = !facingForward
    }

    function printLocation() {
        console.log(`The position is ${position}`)
    }

}) ()