import Brown from "./Brown";
import Green from "./Green";

const ColorHolder = props => { // <-- Komponentas

    if (props.showColor === 1) {
        return ( <Green /> );
    }
    // return ( <Brown /> );
    return null;


    // let color = (props.showColor === 1) ? <Green /> : <Brown />;
    // return (
    //     <>{color}</>
    // )


    // return (
    //     <>
    //         {
    //             props.showColor && <Green />
    //         }
    //     </>
    // );

}

export default ColorHolder;