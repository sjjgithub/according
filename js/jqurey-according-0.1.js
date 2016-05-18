;(function(){
	$.fn.extend({
		"according":function(opt){
			var opti={start:0}
			var optio=$.extend({},opti, opt);
			this.each(function(){
				var obj=$(this);
				init();
			function init(){
				
				obj.find("."+optio.content).hide();
				obj.find(":header").eq(optio.start).addClass(optio.headerActive);
				obj.find("."+optio.content).eq(optio.start).show();				
			}//init
			obj.find(":header").each(function(){
				$(this).bind("click",hClick)
			})
			function hClick(){
				console.log($(this))
				if($(this).hasClass(optio.headerActive)){return}
				obj.find(":header."+optio.headerActive).removeClass(optio.headerActive)
				obj.find("."+optio.content+":visible").slideUp();
				var ind=obj.find(":header").index($(this));
				$(this).addClass(optio.headerActive);
				obj.find("."+optio.content).eq(ind).slideDown();
			}
			})
			
		}//according
	})//extend
})(jQuery)
