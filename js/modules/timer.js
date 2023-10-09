function timer(deadline) {
  // Timer

  function getCurrentDate(deadline) {
    let t = Date.parse(deadline) - new Date(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function showTimer() {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    return [days, hours, minutes, seconds];
  }

  const idTimer = setInterval(
    () => {
      let dateCongirable = getCurrentDate(deadline);
      let datePage = showTimer();

      if (dateCongirable.total < 0) {
        datePage[0].textContent = 0;
        datePage[1].textContent = 0;
        datePage[2].textContent = 0;
        datePage[3].textContent = 0;
        clearInterval(idTimer);
      }

      datePage[0].textContent = dateCongirable.days;
      datePage[1].textContent = dateCongirable.hours;
      datePage[2].textContent = dateCongirable.minutes;
      datePage[3].textContent = dateCongirable.seconds;
    },
    1000,
    getCurrentDate(deadline),
    showTimer()
  );
}

export default timer;
