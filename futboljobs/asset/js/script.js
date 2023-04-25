$(document).ready(function () {
    /**
   * Custom select
   */
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "input-cnt": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");

        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");

        /***********************************
         * UPDATE: Added value attribute
         ***********************************/
        b.setAttribute("class", "select-items select-hide");
        /***********************************/

        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.setAttribute('value', selElmnt.options[j].value);
            c.addEventListener("click", function (e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");

                        /*********************************************************
                         * UPDATE: Set select box value from the value attribute
                         * Created and triggered the change event
                         *********************************************************/
                        s.value = this.getAttribute('value');
                        let changeEvent = new Event('change');
                        s.dispatchEvent(changeEvent);
                        /*********************************************************/
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        // validate();
        a.addEventListener("click", function (e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);

    // on click jump to next page
    $(".main-content").hide();
    $(".edit-blk").hide();
    $(".main-content.active").show();
    $(".pannel li ").click(function () {
        $(this).each(function () {
            $(".pannel li").removeClass("active");
            $(this).addClass("active");
            var data = $(this).attr("data");
            var id = "#" + data;
            var edit = $(this).attr("edit");
            var editId = '#' + edit;
            var datafetch = $(this).attr("data2");
            var datafetchId = '#' + datafetch;
            var dataContent = $(datafetchId).text();
            if($(this).hasClass("active")){
                $("#spanCnt").text(dataContent);
            }
            $(".edit-blk").hide();
            $(".main-content").hide();
            $(id).parent(".pages").find(id).show();
            if ($(".pannel li:nth-child(2)").hasClass("active")) {
                $(editId).parent(".lower-header").find(editId).show();
            }
        })
    })
    $(".cmn-click").click(function () {
        var data = $(this).attr("data");
        var id = "#" + data;
        $(".main-content").hide();
        $(id).parent(".inner-pages").find(id).show();

    })
    $(".cmn-click2").click(function () {
        var data = $(this).attr("data");
        var id = "#" + data;
        var edits = $(".main-content");
        var message = $(edits).parent(".inner-pages").find(edits);
        $(message).each(function () {
            var msg = $(this).attr("message-data");
            var msgId = '#' + msg;
            $("#edit-page").css("display", "none");
            $(msgId).show();
        })
        $(".main-content").hide();
        $(id).parent(".inner-pages").find(id).show();

    })

    //bar chart
    const ctx = document.getElementById('myBar').getContext('2d');
    const dataValue = [14, 5, 10, 5, 10, 8, 10];
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 325);
    gradientBg.addColorStop(0, '#37984B');
    gradientBg.addColorStop(1, '#37984B');
    const myCharts = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
                data: dataValue,
                backgroundColor: gradientBg,
                borderWidth: 1,
                borderRadius: 8,
                borderRadius: 4,
                fill: true
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
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
                                return '0'
                            }
                            else if (this.getLabelForValue(index) == 1) {
                                return '10'
                            }
                            else if (this.getLabelForValue(index) == 2) {
                                return '20'
                            }
                            else if (this.getLabelForValue(index) == 3) {
                                return '30'
                            }
                            else if (this.getLabelForValue(index) == 4) {
                                return '40'
                            }
                        }
                    },
                    grid: {
                        color: '#EAF0F4'
                    }
                },
                X: {
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    grace: '2%',
                    grid: {
                        color: 'transparent'
                    }
                }

            },
            barPercentage: 0.4,
        }
    });


    // doughnut cutout charts 
    // setup block
    const data3 = {
        labels: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple'],
        datasets: [{
            data: [30, 10],
            backgroundColor: [
                '#F2F2F2',
                '#37984B'
            ],
            borderColor: 'transparent',
            borderWidth: 5,
            cutout: '80%',
            borderRadius:30,
        },
        ]

    };
    const data4 = {
        labels: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple'],
        datasets: [{
            data: [15, 6],
            backgroundColor: [
                '#F2F2F2',
                '#37984B'
            ],
            borderColor: 'transparent',
            borderWidth: 5,
            cutout: '80%',
            borderRadius:30,
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
    const configure2 = {
        type: 'doughnut',
        data: data4,
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
    const doughnutchart1 = new Chart(document.getElementById('dougnut_chart2'),
        configure2
    );
    const doughnutchart2 = new Chart(document.getElementById('dougnut_chart3'),
        configure2
    );
});
