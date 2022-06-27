var notification = JSON.stringify({ id : 2, startDate: "2022-06-24T01:00:00Z", endDate: "2022-07-05T00:00:00Z",count: 0, url: "https://www.laoapp.in/", image: "https://laocpanel.laobp.in/Content/banner_image/awpju1z2.xolcdfscdfshbdvfkj.png", title: "Shop your desires", message: "Shop your desires from 5th of July 2022" });
Android.addNotification(notification);
document.querySelector("li[style='background: #0953cc; height: 60px; padding-right:10px']").style.background = "#000";
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
  const alist = document.querySelectorAll("div.items.png");
    for (let i = 0; i < alist.length; i++) {
      alist[i].style.setProperty("height", "auto", "important");
      let child = alist[i].querySelectorAll("a");
      if (child.length ===3) {
          child[0].parentNode.style.setProperty("flex-wrap", "unset", "important");
      for (let c = 0; c < child.length; c++) {
          child[c].style.setProperty("height", "unset", "important");
          child[c].querySelector("img").style.height="100px";
          child[c].querySelector("img").style.width="120px";
      }
    }
  }
}
else if (window.location.href === "https://www.laoapp.in/privacepolicey.aspx") {
   var uls = document.querySelectorAll("ul");
   var lis = document.querySelectorAll("li");
    for (let i = 0; i < uls.length; i++) {
        uls[i].style.setProperty("margin-left", "unset", "important");
    }
   for (let i = 0; i < lis.length; i++) {
        lis[i].style.setProperty("margin-left", "unset", "important");
    }
}
