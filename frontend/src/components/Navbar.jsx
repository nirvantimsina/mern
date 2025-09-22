import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

// the /10 at the end of any color would define its opacity

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <Link
            to={"/"}
            className="text-2xl font-bold text-primary tracking-normal font-mono"
          >
            Nirvan Notes
          </Link>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>Create Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
