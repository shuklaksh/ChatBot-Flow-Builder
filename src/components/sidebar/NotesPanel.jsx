function NotesPanel() {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
  return (
    <div className="w-1/4">
    <aside className=" h-full w-full border-t border-l border-gray-200 p-2 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    <div className="dndnode " onDragStart={(event) => onDragStart(event, 'default')} draggable>
      <div className="border border-sky-500 rounded  p-2 px-5 bg-white  text-sky-500">
            Default Node
      </div>
    </div>
    <div className="dndnode " onDragStart={(event) => onDragStart(event, 'default')} draggable>
      <div className="border border-sky-500 rounded  p-2 px-5 bg-white text-sky-500">
            Default Node
      </div>
    </div>
    <div className="dndnode " onDragStart={(event) => onDragStart(event, 'MessageNode')} draggable>
      <div className="border border-sky-500 rounded  p-2 px-5 bg-white  text-sky-500">
      MessageNode
      </div>
    </div>
    
    </div>
      

    </aside>
      
    </div>
  )
}

export default NotesPanel

