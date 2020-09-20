import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import numeral from 'numeral'
import './Infobox.css'

const Infobox = ({setCasesType, active, title, cases, total}) => {
    return (
        <div className = {`infobox ${active && "info__actv"}`}>
            <Card onClick = {setCasesType}>
                <CardContent>
                    <Typography color = "textSecondary">
                        {title}
                    </Typography>

                    <h2 className = "info__h2" > 
                        {`+${numeral(cases).format("0.0a")}`} 
                    </h2>

                    <Typography color = "textSecondary">
                        {`${numeral(total).format("0.0a")} in Total`}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Infobox
