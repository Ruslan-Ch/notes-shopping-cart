(function (t) {
    function s(s) {
        for (var i, n, c = s[0], o = s[1], u = s[2], p = 0, d = []; p < c.length; p++) n = c[p], Object.prototype.hasOwnProperty.call(r, n) && r[n] && d.push(r[n][0]), r[n] = 0;
        for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
        l && l(s);
        while (d.length) d.shift()();
        return a.push.apply(a, u || []), e()
    }

    function e() {
        for (var t, s = 0; s < a.length; s++) {
            for (var e = a[s], i = !0, c = 1; c < e.length; c++) {
                var o = e[c];
                0 !== r[o] && (i = !1)
            }
            i && (a.splice(s--, 1), t = n(n.s = e[0]))
        }
        return t
    }

    var i = {}, r = {app: 0}, a = [];

    function n(s) {
        if (i[s]) return i[s].exports;
        var e = i[s] = {i: s, l: !1, exports: {}};
        return t[s].call(e.exports, e, e.exports, n), e.l = !0, e.exports
    }

    n.m = t, n.c = i, n.d = function (t, s, e) {
        n.o(t, s) || Object.defineProperty(t, s, {enumerable: !0, get: e})
    }, n.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, s) {
        if (1 & s && (t = n(t)), 8 & s) return t;
        if (4 & s && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (n.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }), 2 & s && "string" != typeof t) for (var i in t) n.d(e, i, function (s) {
            return t[s]
        }.bind(null, i));
        return e
    }, n.n = function (t) {
        var s = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return n.d(s, "a", s), s
    }, n.o = function (t, s) {
        return Object.prototype.hasOwnProperty.call(t, s)
    }, n.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], o = c.push.bind(c);
    c.push = s, c = c.slice();
    for (var u = 0; u < c.length; u++) s(c[u]);
    var l = o;
    a.push([0, "chunk-vendors"]), e()
})({
    0: function (t, s, e) {
        t.exports = e("56d7")
    }, "034f": function (t, s, e) {
        "use strict";
        e("85ec")
    }, "10ce": function (t, s, e) {
        "use strict";
        e("b4da")
    }, "56d7": function (t, s, e) {
        "use strict";
        e.r(s);
        e("e260"), e("e6cf"), e("cca6"), e("a79d");
        var i = e("2b0e"), r = function () {
                var t = this, s = t.$createElement, e = t._self._c || s;
                return e("div", {attrs: {id: "app"}}, [t._l(t.errors, (function (s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "error-invisible",
                        class: {errorOrange: t.isActive}
                    }, [e("h1", {staticClass: "error-title"}, [t._v("Ошибка GET запроса / " + t._s(s))])])
                })), e("SheetMusic", {
                    attrs: {
                        groupsArrFromSheetMusic: t.sheetGroupsArr,
                        sheetsArrFromSheetMusic: t.sheetsArr
                    }, on: {"my-super-input": t.valueButton}
                }), e("ShoppingCart", {
                    attrs: {shoppingCart: t.shoppingCart, userFromApp: t.user},
                    on: {
                        "my-subtractDec": t.subtractDecQuantity,
                        "my-addInc": t.addIncQuantity,
                        "my-totalPrice": t.addTotalPrice,
                        "my-remuve": t.myRemuve
                    }
                })], 2)
            }, a = [], n = (e("d81d"), e("a434"), e("b0c0"), e("d3b7"), e("96cf"), e("1da1")), c = function () {
                var t = this, s = t.$createElement, e = t._self._c || s;
                return e("div", [t._m(0), e("div", {staticClass: "musicContainer"}, t._l(t.groupsArrFromSheetMusic, (function (s, i) {
                    return e("div", {key: i}, [e("div", [2 !== s.id ? e("p", [t._v(t._s(s.name))]) : t._e()]), 2 != s.id ? e("div", {staticClass: "sheet-music"}, t._l(t.sheetsArrFromSheetMusic, (function (s, i) {
                        return e("div", {key: i}, [2 != s.sheetGroups ? e("div", {staticClass: "sheet-music_in"}, [e("img", {
                            staticClass: "sheet-music_img",
                            attrs: {src: s.preview, alt: ""}
                        }), e("div", {staticClass: "song-desc"}, [e("p", {staticClass: "musicTitle"}, [t._v(t._s(s.title))]), e("p", {staticClass: "musicArtist"}, [t._v(t._s(s.artist))]), e("p", {staticClass: "musicCategories"}, [t._v(t._s(s.sheetCategories.join(", ")))]), e("button", {
                            staticClass: "buttonCart",
                            on: {
                                click: function (e) {
                                    return t.addToCart(i, s)
                                }
                            }
                        }, [t._v(" Add to cart ")])])]) : t._e()])
                    })), 0) : t._e(), e("div", [1 !== s.id ? e("p", [t._v(t._s(s.name))]) : t._e()]), 1 != s.id ? e("div", {staticClass: "sheet-music"}, t._l(t.sheetsArrFromSheetMusic, (function (s, i) {
                        return e("div", {key: i}, [1 != s.sheetGroups ? e("div", {staticClass: "sheet-music_in"}, [e("img", {
                            staticClass: "sheet-music_img",
                            attrs: {src: s.preview, alt: ""}
                        }), e("div", {staticClass: "song-desc"}, [e("p", {staticClass: "musicTitle"}, [t._v(t._s(s.title))]), e("p", {staticClass: "musicArtist"}, [t._v(t._s(s.artist))]), e("p", {staticClass: "musicCategories"}, [t._v(t._s(s.sheetCategories.join(", ")))]), e("button", {
                            staticClass: "buttonCart",
                            on: {
                                click: function (e) {
                                    return t.addToCart(i, s)
                                }
                            }
                        }, [t._v(" Add to cart ")])])]) : t._e()])
                    })), 0) : t._e()])
                })), 0)])
            }, o = [function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "logo"}, [i("img", {attrs: {alt: "Vue logo", src: e("cf05")}})])
            }], u = {
                name: "SheetMusic", props: {
                    groupsArrFromSheetMusic: {
                        type: Array, default: function () {
                            return {}
                        }
                    }, sheetsArrFromSheetMusic: {
                        type: Array, default: function () {
                            return {}
                        }
                    }
                }, data: function () {
                    return {}
                }, methods: {
                    addToCart: function (t, s) {
                        this.$emit("my-super-input", {indexIn: t, dataMusic: s})
                    }
                }
            }, l = u, p = (e("10ce"), e("2877")), d = Object(p["a"])(l, c, o, !1, null, "00c1769a", null), h = d.exports,
            v = function () {
                var t = this, s = t.$createElement, e = t._self._c || s;
                return e("div", {staticClass: "container-shopping_art"}, [t._m(0), e("div", {staticClass: "container-shopping_art__cart"}, [e("div", {staticClass: "basket"}, [t._m(1), e("div", {staticClass: "basket-cart"}, t._l(t.shoppingCart, (function (s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "basket-cart__inner"
                    }, [e("div", {staticClass: "basket-cart__description"}, [e("div", [e("img", {
                        staticClass: "img-music",
                        attrs: {src: s.preview, alt: "img-music"}
                    })]), e("div", [e("h4", {staticClass: "basket-cart__title"}, [t._v(t._s(s.title))]), e("p", {staticClass: "basket-cart__artist"}, [t._v(t._s(s.artist))])])]), e("div", {staticClass: "basket-cart__quantity"}, [e("p", {staticClass: "quantity-block"}, [e("span", {
                        staticClass: "border dec",
                        on: {
                            click: function (s) {
                                return t.subtractDec(i)
                            }
                        }
                    }, [t._v(" - ")]), e("span", {staticClass: "border"}, [t._v(t._s(s.quantity))]), e("span", {
                        staticClass: "border inc",
                        on: {
                            click: function (s) {
                                return t.addInc(i)
                            }
                        }
                    }, [t._v(" + ")])]), e("p", {
                        staticClass: "remove", on: {
                            click: function (s) {
                                return t.remuve(i)
                            }
                        }
                    }, [t._v("Remove item")])]), e("div", {staticClass: "basket-cart__price"}, [e("p", {staticClass: "price"}, [t._v("$" + t._s(s.price))]), e("p", {staticClass: "print"}, [t._v("($" + t._s(s.additionalPrint) + "/addl.print)")])]), e("div", {staticClass: "basket-cart__total"}, [e("p", [t._v(t._s(s.totalPrice.toFixed(2)) + " " + t._s(t.totalPrice(i)))])])])
                })), 0)]), t._l(t.userFromApp, (function (s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "order-summary"
                    }, [e("h4", [t._v("MY ORDER SUMMARY")]), e("hr"), e("p", {staticClass: "class"}, [t._v(" Subtotal: "), e("span", {staticClass: "class"}, [t._v("$ " + t._s(t.totalSum))])]), e("p", {staticClass: "class"}, [t._v(" Shipping & Handling: "), e("span", {staticClass: "class"}, [t._v("$ " + t._s(t.purcent(s.shipping)))])]), e("p", {staticClass: "class"}, [t._v(" Discount: "), e("span", {staticClass: "class"}, [t._v("$ " + t._s(t.purcent(s.discount)))])]), e("p", {staticClass: "class"}, [t._v(" Coupon: "), e("span", {staticClass: "class"}, [t._v("$ " + t._s(t.purcent(s.coupon)))])]), e("p", {staticClass: "class"}, [t._v(" Tax: "), e("span", {staticClass: "class"}, [t._v("$ " + t._s(t.purcent(s.tax)))])]), e("p", {staticClass: "class"}, [t._v(" Gift Card: "), e("span", {staticClass: "class"}, [t._v("$ " + t._s(s.giftCard))])]), e("h4", {staticClass: "class"}, [t._v(" ORDER TOTAL "), e("span", {staticClass: "class"}, [t._v("$ " + t._s(t.purcentArr(s)) + " (USD)")])]), e("div", {staticClass: "order-button"}, [e("button", {
                        staticClass: "complete-order",
                        on: {
                            click: function (s) {
                                return t.sendOrder()
                            }
                        }
                    }, [t._v("COMPLETE ORDER ")])])])
                }))], 2)])
            }, _ = [function () {
                var t = this, s = t.$createElement, e = t._self._c || s;
                return e("div", {staticClass: "container-shopping_art__header"}, [e("h2", [t._v("My Shopping Cart")])])
            }, function () {
                var t = this, s = t.$createElement, e = t._self._c || s;
                return e("div", {staticClass: "basket-header"}, [e("div", {staticClass: "basket-header__inner"}, [e("div", {staticClass: "description-header"}, [t._v("Item Description")]), e("div", {staticClass: "quantity-header"}, [t._v("Quantity")]), e("div", {staticClass: "price-header"}, [t._v("Price")]), e("div", {staticClass: "total-header"}, [t._v("Total")])])])
            }], f = (e("13d5"), e("b680"), {
                name: "ShoppingCart", props: {
                    shoppingCart: {
                        type: Array, default: function () {
                            return {}
                        }
                    }, userFromApp: {
                        type: Array, default: function () {
                            return {}
                        }
                    }
                }, data: function () {
                    return {subtotal: 0, orderTotal: []}
                }, computed: {
                    totalSum: function () {
                        var t = this, s = [];
                        return this.shoppingCart.map((function (e) {
                            s.push(e.totalPrice), t.subtotal = s.reduce((function (t, s) {
                                return t + s
                            })).toFixed(2)
                        })), this.subtotal
                    }
                }, methods: {
                    purcentArr: function (t) {
                        var s = this.subtotal - ((t.shipping + t.discount + t.coupon + t.tax) * this.subtotal + t.giftCard);
                        return this.orderTotal = s.toFixed(2) > 0 ? s.toFixed(2) : this.subtotal, s.toFixed(2) > 0 ? s.toFixed(2) : this.subtotal
                    }, purcent: function (t) {
                        return t *= this.subtotal, t.toFixed(2)
                    }, subtractDec: function (t) {
                        this.$emit("my-subtractDec", t)
                    }, addInc: function (t) {
                        this.$emit("my-addInc", t)
                    }, totalPrice: function (t) {
                        this.$emit("my-totalPrice", t)
                    }, remuve: function (t) {
                        1 === this.shoppingCart.length && (this.subtotal = 0), this.$emit("my-remuve", t)
                    }, sendOrder: function () {
                        var t = [];
                        this.shoppingCart.map((function (s) {
                            t.push(s.id)
                        }));
                        var s = {name: "John Smith", idOrderTotal: t, priceTotal: this.orderTotal}, e = JSON.stringify(s);
                        console.log(e)
                    }
                }
            }), m = f, C = (e("a014"), Object(p["a"])(m, v, _, !1, null, "79682b03", null)), g = C.exports, b = {
                name: "App", components: {SheetMusic: h, ShoppingCart: g}, data: function () {
                    return {
                        urlSheets: "https://raw.githubusercontent.com/brightestsirius/musicnotes/master/sheets.json",
                        user: [{shipping: 0, discount: .02, coupon: .05, tax: 0, giftCard: .5}],
                        errors: [],
                        sheetCategoriesArr: [],
                        sheetGroupsArr: [],
                        sheetsArr: [],
                        shoppingCart: [],
                        isActive: !1
                    }
                }, mounted: function () {
                    var t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function s() {
                        var e, i;
                        return regeneratorRuntime.wrap((function (s) {
                            while (1) switch (s.prev = s.next) {
                                case 0:
                                    return s.prev = 0, s.next = 3, fetch(t.urlSheets);
                                case 3:
                                    return e = s.sent, s.next = 6, e.json();
                                case 6:
                                    i = s.sent, t.sheetCategoriesArr = i.sheetCategories, t.sheetGroupsArr = i.sheetGroups, t.sheetsArr = i.sheets, t.sheetsArr.map((function (s) {
                                        t.$set(s, "quantity", 1), t.$set(s, "totalPrice", 0), s.sheetCategories.map((function (s, e, i) {
                                            t.sheetCategoriesArr.map((function (t, s, r) {
                                                i[e] === r[0].id ? i[e] = r[0].name : i[e] === r[1].id && (i[e] = r[1].name)
                                            }))
                                        }))
                                    })), s.next = 18;
                                    break;
                                case 13:
                                    s.prev = 13, s.t0 = s["catch"](0), t.errors.push(s.t0), setInterval((function () {
                                        return t.isActive = !0
                                    }), 700), setInterval((function () {
                                        return t.isActive = !1
                                    }), 1400);
                                case 18:
                                case"end":
                                    return s.stop()
                            }
                        }), s, null, [[0, 13]])
                    })))()
                }, methods: {
                    valueButton: function (t) {
                        if (this.shoppingCart.length) {
                            var s = !1;
                            this.shoppingCart.map((function (e) {
                                e.id === t.dataMusic.id && (s = !0, e.quantity++)
                            })), s || this.shoppingCart.push(t.dataMusic)
                        } else this.shoppingCart.push(t.dataMusic)
                    }, subtractDecQuantity: function (t) {
                        this.shoppingCart[t].quantity > 1 && this.shoppingCart[t].quantity--
                    }, addIncQuantity: function (t) {
                        this.shoppingCart[t].quantity++
                    }, addTotalPrice: function (t) {
                        var s = this.shoppingCart[t].quantity, e = this.shoppingCart[t].price,
                            i = this.shoppingCart[t].additionalPrint;
                        this.shoppingCart[t].totalPrice = 1 === s ? s * e : s * e - s * i
                    }, myRemuve: function (t) {
                        this.shoppingCart[t].quantity = 1, this.shoppingCart.splice(t, 1)
                    }
                }
            }, y = b, A = (e("034f"), Object(p["a"])(y, r, a, !1, null, null, null)), k = A.exports;
        i["a"].config.productionTip = !1, new i["a"]({
            render: function (t) {
                return t(k)
            }
        }).$mount("#app")
    }, "85ec": function (t, s, e) {
    }, a014: function (t, s, e) {
        "use strict";
        e("f240")
    }, b4da: function (t, s, e) {
    }, cf05: function (t, s, e) {
        t.exports = "." + e.p + "img/logo.82b9c7a5.png"
    }, f240: function (t, s, e) {
    }
});
//# sourceMappingURL=app.2c4fffa3.js.map