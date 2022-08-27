(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{650:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("经过前边所有讲解的中，我们大概已经约定，在企业中生产环境里，一个应用程序至少应该分出三层来应付所有的实际需求的。分别是测试环境，预发环境，线上环境（可能其他地方的叫法稍微有一些不同，不过基本上都是这个意思）。")]),s._v(" "),a("p",[s._v("那么，现在不妨想一个问题，在工作当中，或者准确的说在应用当中，这三个环境又是如何区分的呢？")]),s._v(" "),a("p",[s._v("一般来说，一个项目都会有一个提纲挈领的配置文件所在，配置文件的内容大多是应用对应的一些数据库连接信息，以及与其他应用互相回调URL，很明显了，三个环境的区分一般就是利用三个不同的配置文件来进行区分的。")]),s._v(" "),a("p",[s._v("那么，现在不妨再想一个问题，在工作当中，在我们持续集成的整套环境当中，这三个配置文件又是如何的根据环境的不同，选择了不同的配置文件了呢，在这些过程中，有没有其他一些需要注意的点，或者最佳实践？")]),s._v(" "),a("p",[s._v("今天这篇文章，就是要来回答如上问题的。")]),s._v(" "),a("h2",{attrs:{id:"_1-编译指向法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-编译指向法。"}},[s._v("#")]),s._v(" 1，编译指向法。")]),s._v(" "),a("p",[s._v("很多经验都是我们在工作当中慢慢经历，然后从一颗敏感而又认真的内心那里总结出来的，在当我一直按着之前同事留下的方式进行配置的时候，我也是从来没有对这件事儿进行过任何思考的一个小白，但随着工作的越来越久，内容越来越深入，有些东西你接触了，就会陷入深思，打算来个打破砂锅问到底。而有些东西又是无从问起或者无处可问的，因为有些经验，并不一定每个人都意识的到，或者意识到之后又愿意分享的。")]),s._v(" "),a("p",[s._v("曾有不少朋友与我问起这个问题，我一般都是先问问他那边的项目整体规划是怎样的，然后根据项目的实际执行流程进行建议，现在想来，恐怕这样就已经有一些被动了，这应该是一个规划前置的事情，也就是说，当我们在规划一个项目的时候，这应该是一个考虑在内的点。")]),s._v(" "),a("p",[s._v("好了，扯得有点多了，说回今天的正题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/5fe6ca0319e5abd6.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("如果看过我以前文章的朋友，大概会有一些印象，我曾经是如何通过配置文件来区分线上与预发环境的。")]),s._v(" "),a("p",[s._v("首先让我来谈谈我所理解的程序读取配置的方式，一种是在编译的时候读取配置文件，然后程序就从此配置进行编译，读入不同的配置，就会打出不同的包。另一种是打出通用的包，然后配置文件是放在服务器本地的，然后程序到这个固定的目录当中读取不同的配置，实现各个环境的区分—-（当然，本段内容纯粹是我个人在工作实践中的理解，毕竟咱不懂开发，不知道人家具体是如何操作的，如果有朋友知道这个地方的秘密，欢迎在评论区分享哦）！")]),s._v(" "),a("p",[s._v("那么我们以前采用的方式就是第一种啦，即在打包的时候就将配置读入到war包当中，这里以Java程序为例，我们在日常中结合Jenkins打包的时候，并不选择maven风格的打包方式，而是选择自由风格的打包方式，然后通过命令行进行打包，打包的同时，应用会默认在打包主机的/root目录下生成（当然，这里应该是程序当中定义好了的，然后才会生成）一个名为"),a("code",[s._v("antx.properties")]),s._v("的文件，从此以后，每一次的项目打包，程序都将会从这个文件里读取配置进行打包了。")]),s._v(" "),a("p",[s._v("鉴于此，我们以往区分线上与预发环境的方式就是针对这个配置文件做文章。")]),s._v(" "),a("p",[s._v("说到这里，不妨再多说两句这个区别预发以及线上环境的配置文件是一个什么东东，一般来说，里边大概都是像诸如"),a("code",[s._v("baidu.url = https://www.baidu.com/")]),s._v("这样的键值对组成的一个总览配置，那么假如刚才的那条对应的是线上环境的话，同样的，与之对应的预发环境中的配置就应该是"),a("code",[s._v("baidu.url = https://yfwww.baidu.com/")]),s._v("，从而让环境中的各个线上以及各个预发就此形成各自所在环境当中的联动，从而交由测试人员进行最接近线上环境的测试。")]),s._v(" "),a("p",[s._v("一般在测试环境当中，数据（数据库）都是生成的一些模拟的，服务器资源也相对紧凑，更多的时候只是实现对功能的测试与bug的管理，一旦牵扯到真实业务上来，那么在测试环境当然是不可能的，所以会有一个预发环境，预发环境使用与线上一致的数据库，连接到真是的数据，从而让测试人员得以测试程序在业务逻辑上是否存在问题。")]),s._v(" "),a("p",[s._v("还有相当重要的一点，那就是预发是待上线的线上，就像篮球场上的替补队员一样的，一旦线上环境有异常，可以先用预发来顶替，我就曾在工作中这么干过，总要比你暂时无法排查原因，而又不能将线上环境马上恢复要来的体面一些罢。")]),s._v(" "),a("p",[s._v("于是乎，在我们的预发以及线上环境中，曾经一度是这样来选择两个配置的：")]),s._v(" "),a("p",[s._v("分别在root目录下生成"),a("code",[s._v("antx.properties_pre")]),s._v("和"),a("code",[s._v("antx.properties_online")]),s._v("两个文件，当然，这个时候里边存着的都是各自环境所对应的配置文件啦，然后在判断了项目的环境之后，先将配置文件读入到公共的配置中，然后再进行编译。说可能说不太明白，接下来让我用一个示例来展示这种情况。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("MAVEN_CODE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("lsattr /root/antx.properties"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("I")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("NODE:4:1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$I")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"正在有别的项目在编译，请稍等,10秒钟后将重新检测，别关闭构建！！！         \n                                       一分钟后将有奇迹出现！！！"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b+1\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"      '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v('(十秒)"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("lsattr /root/antx.properties"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("I")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("NODE:4:1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n \nchattr "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" /root/antx.properties\n \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"      \n \n      **********************\n      *   一切就绪         *\n      *          马        *\n      *          上        *\n      *          进        *\n      *          入        *\n      *          新        *\n      *          的        *\n      *          构        *\n      *          建        *\n      **********************"')]),s._v("\n \n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"api_pre"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /root/antx.properties_pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /root/antx.properties\n      chattr +i /root/antx.properties\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"api_online"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /root/antx.properties_online "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /root/antx.properties\n      chattr +i /root/antx.properties\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n \n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("\n   mvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dmaven.test.skip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n   chattr "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" /root/antx.properties\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("p",[s._v("注意：以上截取片段是为了说明今天的内容，从而姑且这么展示，并不代表可以直接拷贝到你们的生产环境当中使用，毕竟各家有各家的情况，我只是希望通过这样的一个例子，来帮助大家更清晰理解这个问题。")]),s._v(" "),a("p",[s._v("以上选取的脚本片段，事实上完成的任务就是打包这一环节，可能有人看了会觉得怎么开头那一堆是干嘛用的，为何打个包这么复杂，别急，容我一一解释。")]),s._v(" "),a("p",[s._v("因为这种打包方案依赖于前边所说的一切，于是乎，我们就在脚本中先判断项目在Jenkins的web界面配置的参数化构建中的选项参数（此刻，如果你脑海中能够马上想到这个选项参数的位置并知道其作用，基本上可以说你对Jenkins的熟悉程度已非常的高了，如果想不起来是什么东东，那么可以先去你的项目里看看这个选项参数是什么东东）所传递过来的参数，如果是api的预发环境，那么我们把对应的预发环境的配置文件读入到公共的编译文件中去，然后把公共文件上锁，上锁的目的是为了防止一不小心同时发了两个项目，然后造成公共配置文件中的内容混乱，从而打包失败或者打出不可同的包。同样，如果是api的线上环境，那么就先将线上的配置文件读入公共文件，然后上锁，接着就是编译的动作了。当然，在这之前，我对公共文件的状态做了一个检测，防止上个项目编译失败，而公共文件没有正常解锁，从而导致这个项目忘里边读入的时候也失败，因此做了一个判断解锁的操作。")]),s._v(" "),a("p",[s._v("以上这么一段又臭又长又重要的话，就是我们在生产实践中针对环境配置文件所采取的方案了。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("one more thing—-")])]),s._v(" "),a("p",[s._v("你以为又臭又长的第一种方案就这么完了，不，并没有，博主要继续臭长一段。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0da99846926267cc.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("我记得曾经有一个博客里的读者朋友问我，做运维需不需要学maven，我当时并没有回应这个问题，尽管我当时心想深入的学习maven绝对没有必要，因为说实话我个人对maven也不甚了解，没有了解不能乱发言，直到有一天，一个有心的开发小伙伴，仅凭一句话，就彻底革了我上边展示的那种打包方式的命，我才意识到，做过一些绕路的事情，最后发现捷径的时候是多么的令人开心，注意，我这里仍旧没有觉得做运维的要深入学习maven，因为，真的除了日常打包命令这一项之外，别的没有太多啦。")]),s._v(" "),a("p",[s._v("那么这位同事是怎样革了我们之前的命的呢？")]),s._v(" "),a("p",[s._v("他说，项目编译的时候，配置文件是可以指定的，在这句话之前，我们一直以为，项目编译读取公共配置文件这是天定死了的事儿，不能变的，所以才会使用上边的那种方式进行了生产实践，直到这位同事说，其实可以指定配置文件编译项目的，好吧，不多感叹了，直接上干货吧。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dmaven.test.skip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dautoconfig.userProperties")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/pre_config/antx.properties_pre\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("就是这样一个简简单单的参数，直接可以让我们上边的脚本改成如下的样子：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("MVN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"api_pre"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    mvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dmaven.test.skip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dautoconfig.userProperties")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/pre_config/antx.properties_pre\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"api_online"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    mvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dmaven.test.skip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dautoconfig.userProperties")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/online_config/antx.properties_online\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("事实上就是如此，这个脚本里要干的事儿，与上边那个臭长脚本里边干的事儿，是一模一样的，而且要比那种方式更加优雅与美观。")]),s._v(" "),a("h2",{attrs:{id:"_2-编译替换法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译替换法。"}},[s._v("#")]),s._v(" 2，编译替换法。")]),s._v(" "),a("p",[s._v("这种方案稍微有一点点low了，不过，却会牵扯到一些关于安全的问题，关于安全的问题，我想放在最后再说，现在单说这种编译替换法，相信有不少的公司应该都是采取的这种方案。")]),s._v(" "),a("p",[s._v("简单说，就是程序制定好了配置放置的目录，在不同环境编译之前，将对应的配置文件拷贝到对应目录当中去（或者是编译之后再jar -cf打包是一个道理）。")]),s._v(" "),a("h3",{attrs:{id:"举例一-打包前更改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例一-打包前更改配置"}},[s._v("#")]),s._v(" 举例一，打包前更改配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("MAV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("/api/src/main/resources\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" application.properties\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /root/.jenkins/nodes/application.properties ./ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("\n    mvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dmaven.test.skip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("正如脚本中所言，程序里可能默认存放的是测试环境的配置文件，那么当我们发布预发或者线上环境的时候，先删除默认的配置文件，然后将准备好了的对应环境的配置文件拷贝过去，之后再进行打包。")]),s._v(" "),a("h3",{attrs:{id:"举例二-打包后更改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例二-打包后更改配置"}},[s._v("#")]),s._v(" 举例二，打包后更改配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("MVN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("\n  mvn  clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DskipTests")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("cp /etc/pre_config/*.properties "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$target_dir")]),s._v("/WEB-INF/classes/config\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("/framework-manage/target/framework-manage-1.0.0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cvf")]),s._v(" ROOT.war ./* \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("无论使用哪种方式，都可以实现不同环境使用不同配置的需求，只不过这里的不同，大概是与程序中定义的打包方式不同有关吧。")]),s._v(" "),a("h2",{attrs:{id:"_3-本地读取法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-本地读取法。"}},[s._v("#")]),s._v(" 3，本地读取法。")]),s._v(" "),a("p",[s._v("还有一种方案，那就是将配置文件放在对应的服务器本地，然后程序进行读取。")]),s._v(" "),a("p",[s._v("这种方案也比较实用，应用方案大概是这么实现的，就是分别在测试环境，预发环境，线上环境的主机的固定目录当中放入三个环境不同的配置文件，然后程序直接从这个目录当中读取配置即可实现环境的区分。")]),s._v(" "),a("p",[s._v("当然了，如果真的每个环境每台主机都去放一个，未免显得太过低端，也低效。一方面是一台一台放置的低效，一方面是当配置有更改的时候还要一台一台更改的低效。因此，在与开发人员沟通之后，我们选择把三个环境的配置文件加入到了版本控制当中，在每个程序启动的时候拉去配置到主机中，这样就不用每台手动进行放置，也不用改配置之后一个一个更改了。如果gitlab是放在内网当中，而预发线上服务器是在公网的话，那么可以通过防火墙的规则映射，让对应服务器有权限访问即可，其他的拒绝，从而保障代码安全。")]),s._v(" "),a("h2",{attrs:{id:"_4-启动加载法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动加载法。"}},[s._v("#")]),s._v(" 4，启动加载法。")]),s._v(" "),a("p",[s._v("以上方案都是基于传统的程序打出war包然后扔到tomcat下运行的思路实施的。")]),s._v(" "),a("p",[s._v("随着微服务的盛行，基本上可以告别Tomcat了，与此同时，我们可以在启动微服务项目的时候，加载不同的配置文件，从而实现不同环境的区分，大致方式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" project.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--spring.profiles.active")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" nohup.out\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" project.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--spring.profiles.active")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" nohup.out\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" project.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--spring.profiles.active")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" nohup.out\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("我们提前将配置文件按照不同的环境进行内容的规划以及名称的规划，从而启动的时候，不同的命令就加载不同的配置文件，实现我们今天一直在讲的需求。")]),s._v(" "),a("p",[s._v("但是，现在有一个问题，那就是，如果你打算这么做，那么毫无疑问，所有的测试也好，预发也好，线上也好，一切配置文件也都暴露在项目的代码当中去了，从安全角度来说，这未必是一个非常稳妥的事儿。因为在配置当中往往都是非常直接的与数据库连接的且权限很高用户名密码，我们相信每一位可爱的同事，但是对于数据非常重要的，或者人员流动大，而新员工又非常容易看到配置文件的这些情况来说，都是应该考虑在内容的因素。")]),s._v(" "),a("p",[s._v("总而言之，关于配置这一方案，没有绝对的完美，只有我们每个人约束自己，遵守职业道德，做好本职工作，总之，君子爱财，取之有道。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c40aa8631346e190.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("最后，也感谢我那一位位可爱的同事，没有他们，我不可能写出这篇文章，与你们共事，让我如此开心与愉悦！")]),s._v(" "),a("p",[s._v("呼，虽然今天是周日，但是仍旧习惯性的七点多就醒来了，再也睡不着之后打开电脑写这篇文章，一转眼竟然两个小时过去了，时光匆匆，没有虚度。")])])}),[],!1,null,null,null);a.default=e.exports}}]);