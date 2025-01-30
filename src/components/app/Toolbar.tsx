import React, { forwardRef } from "react";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import iconCheck from "../../assets/shared/icon-check.svg"
const Toolbar = React.memo(forwardRef<HTMLDivElement>((props, ref): React.JSX.Element => {

    return <div ref={ref} className="bg-[#373F68] py-2 px-6 flex justify-between items-center">
        <Select />
        <button className="text-[0.75rem] font-bold text-[var(--light-gray)] bg-[var(--primary-purple)] px-4 py-3 rounded-xl">+ Add Feedback</button>
    </div>
}))
Toolbar.displayName = "Toolbar"
export default Toolbar
export const Select = (): React.JSX.Element => {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<{ name: string, value: string }>({ name: "Most Upvotes", value: "mupvote" })
    return <>
        <div className=" flex items-center gap-2 text-[0.75rem]">
            <span className="text-[var(--light-gray)]">Sort by  :</span>
            <div className="flex items-center space-x-4">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="w-fit bg-transparent hover:bg-transparent hover:text-white text-white font-bold border-none outline-none justify-start">
                            {selectedStatus ? selectedStatus.name : <>Default</>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-fit bg-white border-none" side="bottom" align="start">
                        <Command>
                            <CommandList>
                                <CommandGroup>
                                    <CommandItem key="mupvote" className="rounded-none border-b-[1px] border-solid border-b-[var(--dark-blue)]/15 flex justify-between items-center gap-4 px-6 py-3"
                                        value="mupvote"
                                        onSelect={(value) => {
                                            setSelectedStatus({ name: "Most Upvotes", value: value })
                                            setOpen(false)
                                        }}>
                                        <span className="text-base text-[var(--muted-blue)] hover:text-[var(--primary-purple)]">Most Upvotes</span>
                                        {selectedStatus.value == "mupvote" && <i className="block w-3 h-2 bg-[var(--primary-purple)]" style={{
                                            mask: `url("${iconCheck}") center /cover no-repeat`,
                                            WebkitMask: `url("${iconCheck}") center /cover no-repeat`
                                        }}></i>}
                                    </CommandItem>
                                    <CommandItem key="lupvote" className="rounded-none border-b-[1px] border-solid border-b-[var(--dark-blue)]/15 flex justify-between items-center gap-4 px-6 py-3"
                                        value="lupvote"
                                        onSelect={(value) => {
                                            setSelectedStatus({ name: "Least Upvotes", value: value })
                                            setOpen(false)
                                        }}>
                                        <span className="text-base text-[var(--muted-blue)] hover:text-[var(--primary-purple)]">Least Upvotes</span>
                                        {selectedStatus.value == "lupvote" && <i className="block w-3 h-2 bg-[var(--primary-purple)]" style={{
                                            mask: `url("${iconCheck}") center /cover no-repeat`,
                                            WebkitMask: `url("${iconCheck}") center /cover no-repeat`
                                        }}></i>}
                                    </CommandItem>
                                    <CommandItem key="mcmt" className="rounded-none border-b-[1px] border-solid border-b-[var(--dark-blue)]/15 flex justify-between items-center gap-4 px-6 py-3"
                                        value="mcmt"
                                        onSelect={(value) => {
                                            setSelectedStatus({ name: "Most Comments", value: value })
                                            setOpen(false)
                                        }}>
                                        <span className="text-base text-[var(--muted-blue)] hover:text-[var(--primary-purple)]">Most Comments</span>
                                        {selectedStatus.value == "mcmt" && <i className="block w-3 h-2 bg-[var(--primary-purple)]" style={{
                                            mask: `url("${iconCheck}") center /cover no-repeat`,
                                            WebkitMask: `url("${iconCheck}") center /cover no-repeat`
                                        }}></i>}
                                    </CommandItem>
                                    <CommandItem key="lcmt" className="flex justify-between items-center gap-4 px-6 py-3"
                                        value="lcmt"
                                        onSelect={(value) => {
                                            setSelectedStatus({ name: "Least Comments", value: value })
                                            setOpen(false)
                                        }}>
                                        <span className="text-base text-[var(--muted-blue)] hover:text-[var(--primary-purple)]">Least Comments</span>
                                        {selectedStatus.value == "lcmt" && <i className="block w-3 h-2 bg-[var(--primary-purple)]" style={{
                                            mask: `url("${iconCheck}") center /cover no-repeat`,
                                            WebkitMask: `url("${iconCheck}") center /cover no-repeat`
                                        }}></i>}
                                    </CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    </>
}
