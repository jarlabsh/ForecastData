import {
    LightningElement,
    track
} from 'lwc';

const months = ['Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
];
const columnWidth = 180;
var tempArr = [],year, summaryArray, copyArr;

export default class ForecastData extends LightningElement {

    summaryYears;
    summaryMonths;
    lineItemData;;
    columns = [];


    summaryYears = {
        status: "success",
        responseData: {
            yearsData: [{
                    year: "2019",
                    summaryAmount: "$2,190.80",
                    lineData: [{
                            recordId: "a2m2G000000AJKQQA4",
                            amount: "$1,045.00"
                        },
                        {
                            recordId: "a2m2G000009H0fIQAS",
                            amount: "$1,100.00"
                        },
                        {
                            recordId: "a2m2G000009H0fHQAS",
                            amount: "$45.80"
                        }
                    ]
                },
                {
                    year: "2020",
                    summaryAmount: "$1,874.20",
                    lineData: [{
                            recordId: "a2m2G000000AJKQQA4",
                            amount: "$665.00"
                        },
                        {
                            recordId: "a2m2G000009H0fIQAS",
                            amount: "$1,200.00"
                        },
                        {
                            recordId: "a2m2G000009H0fHQAS",
                            amount: "$9.20"
                        }
                    ]
                },
                {
                    year: "2021",
                    summaryAmount: "$100.00",
                    lineData: [{
                        recordId: "a2m2G000009H0fIQAS",
                        amount: "$100.00"
                    }]
                }
            ]
        },
        message: null
    };
    summaryMonths = {
        status: "success",
        responseData: {
            summaryAmount: [
                "$195.00",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.58",
                "$199.62",
                "$195.00",
                "$195.00",
                "$195.00",
                "$195.00",
                "$195.00",
                "$100.00",
                "$100.00",
                "$100.00",
                "$100.00",
                "$100.00",
                "$100.00"
            ],
            startYear: 2019,
            startMonth: 2,
            linesData: [{
                    startYear: 2019,
                    startMonth: 2,
                    recordId: "a2m2G000000AJKQQA4",
                    data: [
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00",
                        "$95.00"
                    ]
                },
                {
                    startYear: 2019,
                    startMonth: 2,
                    recordId: "a2m2G000009H0fIQAS",
                    data: [
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00",
                        "$100.00"
                    ]
                },
                {
                    startYear: 2019,
                    startMonth: 3,
                    recordId: "a2m2G000009H0fHQAS",
                    data: [
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.58",
                        "$4.62"
                    ]
                }
            ]
        },
        message: null
    };

