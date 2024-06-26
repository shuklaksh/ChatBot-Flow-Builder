import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { translation } from "../../utils/en-us";

function SettingPanel({message, onChange,setShowSettingPanel}) {
    const [nodeMessage, setNodeMesssage] = useState('');

    useEffect(() => {
        setNodeMesssage(message)
    },[message])

    const handleChange = (e) => {
        onChange(e.target.value);
        setNodeMesssage(e.target.value);
      };
  return (
    <div className="w-1/4">
    <aside className=" h-full w-full border-t border-l border-gray-200 py-1">
      <div className="w-full">
        <div className="flex flex-row w-full items-center border-b p-1">
            <IoMdArrowBack className="cursor-pointer" onClick={() => setShowSettingPanel(false)}/>
            <h6 className="text-center w-full">{translation.Message}</h6>
        </div>
        <div className="p-1 w-full">
            <div>
                Text
            </div>
            <textarea className="border rounded w-full px-2" value={nodeMessage} onChange={handleChange}/>
        </div>
      </div>
    </aside>
      
    </div>
  )
}

export default SettingPanel
