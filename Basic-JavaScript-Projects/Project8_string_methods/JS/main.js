function concatenate_parts_into_one_sentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var wholeSentence = part1.concat(part2, part3, part4);

    var htmlContent = "";

    htmlContent = htmlContent + "<h2>Input Strings before Concatenation</h2>";
    htmlContent = htmlContent + '<p>part1 = \"' + part1 + '\";</p>';
    htmlContent = htmlContent + '<p>part2 = \"' + part2 + '\";</p>';
    htmlContent = htmlContent + '<p>part3 = \"' + part3 + '\";</p>';
    htmlContent = htmlContent + '<p>part4 = \"' + part4 + '\";</p>';

    htmlContent = htmlContent + "<p style='color: blue; font-weight: bold; font-size: 22px;'>wholeSentence = part1.concat(part2, part3, part4);</p >";
    htmlContent = htmlContent + "<h2>Output After Concatenation</h2>";
    htmlContent = htmlContent + "<p style='color: red; font-weight: bold; font-size: 20px;'>wholeSentence = \"" + wholeSentence + "\"</p>";

    /*
    htmlContent = htmlContent + "<p>                = " + whole_sentence + "</p>";
    */

    document.getElementById("Concatenate").innerHTML = htmlContent;
    //document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_string_into_parts() {
    var htmlContent = "";


    var sentence = "I have made this into a complete sentence.";
    var sentenceLength = sentence.length;
    var part1 = sentence.slice(0, 19);
    var part2 = sentence.slice(19, 31);
    var part3 = sentence.slice(19, 29);
    var part4 = sentence.slice(19);
    /*var part3 = sentence.slice(12, 17);
    var part4 = sentence.slice(17, 22);
    var part5 = sentence.slice(22, 31);*/

    htmlContent = htmlContent + "<h3>Before slicing</h3>";
    htmlContent = htmlContent + '<p>The sentence = \"<span style="color: #cf6e0c;">' + sentence + '</span>\"</p>';
    htmlContent = htmlContent + '<p>The length of the unsliced sentence = ' + sentenceLength + '</p>';
    htmlContent = htmlContent + '<h3>The sliced strings</h3>';

    htmlContent = htmlContent + '<p>part1 = sentence.slice(0, 19) = \"' + part1 + '\"</p>';
    htmlContent = htmlContent + '<p>The length of the sliced part1 = ' + part1.length + '</p>';

    htmlContent = htmlContent + '<p>part2 = sentence.slice(19, 31) = \"' + part2 + '\"</p>';
    htmlContent = htmlContent + '<p>The length of the sliced part2 = ' + part2.length + '</p>';

    htmlContent = htmlContent + '<p>part3 = sentence.slice(19, 29) = \"' + part3 + '\"</p>';
    htmlContent = htmlContent + '<p>The length of the sliced part3 = ' + part3.length + '</p>';
    
    htmlContent = htmlContent + '<p>part4 = sentence.slice(19) = \"' + part4 + '\"</p>';
    htmlContent = htmlContent + '<p>The length of the sliced part4 = ' + part4.length + '</p>';


    document.getElementById("Slice").innerHTML = htmlContent;
}

function convert_string_to_uppercase() {
    var htmlContent = "";
    var sentence = "I have made this into a complete sentence.";
    var upperCaseSentence = sentence.toUpperCase();

    htmlContent = htmlContent + "<h3>Before converting to uppercase</h3>";
    htmlContent = htmlContent + '<p>The sentence = \"<span style="color: #cf6e0c;">' + sentence + '</span>\"</p>';

    htmlContent = htmlContent + "<h3>After converting to uppercase</h3>";
    htmlContent = htmlContent + '<p>The uppercase sentence = \"<span style="color: #cf6e0c;">' + upperCaseSentence + '</span>\"</p>';

    document.getElementById("convertToUpperCase").innerHTML = htmlContent;
}

