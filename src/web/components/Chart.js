import React from 'react'

const Chart = () => {
    let result = {
        type: 'line',
        data: {
            
            labels: this.labels,
            datasets: [
                {
                    label: this.label,
                    borderColor: [this.color || getComputedStyle(document.body).getPropertyValue('--brand-primary')],
                    data: this.data
                }
            ]   
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: this.min,
                        max: this.max,
                        stepSize: this.step
                    }   
                }]
            }
        }
    };
}