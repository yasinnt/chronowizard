
 
 document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    e.preventDefault();
  }
});


// ███ SYSTEM PROTOCOL: ORION 9 ███
// Timestamp: 2037-07-04T22:17:42Z
// Uplink Established. Initiating Deep Sync...

// const cryptoWave = () => {
//   let phase = 0xA51C;
//   while (phase < 0xFFFF) {
//     phase ^= (phase << 5) & 0xF00F;
//     phase = (phase >> 3) | (phase << 13);
//   }
//   return phase.toString(16);
// };

// function launchOrbitalHandshake(signal) {
//   const theta = Math.PI * 4.2;
//   const key = cryptoWave();
//   return signal.split('').map((char, i) => {
//     return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length));
//   }).join('');
// }

// const omegaPacket = launchOrbitalHandshake("init-sequence");
// sendToSatellite(omegaPacket);

// if (coreTemp > 77.7) {
//   initiateCoolDown();
//   overrideFirewall("delta-prime");
// }

// 🛰 AUTH CODE: #XJ9-ALPHA
// ░░░ ENCRYPTED TRANSMISSION ░░░
// [ TRACE PATH RE-ENCRYPTED ]
// [ SYMMETRIC NEURAL LOCK ACTIVE ]





// (function(global, shadowRealm) {
//   const quantumState = ['ω', 'Ψ', 'π', 'λ', '∞'];
//   const entangledMatrix = quantumState.map((q, i) => ({
//     index: i,
//     symbol: q,
//     entropy: Math.random() * 42
//   }));

//   function hyperEncrypt(input) {
//     return input.split('').map(char => 
//       String.fromCharCode(char.charCodeAt(0) ^ 1337)
//     ).join('');
//   }

//   function initiatePhaseShift() {
//     console.log("🔒 Initiating phase shift...");
//     const darkMatter = hyperEncrypt("do not peek");
//     setTimeout(() => {
//       console.log("🧠 Neural state locked:", darkMatter);
//     }, 1337);
//   }

//   function overrideReality() {
//     const multiVerse = new Proxy(entangledMatrix, {
//       get(target, prop) {
//         if (prop === 'length') return 42;
//         return () => '🌀';
//       }
//     });
//     return multiVerse;
//   }

//   shadowRealm.reboot = function(secretKey = '🧬') {
//     console.log("Rebooting dimension with key:", secretKey);
//     initiatePhaseShift();
//     return overrideReality();
//   };

// })(this, (this.shadowRealm = {}));

// // Example usage:
// const result = shadowRealm.reboot('σigma-1337');
// console.log("Fake result:", result[0]());

// ███ SYSTEM PROTOCOL: ORION 9 ███
// Timestamp: 2037-07-04T22:17:42Z
// Uplink Established. Initiating Deep Sync...

// const cryptoWave = () => {
//   let phase = 0xA51C;
//   while (phase < 0xFFFF) {
//     phase ^= (phase << 5) & 0xF00F;
//     phase = (phase >> 3) | (phase << 13);
//   }
//   return phase.toString(16);
// };

// function launchOrbitalHandshake(signal) {
//   const theta = Math.PI * 4.2;
//   const key = cryptoWave();
//   return signal.split('').map((char, i) => {
//     return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length));
//   }).join('');
// }

// const omegaPacket = launchOrbitalHandshake("init-sequence");
// sendToSatellite(omegaPacket);

// if (coreTemp > 77.7) {
//   initiateCoolDown();
//   overrideFirewall("delta-prime");
// }

// 🛰 AUTH CODE: #XJ9-ALPHA
// ░░░ ENCRYPTED TRANSMISSION ░░░
// [ TRACE PATH RE-ENCRYPTED ]
// [ SYMMETRIC NEURAL LOCK ACTIVE ]







































































































































































































































































































































































































































































































































































































































































































































































































































































































 //spa control//


  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('keydown', e => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
    }
  });



function showSection(pageId) {
  
   const pages = document.querySelectorAll('.page');

   pages.forEach(page => {

    if (page.id === pageId) {

        page.classList.add('active');

    } else {

        page.classList.remove('active')

    }

   })
  
}



