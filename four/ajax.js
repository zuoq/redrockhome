(function(window){
	var w = window;
	w.ajax = {
		_count : 0,   //计数
		_queen : [],  //ajax队列
		_createXml :  createXml, // 兼容ajax
		_create : create,  //创建XMLHttpRequest对象
		_dealRes : dealRes, //处理服务器的返回
		send : send,          
	};

	/*---------internal function--------*/
	function create(){
		var self = this;
		var queen = self._queen;
		console.log(queen.length);
		for(var i = 0; i < queen.length; i++){
			if(queen[i].readyState == 0 || queen[i].readyState == 4){
				return queen[i];
			}
		}
		queen[queen.length] = self._createXml();
		return queen[queen.length - 1];
	}

	function createXml(){
		if(!w.XMLHttpRequest){
			w.XMLHttpRequest = function(){
				try{
					return new ActiveObject("Msxml2.XMLHTTP.3.0");
				}catch(err){
					throw new Error('XMLHttpRequest is not supported!');
				}
			}
		}

		return new w.XMLHttpRequest();
	}

	function dealRes(resText){
		var self = this;
		if(self._count %2 == 0){
			alert(self._count + '请求都到达了');
		}
	}

	function send(config){
		var self = this;
		var xmlObj = self._create();
		var data = config.method.toUpperCase() === 'POST' ? ( config.data ? config.data : null) : null;
		xmlObj.open(config.method,config.url);
		xmlObj.send(data);

		xmlObj.onreadystatechange = function(){
			if( xmlObj.status == 200 && xmlObj.readyState == 4){
				self._count++;
				self._dealRes(xmlObj.responseText);
			}
		}
	}
})(window);