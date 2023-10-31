import { ReactElement } from "react";

const abilityTitles = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

const AbilityScoreBlock = (stat: string): ReactElement => {
  return (
    <>
      <div className="col-span-2 row-span-1 mr-2 grid border-4 border-solid">
        <div className="relative box-border h-24 w-24 border-4">
          <input
            id="`${title}'Input"
            className=" absolute right-1 top-1 box-content p-2 text-center text-xl hover:outline-dashed"
            maxLength={2}
            size={2}
            placeholder="8"
          />
          <div className="absolute bottom-0 left-0"> {stat} </div>
          <div className="absolute top-0 box-border h-9 w-9 border-4 p-2"></div>
        </div>
        <div id="" className="justify-self-end">
          Hey
        </div>
      </div>
    </>
  );
};

export default function BodyContent() {
  return (
    <div className="border-8 border-solid" id="main-sheet">
      {/* Left Column */}
      <div className="xs:flex xs:flex-col grid-flow-col grid-cols-4 grid-rows-8 gap-4 md:grid">
        <div className="col-span-2 row-span-1 mr-2 grid grid-flow-col grid-cols-3 place-content-baseline p-2 text-center">
          <div className="relative flex flex-col border-x-2 px-4 text-sm">
            <label htmlFor="profBonus"> Proficiency Bonus </label>
            <div className=" h-18 w-18 flex flex-none flex-col items-center justify-center border-4 p-4">
              <input
                id="profBonus"
                className=" box-content p-2 text-center text-xl hover:outline-dashed"
                maxLength={2}
                size={2}
                type="text"
              ></input>
            </div>
          </div>
          <div className="flex flex-col border-x-2 px-2 text-sm">
            <label htmlFor="passivePerception"> Passive Perception </label>
            <div className=" h-18 w-18 flex flex-none flex-col items-center justify-center border-4 p-4">
              <input
                id="passivePerception"
                className=" box-content p-2 text-center text-xl hover:outline-dashed"
                maxLength={2}
                size={2}
              ></input>
            </div>
          </div>
          <div className="flex flex-col border-x-2 px-2 text-sm">
            <label htmlFor="inspirationInput"> Inspiration </label>
            <div className=" h-18 w-18 flex flex-none flex-col items-center justify-center border-4 p-4">
              <input
                id="inspirationInput"
                className=" box-content p-2 text-center text-xl hover:outline-dashed"
                maxLength={2}
                size={2}
              ></input>
            </div>
          </div>
        </div>
        {abilityTitles.map((title) => {
          return (
            <div className="col-span-2 row-span-1 mr-2 grid border-4 border-solid">
              <div className="relative box-border h-24 w-24 border-4">
                <input
                  id="`${title}'Input"
                  className=" absolute right-1 top-1 box-content p-2 text-center text-xl hover:outline-dashed"
                  maxLength={2}
                  size={2}
                  placeholder="8"
                />
                <div className="absolute bottom-0 left-0"> {title} </div>
                <div className="absolute top-0 box-border h-9 w-9 border-4 p-2"></div>
              </div>
              <div id="" className="justify-self-end">
                Hey
              </div>
            </div>
          );
        })}

        {/* Right Column */}
        <div className="row-span-8 col-span-2 col-start-3 ml-2 border-4 border-solid text-center">
          Hay
        </div>
      </div>
    </div>
  );
}
