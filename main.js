module.exports = {
    isLeapYear: function(year) {
        if (year % 4 !== 0) {
            return 'common year';
        }
        else if (year % 100 !== 0) {
            return 'leap year';
        }
        else if (year % 400 !== 0) {
            return 'common year';
        }
        else {
            return 'leap year';
        };
    }
}
