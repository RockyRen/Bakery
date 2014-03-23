// JavaScript Document


var QUEUESIZE = 5
var queues = new Array(QUEUESIZE);	//队列数组
var Timer = new Array();
function processhandle(){
	
	/*
	//测试数据
	var processes1 = new Queue();
	for(var i=0;i<4;i++){
		
		processes1.Enqueue(i+24);
	}
	queues[0] = processes1;*/
	startDisabled();
	sliceDisabled();
	var processInputs = document.getElementById("processInputs");
	var inputs = processInputs.getElementsByTagName("input");
	
	var processes1 = new Queue();
	
	for(var i=0;i<inputs.length;i++){
		
		var processTime = inputs[i].getAttribute("value");
		
		if(processTime){
			//将数据放入第一个队列
			
			var processInt =  parseInt(processTime);
			processes1.Enqueue(processInt);
			
		}
	}
	
	queues[0] = processes1;
	
	//queuesNodeInit();
	processNodeInit();
	
	//处理代码
	processstart();
	
	
}



//addLoadEvent(processhandle);