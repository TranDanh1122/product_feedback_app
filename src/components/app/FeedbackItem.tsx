import React from "react";
import Category from "./Category";
import upVoteIcon from "../../assets/shared/icon-arrow-up.svg"
import cmtIcon from "../../assets/shared/icon-comments.svg"
function FeedbackItem(): React.JSX.Element {
    return <>
        <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-4">
            <h2 className="text-[var(--dark-blue)] font-bold tracking-[-0.18px] text-[0.75rem]">Add tags for solutions</h2>
            <p className="text-[var(--muted-blue)] tracking-[-0.18px] text-[0.75rem]">Easier to search for solutions based on a specific stack.</p>
            <Category title="Enhancement" />
            <div className="flex justify-between items-center">
                <span className="py-2 px-3 rounded-md bg-[#F2F4FF] flex justify-between items-center gap-2">
                    <i className="w-2 h-1 block bg-[var(--primary-blue)]"
                        style={{
                            mask: `url("${upVoteIcon}") center / cover no-repeat `,
                            WebkitMask: `url("${upVoteIcon}") center / cover no-repeat `
                        }}>
                    </i>
                    <span className="text-[var(--dark-blue)] text-[0.75rem] font-bold tracking-[-0.18px]">112</span>
                </span>
                <span className="py-2 px-3 capitalize rounded-md flex justify-between items-center gap-2">
                    <i className="w-4.5 h-4 block bg-[#CDD2EE]"
                        style={{
                            mask: `url("${cmtIcon}") center / cover no-repeat `,
                            WebkitMask: `url("${cmtIcon}") center / cover no-repeat `
                        }}>
                    </i>
                    <span className="text-[var(--dark-blue)] text-[0.75rem] font-bold tracking-[-0.18px]">2</span>
                </span>
            </div>

        </div>
    </>
}
export default React.memo(FeedbackItem)