// 网络规划区域
function project() {
    const contentLeftTop = document.querySelector('.LeftTop')
    const myChart = echarts.init(contentLeftTop)
    const option = {
        legend: {
            data: ['GSM', 'WCDMA', 'LTE', 'WLAN', 'NB-LOT', 'LORA']
        },
        tooltip: {},
        color: ['#ef5f2b', '#4a6ac4', '#77cd63', '#a325c0', '#369ebc', '#e2a83f'],
        xAxis: [
            {
                type: 'category',
                // prettier-ignore
                axisLine: {
                    lineStyle: {
                        color: "#fff",
                    }
                },
                axisLabel: {   //x轴文字样式
                    textStyle: {
                        fontSize: 13
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#fff",
                    }
                },
                axisLabel: {   //x轴文字样式
                    textStyle: {
                        fontSize: 13
                    }
                },
            }
        ],
        legend: {
            data: ['GSM', 'WCDMA', 'LTE', 'WLAN', 'NB-LOT', 'LORA'],
            textStyle: {
                color: "#fff",
                fontSize: 10
            },
            icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
            itemWidth: 8,  // 设置宽度
            itemHeight: 8, // 设置高度
            itemGap: 10,// 设置间距
            padding: [40, 10, 15, 20]    // [5, 10, 15, 20]

        },
        dataset: {
            source: [
                ['x', '需整改', '需增补', '需新建', '需扩容'],
                ['GSM', 10, 0, 0, 0, 0, 0],
                ['WCDMA', 20, 0, 0, 0, 0, 0],
                ['LTE', 125, 124, 226, 38, 45, 29],
                ['WLAN', 38, 36, 148, 13, 25, 10],
                ['NB-LOT', 25, 43, 38, 30],
                ['LORA', 28, 31, 26, 12]
            ]
        },
        grid: [
            {
                top: '22%',
                bottom: '20%',
                // left: '10%',
                // right:'5%'
            },
        ],
        series: [
            // These series are in the first grid.
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            // These series are in the second grid.
        ]
    };
    myChart.setOption(option)
}
project()

