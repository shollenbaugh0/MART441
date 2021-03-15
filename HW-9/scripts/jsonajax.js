$(document).ready(function () {
           $("button").click(function () {
               $("#volkswagenInformation").load("data/volkswagen.json", function(responseText){
                   var bike = JSON.parse(responseText);
                   $("#volkswagenInformation").html("Manufacturer: " + volkswagen.manufacturer
               + "<br>Model:" + volkswagen.model + "<br>First Name:" + volkswagen.owner.firstName + "<br>Last Name:"
               + volkswagen.owner.lastName + "<br>Sizes Available:<br>" +
               volkswagen.sizes[0] + "<br>" + volkswagen.sizes[1] + "<br>" + volkswagen.sizes[2] + "<br>" + volkswagen.sizes[3]);
               });
           });
       });
