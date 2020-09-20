import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import numeral from 'numeral'
import './Linegraph.css'

const options = {
    legend: {
        display: false,
    },
    elements: {
        point : {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral (tooltipItem.value).format("+0,0")
            },
        },
    },
    scales: {
        xAxes: [{
            type: "time",
            time: {
                format: "MM/DD/YY",
                tooltipFormat: "ll"
            },
        }],
        yAxes: [{
            gridLines: {
                display: false,
            },
            ticks: {
                callback: function (value, index, values) {
                    return numeral(value).format("0a")
                }
            }
        }]
    }

}

const LineGraph = ({casesType}) => {

    const [data, setData] = useState({})

    useEffect (() => {
        fetch ("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then(res => res.json())
            .then (data => {
                let chartData = [];
                let lastDateCases;
                for (let date in data[casesType]) {
                    if (lastDateCases) {
                        let newDateCases = {
                            x: date,
                            y: data[casesType][date] - lastDateCases
                        }
                        chartData.push (newDateCases)
                    }
                    lastDateCases = data[casesType][date];
                }
                setData (chartData)
            })
    }, [casesType])

    return (
        <div className = "linegraph">
            {data?.length &&
            <Line
                height = "100%"
                options = {options}
                data = {{
                    datasets: [{
                        data: data,
                        backgroundColor: `${casesType === "recovered" ? "rgba(0, 128, 0, 0.2)" : "rgba(255, 0, 0, 0.2)" }`,
                        borderColor: `${casesType === "recovered" ? "green" : "red" }`
                    }]
                }}
            />
            }
        </div>
    )
}

export default LineGraph
