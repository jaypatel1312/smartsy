$(document).ready(function(){	
	hideAddressBar();
});

(function($){
	$(window).load(function(){
		if($(".content_3").length > 0)
		{
			$(".content_3").mCustomScrollbar({
				scrollInertia:600,
				autoDraggerLength:false,
				callbacks:{
					whileScrolling:function(){
						myCustomFn(this);
					}
				}
			});
		}
	});
	
	function myCustomFn(el){
		el.find(".scrollablePart").height(mcs.draggerTop);
	}
})(jQuery);

//| this script is for hide addressbar in all mobile device on page load

function hideAddressBar()
{
	if(!window.location.hash)
	{
		document.body.style.height = $(window).height()+60+"px";
		setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
	}
}

//| this script is for placeholder compability in IE
	
	var input = document.createElement("input");
    if(('placeholder' in input)==false) { 
		$('[placeholder]').focus(function() {
			var i = $(this);
			if(i.val() == i.attr('placeholder')) {
				i.val('').removeClass('placeholder');
				if(i.hasClass('password')) {
					i.removeClass('password');
					this.type='password';
				}			
			}
		}).blur(function() {
			var i = $(this);	
			if(i.val() == '' || i.val() == i.attr('placeholder')) {
				if(this.type=='password') {
					i.addClass('password');
					this.type='text';
				}
				i.addClass('placeholder').val(i.attr('placeholder'));
			}
		}).blur().parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var i = $(this);
				if(i.val() == i.attr('placeholder'))
					i.val('');
			})
		});
	}

