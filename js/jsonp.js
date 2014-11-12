

   
var ajaxResult = false;

   * $.ajax({

   *     async:false,//非跨域下有效

   *     url:WEB_URL+$(obj).attr('ajax'),

   *     type:'POST',

   *     dataType:'jsonp',

   *     data:{param:$(obj).val()},

   *         jsonp:JSONP_CALLBACK,

   *         success:function(data){

   *             ajaxResult =  (data.status != 'error' && data.status != 0) ? true : false;

   *             alert('aaaaaaa'+ajaxResult);

   *         },

   *         error:function(){return 'fail';}

   * })

   * //alert(ajaxResult);

   * return ajaxResult;
