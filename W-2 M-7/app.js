// const allBox = document.getElementsByClassName("box");

// for (let i = 0; i < allBox.length; i++) {
//     const element = allBox[i];
//     element.style.backgroundColor = "green";

//     if (element.innerText == "box-5")
//         element.style.backgroundColor = "red";

// }


document.getElementById("handle-submit").addEventListener("click", (event) => {
    const inputValue = document.getElementById("text-box").value;

    const container = document.getElementById("comment-container");
    const p = document.createElement("p");
    p.innerText = inputValue;
    container.appendChild(p);
    document.getElementById("text-box").value = "";
})

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     }
//     );

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        displayData(data)
    }
    );

const displayData = (userdata) => {
    const container = document.getElementById("user-dataContainer");

    userdata.forEach(user => {
        const div = document.createElement("div");
        div.classList.add("user")
        div.innerHTML = `
        <h4>Title</h4>
        <p>Description</p>
        <button>Details</button>
        `;

        container.appendChild(div);
    });
}