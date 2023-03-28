import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

function App() {
  const [sandwiches, setSandwiches] = useState([])
  const [images, setImages] = useState([<img src="client\images\bagel.jpg"></img>])
  console.log(images)

  useEffect(() => {
    getSandwiches()
  },[])

  async function getSandwiches() {
    const fetchedSandwiches = await axios.get("/sandwiches");
    setSandwiches(fetchedSandwiches.data)
  }

  return (
    
    <div className="App">
      
      <div class='header'><h1>Sandwich Recipes</h1></div>
      <div class ="container">
      { 
        sandwiches.map((sandwich) => {
          return (
            <div className='child'> 
             <div class="imageBox"><img class="image" src="client\images\bagel.jpg"></img></div>
             <h2 class="title">{sandwich.name}</h2>
             <p class ="likes">{sandwich.likes} people liked this sandwich</p>
             <p class = "description">{sandwich.desc}</p>
             <table>
             <td class="col">{sandwich.prep_time} mins</td>
             <td class="col">{sandwich.default_servings} serving(s)</td>
             <td class="col">{sandwich.calories} calories</td>
             </table>
             <div class="likebutton"><span class="material-symbols-outlined">favorite</span> Like</div>
             <div class="share"><span class="material-symbols-outlined">share</span>Share</div>
            </div>
          )
    
        })
    
      }
      </div>
    </div>
  );
}

export default App;
