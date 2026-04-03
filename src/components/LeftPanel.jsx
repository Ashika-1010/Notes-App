import React from 'react'

const LeftPanel = ({title,setTitle,desc,setDesc,submitHandler}) => {

  return (
    <form
        onSubmit={submitHandler}
        className="lg:w-5/12 p-10 flex flex-col gap-5 border-r border-zinc-800"
      >
        <div className="flex flex-col gap-1 mb-2">
          <h1 className="text-4xl font-bold text-zinc-100">Add a note</h1>
        </div>

        <div className="h-px bg-zinc-800" />

        <div className="flex flex-col gap-1.5">
          <label className="text-xs tracking-widest uppercase text-zinc-500 font-medium">Heading</label>
          <input
            type="text"
            placeholder="Give your note a title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-zinc-100 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:bg-zinc-800 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs tracking-widest uppercase text-zinc-500 font-medium">Details</label>
          <textarea
            placeholder="Write your thoughts here..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-zinc-100 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:bg-zinc-800 transition-all h-28 resize-none leading-relaxed"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 font-semibold text-sm rounded-md py-3 transition-all cursor-pointer"
        >
          <span className="w-5 h-5 bg-black/15 rounded-full flex items-center justify-center text-base leading-none">+</span>
          Add note
        </button>
      </form>
  )
}

export default LeftPanel