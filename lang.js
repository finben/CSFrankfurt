// $("[lang]").hide(); // hide all lang attributes on start.
$(":lang(en)").hide();
$(":lang(de)").hide();
$(":lang(de)").show();
// $('[lang="de"]').show(); // show just derean text (you can change it)
$("#lang-switch").change(function () {
  console.log("SWITCH");
  console.log($(this).val());
  // put onchange event when user select option from select
  var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
  switch (lang) {
    case "en":
      $(":lang(en)").show();
      $(":lang(de)").hide();
      //   $("[lang]").hide();
      //   $('[lang="en"]').show();
      break;
    case "de":
      $(":lang(en)").hide();
      $(":lang(de)").show();
      //   $("[lang]").hide();
      //   $('[lang="de"]').show();
      break;
    default:
      $(":lang(en)").hide();
      $(":lang(de)").show();
    //   $("[lang]").hide();
    //   $('[lang="de"]').show();
  }
});
