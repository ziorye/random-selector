function init() {
    $.getJSON("./data/users.json", {}, function(data){
        $('#loading').text('');

        for(var i = 0; i < data.length; i++) {
            $("#users").append("<p title='"+data[i].title+"'>"+data[i].name+"</p>");
        }

        $("#start-stop").click(function () {
            switch ($(this).text()) {
                case 'Start':
                    $(this).text("Stop");
                    $('#result').text('...');
                    break;
                case 'Stop':
                    $(this).text("Start");
                    let lucky = data[Math.floor(Math.random() * data.length)];
                    $('#result').text(lucky.name);
                    break;
            }
        });
    });
}

$(function() {
    init();
});