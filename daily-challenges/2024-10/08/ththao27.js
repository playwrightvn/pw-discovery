function tinhNgayDenTet(tetDate = new Date('2025-01-29T00:00:00')) {

    const interval = setInterval(() => {
        const now = new Date();
        const numberOfDay = tetDate - now;

        if (numberOfDay <= 0) {
            clearInterval(interval);
            console.log("Happy new year!");
            return;
        }
        const one_second = 1000;
        const one_minute = 60 * one_second;
        const one_hour = 60 * one_minute;
        const one_day = 24 * one_hour;

        const days = Math.floor(numberOfDay / (one_day));
        const hours = Math.floor((numberOfDay % (one_day)) / (one_hour));
        const minutes = Math.floor((numberOfDay % (one_hour)) / (one_minute));
        const seconds = Math.floor((numberOfDay % (one_minute)) / one_second);

        console.log(`Countdown to Tet 2025: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }, 1000);
}

tinhNgayDenTet();