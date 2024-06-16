import React from "react";
import { useNodes, useEdges } from "reactflow";
import toast, { Toaster } from "react-hot-toast";
import { translation } from "../../utils/en-us";

const errorNotification = () =>
  toast.error(translation.CantSaveFlow, {
    id: "error",
  });   {/* error message when validation fails */}

function Navbar() {
  const nodes = useNodes();  {/* hook to access all the nodes present */}
  const edges = useEdges();  {/* hook to access all the edges present */}

  const handleSave = () => {
    if (nodes.length > 1) {
      edges.length === nodes.length - 1 
        ? console.log("correct")
        : errorNotification();
    }
  };  {/* edges will always be one less than nodes for sucessfull validation */}
  return (
    <React.Fragment>
      <nav className="w-full flex justify-between items-center p-4 pr-16 bg-gray-100">
        <div>
          <p>{translation?.BiteSpeed}</p>
        </div>
        <div className=" border border-sky-500 rounded  p-1 px-2 bg-white">
          <button
            className="btn rounded-sm text-sm text-sky-800 font-bold"
            onClick={handleSave}
          >
            {translation?.SaveChanges}
          </button>
        </div>
      </nav>
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: "#f54260",
              color: "white",
            },
          },
        }}
      />
    </React.Fragment>
  );
}

export default Navbar;
