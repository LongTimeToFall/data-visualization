// 网络规划区域
function project() {
    const contentLeftTop = document.querySelector('.LeftTop')
    const myChart = echarts.init(contentLeftTop)
    const option = {
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
            },
        ],
        series: [
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
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
        grid: {
            top: '10%',
            right: '5%',
            left: '10%',
            bottom: '30%'
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
            },
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 600,
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    color: '#272456'
                }
            },
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

// 网络设计-在网现状
function desiagn() {
    const desi = document.querySelector('.design')
    const myChart = echarts.init(desi)
    const option = {
        title: [
            {
                subtext: '在网分布系统现状',
                left: '15%',
                top: '5%'
            }, {
                subtext: '在网直放站现状',
                right: '15%',
                top: '5%'
            }
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: [{
            orient: 'vertical',
            // x: 'left',
            itemWidth: 8,  // 设置宽度
            itemHeight: 8, // 设置高度
            textStyle: {
                color: "#fff",
                fontSize: 10
            },
            left: '10%',  //图例距离左的距离
            top: '24%',
            data: ['已归档站点', '已拆除站点', '', '在建站点', '改造站点'],//图例换行

        }, {
            orient: 'vertical',
            // x: 'left',
            itemWidth: 8,  // 设置宽度
            itemHeight: 8, // 设置高度
            textStyle: {
                color: "#fff",
                fontSize: 10
            },
            left: '60%',  //图例距离左的距离
            top: '24%',
            data: ['干线放大器', '模拟直放站', '', '无线直放站', '数字直放站'],//图例换行

        }],
        series: [
            {
                name: '在网分布系统现状',
                type: 'pie',
                radius: [30, 55],
                center: ['25%', '70%'],
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%',       //显示的内容
                        position: 'inner',
                        textStyle: {
                            fontSize: '10',
                            color: '#fff'
                        }
                    },
                },
                data: [
                    { value: 70, name: '已归档站点' },
                    { value: 5, name: '已拆除站点' },
                    { value: 10, name: '在建站点' },
                    { value: 15, name: '改造站点' }
                ]
            },
            {
                name: '在网直放站现状',
                type: 'pie',
                radius: [30, 55],
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%',       //显示的内容
                        position: 'inner',
                        textStyle: {
                            fontSize: '10',
                            color: '#fff'
                        }
                    },
                },
                center: ['75%', '70%'],
                data: [
                    { value: 10, name: '干线放大器' },
                    { value: 5, name: '无线直放站' },
                    { value: 15, name: '模拟直放站' },
                    { value: 70, name: '数字直放站' }
                ]
            }
        ]
    };
    myChart.setOption(option)
}
desiagn()

