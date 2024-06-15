import { Handle, Position } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

function MessageNode({data}) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className="border rounded shadow-lg bg-white">
        <div className="flex flex-row items-center gap-2 bg-[#b5ede3] px-1 py-0.5">
          <BiMessageRoundedDetail size={12} />
          <div className="text-xs">Send Message</div>
          <div className="ml-auto p-1 bg-white rounded-full">
            <BsWhatsapp className="" size={12} color={"green"} />
          </div>
        </div>
        <input disabled value={data.message}/>
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

export default MessageNode;
