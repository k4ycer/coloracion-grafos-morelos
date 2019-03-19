import { Node } from './model/Node';
import { Component } from '@angular/core';
import { Graph } from './model/Graph';

declare var $:any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'prueba';
	graph: Graph;
	svgContainer: HTMLElement;
	svgElement: any;

	ngOnInit(){
		this.createMorelosMap();
		this.createGraph();
		this.colorGraph();				
		setTimeout(() => {
			this.colorMap();
		}, 1000);
	}		

	private createGraph(){
		this.graph = new Graph();	

		// Add municipios
		let node1 = new Node(1),
			node2 = new Node(2),
			node3 = new Node(3),
			node4 = new Node(4),
			node5 = new Node(5),
			node6 = new Node(6),
			node7 = new Node(7),
			node8 = new Node(8),
			node9 = new Node(9),
			node10 = new Node(10),
			node11 = new Node(11),
			node12 = new Node(12),
			node13 = new Node(13),
			node14 = new Node(14),
			node15 = new Node(15),
			node16 = new Node(16),
			node17 = new Node(17),
			node18 = new Node(18),
			node19 = new Node(19),
			node20 = new Node(20),
			node21 = new Node(21),
			node22 = new Node(22),
			node23 = new Node(23),
			node24 = new Node(24),
			node25 = new Node(25),
			node26 = new Node(26),
			node27 = new Node(27),
			node28 = new Node(28),
			node29 = new Node(29),
			node30 = new Node(30),
			node31 = new Node(31),
			node32 = new Node(32),
			node33 = new Node(33);

		this.graph.AddNode(node3);		
		this.graph.AddNode(node1);
		this.graph.AddNode(node2);		
		this.graph.AddNode(node4);
		this.graph.AddNode(node5);
		this.graph.AddNode(node6);
		this.graph.AddNode(node7);
		this.graph.AddNode(node8);
		this.graph.AddNode(node9);
		this.graph.AddNode(node10);
		this.graph.AddNode(node11);
		this.graph.AddNode(node12);
		this.graph.AddNode(node13);
		this.graph.AddNode(node14);
		this.graph.AddNode(node15);
		this.graph.AddNode(node16);
		this.graph.AddNode(node17);
		this.graph.AddNode(node18);
		this.graph.AddNode(node19);
		this.graph.AddNode(node20);
		this.graph.AddNode(node21);
		this.graph.AddNode(node22);
		this.graph.AddNode(node23);
		this.graph.AddNode(node24);
		this.graph.AddNode(node25);
		this.graph.AddNode(node26);
		this.graph.AddNode(node27);
		this.graph.AddNode(node28);
		this.graph.AddNode(node29);
		this.graph.AddNode(node30);
		this.graph.AddNode(node31);
		this.graph.AddNode(node32);
		this.graph.AddNode(node33);

		// Conectar municipios
		this.graph.connectNodes(node1, node5);
		this.graph.connectNodes(node1, node21);
		this.graph.connectNodes(node1, node14);
		this.graph.connectNodes(node1, node17);

		this.graph.connectNodes(node2, node27);
		this.graph.connectNodes(node2, node26);
		this.graph.connectNodes(node2, node29);
		this.graph.connectNodes(node2, node6);
		this.graph.connectNodes(node2, node30);

		this.graph.connectNodes(node3, node19);
		this.graph.connectNodes(node3, node13);
		this.graph.connectNodes(node3, node10);

		this.graph.connectNodes(node4, node24);
		this.graph.connectNodes(node4, node29);
		this.graph.connectNodes(node4, node6);
		this.graph.connectNodes(node4, node30);
		this.graph.connectNodes(node4, node33);
		this.graph.connectNodes(node4, node10);
		this.graph.connectNodes(node4, node13);
		this.graph.connectNodes(node4, node19);
		this.graph.connectNodes(node4, node25);

		this.graph.connectNodes(node5, node15);
		this.graph.connectNodes(node5, node14);
		this.graph.connectNodes(node5, node21);
		this.graph.connectNodes(node5, node1);

		this.graph.connectNodes(node6, node29);
		this.graph.connectNodes(node6, node2);
		this.graph.connectNodes(node6, node30);
		this.graph.connectNodes(node6, node4);

		this.graph.connectNodes(node7, node9);
		this.graph.connectNodes(node7, node20);
		this.graph.connectNodes(node7, node11);
		this.graph.connectNodes(node7, node8);
		this.graph.connectNodes(node7, node18);
		this.graph.connectNodes(node7, node15);
		
		this.graph.connectNodes(node8, node7);
		this.graph.connectNodes(node8, node11);
		this.graph.connectNodes(node8, node29);
		this.graph.connectNodes(node8, node24);
		this.graph.connectNodes(node8, node28);
		this.graph.connectNodes(node8, node18);

		this.graph.connectNodes(node9, node7);
		this.graph.connectNodes(node9, node20);

		this.graph.connectNodes(node10, node4);
		this.graph.connectNodes(node10, node33);
		this.graph.connectNodes(node10, node3);
		this.graph.connectNodes(node10, node13);

		this.graph.connectNodes(node11, node7);
		this.graph.connectNodes(node11, node20);
		this.graph.connectNodes(node11, node29);
		this.graph.connectNodes(node11, node8);

		this.graph.connectNodes(node12, node17);
		this.graph.connectNodes(node12, node31);
		this.graph.connectNodes(node12, node24);
		this.graph.connectNodes(node12, node25);

		this.graph.connectNodes(node13, node4);
		this.graph.connectNodes(node13, node10);
		this.graph.connectNodes(node13, node3);
		this.graph.connectNodes(node13, node19);

		this.graph.connectNodes(node14, node5);
		this.graph.connectNodes(node14, node15);
		this.graph.connectNodes(node14, node17);
		this.graph.connectNodes(node14, node1);
		this.graph.connectNodes(node14, node21);

		this.graph.connectNodes(node15, node5);
		this.graph.connectNodes(node15, node7);
		this.graph.connectNodes(node15, node18);
		this.graph.connectNodes(node15, node28);
		this.graph.connectNodes(node15, node17);
		this.graph.connectNodes(node15, node14);

		this.graph.connectNodes(node16, node30);
		this.graph.connectNodes(node16, node22);
		this.graph.connectNodes(node16, node32);

		this.graph.connectNodes(node17, node1);
		this.graph.connectNodes(node17, node14);
		this.graph.connectNodes(node17, node15);
		this.graph.connectNodes(node17, node28);
		this.graph.connectNodes(node17, node24);
		this.graph.connectNodes(node17, node31);
		this.graph.connectNodes(node17, node12);
		this.graph.connectNodes(node17, node25);

		this.graph.connectNodes(node18, node15);
		this.graph.connectNodes(node18, node7);
		this.graph.connectNodes(node18, node8);
		this.graph.connectNodes(node18, node28);

		this.graph.connectNodes(node19, node25);
		this.graph.connectNodes(node19, node4);
		this.graph.connectNodes(node19, node13);
		this.graph.connectNodes(node19, node3);

		this.graph.connectNodes(node20, node7);
		this.graph.connectNodes(node20, node9);
		this.graph.connectNodes(node20, node23);
		this.graph.connectNodes(node20, node26);
		this.graph.connectNodes(node20, node29);
		this.graph.connectNodes(node20, node11);

		this.graph.connectNodes(node21, node5);
		this.graph.connectNodes(node21, node14);
		this.graph.connectNodes(node21, node1);

		this.graph.connectNodes(node22, node16);
		this.graph.connectNodes(node22, node32);

		this.graph.connectNodes(node23, node20);
		this.graph.connectNodes(node23, node26);
		this.graph.connectNodes(node23, node27);

		this.graph.connectNodes(node24, node31);
		this.graph.connectNodes(node24, node17);
		this.graph.connectNodes(node24, node28);
		this.graph.connectNodes(node24, node8);
		this.graph.connectNodes(node24, node29);
		this.graph.connectNodes(node24, node4);
		this.graph.connectNodes(node24, node25);
		this.graph.connectNodes(node24, node12);

		this.graph.connectNodes(node25, node17);
		this.graph.connectNodes(node25, node12);
		this.graph.connectNodes(node25, node24);
		this.graph.connectNodes(node25, node4);
		this.graph.connectNodes(node25, node19);

		this.graph.connectNodes(node26, node20);
		this.graph.connectNodes(node26, node23);
		this.graph.connectNodes(node26, node27);
		this.graph.connectNodes(node26, node2);
		this.graph.connectNodes(node26, node29);

		this.graph.connectNodes(node27, node23);
		this.graph.connectNodes(node27, node26);
		this.graph.connectNodes(node27, node2);

		this.graph.connectNodes(node28, node15);
		this.graph.connectNodes(node28, node18);
		this.graph.connectNodes(node28, node8);
		this.graph.connectNodes(node28, node24);
		this.graph.connectNodes(node28, node17);

		this.graph.connectNodes(node29, node11);
		this.graph.connectNodes(node29, node20);
		this.graph.connectNodes(node29, node26);
		this.graph.connectNodes(node29, node2);
		this.graph.connectNodes(node29, node6);
		this.graph.connectNodes(node29, node4);
		this.graph.connectNodes(node29, node24);
		this.graph.connectNodes(node29, node8);

		this.graph.connectNodes(node30, node6);
		this.graph.connectNodes(node30, node2);
		this.graph.connectNodes(node30, node16);
		this.graph.connectNodes(node30, node32);
		this.graph.connectNodes(node30, node33);
		this.graph.connectNodes(node30, node4);
		this.graph.connectNodes(node30, node4);

		this.graph.connectNodes(node31, node17);
		this.graph.connectNodes(node31, node24);
		this.graph.connectNodes(node31, node12);

		this.graph.connectNodes(node32, node33);
		this.graph.connectNodes(node32, node30);
		this.graph.connectNodes(node32, node16);
		this.graph.connectNodes(node32, node22);

		this.graph.connectNodes(node33, node10);
		this.graph.connectNodes(node33, node4);
		this.graph.connectNodes(node33, node30);
		this.graph.connectNodes(node33, node32);
	}

	private colorGraph(){
		this.graph.colorGraph();
	}

	private loadSvg(url, callback){
		var ajax = new XMLHttpRequest();
		ajax.open("GET", url, true);
		ajax.send();
		ajax.onload = (e) => callback(this.svgContainer, ajax.responseText);
	}

	private insertSvg(element, svg){
		element.innerHTML = svg;
		this.svgElement = $(element).children('svg');
	}

	private createMorelosMap(){
		this.svgContainer = document.getElementById('contenedorMorelos');
		this.loadSvg("assets/img/morelos.svg", (element, svg) => this.insertSvg(element, svg));
	}

	private colorMap(){
		let colors = ["#338984", "#39589a", "#693f7b", "#da5353", "#fbae00", "pink", "purple", "magenta", "gray", "maroon", "lime", "fuchsia"];
		for(let i = 0; i < this.graph.nodes.length; i++){
			let node = this.graph.nodes[i];
			let element = this.svgElement.find(`#path${node.id}`);
			let color = colors[node.attributes.color];
			element.css('transition', 'all 0.3s ease-in');
			element.css('transition-delay', `${i*0.1}s`);
			element.css({fill: color});
		}
	}
}
