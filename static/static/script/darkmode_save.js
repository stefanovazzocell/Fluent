function darkmode() {
  $$('#logo_l, #logo_i').toggleClass('none');
  $$('body').toggleClass('dark');
  if (typeof(Storage) !== "undefined") {
    if (localStorage.darkmode == "false") {
      localStorage.darkmode = "true";
    } else {
      localStorage.darkmode = "false";
    }
  }
}

$$().ready(function () {
  $$('.logo').onClick(darkmode);
});

if (typeof(Storage) !== "undefined") {
  if (localStorage.darkmode == "true") {
    darkmode();
    localStorage.darkmode = "true"
  }
}