import style from './App.module.scss';
import Header from "../Header/Header";
import SectionFirst from "../SectionFirst/SectionFirst";
import SectionSecondary from "../SectionSecondary/SectionSecondary";

function App() {
  return (
    <div className={style.App}>
      Something
      <Header/>
      <SectionFirst/>
      <SectionSecondary/>
    </div>
  );
}

export default App;
