(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{423:function(e,s,a){"use strict";a.r(s);var n=a(0),l=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("有时候本地yum源可能被玩坏了，然后在安装一些软件的时候就会报如下错误：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[root@localhost yum.repos.d]$yum -y update\nResolving Dependencies\n--\x3e Running transaction check\n---\x3e Package cryptsetup-libs.x86_64 0:1.7.4-4.el7 will be updated\n---\x3e Package cryptsetup-libs.x86_64 0:2.0.3-3.el7 will be an update\n---\x3e Package device-mapper.x86_64 7:1.02.146-4.el7 will be updated\n--\x3e Processing Dependency: device-mapper = 7:1.02.146-4.el7 for package: 7:device-mapper-event-1.02.146-4.el7.x86_64\n---\x3e Package device-mapper.x86_64 7:1.02.149-10.el7_6.2 will be an update\n---\x3e Package device-mapper-libs.x86_64 7:1.02.146-4.el7 will be updated\n---\x3e Package device-mapper-libs.x86_64 7:1.02.149-10.el7_6.2 will be an update\n--\x3e Finished Dependency Resolution\nError: Package: 7:device-mapper-event-1.02.146-4.el7.x86_64 (@base)\n           Requires: device-mapper = 7:1.02.146-4.el7\n           Removing: 7:device-mapper-1.02.146-4.el7.x86_64 (@base)\n               device-mapper = 7:1.02.146-4.el7\n           Updated By: 7:device-mapper-1.02.149-10.el7_6.2.x86_64 (bash)\n               device-mapper = 7:1.02.149-10.el7_6.2\n You could try using --skip-broken to work around the problem\n You could try running: rpm -Va --nofiles --nodigest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br")])]),s("p",[e._v("网上大多数的说法都是重新建立以下缓存，但是如果yum源出问题了，那么重建也是没用的。")]),e._v(" "),s("p",[e._v("解决办法如下：")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-y")]),e._v(" epel-release\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("安装epel，然后再执行相关的缓存重建，安装就可以了。")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ yum clean all\n$ yum update\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=l.exports}}]);