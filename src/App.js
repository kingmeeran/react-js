// import logo from './logo.svg';
import './App.css';

function App() {
  let user = [
    {
      name: "balaji",
      pic: "https://i.ndtvimg.com/i/2016-12/vivek-ramaswamy-650-400_650x400_61481621830.jpg"
    },
    {
      name: "siva",
      pic: "https://c.tadst.com/gfx/750w/day-persons-wdisabilities.jpg"
    },
    {
      name: "pradeep",
      pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
      name: "hanan",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIAXuXcmjH9G6zzy2gTXwSN1Z0aFOiQWlhg&usqp=CAU"
    }

  ]
  return (
    <div div className="App" >
      {user.map((d) => <User name={d.name} pic={d.pic} />)}
    </div>
  );
}

function User(props) {

  return (
    <section>
      <img src={props.pic}></img>
      <h1>hellow {props.name}🎉🎉</h1>
    </section>

  )
}

export default App;
