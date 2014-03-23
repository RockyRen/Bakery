// JavaScript Document
var TIMESLICE = 8;	//时间片
function processstart()
{
	processInit();
	nodeShow();
	setTimeout("finishHandle()",(Timer.length+1)*1000);
}

//一开始初始化队列的所有数据
function processInit(){
	//得到时间
	
	for(var i=0;i<QUEUESIZE;i++){
		if(queues[i]){
		var length = queues[i].size;
		
			
			for(var j=0;j<length;j++){
				var process = queues[i].Dequeue();
				var processLeft = process - TIMESLICE * (i+1);
				
				if(processLeft>0){
					
					if(!queues[i+1]){
							processes2 = new Queue();
							processes2.Enqueue(processLeft);
							queues[i+1] = processes2;
							
						}
						else{
							queues[i+1].Enqueue(processLeft);	
						}
				}
				
				queues[i].Enqueue(process);
				
				
			
			}
		}
		
	}
	
	
}







//增加进程的处理(只创建一个进程div)
function processrestart(queues)
{
	for(var i=0;i<Timer.length;i++){
		clearTimeout(Timer[i]);	
	}
	Timer.splice(0,Timer.length);
	processInit();
	nodeShow();
	
	setTimeout("finishHandle()",(Timer.length+1)*1000);
	
	
}

ADDCOUNT = 4;
//事件触发增加进程
function addprocess(){
	startDisabled();
	alertDisabled();
	var addInput = document.getElementById("addText");
	var addValue = addInput.getAttribute("value");
	
	if(addValue){
		var addInt = parseInt(addValue);
		
		queues[0].Enqueue(addInt);
		addProcessNode(1,"process"+ADDCOUNT,addInt);
		ADDCOUNT++;
		processrestart();
	}
	
}

function finishHandle(){
	alert("finish");
	startAbled();
	sliceAbled();
}