import "./LookNSay.css";
import lnss from "./lsn-func";

import {useState} from "react";

function LookNSay(){
    const [term, setTerm] = useState("nth term here");
    const [n, setN] = useState(0);
    return (
        <div>
            <h1>Look And Say Sequence</h1>
            <div className="lns-content">
                <div className="lns-explain">
                    <p>
                        The look and say sequence is a fun recursive sequence you may have heard about. I was introduced to the sequence through being shown the first three terms and trying to generate the next one. The first few terms are on the right, I invite you to do the same. 
                        <br/><br/>Explanation: starting from the string "1", you generate the next term by saying out loud the amount of the same number appearing in succession. In this case we see one "1" so the next term will be "11". And so on. 
                    </p>
                </div>
                <div className="lns-example">
                    <p >
                        1<br/>11<br/>21<br/>1211<br/>111221<br/>312211
                    </p>
                </div>
            </div>
            <div className="input-box">
                <input type="number" placeholder={`${n}`} onChange={e => setN(Number(e.target.value))}></input>
                <button onClick={()=>setTerm(lnss(n))}>Generate</button>
            </div>
            <div className="number-box">{term}</div>
        </div>
    )
}

export default LookNSay;