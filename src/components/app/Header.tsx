import React from "react";
import { CustomTrigger } from "./SidebarComponent";
const Header = React.memo(React.forwardRef<HTMLDivElement, { onToggle: () => void }>((props, ref) => {
    console.log("header");
    
    const { onToggle } = props;
    return (
        <div ref={ref} className="h-fit w-full custom_gradient flex justify-between items-center py-4 px-6">
            <div className="text-white ">
                <h1 className="text-base font-bold leading-[-0.2px]">Frontend Mentor</h1>
                <span className="font-medium text-[0.75rem]">Feedback Board</span>
            </div>
            <CustomTrigger onToggle={onToggle} />
        </div>
    );
}));

Header.displayName = "Header"
export default Header