const root = document.getElementById("root");

const app = {
  name:"h1",
  inner:"hey i am heading one from vikas",
};

function customRender(element, target) {
  const elem = document.createElement(element.name);
elem.innerHTML=element.inner;
target.appendChild(elem)
}

customRender(app,root);

// react somewhere makes this syntax of our elemet which we tell readtc to display 