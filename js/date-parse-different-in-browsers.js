
//You can't really use Date.parse. I suggest you use: new Date (year, month [, date [, hours [, minutes [, seconds [, ms ] ] ] ] ] )


               Date.prototype.yyyymmdd = function() {
                       var yyyy = this.getFullYear().toString();
                       var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
                       var dd  = this.getDate().toString();
                    return (mm.length==2?mm:"0"+mm[0]) + '/' + (dd.length==2?dd:"0"+dd[0]) + '/' + yyyy
                       
                 };




d = new Date();
new Date(d.yyyymmdd())