import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: `Home`,
        path: `/`,
        icon: <AiIcons.AiFillHome />,
        cName: `nav-text`
    },
    {
        title: `Intro ReactJs`,
        path: `/Intro`,
        icon: <FaIcons.FaCartPlus />,
        cName: `nav-text`
    },
    {
        title: `StylingComponents`,
        path: `/StylingComponents`,
        icon: <FaIcons.FaCartPlus />,
        cName: `nav-text`
    },
    {
        title: `FormValidation`,
        path: `/FormValidation`,
        icon: <FaIcons.FaCartPlus />,
        cName: `nav-text`
    },
    {
        title: `LifecycleComponents`,
        path: `/LifecycleComponents`,
        icon: <FaIcons.FaCartPlus />,
        cName: `nav-text`
    },
    {
        title: `Hooks Functional`,
        path: `/Hooks`,
        icon: <FaIcons.FaCartPlus />,
        cName: `nav-text`
    }
];