submitButton.addEventListener('click', function () {
    const alldata = JSON.parse(localStorage.getItem("saveddata")) || []
    const data = {
        name: nameInput.value,
        email: emailInput.value,
        comment: commentInput.value,
    }
    console.log(data)
    alldata.push (data)
    localStorage.setItem("saveddata", JSON.stringify(alldata))
})