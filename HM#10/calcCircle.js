
exports.getCircleLength = function (radius) {
    return Number((2 * Math.PI * radius).toFixed(1));
}

exports.getCircleArea = function (radius){
    return Number((Math.PI * radius ** 2).toFixed(2));
}
