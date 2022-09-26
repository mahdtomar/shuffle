const name = document.querySelector(".name-field");
const donation = document.querySelector(".value-field");
const add = document.querySelector(".add");
const list = document.querySelector(".list");
const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
const settings = document.querySelector(".settings");
const shuffle = document.querySelector(".shuffle");
const display = document.querySelector(".display");
list.innerHTML = window.localStorage.getItem("list");
const clearAll = document.querySelector(".clearAll");
// window.onload()
add.addEventListener("click", () => {
  if (name.value == "" || donation.value == "") {
    alert("please enter a name and donation value");
  } else {
    let listArray = [];
    let bbj = [];

    listArray = list.children;
    for (const key in listArray) {
      let i = 0;
      bbj.unshift(listArray[key]);
      i++;
    }
    let currentSettings = settings.cloneNode("true");
    let currentDiv = div.cloneNode("true");
    let currentP = p.cloneNode("true");
    let currentSpan = span.cloneNode("true");

    currentSpan.innerHTML = donation.value;
    currentSpan.classList.add("gold");
    currentP.classList.add("donator");
    currentP.innerHTML = name.value;
    currentDiv.appendChild(currentP);
    currentDiv.appendChild(currentSpan);
    currentDiv.appendChild(currentSettings);
    list.appendChild(currentDiv);

    currentSettings.childNodes[1].addEventListener("click", (e) => {
      window.localStorage.removeItem("list");
      e.target.parentElement.parentElement.remove();
      console.log(e.target);
    });
    window.localStorage.setItem("list", list.innerHTML);
  }
});

shuffle.addEventListener("click", () => {
  display.innerHTML = "";
  let totalDonatinos = document.querySelectorAll(".gold");
  let totalDonators = document.querySelectorAll(".donator");
  let arrayTotalDonations = Array.from(totalDonatinos);
  let arrayTotalDonators = Array.from(totalDonators);
  let finalList = [];
  for (i = 0; i < arrayTotalDonations.length; i++) {
    for (k = 0; k < +arrayTotalDonations[i].textContent; k++) {
      let currentP = p.cloneNode();
      currentP.classList.add("competitor");
      currentP.innerHTML = `>${arrayTotalDonations[i].textContent} ${arrayTotalDonators[i].textContent}`;
      console.log(k);
      finalList.push(currentP);
    }
    // console.log(+arrayTotalDonations[i].textContent)
  }

  // console.log(arrayTotalDonators[2]);
  // console.log(arrayTotalDonations[2]);
  let sum = 0;
  Array.from(totalDonatinos).map((e) => {
    sum += +e.textContent;
    return sum;
  });
  console.log(sum);

  function shuffler(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  console.log(finalList);

  shuffler(finalList);
  for (l = 0; l < finalList.length; l++) {
    // finalList[l].textContent = `${l}${finalList[l]}`
    // finalList[l].innerHTML = `${l}${finalList[l]}`
    let currentSpan = span.cloneNode();
    currentSpan.textContent = `${l + 1}${finalList[l].textContent}`;
    // let currentP = p.cloneNode()
    display.appendChild(currentSpan);
    // display.appendChild(currentP)
  }
  // finalList.map((ele,index)=>{
  //   ele = `${ele}`
  //   display.appendChild(ele)
  // })
  // finalList.forEach((element,index) => {
  //   display.appendChild(element);
  // });
  let sumContainer = p.cloneNode();
  sumContainer.innerHTML = ` the sum is: ${sum}`;
  display.appendChild(sumContainer);
});

clearAll.addEventListener("click", () => {
  window.localStorage.clear();
  list.innerHTML = "";
  display.innerHTML = "";
});
