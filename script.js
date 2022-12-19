let  readline=require("readline-sync")
let user=readline.question("Enter your name ")
console.log("hello ",user)
let  know = readline.question("Do you know Mahendra?")
console.log(`your first question is here : >>>>>>>>>>>>>>>>>>>>`)
let score = 0

if (know.toLowerCase() === "yes"){
    let All_question = [
        {
            question : " 1). What is the Nick Name of Mahendra" ,
            answer : "jitendra"
        }, 
        {   
            question : "2). What is his favourite game",
            answer : "chess"

        },
        {
            question : "3). who is his faviurite Actor",
            answer : "akshay kumar"
        },
        {
            question : "4). what he is studing" , 
            answer : "software engineering"
        },
        {
            question : "5). who is his favourite motivational speaker" , 
            answer : "sandeep mahesawari"
        }
    ]


    let user = {
        Name : "praveen",
        score : 3
    }

    // Answer check function 
    function right_answer(question_number){
        console.log(question_number.question)
        let ans = readline.question("Enter your Answer : ")
        if (ans.toLowerCase() === question_number.answer){
            console.log("Your ans is right and your score is " , score +=1)
        }
        else{
            console.log("your ans is wrong and your score is " , score)
        }
    }

    for ( let i = 0 ; i < All_question.length ; i++){
        question_number  = All_question[i]
        right_answer(question_number)
        // console.log("Do you want to show your score : ")
    }
    let show = readline.question("Do you want to show your score Again  :")
    if (show.toLowerCase() === "yes"){
        console.log("your total score is " , score)
        if ( score === user.score){
            console.log(`your score is equal to ${user.Name}`)
        }
        else if (score < user.score){
            console.log(`you score is less than ${user.Name}`)
        }
        else{
            console.log(`your score is grather than ${user.Name}`)
        }
    }
    else{
        console.log("Ok \n Thank you")
    }

}else{
    console.log(" Ok !bye bye")
}