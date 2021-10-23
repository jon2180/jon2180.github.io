(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{525:function(v,e,_){"use strict";_.r(e);var l=_(6),a=Object(l.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"前奏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前奏"}},[v._v("#")]),v._v(" 前奏")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Q：怎么选择刷机包")])]),v._v(" "),_("li",[_("p",[v._v("A: 主要看需求，一般情况下需要考虑稳定性，易用性，主要优势和劣势，及特性（比如Gapps,xposed）.")])]),v._v(" "),_("li",[_("p",[v._v("Q: 刷机需要注意什么么？")])]),v._v(" "),_("li",[_("p",[v._v("A: 备份数据！备份数据！备份数据！")])])]),v._v(" "),_("h2",{attrs:{id:"step-1-备份数据及资源准备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#step-1-备份数据及资源准备"}},[v._v("#")]),v._v(" Step 1  备份数据及资源准备")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("主要备份项：")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("应用列表")]),v._v(" "),_("li",[v._v("联系人")]),v._v(" "),_("li",[v._v("短信")]),v._v(" "),_("li",[v._v("相册")]),v._v(" "),_("li",[v._v("音乐")]),v._v(" "),_("li",[v._v("通话记录")]),v._v(" "),_("li",[v._v("便签")]),v._v(" "),_("li",[v._v("各大平台的账号密码")]),v._v(" "),_("li",[v._v("浏览器书签")]),v._v(" "),_("li",[v._v("日历")]),v._v(" "),_("li",[v._v("闹钟")]),v._v(" "),_("li",[v._v("WLAN")]),v._v(" "),_("li",[v._v("重要的聊天记录")])])])]),v._v(" "),_("li",[_("p",[v._v("主要需要准备的资源")]),v._v(" "),_("ul",[_("li",[v._v("ROM包（压缩包或镜像）")]),v._v(" "),_("li",[v._v("Recovery镜像（通常TWRP）")]),v._v(" "),_("li",[v._v("一些必备的应用安装包")]),v._v(" "),_("li",[v._v("电脑")]),v._v(" "),_("li",[v._v("Bootloader解锁工具")]),v._v(" "),_("li",[v._v("adb工具")])])]),v._v(" "),_("li",[_("p",[v._v("主要的第三方包")]),v._v(" "),_("ul",[_("li",[v._v("GSI - Generic System Image")]),v._v(" "),_("li",[v._v("其他ROM")])])])]),v._v(" "),_("h2",{attrs:{id:"step-2-解锁bootloader"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#step-2-解锁bootloader"}},[v._v("#")]),v._v(" Step 2 解锁Bootloader")]),v._v(" "),_("p",[v._v("不同手机的解锁方式不一样。这里列举小米手机的解锁工具")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("工具")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("MiUnlock")])])])]),v._v(" "),_("li",[_("p",[v._v("解锁步骤")]),v._v(" "),_("ul",[_("li",[v._v("手机连接电脑")]),v._v(" "),_("li",[v._v("打开MiUnlock，安装小米手机驱动")]),v._v(" "),_("li",[v._v("登录账号，确认解锁")])])])]),v._v(" "),_("h2",{attrs:{id:"step-3-刷入recovery-线刷忽略此步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#step-3-刷入recovery-线刷忽略此步骤"}},[v._v("#")]),v._v(" Step 3 刷入Recovery（线刷忽略此步骤）")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("使用手机软件刷入")]),v._v(" "),_("ol",[_("li",[v._v("获取ROOT权限")]),v._v(" "),_("li",[v._v("安装Flashfiy")]),v._v(" "),_("li",[v._v("刷入Recovery镜像")]),v._v(" "),_("li",[v._v("重启")])])]),v._v(" "),_("li",[_("p",[v._v("使用电脑软件刷入")]),v._v(" "),_("ul",[_("li",[v._v("工具不同，方法不同")])])]),v._v(" "),_("li",[_("p",[v._v("使用ADB(Android Debug Bridge)工具")]),v._v(" "),_("ol",[_("li",[v._v("手机连接电脑，打开usb调试")]),v._v(" "),_("li",[v._v("打开cmd，进入adb文件的路径")]),v._v(" "),_("li",[v._v("检查是否连接成功"),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("adb devices\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])])]),v._v(" "),_("li",[v._v("刷入镜像"),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("adb flash recovery <file path and file name>\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])])])])])]),v._v(" "),_("h2",{attrs:{id:"step-4-刷入rom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#step-4-刷入rom"}},[v._v("#")]),v._v(" Step 4 刷入ROM")]),v._v(" "),_("ol",[_("li",[v._v("通过REC模式刷入\n"),_("ol",[_("li",[v._v("将安装包放在根目录")]),v._v(" "),_("li",[v._v("选中刷入，一般双清，特殊情况特殊考虑")])])]),v._v(" "),_("li",[v._v("通过ADB输入\n"),_("ol",[_("li",[v._v("手机连接电脑，打开usb调试")]),v._v(" "),_("li",[v._v("打开cmd，进入adb文件的路径")]),v._v(" "),_("li",[v._v("检查是否连接成功"),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("adb devices\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])])]),v._v(" "),_("li",[v._v("刷入镜像"),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("adb flash system <file path and file name>\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])])])])])]),v._v(" "),_("h2",{attrs:{id:"step-5-重启"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#step-5-重启"}},[v._v("#")]),v._v(" Step 5 重启")])])}),[],!1,null,null,null);e.default=a.exports}}]);