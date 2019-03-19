import { Node } from './Node';

export class Graph{
    public nodes: Node[];

    constructor(nodes?: Node[]){
        this.nodes = nodes ? nodes : [];
    }

    public AddNode(node: Node){
        if(!this.nodes.find(n => n.id == node.id)){
            this.nodes.push(node);
        }        
    }

    public connectNodes(node1: Node, node2: Node){
        if(!this.nodes.find(n => n.id == node1.id) || !this.nodes.find(n => n.id == node2.id)){
            throw Error("Uno de los nodos especificados no forman parte de este grafo");
        }
        node1.addNeighbor(node2);
        node2.addNeighbor(node1);
    }

    public colorGraph(){
        let allColors: number[] = [],
            availableColors: boolean[] = [],
            availableColor: number;

        allColors.push(0);
        this.nodes[0].attributes.color = allColors[0];

        for(let i = 1; i < this.nodes.length; i++){

            // Set all colors to available
            for(let c = 0; c < allColors.length; c++){
                availableColors[c] = true;
            }

            // Set color to unavailable if a neighbor already has it
            for(let j = 0; j < this.nodes[i].neighbors.length; j++){
                let neighbor = this.nodes[i].neighbors[j];

                if(neighbor.attributes.color != null && neighbor.attributes.color != undefined){
                    availableColors[neighbor.attributes.color] = false;
                }
            }            

            // If there are no more available colors then we create a new one
            availableColor = availableColors.indexOf(true);
            if(availableColor == -1){
                availableColor = allColors[allColors.length - 1] + 1;
                allColors.push(availableColor);
            }else{
                availableColor = allColors[availableColor];
            }            

            // Assign the available color to this node
            this.nodes[i].attributes.color = availableColor;        
        }
    }
}