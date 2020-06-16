toastLog(" 请在无障碍中选择本 APP");
auto.waitFor();
let waysOfShopping = 0;

let window = floaty.window(
    <vertical>
        <button id="move" text=" 移动 " w="90" h="35" bg="#77ffffff" textSize="10sp" />
        <button id="switchXX" text=" 切到 学习强国 " w="90" h="35" bg="#77ffffff" textSize="10sp" />
        <button id="startLL" text=" 开始浏览 " w="90" h="35" bg="#77ffffff" textSize="10sp" />
        <button id="startWz" text=" 阅读文章 " w="90" h="35" bg="#77ffffff" textSize="10sp" />
        <button id="switchST" text=" 切到 搜题 " w="90" h="35" bg="#77ffffff" textSize="10sp" />
        <button id="startDT" text=" 开始答题 " w="90" h="35" bg="#77ffffff" textSize="10sp" />
        <button id="stop" text=" 停止 " w="90" h="35" bg="#77ffffff" textSize="10sp" />
        <button id="exit" text=" 退出悬浮窗 " w="90" h="35" bg="#77ffffff" textSize="10sp" />
    </vertical>
);

let deviceWidth = device.width;
let deviceHeight = device.height;
window.setPosition(parseInt(deviceWidth * 0.55), parseInt(deviceHeight * 0.2));
setInterval(() => {
}, 1000);


let wx, wy, downTime, windowX, windowY;
// 这个函数是对应悬浮窗的移动
window.move.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            wx = event.getRawX();
            wy = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            // 如果按下的时间超过 xx 秒判断为长按，调整悬浮窗位置
            if (new Date().getTime() - downTime > 300) {
                window.setPosition(windowX + (event.getRawX() - wx), windowY + (event.getRawY() - wy));
            }
            return true;
        case event.ACTION_UP:
            // 手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - wy) < 30 && Math.abs(event.getRawX() - wx) < 30) {
                toastLog(" 长按调整位置 ")
            }
            return true;
    }
    return true;
});

window.switchXX.click(() => {
    toastLog(" 切换到学习强国APP...");
    launch("cn.xuexi.android");
});



// 这个函数是对应悬浮窗的退出
window.exit.click(() => {
    toastLog(" 退出！");
    exit();
});


let th = null;

window.switchST.click(() => {
    let ss = "./souti.js";
    if (th == null) {
        th = threads.start(function () {
            toastLog(" 开启线程");
            let begin = require(ss);
            begin();
        });
    } else {
        if (th.isAlive()) {
            toastLog(" 脚本都在运行了你还点！？");
        } else {
            th = threads.start(function () {
                let begin = require(ss);
                begin();
            });
        }
    }
});

window.startLL.click(() => {
    let ss = "./liulan.js";
    if (th == null) {
        th = threads.start(function () {
            toastLog(" 开启线程");
            let {begin} = require(ss);
            begin();
        });
    } else {
        if (th.isAlive()) {
            toastLog(" 脚本都在运行了你还点！？");
        } else {
            th = threads.start(function () {
                let begin = require(ss);
                begin();
            });
        }
    }
});

window.startWz.click(() => {
    let ss = "./liulan.js";
    if (th == null) {
        th = threads.start(function () {
            toastLog(" 开启线程");
            let {beginOnlyArticlesStudy} = require(ss);
            beginOnlyArticlesStudy();
        });
    } else {
        if (th.isAlive()) {
            toastLog(" 脚本都在运行了你还点！？");
        } else {
            th = threads.start(function () {
                let begin = require(ss);
                begin();
            });
        }
    }
});

window.startDT.click(() => {
    let ss = "./dati.js";
    if (th == null) {
        th = threads.start(function () {
            toastLog(" 开启线程");
            let begin = require(ss);
            begin();
        });
    } else {
        if (th.isAlive()) {
            toastLog(" 脚本都在运行了你还点！？");
        } else {
            th = threads.start(function () {
                let begin = require(ss);
                begin();
            });
        }
    }
});

window.stop.click(() => {
    if (th == null) {
        toastLog(" 没有进行中的脚本 ");
    } else {
        if (th.isAlive()) {
            threads.shutDownAll();
            toastLog(" 停止！");
        } else {
            toastLog(" 没有进行中的脚本 ");
        }
    }
});