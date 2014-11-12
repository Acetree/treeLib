Array.prototype.each =  function ( callback ){
        for (  var  i = 0 ,j =  this .length ; i < j ; i++ ){
            callback.call( this, this[i], i );
        }
    }