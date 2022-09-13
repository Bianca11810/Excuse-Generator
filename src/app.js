/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello!");
};

let generateExcuse = () => {
  let pronoun = ["the", "they"];
  let subject = ["husband", "racoon", "loki", "driver", "mom"];
  let action = ["ran my", "drove my", "threw my", "hid my", "hit my"];
  let posession = ["toe", "laptop", "dog", "mom", "body"];
  let where = ["home", "work", "chris office", "empire state building"];

  let pronounindex = Math.floor(Math.random() * pronoun.length);
  let subjectindex = Math.floor(Math.random() * subject.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let posessionindex = Math.floor(Math.random() * posession.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounindex] +
    " " +
    subject[subjectindex] +
    " " +
    action[actionindex] +
    " " +
    posession[posessionindex] +
    " " +
    where[whereindex]
  );
};
