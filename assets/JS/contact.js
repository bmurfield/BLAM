const alldata = JSON.parse(localStorage.getItem("saveddata")) || []

console.log(alldata)

for(i = 0; i < alldata.length; i++) {
    const data = alldata[i];

    const newLi = document.createElement("li");
    newLi.setAttribute("class", "row");
    const newH4 = document.createElement("h4");
    newH4.setAttribute("class", "col-4 text-wrap");
    const newH5 = document.createElement("h4");
    newH5.setAttribute("class", "col-4 text-wrap");
    const newH6 = document.createElement("h6");
    newH6.setAttribute("class", "col-4 text-wrap");

    newH4.textContent = data.name;
    newH5.textContent = data.email;
    newH6.textContent = data.comment;

    newLi.appendChild(newH4);
    newLi.appendChild(newH5);
    newLi.appendChild(newH6);
  
    dataList.appendChild(newLi);

}