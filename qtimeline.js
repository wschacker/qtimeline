 ; (function ($) {
    "use strict";

    var QTimeline = function (element, options) {
        this.element = $(element);
        this.dates =  this.element.find(".dates");
        this.events =  this.element.find(".events");
         
        this.render();
    };

    QTimeline.prototype = {
        constructor: QTimeline,
        render: function () {
			var str='<div class="sideToolbar"  style="position: fixed; " >'
				+'<div class="sideCatalog" class="sideCatalogBg" >'
						+'<div class="sideCatalog-sidebar">'
							+'<div class="sideCatalog-sidebar-top"></div>'
							+'<div class="sideCatalog-sidebar-bottom"></div>'
						+'</div>'
						+'<div class="sideCatalog-catalog">'
						   +'<dl>';
								this.dates.find("li").each(function(){ 
									str +='<dd class="sideCatalog-item1" >';
										str +=$(this).html();
										str +='<span class="sideCatalog-dot"></span>';
									str +='</dd>';
								});
					str+='</dl>'
						+'</div>'
				 +'</div>'
				 +'<a class="sideCatalogBtn" href="javascript:void(0);"  ></a>'
				 +'<a class="sideToolbar-up" href="javascript:void(0)"  ></a>'
				 +'</div>';  

         var  wrapper = this.dates.parent(); 
 
		$(str).prependTo(wrapper);
		this.dates.hide(); 
		$(this.element).on("click",".sideToolbar .sideCatalogBtn",function(){
			 $(".sideCatalog").toggle();
		});
		$(this.element).on("click",".sideToolbar .sideToolbar-up",function(){
			 window.scrollTo(0,0)
		});
		 //计算位置

		//
        } 
    };

    $.fn.qtimeline = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('qtimeline'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('qtimeline', (data = new QTimeline(this, $.extend({}, $.fn.qtimeline.defaults, options))));
            }
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.qtimeline.defaults = {};

    $.fn.qtimeline.Constructor = QTimeline;
})(jQuery);

   $(function () {   
       $("#timeline").qtimeline()
   });
 