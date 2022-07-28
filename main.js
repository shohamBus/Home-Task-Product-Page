//     Like Button

const btnno = document.querySelector(".no");
const btnyes = document.querySelector(".yes");
function Toggle(num) {
  if (num == 1) {
    btnno.style.display = "none";
    btnyes.style.display = "block";
  } else {
    btnno.style.display = "block";
    btnyes.style.display = "none";
  }
}

//sizes
// const getData = async () => {
//   fetch("db.php").then((res) => console.log(res));
// };

// getData();
const size = document.querySelectorAll(".size");
function Size(event, num) {
  const photos = [
    {
      "id": 1,
      "model": 86680059900,
      "0": "./images1/main1.png",
      "1": "./images1/sub1.png",
      "2": "./images1/sub2.png",
      "3": "./images1/main2.png",
      "4": "./images1/sub3.png",
      "5": "./images1/sub4.png",
    },
    {
      "id": 2,
      "model": 11111111111,
      "0": "./images2/main1.png",
      "1": "./images2/sub1.png",
      "2": "./images2/sub2.png",
      "3": "./images2/main2.png",
      "4": "./images2/sub3.png",
      "5": "./images2/sub4.png",
    },
    {
      "id": 3,
      "model": 22222222222,
      "0": "./images3/main1.png",
      "1": "./images3/sub1.png",
      "2": "./images3/sub2.png",
      "3": "./images3/main2.png",
      "4": "./images3/sub3.png",
      "5": "./images3/sub4.png",
    },
    {
      "id": 4,
      "model": 33333333333,
      "0": "./images4/main1.png",
      "1": "./images4/sub1.png",
      "2": "./images4/sub2.png",
      "3": "./images4/main2.png",
      "4": "./images4/sub3.png",
      "5": "./images4/sub4.png",
    },
  ];
  const zoom = document.querySelectorAll(".zoom");
  const photo = document.querySelectorAll(".photo");
  const model = document.getElementById("model");
  const carusel = document.querySelectorAll(".carousel__slide");
  for (let i = 0; i < size.length; i++) {
    if (i == num) {
      const updatePrice = event.target.lastElementChild.innerHTML;
      size[num].style.fontWeight = "bold";
      price = document.querySelector(".price");
      price.innerHTML = updatePrice;
      model.innerHTML = photos[num].model;
      carusel.forEach(
        (v, i) =>
          (v.firstElementChild.src = `http://127.0.0.1:3000/${photos[num][i]}`)
      );
      photo.forEach((v, i) => {
        (v.src = photos[num][i]),
          (zoom[
            i
          ].style.cssText = `background-image: url(${photos[num][i]}); background-position: 21.6418% 11.4428%`);
      });
    } else {
      size[i].style.fontWeight = "300";
    }
  }
}

//counter

let input = document.querySelector(".input-text");
function Counter(act) {
  if (act === "increment" && input.value != 10) {
    input.value = +input.value + 1;
  }
  if (act === "decrement" && input.value != 0) {
    input.value = +input.value - 1;
  }
}

//hover zoom
function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}

//content

function Content(content) {
  det = document.querySelector(".details");
  del = document.querySelector(".delivery");
  if (content == "details") {
    del.style.display = "none";
    det.style.display = "block";
  } else {
    det.style.display = "none";
    del.style.display = "block";
  }
}
// bottom - border;
