Android.injected();

document.querySelector("li[style='background: #0953cc; height: 60px; padding-right:10px']").style.background = "#000";
document.querySelectorAll("button.navbar-toggler.side_navbar_toggler")[0].onclick = function () { Android.swipeOff(); };
document.querySelector("ul.iconf.navbar-nav").ontouchstart = function () { Android.swipeOff(); };
document.querySelectorAll("button.navbar-toggler.side_navbar_toggler")[1].onclick = function () { Android.swipeOn(); };
document.querySelector("div[style='padding: 5px 3px;']").style.overflow = "hidden";
const ulist = document.querySelectorAll("i.iconf.ti-shopping-cart-full")[8];

const logoutBtn = document.querySelector("#ctl00_lnkSignOut");

if(logoutBtn){
   logoutBtn.onclick = function () { Android.logOut(); }
}

if (ulist) {
  ulist.classList.add("ti-link");
  ulist.classList.remove("ti-shopping-cart-full");
}
const clist = document.querySelectorAll("i.iconf.ti-shopping-cart-full")[7];
if (clist) {
  clist.classList.add("ti-user");
  clist.classList.remove("ti-shopping-cart-full");
}
const llist = document.querySelector(".nav_item i.iconf.ti-shopping-cart-full");
if (llist) {
  llist.classList.add("ti-new-window");
  llist.classList.remove("ti-shopping-cart-full");
}
if (window.location.href.includes("rslt.aspx?id")) {
  var url = new URL(window.location.href);
  var id = url.searchParams.get("id");
  document.querySelector("input#ctl00_TextBox1").value = id;
}
else if (window.location.href.includes("my_account.aspx")) {
  document.querySelector("div.col-md-2.offset-10").classList.remove("offset-10");
}
if (window.location.href === "https://www.laoapp.in/" || window.location.href === "https://www.laoapp.in/Default.aspx") {
  document.querySelector("div.prod.row").appendChild(document.querySelectorAll("div.col-md-6")[5]);
  const blist = document.querySelectorAll(".background_bg.carousel-item");
  for (let i = 0; i < blist.length; i++) { blist[i].style.height = "125px"; }
  const plist = document.querySelectorAll("div.items.png");
  for (let i = 0; i < plist.length; i++) {
    let child = plist[i].querySelectorAll("a"); if (child.length > 3) {
      for (let c = 0; c < child.length; c++) {
        if (c > 2) { child[c].parentNode.removeChild(child[c]); }
      }
    }
  }
}
