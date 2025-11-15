 setTimeout(() => {
      // document.getElementById("preloaderLogo").style.display = "none";
      // document.getElementById("originalContent").style.display = "block";

      document.getElementById("preloaderLogo").style.display = "none";
      document.getElementById("originalContent").classList.remove("hideOriginal");
      
    }, 2000);

    // function changeLanguageToEnglish() {
    //   document.getElementById("a_changeEnglish").className = "active";
    //   document.getElementById("a_changeArabic").className = "";

    //   document.querySelectorAll('[data-lang="en"]').forEach((el) => {
    //     el.classList?.remove("nodisplay");
    //     el.classList?.remove("rtlDisplay");
    //   });

    //   // Show all Arabic elements
    //   document.querySelectorAll('[data-lang="ar"]').forEach((el) => {
    //     el.classList?.add("nodisplay");
    //     el.classList?.add("rtlDisplay");
    //   });
    // }
    // function changeLanguageToArabic() {
    //   document.getElementById("a_changeEnglish").className = "";
    //   document.getElementById("a_changeArabic").className = "active";

    //   document.querySelectorAll('[data-lang="en"]').forEach((el) => {
    //     el.classList?.add("nodisplay");
    //     el.classList?.remove("rtlDisplay");
    //   });

    //   // Show all Arabic elements
    //   document.querySelectorAll('[data-lang="ar"]').forEach((el) => {
    //     el.classList?.remove("nodisplay");
    //     el.classList?.add("rtlDisplay");
    //   });
    // }