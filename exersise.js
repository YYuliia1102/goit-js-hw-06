// function bar(x) {
//     if (x < 2) {
//       return "Less than two";
//     } else if (x < 1) {
//       return "Less than one";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }

//   console.log(bar(6));


//   function orderMyLogic(val) {
//     if (val < 10) {
//       return "Less than 10";
//     } else if (val < 5) {
//       return "Less than 5";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }

//   console.log(orderMyLogic(4));

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//     // Only change code below this line
//     if (strokes === 1) {
//         return names[0];
//     } else if (strokes <= par - 2) {
//         return names[1];
//     } else if (strokes = (par - 1)) {
//         return names[2];
//     }


//     return "Change Me";
//     // Only change code above this line
// }


// console.log(golfScore(5, 2));


// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   if (strokes === 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else {
//     return names[6];
//   }
// }

// console.log(golfScore(8, 4)); // should return "Birdie"



// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500


// function caseInSwitch(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val) {
//         case 1:
//             answer = "alfa";
//             break;

//         case 2:
//             answer = "beta";
//             break;

//         case 3:
//             answer = "gamma";
//             break;

//         case 4:
//             answer = "delta";
//             break;
//     }


//     // Only change code above this line
//     return answer;
// }

// console.log(caseInSwitch(6));

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley";
            break;

        case 42:
            answer = "The Answer";
            break;

        case 1:
            answer = "There is no #1";
            break;

        case 99:
            answer = "Missed me by this much!";
            break;
        
        case 7:
            answer = "Ate Nine";
            break;
    }


// Only change code above this line
return answer;
}

console.log(chainToSwitch(99));

