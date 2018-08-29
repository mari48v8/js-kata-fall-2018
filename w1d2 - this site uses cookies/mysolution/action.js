$(window).on("load", visPopup);

function visPopup() {
  console.log("knap på plads");

  $("#popup").removeClass("popup_remove");
  $("#popup").addClass("popup_add");

  console.log("klik knap");

  $("#yes").on("click", lukPopup);
  $("#no").on("click", lukPopup);
}

function lukPopup() {
  console.log("Klik ned");

  $("#popup").removeClass("popup_add");
  $("#popup").addClass("popup_easeout");
}
