import { memo } from "react"

export const Plane = ({number, time}) => {
    console.log("Plane Render");

    return (
        <div className="box">
            <small>Number: {number}</small>
            <small>Time: {time}</small>
        </div>
    )
}

const checkReRender = (propPrev, propNext) => {
    console.log(propPrev);
    console.log(propNext);
    // return (propPrev === propNext);
    return false;
} 

export const MemoPlane = memo(Plane, checkReRender);