//Alert Message//
function showAlert(alertBoxId) {
    const alert = document.getElementById(alertBoxId);
    if (alert) {
        alert.style.display = 'flex';
        document.getElementById("alertdim").play();

        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);
    }
}
 
 function showThank(BoxId) {
     
   
   

    const alert = document.getElementById(BoxId);
    if (alert) {
        alert.style.display = 'flex';
        document.getElementById("alertdim").play();

        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);
    }
  
}
 
 
 //Game completed//




//User name pick//
  
  let userName;
  

function pickUsername() {
     userName = document.querySelector('#nameIn').value;
    

    if (userName === "") {

      showAlert('alertBox')
    }

    else {
        trackNewUser(userName)
        showSection('gender-section');
        document.getElementById('questionText').innerHTML= `Alright  <span style='color:#4D59FA'>${userName}</span>, let's <br>test my psychic <br>powers!`
        
    }
}





//Gender Verification//
let genid = ""

function pickGender(genderUnsaved){

  document.querySelectorAll('.gender').forEach(btn => {
    btn.classList.remove('selected')
  })

  event.target.classList.add('selected')

  genid=genderUnsaved
}

function verifyGender() {

  if (genid === "") {
    showAlert('alertBox2')
  }

  else {

    genid=genid
    showSection('question-section')
  }
}





//Quistions //

const questions = [
    "<span style='color:#4D59FA'>Think of your current age</span> — but <br> don't tell me!<br> Just keep it in your <br> head. Got it?" ,

   "Now, <span style='color:#4D59FA'>double that number.</span> You <br> can use your fingers, , or a <br> calculator. I won’t judge." ,

   "Add<br><span style='color:#E76800'>+5</span> <br> to that.",

   "Now, <span style='color:#4D59FA'>multiply</span> the whole<br> thing by <span style='color:#4D59FA'>50</span>." ,

   "Now, <span style='color:#4D59FA'>Result</span> <span style='color:#ED1211'>+</span> <br> Number of  <span style='color:#4D59FA'>Birth month</span> <br> (1–12)." ,

   "Last step — <br> subtract <span style='color:#ED1211'>-250</span>."
]


const emoji = ["imgs/brain.png", 

               "imgs/hand v.png",

               "imgs/hand five.png" , 
               
               "imgs/monkey_face.png" , 
              
               "imgs/dog.png" , 
              
               "imgs/facepunch.png"];


let currentQuestion = 0;
let currentEmoji = 0;



