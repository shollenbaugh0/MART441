let volkswagen = {
                "manufacturer" : "Volkswagen",
                "model" : "Beetle",
                "owner" : {
                    "firstName" : "Maxine",
                    "lastName" : "Baker"
                },
                "sizes" : [
                    "small",
                    "medium",
                    "large",
                    "x-large"
                ]
            }

        $(function () {
            $("button").click(function () {
                showVolkswagenInfo();
            });

        });

        function showVolkswagenInfo()
            {
                $("#volkswagenInformation").html("Manufacturer: " + volkswagen.manufacturer
                + "<br>Model:" + volkswagen.model + "<br>First Name:" + volkswagen.owner.firstName + "<br>Last Name:"
                + volkswagen.owner.lastName + "<br>Sizes Available:<br>" +
                volkswagen.sizes[0] + "<br>" + volkswagen.sizes[1] + "<br>" + volkswagen.sizes[2] + "<br>" + volkswagen.sizes[3]);
            }
