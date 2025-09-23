import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

export const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md text-center">
            <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon className="size-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">No Notes Yet.</h3>
            <p className="text-base-content/70">
                Ready To Organize Your Thoughts? Create Your First Note To Get Started.
            </p>
            <Link to={"/create"} className="btn btn-primary">
                Create Your First Note
            </Link>
        </div>
  )
}
