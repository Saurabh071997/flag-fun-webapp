import React, { useState } from "react";
import "./styles.css";

import linkedin from "./images/linkedin.svg";
import twitter from "./images/twitter.svg";
import github from "./images/github.svg";

const flagDictionary = {
  "🇦🇨": "Ascension Island",
  "🇦🇩": "Andorra",
  "🇦🇪": "United Arab Emirates",
  "🇦🇷": "Argentina",
  "🇦🇹": "Autria",
  "🇦🇺": "Australia",
  "🇧🇪": "Belgium",
  "🇧🇷": "Brazil",
  "🇧🇸": "Bahamas",
  "🇨🇭": "Switzerland",
  "🇮🇳": "India",
  "🇬🇧": "United Kingdom",
  "🇨🇦": "Canada",
  "🇨🇱": "Chile",
  "🇨🇳": "China",
  "🇨🇷": "Costa Rica",
  "🇩🇪": "Germany",
  "🇩🇰": "Denmark",
  "🇩🇴": "Dominican Republic",
  "🇪🇪": "Estonia",
  "🇪🇬": "Egypt",
  "🇪🇸": "Spain",
  "🇪🇹": "Ethiopia",
  "🇫🇮": "Finland",
  "🇫🇷": "France",
  "🇬🇦": "Gabon",
  "🇬🇷": "Greece",
  "🇭🇷": "Croatia",
  "🇭🇺": "Hungary",
  "🇮🇪": "Ireland",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇲": "Jamaica"
};

var flagsWithUs = Object.keys(flagDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here");

  function onChangeHandler(event) {
    //  console.log(event.target.value);
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in flagDictionary) {
      setMeaning(flagDictionary[inputEmoji]);
    } else {
      setMeaning(inputEmoji + " is not currently available with us");
    }
  }

  function onClickHandler(item) {
    var inputEmoji = item;
    setEmoji(inputEmoji);

    setMeaning(flagDictionary[inputEmoji]);
  }

  function checkItem(index) {
    if ((index + 1) % 5 === 0) {
      return "\n\n\n\n";
    }

    return "";
  }

  return (
    <div className="App">
      <div className="header">
        <div className="navigation">
          <h2 style={{ fontSize: "3.5rem" }}>
            Flag Fun <hr style={{ width: "30%" }} />
          </h2>
          {/* <hr style={{width:"30%"}}/> */}
        </div>
      </div>

      <div className="block-body">
        <div className="body-container">
          <input
            placeholder={"Enter flag symbol here"}
            onChange={onChangeHandler}
          ></input>
          <h3 style={{ textAlign: "center" }}> Entered Flag Emoji: {emoji}</h3>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            {" "}
            {meaning}{" "}
          </h2>

          <div className="block-emoji">
            {flagsWithUs.map(function (item, index) {
              return (
                <span
                  key={item}
                  onClick={() => onClickHandler(item)}
                  style={{
                    padding: "0.5rem",
                    fontSize: "2rem",
                    cursor: "pointer"
                  }}
                >
                  {item}
                  {checkItem(index)}
                  <span></span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <hr style={{ width: "40%" }} />

      <div className="footer" style={{ padding: "1rem", margin: "0%" }}>
        <div className="footer-container">
          {
            <div className="footer-social-link-bar">
              <a
                href="https://www.linkedin.com/in/saurabh-kamboj/"
                className="footer-social-link"
              >
                <img src={linkedin} alt="linkedin" />
              </a>

              <a
                href="https://twitter.com/im_saurabhK"
                className="footer-social-link"
              >
                <img src={twitter} alt="twitter" />
              </a>

              <a
                href="https://github.com/Saurabh071997"
                className="footer-social-link"
              >
                <img src={github} alt="github" />
              </a>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
