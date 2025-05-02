"use strict";
 //toggle class js
const toggleMsg = document.getElementById('toggleMsg')
const social = document.getElementById('social')

toggleMsg.addEventListener('click', function(){
    social.classList.toggle('mShow')
})


function CheckColors(e) {
    document.getElementById("demo").style.display = "select" == e || "others" == e ? "block" : "none";
}
const counterAnim = (e, t = 0, s, i = 1e3) => {
        const n = document.querySelector(e);
        let l = null;
        const a = (e) => {
            l || (l = e);
            const o = Math.min((e - l) / i, 1);
            (n.innerText = Math.floor(o * (s - t) + t)), o < 1 && window.requestAnimationFrame(a);
        };
        window.requestAnimationFrame(a);
    },
    xyz = () => {
        counterAnim("#count1", 300, 10, 1e3), counterAnim("#count2", 5e3, 4e3, 1500), counterAnim("#count3", 1e3, 100, 2e3), counterAnim("#count4", 500, 10, 2500), counterAnim("#count5", 500, 2, 2500), counterAnim("#count6", 500, 96, 2500);
    };
let isAnimeDone = !1;
const animate = () => {
    if (isAnimeDone) return;
    document.querySelector("#scrollanime").getBoundingClientRect().top + 260 <= (window.innerHeight || document.documentElement.clientHeight) &&
        (counterAnim("#count1", 300, 10, 1e3),
        counterAnim("#count2", 5e3, 4e3, 1500),
        counterAnim("#count3", 1e3, 100, 2e3),
        counterAnim("#count4", 500, 10, 2500),
        counterAnim("#count5", 500, 2, 2500),
        counterAnim("#count6", 500, 96, 2500),
        (isAnimeDone = !0));
};
window.addEventListener("scroll", animate),
    (window.onload = function () {
        for (i = 0; i < dot.length; i++)
            dot[i].addEventListener("click", function (e) {
                dot[counter - 1].classList.remove("active"), (counter = e.target.value + 1), dot[e.target.value].classList.add("active"), (moveLi[0].style.marginLeft = "-" + 100 * (counter - 1) + "%");
            });
    });
for (var allHasChildren = document.querySelectorAll(".parent-dropdown a"), x = 0; x < allHasChildren.length; x++)
    allHasChildren[x].onclick = function () {
        var e = this.parentNode.getElementsByClassName("child-dropdown")[0];
        e.classList.contains("show") ? e.classList.remove("show") : e.classList.add("show");
    };
var scrollpos = window.scrollY,
    header = document.getElementById("header");
function add_class_on_scroll() {
    header.classList.add("fade-in");
}
function remove_class_on_scroll() {
    header.classList.remove("fade-in");
}
function openNav() {
    document.getElementById("mySidepanel").style.left = "0";
}
function closeNav() {
    document.getElementById("mySidepanel").style.left = "-100%";
}
window.addEventListener("scroll", function () {
    (scrollpos = window.scrollY) > 10 ? add_class_on_scroll() : remove_class_on_scroll();
});
var t1 = 0;
function scroll1() {
    var e = document.getElementById("toTop");
    window.scrollY > 50 ? (e.style.display = "Block") : (e.style.display = "none");
}
function abcd() {
    var e = window.scrollY;
    (e -= 1e3), window.scrollTo(0, e), e > 0 ? (t1 = setTimeout("abcd()", 50)) : clearTimeout(t1);
}
function filterSelection(e) {
    var t, s;
    for (t = document.getElementsByClassName("filterDiv"), "all" == e && (e = ""), s = 0; s < t.length; s++) w3RemoveClass(t[s], "show"), t[s].className.indexOf(e) > -1 && w3AddClass(t[s], "show");
}
function w3AddClass(e, t) {
    var s, i, n;
    for (i = e.className.split(" "), n = t.split(" "), s = 0; s < n.length; s++) -1 == i.indexOf(n[s]) && (e.className += " " + n[s]);
}
function w3RemoveClass(e, t) {
    var s, i, n;
    for (i = e.className.split(" "), n = t.split(" "), s = 0; s < n.length; s++) for (; i.indexOf(n[s]) > -1; ) i.splice(i.indexOf(n[s]), 1);
    e.className = i.join(" ");
}

