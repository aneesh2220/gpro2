import "./App.css";
import Bootcard from "./card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import login_page from "./login";

function App() {
  let sites = {
    Youtube: {
      name: "Youtube",
      desc: "Youtube is for videos",
      link: "https://youtube.com",
    },
    Google: {
      name: "Google",
      desc: "Google is a sub site of alphabet",
      link: "https://google.com",
    },
    Discord: {
      name: "Discord",
      desc: "Discord is for voice chats",
      link: "https://discord.com",
    },
  };

  let open_login = ()=>{

window.open("login.html", '_blank')


  };










  return (
    <div class="App">
      <div className="header">
        <header>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faDiscord} size="5x" color="blue" />
            </Col>
            <Col>
              <h1> DISCORD </h1>
            </Col>
            <Col>
              <div id="home_button">
                <Button variant="primary" href="https://discord.com">
                  {" "}
                  Home
                </Button>
              </div>
            </Col>
            <Col>
              <div class="userid">
                <Row>
                  <Col>
                    <FontAwesomeIcon icon={faUser} color="white" size="1.5x" />
                  </Col>
                  <Col>
                    <p> Aneesh</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </header>
      </div>
      <div className="body">
        <body>
          <ul>
            <li>
              Discord is a popular communication platform designed for creating
              communities.
            </li>
            <li>
              {" "}
              Initially developed for gamers, it has expanded to serve various
              types of communities, including hobbyist groups, study groups, and
              professional teams.
            </li>
          </ul>
<div id="ul1">
  <center>
          <h1>Key features</h1>
          
          <p> 1Text channels:</p>
          <ul>
            <li>Allows users to communicate via text.</li>
            <li>
              Channels can be organized by topic,<br></br> and permissions can
              be set for who can view or post in them.
            </li>
            </ul>
      </center>
            </div>

            
            <div id="ul2">
            <center>
            <p> 2.Servers:</p>
            <ul>
              <li>The backbone of Discord, servers are community hubs. </li>
              <li>Each server can have multiple text and voice channels.</li>
            </ul>
            </center>
            </div>

<div id="ul3">
<center>
            <p>3.Direct Messaging:</p>
          <ul>
<li>Private messages can be sent between users.</li>
<li>Group direct messages are also available.</li>

          </ul>
          </center>
          </div>

          <Row id="row1">
            <Col>
              <Bootcard site={sites.Youtube}></Bootcard>
            </Col>
            <Col>
              <Bootcard site={sites.Google}></Bootcard>
            </Col>
            <Col>
              <Bootcard site={sites.Discord}></Bootcard>
            </Col>
          </Row>

<div id="letsgo">
 
          <Button onClick={open_login} target="_blank" variant="primary" > Lets go !</Button>
          
          </div>
        </body>
      </div>



    </div>
  );
}

export default App;
