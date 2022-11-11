import React from 'react';

export default function ComposePage() {
    // const menuClick = document.querySelector("sidebar-menu__item");

    // //DISPLAY USER INPUT TO HTML PAGE
    // let userInput = document.getElementById("userInput");
    // let tweetButton = document.getElementById('tweetButton');
    // let tweet = document.getElementById('tweet');


    // function tweetFunction(){
    //     tweet.innerHTML =  userInput.value;
    //     //RETURN USER PROFILE WIP
    //     // tweet.appendChild(document.createElement('img')).src = '/assets/icons/userpp.png';
    //     // tweet.removeChild(userInput.value);
        
    // }

    // tweetButton.addEventListener('click',tweetFunction);

    // //TEXTAREA
    // const textarea = document.getElementById("userInput");
    // textarea.style.cssText = `height: ${textarea.scrollHeight}px; overflow-y:hidden`
    // textarea.addEventListener("input", function() {
    //     this.style.height = "auto";
    //     this.style.height = `${this.scrollHeight}px`;
    // })


    // //PREVENT ENTER 
    // userInput.addEventListener('keypress', event => {
    //     event.preventDefault;
    //     if(event.key === 'Enter'){
    //         console.log('ENTER KENA KNTL');
    //         event.preventDefault;
    //         document.getElementById('tweetButton').click();
    //     }  
        
    // })

    // menuClick.addEvent

    function componentDidMount() {
        const script = document.createElement("script");

        script.src = "../components/script.js";
        script.async = true;

        document.body.appendChild(script);
        this.nv.addEventListener("tweetButton", this.tweetFunction);
    }
    return (
        <React.Fragment>
            <div class="layout">
            
            <div class="layout__left-sidebar">
                <div class="sidebar-menu">
                <embed src="assets/logo/logo.svg" alt="logo" class="logo" />
                <div class="sidebar-menu__item" >
                    <img src="assets/icons/home.svg" alt="home" class ="sidebar-menu__item-icon" />
                    Home
                </div>
                <div class="sidebar-menu__item">
                    <img src="assets/icons/search.svg" alt="explore" class ="sidebar-menu__item-icon"/>
                    Explore
                </div>
                <div class="sidebar-menu__item">
                    <img src="assets/icons/notification.svg" alt="notif" class ="sidebar-menu__item-icon"/>
                    Notification
                </div>
                <div class="sidebar-menu__item">
                    <img src="assets/icons/message.svg" alt="message" class ="sidebar-menu__item-icon"/>
                    Message
                </div>
                <div class="sidebar-menu__item">
                    <img src="assets/icons/bookmark.svg" alt="bookmark" class ="sidebar-menu__item-icon"/>
                    Bookmark
                </div>
                <div class="sidebar-menu__item">
                    <img src="assets/icons/list.svg" alt="list" class ="sidebar-menu__item-icon"/>
                    List
                </div>
                <div class="sidebar-menu__item">
                    <img src="assets/icons/profile.svg" alt="profile" class ="sidebar-menu__item-icon"/>
                    Profile
                </div>
                <div class="sidebar-menu__item">
                    <img src="assets/icons/more_menu.svg" alt="more" class ="sidebar-menu__item-icon"/>
                    More
                </div>
                </div>
            </div>
            
            <div class="layout__main">
                <div class="main_header">
                <h2>Home</h2>
                </div>
                <div class="tweetBox">
                <form action="">
                    <div class="tweetBox_input">
                    <img src="./assets/icons/userpp.png" alt="img" />
                    <textarea spellcheck="false"  id="userInput" class="tweetInput" type="text" placeholder="What's happening?" autocomplete="off"></textarea>
                    
                    </div>
                    <button id="tweetButton"class="tweetButton" onClick="tweetFunction()">Tweet</button>
                    
                </form>
                </div>
                <div class="tweet_main">
                
                <p id="tweet"> </p>
                </div>
            </div>
            <div class="layout__right-sidebar-container">
                <div class="layout__right-sidebar">
                <div class="sidebar_input">
                    <span ><img src="assets/icons/search.svg" alt="search" class="search_right_sidebar" /></span>
                    <input type="text" placeholder="Search" />
                </div>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Tristique sollicitudin nibh sit amet. Tincidunt lobortis feugiat vivamus at augue. Pretium vulputate sapien nec sagittis aliquam malesuada. Leo urna molestie at elementum eu facilisis sed. Nibh sit amet commodo nulla. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Proin nibh nisl condimentum id venenatis a condimentum vitae. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Nisl pretium fusce id velit ut. In nibh mauris cursus mattis molestie. Maecenas pharetra convallis posuere morbi leo urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Tristique sollicitudin nibh sit amet. Tincidunt lobortis feugiat vivamus at augue. Pretium vulputate sapien nec sagittis aliquam malesuada. Leo urna molestie at elementum eu facilisis sed. Nibh sit amet commodo nulla. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Proin nibh nisl condimentum id venenatis a condimentum vitae. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Nisl pretium fusce id velit ut. In nibh mauris cursus mattis molestie. Maecenas pharetra convallis posuere morbi leo urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Tristique sollicitudin nibh sit amet. Tincidunt lobortis feugiat vivamus at augue. Pretium vulputate sapien nec sagittis aliquam malesuada. Leo urna molestie at elementum eu facilisis sed. Nibh sit amet commodo nulla. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Proin nibh nisl condimentum id venenatis a condimentum vitae. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Nisl pretium fusce id velit ut. In nibh mauris cursus mattis molestie. Maecenas pharetra convallis posuere morbi leo urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Tristique sollicitudin nibh sit amet. Tincidunt lobortis feugiat vivamus at augue. Pretium vulputate sapien nec sagittis aliquam malesuada. Leo urna molestie at elementum eu facilisis sed. Nibh sit amet commodo nulla. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Proin nibh nisl condimentum id venenatis a condimentum vitae. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Nisl pretium fusce id velit ut. In nibh mauris cursus mattis molestie. Maecenas pharetra convallis posuere morbi leo urna.
                </div>  
            </div>
            </div>

        </React.Fragment>
    )
}