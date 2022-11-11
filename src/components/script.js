const menuClick = document.querySelector("sidebar-menu__item");


//DISPLAY USER INPUT TO HTML PAGE
let userInput = document.getElementById("userInput");
let tweetButton = document.getElementById('tweetButton');
let tweet = document.getElementById('tweet');


function tweetFunction(){
    tweet.innerHTML =  userInput.value;
    //RETURN USER PROFILE WIP
    // tweet.appendChild(document.createElement('img')).src = '/assets/icons/userpp.png';
    // tweet.removeChild(userInput.value);
    
}

tweetButton.addEventListener('click',tweetFunction);

//TEXTAREA
const textarea = document.getElementById("userInput");
textarea.style.cssText = `height: ${textarea.scrollHeight}px; overflow-y:hidden`
textarea.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
})


//PREVENT ENTER 
userInput.addEventListener('keypress', event => {
    event.preventDefault;
    if(event.key === 'Enter'){
        console.log('ENTER KENA KNTL');
        event.preventDefault;
        document.getElementById('tweetButton').click();
    }  
    
})

menuClick.addEvent
