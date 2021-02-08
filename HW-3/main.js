
function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Sappho enters her home to see her family. She could tell them the truth or avoid it entirely. What should she do?";
        document.getElementById("choice1").innerHTML = "Talk to family";
        document.getElementById("choice2").innerHTML = "Go to room";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Sappho begins to leave but something encourages her to be brave.";
        document.getElementById("choice1").innerHTML = "Begin a conversation";
        document.getElementById("choice2").innerHTML = "Watch quietly";
    } else if (choice == 1 && answer1 == "Talk to family") {
        document.getElementById("story").innerHTML = "Sappho engages in a conversation with her family. What should she do next?";
        document.getElementById("choice1").innerHTML = "Listen quietly";
        document.getElementById("choice2").innerHTML = "Attempt to make her announcement";
    } else if (choice == 2 && answer2 == "Go to room") {
        document.getElementById("story").innerHTML = "Sappho is still in the kitchen with her family. What should she do next?";
        document.getElementById("choice1").innerHTML = "Tell them";
        document.getElementById("choice2").innerHTML = "Get a drink";
    } else if (choice == 1 && answer1 == "Listen quietly") {
        document.getElementById("story").innerHTML = "Sappho decides to tell them even if she's unsure of how they will react.  Will it work out?'";
        document.getElementById("choice1").innerHTML = "Yes it will work";
        document.getElementById("choice2").innerHTML = "No it will not work";
    } else if (choice == 2 && answer2 == "Attempt to make her announcement") {
        document.getElementById("story").innerHTML = "Sappho decides to just look around for the moment. What should Sappho do now?";
        document.getElementById("choice1").innerHTML = "Watch from afar";
        document.getElementById("choice2").innerHTML = "Get in closer";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Tell them") {
        document.getElementById("story").innerHTML = "Sappho decides that evaluation is the best option." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get a drink") {
        document.getElementById("story").innerHTML = "Sappho decides staying away is the best option" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes it will work") {
        document.getElementById("story").innerHTML = "Sappho decides that swimming sounds most fun" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No it will not work") {
        document.getElementById("story").innerHTML = "Sappho decides it's time to drink" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Watch from afar") {
        document.getElementById("story").innerHTML = "Sappho thinks, yeah this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get in closer") {
        document.getElementById("story").innerHTML = "Sappho thinks, I don't think this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Sappho decides it's time to just watch from a distance for safety." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Sappho decides to get just a little closer, but not engage." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Our protagonist, Sappho, is finally comfortable in who they are and is ready to tell the world. Are you ready to help them come out?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Sappho thanks you!";

    }


}
