// JavaScript Document
var Color = new Array('#ff0000','#00ff00','#ffff00','#0000ff','#ff00ff','#00ffff',
		'#c6c6c6','#a52a2a','#d2691e','#dc143c','#b8860b','#8b008b','#8b0000','#2f4f4f',
		'#00bfff','#adff2f');
function nodeShow(){
	var TimerCount = 0;
	for(var i=0;i<QUEUESIZE;i++){
		if(queues[i]){
			var length = queues[i].size;
			
			for(var j=0;j<length;j++){
				
				Timer[TimerCount] = setTimeout("timeuse("+i+")",(TimerCount+1)*1000);
				TimerCount++;
			}
		}
	}
	
	
}



function timeuse(i)
{
	
	//删除该队列node中的第一个进程node
	var queueNode = document.getElementById("queue"+(i+1));
	var processHeadNode = queueNode.childNodes[1];
	var processName = processHeadNode.childNodes[0].firstChild.nodeValue;
	
	queueNode.removeChild(processHeadNode);
	
	//如果队列有值才出栈 更新节点
	if(queues[i]){
	//得到时间
	var process = queues[i].Dequeue();
	var processLeft = process - TIMESLICE * (i+1);
		
	//如果进程未完成,增加剩下的时间到下一队列(queues[i+1])
	if(processLeft>0){
		addProcessNode(i+2,processName,processLeft);
		
		
	}
	}
	
	
	
}

//queueId从1开始,进程名等于进程id
function addProcessNode(queueId,processName,time){
	var queueNode = document.getElementById("queue"+queueId);
	var processNode = document.createElement("div");
	processNode.setAttribute("id",processName);
	processNode.setAttribute("class","process");
	queueNode.appendChild(processNode);
	
	//alert(processName.substring(7,processName.length));
	//颜色设置
	
	var num = processName.substring(7,processName.length);
	var numInt = parseInt(num);
	processNode.style.backgroundColor = Color[numInt];
	
	var textName = document.createTextNode(processName);
	var textTime = document.createTextNode("time:"+time);
	var paraName = document.createElement("p");
	var paraTime = document.createElement("p");
	paraName.appendChild(textName);
	paraTime.appendChild(textTime);
	processNode.appendChild(paraName);
	processNode.appendChild(paraTime);
}