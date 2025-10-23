$(document).ready(function(){
    function loadpage(page){
        $.ajax({
            url : page + '.html',
            success : function(data){
                $("#content").html(data)
            }
        })
    }
    $("#Home").click(function(e){
        e.prevantDefault();
        loadpage('index')
    })
    $("#contact").click(function(e){
        e.prevantDefault();
        loadpage('contact')
    })
    $("#gallary").click(function(e){
        e.prevantDefault();
        loadpage('gallary')
    })
    $("#about").click(function(e){
        e.prevantDefault();
        loadpage('about')
    })
    $("#service").click(function(e){
        e.prevantDefault();
        loadpage('service')
    })
    loadpage("index")
})