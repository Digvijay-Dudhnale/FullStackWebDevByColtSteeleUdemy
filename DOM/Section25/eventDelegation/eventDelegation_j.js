

let tweetForm = document.querySelector('#tweetForm') ;
let tweetsContainer = document.querySelector('#tweets') ;

tweetForm.addEventListener('submit',function(e){
    e.preventDefault() ;
    let usernameInput = tweetForm.elements.username ;
    let tweetInput = tweetForm.elements.tweet ;
    addTweet(usernameInput.value,tweetInput.value) ;
    usernameInput.value = "" ;
    tweetInput.value = "" ;
})

function addTweet(username,tweet){
    let newTweet = document.createElement('li') ;
    let bTag = document.createElement('b') ;
    bTag.append(username) ;
    newTweet.append(bTag) ;
    newTweet.append(`- ${tweet}`) ;
    tweetsContainer.append(newTweet) ;
}

// Concept of Event delegation
// we perform necessary action on element by selecting its parent element
// this works for li elements present in original markup
        /*let lis = document.querySelector('li') ;
        for (li of lis){
            li.addEventListener('clic',function(){
                li.remove() ;
            })
        } */
tweetsContainer.addEventListener('click',function(e){
    e.preventDefault() ;
    // e.target.remove() ;
    if(e.target.nodeName === 'LI'){
        e.target.remove() ;
    }
})