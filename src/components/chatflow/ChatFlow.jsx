import { useCallback, useRef, useState } from "react";
import ReactFlow, {
    Background,
    Controls,
    ReactFlowProvider,
    addEdge,
    useEdgesState,
    useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import NotesPanel from "../sidebar/NotesPanel";
import MessageNode from "../customeNodes/MessageNode";
import SettingPanel from "../sidebar/SettingPanel";

const initialNodes = [
];

let id = 0;
const getId = () => `${id++}`;

const nodeTypes = {
    MessageNode: MessageNode,
  };

function ChatFlow() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [showSettingPanel,setShowSettingPanel] = useState(false);

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

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { message: `text message ${id}`  },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reactFlowInstance]
  );
  const onNodeClick = useCallback((event, node) => {
    console.log("Node clicked:", node.id);
    setShowSettingPanel(true);
    updateNodeData(node.id, { message: node.message });
  }, []);


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


  return (
    <div className="dndflow h-full w-full">
      <ReactFlowProvider>
      <div className="flex flex-row h-full w-full">
        <div className="reactflow-wrapper h-full w-full" ref={reactFlowWrapper}>
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
        {showSettingPanel ? <SettingPanel />:<NotesPanel />}
       </div>
      </ReactFlowProvider>
    </div>
  );
}

export default ChatFlow;
