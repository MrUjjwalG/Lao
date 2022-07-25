$("#ctl00_ContentPlaceHolder1_txtUserName")[0].type="tel";
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
