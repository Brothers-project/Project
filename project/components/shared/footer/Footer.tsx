import React from "react";

export interface FooterPropsType {
    className?: string
}

const Footer: React.FC<FooterPropsType> = ({ className }) => {
    return (
        <div className={`${className}`}>Footer</div>
    )
}

export default Footer;
