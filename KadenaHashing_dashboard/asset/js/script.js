$(document).ready(function () {
    // doughnut cutout charts 
    // setup block
    const data3 = {
        labels: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple'],
        datasets: [{
            data: [15, 10],
            backgroundColor: [
                '#18153A',
                '#12C530'
            ],
            borderColor: 'transparent',
            borderWidth: 5,
            cutout: '80%'
        },
        ]

    };
    // text center
    const stackedTexts = {
        id: 'stackedTexts',
        afterDraw(chart, args, options) {
            const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;


        }
    };
    //config block

    const configure = {
        type: 'doughnut',
        data: data3,
        options: {
            plugins: {
                labels: false,
                legend: {
                    display: false
                }
            }
        },
        plugins: [stackedTexts],
    };

    //render inti block
    const doughnutchart = new Chart(document.getElementById('dougnut_chart'),
        configure
    );

    // line and bar chart
    // setup 
    const data = {

        datasets: [{
            label: 'main',
            data: [
                { x: 2.5, y: 4 },
                { x: 4.1, y: 10 },
                { x: 5, y: 8 },
                { x: 6, y: 12 },
                { x: 7, y: 5 },
                { x: 8.5, y: 10 },
                { x: 8.9, y: 8 },
                { x: 10, y: 12 },
                { x: 10.3, y: 7 },
                { x: 12, y: 9 },
                { x: 13, y: 6 },
                { x: 14.5, y: 11.5 },
                { x: 15.5, y: 6.5 },
                { x: 16.5, y: 9 },
                { x: 17, y: 6.5 },
                { x: 17.5, y: 8.5 },
                { x: 18, y: 3.8 },
                { x: 18.5, y: 6.6 },
                { x: 19, y: 4.6 },
                { x: 19.5, y: 8 },
                { x: 20.5, y: 5.6 },
                { x: 20.9, y: 9 },
            ],
            backgroundColor: [
                'rgba(255, 255, 255, .5)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
            ],
            showLine: true,
            tension: 0.4,
            order: 1,
            yAxisID: 'y',
        },
        {
            label: 'main',
            data: [
                { x: 2.5, y: 6 },
                { x: 4.1, y: 15 },
                { x: 5, y: 7 },
                { x: 6, y: 12 },
                { x: 7, y: 9 },
                { x: 8.5, y: 18 },
                { x: 8.9, y: 7 },
                { x: 10, y: 16 },
                { x: 10.3, y: 11 },
                { x: 12, y: 19 },
                { x: 13, y: 16 },
                { x: 14.5, y: 18 },
                { x: 15.5, y: 6 },
                { x: 16.5, y: 5 },
                { x: 17, y: 6.7 },
                { x: 17.5, y: 6 },
                { x: 18, y: 4 },
                { x: 18.5, y: 7 },
                { x: 19, y: 8 },
                { x: 19.5, y: 8 },
                { x: 20.5, y: 8 },
                { x: 20.9, y: 10 },
            ],
            backgroundColor: [
                'rgba(114, 14, 168, 1)',
            ],
            borderColor: [
                'rgba(114, 14, 168, 1)',
            ],
            showLine: true,
            tension: 0.4,
            type: 'bar',
            yAxisID: 'rightAxis',
            order: 2,
            borderRadius: 10
        }]
    };

    // config 
    const config = {
        type: 'scatter',
        data,
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    min: 2,
                    max: 21,
                    beginAtZero: true,
                    grace: '2%',
                    ticks: {
                        color: '#43425D',
                        stepSize: 2,
                        callback: function (value, index) {
                            if (this.getLabelForValue(index) == 0) {
                                return '$5k'
                            }
                            else if (this.getLabelForValue(index) == 1) {
                                return '$10k'
                            }
                            else if (this.getLabelForValue(index) == 2) {
                                return '$15k'
                            }
                            else if (this.getLabelForValue(index) == 3) {
                                return '$20k'
                            }
                            else if (this.getLabelForValue(index) == 4) {
                                return '$25k'
                            }
                        }
                    }
                },
                rightAxis: {
                    beginAtZero: true,
                    position: 'right',
                    grace: '2%',
                    type: 'linear',
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        stepSize: 2,
                        color: '#43425D',
                        callback: function (value, index) {
                            if (this.getLabelForValue(index) == 0) {
                                return '$5k'
                                
                            }
                            else if (this.getLabelForValue(index) == 1) {
                                return '$10k'
                            }
                            else if (this.getLabelForValue(index) == 3) {
                                return '$15k'
                            }
                            else if (this.getLabelForValue(index) == 5) {
                                return '$20k'
                            }
                            else if (this.getLabelForValue(index) == 7) {
                                return '$25k'
                            }
                        }
                    }
                },
                x: {
                    min: 2,
                    max: 21,
                    beginAtZero: true,
                    stepSize: 2,
                    ticks: {
                        display: false
                    }
                }
            }
        }
    };

    // render init block
    const myChart = new Chart(
        document.getElementById('myCharts'),
        config
    );

    //counter
    $(window).scroll(function () {
        if (isScrolledForSection($('.minor_body'))) {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data');
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
                    {
                        duration: 3000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
            });
        }
        else {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data');
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
                    {
                        duration: 3000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
            });
        }
    })
    // scrolledintoview
    function isScrolledForSection(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if (docViewTop > elemTop) {
            return (true);
            console.log(true);
        }
        if (docViewTop > elemBottom) {
            return (false)
            console.log(false)
        }
    }
    //first  bar chart

    const ctx = document.getElementById('myBar').getContext('2d');
    const dataValue = [21, 45, 20, 5, 10, 17, 15];
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 325);
    gradientBg.addColorStop(0, '#C5129C');
    gradientBg.addColorStop(1, '#710EA8');
    const myCharts = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                data: dataValue,
                backgroundColor: gradientBg,
                borderWidth: 1,
                // barThickness: 50,
                borderRadius: 4,
                fill: true
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    beginAtZero: true,
                    min: 1,
                    max: 20,
                    grace: '2%',
                    ticks: {
                        stepSize: 2,
                        callback: function (value, index) {
                            if (this.getLabelForValue(index) == 0) {
                                return '-$8k'
                            }
                            else if (this.getLabelForValue(index) == 1) {
                                return '-$5k'
                            }
                            else if (this.getLabelForValue(index) == 2) {
                                return '-$2k'
                            }
                            else if (this.getLabelForValue(index) == 3) {
                                return '$0'
                            }
                            else if (this.getLabelForValue(index) == 4) {
                                return '$2k'
                            }
                            else if (this.getLabelForValue(index) == 5) {
                                return '$5k'
                            }
                            else if (this.getLabelForValue(index) == 6) {
                                return '$8k'
                            }
                        }
                    },
                    grid: {
                        color:'#EAF0F4'
                    }
                },
                X: {
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    grace: '2%',
                    grid: {
                        color:'transparent'
                    }
                }
                
            }
        }
    });

    // second bar chart 
    const ctxone = document.getElementById('myBarOne').getContext('2d');
    const dataValueone = [5, 12, 10, 6, 15, 11, 9];
    const gradientBgone = ctx.createLinearGradient(0, 0, 0, 325);
    gradientBgone.addColorStop(0, '#C5129C');
    gradientBgone.addColorStop(1, '#710EA8');
    const myChartone = new Chart(ctxone, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                data: dataValueone,
                backgroundColor: gradientBgone,
                borderWidth: 1,
                // barThickness: 50,
                borderRadius: 4,
                fill: true
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    beginAtZero: true,
                    min: 1,
                    max: 20,
                    grace: '2%',
                    ticks: {
                        stepSize: 2,
                        callback: function (value, index) {
                            if (this.getLabelForValue(index) == 0) {
                                return '-$8k'
                            }
                            else if (this.getLabelForValue(index) == 1) {
                                return '-$5k'
                            }
                            else if (this.getLabelForValue(index) == 2) {
                                return '-$2k'
                            }
                            else if (this.getLabelForValue(index) == 3) {
                                return '$0'
                            }
                            else if (this.getLabelForValue(index) == 4) {
                                return '$2k'
                            }
                            else if (this.getLabelForValue(index) == 5) {
                                return '$5k'
                            }
                            else if (this.getLabelForValue(index) == 6) {
                                return '$8k'
                            }
                        }
                    },
                    grid: {
                        color:'#EAF0F4'
                    }
                },
                X: {
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    grace: '2%',
                    grid: {
                        color:'transparent'
                    }
                }
            }
        }
    });
    // third bar chart 
    const ctxtwo = document.getElementById('myBarTwo').getContext('2d');
    const dataValuetwo = [11, 17, 15, 9, 10, 11, 13];
    const gradientBgtwo = ctxtwo.createLinearGradient(0, 0, 0, 325);
    gradientBgtwo.addColorStop(0, '#C5129C');
    gradientBgtwo.addColorStop(1, '#710EA8');
    const myCharttwo = new Chart(ctxtwo, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                data: dataValuetwo,
                backgroundColor: gradientBgtwo,
                borderWidth: 1,
                // barThickness: 50,
                borderRadius: 4,
                fill: true
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    beginAtZero: true,
                    min: 1,
                    max: 20,
                    grace: '2%',
                    ticks: {
                        stepSize: 2,
                        callback: function (value, index) {
                            if (this.getLabelForValue(index) == 0) {
                                return '-$8k'
                            }
                            else if (this.getLabelForValue(index) == 1) {
                                return '-$5k'
                            }
                            else if (this.getLabelForValue(index) == 2) {
                                return '-$2k'
                            }
                            else if (this.getLabelForValue(index) == 3) {
                                return '$0'
                            }
                            else if (this.getLabelForValue(index) == 4) {
                                return '$2k'
                            }
                            else if (this.getLabelForValue(index) == 5) {
                                return '$5k'
                            }
                            else if (this.getLabelForValue(index) == 6) {
                                return '$8k'
                            }
                        }
                    },
                    grid: {
                        color:'#EAF0F4'
                    }
                },
                X: {
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    grace: '2%',
                    grid: {
                        color:'transparent'
                    }
                }
            }
        }
    });

    // fourth bar chart 
    const ctxthree = document.getElementById('myBarThree').getContext('2d');
    const dataValuethree = [25, 14, 10, 7, 5, 13, 10];
    const gradientBgthree = ctxthree.createLinearGradient(0, 0, 0, 325);
    gradientBgthree.addColorStop(0, '#C5129C');
    gradientBgthree.addColorStop(1, '#710EA8');
    const myChartthree = new Chart(ctxthree, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                data: dataValuethree,
                backgroundColor: gradientBgthree,
                borderWidth: 1,
                // barThickness: 50,
                borderRadius: 4,
                fill: true
            }]
        },
        
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    beginAtZero: true,
                    min: 1,
                    max: 20,
                    grace: '2%',
                    ticks: {
                        stepSize: 2,
                        callback: function (value, index) {
                            if (this.getLabelForValue(index) == 0) {
                                return '-$8k'
                            }
                            else if (this.getLabelForValue(index) == 1) {
                                return '-$5k'
                            }
                            else if (this.getLabelForValue(index) == 2) {
                                return '-$2k'
                            }
                            else if (this.getLabelForValue(index) == 3) {
                                return '$0'
                            }
                            else if (this.getLabelForValue(index) == 4) {
                                return '$2k'
                            }
                            else if (this.getLabelForValue(index) == 5) {
                                return '$5k'
                            }
                            else if (this.getLabelForValue(index) == 6) {
                                return '$8k'
                            }
                        }
                    },
                    grid: {
                        color:'#EAF0F4'
                    }
                },
                X: {
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    grace: '2%',
                    grid: {
                        color:'transparent'
                    }
                }
            }
        }
    });

    // multi bar chart
    // setup 
    const multidata = [dataValuetwo , dataValueone , dataValuethree , dataValue];
    const ctxmulti = document.getElementById('multiBar').getContext('2d');
    const gradientBgmulti = ctxmulti.createLinearGradient(0, 0, 0, 325);
    gradientBgmulti.addColorStop(0, '#C5129C');
    gradientBgmulti.addColorStop(1, '#710EA8');
    const myChartmulti = new Chart(ctxmulti, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                data:dataValue,
                backgroundColor: gradientBgmulti,
                borderWidth: 1,
                borderRadius: 4,
                fill: true
            },
            { data:dataValueone,
                backgroundColor: gradientBgmulti,},
            { data:dataValuetwo,
                backgroundColor: gradientBgmulti,},
            { data:dataValuethree,
                backgroundColor: gradientBgmulti,}
        ]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    beginAtZero: true,
                    min: 1,
                    max: 20,
                    grace: '2%',
                    ticks: {
                        stepSize: 2,
                        callback: function (value, index) {
                            if (this.getLabelForValue(index) == 0) {
                                return '-$8k'
                            }
                            else if (this.getLabelForValue(index) == 1) {
                                return '-$5k'
                            }
                            else if (this.getLabelForValue(index) == 2) {
                                return '-$2k'
                            }
                            else if (this.getLabelForValue(index) == 3) {
                                return '$0'
                            }
                            else if (this.getLabelForValue(index) == 4) {
                                return '$2k'
                            }
                            else if (this.getLabelForValue(index) == 5) {
                                return '$5k'
                            }
                            else if (this.getLabelForValue(index) == 6) {
                                return '$8k'
                            }
                        }
                    },
                    grid: {
                        color:'#EAF0F4'
                    }
                },
                X: {
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    grace: '2%',
                    grid: {
                        color:'transparent'
                    }
                }
            }
        }
    });

    // search button
    var width = $(window).outerWidth();
    if (width <= 480) {
        $(".search_bar").click(function () {
            $(".search_bar").toggleClass("active")
        })
    }

    // content change on onclick
    $(".dash li").click(function () {
        $(".dash li").removeClass("active")
        $(".content_wrap").removeClass("active")
        $(".dash li .dash_link").removeClass("active")
        var data = $(this).attr("data")
        $(".main_body").find(data).addClass("active")
        $(this).addClass("active")

    })

    //  custome tab charts
    $(".tab1_body").hide();
    $(".tab1_body.activetab").show();
    $('#tabz li a').click(function () {
        $(".tab1_body").hide();
        $(".tab1_body").removeClass("activetab");
        $('#tabz li a').removeClass("active")
        var t = $(this).attr("target");
        var find_ent = $(this).parents(".tabs_wrap");
        find_ent.find("#" + t).show();
        var tab = find_ent.find("#" + t);
        tab.addClass("activetab");
        $(".tab1_body.activetab").show();
        $(this).addClass("active")
    });
})