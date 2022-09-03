(() => {
    const refs = {
      openSetting: document.querySelector(".setting-button"),
      bar: document.querySelector(".mobile"),
      closeSetting: document.querySelector(".mobile__exit"),
    };
  
    refs.openSetting.addEventListener("click", toggleSetting);
    refs.closeSetting.addEventListener("click", toggleSetting);
  
    function toggleSetting() {
      refs.bar.classList.toggle("is-hidden");
    }
  })();