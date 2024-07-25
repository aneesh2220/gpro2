import "./App.css";
import Bootcard from "./card";

function App() {
  let sites = [
    {
      name: "Youtube",
      desc: "Youtube is for videos",
      link: "https://youtube.com",
    },
    {
      name: "Google",
      desc: "Google is a sub site of alphabet",
      link: "https://google.com",
    },
    {
      name: "Discord",
      desc: "Discord is for voice chats",
      link: "https://discord.com",
    },
  ];
  return (
    <div>
      {
 sites.map((val, index)=>{

return(
<Bootcard site={val}/>

);


 }





 )


      }













    </div>
  );
}

export default App;
