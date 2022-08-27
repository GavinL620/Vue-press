(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{719:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("本文档介绍部署高可用 kube-scheduler 集群的步骤。")]),s._v(" "),e("p",[s._v("该集群包含 3 个节点，启动后将通过竞争选举机制产生一个 leader 节点，其它节点为阻塞状态。当 leader 节点不可用后，剩余节点将再次进行选举产生新的 leader 节点，从而保证服务的可用性。")]),s._v(" "),e("p",[s._v("为保证通信安全，本文档先生成 x509 证书和私钥，kube-scheduler 在如下两种情况下使用该证书：")]),s._v(" "),e("ul",[e("li",[s._v("与 kube-apiserver 的安全端口通信;")]),s._v(" "),e("li",[s._v("在安全端口 (https，10251) 输出 prometheus 格式的 metrics；")])]),s._v(" "),e("p",[s._v("配置之前需要先安装 kubelet,flannel 等组件，不过前边已经安装，现在直接进入配置。")]),s._v(" "),e("h2",{attrs:{id:"_1-创建-kube-scheduler-证书和私钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-kube-scheduler-证书和私钥"}},[s._v("#")]),s._v(" 1，创建 kube-scheduler 证书和私钥")]),s._v(" "),e("p",[s._v("创建证书签名请求：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kube-scheduler-csr.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n    "CN": "system:kube-scheduler",\n    "hosts": [\n      "127.0.0.1",\n      "192.168.106.3",\n      "192.168.106.4",\n      "192.168.106.5"\n    ],\n    "key": {\n        "algo": "rsa",\n        "size": 2048\n    },\n    "names": [\n      {\n        "C": "CN",\n        "ST": "BeiJing",\n        "L": "BeiJing",\n        "O": "system:kube-scheduler",\n        "OU": "4Paradigm"\n      }\n    ]\n}\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("ul",[e("li",[s._v("hosts 列表包含所有 kube-scheduler 节点 IP；")]),s._v(" "),e("li",[s._v("CN 为 system:kube-scheduler、O 为 system:kube-scheduler，kubernetes 内置的 ClusterRoleBindings system:kube-scheduler 将赋予 kube-scheduler 工作所需的权限。")])]),s._v(" "),e("p",[s._v("生成证书和私钥：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cfssl")]),s._v(" gencert "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ca")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -ca-key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca-key.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-config")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca-config.json "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-profile")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes kube-scheduler-csr.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cfssljson "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bare")]),s._v(" kube-scheduler\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_2-创建和分发-kubeconfig-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建和分发-kubeconfig-文件"}},[s._v("#")]),s._v(" 2，创建和分发 kubeconfig 文件")]),s._v(" "),e("p",[s._v("kubeconfig 文件包含访问 apiserver 的所有信息，如 apiserver 地址、CA 证书和自身使用的证书；")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$source")]),s._v(" /opt/k8s/bin/environment.sh\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" config set-cluster kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--server")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${KUBE_APISERVER}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-scheduler.kubeconfig\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" config set-credentials system:kube-scheduler "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-certificate"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-scheduler.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-scheduler-key.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-scheduler.kubeconfig\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" config set-context system:kube-scheduler "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cluster")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("system:kube-scheduler "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-scheduler.kubeconfig\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" config use-context system:kube-scheduler "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-scheduler.kubeconfig\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("ul",[e("li",[s._v("上一步创建的证书、私钥以及 kube-apiserver 地址被写入到 kubeconfig 文件中；")])]),s._v(" "),e("p",[s._v("分发 kubeconfig 到所有 master 节点：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    scp kube-scheduler.kubeconfig k8s@${node_ip}:/etc/kubernetes/\ndone\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"_3-创建和分发-kube-scheduler-systemd-unit-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建和分发-kube-scheduler-systemd-unit-文件"}},[s._v("#")]),s._v(" 3，创建和分发 kube-scheduler systemd unit 文件")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kube-scheduler.service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Unit]\nDescription=Kubernetes Scheduler\nDocumentation=https://github.com/GoogleCloudPlatform/kubernetes\n[Service]\nExecStart=/opt/k8s/bin/kube-scheduler "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --address=127.0.0.1 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --kubeconfig=/etc/kubernetes/kube-scheduler.kubeconfig "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --leader-elect=true "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --alsologtostderr=true "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --logtostderr=false "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --log-dir=/var/log/kubernetes "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --v=2\nRestart=on-failure\nRestartSec=5\nUser=k8s\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("ul",[e("li",[s._v("--address：在 127.0.0.1:10251 端口接收 http /metrics 请求；kube-scheduler 目前还不支持接收 https 请求；")]),s._v(" "),e("li",[s._v("--kubeconfig：指定 kubeconfig 文件路径，kube-scheduler 使用它连接和验证 kube-apiserver；")]),s._v(" "),e("li",[s._v("--leader-elect=true：集群运行模式，启用选举功能；被选为 leader 的节点负责处理工作，其它节点为阻塞状态；")]),s._v(" "),e("li",[s._v("User=k8s：使用 k8s 账户运行；")])]),s._v(" "),e("p",[s._v("分发 systemd unit 文件到所有 master 节点：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    scp kube-scheduler.service root@${node_ip}:/etc/systemd/system/\ndone\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"_4-启动-kube-scheduler-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动-kube-scheduler-服务"}},[s._v("#")]),s._v(" 4，启动 kube-scheduler 服务")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "mkdir -p /var/log/kubernetes && chown -R k8s /var/log/kubernetes"\n    ssh root@${node_ip} "systemctl daemon-reload && systemctl enable kube-scheduler && systemctl start kube-scheduler"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"_5-检查服务运行状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-检查服务运行状态"}},[s._v("#")]),s._v(" 5，检查服务运行状态")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh k8s@${node_ip} "systemctl status kube-scheduler|grep Active"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("如果看到如下输出：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bash")]),s._v(" magic.sh\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3\n   Active: active "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31:30 CST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4\n   Active: active "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":29:32 CST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\n   Active: active "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":29:32 CST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("则正常，如果失败，看日志：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("journalctl "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xu")]),s._v(" kube-scheduler\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_5-查看输出的-metric"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看输出的-metric"}},[s._v("#")]),s._v(" 5，查看输出的 metric")]),s._v(" "),e("p",[e("code",[s._v("注意：以下命令在 kube-scheduler 节点上执行。")])]),s._v(" "),e("p",[s._v("kube-scheduler 监听 10251 端口，接收 http 请求：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lnpt"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" kube-sche\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:10251         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15377")]),s._v("/kube-schedule\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curl")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" http://127.0.0.1:10251/metrics "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HELP apiserver_audit_event_total Counter of audit events generated and sent to the audit backend.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TYPE apiserver_audit_event_total counter")]),s._v("\napiserver_audit_event_total "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HELP go_gc_duration_seconds A summary of the GC invocation durations.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TYPE go_gc_duration_seconds summary")]),s._v("\ngo_gc_duration_seconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("quantile"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".3423e-05\ngo_gc_duration_seconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("quantile"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.25"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000120079")]),s._v("\ngo_gc_duration_seconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("quantile"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000146495")]),s._v("\ngo_gc_duration_seconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("quantile"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.75"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000174475")]),s._v("\ngo_gc_duration_seconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("quantile"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.001807813")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"_6-查看当前的-leader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看当前的-leader"}},[s._v("#")]),s._v(" 6，查看当前的 leader")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get endpoints kube-scheduler "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-system  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml\napiVersion: v1\nkind: Endpoints\nmetadata:\n  annotations:\n    control-plane.alpha.kubernetes.io/leader: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"holderIdentity":"kube-node2_aa57b017-ef0a-11e8-aaf2-5254001a681e","leaseDurationSeconds":15,"acquireTime":"2018-11-23T10:31:09Z","renewTime":"2018-11-23T17:05:31Z","leaderTransitions":1}\'')]),s._v("\n  creationTimestamp: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23T10:29:32Z\n  name: kube-scheduler\n  namespace: kube-system\n  resourceVersion: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30835"')]),s._v("\n  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-scheduler\n  uid: aabb2233-ef0a-11e8-9670-525400c7ba97\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("可见，当前的 leader 为 kube-node2 节点。")]),s._v(" "),e("h2",{attrs:{id:"_7-测试-kube-scheduler-集群的高可用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-测试-kube-scheduler-集群的高可用"}},[s._v("#")]),s._v(" 7，测试 kube-scheduler 集群的高可用")]),s._v(" "),e("p",[s._v("随便找一个或两个 master 节点，停掉 kube-scheduler 服务，看其它节点是否获取了 leader 权限（systemd 日志）。")]),s._v(" "),e("p",[s._v("现在就去停掉 kube-node2 上的 kube-scheduler 服务。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$systemctl")]),s._v(" stop kube-scheduler\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$systemctl")]),s._v(" status kube-scheduler "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Active\n   Active: inactive "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dead"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Sat "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-24 01:06:40 CST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 14s ago\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后再来查看一下现在的 leader 是谁：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get endpoints kube-scheduler "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-system  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml\napiVersion: v1\nkind: Endpoints\nmetadata:\n  annotations:\n    control-plane.alpha.kubernetes.io/leader: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"holderIdentity":"kube-node3_aa9017f9-ef0a-11e8-b73d-525400b42484","leaseDurationSeconds":15,"acquireTime":"2018-11-23T17:06:57Z","renewTime":"2018-11-23T17:07:31Z","leaderTransitions":2}\'')]),s._v("\n  creationTimestamp: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23T10:29:32Z\n  name: kube-scheduler\n  namespace: kube-system\n  resourceVersion: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30984"')]),s._v("\n  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-scheduler\n  uid: aabb2233-ef0a-11e8-9670-525400c7ba97\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("可以看到，已经漂移到了 kube-node3 上去了。")])])}),[],!1,null,null,null);e.default=n.exports}}]);