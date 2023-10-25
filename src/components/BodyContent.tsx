
const abilityTitles = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]

// function AbilityScoreBlock = () => {

//   return(
    
//   )
// }

export default function BodyContent () {
    return (
        
    <div className="border-solid border-8" id="main-sheet"> 

         { /* Left Column */ }
      <div className="md:grid grid-rows-8 grid-cols-4 grid-flow-col xs:flex xs:flex-col gap-4">
        <div className="row-span-1 col-span-2 mr-2 text-center grid grid-cols-3 grid-flow-col p-2 place-content-baseline">
          <div className="flex flex-col text-sm px-4 border-x-2 relative">
              <label htmlFor="profBonus"> Proficiency Bonus </label> 
              <div className=" h-18 w-18 p-4 border-4 flex flex-col flex-none justify-center items-center">
              <input id="profBonus" className=" p-2 box-content text-xl text-center hover:outline-dashed" maxLength={2} size={2} type="text">
              </input>
          </div>
          </div>
          <div className="flex flex-col text-sm px-2 border-x-2"> 
          <label htmlFor="passivePerception"> Passive Perception </label> 
               <div className=" h-18 w-18 p-4 border-4 flex flex-col flex-none justify-center items-center">
              <input id="passivePerception" className=" p-2 box-content text-xl text-center hover:outline-dashed" maxLength={2} size={2}>
              </input>
          </div>
          </div>
          <div className="flex flex-col text-sm px-2 border-x-2">
              <label htmlFor="inspirationInput"> Inspiration </label> 
              <div className=" h-18 w-18 p-4 border-4 flex flex-col flex-none justify-center items-center">
              <input id="inspirationInput" className=" p-2 box-content text-xl text-center hover:outline-dashed" maxLength={2} size={2}>
              </input>
          </div>
        </div>
       
        </div>
        
        { abilityTitles.map((title) => {
          return (
            <div className="row-span-1 col-span-2 border-solid border-4 mr-2">
              <div className="box-border h-24 w-24 border-4 relative">
                <div className="box-border h-9 w-9 p-2 border-4 absolute top-0">
                  
                </div>
              </div>
            </div>
          )
        })}
     
        
        
        {/* Right Column */}
        <div className="row-span-8 col-start-3 col-span-2 border-solid border-4 text-center ml-2">
          Hay
        </div>
      </div>
      
    </div>
    )
}