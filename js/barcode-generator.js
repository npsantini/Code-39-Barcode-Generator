$("#Btn").click(function() {
  var $barcodeNumber = $("#barcodeNumber").val();
  if ($barcodeNumber.search(/^[a-zA-Z0-9]+$/) == -1){
    alert("Invalid characters used. Only A-Z & 0-9 allowed.");
  } else {
    var digits = $barcodeNumber.split("");

    $("#bc1").css(
      "backgroundImage",
      "url('img/" +
        digits[0].toLowerCase() +
        ".jpg')"
    );
    $("#bc2").css(
      "backgroundImage",
      "url('img/" +
        digits[1].toLowerCase() +
        ".jpg')"
    );
    $("#bc3").css(
      "backgroundImage",
      "url('img/" +
        digits[2].toLowerCase() +
        ".jpg')"
    );
    $("#bc4").css(
      "backgroundImage",
      "url('img/" +
        digits[3].toLowerCase() +
        ".jpg')"
    );
    $("#bc5").css(
      "backgroundImage",
      "url('img/" +
        digits[4].toLowerCase() +
        ".jpg')"
    );
    $("#bc6").css(
      "backgroundImage",
      "url('img/" +
        digits[5].toLowerCase() +
        ".jpg')"
    );
    $("#bc7").css(
      "backgroundImage",
      "url('img/" +
        digits[6].toLowerCase() +
        ".jpg')"
    );
    $("#start").css(
      "backgroundImage",
      "url('img/star.jpg')"
    );
    $("#end").css(
      "backgroundImage",
      "url('img/star.jpg')"
    );
	
	// Make the CSS changes
    $(".flex").css("backgroundColor", "#fff");
	$("#barcode").css("display", "block");
	$(".container1").css("display", "block");
    $(".container2").css("display", "block");
	$(".printBtn").css("display", "block");
	
    var form = $(".upcNum").not(".container");
    var vals = form.map(function() {
        var value = $.trim(this.value);
        return value ? value : undefined;
      }).get();

    var label = vals.join("");
    $(".container2").html(label.toUpperCase());
  }
});

//Fix the barcode scanner from opening up the downloads window
document.addEventListener('keydown', function(event) {
    if( event.keyCode == 13 || event.keyCode == 17 || event.keyCode == 74 ) {
		event.preventDefault();
	}
});

//Print the barcode
$('input.printBtn').click(function(){
    window.print();
    return false;
});
