import {initialStore} from "../../redux/initialStore";

const headerReducer = (headerTitle = initialStore.headerTitle, action) =>{
  switch (action.type){
    default: return headerTitle;
  }
}

export default headerReducer;