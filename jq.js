function sendD()
{
        var city = document.getElementById("CityName").value;
           
        var http = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
        $.ajax({
                url: http,
                dataType: "json"
                }).success(function(data){
                        $('#data').text(JSON.stringify(data));
                });
}


/*function sendD(str)
{
        $.ajax({

            // The URL for the request
            url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk",

            // The data to send (will be converted to a query string)
            data: {
//                q: "London,uk"
                get_param: "value"
            },

            // Whether this is a POST or GET request
            type: "GET",

            // The type of data we expect back
            dataType : "json",

            // Code to run if the request succeeds;
            // the response is passed to the function
            success: function( data) {
                alert("OK");
                $("div").append(JSON.stringify(data));
            },
        
            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            error: function( xhr, status, errorThrown ) {
                alert( "Sorry, there was a problem!" );

            },

            // Code to run regardless of success or failure
            complete: function( xhr, status ) {
                alert( "The request is complete!" );
            }
    });                        
                        
}*/
    