(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{579:function(s,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("MongoDB的关联查询主要依赖$lookup方法来进行，下边通过实际例子先来了解感受一下关联查询的场景以及用法。")]),s._v(" "),t("p",[s._v("还是以分组，和成员来举例。")]),s._v(" "),t("p",[t("code",[s._v("首先创建两个分组：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   { "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"运维组"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   { "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"客服组"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kefuzu"')]),s._v("}\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("表示在group这张表里添加两条记录。")]),s._v(" "),t("p",[t("code",[s._v("然后创建几个用户：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   { "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小A"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   { "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小B"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bbb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   { "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小C"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ccc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   { "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小D"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ddd"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kefuzu"')]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   { "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小E"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eee"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kefuzu"')]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   { "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小F"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fff"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kefuzu"')]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("code",[s._v("查询每个组以及组内的用户：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("aggregate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    {\n        $lookup:\n        {\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            localField:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            foreignField:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"output"')]),s._v("\n        }\n    }\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("aggregate()")]),s._v(":在MongoDB中是聚合的方法。"),t("a",{attrs:{href:"https://www.runoob.com/mongodb/mongodb-aggregate.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("code",[s._v("$lookup")]),s._v("：表示多表关联。\n"),t("ul",[t("li",[t("code",[s._v("from")]),s._v("：同一个数据库下等待被Join的集合。")]),s._v(" "),t("li",[t("code",[s._v("localField")]),s._v("：源集合中的match值，如果输入的集合中，某文档没有 localField这个Key（Field），在处理的过程中，会默认为此文档含有 localField：null的键值对。")]),s._v(" "),t("li",[t("code",[s._v("foreignField")]),s._v("：待Join的集合的match值，如果待Join的集合中，文档没有foreignField值，在处理的过程中，会默认为此文档含有 foreignField：null的键值对。")]),s._v(" "),t("li",[t("code",[s._v("as")]),s._v("：为输出文档的新增值命名。如果输入的集合中已存在该值，则会覆盖掉。")])])])]),s._v(" "),t("p",[s._v("展示数据如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 1 */")]),s._v("\n{\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6c2c8d32bc297dbecd2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"运维组"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"output"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小A"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("\n        }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小B"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bbb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("\n        }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd6"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小C"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ccc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("\n        }\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n}\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 2 */")]),s._v("\n{\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6c2c8d32bc297dbecd3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"客服组"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kefuzu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"output"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd7"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小D"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ddd"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kefuzu"')]),s._v("\n        }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小E"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eee"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kefuzu"')]),s._v("\n        }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd9"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小F"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fff"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kefuzu"')]),s._v("\n        }\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br")])]),t("blockquote",[t("p",[s._v("从结果可以做下分析：\n从user表中获取所有文档，拿到的文档会使用"),t("code",[s._v("groupIdentify")]),s._v("字段的值遍历被Join的group表，如果匹配到，就会把user表整体内嵌到新生成的output数组下。")])]),s._v(" "),t("h2",{attrs:{id:"过滤数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过滤数据"}},[s._v("#")]),s._v(" 过滤数据")]),s._v(" "),t("p",[s._v("如果想要过滤条件，则使用"),t("code",[s._v("$match")]),s._v("进行过滤，比如我只想查看运维组的人员：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("aggregate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    {$"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("match")]),s._v(":{"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("}}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    {\n        $lookup:\n        {\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            localField:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            foreignField:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"output"')]),s._v("\n        }\n    }\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("输出结果为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 1 */")]),s._v("\n{\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6c2c8d32bc297dbecd2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"运维组"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"output"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小A"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("\n        }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小B"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bbb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("\n        }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        {\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"61f0f6d6c8d32bc297dbecd6"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小C"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"identify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ccc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"groupIdentify"')]),s._v(" : "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yunweizu"')]),s._v("\n        }\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("blockquote",[t("p",[s._v("这里是为了了解MongoDB的关联查询，而做的一些实验，实际生产当中的查询，其实很少会直接这样用关联查询，毕竟MongoDB是一个非关系型数据库，更多时候是查询之后，通过程序在内存中判断聚合。")])]),s._v(" "),t("ul",[t("li",[s._v("参考\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.51cto.com/u_14032861/2993656",target:"_blank",rel:"noopener noreferrer"}},[s._v("实记 | MongoDB 多表连接查询"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);