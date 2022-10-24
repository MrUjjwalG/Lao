if (document.body.offsetWidth > 768) {
  var Str =
    '<!DOCTYPE html> <html> <head> <title>Check if an element is a div in JavaScript.</title> </head> <body style="text-align: center; background-color: black"> <div style="overflow: hidden; display: flex; justify-content: center"> <h2 style="color: red; float: left">LAO </h2> <h2 style="color: white; float: left">APP</h2> </div> <p style="color: white">Your device does not support LAO APP</p> </body> </html>';
  var newHTML = document.open("text/html", "replace");
  newHTML.write(Str);
  newHTML.close();
} else {
  var notification = JSON.stringify({
    id: 2,
    startDate: "2022-06-24T01:00:00Z",
    endDate: "2022-07-05T00:00:00Z",
    count: 0,
    url: "https://www.laoapp.in/",
    image:
      "https://laocpanel.laobp.in/Content/banner_image/awpju1z2.xolcdfscdfshbdvfkj.png",
    title: "Shop your desires",
    message: "Shop your desires from 5th of July 2022",
  });
  Android.addNotification(notification);

  var var1 = $(
    "li[style='background: #0953cc; height: 60px; padding-right:10px']"
  )[0];
  if (var1) {
    var1.style.background = "#000";
  }
  var var2 = $("div[style='padding: 5px 3px;']")[0];
  if (var2) {
    var2.style.overflow = "hidden";
  }
  var var3 = $(".cat_slider1")[0];
  if (var3) {
    var3.style.setProperty("margin-top", "10px", "important");
  }

  var searchBox = $("#ctl00_TextBox1")[0];
  if (searchBox) {
    searchBox.type = "search";
    $("#ctl00_TextBox1").change(function () {
      $(this).trigger("blur");
    });
  }

  var ulist = document.querySelectorAll("i.iconf.ti-shopping-cart-full")[8];
  var logoutBtn = document.querySelector("#ctl00_lnkSignOut");
  if (logoutBtn) {
    logoutBtn.onclick = function () {
      Android.logOut();
    };
  }

  var logoutBtn1 = document.querySelector("#ctl00_lnkSignOut1");
  if (logoutBtn1) {
    logoutBtn1.onclick = function () {
      Android.logOut();
    };
  }

  var userP = document.querySelector(
    "#aspnetForm > header > div.middle-header.dark_skin > div > div > ul > li:nth-child(3) > div"
  );
  if (userP) {
    userP.style.width = "13em";
  }

  if (ulist) {
    ulist.classList.add("ti-link");
    ulist.classList.remove("ti-shopping-cart-full");
  }
  var clist = document.querySelectorAll("i.iconf.ti-shopping-cart-full")[7];
  if (clist) {
    clist.classList.add("ti-user");
    clist.classList.remove("ti-shopping-cart-full");
  }
  var llist = document.querySelector(".nav_item i.iconf.ti-shopping-cart-full");
  if (llist) {
    llist.classList.add("ti-new-window");
    llist.classList.remove("ti-shopping-cart-full");
  }
  if (window.location.href.includes("rsltNew.aspx?id")) {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    document.querySelector("input#ctl00_TextBox1").value = id;
    document
      .querySelector("div.main_content > div > div > div")
      .style.setProperty("margin-left", "", "important");
  } else if (window.location.href.includes("my_account.aspx")) {
    document
      .querySelector("div.col-md-2.offset-10")
      .classList.remove("offset-10");
  } else if (window.location.href.includes("CheckOut.aspx")) {
    document.querySelector(
      "#aspnetForm > div.main_body > div.main_content > div.section > div > div > div.col-md-8 > div.order_review.nn > div > div > div.col-sm-9"
    ).style.padding = "0px 15px";
    document
      .querySelector(
        "#aspnetForm > div.main_body > div.main_content > div.section > div > div > div.col-md-8 > div.order_review.nn"
      )
      .style.setProperty("overflow-x", "scroll", "important");
    document.querySelector(
      "div.payment_option > div > div:nth-child(3) > div:nth-child(3)"
    ).style.visibility = "hidden";
    document.querySelector(
      "div.payment_option > div > div:nth-child(3) > div:nth-child(2)"
    ).style.visibility = "hidden";
  } else if (window.location.href.includes("www.laoapp.in/Address.aspx")) {
    document.querySelector("#ctl00_ContentPlaceHolder1_lnkAddNewAddress").href =
      "javascript:void(0)";
    document.querySelector(
      "#ctl00_ContentPlaceHolder1_lnkAddNewAddress"
    ).onclick = function () {
      Android.Add_new_address();
    };
  } else if (window.location.href.includes("custLogin.aspx")) {
    var numbox = $("#ctl00_ContentPlaceHolder1_txtUserName")[0];
    numbox.type = "tel";
    numbox.onclick = function () {
      if (numbox.value == "") {
        Android.getPhnHint();
      }
    };
    document.querySelector("div.login_footer.form-group").onclick =
      function () {
        if (
          document.getElementById("ctl00_ContentPlaceHolder1_txtUserName")
            .value !== ""
        ) {
          Android.Show_loading();
          Android.Start_Sms();
        }
      };
  } else if (window.location.href.includes("ResetPassword.aspx")) {
    document
      .querySelector("#ctl00_ContentPlaceHolder1_lnkOtpVerify")
      .classList.remove("btn-fill-out");
  } else if (
    window.location.href.includes("custRegistration.aspx") ||
    window.location.href.includes("refreg.aspx")
  ) {
    var numbox = $("#ctl00_ContentPlaceHolder1_txtmobile")[0];
    numbox.type = "tel";
    numbox.onclick = function () {
      if (numbox.value == "") {
        Android.getPhnHint();
      }
    };
    if (!window.location.href.includes("refreg.aspx")) {
      document
        .querySelector("#ctl00_ContentPlaceHolder1_lnkRegisterBtn")
        .style.setProperty("color", "#fff");
    }
    document.querySelector(
      "#ctl00_ContentPlaceHolder1_UpdatePanel1 > div > div > div > div > div > div > div:nth-child(7)"
    ).onclick = function () {
      if (
        document.querySelector("#ctl00_ContentPlaceHolder1_chkterm").checked
      ) {
        Android.Start_Sms();
      }
    };
  } else if (window.location.href.includes("locationsN.aspx")) {
    if (document.querySelector("#ctl00_ContentPlaceHolder1_ddlState")) {
      Android.GetLocation();
    }
  } else if (window.location.href.includes("InvoiceInState.aspx")) {
    document.querySelector("body").onfocus = function () {
      if (document.body.offsetWidth < 385) {
        document.querySelector("body").style.zoom = "50%";
      } else if (document.body.offsetWidth < 310) {
        document.querySelector("body").style.zoom = "40%";
      }
    };
    Android.Set_bill(document.querySelector("#OrdrNum").innerHTML);
    document.querySelector(
      "#no-print > div > input.btn.btn-primary.btn-sm"
    ).onclick = function () {
      Android.Print();
    };
    document.querySelector(
      "#no-print > div > input.btn.btn-danger.btn-sm"
    ).onclick = function () {
      history.back();
    };
  } else if (window.location.href.includes("ItemDetail.aspx")) {
    if (
      document.querySelectorAll(
        "#ctl00_ContentPlaceHolder1_DropDownList2 > option"
      ).length == 1
    ) {
      if (
        document
          .querySelectorAll(
            "#ctl00_ContentPlaceHolder1_DropDownList2 > option"
          )[0]
          .innerHTML.includes("Natural")
      ) {
        document.querySelector(
          "#ctl00_ContentPlaceHolder1_UpdatePanel2 > div > div.col-lg-8.col-sm-12 > div > div > div:nth-child(7)"
        ).style.display = "none";
      }
    }
  } else if (window.location.href.includes("Seller.aspx")) {
    document
      .querySelector("#ctl00_ContentPlaceHolder1_UpdatePanel1 > div")
      .style.setProperty("margin", "0 -15px", "important");
  }

  if (
    window.location.href === "https://www.laoapp.in/" ||
    window.location.href.includes("https://www.laoapp.in/Default.aspx")
  ) {
    var blist = document.querySelectorAll(".background_bg.carousel-item");
    for (var i = 0; i < blist.length; i++) {
      var after = document.createElement("div");
      after.style.setProperty(
        "background-image",
        getComputedStyle(blist[i])["background-image"]
      );
      after.style.setProperty("background-position", "center");
      after.style.setProperty("position", "absolute");
      after.style.setProperty("top", "0px");
      after.style.setProperty("left", "0px");
      after.style.setProperty("background-repeat", "no-repeat");
      after.style.setProperty("width", "100%");
      after.style.setProperty("background-size", "100%");
      after.style.setProperty("height", "100%");

      var before = document.createElement("div");
      before.style.setProperty(
        "background-image",
        getComputedStyle(blist[i])["background-image"]
      );
      before.style.setProperty("filter", "blur(3px)");
      before.style.setProperty("width", "110%");
      before.style.setProperty("background-size", "cover");
      before.style.setProperty("background-repeat", "no-repeat");
      before.style.setProperty("height", "100%");
      before.style.setProperty("margin", "0 -10%");

      blist[i].style.setProperty("height", "125px");
      blist[i].style.setProperty("background", "#ffffff");
      blist[i].appendChild(before);
      blist[i].appendChild(after);
    }
    var alist = document.querySelectorAll("div.items.png");
    for (var i = 0; i < alist.length; i++) {
      alist[i].style.setProperty("height", "auto", "important");
      var child = alist[i].querySelectorAll("a");
      if (child.length % 2 != 0) {
        alist[i].style.setProperty("overflow-x", "scroll", "important");
        for (var c = 0; c < child.length; c++) {
          child[c].parentNode.style.setProperty(
            "flex-wrap",
            "unset",
            "important"
          );
          child[c].parentNode.style.setProperty(
            "justify-content",
            "unset",
            "important"
          );
          child[c].querySelector("img").style.height = "110px";
          child[c].querySelector("img").style.width = "110px";
          child[c]
            .querySelector("img")
            .style.setProperty("object-fit", "cover", "important");
          child[c]
            .querySelector("img")
            .style.setProperty("max-width", "unset", "important");
        }
      }
    }
  } else if (
    window.location.href === "https://www.laoapp.in/privacepolicey.aspx"
  ) {
    var uls = document.querySelectorAll("ul");
    var lis = document.querySelectorAll("li");
    for (var i = 0; i < uls.length; i++) {
      uls[i].style.setProperty("margin-left", "unset", "important");
    }
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.setProperty("margin-left", "unset", "important");
    }
  } else if (window.location.href === "https://www.laoapp.in/my_account.aspx") {
    var imgsc = document.querySelectorAll(".card-body .text-center");
    for (var i = 0; i < imgsc.length; i++) {
      imgsc[i].style.setProperty("width", "50%", "important");
      imgsc[i].style.setProperty("padding", "25px", "important");
    }
  }
  $("a[data-target='#sharemyModal']")
    .attr("data-toggle", "")
    .attr("data-target", "")
    .click(function () {
      Android.Share(
        "https://play.google.com/store/apps/details?id=com.laoproject.laoapp&referrer=r=" +
          document.querySelector("#navbarSidetoggle > ul > li.share > a > span")
            .innerHTML
      );
    });
  $("div[data-target='#sharemyModal']")
    .attr("data-toggle", "")
    .attr("data-target", "")
    .click(function () {
      Android.Share(
        "https://play.google.com/store/apps/details?id=com.laoproject.laoapp&referrer=r=" +
          document.querySelector("#navbarSidetoggle > ul > li.share > a > span")
            .innerHTML
      );
    });
}
