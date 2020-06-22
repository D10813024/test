$(document).ready(function () {
    setTable();
    $("#inputDate").change(function () {
        let inputDate = $(this).val();
        let splitText = inputDate.split("-");
        //更新startDate
        setMonthAndDay(splitText[1], splitText[2]);
        setTable();
    });
});

function setTable() {
    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr><th>場次</th><th>日期時間</th><th>主題</th></tr>"
    );

    //一天有多少毫秒
    let ondDayMilliseconds = 24 * 60 * 60 * 1000;

    //產生資料列
    let topicCount = topicsArray.length;
    for (let x = 0; x < topicCount; x++) {
        //YYYY/MM/DD
        let thisDate = new Date(startDate.getTime() + 7 * x * ondDayMilliseconds);
        $("#courseTable").append(
            "<tr>" +
            "<td>" + (x + 1) + "</td>" +
            "<td>" + thisDate.toLocaleDateString() + "</td>" +
            "<td>" + topicsArray[x] + "</td>" +
            "</tr>"
        );
    }
}
