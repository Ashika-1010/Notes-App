import React, { useState ,useEffect} from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

const App = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [task, setTask] = useState(() => {
  const savedNotes = localStorage.getItem("notes")
  return savedNotes ? JSON.parse(savedNotes) : []
})

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(task))
  },[task])

  const submitHandler = (e) => {
    e.preventDefault()
    if (!title || !desc) return
    const copyTask = [...task]
    copyTask.push({ title, desc })
    setTask(copyTask)
    setTitle("")
    setDesc("")
  }

  const deleteNote = (indexToDelete) => {
    const updatedTasks = task.filter((_, index) => index !== indexToDelete)
    setTask(updatedTasks)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-zinc-950 text-zinc-100 font-sans">

      <LeftPanel 
      title={title}
      setTitle={setTitle}
      desc={desc}
      setDesc={setDesc}
      submitHandler={submitHandler}
      />

      <RightPanel
      task={task}
      deleteNote={deleteNote}
      />

    </div>
  )
}

export default App