// 网络设计-各市分布现状
function distribute() {
    const leftBottom = document.querySelector('.distribute')
    const myChart = echarts.init(leftBottom)
    const option = {
        title: {
            text: '分地市分布系统现状',
            textStyle: {
                fontSize: 12,
                color: '#fff',
                fontWeight: 'normal',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['已归档站点数', '已拆除站点数', '在建站点', '改进站点'],
            textStyle: {
                fontSize: 10,
                color: '#fff'
            },
            top: '10%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['杭州', '衢州', '舟山', '宁波', '温州', '嘉兴', '金华', '绍兴', '丽水', '台州', '湖州'],
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    fontSize: 10
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: [
            {
                name: '已归档站点数',
                type: 'line',
                data: [4550, 1260, 710, 3970, 3467, 3400, 2989, 2019, 1800, 1802, 1780]
            },
            {
                name: '已拆除站点数',
                type: 'line',
                data: [905, 1, 1, 230, 480, 400, 20, 0, 0, 0, 0]
            },
            {
                name: '在建站点',
                type: 'line',
                data: [600, 450, 140, 600, 520, 450, 490, 300, 0, 500, 0]
            },
            {
                name: '改造站点',
                type: 'line',
                data: [700, 490, 150, 660, 520, 450, 490, 300, 0, 500, 0]
            }
        ],
        color: ['#FF4949', '#FFA74D', '#77cd63', '#44AFF0',],
    };
    myChart.setOption(option)
}
distribute()

// 网络设计-材料数量统计
function statistics() {
    const leftBottom = document.querySelector('.statistics')
    const myChart = echarts.init(leftBottom)
    const option = {
        title: {
            text: '材料数量统计',
            textStyle: {
                fontSize: 12,
                color: '#fff',
                fontWeight: 'normal',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '3%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['合路器', '功分器', '藕合器', '全向吸顶天线', '定向吸顶天线', '板状天线', '美化天线'],
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
            },
        },
        yAxis: {
            type: 'value',
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
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '40%',
            barCategoryGap: '5%',
            data: ["37077", "1404960", "2012952", "2593964", "162313", "648970", "35953", "625"]
        }],
        color: '#38b3f1'
    };
    myChart.setOption(option)
}
statistics()

// 无线网络大数据采集终端/模块--监控点  地图
function map() {
    const mao = document.querySelector('.map')
    const myChart = echarts.init(mao)
    const option = {
        backgroundColor: '',//设置无背景色
        series: [{
            type: 'map',
            mapType: 'zhejiang',
            roam: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,

                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(175,238,238, 0)'
                        }, {
                            offset: 1,
                            color: 'rgba(47,79,79, .1)'
                        }],
                        globalCoord: false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            animation: false,
            data: [{
                name: '丽水',

            }, {
                name: '杭州',

            }, {
                name: '温州',

            }, {
                name: '宁波',

            }, {
                name: '舟山',
            }, {
                name: '台州',

            }, {
                name: '金华',

            }, {
                name: '衢州',

            }, {
                name: '绍兴',

            }, {
                name: '嘉兴',

            }, {
                name: '湖州',

            }]
        }]
    }
    myChart.setOption(option)

    // 使用刚指定的配置项和数据显示图表。
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


map()

// 无线网络大数据采集终端/模块--监控点  现网规模
function netWork() {
    const mao = document.querySelector('.netWork')
    const myChart = echarts.init(mao)
    const option = {
        title: {
            text: '在网分布系统现状', left: 'center',
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                textAlign: 'center'
            },
        },
        color: ['#218BB4', '#5AA949', '#7121B4', '#C23531'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                color: "#fff",
                fontSize: 10
            },
            left: 'center',
            top: '24%',
            data: ['宏站', '室分', '微站']
        },
        series: {
            name: '在网分布系统现状',
            type: 'pie',
            radius: [20, 45],
            center: ['50%', '65%'],
            label: {
                normal: {
                    show: true,
                    formatter: '{d}%',
                    position: 'inner',
                    textStyle: {
                        fontSize: '10',
                        color: '#fff'
                    }
                },
            },
            data: [
                { value: 60, name: '宏站' },
                { value: 30, name: '室分' },
                { value: 10, name: '微站' },
            ]
        }
    };
    myChart.setOption(option)
}
netWork()

// 无线网络大数据采集终端/模块--监控点  档期规律
function schedule() {
    const mao = document.querySelector('.schedule')
    const myChart = echarts.init(mao)
    const option = {
        title: {
            text: '档期规模', left: 'center',
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                textAlign: 'center'
            },
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
            data: ['宏站', '室分', '微站'],
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
                ['x', '当前规模数', '当前拍照数', '当前在网数'],
                ['宏站', 1250, 1400, 1100],
                ['室分', 750, 760, 450],
                ['微站', 980, 980, 580]
            ]
        },
        grid: [
            {
                bottom: '20%',
            },
        ],
        series: [
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
            { type: 'bar', seriesLayoutBy: 'row', barWidth: 14, barGap: '10%', },
        ]
    }
    myChart.setOption(option)
}
schedule()