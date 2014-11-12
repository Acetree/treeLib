$.ajax({
                 type: "GET",
                 url: $SCRIPT_ROOT + '/_start_order_one_key',
                 data: {depart_date:$('input[name="departDate"]').val(), return_date:$('input[name="returnDate"]').val(),camping_people:$('input[name="campingPeople"]').val()},
                 dataType: "json",
                 success: function(data){
                         orderId = data.result;
                 }
              });