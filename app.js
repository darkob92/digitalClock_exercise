function time ()  {
  // defining variable with date object
  const today = new Date();
  // defining variables for hours, minutes and seconds;
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // Adding zero
  h = (h < 10) ? `0${h}` : h;
  m = (m < 10) ? `0${m}` : m;
  s = (s < 10) ? `0${s}` : s;
  // Adding clock to html
  document.getElementById('clock').innerHTML = `${h}:${m}:${s}`;
  let t = setTimeout(time, 500); 
}

// calling time function to display digital clock
time();