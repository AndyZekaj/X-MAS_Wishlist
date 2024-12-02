const box = 50;

function dimensions(length, width, height) {
    if (box >= length * width * height) {
        return true
    }
}

console.log(dimensions(2, 2, 2));