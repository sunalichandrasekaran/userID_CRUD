//get users by api
async function getUser() {
   const data = await fetch(
    'https://656ed7636529ec1c6236c171.mockapi.io/users', 
    { method: "GET" }
    );
  
   const users = await data.json();
   console.log(users); 
   document.querySelector(".user-list").innerHTML = ``;
  users.forEach((user)=> createUser(user));
    
}

// create users structure in html
function createUser ({avatar,name,createdAt,id}){

    const info = document.createElement('div');
    info.className = 'main-container';

    info.innerHTML = `
    <div class="sec-container"> 
    <img class="avatar" src = ${avatar} width:"75px" height:"75px" >
    </div>

    <div class="details">
    <h3>${name}</h3>
    <p>${new Date(createdAt).toDateString()}</p>
    <button onclick="deleteUser(${id})" class="btn">Delete</button>
    </div>
    `;

    document.querySelector(".user-list").append(info);
    

}

getUser();


//delete users
async function deleteUser(id){
   const data = await fetch(
    `https://656ed7636529ec1c6236c171.mockapi.io/users/${id}`,
    {method:"DELETE"}
    );

    const data1 = await data.json();
    console.log(data1);  
    getUser(); 
};

// deleteUser(10);

 //posting the users
 async function addUser(name,avatar){

    console.log("adding");
    const Uname = document.querySelector('.add-username').value;
    const Uavatar = document.querySelector('.add-avatar').value;
    console.log(name,avatar);

    const data = await fetch("https://656ed7636529ec1c6236c171.mockapi.io/users",{
        method:"POST",
  
        headers:{
          "Content-Type":"application/json"
        },
  
        body:JSON.stringify({
          name:Uname,
          avatar:Uavatar,
          createdAt:new Date().toISOString()
  
        })
  
      })
   getUser();
  };

  
    
    
    
    
     



