(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{517:function(t,e,a){"use strict";a.r(e);var s=a(0),v=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-单副本pod。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-单副本pod。"}},[t._v("#")]),t._v(" 1，单副本pod。")]),t._v(" "),e("p",[t._v("关于应用的高可用，按k8s的调度法则，按理说，即便某个应用只是部署了单个pod，那么此时这个pod所在的node挂掉了，k8s也会把应用转移到另外一个可用的节点上去的。")]),t._v(" "),e("p",[t._v("但是经过试验发现，这种方式并不行，会报出如下错误提示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Deployment does not have minimum availability\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("暂时不知道是rancher当中不支持这种高可用，还是哪里的配置有问题。")]),t._v(" "),e("h2",{attrs:{id:"_2-多副本pod。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-多副本pod。"}},[t._v("#")]),t._v(" 2，多副本pod。")]),t._v(" "),e("p",[t._v("由于上边的测试失败，因此接下来打算验证一下多副本的情况。")]),t._v(" "),e("p",[t._v("将刚刚的应用，点击上边的"),e("code",[t._v("+")]),t._v("号以实现双副本，可以看到目前自动在"),e("code",[t._v("192.168.106.3")]),t._v("和"),e("code",[t._v("192.168.106.5")]),t._v("两个节点上进行部署了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f4718a580d4c88f3.jpg",alt:"image"}})]),t._v(" "),e("p",[t._v("那么这个时候再一次将"),e("code",[t._v("192.168.106.5")]),t._v("关机，等待一会儿，看看结果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1742d69e3d15a58f.jpg",alt:"image"}})]),t._v(" "),e("p",[t._v("一开始会出现"),e("code",[t._v("192.168.106.5")]),t._v("节点上的pod不可用，接着等待十分钟左右，可以看到调度器又在"),e("code",[t._v("192.168.106.4")]),t._v("上启动了一个pod。而在这个过程中，始终还有"),e("code",[t._v("192.168.106.3")]),t._v("在提供服务，这样也就实现了应用高可用，因此在预发以及线上环境部署的时候，应该保证每个应用所起的pod，至少为双副本。")]),t._v(" "),e("p",[t._v("当我们的"),e("code",[t._v("192.168.106.5")]),t._v("节点再次起来之后，就会出现下边的状况，集群自动将其身上运行的进行一个正常移除了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/012df78d08d10f93.jpg",alt:"image"}})])])}),[],!1,null,null,null);e.default=v.exports}}]);