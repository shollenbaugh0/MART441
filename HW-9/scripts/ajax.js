$(document).ready(function () {
            $("button").click(function () {
                $("#volkswagenInformation").load("data/volkswagenInfo.txt", fadeText);
            });
        });

        function fadeText()
        {
            $("#volkswagenInformation").fadeOut("slow").fadeIn("slow");
        }
