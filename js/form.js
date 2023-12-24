

// JavaScript time
var current_fs, next_fs, previous_fs; // fieldsets
var left, opacity, scale; // fieldset properties which we will animate
var animating; // flag to prevent quick multi-click glitches

document.querySelectorAll(".next").forEach(function(element) {
  element.addEventListener("click", function() {
    if (animating) return false;
    animating = true;

    current_fs = this.parentElement;
    next_fs = this.parentElement.nextElementSibling;

    // activate next step on progressbar using the index of next_fs
    document.querySelectorAll("fieldset").forEach(function(fieldset, index) {
      if (fieldset === next_fs) {
        document.querySelectorAll("#progressbar li")[index].classList.add("active");
      }
    });

    // show the next fieldset
    next_fs.style.display = "block";

    // hide the current fieldset with style
    var animationInterval = setInterval(function() {
      current_fs.style.opacity -= 0.01;

      // as the opacity of current_fs reduces to 0 - stored in "now"
      // 1. scale current_fs down to 80%
      scale = 1 - (1 - current_fs.style.opacity) * 0.2;
      // 2. bring next_fs from the right(50%)
      left = (current_fs.style.opacity * 50) + "%";
      // 3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - current_fs.style.opacity;
      current_fs.style.transform = 'scale(' + scale + ')';
      next_fs.style.left = left;
      next_fs.style.opacity = opacity;

      if (current_fs.style.opacity <= 0) {
        current_fs.style.display = 'none';
        animating = false;
        clearInterval(animationInterval);
      }
    }, 5);
  });
});

document.querySelectorAll(".previous").forEach(function(element) {
  element.addEventListener("click", function() {
    if (animating) return false;
    animating = true;

    current_fs = this.parentElement;
    previous_fs = this.parentElement.previousElementSibling;

    // de-activate current step on progressbar
    document.querySelectorAll("fieldset").forEach(function(fieldset, index) {
      if (fieldset === current_fs) {
        document.querySelectorAll("#progressbar li")[index].classList.remove("active");
      }
    });

    // show the previous fieldset
    previous_fs.style.display = "block";

    // hide the current fieldset with style
    var animationInterval = setInterval(function() {
      current_fs.style.opacity -= 0.01;

      // as the opacity of current_fs reduces to 0 - stored in "now"
      // 1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - current_fs.style.opacity) * 0.2;
      // 2. take current_fs to the right(50%) - from 0%
      left = ((1 - current_fs.style.opacity) * 50) + "%";
      // 3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - current_fs.style.opacity;
      current_fs.style.left = left;
      previous_fs.style.transform = 'scale(' + scale + ')';
      previous_fs.style.opacity = opacity;

      if (current_fs.style.opacity <= 0) {
        current_fs.style.display = 'none';
        animating = false;
        clearInterval(animationInterval);
      }
    }, 5);
  });
});

document.querySelectorAll(".submit").forEach(function(element) {
  element.addEventListener("click", function() {
    return false;
  });
});