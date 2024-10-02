import React from 'react'

export const Layout = (props) => {
    const { children } = props
    return (
        <div className="bg-darkBlue min-h-screen w-full">
            <div className="relative flex max-w-8xl mx-auto pt-5 flex-col gap-4 p-9 bg-darkBlue">
                {children}
            </div>
        </div>

    )
}
