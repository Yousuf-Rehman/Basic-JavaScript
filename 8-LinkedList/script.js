'use strict'

const BoxH = 100, BoxW = 100;
let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
let context = canvas.getContext("2d")

function Node(x, v) {
    this.value = v;
    this.next = null;
    this.x = x;

    this.show = (rectColor = "blue", borderColor="black") => {
        context.textAlign="center"; 
        context.textBaseline = "middle";
        context.fillStyle = rectColor  //rectangle color
        context.strokeStyle = borderColor //border color
        context.fillRect(this.x, 0, BoxW,BoxH)
        
        context.font = "24px Arial";
        context.fillStyle = "black"
        context.fillText('→',this.x - BoxW/2, BoxH/2);
        context.fillStyle = "white"
        context.fillText(this.value,this.x + BoxW/2, BoxH/2);
        context.stroke()
    }

    this.hide = () => {    
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
};

function LinkedList(value){
    this.first = null;
    this.insert = (value) => {
        if (this.first == null)
            this.first = new Node(0,value)
        else{
            let temp = this.first;
            while(temp.next!=null){
                temp = temp.next;
            }
            temp.next = new Node(temp.x + 2*BoxW,value)
            if(temp.next.x > canvas.width)
                canvas.width = canvas.width + 2*BoxW;
        }
    }

    this.delete = (val) => {
        if (this.first == null)
            return
        else{
            
            if(this.first.value === val){
                this.ChangeXCord(this.first);
                this.first = this.first.next;
            }
            else{
                let temp = this.first;
                while(temp.next!=null && temp.next.value!=val){
                    temp = temp.next;
                }
                if(temp.next == null) return;

                this.ChangeXCord(temp.next);
                temp.next = temp.next.next;
            }
            
        }
    }

    this.print = () => {
        let temp = this.first;
        while(temp!=null){
            console.log(temp + " " + temp.value)
            temp.show();
            temp = temp.next;
        }
    };

    this.ChangeXCord = (StartNode) => {
        StartNode.hide()
        while(StartNode!=null){
            StartNode.x = StartNode.x - 2*BoxW;
            StartNode = StartNode.next;
        }
    }
}


let a = new LinkedList();
let button = document.querySelectorAll('#LinkListButton');
//console.log(button)
let Insert = () =>{
    a.insert(button[0].children[0].value)
    a.print()
}

let Delete = () =>{
    a.delete(button[0].children[0].value)
    a.print()
}
button[0].children[1].addEventListener('click', Insert)
button[0].children[2].addEventListener('click', Delete)