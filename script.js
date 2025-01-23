const questions=[ {
    question: "who is appu";
    answer:[
        { taxt: "elephant" , correct:true },
        { taxt: "rat" , correct:false },
        { taxt: "cat" , correct:false },
        { taxt: "dog" , correct:false }
    ]
},
{
    question: "what is apple";
    answer:[
        { taxt: "fruit" , correct:true },
        { taxt: "rat" , correct:false },
        { taxt: "cat" , correct:false },
        { taxt: "dog" , correct:false }
    ]
},
{
    question: "what is chilli";
    answer:[
        { taxt: "vegitable" , correct:true },
        { taxt: "rat" , correct:false },
        { taxt: "cat" , correct:false },
        { taxt: "dog" , correct:false }
    ]
},
{
    question: "who is narendra modi";
    answer:[
        { taxt: "prime minister" , correct:true },
        { taxt: "rat" , correct:false },
        { taxt: "cat" , correct:false },
        { taxt: "dog" , correct:false }
    ]
}
];
// ------------------------------------hello-------------------------------
const questionElement =document.getElementById("question");
const answerButton =document.getElementById("answer-button");
const nextButton =document.getElementById("next-btn");


let currentQusetion