    connectedCallback() {
        this.lineItemData = [{
                unitPrice: 95,
                startMonth: "2/1/2019",
                revenueType: "MRC",
                revenueRecognitionName: null,
                revenueRecognitionId: null,
                qty: 1,
                productItemName: "Captio User Delegation",
                productItemId: "a01A000001gmFXZIA2",
                productFLIId: "a2m2G000000AJKQQA4",
                priorMRR: null,
                optionItemName: null,
                optionItemId: null,
                optionFLIId: null,
                monthsVR: null,
                monthsNRC: null,
                monthsMRC: null,
                months: 18,
                displayUnitPrice: "$95.00",
                displayQty: "1",
                displayPriorMRR: null,
                committed: "No",
                attributesWithValues: null,
                attributes: null,
                year1: this.summaryYears.responseData.yearsData[0].lineData[0].amount,
                year2: this.summaryYears.responseData.yearsData[1].lineData[0].amount
            },
            {
                unitPrice: 55,
                startMonth: "3/1/2019",
                revenueType: "NRC",
                revenueRecognitionName: null,
                revenueRecognitionId: null,
                qty: 1,
                productItemName: "TNS Link",
                productItemId: "a01A000001utm3RIAQ",
                productFLIId: "a2m2G000009H0fHQAS",
                priorMRR: null,
                optionItemName: null,
                optionItemId: null,
                optionFLIId: null,
                monthsVR: null,
                monthsNRC: null,
                monthsMRC: null,
                months: 12,
                displayUnitPrice: "$55.00",
                displayQty: "1",
                displayPriorMRR: null,
                committed: "No",
                attributesWithValues: null,
                attributes: null,
                year1: this.summaryYears.responseData.yearsData[0].lineData[1].amount,
                year2: this.summaryYears.responseData.yearsData[1].lineData[1].amount
            },
            {
                unitPrice: 100,
                startMonth: "2/1/2019",
                revenueType: "MRC",
                revenueRecognitionName: null,
                revenueRecognitionId: null,
                qty: 1,
                productItemName: "TNS Link",
                productItemId: "a01A000001utm3RIAQ",
                productFLIId: "a2m2G000009H0fIQAS",
                priorMRR: null,
                optionItemName: null,
                optionItemId: null,
                optionFLIId: null,
                monthsVR: null,
                monthsNRC: null,
                monthsMRC: null,
                months: 24,
                displayUnitPrice: "$100.00",
                displayQty: "1",
                displayPriorMRR: null,
                committed: "No",
                attributesWithValues: null,
                attributes: null,
                year1: this.summaryYears.responseData.yearsData[0].lineData[2].amount,
                year2: this.summaryYears.responseData.yearsData[1].lineData[2].amount
            },
            {
                year1: this.summaryYears.responseData.yearsData[0].summaryAmount,
                year2: this.summaryYears.responseData.yearsData[1].summaryAmount,
                boldClass: 'bold-text',
            }
        ];
        summaryArray = [{
                label: 'Product',
                fieldName: 'productItemName',
                type: 'text',
                initialWidth: columnWidth,
                hideDefaultActions: true,

            },
            {
                label: 'Unit Price',
                fieldName: 'unitPrice',
                type: 'text',
                initialWidth: columnWidth / 2,
                hideDefaultActions: true
            },
            {
                label: 'QTY',
                fieldName: 'qty',
                type: 'text',
                initialWidth: columnWidth / 2,
                hideDefaultActions: true
            },
            {
                label: 'Revenue Type',
                fieldName: 'revenueType',
                type: 'text',
                initialWidth: columnWidth / 1.5,
                hideDefaultActions: true
            },
            {
                label: '2019',
                fieldName: 'year1',
                type: 'text',
                minColumnWidth: 10,
                hideDefaultActions: true,
                initialWidth: columnWidth / 2,
                cellAttributes: {
                    class: {
                        fieldName: 'boldClass'
                    }
                }
            },
            {
                label: '2020',
                fieldName: 'year2',
                type: 'text',
                initialWidth: columnWidth / 2,
                minColumnWidth: 10,
                hideDefaultActions: true
            }
        ];
        this.columns = summaryArray;
        copyArr = [...this.columns];
        tempArr = copyArr.splice(0, this.columns.length - 2);
        year = this.summaryYears.responseData.yearsData[0].year;
        for (let lineItem = 0; lineItem < this.summaryMonths.responseData.linesData.length; lineItem++) {
            let ctr = 0,
                tempYear = year;
            console.log('Table data' + this.summaryMonths.responseData.linesData[lineItem].length);
            for (let i = 0; i < this.summaryYears.responseData.yearsData.length * 12; i++) {
                if (i >= this.summaryMonths.responseData.linesData[lineItem].startMonth &&
                     tempYear >= this.summaryMonths.responseData.linesData[lineItem].startYear && 
                     ctr <= this.summaryMonths.responseData.linesData[lineItem].data.length &&
                    this.summaryMonths.responseData.linesData[lineItem].data[i] !== undefined
                    ) {
                    this.lineItemData[lineItem]['monthPrice' + i] = this.summaryMonths.responseData.linesData[lineItem].data[i];
                    ctr++;
                } else {
                    this.lineItemData[lineItem]['monthPrice' + i] = '-';
                }
                if (ctr % 12 == 0) {
                    tempYear++;
                }
            }
        }
        for (let i = 0; i < this.summaryYears.responseData.yearsData.length * 12; i++) {
            tempArr.push({
                label: months[i % 12] + " " + year,
                fieldName: 'monthPrice' + i,
                type: 'text',
                initialWidth: 100,
                hideDefaultActions: true
            })

            if (months[i % 12] === "Dec") {
                year++;
            }

        }
    }
    renderedCallback() {}
    handleHover(event) {
        var btn = this.template.querySelector('[data-id="btn"]');
        btn.click();
    }
    handleOnselect(event) {
        if (event.detail.value === 'All') {
            this.columns = tempArr;
            console.log('Columns' + this.columns);
        } else {
            this.columns = summaryArray;
        }
    }

}