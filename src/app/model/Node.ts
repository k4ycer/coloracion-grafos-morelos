export class Node{
    public id: number;    
    public neighbors: Node[];
    public attributes: any;

    constructor(id: number, neighbors?: Node[], attributes?: any){
        this.id = id;
        this.neighbors = neighbors ? neighbors : [];
        this.attributes = attributes ? attributes : {};
    }

    addNeighbor(neighbor: Node){
        if(!this.neighbors.find(n => n.id == neighbor.id)){
            this.neighbors.push(neighbor);
        }
    }
}