function prevAnim() {
  const watchCls = document.querySelector(".js-prev-watch").classList;
  const prevCls = document.querySelector(".prev-info-div").classList;

  AOS.init(); // Initialize AOS

  setInterval(() => {
    prevCls.add("prev-info-anim");
    watchCls.add("prev-watch-anim");
    setTimeout(() => {
      prevCls.remove("prev-info-anim");
      watchCls.remove("prev-watch-anim");
    }, 200);
  }, 10000);

  prevCls.add("prev-info-anim");
  watchCls.add("prev-watch-anim");
  setTimeout(() => {
    prevCls.remove("prev-info-anim");
    watchCls.remove("prev-watch-anim");
  }, 200);

  setInterval(() => {
    if (watchCls.contains("prev-watch-zoom")) {
      watchCls.remove("prev-watch-zoom");
    } else {
      watchCls.add("prev-watch-zoom");
    }
  }, 1000);
  watchCls.add("prev-watch-zoom");
}

function controlScroll() {
  const headCls = document.querySelector(".js-header").classList;
  const scrollElm = document.querySelector(".js-scroller");
  window.addEventListener("scroll", () => {
    if (!headCls.contains("header-scroll") && window.scrollY >= 300) {
      headCls.add("header-scroll");
      scrollElm.hidden = false;
      document.body.classList.add("body-scroll");
    } else if (headCls.contains("header-scroll") && window.scrollY < 300) {
      headCls.remove("header-scroll");
      scrollElm.hidden = true;
      document.body.classList.remove("body-scroll");
    }
  });
}

export { prevAnim, controlScroll };
