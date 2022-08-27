(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{417:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在普通用户下，突然 bash 失灵，无论执行什么命令，都报如下问题：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("bash: fork: retry: No child processes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面这段错误提示的本质是 Linux 操作系统无法创建更多进程，导致出错。\n因此要解决这个问题需要修改 Linux 允许创建更多的进程。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#并发连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root soft nofile 65535'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("root hard nofile 65535"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("* soft nofile 65535"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("* hard nofile 65535"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/security/limits.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s#4096#65535#g'")]),s._v(" /etc/security/limits.d/20-nproc.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("一个是修改最大文件打开数，一个是最大进程数，这两个数可适当酌情调大。其中 root 表示管理员，* 表示普通用户。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/adb53570034aa534.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("如果如上优化已经进行过了，而服务器仍旧还会报上边那句话，那就有可能是僵尸进程的确把系统可用进程给耗完了。")]),s._v(" "),t("p",[s._v("这时，使用"),t("code",[s._v("top命令")]),s._v("能够看到系统中的僵尸进程数:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("top - 08:21:10 up 286 days,  8:30,  1 user,  load average: 0.01, 0.05, 0.05\nTasks: 493 total,   1 running, 289 sleeping,   0 stopped, 27386 zombie\n%Cpu(s):  0.3 us,  0.7 sy,  0.0 ni, 99.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\nKiB Mem :  3881904 total,   216408 free,  1170100 used,  2495396 buff/cache\nKiB Swap:        0 total,        0 free,        0 used.  2366900 avail Mem\n\n  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND\n  581 root      20   0  568400  23276   2768 S   0.3  0.6 131:13.99 containerd\n11458 root      20   0  156012   2636   1524 R   0.3  0.1   0:00.20 top\n18150 root      20   0  164564   9436   2044 S   0.3  0.2   0:44.44 barad_agent\n18151 root      20   0  609312  12680   2364 S   0.3  0.3   4:20.32 barad_agent\n21213 root      20   0  129540  14860   5508 S   0.3  0.4   3:43.59 athens-proxy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("其中有一项信息是 "),t("code",[s._v("27386 zombie")]),s._v(",意味着系统中出现了将近三万个僵尸进程。")]),s._v(" "),t("p",[s._v("使用如下命令能够看到这些僵尸进程，以及它的父进程：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ps -A -ostat,ppid,pid,cmd | grep -e '^[Zz]'\nZ    21213   630 [git-remote-http] <defunct>\nZ    21213   633 [git-remote-http] <defunct>\nZ    21213   714 [git-remote-http] <defunct>\n........\nZ    21213   734 [git-remote-http] <defunct>\nZ    21213   741 [git-remote-http] <defunct>\nZ    21213   978 [git-remote-http] <defunct>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("-A")]),s._v(":参数列出所有进程")]),s._v(" "),t("li",[t("code",[s._v("-o")]),s._v(":自定义输出字段，我们设定显示字段为stat（状态,ppid（父进程pid,pid（进程pid,cmd（命令行）这四个参数")]),s._v(" "),t("li",[s._v("因为状态为 z 或者 Z的进程为僵尸进程，所以我们使用grep抓取stat状态为zZ进程")])]),s._v(" "),t("p",[s._v("可以看到后边都是僵尸进程，而前边pid为 "),t("code",[s._v("21213")]),s._v(" 的进程则是这些僵尸进程的父进程。")]),s._v(" "),t("p",[s._v("我们可以先看下这个进程是什么服务：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ps aux |grep 21213 |grep -v grep\nroot     21213  0.3  0.4 129540 16880 ?        Ssl  Aug31   3:45 athens-proxy -config_file=/config/config.toml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("原来是Athens这个代理服务，从官方github搜索相关issue，早期版本中的确存在这个问题："),t("a",{attrs:{href:"https://github.com/gomods/athens/issues/1155",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("我们使用的正式v0.3这样的早期版本，目前的处理方式有两种，一种是直接升级代理的版本，但是据了解不同版本之间参数不一样，似乎升级起来并不轻松，另一种就是干掉这个父进程：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("kill -HUP 21213\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当我执行完如上命令之后，可以发现僵尸进程数变成了0：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Tasks: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("284")]),s._v(" total,   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" running, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("283")]),s._v(" sleeping,   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" stopped,   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" zombie\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后系统也不会再报上边那个错误了。")])])}),[],!1,null,null,null);t.default=n.exports}}]);