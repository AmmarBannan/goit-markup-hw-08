(() => {
    const refs = {
      openSetting: document.querySelector(".setting-button"),
      bar: document.querySelector(".setting-bar"),
      closeSetting: document.querySelector(".exit-setting"),
    };
  
    refs.openSetting.addEventListener("click", toggleSetting);
    refs.closeSetting.addEventListener("click", toggleSetting);
  
    function toggleSetting() {
      refs.bar.classList.toggle("is-hidden");
    }
  })();