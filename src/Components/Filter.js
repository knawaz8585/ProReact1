import React from 'react'


export default function Filter(props) {
    const dropdownhandlechange = (event) => {
        props.onChangeFilter(event.target.value)
    };

    return (
        <div>
            <div className="expense-filter">
                <div className="expense-filter-control">
                    <label >Filter by Year</label>
                    <select value={props.selected} onChange={dropdownhandlechange}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
