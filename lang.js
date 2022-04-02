// $("[lang]").hide(); // hide all lang attributes on start.
$(":lang(en)").hide();
$(":lang(de)").hide();
$(":lang(de)").show();
// $('[lang="de"]').show(); // show just derean text (you can change it)
function tog() {
  // Get the checkbox
  var checkBox = document.getElementById("temp");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    // text.style.display = "block";
    $(":lang(en)").show();
    $(":lang(de)").hide();
  } else {
    $(":lang(en)").hide();
    $(":lang(de)").show();
  }
}

// $("#lang-switch").change(function () {
//   console.log("SWITCH");
//   console.log($(this).val());

//   var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)

//   console.log("HMM", lang);
//   switch (lang) {
//     case "en":
//       $(":lang(en)").show();
//       $(":lang(de)").hide();

//       break;
//     case "de":
//       $(":lang(en)").hide();
//       $(":lang(de)").show();

//       break;
//     default:
//       $(":lang(en)").hide();
//       $(":lang(de)").show();

//   }
// });
