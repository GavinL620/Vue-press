(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{465:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1、安装配置-alertmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装配置-alertmanager"}},[s._v("#")]),s._v(" 1、安装配置 Alertmanager")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf alertmanager-0.15.2.linux-amd64.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" alertmanager-0.15.2.linux-amd64/ alertmanager\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-创建启动文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建启动文件"}},[s._v("#")]),s._v(" 2，创建启动文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/alertmanager.service \n添加如下内容：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("alertmanager\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://github.com/prometheus/alertmanager\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/alertmanager/alertmanager "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config.file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/alertmanager/alert-test.yml\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("Alertmanager 安装目录下默认有 alertmanager.yml 配置文件，可以创建新的配置文件，在启动时指定即可。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/alertmanager\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" alert-test.yml\nglobal:\n  smtp_smarthost: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp.163.com:25'")]),s._v("\n  smtp_from: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Linuxlql@163.com'")]),s._v("\n  smtp_auth_username: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Linuxlql@163.com'")]),s._v("\n  smtp_auth_password: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123546'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是邮箱的授权密码，不是登录密码")]),s._v("\n  smtp_require_tls: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\ntemplates:\n  - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/alertmanager/template/*.tmpl'")]),s._v("\nroute:\n  group_by: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'alertname'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cluster'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'service'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 10m\n  receiver: default-receiver\nreceivers:\n- name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default-receiver'")]),s._v("\n  email_configs:\n  - to: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'liqilong@edspay.com'")]),s._v("\n    html: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n    headers: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Subject: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[WARN] 报警邮件 test"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("邮箱一开始使用的是公司的邮箱，结果在后边验证的时候，总是会报错"),a("code",[s._v('level=error ts=2019-01-26T06:21:59.062483579Z caller=notify.go:332 component=dispatcher msg="Error on notify" err="*smtp.plainAuth failed: unencrypted connection"')]),s._v("，也在"),a("a",{attrs:{href:"https://github.com/gjmzj/kubeasz/issues/448",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1),s._v("看了一些人踩坑的报告，试验了 25、465、587 端口，发现均无效果，最后改成 163 邮箱，直接就生效了。")]),s._v(" "),a("ul",[a("li",[s._v("smtp_smarthost：是用于发送邮件的邮箱的 SMTP 服务器地址 + 端口；")]),s._v(" "),a("li",[s._v("smtp_auth_password：是发送邮箱的授权码而不是登录密码；")]),s._v(" "),a("li",[s._v("smtp_require_tls：不设置的话默认为 true，当为 true 时会有 starttls 错误，为了简单这里设置为 false；")]),s._v(" "),a("li",[s._v("templates：指出邮件的模板路径；")]),s._v(" "),a("li",[s._v("receivers 下 html 指出邮件内容模板名，这里模板名为 “alert.html”，在模板路径中的某个文件中定义。")]),s._v(" "),a("li",[s._v("headers：为邮件标题；")])]),s._v(" "),a("h3",{attrs:{id:"_3-配置告警规则。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置告警规则。"}},[s._v("#")]),s._v(" 3，配置告警规则。")]),s._v(" "),a("p",[s._v("配置 rule.yml。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/prometheus\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" rule.yml\ngroups:\n- name: alert-rules.yml\n  rules:\n  - alert: InstanceStatus "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alert 名字")]),s._v("\n    expr: up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux-node01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断条件")]),s._v("\n    for: 10s "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 条件保持 10s 才会发出 alter")]),s._v("\n    labels: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 alert 的标签")]),s._v("\n      severity: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"critical"')]),s._v("\n    annotations:  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alert 的其他标签，但不用于标识 alert")]),s._v("\n      description: 服务器  已当机超过 20s\n      summary: 服务器  运行状态\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("在 prometheus.yml 中指定 rule.yml 的路径")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" prometheus.yml \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# my global config")]),s._v("\nglobal:\n  scrape_interval:     15s "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set the scrape interval to every 15 seconds. Default is every 1 minute.")]),s._v("\n  evaluation_interval: 15s "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Evaluate rules every 15 seconds. The default is every 1 minute.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scrape_timeout is set to the global default (10s).")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Alertmanager configuration")]),s._v("\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      - localhost:9093 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里修改为 localhost")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.")]),s._v("\nrule_files:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - "first_rules.yml"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - "second_rules.yml"')]),s._v("\n  - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/prometheus/rule.yml"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A scrape configuration containing exactly one endpoint to scrape:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Here it's Prometheus itself.")]),s._v("\nscrape_configs:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.")]),s._v("\n  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prometheus'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# metrics_path defaults to '/metrics'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scheme defaults to 'http'.")]),s._v("\n    static_configs:\n    - targets: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9090'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'111.4'")]),s._v("\n    scrape_interval: 5s\n    static_configs:\n    - targets: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.111.4:9100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("重启 Prometheus 服务：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" prometheus.prometheus /usr/local/prometheus/rule.yml\n$ systemctl restart prometheus\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4-编写邮件模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-编写邮件模板"}},[s._v("#")]),s._v(" 4，编写邮件模板")]),s._v(" "),a("p",[s._v("注意：文件后缀为 tmpl")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-pv")]),s._v(" /alertmanager/template/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /alertmanager/template/alert.tmpl\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("table"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("报警名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/td"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("开始时间"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/td"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/tr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/td"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/td"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/tr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/table"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_5-启动-alertmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-alertmanager"}},[s._v("#")]),s._v(" 5，启动 Alertmanager")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" prometheus.prometheus /usr/local/alertmanager\n$ systemctl daemon-reload\n$ systemctl start alertmanager.service\n$ systemctl status alertmanager.service\n$ ss -tnl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9093")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_6-验证效果。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-验证效果。"}},[s._v("#")]),s._v(" 6，验证效果。")]),s._v(" "),a("p",[s._v("此时到管理界面可以看到如下信息：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2c56e4cd40852c98.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("然后停止 111.4 节点上的 node_exporter 服务，然后再看效果。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl stop node_exporter.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9b5eafaa31412097.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("接着邮箱应该会收到邮件：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b52717b8a86c810d.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);