
import { createSlice } from "@reduxjs/toolkit";
import Question from "../components/question/question";
import Chapter from "../components/chapter/chapter";



const happyexam = createSlice({
    name:"happyexam",

    initialState:{
      height:"70px",
        welcomeData: [
            {ask:"select you langauge",element:[{data:"हिंदी"},{data:"English"}]},
            {ask:"select you class",element:[{data:"10"},{data:"12"}]}
        ],
        user:{
     name:"thekms",
     class:"10",
     language:"hindi"
        },
      subject:["maths","Physics","Chemistry","Biology", "English", "Hindi"],
      chapter:[
        {
          "english": "Real Numbers",
          "hindi": "वास्तविक संख्याएँ"
        },
        {
          "english": "Polynomials",
          "hindi": "बहुपद"
        },
        {
          "english": " Linear Equations in Two Variables",
          "hindi": "दो चर में रैखिक समीकरणों का युग्म"
        },
        {
          "english": "Quadratic Equations",
          "hindi": "द्विघात समीकरण"
        },
        {
          "english": "Arithmetic Progressions",
          "hindi": "अंकगणित प्रगति"
        },
        {
          "english": "Triangles",
          "hindi": "त्रिकोण"
        },
        {
          "english": "Coordinate Geometry",
          "hindi": "निर्देशांक ज्यामिति"
        },
        {
          "english": "Introduction to Trigonometry",
          "hindi": "त्रिकोणमिति का परिचय"
        },
        {
          "english": "Statistics",
          "hindi": "सांख्यिकी"
        },
        {
          "english": "Probability",
          "hindi": "संभाव्यता"
        }
      ],
      
        question:[
          {
            "question_name": {
              "english": "What is Ohm's law?",
              "hindi": "ओम का नियम क्या है?"
            },
            "option": {
              "english": [
                "V = IR",
                "P = VI",
                "I = PR",
                "R = P/I"
              ],
              "hindi": [
                "V = IR",
                "P = VI",
                "I = PR",
                "R = P/I"
              ]
            },
            "answer": 0,
            "image": null,
            "medium": "easy"
          },
          {
            "question_name": {
              "english": "Which unit is used to measure electrical power?",
              "hindi": "विद्युत शक्ति को मापने के लिए किस इकाई का उपयोग किया जाता है?"
            },
            "option": {
              "english": [
                "Ampere",
                "Volt",
                "Watt",
                "Ohm"
              ],
              "hindi": [
                "एम्पीयर",
                "वोल्ट",
                "वाट",
                "ओम"
              ]
            },
            "answer": 2,
            "image": null,
            "medium": "easy"
          },
          {
            "question_name": {
              "english": "What happens to resistance when temperature increases?",
              "hindi": "तापमान बढ़ने पर प्रतिरोध में क्या होता है?"
            },
            "option": {
              "english": [
                "Decreases",
                "Increases",
                "Remains constant",
                "Becomes zero"
              ],
              "hindi": [
                "घटता है",
                "बढ़ता है",
                "स्थिर रहता है",
                "शून्य हो जाता है"
              ]
            },
            "answer": 1,
            "image": null,
            "medium": "easy"
          },
          {
            "question_name": {
              "english": "What is the purpose of an electrical fuse?",
              "hindi": "विद्युत फ्यूज का उद्देश्य क्या है?"
            },
            "option": {
              "english": [
                "Increase current",
                "Protect from overcurrent",
                "Store electricity",
                "Measure voltage"
              ],
              "hindi": [
                "करंट बढ़ाना",
                "अधिक करंट से बचाना",
                "बिजली स्टोर करना",
                "वोल्टेज मापना"
              ]
            },
            "answer": 1,
            "image": null,
            "medium": "easy"
          },
          {
            "question_name": {
              "english": "Which material is the best conductor?",
              "hindi": "सबसे अच्छा चालक कौन सा पदार्थ है?"
            },
            "option": {
              "english": [
                "Iron",
                "Copper",
                "Aluminum",
                "Silver"
              ],
              "hindi": [
                "लोहा",
                "तांबा",
                "एल्युमीनियम",
                "चांदी"
              ]
            },
            "answer": 3,
            "image": null,
            "medium": "easy"
          },
          {
            "question_name": {
              "english": "Calculate total resistance of 4Ω and 6Ω in series:",
              "hindi": "श्रृंखला में 4Ω और 6Ω का कुल प्रतिरोध ज्ञात करें:"
            },
            "option": {
              "english": [
                "2Ω",
                "5Ω",
                "10Ω",
                "24Ω"
              ],
              "hindi": [
                "2Ω",
                "5Ω",
                "10Ω",
                "24Ω"
              ]
            },
            "answer": 2,
            "image": null,
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "What current flows through a 40Ω resistor at 120V?",
              "hindi": "120V पर 40Ω प्रतिरोध में कितनी धारा प्रवाहित होती है?"
            },
            "option": {
              "english": [
                "2A",
                "3A",
                "4A",
                "5A"
              ],
              "hindi": [
                "2A",
                "3A",
                "4A",
                "5A"
              ]
            },
            "answer": 0,
            "image": null,
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "Power consumed by 5A current at 220V is:",
              "hindi": "220V पर 5A धारा द्वारा खपत की गई शक्ति है:"
            },
            "option": {
              "english": [
                "440W",
                "880W",
                "1100W",
                "2200W"
              ],
              "hindi": [
                "440W",
                "880W",
                "1100W",
                "2200W"
              ]
            },
            "answer": 2,
            "image": null,
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "Equivalent resistance of two 20Ω resistors in parallel is:",
              "hindi": "समानांतर में दो 20Ω प्रतिरोधों का तुल्य प्रतिरोध है:"
            },
            "option": {
              "english": [
                "40Ω",
                "20Ω",
                "10Ω",
                "5Ω"
              ],
              "hindi": [
                "40Ω",
                "20Ω",
                "10Ω",
                "5Ω"
              ]
            },
            "answer": 2,
            "image": null,
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "Current through a 100W lamp at 50V is:",
              "hindi": "50V पर 100W लैंप में धारा है:"
            },
            "option": {
              "english": [
                "0.5A",
                "1A",
                "2A",
                "5A"
              ],
              "hindi": [
                "0.5A",
                "1A",
                "2A",
                "5A"
              ]
            },
            "answer": 2,
            "image": null,
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "Identify the circuit type:",
              "hindi": "सर्किट का प्रकार पहचानें:"
            },
            "option": {
              "english": [
                "Series",
                "Parallel",
                "Mixed",
                "Open"
              ],
              "hindi": [
                "श्रृंखला",
                "समानांतर",
                "मिश्रित",
                "खुला"
              ]
            },
            "answer": 0,
            "image": "<svg width='300' height='150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='60' height='40' fill='none' stroke='black'/><rect x='150' y='50' width='60' height='40' fill='none' stroke='black'/><line x1='30' y1='70' x2='50' y2='70' stroke='black'/><line x1='110' y1='70' x2='150' y2='70' stroke='black'/><line x1='210' y1='70' x2='230' y2='70' stroke='black'/><text x='60' y='75'>R1</text><text x='160' y='75'>R2</text></svg>",
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "Which component configuration is shown?",
              "hindi": "कौन सा घटक विन्यास दिखाया गया है?"
            },
            "option": {
              "english": [
                "Series resistors",
                "Parallel resistors",
                "Series capacitors",
                "Parallel capacitors"
              ],
              "hindi": [
                "श्रृंखला प्रतिरोधक",
                "समानांतर प्रतिरोधक",
                "श्रृंखला संधारित्र",
                "समानांतर संधारित्र"
              ]
            },
            "answer": 1,
            "image": "<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='50' x2='250' y2='50' stroke='black'/><rect x='100' y='70' width='60' height='30' fill='none' stroke='black'/><rect x='100' y='120' width='60' height='30' fill='none' stroke='black'/><line x1='50' y1='50' x2='50' y2='150' stroke='black'/><line x1='50' y1='150' x2='250' y2='150' stroke='black'/><line x1='250' y1='50' x2='250' y2='150' stroke='black'/><line x1='50' y1='85' x2='100' y2='85' stroke='black'/><line x1='50' y1='135' x2='100' y2='135' stroke='black'/><line x1='160' y1='85' x2='250' y2='85' stroke='black'/><line x1='160' y1='135' x2='250' y2='135' stroke='black'/></svg>",
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "What type of power source is shown?",
              "hindi": "किस प्रकार का पावर स्रोत दिखाया गया है?"
            },
            "option": {
              "english": [
                "AC source",
                "DC source",
                "Battery",
                "Generator"
              ],
              "hindi": [
                "AC स्रोत",
                "DC स्रोत",
                "बैटरी",
                "जनरेटर"
              ]
            },
            "answer": 2,
            "image": "<svg width='300' height='150' xmlns='http://www.w3.org/2000/svg'><line x1='100' y1='50' x2='100' y2='100' stroke='black'/><line x1='80' y1='60' x2='120' y2='60' stroke='black'/><line x1='90' y1='90' x2='110' y2='90' stroke='black'/><circle cx='100' cy='75' r='25' fill='none' stroke='black'/></svg>",
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "Identify the meter connection:",
              "hindi": "मीटर कनेक्शन की पहचान करें:"
            },
            "option": {
              "english": [
                "Voltmeter",
                "Ammeter",
                "Ohmmeter",
                "Wattmeter"
              ],
              "hindi": [
                "वोल्टमीटर",
                "एमीटर",
                "ओममीटर",
                "वाटमीटर"
              ]
            },
            "answer": 0,
            "image": "<svg width='300' height='150' xmlns='http://www.w3.org/2000/svg'><rect x='100' y='50' width='40' height='40' fill='none' stroke='black'/><circle cx='120' cy='70' r='15' fill='none' stroke='black'/><text x='115' y='75'>V</text><line x1='100' y1='70' x2='80' y2='70' stroke='black'/><line x1='140' y1='70' x2='160' y2='70' stroke='black'/></svg>",
            "medium": "medium"
          },
          {
            "question_name": {
              "english": "Which switch configuration is shown?",
              "hindi": "कौन सा स्विच विन्यास दिखाया गया है?"
            },
            "option": {
              "english": [
                "Single pole",
                "Double pole",
                "Three-way",
                "Four-way"
              ],
              "hindi": [
                "सिंगल पोल",
                "डबल पोल",
                "थ्री-वे",
                "फोर-वे"
              ]
            },
            "answer": 1,
            "image": "<svg width='300' height='150' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='50' x2='100' y2='50' stroke='black'/><line x1='100' y1='50' x2='150' y2='70' stroke='black'/><line x1='50' y1='100' x2='100' y2='100' stroke='black'/><line x1='100' y1='100' x2='150' y2='120' stroke='black'/><circle cx='100' cy='50' r='3' fill='black'/><circle cx='100' cy='100' r='3' fill='black'/><line x1='150' y1='50' x2='150' y2='120' stroke='black' stroke-dasharray='5,5'/></svg>",
            "medium": "medium"
          }
        ]
        
        },
            

           reducers:{
            Height:(state,action)=>{
              state.height =  action.payload;
            }
           }   

        

  
})

export const {Height} = happyexam.actions;
export default happyexam.reducer;