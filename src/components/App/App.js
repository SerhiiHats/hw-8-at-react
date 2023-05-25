import style from './App.module.scss';
import Header from "../Header/Header";
import SectionFirst from "../SectionFirst/SectionFirst";
import SectionSecond from "../SectionSecond/SectionSecond";

function App() {
  return (
    <div className={style.App}>
      Something
      <Header/>
      <SectionFirst/>
      <SectionSecond/>
    </div>
  );
}

export default App;
