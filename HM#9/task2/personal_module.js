const currentDate = new Date();
module.exports.date = currentDate;

module.exports.showMessage = function (name) {
    const currrentHour = currentDate.getHours();

    switch (true) {
        case currrentHour >= 4 && currrentHour < 11:
            return `Good morning, ${name}`;
        case currrentHour >= 11 && currrentHour < 16:
            return `Good afternoon, ${name}`;
        case currrentHour >= 16 && currrentHour < 23:
            return `Good evening, ${name}`;
        case currrentHour >= 23 && currrentHour < 4:
            return `Good night, ${name}`;            
    }
}