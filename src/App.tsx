import BodyContent from "./components/BodyContent";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";



function App() {

  return (
  <div className="bg-stone-100 max-h-screen flex flex-col">
    {/* Header Section */}
    <PageHeader />

    {/* Body Content */}
    <BodyContent /> 

    {/* Footer Section */}
    <PageFooter />
  </div>
  );
};
  

export default App
