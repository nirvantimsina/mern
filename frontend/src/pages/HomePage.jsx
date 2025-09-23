import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import api from "../lib/axios.js"

import NoteCard from '../components/NoteCard'
import Navbar from '../components/Navbar'
import NotesNotFound from '../components/NotesNotFound.jsx'
import { HomeIcon } from 'lucide-react'

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
      } catch (error) {
        console.log("Error fetching notes", error);
        toast.error("Failed to load notes!");
      } finally {
        setIsLoading(false); // ✅ fixed
      }
    };

    fetchNotes();
  }, []); // ✅ run only once

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-7xl mx-auto p-4 mt-4'>
        {isLoading && <div className='text-center text-primary py-10'>loading ...</div>}

        {notes.length ===0 && <NotesNotFound />}
        
        {notes.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage