// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "来自你",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最爱的小狗勾",  // 同上...
        "Lily今天22岁了",
        "这是我们认识的",
        "第四年了",
        "好久没见你",
        "真的好想好想你",
        "想一起喝酒吹风",
        "一起旅游看电影",
        "走在和你相见的路上",
        "便有了源源不断的勇气",
        "不管以后去到哪里",
        "我会一直守护你",
        "希望你",
        "开心",
        "暴富",
        "二十二岁",
        "生日快乐",
        "谢谢你让我听见",
        "因为我在等待永远",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "最爱的小狗勾": "./imgs/IMG_0729.jpeg",
        "开心": "./imgs/IMG_0528.jpeg",
        "暴富": "./imgs/IMG_0528.jpeg",
        "我会一直守护你": "./imgs/IMG_0576.jpeg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Start",
        play: "Music",
        bannar_coming: "Color",
        balloons_flying: "More?",
        cake_fadein: "Cake？",
        light_candle: "Candle？",
        wish_message: "Happy Birthday",
        story: "A Message For You",
    }
};
