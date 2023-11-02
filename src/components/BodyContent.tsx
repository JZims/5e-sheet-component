import { ReactElement } from "react";

const abilityTitles: string[] = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

const globalBonuses: string[] = [
  "Proficiency Bonus",
  "Passive Perception",
  "Inspiration",
];

const GlobalBonusBlock = (props: { stat: String }): ReactElement => {
  const tagId = props.stat.split(" ").join("");

  return (
    <>
      <div className="flex flex-col border-x-2 px-2 text-sm">
        <label htmlFor={tagId}> {props.stat} </label>
        <div className=" h-18 w-18 flex flex-none flex-col items-center justify-center border-4 p-4">
          <input
            id={tagId}
            pattern="\b([1-9]|[12][0-9]|3[0-2])\b"
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            className="peer box-content p-2 text-center text-xl invalid:text-red-600 hover:outline-dashed"
            maxLength={2}
            size={2}
          />
          <p className=" invisible text-sm text-red-600 peer-invalid:visible">
            Numbers up to 32 only!
          </p>
        </div>
      </div>
    </>
  );
};

const AbilityScoreBlock = (props: { stat: String }): ReactElement => {
  return (
    <>
      <div className="col-span-2 row-span-1 mr-2 grid grid-flow-col border-4 border-solid">
        <div className="relative box-border h-24 w-24 border-4">
          <input
            id={props.stat.toLowerCase() + "Input"}
            className=" absolute right-1 top-1 box-content p-2 text-center text-xl hover:outline-dashed"
            maxLength={2}
            size={2}
            placeholder="8"
          />

          <div className="absolute bottom-0 left-0"> {props.stat} </div>
          <input
            id={props.stat.toLowerCase() + "Modifier"}
            className="absolute top-0 box-border h-9 w-9 justify-self-center border-4 p-2"
            value="0"
            disabled
          />
        </div>

        <div className="grid-flow-row auto-rows-min md:grid">
          <div>
            <input
              type="checkbox"
              value="trained"
              id={props.stat.toLowerCase() + "Trained"}
            />
            <input
              type="text"
              id={props.stat.toLowerCase() + "SavingThrowMod"}
              className="mx-2 w-10 outline-4"
              maxLength={2}
            />
            <label htmlFor={props.stat.toLowerCase() + "Trained"}>
              {" "}
              Saving Throws{" "}
            </label>
          </div>
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
          {globalBonuses.map((title, indx) => {
            return <GlobalBonusBlock stat={title} key={indx} />;
          })}
        </div>
        {abilityTitles.map((title, indx) => {
          return <AbilityScoreBlock stat={title} key={indx} />;
        })}

        {/* Right Column */}
        <div className="row-span-8 col-span-2 col-start-3 ml-2 border-4 border-solid text-center">
          Hay
        </div>
      </div>
    </div>
  );
}
