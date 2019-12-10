function openLecture(evt, lectureName) {
  // Declare all variables
  var i, tabcontent, category_btn;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  category_btn = document.getElementsByClassName("category_btn");
  for (i = 0; i < category_btn.length; i++) {
    category_btn[i].className = category_btn[i].className.replace(
      " active",
      ""
    );
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(lectureName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
