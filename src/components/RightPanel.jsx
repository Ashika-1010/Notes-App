import React from 'react'

const RightPanel = ({task,deleteNote}) => {

  return (
    <div className=" lg:flex flex-1 p-10  flex-col gap-6 overflow-y-auto">
        <div className="lg:flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100 mt-1">Recent notes</h2>
          </div>
          <span className="text-xs bg-amber-500/10 border border-amber-500/25 text-amber-500 font-medium rounded-full px-3 py-1">
            {task.length} {task.length === 1 ? 'note' : 'notes'}
          </span>
        </div>

        {task.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-16 opacity-40">
            <span className="text-4xl">✍️</span>
            <p className="text-sm text-zinc-400 italic">No notes yet — add one to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {task.map((note, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 rounded-lg p-4 flex flex-col gap-2 relative min-h-40 transition-all hover:-translate-y-0.5"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500/70 rounded-t-lg" />
                <p className="text-sm font-semibold text-zinc-100 leading-snug pt-1 line-clamp-2">{note.title}</p>
                <p className="text-xs text-zinc-500 leading-relaxed flex-1 overflow-y-auto">{note.desc}</p>
                <button
                  onClick={() => deleteNote(index)}
                  className="self-start text-xs text-zinc-600 border border-zinc-700 hover:border-red-500/40 hover:text-red-400 hover:bg-red-500/10 rounded px-2 py-1 transition-all cursor-pointer"
                >
                  ✕ Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default RightPanel