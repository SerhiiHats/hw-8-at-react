import {combineReducers} from "redux";
import headerReducer from "../components/Header/headerReducer";
import titleSectionReduser from "../components/TitleSection/titleSectionReduser";

export default combineReducers({
  headerReducer: headerReducer,
  sectionTitle: titleSectionReduser,
});

