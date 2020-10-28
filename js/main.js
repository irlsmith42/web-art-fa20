$(document).ready(function(){

  $(function(){
    var note = $('#note'),
    ts = new Date(3000, 1, 1);
    
    $('#countdown').countdown({
    timestamp : ts,
    callback : function(days, hours, minutes, seconds){
    
    var message = "";
    message += days + " day" + ( days==1 ? '':'s' ) + ", ";
    message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
    message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
    message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
    message += " ";
    note.html(message);
    }
    });
    
    });

})

console.log(note)
