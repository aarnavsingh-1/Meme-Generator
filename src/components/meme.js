import React from "react";

export default function Meme(){
  const[memeData,setMemeData]=React.useState([]);
  const [memeImage,setMemeImage]=React.useState({
  topText:"",
  bottomText:"",
  memeUrl:"https://i.imgflip.com/1bij.jpg"
  }


  );

  React.useEffect(()=>{
        
    fetch("https://api.imgflip.com/get_memes")

        .then(res=>res.json())
        .then(data=>setMemeData(data.data.memes))
},[])
function handleChange(event){
  const{name,value}=event.target
  setMemeImage((prevMeme)=>{
  return{
    ...prevMeme,
    [name]:value
  }
  })
  

}


    function getMemeImage(){
      
       const randomNum= Math.floor(Math.random() * memeData.length)
       const image = memeData[randomNum].url
       setMemeImage((prevMeme)=>{
        return({...prevMeme,
        memeUrl: image,
       })
       })
       
    
    }



    return(
      <main>
        
         
            <div className="input-wrapper">
                <input type="text" name="topText" value={memeImage.topText} className="form--input" placeholder="Top-Text"onChange={handleChange}/>
                <input type="text"  name="bottomText" value={memeImage.bottomText}className="form--input"placeholder="Bottom-Text"onChange={handleChange}/>
               
                </div>
                <div   className="buttonIs" >
                <button onClick={getMemeImage}>Get A New Memeeeee🥸</button>
                </div>
                
               
                 <br></br>
            
                 <div className="meme">
                 <img src={memeImage.memeUrl} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
            </main>)
}