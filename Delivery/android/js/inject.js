document.querySelector(".navbar").style.setProperty('background-color', '#F9A825', 'important');
document.querySelector(".sidebar .logo").style.setProperty('background-color', '#F9A825', 'important');

if (document.querySelector("#navbarDropdownProfile > p")) {
    Android.setVendorName(document.querySelector("#navbarDropdownProfile > p").innerText);
}

if (window.location.href.includes("admin/Accepted_Order") || window.location.href.includes("admin/New_Order")) {
    var uls = document.querySelectorAll("div.content > div.row > div > div > div.card-body > div > div:nth-child(4) > p > span");

    var uls2 = document.querySelectorAll("div.content > div.row > div > div > div.card-body > div > div:nth-child(3) > p > span");
    var uls3 = document.querySelectorAll("div.content > div.row > div > div > div.card-body > div > div:nth-child(5) > p > span");
    for (var i = 0; i < uls.length; i++) {
        var addr = uls[i].innerText;
        if (addr.includes("-->")) {
            console.log(addr.split("[")[1].split("]")[0]);
            var addrf = addr.split("--> [");
            var mySpan = document.createElement("a");
            mySpan.href = "https://maps.google.com/?q=" + addrf[1].split("]")[0];
            mySpan.innerHTML = addrf[0];
            uls[i].parentNode.replaceChild(mySpan, uls[i]);
        }
    }

    for (var i = 0; i < uls2.length; i++) {
        var addr = uls2[i].innerText;
        var mySpan = document.createElement("a");
        mySpan.href = "tel:" + addr;
        mySpan.innerHTML = addr;
        uls2[i].parentNode.replaceChild(mySpan, uls2[i]);
    }

    for (var i = 0; i < uls3.length; i++) {
        var addr = uls3[i].innerText;
        var mySpan = document.createElement("a");
        mySpan.href = "tel:" + addr;
        mySpan.innerHTML = addr;
        uls3[i].parentNode.replaceChild(mySpan, uls3[i]);
    }

    var state = document.querySelectorAll("div.content > div.row > div > div > div.card-footer.text-right.pull-right > div > p");

    for (var i = 0; i < state.length; i++) {
        var stat = state[i].innerText;
        if (stat == "Waiting for pick the order......") {
            var shop = state[i].parentNode.parentNode.parentNode.querySelector("div.card-body > div > div:nth-child(2) > p > span");
            var odn = state[i].parentNode.parentNode.parentNode.querySelector(".card-header").innerText.split(": ")[1];
            var vlat = state[i].parentNode.parentNode.parentNode.querySelector("input[name=vlat]");
            var vlong = state[i].parentNode.parentNode.parentNode.querySelector("input[name=vlong]");

            if (vlat && vlong) {
            var lat_long = vlat.value + "," + vlong.value;
                var mySpan = document.createElement("a");
                mySpan.classList.add("btn", "btn-sm", "btn-success");
                mySpan.innerHTML = "Pick UP";
                mySpan.href = "javascript:Android.pickup('"+0+"=="+odn + "')";
                state[i].parentNode.replaceChild(mySpan, state[i]);

                var mySpan2 = document.createElement("a");
                mySpan2.innerHTML = shop.innerText;
                mySpan2.href = "https://maps.google.com/?q=" + lat_long;
                shop.parentNode.replaceChild(mySpan2, shop);
            }
        }
    }
}
