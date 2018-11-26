$.ajax({
    url: "https://geoip-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function( location ) {
        $('#location').val(location.city);
    }
});     
var d = new Date();
var n = d.toISOString();
document.getElementById("date").value = n;

function validateForm() {
var title = document.forms["addBlog"]["title"].value;
var text= document.forms["addBlog"]["text"].value;
var signature= document.forms["addBlog"]["signature"].value;
if (title == "") {
    alert("Title must be filled out");
    return false;
}
if (text == "") {
    alert("Blog Text must be filled out");
    return false;
}
if (signature == "") {
    alert("Please sign!");
    return false;
}
}