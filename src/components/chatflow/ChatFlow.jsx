import { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import NotesPanel from "../sidebar/NotesPanel";
import { nodeTypes } from "../../utils/nodeTypes";
import SettingPanel from "../sidebar/SettingPanel";
import { getId } from "../../utils/constant&functions";

function ChatFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [showSettingPanel, setShowSettingPanel] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [selectedNodeMessage, setSelectedNodeMessage] = useState("");

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event?.dataTransfer?.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined") {
        return;
      }
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newId = getId();
      const newNode = {
        id: newId(),
        type,
        position,
        data: { message: `text message ${newId}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reactFlowInstance]
  );
  const onNodeClick = useCallback((event, node) => {
    setSelectedNodeId(node.id);
    setSelectedNodeMessage(node.data.message); // Update message in setting panel
    setShowSettingPanel(true);
  }, []);

  {
    /* function to update data of existing node */
  }
  const updateNodeData = useCallback((id, newData) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              ...newData,
            },
          };
        }
        return node;
      })
    );
  }, []);

  {
    /* function to handle text change in settings panel */
  }
  const handleSettingChange = useCallback(
    (newMessage) => {
      if (selectedNodeId) {
        updateNodeData(selectedNodeId, { message: newMessage });
      }
    },
    [selectedNodeId, updateNodeData]
  );

  return (
    <div className="dndflow h-full w-full">
      <div className="flex flex-row h-full w-full">
        <div className="reactflow-wrapper h-full w-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
        {/* to check which panel to show */}
        {showSettingPanel ? (
          <SettingPanel
            message={selectedNodeMessage}
            onChange={handleSettingChange}
            setShowSettingPanel={setShowSettingPanel}
          />
        ) : (
          <NotesPanel />
        )}
      </div>
    </div>
  );
}

export default ChatFlow;