(window.onscroll = scroll1), filterSelection("all");

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var e = document.getElementsByClassName("actives");

        if (e.length > 0) {
            e[0].className = e[0].className.replace(" actives", "");
        }

        this.className += " actives";
    });
}


// (window.onscroll = scroll1), filterSelection("all");
// for (var btnContainer = document.getElementById("myBtnContainer"), btns = btnContainer.getElementsByClassName("btn"), i = 0; i < btns.length; i++)
//     btns[i].addEventListener("click", function () {
//         var e = document.getElementsByClassName("actives");
//         (e[0].className = e[0].className.replace(" actives", "")), (this.className += " actives");
//     });
// class AsyncGallery {
//     constructor(e) {
//         (this.settings = { images: ".gallery__Image", loop: !0, next: void 0, prev: void 0, dots: void 0, close: void 0, loader: void 0, counter: void 0, counterDivider: "/", keyboardNavigation: !0, hiddenElements: [] }),
//             Object.assign(this.settings, e),
//             (this.gallery = null),
//             (this.index = 0),
//             (this.items = [...document.querySelectorAll(this.settings.images)]),
//             (this.addedItems = {}),
//             (this.touch = { endX: 0, startX: 0 }),
//             this.init();
//     }
//     get loading() {
//         return !this.settings.hiddenElements.includes("loader");
//     }
//     get dotsVisible() {
//         return !this.settings.hiddenElements.includes("dots");
//     }
//     init() {
//         this.clearUncomplete(), this.createElements(), this.bindEvents();
//     }
//     clearUncomplete() {
//         this.items = this.items.filter((e) => e.dataset.large);
//     }
//     createElements() {
//         (this.gallery = document.createElement("DIV")),
//             this.gallery.classList.add("asyncGallery"),
//             this.createSingleElement({ element: "prev", type: "BUTTON", event: "click", func: this.getPrevious }),
//             this.createSingleElement({ element: "next", type: "BUTTON", event: "click", func: this.getNext }),
//             this.createSingleElement({ element: "close", type: "BUTTON", event: "click", func: this.closeGallery }),
//             this.createSingleElement({ element: "loader", type: "SPAN", text: "Loading..." }),
//             this.createSingleElement({ element: "counter", type: "SPAN", text: "0/0" }),
//             this.createSingleElement({ element: "dots", type: "UL", text: "" }),
//             this.settings.hiddenElements.includes("dots") ||
//                 this.items.forEach((e, t) => {
//                     let s = document.createElement("LI");
//                     s.dataset.index = t;
//                     let i = document.createElement("BUTTON");
//                     (i.innerHTML = t),
//                         i.addEventListener("click", () => {
//                             (this.index = t), this.getItem(t);
//                         }),
//                         s.append(i),
//                         this.dots.append(s);
//                 }),
//             window.document.body.append(this.gallery);
//     }
//     createSingleElement({ element: e, type: t, event: s = "click", func: i, text: n }) {
//         this.settings.hiddenElements.includes(e) ||
//             (this.settings[e]
//                 ? ((this[e] = document.querySelector(this.settings[e])), this.gallery.append(this[e]))
//                 : ((this[e] = document.createElement(t)), this[e].classList.add(`asyncGallery__${this.capitalizeFirstLetter(e)}`), (this[e].innerHTML = void 0 !== n ? n : e), this.gallery.append(this[e])),
//             i && this[e].addEventListener(s, i.bind(this)));
//     }
//     getItem(e, t = null) {
//         let s = t;
//         if (
//             (null === s && (((s = {}).src = this.items[e].dataset.large), (s.description = this.items[e].dataset.description)),
//             this.settings.hiddenElements.includes("counter") ||
//                 (this.counter.innerHTML = `\n          <span class="asyncGallery__Current">${this.index + 1}</span>${this.settings.counterDivider}<span class="asyncGallery__Current">${this.items.length}</span>\n          `),
//             this.addedItems.hasOwnProperty(e))
//         )
//             this.clearVisible(),
//                 this.addedItems[this.index].loaded ? (this.addedItems[this.index].classList.add("is-visible"), this.loading && this.loader.classList.remove("is-visible")) : this.loading && this.loader.classList.add("is-visible"),
//                 this.dotsVisible && this.gallery.querySelector(`.asyncGallery__Dots li[data-index="${e}"]`).classList.add("is-active");
//         else {
//             let t = document.createElement("IMG"),
//                 i = document.createElement("DIV");
//             i.classList.add("asyncGallery__Item"),
//                 this.loading && this.loader.classList.add("is-visible"),
//                 this.clearVisible(),
//                 this.dotsVisible && this.gallery.querySelector(`.asyncGallery__Dots li[data-index="${e}"]`).classList.add("is-active"),
//                 (t.src = s.src),
//                 (t.alt = s.description ? s.description : ""),
//                 (i.innerHTML = `\n          <div class="asyncGallery__ItemImage">\n            ${t.outerHTML}\n          </div>\n          `),
//                 s.description && (i.innerHTML += `\n            <div class="asyncGallery__ItemDescription">\n              <p>${s.description}</p>\n            </div>\n            `),
//                 this.gallery.append(i),
//                 (this.addedItems[e] = i),
//                 t.addEventListener("load", () => {
//                     (this.addedItems[e].loaded = !0), this.gallery.querySelector(".asyncGallery__Item.is-visible") || this.addedItems[e].classList.add("is-visible"), this.loading && this.loader.classList.remove("is-visible");
//                 });
//         }
//         this.settings.loop ||
//             (0 === this.index ? this.prev.setAttribute("disabled", !0) : this.prev.removeAttribute("disabled"), this.index === this.items.length - 1 ? this.next.setAttribute("disabled", !0) : this.next.removeAttribute("disabled"));
//     }
//     clearVisible() {
//         this.gallery.querySelector(".asyncGallery__Item.is-visible") && this.gallery.querySelector(".asyncGallery__Item.is-visible").classList.remove("is-visible"),
//             this.gallery.querySelector(".asyncGallery__Dots li.is-active") && this.gallery.querySelector(".asyncGallery__Dots li.is-active").classList.remove("is-active");
//     }
//     closeGallery() {
//         this.gallery.classList.remove("is-visible"), this.clearVisible();
//     }
//     capitalizeFirstLetter(e) {
//         return e.charAt(0).toUpperCase() + e.slice(1);
//     }
//     handleGesure() {
//         this.touch.endX > this.touch.startX + 20 ? this.getPrevious() : this.touch.endX < this.touch.startX - 20 && this.getNext();
//     }
//     getPrevious() {
//         this.settings.loop ? (this.index--, -1 === this.index && (this.index = this.items.length - 1), this.getItem(this.index)) : this.index > 0 && (this.index--, this.getItem(this.index));
//     }
//     getNext() {
//         this.settings.loop ? (this.index++, this.index === this.items.length && (this.index = 0), this.getItem(this.index)) : this.index < this.items.length - 1 && (this.index++, this.getItem(this.index));
//     }
//     bindEvents() {
//         this.items.forEach((e, t) => {
//             e.addEventListener("click", (e) => {
//                 this.gallery.classList.add("is-visible"), (this.index = t), this.getItem(t, { src: e.target.dataset.large, description: e.target.dataset.description });
//             });
//         }),
//             document.addEventListener("keyup", (e) => {
//                 this.gallery.classList.contains("is-visible") && ("Escape" === e.key && this.closeGallery(), this.settings.keyboardNavigation && (39 === e.keyCode ? this.getNext() : 37 === e.keyCode && this.getPrevious()));
//             }),
//             this.gallery.addEventListener(
//                 "touchstart",
//                 (e) => {
//                     this.touch.startX = e.changedTouches[0].screenX;
//                 },
//                 !1
//             ),
//             this.gallery.addEventListener(
//                 "touchend",
//                 (e) => {
//                     (this.touch.endX = e.changedTouches[0].screenX), this.handleGesure();
//                 },
//                 !1
//             );
//     }
// }
// new AsyncGallery();