function search_for_a_substring() {
    var htmlContent = "";
    var sentence = "I have made this into a complete sentence.";
    var searchString = document.getElementById("searchInput").value;
    var searchIndex = sentence.indexOf(searchString);
    if (searchIndex !== -1) {//searchString is found in the sentence when indexOf() returns a value other than -1 else searchString is not found in the sentence when indexOf() returns -1
        htmlContent = htmlContent + "<h3>Search Result</h3>";
        htmlContent = htmlContent + '<p>The sentence = \"<span style="color: #cf6e0c;">' + sentence + '</span>\"</p>';
        htmlContent = htmlContent + '<p>The search string = \"<span style="color: #cf6e0c;">' + searchString + '</span>\"</p>';
        htmlContent = htmlContent + '<p>The search string is found at index = <span style="color: #cf6e0c;">' + searchIndex + '</span></p>';
    } else {
        htmlContent = htmlContent + "<h3>Search Result</h3>";
        htmlContent = htmlContent + '<p>The sentence = \"<span style="color: #cf6e0c;">' + sentence + '</span>\"</p>';
        htmlContent = htmlContent + '<p>The search string = \"<span style="color: #cf6e0c;">' + searchString + '</span>\"</p>';
        htmlContent = htmlContent + '<p>The search string is not found in the sentence.</p>';
    }
    document.getElementById("searchResult").innerHTML = htmlContent;
}

function number_to_String() {
    var htmlContent = "";
    var number = 123.456;
    var stringNumber = number.toString();

    htmlContent = htmlContent + "<h3>Number to String Conversion</h3>";
    htmlContent = htmlContent + '<p>The number = <span style="color: #cf6e0c;">' + number + '</span></p>';
    htmlContent = htmlContent + '<p>The string number = <span style="color: #cf6e0c;">\"' + stringNumber + '\"</span></p>';

    document.getElementById("numberToString").innerHTML = htmlContent;
}

function number_to_precision() {
    var htmlContent = "";
    var number = 123.456789;
    var precision = document.getElementById("precisionInput").value;
    var precisionNumber = number.toPrecision(precision);

    htmlContent = htmlContent + "<h3>Number to Precision Conversion</h3>";
    htmlContent = htmlContent + '<p>The number = <span style="color: #cf6e0c;">' + number + '</span></p>';
    htmlContent = htmlContent + '<p>The precision number = <span style="color: #cf6e0c;">\"' + precisionNumber + '\"</span></p>';

    document.getElementById("numberToPrecision").innerHTML = htmlContent;
}

function the_toFixed_method() {
    var htmlContent = "";
    var number = 123.456789;
    var fixed = document.getElementById("fixedInput").value;
    var fixedNumber = number.toFixed(fixed);

    htmlContent = htmlContent + "<h3>Number to Fixed Conversion</h3>";
    htmlContent = htmlContent + '<p>The number = <span style="color: #cf6e0c;">' + number + '</span></p>';
    htmlContent = htmlContent + '<p>The fixed number = <span style="color: #cf6e0c;">\"' + fixedNumber + '\"</span></p>';

    document.getElementById("toFixedResult").innerHTML = htmlContent;
}

function the_valueOf_method() {
    var htmlContent = "";
    var number = 123.456789;
    var valueOfNumber = number.valueOf();
    var bool = true;
    var valueOfBool = bool.valueOf();
    var string = "Hello, World!";
    var valueOfString = string.valueOf();

                    htmlContent = htmlContent + "<h3>Number to ValueOf Conversion</h3>";
                    htmlContent = htmlContent + '<p>The number = <span style="color: #cf6e0c;">' + number + '</span></p>';
                    htmlContent = htmlContent + '<p>The valueOf(number) = <span style="color: #cf6e0c;">' + valueOfNumber + '</span></p>';

                    htmlContent = htmlContent + "<h3>Boolean to ValueOf Conversion</h3>";
                    htmlContent = htmlContent + '<p>The boolean = <span style="color: #cf6e0c;">' + bool + '</span></p>';
                    htmlContent = htmlContent + '<p>The valueOf(boolean) = <span style="color: #cf6e0c;">' + valueOfBool + '</span></p>';
                    
                    htmlContent = htmlContent + "<h3>String to ValueOf Conversion</h3>";
                    htmlContent = htmlContent + '<p>The string = <span style="color: #cf6e0c;">\"' + string + '\"</span></p>';
                    htmlContent = htmlContent + '<p>The valueOf(string) = <span style="color: #cf6e0c;">\"' + valueOfString + '\"</span></p>';

    document.getElementById("valueOfResult").innerHTML = htmlContent;
}   