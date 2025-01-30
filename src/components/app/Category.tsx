import React from "react";
import clsx from "clsx"
const Category = React.memo(({ title, selected }: { title: React.ReactNode, selected?: boolean }): React.JSX.Element => {
    return <>
        <span className={clsx("py-1.5 px-3 capitalize rounded-xl body-s w-fit", {
            "bg-[var(--deep-blue)] text-[#F2F4FF]": selected,
            "bg-[#F2F4FF] text-[var(--deep-blue)]": !selected
        })}>{title}</span>
    </>
})
Category.displayName = "Category"
export default Category