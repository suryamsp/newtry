import "./App.css";

export default function App() {
  const users=[{
    name:"Kowsi",
    pic:"https://wallpapercave.com/wp/wp1841407.jpg"
  },
  {name:"Abi",
  pic:"https://wallpapercave.com/wp/wp1841407.jpg"
},
  {
    name:"Kalai",
    pic:"https://wallpapercave.com/wp/wp1841407.jpg"
  },
  {
    name:"sasi",
    pic:"https://wallpapercave.com/wp/wp1841407.jpg"
  },
];
  return (
    <div className="App">
       {users.map((usr) =>(
       <Msg name={usr.name} pic={usr.pic} /> 
        ))}
    </div>
  );
}
function Msg({name, pic }) {
  return (
    <div>
      <img className="pic" src={pic} alt={name} />
      <h1>
        Hello <span className="user">{name}</span> 🥰🥰
      </h1>
    </div>
  );
}
