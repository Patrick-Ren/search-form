const tableData = [];
for (let i = 0; i < 50; i++) {
    var item = {
        key: (i + 1).toString(),
        materialNumber: "MN" + (i + 1).toString().padStart(8, '0'),
        vender: "renzhu1",
        gsm: "whatever"
    }
    for (let x = 0; x < 20; x++) {
        item["other" + (x+1)] = "展示数据"
    }
    tableData.push(item)
}

const FakeData = {
    table: tableData,
    errors: [
        {
            location: "第一行第一列",
            msg: "长度不符合规则"
        }, {
            location: "第二行第三列",
            msg: "应该是数字类型"
        }, {
            location: "第五行第二列",
            msg: "不可为空"
        }, {
            location: "第五行第三列",
            msg: "非法数据"
        },{
            location: "第五行第三列",
            msg: "There are many variations of passages of Lorem Ipsum available, but the ways."
        },{
            location: "第五行第三列",
            msg: "There are many variations of passages of Lorem Ipsum available, but the ways.There are many variations of passages of Lorem Ipsum available, but the ways."
        },
    ]
}

export default FakeData;