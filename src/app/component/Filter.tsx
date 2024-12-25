import React from "react";
import Navbar from "./Navbar";

type FilterOverlayProps = {
  onClose: () => void; // Type for the onClose prop
};

const FilterOverlay: React.FC<FilterOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Navbar at the top */}
      <Navbar />

      {/* Filter content below the navbar */}
      <div className="pt-16"> {/* Adjust for the Navbar height (if needed) */}
        <div className="p-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute mt-32 top-4 right-4 text-xl font-bold"
          >
            Close
          </button>

          {/* Filter content */}
          <h2 className="text-lg font-bold">Filters</h2>
          {/* Add filter options, sliders, etc. */}
        </div>
      </div>
    </div>
  );
};

export default FilterOverlay;