let calcuShow = 0;

 function nextQuestion(){
    const questionElement = document.getElementById('questionText')

    
    if (currentQuestion < questions.length && currentEmoji < emoji.length) {

        questionElement.innerHTML = questions[currentQuestion]

         document.getElementById('emojiControl').src = emoji[currentEmoji];

        
        currentQuestion++;
        currentEmoji++;
        
        //Calulator Display//
        calcuShow++;
        if (calcuShow >= 2) {
          document.getElementById('calcu').style.display = 'block';
        }

        

    } 
    else {

        showSection('final-section')
    }

 }

 

 //Final thinking//

 function thinkAge() {
      

 

    let result = document.querySelector('#finalInput').value;

    if (result === "") {
     showAlert('alertBox3')
    }  else {

       
     showSection('loading-section')

     //Loading Page//
  const counter = document.getElementById('percentage');
       let percent = 0;
       
       const interval = setInterval(() => {
           percent++;
           counter.textContent = percent + "%";
           
           if (percent >= 100) {
               clearInterval(interval);

       
       



    const firstSide = Math.floor(result/100);
    const secondSide = result%100;

    
    let currentDate = new Date();
  
    let currentYear = currentDate.getFullYear();
    let birthYear = currentYear - firstSide;
    
    let  currentMonth = currentDate.getMonth()+1;

    let monthName;  


    
    

    switch(secondSide) {
  case 1:
    monthName = "Jan";
    break;
  case 2:
    monthName = "Feb";
    break;
  case 3:
    monthName = "Mar";
    break;
  case 4:
    monthName = "Apr";
    break;
  case 5:
    monthName = "May";
    break;

case 6:
  monthName = "Jun";
  break;
case 7:
  monthName = "Jul";
  break;
case 8:
  monthName = "Aug";
  break;  
case 9:
  monthName = "Sep";
  break;  
case 10:
  monthName = "Oct";
  break;  
case 11:
  monthName = "Nov";
  break;      
case 12:
  monthName = "Dec";
  break;  

  default:
    monthName = "🙄!";
}

if (currentMonth < secondSide) {


    showSection('display-section');
    birthYear = birthYear - 1;

        document.getElementById('user-id-final').innerHTML = "heyy '" + userName +"!"
        document.getElementById('age-final').innerHTML = firstSide
        document.getElementById('born-on').innerHTML = birthYear +"," +monthName;

        if (genid === "male") {
          document.getElementById('final-gender').src = "imgs/prince.png"
        } 

        else {

          document.getElementById('final-gender').src = "imgs/princess.png"

        }
    
    
  
}
 

else {
    showSection('display-section');
    
    document.getElementById('user-id-final').innerHTML = "heyy, " + userName + "!";
    document.getElementById('age-final').innerHTML = firstSide;
    document.getElementById('born-on').innerHTML = birthYear + ", " + monthName;
    
    if (genid === "male") {
        document.getElementById('final-gender').src = "prince.png";
    } else {
        document.getElementById('final-gender').src = "princess.png";
    }
}





    }
}, 50); 

 }

}// Else Oi! Why you runnin’? Fill it👊//




                                                                                                                                                                         const scriptUrl="https://script.google.com/macros/s/AKfycbyHY79hMUYWsePhUDZ5uYAOERsMeaUqHhB8sYvoK3-msds8tc0_mhV8Lo4mcpbcGphD/exec";function trackNewUser(e){fetch(`${scriptUrl}?action=newuser&name=${encodeURIComponent(e)}`).then((e=>e.text())).then((()=>updateCounts())).catch((e=>console.error("Error tracking user:",e)))}function updateCounts(){fetch(`${scriptUrl}?action=getcounts`).then((e=>e.json())).then((e=>{document.getElementById("totalLikes").innerHTML=e.likes,document.getElementById("totalDislikes").innerHTML=e.dislikes,document.getElementById("totalUsers").innerHTML=e.users})).catch((e=>console.error("Error fetching counts:",e)))}document.getElementById("like-Btn").addEventListener("click",(()=>{fetch(`${scriptUrl}?action=like`).then((e=>e.text())).then((()=>updateCounts())).catch((e=>console.error("Error recording like:",e)))})),document.getElementById("unlike-Btn").addEventListener("click",(()=>{fetch(`${scriptUrl}?action=dislike`).then((e=>e.text())).then((()=>updateCounts())).catch((e=>console.error("Error recording dislike:",e)))})),document.addEventListener("DOMContentLoaded",(()=>{updateCounts()}));
// ███ SYSTEM PROTOCOL: ORION 9 ███
// Timestamp: 2037-07-04T22:17:42Z
// Uplink Established. Initiating Deep Sync...

// const cryptoWave = () => {
//   let phase = 0xA51C;
//   while (phase < 0xFFFF) {
//     phase ^= (phase << 5) & 0xF00F;
//     phase = (phase >> 3) | (phase << 13);
//   }
//   return phase.toString(16);
// };

// function launchOrbitalHandshake(signal) {
//   const theta = Math.PI * 4.2;
//   const key = cryptoWave();
//   return signal.split('').map((char, i) => {
//     return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length));
//   }).join('');
// }

// const omegaPacket = launchOrbitalHandshake("init-sequence");
// sendToSatellite(omegaPacket);

// if (coreTemp > 77.7) {
//   initiateCoolDown();
//   overrideFirewall("delta-prime");
// }

// 🛰 AUTH CODE: #XJ9-ALPHA
// ░░░ ENCRYPTED TRANSMISSION ░░░
// [ TRACE PATH RE-ENCRYPTED ]
// [ SYMMETRIC NEURAL LOCK ACTIVE ]



































