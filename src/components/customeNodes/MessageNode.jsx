import { Handle, Position } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { translation } from "../../utils/en-us";

function MessageNode({data}) {
  return (
    <>
      <Handle className="size-1.5" type="target" position={Position.Left} />
      <div className="border rounded shadow-lg bg-white">
        <div className="flex flex-row items-center gap-2 bg-[#b5ede3] px-1 py-0.5">
          <BiMessageRoundedDetail size={12} />
          <div className="text-xs">{translation.SendMessage}</div>
          <div className="ml-auto p-1 bg-white rounded-full">
            <BsWhatsapp className="" size={12} color={"green"} />
          </div>
        </div>
        <textarea
          className="p-1 text-sm w-full resize-none"
          disabled
          value={data.message}
          rows={Math.min(10, data.message.split('\n').length)}
        />
      </div>
      <Handle className="size-1.5" type="source" position={Position.Right} />
    </>
  );
}

export default MessageNode;
