class Queue{
        constructor(){
                this.queue=[];
                this.length=[];
        }
        enQueue(...args){
                this.queue=[...this.queue,...args];
                this.length+=args.length;
        }
        deQueue(){
                let data;
                if(this.length<=0){
                        console.log("Queue is Empty");
                }else{
                        data=this.queue[0];
                        for(var i=0; i<this.length; i++){
                                this.queue[i]=this.queue[i+1];
                        }
                        delete this.queue[this.length-1];
                        this.queue.length--;
                        this.length--;
                }
                return data;
        }
        size(){
                return this.length;
        }
        enQueueThree(...args){
                for(var i=0; i<3; i++){
                        this.enQueue(args[i]);
                }
        }

        deQueueThree(){
                if(this.length<3){
                        while(this.queue.length != 0){
                                this.deQueue();
                        }
                }else{
                        for(var i=0; i<3; i++){
                                this.deQueue();
                        }

                }
                
        }
}
let Q1=new Queue();
Q1.enQueue(1,2,3,4,5,6);
console.log(Q1)