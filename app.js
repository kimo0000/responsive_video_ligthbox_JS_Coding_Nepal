const wrapperEl = document.querySelector(".wrapper"),
  videosEl = wrapperEl.querySelectorAll(".video video"),
  playIcon = wrapperEl.querySelectorAll(".video i"),
  popupEl = document.querySelector(".popup"),
  popupVideo = popupEl.querySelector(".video_popup video"),
  closeBtn = popupEl.querySelector(".close");

const handleVideo = (e) => {
  // console.log(e.target.src);
  popupEl.classList.add("active");
  wrapperEl.classList.add("hide");
  popupVideo.src = e.target.src;
};

videosEl.forEach((video) => {
  video.addEventListener("click", handleVideo);
});

playIcon.forEach((play) => {
  play.addEventListener("click", (e) => {
    let videoTag = e.target.previousElementSibling;
    popupEl.classList.add("active");
    wrapperEl.classList.add("hide");
    popupVideo.src = videoTag.src;
  });
});

closeBtn.addEventListener("click", () => {
  popupVideo.pause();
  popupEl.classList.remove("active");
  wrapperEl.classList.remove("hide");
});
