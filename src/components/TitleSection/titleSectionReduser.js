import {initialStore} from "../../redux/initialStore";

const titleSectionReduser = (sectionTitle = initialStore.sectionTitle, action) =>{
  switch (action.type){
    default: return sectionTitle;
  }
}

export default titleSectionReduser;