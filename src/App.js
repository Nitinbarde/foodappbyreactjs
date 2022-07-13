import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Heeader/Header";
import MenuItem from "./components/MenuItem/MenuItem";
import Mycard from "./components/Cards/Mycard";

function App() {
  const foodItems = [
    {
      name: "Pizza",
      imgLink:
        "https://st.depositphotos.com/1900347/4146/i/950/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg",
    },

    {
      name: "Biryani",
      imgLink:
        "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg",
    },
    {
      name: "Cake",
      imgLink:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Dosa",
      imgLink:
        "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
    },
    {
      name: "Sandwitch",
      imgLink:
        "https://static.toiimg.com/thumb/60057435.cms?width=1200&height=900",
    },
  ];

  return (
    <>
      <Header />
      <h1>Top 5 Favourite Food</h1>
      <MenuItem />
      <Mycard foodItems={foodItems} />
    </>
  );
}

export default App;
