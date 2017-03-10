var fuck = 4;
var height;
var pathname = window.location.pathname;
if (pathname == "/" || pathname == "") {
  $(document).ready( function () {
    height = document.body.clientHeight;
    block(height);
  });
  $(document).scroll( function () {
    block(height);
  });
};

function block(height) {
  var post = document.getElementsByClassName("userContentWrapper");
  for (var i = 0; i < post.length; ++i) {
    if (post[i].clientHeight / height >= fuck) {
      var poster = post[i].getElementsByClassName("fwb")["0"].innerText;
      post[i].innerHTML = "Auto blocked the fucking FB post from "+ poster +"! Thanks to Mother Pusheen!";
      console.log(post[i].clientHeight,"Auto blocked the fucking FB post from "+ poster +"! Thanks to Mother Pusheen!");
    }
  }
}
