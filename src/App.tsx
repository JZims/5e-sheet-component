


function App() {
 


  return (
  <>
  {/* Header Section */}
   <div className="container md:m-x-12 md:mx-auto border-solid border-8" id="header-section"> 
      <div className="md:grid grid-rows-2 grid-flow-col xs:flex xs:flex-col" >
        <div className="p-4 input-group row-span-3 " id="character-name">
          <label htmlFor="character-name" >Character Name: </label>
          <br/>
          <input type="text" id="character-name" className=" border-black border-solid border"/>
        </div>
        <div className=" p-4" id="char-race">
          <label htmlFor="char-race" className="pr-3">Race:</label>
          <br/>
          <input className="border-black border-solid border" type="text" id="char-race" />
        </div>
        <div className="p-4 row-span-2" id="char-class">
          <label htmlFor="char-class" className="pr-3">Class(es):</label>
          <br/>
          <input type="text" id="char-class" className=" border-black border-solid border" />
        </div>
         <div className="p-4" id="char-alignment">
          <label htmlFor="char-alignment" className="pr-3">Alignment:</label>
          <br/>
          <input type="text" id="char-alignment" className="border-black border-solid border" />
        </div>
        <div className="p-4 row-span-2" id="char-background">
          <label htmlFor="char-background" className="pr-3">Background:</label>
          <br/>
          <input type="text" id="char-background" className="border-black border-solid border" />
        </div>
      </div>
      <br />
    </div>
    <div className="container md:m-x-12 mt-6 md:mx-auto border-solid border-8" id="main-sheet"> 
      <div className="md:grid grid-rows-6 grid-cols-4 grid-flow-col xs:flex xs:flex-col gap-4">
        <div className="row-span-3 col-span-2 border-solid border-4">
          Hay
        </div>
        
        
        <div className="row-span-6 col-span-2 border-solid border-4 text-center ml-4">
          Hay
        </div>
      </div>
    </div>
  </>
  );
};
  

export default App
