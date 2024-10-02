const alldata = JSON.parse(localStorage.getItem("saveddata")) || []

console.log(alldata)

for(i = 0; i < alldata.length; i++) {
    const data = alldata[i];

    const newLi = document.createElement("li");
    const newH4 = document.createElement("h4");
    const newH5 = document.createElement("h5");
    const newH6 = document.createElement("h6");

    newH4.textContent = data.name;
    newH5.textContent = data.email;
    newH6.textContent = data.comment;

    newLi.appendChild(newH4);
    newLi.appendChild(newH5);
    newLi.appendChild(newH6);
  
    dataList.appendChild(newLi);

}