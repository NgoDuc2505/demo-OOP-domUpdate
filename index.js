
class person {
    constructor(Fname, Lname, age, id, link) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
        this.id = id;
        this.link = link
    }

    getName() {
        return `${this.Fname} ${this.Lname}`
    }

    getAge() {
        return this.age
    }

    getId() {
        return this.id
    }

    getLink() {
        return this.link
    }
}

let userArray = []
document.querySelector("#add").onclick = () => {
    let Fname = document.getElementById("Fname").value
    let Lname = document.getElementById("Lname").value
    let age = document.getElementById("age").value
    let id = document.getElementById("ID").value
    let link = document.querySelector("#link").value
    const user = new person(Fname, Lname, age, id, link)

    // userArray.push(user)

    userArray = [...userArray, user]

    console.log(userArray)

    const ketQua = userArray.map(
        (item) => {
            return `<div class="card" style="width: 18rem;">
            <img src=${item.getLink()} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.getName()}</h5>
              <p class="card-text">age: ${item.getAge()}</p>
              <p class="card-text">id: ${item.getId()}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        }
    )
    // console.log(ketQua)
    const arrayToString = ketQua.join("")
    // console.log(arrayToString)
    document.querySelector("#result").innerHTML = arrayToString
     
}