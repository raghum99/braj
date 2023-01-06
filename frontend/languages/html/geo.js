
            var a = document.getElementById ("geo");
            function getLocation () {
                if (navigator.geolocation) {navigator.geolocation.getCurrentPosition (showPosition);}
                else {
                    a.innerHTMl= "Geo Loaction is not Supported in this browser.";
                }
            }

            function showPosition (position){
                a.innerHTML= "latitude: " + position.coords.latitude +
                "<br>Longitude:" + position.coords.longitude;
            }
      