(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{581:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("接下来说几个问题。")]),s._v(" "),a("blockquote",[a("p",[s._v("1，给已经建好的虚拟机改名。\n2，虚拟机的快照使用。\n3，修改创建好的虚拟机内存大小。")])]),s._v(" "),a("h2",{attrs:{id:"一-给已经建好的虚拟机改名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-给已经建好的虚拟机改名"}},[s._v("#")]),s._v(" 一，给已经建好的虚拟机改名")]),s._v(" "),a("p",[s._v("自己刚好当时遇到这个问题，一般创建的时候名字前边 - n 就可以，但是用错了，所以现在更改一下虚拟机名字。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e9b205cba9061dee.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("名字有点尴尬，需要进行更正，打算更改为 CentOS7_2H4G。")]),s._v(" "),a("h3",{attrs:{id:"_1-先关闭虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-先关闭虚拟机"}},[s._v("#")]),s._v(" 1，先关闭虚拟机")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ame")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("centos7_2H4G\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-导出虚拟机配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导出虚拟机配置文件"}},[s._v("#")]),s._v(" 2，导出虚拟机配置文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/libvirt/qemu\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" dumpxml "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ame")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("centos7_2H4G "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CentOS7_2H4G.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-编辑新的配置文件-centos7-2h4g-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-编辑新的配置文件-centos7-2h4g-xml"}},[s._v("#")]),s._v(" 3，编辑新的配置文件 CentOS7_2H4G.xml")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" CentOS7_2H4G.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/08cd1d9aa0c11ea3.jpg",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"_4-执行下边命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-执行下边命令"}},[s._v("#")]),s._v(" 4，执行下边命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" undefine "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ame")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("centos7_2H4G\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" define CentOS7_2H4G.xml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" start CentOS7_2H4G\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f6670ad31192e0a4.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("ok，至此已更名完毕！")]),s._v(" "),a("h2",{attrs:{id:"二-虚拟机的快照使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-虚拟机的快照使用"}},[s._v("#")]),s._v(" 二，虚拟机的快照使用")]),s._v(" "),a("h3",{attrs:{id:"_1-查看一些虚拟机的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看一些虚拟机的格式"}},[s._v("#")]),s._v(" 1，查看一些虚拟机的格式")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("qemu-img info maopao.img\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/64989b7f776aadf0.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("qcow2 的格式可以直接进行快照，如果是别的（如 raw），则需要对文件格式进行更改。")]),s._v(" "),a("h3",{attrs:{id:"_2-创建-查看-删除快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-查看-删除快照"}},[s._v("#")]),s._v(" 2，创建，查看，删除快照")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" snapshot-create-as "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" first_snap\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#给test创建名为first_snap的快照")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" snapshot-list "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" snapshot-delete\t "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" first_snap\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_3-恢复快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-恢复快照"}},[s._v("#")]),s._v(" 3，恢复快照")]),s._v(" "),a("p",[s._v("查看虚拟机状态")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("恢复之前一定要把虚拟机关机。")])]),s._v(" "),a("p",[s._v("恢复快照")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" snapshot-revert "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" first_snap\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("PS：创建随时都可以，恢复快照的时候，虚拟机一定要是关机的状态才行，否则会导致宿主机重启。")])]),s._v(" "),a("p",[s._v("至此，快照方面就是这样。")]),s._v(" "),a("h2",{attrs:{id:"三-修改虚拟机内存大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-修改虚拟机内存大小"}},[s._v("#")]),s._v(" 三，修改虚拟机内存大小")]),s._v(" "),a("p",[s._v("有时候我们习惯使用模板来进行虚拟机的克隆创建，因为这样可以省去重新安装一台新的系统的时间，但是有可能模板机器的配置并不是这次想要创建的虚拟机的配置，那么这个时候，就需要在克隆完虚拟机之后，对它的配置进行动态调整。")]),s._v(" "),a("h3",{attrs:{id:"一、调小虚拟机内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、调小虚拟机内存"}},[s._v("#")]),s._v(" 一、调小虚拟机内存")]),s._v(" "),a("p",[s._v("调小虚拟机内存可以动态实现，不用关机")]),s._v(" "),a("p",[a("code",[s._v("但是并没有试验动态的，所以尽量关机操作。")])]),s._v(" "),a("p",[s._v("原本创建的模板虚拟机是 4 核 8G 的配置，现在用模板创建之后，有一些虚拟机用不了这么大的配置，所以需要调整成 2 核 4G。")]),s._v(" "),a("h3",{attrs:{id:"_1-查看当前内存大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看当前内存大小"}},[s._v("#")]),s._v(" 1. 查看当前内存大小")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@kvm01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virsh dominfo vm1-clone | grep memory  ")]),s._v("\nMax memory:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("786432")]),s._v(" KiB  \nUsed memory:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("786432")]),s._v(" KiB \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b4749a293946fc17.jpg",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"_2-调整虚拟机内存大小为-2-核-4g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-调整虚拟机内存大小为-2-核-4g"}},[s._v("#")]),s._v(" 2. 调整虚拟机内存大小为 2 核 4G")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@kvm01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virsh edit vm1-clone")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/12ccd3301b0d0a47.jpg",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"_3-再次查看当前内存大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-再次查看当前内存大小"}},[s._v("#")]),s._v(" 3. 再次查看当前内存大小")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@kvm01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virsh dominfo vm1-clone | grep memory  ")]),s._v("\nMax memory:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4194304")]),s._v(" KiB\nUsed memory:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4194304")]),s._v(" KiB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4-从配置文件启动虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-从配置文件启动虚拟机"}},[s._v("#")]),s._v(" 4. 从配置文件启动虚拟机")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" create /etc/libvirt/qemu/vm1-clone.xml  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("就实现了修改内存大小的目的。")]),s._v(" "),a("h3",{attrs:{id:"二、增大虚拟机内存、增加虚拟机-cpu-个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、增大虚拟机内存、增加虚拟机-cpu-个数"}},[s._v("#")]),s._v(" 二、增大虚拟机内存、增加虚拟机 CPU 个数")]),s._v(" "),a("p",[s._v("上边内存往小了调整，是经过试验的，亲测好用，下边往大调整自己并没有测试，但也摘录在此。")]),s._v(" "),a("p",[s._v("增大虚拟机内存、增加虚拟机 CPU 个数需要首先关机虚拟机")]),s._v(" "),a("h3",{attrs:{id:"_1-关闭虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-关闭虚拟机"}},[s._v("#")]),s._v(" 1. 关闭虚拟机")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" vm1-clone  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-编辑虚拟机配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编辑虚拟机配置文件"}},[s._v("#")]),s._v(" 2. 编辑虚拟机配置文件")]),s._v(" "),a("p",[s._v("修改内存大小、vcpu 个数")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" edit vm1-clone  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("memory "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("unit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'KiB'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104843")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v("<")]),s._v("/memory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("currentMemory "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("unit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'KiB'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104843")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v("<")]),s._v("/currentMemory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("vcpu "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("placement")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'static'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v("<")]),s._v("/vcpu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_3-从配置文件启动虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-从配置文件启动虚拟机"}},[s._v("#")]),s._v(" 3. 从配置文件启动虚拟机")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" create /etc/libvirt/qemu/vm1-clone.xml  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-查看当前内存大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看当前内存大小"}},[s._v("#")]),s._v(" 4. 查看当前内存大小")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@kvm01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virsh dominfo vm1-clone | grep memory  ")]),s._v("\nMax memory:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048432")]),s._v(" KiB  \nUsed memory:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("524288")]),s._v(" KiB  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_5-设置虚拟机内存大小为-1g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-设置虚拟机内存大小为-1g"}},[s._v("#")]),s._v(" 5. 设置虚拟机内存大小为 1G")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@kvm01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virsh setmem vm1-clone 1048432  ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-验证"}},[s._v("#")]),s._v(" 6. 验证")]),s._v(" "),a("p",[s._v("查看当前内存大小")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@kvm01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virsh dominfo vm1-clone | grep memory  ")]),s._v("\nMax memory:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048432")]),s._v(" KiB  \nUsed memory:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048432")]),s._v(" KiB  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("查看当前 CPU 个数")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@kvm01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virsh dominfo vm1-clone | grep CPU  ")]),s._v("\nCPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \nCPU time:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(".0s  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);