// 网络维护-警告
function maintain() {
    const one = document.querySelector('._1')
    const two = document.querySelector('._2')
    const three = document.querySelector('._3')
    const four = document.querySelector('._4')
    const five = document.querySelector('._5')
    const six = document.querySelector('._6')
    const seven = document.querySelector('._7')
    const eight = document.querySelector('._8')
    const myChart1 = echarts.init(one)
    const myChart2 = echarts.init(two)
    const myChart3 = echarts.init(three)
    const myChart4 = echarts.init(four)
    const myChart5 = echarts.init(five)
    const myChart6 = echarts.init(six)
    const myChart7 = echarts.init(seven)
    const myChart8 = echarts.init(eight)
    const option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: '指标',
                type: 'gauge',
                min: 0,
                max: 1000,
                // 分割段数，默认为5
                splitNumber: 10,
                radius: '68%',
                // 仪表位置
                center: ["50%", "60%"],
                // 轴样式
                axisLine: {
                    // 属性lineStyle控制线条样式
                    lineStyle: {
                        // 颜色
                        color: [[0.2, '#228b22'], [0.8, '#48b'], [1, '#ff4500']],
                        // 宽度
                        width: 2,
                        // 发光
                        shadowColor: '#fff',
                        // 扩散
                        shadowBlur: 10
                    }
                },
                // 坐标轴内线
                axisTick: {
                    splitNumber: 5,
                    length: 6,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                // 指针数值不显示
                axisLabel: {
                    show: false
                },
                splitLine: {
                    length: 2,
                    lineStyle: {
                        width: 2,
                        color: '#fff',
                        shadowColor: '#fff',
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width: 2
                },
                title: {
                    offsetCenter: [0, '100%'],
                    textStyle: {
                        fontWeight: 'bolder',
                        fontSize: 10,
                        color: '#fff',
                    }
                },
                detail: {
                    formatter: '{value}',
                    offsetCenter: [0, '30%'],
                    textStyle: {
                        fontWeight: 'bolder',
                        fontSize: 14,
                        color: '#fff'
                    }
                },
                data: [{ value: 554, name: '位置告警' }]
            }
        ]
    }
    index = 0;
    setInterval(function () {
        data = [600, 580, 620, 670, 550, 560, 600, 670, 700, 750, 610, 670, 723, 590, 780, 770, 790, 820, 870, 890, 920, 990];
        option.series[0].data[0].value = data[index++ % data.length];
        myChart1.setOption(option, true);
    }, 2000);
    setInterval(function () {
        data = [300, 380, 420, 370, 450, 360, 500, 470, 500, 550, 410, 570, 423, 590, 480, 470, 540, 620, 570, 690, 770, 650];
        option.series[0].data[0].value = data[index++ % data.length];
        myChart2.setOption(option, true);
    }, 2000);
    setInterval(function () {
        data = [40, 88, 267, 100, 55, 65, 178, 82, 30, 66, 76, 67, 45, 79, 89, 90, 200, 120, 300, 230, 56, 70];
        option.series[0].data[0].value = data[index++ % data.length];
        myChart3.setOption(option, true);
    }, 2000);
    setInterval(function () {
        data = [600, 240, 300, 278, 330, 380, 440, 670, 500, 559, 340, 400, 278, 389, 456, 290, 390, 400, 450, 470, 700, 720];
        option.series[0].data[0].value = data[index++ % data.length];
        myChart4.setOption(option, true);
    }, 2000);
    setInterval(function () {
        data = [100, 180, 220, 320, 450, 160, 200, 270, 300, 450, 610, 270, 323, 490, 320, 370, 490, 520, 670, 700, 720, 890];
        option.series[0].data[0].value = data[index++ % data.length];
        myChart5.setOption(option, true);
    }, 2000);
    setInterval(function () {
        data = [20, 180, 220, 170, 50, 90, 100, 180, 300, 150, 210, 170, 50, 70, 110, 77, 59, 30, 50, 190, 210, 390];
        option.series[0].data[0].value = data[index++ % data.length];
        myChart6.setOption(option, true);
    }, 2000);
    setInterval(function () {
        data = [600, 580, 700, 770, 850, 960, 500, 670, 700, 450, 670, 470, 780, 490, 520, 600, 690, 700, 750, 870, 670, 800];
        option.series[0].data[0].value = data[index++ % data.length];
        myChart7.setOption(option, true);
    }, 2000);
    setInterval(function () {
        data = [10, 230, 320, 170, 55, 300, 400, 67, 100, 150, 210, 370, 423, 90, 180, 270, 390, 420, 70, 190, 220, 390];
        option.series[0].data[0].value = data[index++ % data.length];
        myChart8.setOption(option, true);
    }, 2000);
    myChart1.setOption(option)
    myChart2.setOption(option)
    myChart3.setOption(option)
    myChart4.setOption(option)
    myChart5.setOption(option)
    myChart6.setOption(option)
    myChart7.setOption(option)
    myChart8.setOption(option)
}
maintain()
// 网络维护-原因
function faultDiagnosis() {
    const rightTOP = document.querySelector('.faultDiagnosis')
    const myChart = echarts.init(rightTOP)
    const option = {
        title: {
            text: '通过告警算法预测故障原因',
            textStyle: {
                fontSize: 12,
                color: '#fff',
                fontWeight: 'normal',
            },
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: ['参数', '延伸系统', '老旧隐患', '设备', '传输/线路', '动力'],
            axisLine: {
                lineStyle: {
                    color: '#272456'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#fff',
                textStyle: {
                    fontSize: 10
                },
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 600,
            splitNumber: 4,
            axisLabel: {
                formatter: '{value}',
                color: '#fff',
                interval: 0,
                textStyle: {
                    fontSize: 10
                },
            },
        },
        series: [
            {
                data: [80, 150, 250, 240, 320, 550],
                type: 'bar',
                barWidth: '10px',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#41E1D4'
                        }, {
                            offset: 1,
                            color: '#10A7DB'
                        }], false),
                        barBorderRadius: [5, 5, 0, 0],
                        shadowColor: 'rgba(0,255,225,1)',
                        shadowBlur: 4,
                    }
                },
            }
        ]
    };
    myChart.setOption(option)
}
faultDiagnosis()
// 网络设计-材料数量统计
function statistics() {
    const leftBottom = document.querySelector('.statistics')
    const myChart = echarts.init(leftBottom)
    const option = {
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    myChart.setOption(option)
}
statistics()


