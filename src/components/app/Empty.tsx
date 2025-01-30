import React from "react";
import emptyIcon from "../../assets/suggestions/illustration-empty.svg"
export default function Empty(): React.JSX.Element {
    return <div className="bg-white w-full h-full px-6 flex flex-col gap-6 items-center justify-center">
        <img src={emptyIcon} className="w-25.5 h-27 object-cover" />
        <h1 className="text-[var(--dark-blue)] text-[1.125rem] font-bold tracking-[-0.25px]">There is no feedback yet.</h1>
        <p className="text-[var(--muted-blue)] text-[0.75rem] text-center">
            Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
        </p>
    </div>

}