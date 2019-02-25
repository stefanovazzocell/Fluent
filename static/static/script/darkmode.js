function darkmode() {
  $$('#logo_l, #logo_i').toggleClass('none');
  $$('body').toggleClass('dark');
}

$$().ready(function () {
  $$('.logo').onClick(darkmode);
});