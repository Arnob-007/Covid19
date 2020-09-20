import React from 'react'
import numeral from 'numeral'
import './LiveCases.css'

const LiveCases = ({countries}) => {
    return (
        <div className = "livecases">
            {countries.map(({country, cases}) => 
                <tr>
                    <td> {country} </td>
                    <td><strong> {numeral(cases).format("0,0")} </strong></td>
                </tr>
            )}
        </div>
    )
}

export default LiveCases
