$(document).ready(function () {
    $(".sem109_1").hide();
    $(".sem109_2").hide();
    $(".sem110_1").hide();
    $(".sem110_2").hide();
    $(".sem1091").click(function () {
        $(".sem109_1").slideToggle();
    });
    $(".sem1092").click(function () {
        $(".sem109_2").slideToggle();
    });
    $(".sem1101").click(function () {
        $(".sem110_1").slideToggle();
    });
    $(".sem1102").click(function () {
        $(".sem110_2").slideToggle();
    });

    $(".sumAver").click(function () {
        var objects = $("input:text");
        $(".display").html("總平均 : " + parseInt(semAverage(objects)));
    });

    $(".semAver").click(function () {
        let string = "";
        var objects = $(".sem109_1 input:text");
        string += "109學年第1學期總平均為 : " + parseInt(semAverage(objects)) + "分 <br>";
        var objects = $(".sem109_2 input:text");
        string += "109學年第2學期總平均為 : " + parseInt(semAverage(objects)) + "分 <br>";
        var objects = $(".sem110_1 input:text");
        string += "110學年第1學期總平均為 : " + parseInt(semAverage(objects)) + "分 <br>";
        var objects = $(".sem110_2 input:text");
        string += "110學年第2學期總平均為 : " + parseInt(semAverage(objects)) + "分";
        $(".display").html(string);
    });

    $(".score").click(function () {
        var objects = $("input:text");
        $(".display").html("最高分為 : " + highest(objects) + "分<br>最低分為 : " + lowest(objects) + "分");
    });
});

function semAverage(elements) {
    let sum = 0;
    for (let i = 0; i < elements.length; i++)
        sum += Number($(elements[i]).val());
    return sum / elements.length;
}

function highest(elements) {
    let max = -Number.MAX_VALUE;
    for (let i = 0; i < elements.length; i++) {
        let tmp = parseInt($(elements[i]).val());
        if (tmp >= max)
            max = tmp;
    }
    return max;
}

function lowest(elements) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < elements.length; i++) {
        let tmp = parseInt($(elements[i]).val());
        if (tmp < min)
            min = tmp;
    }
    return min;
}
