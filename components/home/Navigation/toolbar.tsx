import { AppContext } from "@/components/AppContext";
import Menubutton from "@/components/common/Menubutton";
import Button from "@/components/common/Togglebutton";
import { ActionType } from "@/reducers/AppReducer";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";

export default function Toolbar() {
  const { state ,dispatch} = useContext(AppContext);
  console.log(state.themeMode)
  return (
    <nav className="absolute bottom-0 w-full left-0 bg-gray-700 flex p-2 justify-between ">
      <Button onClick={()=>{
        dispatch({
            type:ActionType.UPDATE,
            field:"themeMode",
            value:state.themeMode=="dark"?"light":"dark"
        })
      }}></Button>
      <a className="flex items-center text-white mr-4 " href="https://github.com/songguo1"><FaGithub size={24} /></a>
      
    </nav>
  );
}
