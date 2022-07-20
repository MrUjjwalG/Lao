if (window.location.href === "https://www.laoapp.in/Default.aspx?aspxerrorpath=/Default.aspx") {
        Android.logOut();
        window.location.href = 'https://www.laoapp.in/';
    }
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
        image: "https://laocpanel.laobp.in/Content/banner_image/awpju1z2.xolcdfscdfshbdvfkj.png",
        title: "Shop your desires",
        message: "Shop your desires from 5th of July 2022",
    });
    Android.addNotification(notification);
    try {
        document.querySelector(
            "li[style='background: #0953cc; height: 60px; padding-right:10px']"
        ).style.background = "#000";
        document.querySelector("div[style='padding: 5px 3px;']").style.overflow =
            "hidden";
        document
            .querySelector(".cat_slider1")
            .style.setProperty("margin-top", "10px", "important");
    } catch { }
    const ulist = document.querySelectorAll("i.iconf.ti-shopping-cart-full")[8];

    const logoutBtn = document.querySelector("#ctl00_lnkSignOut");
    if (logoutBtn) {
        logoutBtn.onclick = function () {
            Android.logOut();
        };
    }

    const logoutBtn1 = document.querySelector("#ctl00_lnkSignOut1");
    if (logoutBtn1) {
        logoutBtn1.onclick = function () {
            Android.logOut();
        };
    }


    const userP = document.querySelector("#aspnetForm > header > div.middle-header.dark_skin > div > div > ul > li:nth-child(3) > div");
    if (userP) {
        userP.style.width = "13em";
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
    const llist = document.querySelector(
        ".nav_item i.iconf.ti-shopping-cart-full"
    );
    if (llist) {
        llist.classList.add("ti-new-window");
        llist.classList.remove("ti-shopping-cart-full");
    }
    if (window.location.href.includes("rslt.aspx?id")) {
        var url = new URL(window.location.href);
        var id = url.searchParams.get("id");
        document.querySelector("input#ctl00_TextBox1").value = id;
    } else if (window.location.href.includes("my_account.aspx")) {
        document
            .querySelector("div.col-md-2.offset-10")
            .classList.remove("offset-10");
    } else if (window.location.href.includes("CheckOut.aspx")) {
        document.querySelector("#aspnetForm > div.main_body > div.main_content > div.section > div > div > div.col-md-8 > div.order_review.nn > div > div > div.col-sm-9").style.padding = "0px 15px";
        document.querySelector("#aspnetForm > div.main_body > div.main_content > div.section > div > div > div.col-md-8 > div.order_review.nn").style.setProperty("overflow-x", "scroll", "important");
        document.querySelector("div.payment_option > div > div:nth-child(3) > div:nth-child(3)").style.visibility = "hidden";
        document.querySelector("div.payment_option > div > div:nth-child(3) > div:nth-child(2)").style.visibility = "hidden";
    } else if (window.location.href.includes("www.laoapp.in/Address.aspx")) {
        document.querySelector('#ctl00_ContentPlaceHolder1_lnkAddNewAddress').href = "javascript:void(0)";
        document.querySelector('#ctl00_ContentPlaceHolder1_lnkAddNewAddress').onclick = function () {
            Android.Add_new_address();
        }
    } else if (window.location.href.includes("https://www.laoapp.in/custLogin.aspx")) {
        document.querySelector("div.login_footer.form-group").onclick = function () {
            if (document.getElementById("ctl00_ContentPlaceHolder1_txtUserName").value !== "") {
                Android.Show_loading();
            }
        }
    } else if (window.location.href.includes("https://www.laoapp.in/ResetPassword.aspx")) {
        document.querySelector("#ctl00_ContentPlaceHolder1_lnkOtpVerify").classList.remove("btn-fill-out");
    }
    if (
        window.location.href === "https://www.laoapp.in/" ||
        window.location.href === "https://www.laoapp.in/Default.aspx"
    ) {
        const blist = document.querySelectorAll(".background_bg.carousel-item");
        for (let i = 0; i < blist.length; i++) {
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
        const alist = document.querySelectorAll("div.items.png");
        for (let i = 0; i < alist.length; i++) {
            alist[i].style.setProperty("height", "auto", "important");
            let child = alist[i].querySelectorAll("a");
            if (child.length % 2 != 0) {
                alist[i].style.setProperty("overflow-x", "scroll", "important");
                for (let c = 0; c < child.length; c++) {
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
        for (let i = 0; i < uls.length; i++) {
            uls[i].style.setProperty("margin-left", "unset", "important");
        }
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.setProperty("margin-left", "unset", "important");
        }
    } else if (window.location.href === "https://www.laoapp.in/my_account.aspx") {
        var imgsc = document.querySelectorAll(".card-body .text-center");
        for (let i = 0; i < imgsc.length; i++) {
            imgsc[i].style.setProperty("width", "50%", "important");
            imgsc[i].style.setProperty("padding", "25px", "important");
        }
    }
}
