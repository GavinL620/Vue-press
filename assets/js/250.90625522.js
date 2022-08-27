(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{585:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言。"}},[t._v("#")]),t._v(" 1，前言。")]),t._v(" "),a("p",[t._v("VCSA也就是VCenter，它是VMware vCenter Server Appliance的简称。")]),t._v(" "),a("p",[t._v("百度百科对其定义如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("VMware vCenterServer 提供了一个可伸缩、可扩展的平台，为 虚拟化管理奠定了基础。 VMware vCenter Server（以前称为 VMware VirtualCenter），可集中管理 VMware vSphere 环境，与其他管理平台相比，极大地提高了 IT 管理员对虚拟环境的控制。")]),t._v(" "),a("p",[t._v("VMware vCenter Server：提高在虚拟基础架构每个级别上的集中控制和可见性，通过主动管理发挥 vSphere 潜能，是一个具有广泛合作伙伴体系支持的可伸缩、可扩展平台。")])]),t._v(" "),a("p",[t._v("今天就来整理一下VCSA的安装流程，这里我依旧使用的是本地计算机的虚拟机中安装，与上篇文章的ESXI是一脉相承的关系。准备工作依旧不多说，唯一要注意的是分配"),a("code",[t._v("内存需要大于10G")]),t._v("，否则后边会安装失败。下载链接依旧会放在文末。")]),t._v(" "),a("h2",{attrs:{id:"_2-安装前准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装前准备。"}},[t._v("#")]),t._v(" 2，安装前准备。")]),t._v(" "),a("p",[t._v("首先下载VCSA的iso文件，然后用压缩软件解压缩出来。进入到UI安装目录。双击安装程序进入安装界面。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：因为我是在电脑的VMware中安装的，所以直接在电脑本机进行解压安装了。如果在企业中，需要在实际服务器当中安装，可能没办法像这样进行解压部署，其实也是有办法的，那就是先在之前安装的ESXI主机当中添加一台Windows的主机（或者其他Linux的桌面版系统），然后将镜像拷到Windows主机中，进行解压安装，下边步骤就与本文相同了。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ce6492257d777b4e.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_3-初次进入是英文-右上角可以选择语言。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-初次进入是英文-右上角可以选择语言。"}},[t._v("#")]),t._v(" 3，初次进入是英文，右上角可以选择语言。")]),t._v(" "),a("p",[t._v("第一次使用的话就选择安装。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4c37b4dbc027e0c0.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_4-进入到部署的配置阶段。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-进入到部署的配置阶段。"}},[t._v("#")]),t._v(" 4，进入到部署的配置阶段。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/eab65ec53d2aa574.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_5-许可协议。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-许可协议。"}},[t._v("#")]),t._v(" 5，许可协议。")]),t._v(" "),a("p",[t._v("必须同意的许可协议，拉到最下边同意，进入下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4ee36372f0dfd111.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_6-安装模式。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装模式。"}},[t._v("#")]),t._v(" 6，安装模式。")]),t._v(" "),a("p",[t._v("如果是内网使用，并不是非常多的情况下，就使用默认的嵌入式安装。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/211c5ad51ad5a054.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_7-配置esxi主机的信息。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-配置esxi主机的信息。"}},[t._v("#")]),t._v(" 7，配置esxi主机的信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d55ff91d5ecd3fd6.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_8-证书认证-点击是。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-证书认证-点击是。"}},[t._v("#")]),t._v(" 8，证书认证，点击是。")]),t._v(" "),a("p",[t._v("如果出现这个证书界面，则说明上一步的链接信息配置成功，如果没有证书界面，则说明连接esxi主机失败。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3c03473aa4358960.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_9-配置vcsa的名称与密码。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-配置vcsa的名称与密码。"}},[t._v("#")]),t._v(" 9，配置VCSA的名称与密码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8441926c80dab062.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_10-选择部署的规模。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-选择部署的规模。"}},[t._v("#")]),t._v(" 10，选择部署的规模。")]),t._v(" "),a("p",[t._v("可根据实际情况进行选择，一般选择默认的微型即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ef4c5dabbda123f8.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_11-选择安装的磁盘。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-选择安装的磁盘。"}},[t._v("#")]),t._v(" 11，选择安装的磁盘。")]),t._v(" "),a("p",[t._v("注意可以启用精简磁盘模式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/06c2100da3224ad3.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_12-详细配置vcsa的网络信息。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-详细配置vcsa的网络信息。"}},[t._v("#")]),t._v(" 12，详细配置VCSA的网络信息。")]),t._v(" "),a("h3",{attrs:{id:"_1-错误示范。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-错误示范。"}},[t._v("#")]),t._v(" 1，错误示范。")]),t._v(" "),a("p",[t._v("注意配置当中的网关以及DNS的配置，必须保证其可用，并能够将域名进行解析，其他的都还容易配置，也不容易踩坑，容易踩坑的就是"),a("code",[t._v("系统名称")]),t._v("，建议直接配置成可用的IP即可，否则最后可能会导致部署失败，第一次安装的时候因为配置成了域名并没有进行解析，导致域名解析失败，从而安装失败，并且不可逆，也就是说，失败了之后要从头再来。下边就是我的踩坑经历。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/eb0ee490e928f333.jpg",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"_2-分析原因。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分析原因。"}},[t._v("#")]),t._v(" 2，分析原因。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：经过两次试验安装，都以失败告终，但是不甘心重来一次，最后发现这个地方的系统名称不能这么配置，因为在网络中并没有对这个域名的解析，因此可以直接配置成ip地址。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/80895530aaab7bfb.jpg",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"_3-正确配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-正确配置。"}},[t._v("#")]),t._v(" 3，正确配置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c2a4a3de5f2aa694.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_13-完成第一阶段配置-点击完成进行初始化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-完成第一阶段配置-点击完成进行初始化。"}},[t._v("#")]),t._v(" 13，完成第一阶段配置，点击完成进行初始化。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/facab11b541a03af.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_14-初始化安装。耐心等待。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-初始化安装。耐心等待。"}},[t._v("#")]),t._v(" 14，初始化安装。耐心等待。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/505aa43474d4d8dd.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_15-第一阶段部署完成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-第一阶段部署完成。"}},[t._v("#")]),t._v(" 15，第一阶段部署完成。")]),t._v(" "),a("p",[t._v("注意完成之后是可以看到成功部署的，如果没有成功部署，请根据报错问题进行调整。此时不要关闭此界面，要点击继续，还有第二阶段的配置，如果不小心点击了关闭，可以通过下边给出的url进入第二阶段的配置部署。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e030080a450d8f00.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_16-进入第二阶段的部署。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-进入第二阶段的部署。"}},[t._v("#")]),t._v(" 16，进入第二阶段的部署。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/5f86c6b02604e0f3.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_17-选择时间同步的模式以及是否允许ssh访问。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-选择时间同步的模式以及是否允许ssh访问。"}},[t._v("#")]),t._v(" 17，选择时间同步的模式以及是否允许ssh访问。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/88a6b176ffd0ae7f.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_18-配置sso信息。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-配置sso信息。"}},[t._v("#")]),t._v(" 18，配置sso信息。")]),t._v(" "),a("p",[t._v("输入Single Sign-On的域名，管理员的密码以及站点名称，这个地方的域名最好直接用默认的，以及站点名称也用默认的，否则容易出问题。不过这里的域名也可以自定义，这个自定义的域名将会成为之后访问的用户名一部分，一般也可以配置为与公司名相关的，如vsphere.alibaba，这个地方的应用在下篇的配置文章中就会应用到。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f9c66815753317a8.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_19-进入下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-进入下一步。"}},[t._v("#")]),t._v(" 19，进入下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ad0757fd046bbc99.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_20-配置信息展示。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-配置信息展示。"}},[t._v("#")]),t._v(" 20，配置信息展示。")]),t._v(" "),a("p",[t._v("点击完成进入安装。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a47089e2b3baa479.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_21-安装过程。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-安装过程。"}},[t._v("#")]),t._v(" 21，安装过程。")]),t._v(" "),a("p",[t._v("如果配置没有问题，将会在服务器上成功安装此程序。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f91afbe4d0ef7f33.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("此时去UI界面看也是一样的配置过程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/dbb0b1aa8fb1ef5a.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("这个地方是将所有安装数据都要拷到服务器上（位置就是安装过程中选择的ESXI主机的磁盘位置）去的，所以过程会略长，耐心等待即可。")]),t._v(" "),a("p",[t._v("一般常规的安装下来二三十分钟都是正常的。安装完成之后，当你登陆到此虚拟机的时候，可以看到如下界面：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/cb81e6c875359fb2.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("安装过程中，可能会因为某个地方的疏忽导致安装的失败，不要灰心，也不要气馁，话说我也是第一次安装失败，第二次安装失败，后来突然明白哪里的问题才第三次安装成功的么。失败未必是坏事儿，对于有韧劲儿的人来说，失败会给他增长更丰富的经验，对于没精打采的人来说，一次失败可能就把他打倒了。")]),t._v(" "),a("p",[t._v("22，下载VCSA。")]),t._v(" "),a("p",[t._v("依旧可以通过官网来进行下载安装：https://www.vmware.com/cn.html")]),t._v(" "),a("p",[t._v("或者通过我准备好的百度网盘进行下载。")]),t._v(" "),a("ul",[a("li",[t._v("链接：https://pan.baidu.com/share/init?surl=SlnBR1pezJAK81tE7QpcYQ")]),t._v(" "),a("li",[t._v("提取码：vcsa")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e418b828ab7e7a9e.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("未完待续。")])])}),[],!1,null,null,null);a.default=e.exports}}]);