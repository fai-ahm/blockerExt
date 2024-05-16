function dateTime() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    // checking if the current time is 12:00 AM at night. In 24 hours format, 00:00 corresponds to 12:00 AM.
    if (currentHour === 0 && currentMinute === 0) {
        return true;
    }
    return false;
}
