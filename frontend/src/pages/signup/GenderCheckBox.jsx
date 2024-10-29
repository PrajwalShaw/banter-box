import React from 'react'

const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {//selectedGender is a prop passed to component
    return (
        <div className='flex mt-4'>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === 'male'} onChange={()=> onCheckboxChange("male")} />
                </label>
            </div>

            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox  border-slate-900"checked={selectedGender === 'female'} onChange={()=> onCheckboxChange("female")} />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox


//The GenderCheckBox is a functional React component designed to allow users to select their gender through checkboxes (Male or Female). 
//Here's a simple explanation of how it works:

// Props Passed to the Component:

// onCheckboxChange: A function that gets called when the user interacts with the checkboxes (either selecting Male or Female).
// selectedGender: A string that represents which gender (either "male" or "female") is currently selected.
// Checkboxes for Gender:

// There are two checkboxes, one for "Male" and one for "Female". These are grouped inside div elements styled with Tailwind CSS 
//classes like form-control and checkbox.Each checkbox is "checked" based on whether the selectedGender matches "male" or "female". 
//If the user has selected Male, the Male checkbox will be checked, and the same for Female.
// Handling Checkbox Clicks:

// When a user clicks on a checkbox, the onCheckboxChange function is called, passing in either "male" or "female" based on which checkbox 
//was clicked.This lets the parent component know which gender was selected.
// Styling:

// The selectedGender prop also controls the styling of the labels for the checkboxes. If the current gender matches 
//"male" or "female", a selected class is applied to visually indicate which gender is selected.

//Key Idea: The component lets the user select a gender, and whichever gender is selected, 
//it updates the checked state of the checkbox and the visual appearance of the label.