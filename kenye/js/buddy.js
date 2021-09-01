const getBuddy =()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data=> displayBuddies(data))
}
getBuddy();
const displayBuddies =(data)=>{
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} ${buddy.email}`
        buddiesDiv.appendChild(p);
        p.style.color = 'red';
        console.log(data);
    }
}