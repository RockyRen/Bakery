// JavaScript Document
var QUEUESIZE = 5;
function queuesNodeInit(){
	//创建队列节点
	
	for(var i=1;i<=QUEUESIZE;i++)
	{
		var area = document.getElementById("processArea");
		var queuenode = document.createElement("div");
		queuenode.setAttribute("id","queue"+i);
		queuenode.setAttribute("class","queue");
		area.appendChild(queuenode);
		
		//第二个子元素是"队列i"的<p>
		var queuetext = document.createTextNode("队列"+i+":");
		var queuepara = document.createElement("p");
		queuepara.appendChild(queuetext);
		
		queuenode.appendChild(queuepara);
	}
}

function processNodeInit(){
	//创建进程node于第一个队列
	

	for(var i=0;i<queues[0].size;i++){
		
		var process = queues[0].Dequeue();
		addProcessNode(1,"process"+i,process);
		queues[0].Enqueue(process);

	
	}

		
}

addLoadEvent(queuesNodeInit);