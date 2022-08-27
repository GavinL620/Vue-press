(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{480:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-作用"}},[s._v("#")]),s._v(" 1，作用")]),s._v(" "),a("p",[s._v("查询DNS包括NS记录，A记录，MX记录等相关信息的工具。")]),s._v(" "),a("h2",{attrs:{id:"_2-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-选项"}},[s._v("#")]),s._v(" 2，选项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@<服务器地址>：指定进行域名解析的域名服务器；\n-b<ip地址>：当主机具有多个IP地址，指定使用本机的哪个IP地址向域名服务器发送域名查询请求；\n-f<文件名称>：指定dig以批处理的方式运行，指定的文件中保存着需要批处理查询的DNS任务信息；\n-P：指定域名服务器所使用端口号；\n-t<类型>：指定要查询的DNS数据类型；\n-x<IP地址>：执行逆向域名查询；\n-4：使用IPv4；\n-6：使用IPv6；\n-h：显示指令帮助信息。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("主机：指定要查询域名主机；\n查询类型：指定DNS查询的类型；\n查询类：指定查询DNS的class；\n查询选项：指定查询选项。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3-常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用方法"}},[s._v("#")]),s._v(" 3，常用方法")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查询域名信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" eryajf.net\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" DiG "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.10")]),s._v(".6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" eryajf.net\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" global options: +cmd\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Got answer:\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("HEADER"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),s._v(" opcode: QUERY, status: NOERROR, id: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11757")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" flags: qr rd ra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" QUERY: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", ANSWER: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", AUTHORITY: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", ADDITIONAL: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" OPT PSEUDOSECTION:\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" EDNS: version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", flags:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" udp: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" QUESTION SECTION:\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("eryajf.net.\t\t\tIN\tA\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ANSWER SECTION:\neryajf.net.\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("\tIN\tA\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47.111")]),s._v(".7.70\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Query time: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(" msec\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" SERVER: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.101")]),s._v(".172.35"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#53(202.101.172.35)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" WHEN: Tue Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":55:43 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" MSG SIZE  rcvd: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("dig 命令默认的输出信息可以分为 5 个部分。")]),s._v(" "),a("ul",[a("li",[s._v("第一部分显示 dig 命令的版本和输入的参数。")]),s._v(" "),a("li",[s._v("第二部分显示服务返回的一些技术详情，比较重要的是 status。如果 status 的值为 NOERROR 则说明本次查询成功结束。")]),s._v(" "),a("li",[s._v('第三部分中的 "QUESTION SECTION" 显示我们要查询的域名。')]),s._v(" "),a("li",[s._v('第四部分的 "ANSWER SECTION" 是查询到的结果。')]),s._v(" "),a("li",[s._v("第五部分则是本次查询的一些统计信息，比如用了多长时间，查询了哪个 DNS 服务器，在什么时间进行的查询等等。")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/5c0aed91d9c71392.jpg",alt:"4e5727049eef701f795b221f4e4ba0d8"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查询CName记录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" qq.com CNAME\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("从指定的 DNS 服务器上查询")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" qq.com CNAME @8.8.8.8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("如果不指定 DNS 服务器，dig 会依次使用 /etc/resolv.conf 里的地址作为 DNS 服务器：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("控制显示结果")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" +short qq.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("跟踪整个查询过程")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" +trace qq.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查询域的MX记录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" qq.com MX\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查询域的TTL记录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" qq.com TTL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("仅查询答案部分")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" qq.com +nocomments +noquestion +noauthority +noadditional +nostats\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("反向查询")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8 +short\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);