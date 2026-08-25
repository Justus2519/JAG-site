export default function lnss(n: number){
    if(n>50){
        return "Please enter a term that's less  or equal to 50";
    }
    let pattern: number[] = [1];
    for(let i = 0; i<n; i++){
        let pat_new: number[] = new Array();
        for(let j = 0; j<pattern.length; j++){
            let temp = pattern[j];
            let count = 0;
            while(temp===pattern[j]){
                count++;
                j++;
            }
            j--;
            pat_new.push(count);
            pat_new.push(temp);
        }
        pattern = pat_new.slice();
    }
    let s = "";
    for(let i = 0; i<pattern.length; i++){
        let num = new Number(pattern[i]);
        s = s.concat(num.toString());
    }
    return s;
}