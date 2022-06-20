var parent = document.getElementsByTagName('head').item(0);
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = window.atob('Lm1pdGVtcyB7DQogICAgbWFyZ2luOiAwOw0KICAgIHRleHQtYWxpZ246IGNlbnRlcjsNCiAgICBkaXNwbGF5OiBmbGV4Ow0KICAgIHdpZHRoOiAxMDAlOw0KDQp9DQoNCiAgICAubWl0ZW1zID4gYSB7DQogICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxNXB4Ow0KICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94Ow0KICAgICAgICB3aWR0aDogNDYuNSU7DQogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsNCiAgICAgICAgY29sb3I6ICMyMTIxMjE7DQogICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsNCiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsNCiAgICAgICAgbWFyZ2luOiA1cHggNXB4Ow0KICAgIH0NCg0KICAgICAgICAubWl0ZW1zID4gYSA+IGltZyB7DQogICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7DQogICAgICAgICAgICBtYXJnaW46IDA7DQogICAgICAgICAgICBoZWlnaHQ6IDExMHB4Ow0KICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweA0KICAgICAgICB9DQoNCiAgICAubWl0ZW1zLnBuZyA+IGEgew0KICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweDsNCiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCiAgICAgICAgd2lkdGg6IDQ1LjUlOw0KICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7DQogICAgICAgIGNvbG9yOiAjMjEyMTIxOw0KICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7DQogICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7DQogICAgICAgIG1hcmdpbjogNXB4IDVweDsNCiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjsNCiAgICB9DQoNCiAgICAgICAgLm1pdGVtcy5wbmcgPiBhID4gaW1nIHsNCiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTsNCiAgICAgICAgICAgIG1hcmdpbjogMDsNCiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7DQogICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4Ow0KICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7DQogICAgICAgIH0NCg0KICAgIC5taXRlbXMgPiBhID4gaDQgew0KICAgICAgICBtYXJnaW46IDNweCAwIDA7DQogICAgICAgIHBhZGRpbmc6IDA7DQogICAgICAgIGZvbnQtc2l6ZTogMTZweDsNCiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMA0KICAgIH0NCg0KICAgIC5taXRlbXMgPiBhID4gLm9mZiB7DQogICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsNCiAgICAgICAgbWFyZ2luOiA1cHggMCAycHg7DQogICAgICAgIHBhZGRpbmc6IDA7DQogICAgICAgIGNvbG9yOiAjZjUwMDU3Ow0KICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4Ow0KICAgICAgICBmb250LXdlaWdodDogNTAwOw0KICAgICAgICBmb250LXNpemU6IDEycHgNCiAgICB9DQoNCiAgICAubWl0ZW1zID4gYSA+IC5wcmljZSB7DQogICAgICAgIG1hcmdpbjogMDsNCiAgICAgICAgcGFkZGluZzogOHB4IDAgMTBweDsNCiAgICAgICAgZm9udC1zaXplOiAxMnB4DQogICAgfQ0KDQogICAgICAgIC5taXRlbXMgPiBhID4gLnByaWNlID4gc3BhbiB7DQogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQogICAgICAgICAgICBtYXJnaW46IDAgMCAwIDVweDsNCiAgICAgICAgICAgIHBhZGRpbmc6IDA7DQogICAgICAgICAgICBjb2xvcjogIzk5OTsNCiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoDQogICAgICAgIH0NCg==');
parent.appendChild(style);

document.querySelector("li[style='background: #0953cc; height: 60px; padding-right:10px']").style.background = "#000";
document.querySelectorAll("button.navbar-toggler.side_navbar_toggler")[0].onclick = function () { Android.swipeOff(); };
document.querySelector("ul.iconf.navbar-nav").ontouchstart = function () { Android.swipeOff(); };
document.querySelectorAll("button.navbar-toggler.side_navbar_toggler")[1].onclick = function () { Android.swipeOn(); };
document.querySelector("div[style='padding: 5px 3px;']").style.overflow = "hidden";
const ulist = document.querySelectorAll("i.iconf.ti-shopping-cart-full")[8];
ulist.classList.add("ti-link");
ulist.classList.remove("ti-shopping-cart-full");
const clist = document.querySelectorAll("i.iconf.ti-shopping-cart-full")[7];
clist.classList.add("ti-user");
clist.classList.remove("ti-shopping-cart-full");
const llist = document.querySelector(".nav_item i.iconf.ti-shopping-cart-full");
llist.classList.add("ti-new-window");
llist.classList.remove("ti-shopping-cart-full");
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
  } const nodeList = document.querySelectorAll("div.items.png");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.add("mitems"); nodeList[i].classList.remove("items");
  };
}
