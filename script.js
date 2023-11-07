
$(function () {

    function currentTime() {
    var currentDate = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(currentDate);
    }
  
    function updateTimeBlockColors() {
      var currentHour = dayjs().hour();
  
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    let saveBtn = document.querySelectorAll(".saveBtn")
  
    for (let i = 0; i < saveBtn.length; i++) {
      let btn = saveBtn[i]
      btn.addEventListener("click", function (save) {
      console.log("click")
      let click = save.target
      let descriptionEl = click.previousElementSibling
      let description = descriptionEl.value
      console.log(descriptionEl.value)
      let hourId = click.parentElement.id
      localStorage.setItem(hourId, description);
      })
    }
  
    function pullData() {
      let timeBlock = document.querySelectorAll(".time-block")
      for (let i = 0; i < timeBlock.length; i++) {
        let selectedBlock = timeBlock[i]
        let hourSelected = selectedBlock.id
        let planText = localStorage.getItem(hourSelected)
        let planEl = selectedBlock.querySelector(".description")
        planEl.value = planText
      }
    }
  
    currentTime()
    setInterval(currentTime, 1000)
  
    updateTimeBlockColors()
    setInterval(updateTimeBlockColors, 30000)
  
    pullData()
    
  
  
  });
  
  