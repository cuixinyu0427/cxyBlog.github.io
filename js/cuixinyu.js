$(function(){

// 气泡
    function bubble() {
        $('#page-header').circleMagic({
            radius: 10,
            density: .2,
            color: 'rgba(255,255,255,.4)',
            clearOffset: 0.99
        });
    }! function(p) {
        p.fn.circleMagic = function(t) {
            var o, a, n, r, e = !0,
                i = [],
                d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
                l = this[0];

            function c() { e = !(document.body.scrollTop > a) }

            function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

            function h() {
                if (e)
                    for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
                requestAnimationFrame(h)
            }

            function f() {
                var t = this;

                function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
                t.pos = {}, e(), this.draw = function() { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
            }! function() {
                o = l.offsetWidth, a = l.offsetHeight,
                    function() {
                        var t = document.createElement("canvas");
                        t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                    }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
                for (var t = 0; t < o * d.density; t++) {
                    var e = new f;
                    i.push(e)
                }
                h()
            }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
        }
    }(jQuery);

// 调用气泡方法
    bubble();

    /* xkTool */
    var xiaokang = new xkTool();
    xiaokang.footFish();

    xiaokang.cheatTitle(["看不见我🙈~看不见我🙈~"], ["(°ー°〃) 被发现了~"], ["https://cdn.jsdelivr.net/gh/cuixinyu0427/cdn/img/avatar.png"], ["https://cdn.jsdelivr.net/gh/cuixinyu0427/cdn/img/avatar.png"]);

    var botui = BotUI('home-demo');

    botui.message.add({
        content: '大家好，我是千颂伊！'
    }).then(function () {
        return botui.message.add({
            delay: 1500,
            content: '![千颂伊](http://img3.duitang.com/uploads/blog/201402/15/20140215120608_BzmRN.gif)'
        });
    }).then(function () {
        return botui.action.button({
            delay: 1000,
            action: [{
                text: '继续聊 💕',
                value: 'sure'
            }, {
                text: '下回聊 💔',
                value: 'skip'
            }]
        });
    }).then(function (res) {
        if(res.value == 'sure') {
            tutorial();
        }
        if(res.value == 'skip') {
            end();
        }
    });

    var tutorial = function () {
        botui.message.add({
            delay: 1000,
            content: "太棒了，让我们简单互动一下吧。"
        }).then(function () {
            return botui.message.add({
                delay: 1000,
                content: '请问我男票是谁？（输入名字后按回车键！）'
            });
        }).then(function () {
            return botui.action.text({
                delay: 800,
                action: {
                    value: '都敏俊',
                    placeholder: '千颂伊的男朋友'
                }
            });
        }).then(function (res) {
            return botui.message.bot({
                delay: 500,
                content: '没错，就是' + res.value + '！'
            });
        }).then(function (res) {
            return botui.message.bot({
                delay: 1400,
                content: '별에서 온 그대 ![合影](http://www.hanyouwang.com/uploads/2014/0303/20140303032047599.jpg)'
            });
        }).then(function (res) {
            return botui.message.add({
                delay: 1200,
                type: 'embed',
                content: 'http://player.youku.com/embed/XNjc4ODY5NzY4'
            });
        }).then(function (res) {
            return botui.message.bot({
                delay: 2500,
                content: '祝天下有情人终成眷属！'
            });
        }).then(function (res) {
            return botui.message.bot({
                delay: 3888,
                content: '我为BotUI带盐（注意：vue.js为2.0.5）'
            });
        }).then(end);
    };

    var end = function () {
        botui.message.add({
            delay: 3888,
            content: '!(book) [帮助文档](https:///docs.botui.org)，查看 [示例](https:///examples.botui.org) 或 [点击浏览代码](https://github.com/moinism/botui)'
        });
    };
})