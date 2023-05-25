import style from './App.module.scss';
import Header from "../Header/Header";
import TitleSection from "../TitleSection/TitleSection";
import SectionFirst from "../SectionFirst/SectionFirst";

function App() {
  return (
    <div className={style.App}>
      Something
      <Header/>
      <SectionFirst/>
    </div>
  );
}

export default App;
