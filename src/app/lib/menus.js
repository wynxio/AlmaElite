export const gotoAboutUs = (event) =>{
    event.preventDefault();
    const target = document.getElementById('aboutus');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    }
    closeMobileMenu();
}

export const gotoWhyUs = (event) =>{
    event.preventDefault();
    const target = document.getElementById('WhyAlma');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    }
    closeMobileMenu();
}

export const gotoHowWeWork = (event) =>{
    event.preventDefault();
    const target = document.getElementById('How-We-Work');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    }
    closeMobileMenu();
}
export const gotoContactUs = (event) =>{
    event.preventDefault();
    const target = document.getElementById('ContactUs');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    }
    closeMobileMenu();
}
export const gotoHome = (event) =>{
    
    event.preventDefault();
    const target = document.getElementById('originalContent');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    }
    closeMobileMenu();
}
export const closeMobileMenu = () =>{
 
}
export const closeSideBarIcon = () =>{
        document.getElementById("mobilemenusidebarclose")?.click(); 
}

function changeLanguageToEnglish() {
      document.getElementById("a_changeEnglish").className = "active";
      document.getElementById("a_changeArabic").className = "";

      document.querySelectorAll('[data-lang="en"]').forEach((el) => {
        el.classList?.remove("nodisplay");
        el.classList?.remove("rtlDisplay");
      });

      // Show all Arabic elements
      document.querySelectorAll('[data-lang="ar"]').forEach((el) => {
        el.classList?.add("nodisplay");
        el.classList?.add("rtlDisplay");
      });
    }
    function changeLanguageToArabic() {
      document.getElementById("a_changeEnglish").className = "";
      document.getElementById("a_changeArabic").className = "active";

      document.querySelectorAll('[data-lang="en"]').forEach((el) => {
        el.classList?.add("nodisplay");
        el.classList?.remove("rtlDisplay");
      });

      // Show all Arabic elements
      document.querySelectorAll('[data-lang="ar"]').forEach((el) => {
        el.classList?.remove("nodisplay");
        el.classList?.add("rtlDisplay");
      });
    }