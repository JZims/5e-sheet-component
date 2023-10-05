


function App() {
 


  return (
   
    <div className="container m-12 border-solid border-2" id="main-sheet"> 

        {/* Header Section */}
      <div className="grid grid-rows-3 grid-flow-col" id="header-section">
        <div className="shadow p-4 input-group row-span-3" id="character-name">
          <label htmlFor="character-name" > Character Name: </label>
          <br/>
          <input type="text" id="character-name" className="border-solid border"/>
        </div>
        <div className="shadow p-4" id="char-race">
          <label htmlFor="char-race" className="pr-3">Race:</label>
          <br/>
          <input className="border-solid border" type="text" id="char-race" />
        </div>
        <div className="shadow p-4 row-span-2" id="char-class">
          <label htmlFor="char-class" className="pr-3">Class(es):</label>
          <br/>
          <input type="text" id="char-class" className="border-solid border" />
        </div>
         <div className="shadow p-4" id="char-alignment">
          <label htmlFor="char-alignment" className="pr-3">Character Alignment:</label>
          <br/>
          <input type="text" id="char-alignment" className="border-solid border" />
        </div>
        <div className="shadow p-4 row-span-2" id="char-background">
          <label htmlFor="char-background" className="pr-3">Character Background:</label>
          <br/>
          <input type="text" id="char-background" className="border-solid border" />
        </div>
      </div>



      
    </div>
  );
};
  

export default App
