import krisstack from "krisstack";
export class Evaluator{
    
          ops  = new krisstack<String>();
         vals = new krisstack<number>();
    
      constructor() { }
        
          run(toEvaluate:any) {
    
            const tokens: string[] = toEvaluate.split("");
            for (const token of tokens) {
                if      (token===("("))  {}            
                else if (token===("+"))    this.ops.push(token);
                else if (token===("-"))    this.ops.push(token);
                else if (token===("*"))    this.ops.push(token);
                else if (token===("/"))    this.ops.push(token);
                else if (token===("sqrt")) this.ops.push(token);
                else if (token===(")")) {
                    const op = this.ops.pop();
                   var v = this.vals.pop();
                    if      (op===("+"))    v = this.vals.pop() + v;
                    else if (op===("-"))    v = this.vals.pop() - v;
                    else if (op===("*"))    v = this.vals.pop() * v;
                    else if (op===("/"))    v = this.vals.pop() / v;
                    else if (op===("sqrt")) v = Math.sqrt(v);
                    this.vals.push(v);
                }
                else this.vals.push(Number(token));
            }
            return this.vals.pop();
        }
    }
