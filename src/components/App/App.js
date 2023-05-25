import style from './App.module.scss';
import Header from "../Header/Header";
import SectionFirst from "../SectionFirst/SectionFirst";
import SectionSecond from "../SectionSecond/SectionSecond";
import SectionThird from "../SectionThird/SectionThird";

function App() {
  return (
    <div className={style.App}>
      Something
      <Header/>
      <SectionFirst/>
      <SectionSecond/>
      <SectionThird/>
    </div>
  );
}

export default App;
