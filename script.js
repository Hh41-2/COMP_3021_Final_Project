/*
Description: Volunteers Hours Tracker
Date: 2025-11-26
Name: Heesoo Hwang
Assignment: Assignment 7 Group Project - Group 8
*/

// Validate the volunteer hours tracker form
function validate(event)
{
       hideAllErrors();
       let errorFlag = false;

       // Validate empty input for the charity name
       if(!isNotEmpty("vol_charityname")) 
       {
              showError("vol_charityname", "* Please enter the required information");
              if(!errorFlag)
              {
                     document.getElementById("vol_charityname").focus();
                     document.getElementById("vol_charityname").select();
              }
              errorFlag = true;
       }
         
       // Validate if the input is empty or not a number for Hours volunteered
       if(!isNotEmpty("vol_hoursvolunteered"))
       {
              showError("vol_hoursvolunteered", "* Please enter the required information");
              if(!errorFlag) 
              {
                     document.getElementById("vol_hoursvolunteered").focus();
                     document.getElementById("vol_hoursvolunteered").select();
                     
              }
              errorFlag = true;
       } else if(!isNumber("vol_hoursvolunteered"))
       {
              showError("vol_hoursvolunteered", "* Please enter numbers for your hours");
              if(!errorFlag)
              {
                     document.getElementById("vol_hoursvolunteered").focus();
                     document.getElementById("vol_hoursvolunteered").select();
              }
              errorFlag = true;
       }
       
       // Validate if the input is empty for the date volunteered
       if(!isNotEmpty("vol_volunteerdate")) 
       {
              showError("vol_volunteerdate", "* Please choose the required date");
              document.getElementById("vol_volunteerdate").focus();
              errorFlag = true;
       }

       // dropdown menu validation
       if(!isSelected()) 
       {
              showError("vol_dropdownMenu", "* Please select your rate for volunteer experience");
              errorFlag = true;
       }

       // when theres error, show error message
       // Prevent form submission if validations fail.
       if(errorFlag) 
       {
              event.preventDefault();
              return false;
       }
}

// Validate if the input is empty
function isNotEmpty(fieldId)
{
       let isNotEmpty = false;
       
       //text fields location
       const field = document.getElementById(fieldId);

       if(field.value.trim() !== ""){
              isNotEmpty = true;
       }
       return isNotEmpty;
}

// Validate if the input is not a number
function isNumber(fieldId)
{
       let isNumber = false;
       
       //text fields location
       const fieldValue = document.getElementById(fieldId).value.trim();

       if(!isNaN(fieldValue)){
              isNumber = true;
       }
       return isNumber;
}

// validate if the rate is selected from the dropdown menu
function isSelected()
{
       let isSelected = false;
       
       const selection = document.querySelector('select[name="vol_dropdownMenu"]');
       const selectionValue = selection.value;

       if(selectionValue !== "")
       {
              isSelected = true;
       }
       return isSelected;
}


// Set the every section categorized as error to disappear
function hideAllErrors()
{
       // Each section contains elements that share the same class for grouping purposes
	let errorFields = document.getElementsByClassName("error");
	for(let i=0;i<errorFields.length;i++)
	{
		errorFields[i].style.display = "none";
	}
}

// Show the error message accordingly
function showError(fieldId, message)
{
       const errorFieldsId = fieldId + "_error";
       const errorLocation = document.getElementById(errorFieldsId);

       if(errorLocation)
       {
              errorLocation.textContent = message;
              errorLocation.style.display = "block";
       }
}
// helper function to create a object for jest testing
function getObject()
{
       return{
              vol_charityname: document.getElementById("vol_charityname").value,
              vol_hoursvolunteered: Number(document.getElementById("vol_hoursvolunteered").value),
              vol_volunteerdate: document.getElementById("vol_volunteerdate").value,
              vol_volunteerrating: Number(document.getElementById("vol_dropdownMenu").value),
       };
}

//for jest to use these functions
if(typeof module !== "undefined")
{
       module.exports = {
              isNotEmpty,
              isNumber,
              isSelected,
              validate,
              getObject
       };
}

//to prevent jest from crashing 
if (typeof document !== "undefined") 
{
       document.addEventListener("DOMContentLoaded", function () {
              const form = document.getElementById("volunteershourstracker");
              if(form)
              {
                     form.addEventListener("submit", validate);
              }
              
       });
}




