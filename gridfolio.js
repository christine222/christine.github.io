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
      //link: "https://github.com/christinecha/gridfolio",
      imageURL: "assets/skittlemachine.jpg",
      keywords: ["The Rainbow Machine", "Spring 2016", "EE3"]
    },
    { // block
      //title: "Natbus",
      //link: "https://github.com/christinecha/gridfolio",
      imageURL: "assets/natbus.jpg",
      keywords: ["Natbus", "Spring 2016", "IEEE OPS"]
    },
    { // block
      //title: "cAir App",
    
      imageURL: "assets/cair.png",

      keywords: ["cAir App", "Summer 2016", "Research"]
    }
  ],

  [ // row
    { // block
      title: "Download my resume!",
      //link: "https://github.com/christinecha/gridfolio",
      imageURL: "",
      customHeight: true,
      style: {
        backgroundColor: "#f1f1f2",
        height: "40px",
        color: "#555",
        fontSize: "10px",
        letterSpacing: "0.5px"
      }
    },
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
