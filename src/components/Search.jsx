import React from 'react'

export const Search = (props) => {

    const { handleSearch } = props

    return (
        <div className="flex w-full h-fit fixed top-0 left-0 right-0 z-40 backdrop-blur-3xl border-b border-gray-700 pb-4">
            <label className="input flex items-center gap-2 mx-auto bg-slate-800 hover:bg-slate-700 w-fit mt-4 border border-gray-700">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
                <input type="text" className="grow" placeholder="Search" onChange={handleSearch}/>
                <kbd className="kbd kbd-sm">ctrl</kbd>
                +
                <kbd className="kbd kbd-sm">k</kbd>
            </label>
        </div>
    )
}
