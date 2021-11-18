
var errorMessage = "";

// Array of Months
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Current Date
var myDate = new Date();

/* Checks the text field and checks of the field only has letter.
    There are other characters aside from letters, it'll reset the field
    and send out an error message.
    If the input is valid, it'll enable another input field for the user to fill out.*/
function checkTextBox(idName, nextIdName)
{
    var textInBox= document.getElementById(idName).value;
    console.log(textInBox);
    
    if(textInBox.length > 0 && textInBox.match(/^[a-zA-Z]+$/g) && textInBox.length != null) 
    {
        console.log("textInBox accepted");
        toEnable(idName, nextIdName );
        errorMessage = "";
        document.getElementById("message").innerHTML = errorMessage;
    }
    else
    {
        errorMessage = "Invalid " + document.getElementById(idName).name;
        document.getElementById("message").innerHTML = errorMessage;
        document.getElementById("message").focus();
        return document.getElementById(idName).value = "";
    }
}

//extends the confirm function and disables all the input boxes if the user chooses to confirm and reset the text fields
function userConfirm ()
{
    var reseting = confirm('do you want to reset?');
    if(reseting == true)
    {
        disableAll();
    }
    else
    {
        return reseting;
    }
}

//Disables all input fields
function disableAll() 
{
    var inputFieldDiv = document.getElementById("userInfo");
    var inputFields = inputFieldDiv.getElementsByTagName("input");
    var selectFields = inputFieldDiv.getElementsByTagName("select");
    
    for(i=0; i < inputFields.length; i++)
    {
        if(inputFields[i].name != "first name")
        {
            inputFields[i].disabled = true;
        }
    }
    for(i=0; i < selectFields.length; i++)
    {
        selectFields[i].disabled = true;
    }
}

// Enables inputField if previous input field is filled
function toEnable( currentIdName, IdName2 )
{
    if(document.getElementById(currentIdName)!= "" && currentIdName != "countryId")
    {
        document.getElementById(IdName2).disabled = false;
    } 
    else if (currentIdName == "countryId" && document.getElementById(currentIdName).value != "N/A")
    {
        document.getElementById(IdName2).disabled = false;
    }
}

//Enables user to select payment method
function toEnableCredit()
{
    var paymentMethod = document.getElementById("creditMethod");
    var credits = paymentMethod.getElementsByTagName("input");
    for(i = 0; i<credits.length; i++)
    {
        credits[i].disabled = false;
        console.log("credits enabled");
    }
}

function readyToSubmit()
{
    document.getElementById("submitButton").disabled = false;
}

/* Checks the text field for first and last name to 
    ensure that they are filled out.*/
function validate()
{
    if(document.getElementById("fName").value == null || document.getElementById("fName").value == "")
    {
        alert("First Name Cannot be empty");
        return false;
    }
    if(document.getElementById("lName").value == null || document.getElementById("lName").value == "")
    {
        alert("Last Name Cannot be empty");
        return false;
    }
    return true;
}

//Changes elements that were hidden based one what input fields are being focused
function toVisible(elementIdName)
{
    var descr = document.getElementsByClassName("description");
    for(i = 0; i< descr.length; i++)
    {
        if(descr[i].id == elementIdName)
        {
            descr[i].style.visibility = "visible";
        }
        else
        {
            descr[i].style.visibility = "hidden";
        }
    }
}


/* Checks the text field and checks of the field only has matches the postal code format.
    There are other characters aside from letters, it'll reset the field
    and send out an error message.*/
function checkPostal(idName)
{
    var textInBox= document.getElementById(idName).value;
    console.log(textInBox);
    
    if(textInBox.length > 0 && textInBox.match(/^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/) && textInBox.length != null) 
    {
        console.log("textInBox accepted");
        toEnableCredit();
    }
    else
    {
        errorMessage = "Invalid " + document.getElementById(idName).name;
        document.getElementById("message").focus();
        document.getElementById("message").innerHTML = errorMessage;
        return document.getElementById(idName).value = "";
    }	
}
