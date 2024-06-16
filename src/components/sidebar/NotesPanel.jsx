import { nodeTypes, nodeIcons } from "../../utils/nodeTypes";

function NotesPanel() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-1/4">
      <aside className="h-full w-full border-t border-l border-gray-200 p-2 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(nodeTypes).map((nodeType) => {
            const Icon = nodeIcons[nodeType]; // Get the corresponding icon for the node type
            return (
              <div
                key={nodeType}
                className="dndnode"
                onDragStart={(event) => onDragStart(event, nodeType)}
                draggable
              >
                <div className="border border-sky-500 rounded p-2 px-5 bg-white text-sky-500 flex flex-col items-center">
                  <div>{Icon && <Icon />}</div>
                  <div className="text-sm">{nodeType}</div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default NotesPanel;
