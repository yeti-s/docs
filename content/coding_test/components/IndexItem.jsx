import React from "react";
import MiniBox from "@content/components/MiniBox";

const style = {
    wrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontSize: '2rem',
        fontWeight: 'bold',
        textDecorationLine: 'none',
        // "&:hover": {
        // }
    },
    level_box: {
        width: 35,
        backgroundColor: 'yellow'
    }
}

const IndexItem = ({url, level, solved, children}) => {
    return (
        <div style={style.wrapper} href={url}>
            <MiniBox color="warning" text={`Lv. ${level}`}/>
            <MiniBox color={solved ? "info" : "error"} text={solved ? 'sol':'unsol'}/>
            <a style={style.link} href={url}>{children}</a>
        </div>
    )
}

export default IndexItem