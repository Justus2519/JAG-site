import React from 'react';

interface Props {
    trigger: boolean;
    setInfo: (btn:string)=>void;
}
function Popup(props: React.PropsWithChildren<Props>) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <button onClick={()=>props.setInfo('none')}>Close</button>
            </div>
        </div>
    ): "";
}

export default Popup;