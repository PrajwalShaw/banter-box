import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex mt-4'>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Male</span>
                    <input type="checkbox" defaultChecked className="checkbox" />
                </label>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox