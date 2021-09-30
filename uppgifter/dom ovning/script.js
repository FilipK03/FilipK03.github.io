/* const body = document.body;
const div = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const a = document.createElement("a");
const i = document.createElement("i");
const span = document.createElement("span");


div.setAttribute("class", "post");

div2.setAttribute("class", "post-meta");
div3.setAttribute("class", "post-content");
a.setAttribute("href", "#");



body.append(div);
div.appendChild(div2);
div2.appendChild(a);
a.append("Alma Andersson ");
a.appendChild(i);
i.append(" @alma");
span.append("2021-09-24 08:38:23");
div2.appendChild(span);


div3.append("Hej på dig!");
div.appendChild(div3);

document.body.append( createTestElement('Hej') );
document.body.append( createTestElement('Tja') );
*/


/*
document.body.appendChild( createPostElement('Alma', 'Andersson', ' @alma', new Date(), 'Hej på dig!') );
document.body.appendChild( createPostElement('Pelle', 'Pärsson', 'pelle', new Date(), 'Jag är pelle..') );

function createPostElement(firstname, lastname, username, date, content) {

  const body = document.body;
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const a = document.createElement("a");
  const i = document.createElement("i");
  const span = document.createElement("span");
  
  
  div.setAttribute("class", "post");
  
  div2.setAttribute("class", "post-meta");
  div3.setAttribute("class", "post-content");
  a.setAttribute("href", "#");
  
  
  
  body.append(div);
  div.appendChild(div2);
  div2.appendChild(a);
  a.append(firstname + " " + lastname);
  a.appendChild(i);
  i.append(username);
  span.append(date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate());
  div2.appendChild(span);
  
  
  div3.append(content);
  div.appendChild(div3);
  


  return div;

}
*/


document.body.appendChild( createPostElement('Alma', 'Andersson', ' @alma', new Date(), 'Hej på dig!') );
document.body.appendChild( createPostElement('Pelle', 'Pärsson', 'pelle', new Date(), 'Jag är pelle..') );

function createPostElement(firstname, lastname, username, date, content) {

  const body = document.body;
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const a = document.createElement("a");
  const i = document.createElement("i");
  const span = document.createElement("span");
  
  
  div.setAttribute("class", "post");
  
  div2.setAttribute("class", "post-meta");
  div3.setAttribute("class", "post-content");
  a.setAttribute("href", "#");
  
  
  
  body.append(div);
  div.appendChild(div2);
  div2.appendChild(a);
  a.append(firstname + " " + lastname);
  a.appendChild(i);
  i.append(username);
  span.append(date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate());
  div2.appendChild(span);
  
  
  div3.append(content);
  div.appendChild(div3);
  


  return div;

}