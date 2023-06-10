
       class Stack{
        constructor(){
                this.stack=[];
                this.length=0;
        }
        push(...input){
                this.stack=[...this.stack,...input]
                this.length+=input.length;
        }
        pop(){
                let data;
                if(this.length<=0){
                        console.log("Stack is Empty")
                }else{
                        data=this.stack[this.length-1];
                        delete this.stack[this.length-1];
                        this.length--;
                }
                return data;
        }
        size(){
                return this.length;
        }
        top(){
                return this.stack[this.length-1];
        }
        print(){
                return this.stack;
        }
        printReverse(){
                var arr2=[];
                for(var i=this.length-1; i>=0; i--){
                        arr2.push(this.pop());
                }
                console.log(arr2);
        }        
       }
       let s1=new Stack();
       s1.push(8,5,9,7,8,6)
       console.log(s1.printReverse());