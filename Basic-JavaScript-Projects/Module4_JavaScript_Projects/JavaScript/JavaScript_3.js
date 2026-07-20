        function displayType(character) {
            //alert("Hello");
            var characterType = character.getAttribute("data-character-type");
            //alert(characterType + " is in the " + character.innerHTML + " universe!");
            if(characterType=="Batman"){output="x1";}
            if(characterType=="Luke Skywalker"){output="x2";}
            if(characterType=="Thor"){output="x3";}
            if(characterType=="Jean-Luc Picard"){output="x4";}
            //alert(output);
            /*
            document.getElementById(output).innerHTML =
                characterType + " is in the " + character.innerHTML + " universe!";
                */
                document.getElementById(output).innerHTML ="<span style=\'color: red;\'>" + 

                characterType + " is in the " + character.innerHTML + " universe!</span>";
        }