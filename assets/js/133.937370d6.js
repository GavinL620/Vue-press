(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{468:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("prometheus 监控 MySQL 需要用到 mysql_exporter。")]),s._v(" "),a("p",[s._v("mysql_exporter 项目地址：https://github.com/prometheus/mysqld_exporter")]),s._v(" "),a("h2",{attrs:{id:"_1、安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装部署"}},[s._v("#")]),s._v(" 1、安装部署")]),s._v(" "),a("p",[s._v("我这里的 mysql 部署在 192.168.111.10 之上，而 prometheus 服务端是在 192.168.111.3 上，这个时候，监控的工具 mysql_exporter 可以部署在这两台主机任一一台上，只不过需要注意的是，在配置 prometheus.yaml 添加监控目标的时候，注意填写对应 ip 即可。")]),s._v(" "),a("p",[s._v("我这里为了方便则部署在了 MySQL Server 之上。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/prometheus/mysqld_exporter/releases/download/v0.10.0/mysqld_exporter-0.10.0.linux-amd64.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf mysqld_exporter-0.10.0.linux-amd64.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mysqld_exporter-0.10.0.linux-amd64 /usr/local/mysqld_exporter\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-授权连接。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-授权连接。"}},[s._v("#")]),s._v(" 2，授权连接。")]),s._v(" "),a("p",[s._v("想要获取监控数据，需要授权程序能够连接到 MySQL。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("GRANT REPLICATION CLIENT, PROCESS ON *.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exporter'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGRANT SELECT ON performance_schema.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exporter'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("注意")]),s._v("：这里只授权了本地登陆，说明这个授权适用于"),a("code",[s._v("mysql_exporter")]),s._v("监控工具部署在"),a("code",[s._v("MySQL Server上")]),s._v("的情况，如果是部署在"),a("code",[s._v("Prometheus Server上")]),s._v("，则需要授权"),a("code",[s._v("远程登陆")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_3-启动服务。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动服务。"}},[s._v("#")]),s._v(" 3，启动服务。")]),s._v(" "),a("p",[s._v("创建配置信息文件。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysqld_exporter\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" .my.cnf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后启动服务时加载配置文件即可。")]),s._v(" "),a("h3",{attrs:{id:"_1-方式一-命令行式启动。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-方式一-命令行式启动。"}},[s._v("#")]),s._v(" 1，方式一，命令行式启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./mysqld_exporter -config.my-cnf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".my.cnf"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\nss "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9104")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-方式二-使用-systemd-管理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-方式二-使用-systemd-管理。"}},[s._v("#")]),s._v(" 2，方式二，使用 systemd 管理。")]),s._v(" "),a("p",[s._v("添加启动配置：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/mysqld_exporter.service\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysqld_exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysqld_exporter/mysqld_exporter -config.my-cnf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysqld_exporter/.my.cnf\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("注意：启动加载配置"),a("code",[s._v("/usr/local/mysqld_exporter/.my.cnf")]),s._v("不能再加单引号或者双引号，否则系统会附带识别，从而报配置文件不存在。")]),s._v(" "),a("p",[s._v("加载配置并启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl daemon-reload\n$ systemctl start mysqld_exporter\n$ systemctl status mysqld_exporter\n$ systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mysqld_exporter\n$ ss "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9104")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_4-配置-prometheus-yml-添加监控目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置-prometheus-yml-添加监控目标"}},[s._v("#")]),s._v(" 4，配置 prometheus.yml 添加监控目标")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/prometheus/prometheus.yml\n  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql'")]),s._v("\n    static_configs:\n      - targets: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.111.10:9104'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        labels:\n          instance: db1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("重启服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl restart prometheus\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者通过命令热加载：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" localhost:9090/-/reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5-配置-grafana-的模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-grafana-的模板"}},[s._v("#")]),s._v(" 5，配置 Grafana 的模板")]),s._v(" "),a("p",[s._v("mysql_exporter 在 Grafana 上为我们提供好了 Dashboard 模板：https://grafana.com/api/dashboards/9623/revisions/4/download")]),s._v(" "),a("p",[s._v("下载后在 Grafana 中导入 json 模板就可以看到官方这样的示例截图啦：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d30d33cb87aea7cc.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);