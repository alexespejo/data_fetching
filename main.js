function fetchData() {
  const url = "http://127.0.0.1:5001/"; //change this
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let obj = data.people; //data = {'people': [object, object]}
      console.log(obj);
      const dataContainer = document.getElementById("data");

      //I have no idea what you're fetching from python so I assumed you're passing a array with nested objects ex. [{},{},{},{}]
      for (let i = 0; i < obj.length; i++) {
        //yes you have to create individual elements for every variable
        let child = document.createElement("div");
        let childName = document.createElement("head");
        let childStatus = document.createElement("p");
        let childDate = document.createElement("p");

        childName.innerHTML = obj[i].name;
        child.append(childName); //Create name element

        childStatus.innerHTML = `Door: ${obj[i].status ? "Open" : "Closed"}`;
        child.append(childStatus); //create status element

        //i can't parse the datetime object bc it's fetched as a string so unless you assign the 'date' and the 'time' in different keys there's not much you can do about the formating
        childDate.innerHTML = `Time: ${obj[i].date.replace(/GMT/i, "")}`;
        child.append(childDate); //create date element

        dataContainer.appendChild(child); //creates new container
      }
    });
}

fetchData(); //remove this if you don't want to show the data on startup
