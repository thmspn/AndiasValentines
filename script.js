
let click = 0
const nobtn = document.querySelector('.no-btn')
const yesbtn = document.querySelector('.yes-btn')
const gifelement = document.querySelector('.kuromigif')
const messageelement = document.getElementById('message')
const surprisebtn = document.querySelector('.surprise-btn')
const kuromigif = ['assets/images/kuromipout2.gif', 'assets/images/kuromibeg.gif',  'assets/images/kuromipout.gif','assets/images/kuromicry.gif', 'assets/images/kuromisad.gif']
const message =[ "Please reconsider babyy…(つ╥﹏╥)つ.·°՞",
                "Are you suree… I promise I’d be a great valentinee ๑-( ˃⤙₍˂ )-๑",
                "Babyy pretty pleaseee you can’t do this to mee (˚ ˃̣̣̥⌓˂̣̣̥ )",
                "Baby do you not love me .·°՞(˃ ᗝ ˂)՞°·. ONE LAST CHANCE please may i be your valentines 𐔌՞ ܸ.ˬ.ܸ՞𐦯",
                "WAHHH BABYY!!!! PLEASE DONT DO THIS TO ME!! ๐·°(⋟﹏⋞)°·๐ pretty please with nerd gummy clusters on top may I be your valentines?"
                ]
const nobtnmessages = []
const giflength = kuromigif.length

nobtn.addEventListener("click", function(){
    if (click <= giflength-1) {
        gifelement.src = kuromigif[click];
        messageelement.innerHTML = message[click];
        click = (click + 1);
    }
    else if (click == giflength){
        window.location.href = 'rejection.html';
    }
});

yesbtn.addEventListener("click", function(){
    window.location.href = 'accepted.html';
});


surprisebtn.addEventListener("click", function(){
    window.location.href = 'letter.html';
});