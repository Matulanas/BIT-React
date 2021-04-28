import { useEffect, useRef, useState, forwardRef } from "react"

const RefBox = forwardRef((props, inputRef) => {

    const [stateCount, setStateCount] = useState(0);

    const refCount = useRef(0);
    // const inputRef = useRef();

    const click1 = () => {
        const count = stateCount + 1;
        setStateCount(count);
        console.log("STATE UPDATE", count);
    }

    const click2 = () => {
        refCount.current++;
    
        console.log("REF UPDATE", refCount.current);
        inputRef.current.value = refCount.current;
    }

    useEffect(() => {
        console.log("Component MOUNTED", inputRef);
        inputRef.current.focus();
        inputRef.current.value = "lalalalaa";
    }, [inputRef])
    
    console.log("Component RERENDER", inputRef);
    return (
        <div className="box">
            <small>STATE: {stateCount}</small>
            <small>REF: {refCount.current}</small>
            <button style={{ margin: "5px"}} onClick={click1}>Add State</button>
            <button style={{ margin: "5px"}} onClick={click2}>Add Ref</button>
            <input type="text" ref={inputRef} />
        </div>
    )
})

export default RefBox;