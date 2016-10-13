                                    /*
Sample Structure:

gf_content =  [
                [ row 1
                  { block 1 },
                  { block 2 },
                  { block 3 }
                ],
                etc.
              ]

Rows can have 1 - 9 blocks.
                                    */

var gf_content = [



  [  // row
    { // block
      //title: "The Rainbow Machine",
      //link: "skittle.html",
      imageURL: "assets/skittlemachine.jpg",
      keywords: ["The Rainbow Machine", "Spring 2016", "EE3"]
    },
    { // block
      //title: "Natbus",
      //link: "natbus.html",
      imageURL: "assets/natbus.jpg",
      keywords: ["Natbus", "Spring 2016", "IEEE OPS"]
    },
    { // block
      //title: "cAir App",
    
      imageURL: "assets/cair.png",

      keywords: ["cAir App", "Summer 2016", "Research"]
    }
  ],

  [
    {
      title: "The Rainbow Machine is a skittle sorter powered by an Arduino Uno. Through a phototransistor and flashing rgb led, the Arduino can take data and determine what color the skittle is. Two servos are used to help dispense and sort the skittles.",
      customHeight: true, 
      style:{
        backgroundColor: "#f1f1f2",
        height: "150px",
        fontSize: "11px",
        color: "black",
        letterSpacing: "0.5px"
      }

    },
    {
      title: "Natbus is a line-following car powered by a Teensy LC. Movement of the car is controlled using PID and two infrared sensors attached to the front. Skills involved are PCB design and soldering.",
      customHeight: true, 
      style:{
        backgroundColor: "#f1f1f2",
        height: "150px",
        fontSize: "11px",
        color: "black",
        letterSpacing: "0.5px"
      }

    },
    {
      title: "C Air is a project in which a device samples the current air environment. My contribution to this project is an iOS app that allows wireless control of the device as well as display of collected data.",
      customHeight: true,
      style:{
        backgroundColor: "#f1f1f2",
        height: "150px",
        fontSize: "11px",
        color: "black",
        letterSpacing: "0.5px"
      }
    }
  ],

  [ // row
    { // block
      title: "Download my resume!",
      link: "ChristineChenResume.pdf",
      imageURL: "",
      customHeight: true,
      style: {
        backgroundColor: "#f1f1f2",
        height: "40px",
        color: "#555",
        fontSize: "10px",
        letterSpacing: "0.5px"
      }
    }
  ]

]


var gf_styles = {
  squareMode: true,
  innerBlock: {
    fontFamily: "Montserrat",
    color: "#fff",
    padding: "10px"
  },
  blockTitle: {
    margin: "0 auto"
    //,textTransform: "uppercase"
  },
  keyword: {
    fontSize: "11px",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "2px 5px",
    margin: "2px"
  },
  keywords: {
    fontSize: "10px",
    marginTop: "-50px"
  }
}
