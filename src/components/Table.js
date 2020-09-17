import React from 'react'
import Columns from './Columns'

function Table() {
    return (
        <table border="4px">
            <tr>
                <Columns />
            </tr>
            <tr>
                <Columns />
            </tr>
            <tr>
                <Columns />
            </tr>
        </table>
    )
}

export default Table
