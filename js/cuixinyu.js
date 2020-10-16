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

    var loadingMsgIndex,
        botui = new BotUI('stars-bot'),
        API = 'https://api.github.com/repos/';

    function sendXHR(repo, cb) {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('GET', API + repo);
        xhr.onload = function () {
            var res = JSON.parse(xhr.responseText)
            cb(res.stargazers_count);
        }
        xhr.send();
    }

    function init() {
        botui.message
            .bot({
                delay: 1000,
                content: 'Enter the repo name to see how many stars it have:'
            })
            .then(function () {
                return botui.action.text({
                    delay: 1000,
                    action: {
                        value: 'moinism/botui',
                        placeholder: 'moinism/botui'
                    }
                })
            }).then(function (res) {
            loadingMsgIndex = botui.message.bot({
                delay: 200,
                loading: true
            }).then(function (index) {
                loadingMsgIndex = index;
                sendXHR(res.value, showStars)
            });
        });
    }

    function showStars(stars) {
        botui.message
            .update(loadingMsgIndex, {
                content: 'it has !(star) ' + (stars || "0") + ' stars.'
            })
            .then(init); // ask again for repo. Keep in loop.
    }

    init();
})