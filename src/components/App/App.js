import style from './App.module.scss';
import Header from "../Header/Header";
import SectionFirst from "../SectionFirst/SectionFirst";
import SectionSecond from "../SectionSecond/SectionSecond";
import SectionThird from "../SectionThird/SectionThird";
import SectionFourth from "../SectionFourth/SectionFourth";

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <SectionFirst/>
      <SectionSecond/>
      <SectionThird/>
      <SectionFourth/>
    </div>
  );
}

export default App;
