var time1 = "";
var millisecond_num = 0;
var second_num = 0;
var rendom_num = 0;
var min_num = 0;
var onoff = true;
$(".start").on("click", function() {
    start_time();
})

$(".end").on("click", function() {
    onoff = true;
    clearInterval(time1);
})

$(".reset").on("click", function() {
    reset_time();
})

//开始计时
function start_time() {
    if (onoff) {
        onoff = false;
        time1 = setInterval(function() {
            millisecond_num++;
            rendom_num++;
            if (rendom_num >= 9) {
                rendom_num = 0;
            }
            $(".rendom").html(rendom_num);

            if (millisecond_num <= 9) {
                $(".millisecond").html(("0" + millisecond_num));
            } else if (millisecond_num >= 10 && millisecond_num <= 99) {
                $(".millisecond").html(millisecond_num);
            } else if (millisecond_num >= 99) {
                millisecond_num = 0;
                second_num++;
                $(".millisecond").html(("0" + millisecond_num));
                if (second_num <= 9) {
                    $(".second").html(("0" + second_num));
                } else if (second_num >= 60) {
                    second_num = 0;
                    $(".second").html(("0" + second_num));
                    min_num++;
                    if (min_num <= 9) {
                        $(".min").html(("0" + min_num));
                    } else {
                        $(".min").html(min_num);
                    }
                } else {
                    $(".second").html((second_num));
                }
            }
        }, 10)
    }
}

//复位
function reset_time() {
    min_num = 0;
    rendom_num = 0;
    millisecond_num = 0;
    second_num = 0;
    clearInterval(time1);
    $(".millisecond").html("00");
    $(".second").html("00");
    $(".rendom").html("0");
    $(".min").html("00");
    onoff = true;
}