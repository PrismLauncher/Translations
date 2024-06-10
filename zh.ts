<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>APIPage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="39"/>
        <source>&amp;Pastebin Service</source>
        <oldsource>Pastebin Service</oldsource>
        <translation>Pastebin 服务(&amp;P)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Note: only input that starts with &lt;span style=&quot; font-weight:600;&quot;&gt;http://&lt;/span&gt; or &lt;span style=&quot; font-weight:600;&quot;&gt;https://&lt;/span&gt; will be accepted.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="vanished">&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;注意：仅支持以&lt;span style=&quot; font-weight:600;&quot;&gt;http://&lt;/span&gt;或&lt;span style=&quot; font-weight:600;&quot;&gt;https://&lt;/span&gt;开头的链接。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Here you can choose from a predefined list of paste services, or input the URL of a different paste service of your choice, provided it supports the same protocol as 0x0.st, that is POST a file parameter to the URL and return a link in the response body.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="vanished">&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在这里，您可以从预定义的 Pastebin 服务列表中进行选择，或者输入您选择的不同 Pastebin 服务的 URL，前提是它支持与 0x0.st 相同的协议，即 POST 文件参数到 URL 并返回链接响应体。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="45"/>
        <source>Paste Service &amp;Type</source>
        <oldsource>Paste Service Type</oldsource>
        <translation>Pastebin 服务类型(&amp;T)</translation>
    </message>
    <message>
        <source>Base URL</source>
        <translation type="vanished">基本网址</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="58"/>
        <source>Base &amp;URL</source>
        <translation>根网址(&amp;U)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="78"/>
        <source>Note: you probably want to change or clear the Base URL after changing the paste service type.</source>
        <translation>注：更改 Pastebin 服务类型后通常需要修改（或清除）根网址。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="150"/>
        <source>API Keys</source>
        <translation>API 密钥</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="156"/>
        <source>&amp;Microsoft Authentication</source>
        <oldsource>Microsoft Authentication</oldsource>
        <translation>微软身份验证(&amp;M)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="162"/>
        <source>Note: you probably don&apos;t need to set this if logging in via Microsoft Authentication already works.</source>
        <translation>注：如果已成功通过微软身份验证，通常无需设置这一项。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="175"/>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="284"/>
        <source>(Default)</source>
        <translation>（默认）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="182"/>
        <source>Enter a custom client ID for Microsoft Authentication here.</source>
        <oldsource>Enter a custom client ID for Microsoft Authentication here. </oldsource>
        <translation>在此处输入用于进行微软身份验证的客户端 ID。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="204"/>
        <source>&amp;Modrinth API</source>
        <translation>Modrinth API(&amp;M)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="210"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Note: you only need to set this to access private data. Read the &lt;a href=&quot;https://docs.modrinth.com/api-spec/#section/Authentication&quot;&gt;documentation&lt;/a&gt; for more information.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;注：只有需要访问私有数据时才需要设置此项。详见&lt;a href=&quot;https://docs.modrinth.com/api-spec/#section/Authentication&quot;&gt;官方文档&lt;/a&gt;。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="220"/>
        <source>Enter a custom API token for Modrinth here.</source>
        <translation>在此处输入您的 Modrinth API 密钥。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="239"/>
        <source>(None)</source>
        <translation>（无）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="308"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="320"/>
        <source>User Agent</source>
        <translation>用户代理（UA）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="329"/>
        <source>Enter a custom User Agent here. The special string $LAUNCHER_VER will be replaced with the version of the launcher.</source>
        <translation>在此处输入自定义用户代理（UA）。可用 $LAUNCHER_VER 替代启动器的版本号。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="91"/>
        <source>Meta&amp;data Server</source>
        <translation>元数据服务器(&amp;D)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="33"/>
        <source>Services</source>
        <translation>服务</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="97"/>
        <source>You can set this to a third-party metadata server to use patched libraries or other hacks.</source>
        <translation>可以将此设置为第三方元数据服务器来使用修改过的库或其他资源。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="117"/>
        <source>Enter a custom URL for meta here.</source>
        <translation>在此处输入自定义元数据服务器的网址。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="252"/>
        <source>&amp;CurseForge Core API</source>
        <translation>CurseForge 核心 API(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="258"/>
        <source>Note: you probably don&apos;t need to set this if CurseForge already works.</source>
        <translation>注：如果 CurseForge 服务已经可以正常工作， 通常不需要设置此项。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.ui" line="265"/>
        <source>Enter a custom API Key for CurseForge here.</source>
        <oldsource>Enter a custom API Key for CurseForge here. </oldsource>
        <translation>在此处输入您的 CurseForge API 密钥。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/APIPage.h" line="56"/>
        <source>APIs</source>
        <translation>API</translation>
    </message>
</context>
<context>
    <name>ATLauncher::PackInstallTask</name>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="120"/>
        <source>Could not understand pack manifest:
</source>
        <translation>无法解析包清单：
</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="342"/>
        <source>Failed to get local metadata index for %1</source>
        <translation>无法获取 %1 的本地元数据索引</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="152"/>
        <source>Failed to get local metadata index for &apos;%1&apos; v%2</source>
        <translation>无法获取 %1(v%2) 的本地元数据索引</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="142"/>
        <source>Unsupported installation mode</source>
        <translation>不支持的安装模式</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="183"/>
        <source>Deleting existing files...</source>
        <translation>正在删除现有文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="330"/>
        <source>Unknown mod type: %1</source>
        <translation>未知的 Mod 类型：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="375"/>
        <source>Failed to find version for %1 loader</source>
        <translation>无法找到 %1 加载器的合适版本</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="388"/>
        <source>No loader version set for modpack!</source>
        <translation>没有设置整合包的 Mod 加载器版本！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="518"/>
        <source>Unknown or unsupported download type: %1</source>
        <translation>未知或不支持的下载类型：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="631"/>
        <source>Downloading configs...</source>
        <translation>正在下载配置文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="632"/>
        <source>Config download</source>
        <translation>下载配置文件</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="674"/>
        <source>Extracting configs...</source>
        <translation>正在解压配置文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="680"/>
        <source>Failed to open pack configs %1!</source>
        <translation>无法打开包的配置文件 %1！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="710"/>
        <source>Selecting optional mods...</source>
        <translation>正在选择可选 Mod……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="719"/>
        <source>Downloading mods...</source>
        <translation>正在下载 Mod……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="722"/>
        <source>Mod download</source>
        <translation>下载 Mod</translation>
    </message>
    <message>
        <source>Unsupported download type: %1</source>
        <translation type="vanished">不支持的下载类型：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="747"/>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="880"/>
        <source>Unknown download type: %1</source>
        <translation>未知的下载类型：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="830"/>
        <source>Blocked mods found</source>
        <translation>发现被阻止的 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="831"/>
        <source>The following files are not available for download in third party launchers.&lt;br/&gt;You will need to manually download them and add them to the instance.</source>
        <translation>第三方启动器无法下载以下文件。&lt;br/&gt;您需要手动下载并添加到实例中。</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="887"/>
        <source>%1 out of %2 complete</source>
        <translation>已完成 %1/%2</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="927"/>
        <source>Failed to extract mods...</source>
        <translation>Mod 解压失败……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="937"/>
        <source>Extracting mods...</source>
        <translation>正在解压 Mod……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="1008"/>
        <source>Installing modpack</source>
        <translation>正在安装整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="1020"/>
        <source>Failed to create libraries component</source>
        <translation>无法创建库组件</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="1047"/>
        <source>Unknown loader type: </source>
        <translation>未知的加载器类型： </translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/atlauncher/ATLPackInstallTask.cpp" line="1061"/>
        <source>Failed to create pack component</source>
        <translation>无法创建包组件</translation>
    </message>
</context>
<context>
    <name>AboutDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="107"/>
        <source>About</source>
        <translation>关于</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="116"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A custom launcher that makes managing Minecraft easier by allowing you to have multiple instances of Minecraft at once.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;一个能够让您在单个启动器中轻松管理多个 Minecraft 实例的第三方启动器。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="173"/>
        <source>Platform:</source>
        <translation>平台：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="189"/>
        <source>Build Date:</source>
        <oldsource>Build Number:</oldsource>
        <translation>构建日期：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="205"/>
        <source>Commit:</source>
        <translation>提交：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="221"/>
        <source>Channel:</source>
        <translation>通道：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="248"/>
        <source>Credits</source>
        <translation>制作人员</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="262"/>
        <source>License</source>
        <translation>许可证</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="298"/>
        <source>About Qt</source>
        <translation>关于 Qt</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.ui" line="318"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="140"/>
        <source>About %1</source>
        <translation>关于 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="156"/>
        <source>Platform</source>
        <translation>平台</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="161"/>
        <source>Commit: %1</source>
        <translation>提交：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="166"/>
        <source>Build date: %1</source>
        <translation>构建日期：%1</translation>
    </message>
    <message>
        <source>Build Number</source>
        <translation type="vanished">内部版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="171"/>
        <source>Channel</source>
        <translation>通道</translation>
    </message>
    <message>
        <source>Version:</source>
        <translation type="vanished">版本：</translation>
    </message>
    <message>
        <source>Version</source>
        <translation type="vanished">版本</translation>
    </message>
</context>
<context>
    <name>AccountList</name>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="298"/>
        <source>Unchecked</source>
        <comment>Account status</comment>
        <translation>未检查</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="301"/>
        <source>Offline</source>
        <comment>Account status</comment>
        <translation>离线</translation>
    </message>
    <message>
        <source>Online</source>
        <comment>Account status</comment>
        <translation type="vanished">在线</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="286"/>
        <source>MSA</source>
        <comment>Account type</comment>
        <translation>Microsoft 账户</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="289"/>
        <source>Offline</source>
        <comment>Account type</comment>
        <translation>离线</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="292"/>
        <source>Unknown</source>
        <comment>Account type</comment>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="304"/>
        <source>Ready</source>
        <comment>Account status</comment>
        <translation>就绪</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="307"/>
        <source>Working</source>
        <comment>Account status</comment>
        <translation>正在使用</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="310"/>
        <source>Errored</source>
        <comment>Account status</comment>
        <translation>发生错误</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="313"/>
        <source>Expired</source>
        <comment>Account status</comment>
        <translation>已过期</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="316"/>
        <source>Disabled</source>
        <comment>Account status</comment>
        <translation>已停用</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="319"/>
        <source>Gone</source>
        <comment>Account status</comment>
        <translation>已关闭</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="322"/>
        <source>Unknown</source>
        <comment>Account status</comment>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="373"/>
        <source>Type of the account (MSA or Offline)</source>
        <translation>账号类型（Microsoft 账户或离线账户）</translation>
    </message>
    <message>
        <source>N/A</source>
        <comment>Can Migrate</comment>
        <translation type="vanished">无需迁移</translation>
    </message>
    <message>
        <source>Yes</source>
        <comment>Can Migrate</comment>
        <translation type="vanished">是</translation>
    </message>
    <message>
        <source>No</source>
        <comment>Can Migrate</comment>
        <translation type="vanished">否</translation>
    </message>
    <message>
        <source>N/A</source>
        <comment>Can Migrate?</comment>
        <translation type="vanished">不适用</translation>
    </message>
    <message>
        <source>Yes</source>
        <comment>Can Migrate?</comment>
        <translation type="vanished">是</translation>
    </message>
    <message>
        <source>No</source>
        <comment>Can Migrate?</comment>
        <translation type="vanished">否</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="355"/>
        <source>Username</source>
        <translation>Minecraft 用户名</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="357"/>
        <source>Account</source>
        <translation>Xbox 用户名</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="359"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="361"/>
        <source>Status</source>
        <translation>状态</translation>
    </message>
    <message>
        <source>Can Migrate?</source>
        <translation type="vanished">能否迁移</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="369"/>
        <source>Minecraft username associated with the account.</source>
        <translation>该账号的 Minecraft Java 版用户名。</translation>
    </message>
    <message>
        <source>Profile</source>
        <translation type="vanished">用户名</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="371"/>
        <source>User name of the account.</source>
        <translation>该账号的 Xbox 用户名。</translation>
    </message>
    <message>
        <source>Type of the account - Mojang or MSA.</source>
        <translation type="vanished">账号的类型——MSA（微软账户）或 Mojang 账户。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountList.cpp" line="375"/>
        <source>Current status of the account.</source>
        <translation>账号当前的状态。</translation>
    </message>
    <message>
        <source>Can this account migrate to a Microsoft account?</source>
        <oldsource>Name of the Minecraft profile associated with the account.</oldsource>
        <translation type="vanished">该账号能否迁移到微软账户。</translation>
    </message>
</context>
<context>
    <name>AccountListPage</name>
    <message>
        <source>Add &amp;Mojang</source>
        <oldsource>Add Mojang</oldsource>
        <translation type="vanished">添加 Mojang 账户(&amp;M)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="67"/>
        <source>Remo&amp;ve</source>
        <oldsource>Remove</oldsource>
        <translation>移除(&amp;V)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="72"/>
        <source>&amp;Set Default</source>
        <oldsource>Set Default</oldsource>
        <translation>设为默认账号(&amp;S)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="80"/>
        <source>&amp;No Default</source>
        <oldsource>No Default</oldsource>
        <translation>清除默认账号(&amp;N)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="85"/>
        <source>&amp;Upload Skin</source>
        <oldsource>Upload Skin</oldsource>
        <translation>上传新皮肤(&amp;U)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="90"/>
        <source>&amp;Delete Skin</source>
        <oldsource>Delete Skin</oldsource>
        <translation>删除原皮肤(&amp;D)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="93"/>
        <source>Delete the currently active skin and go back to the default one</source>
        <translation>删除当前的皮肤并恢复到默认皮肤</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="98"/>
        <source>&amp;Add Microsoft</source>
        <oldsource>Add Microsoft</oldsource>
        <translation>添加 Microsoft 账户(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="103"/>
        <source>Add &amp;Offline</source>
        <oldsource>Add Offline</oldsource>
        <translation>添加离线账户(&amp;O)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="108"/>
        <source>&amp;Refresh</source>
        <oldsource>Refresh</oldsource>
        <translation>刷新(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.ui" line="111"/>
        <source>Refresh the account tokens</source>
        <translation>刷新账号令牌</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.h" line="59"/>
        <source>Accounts</source>
        <translation>账号</translation>
    </message>
    <message>
        <source>Welcome!
If you&apos;re new here, you can select the &quot;Add Microsoft&quot; or &quot;Add Mojang&quot; buttons to link your Microsoft and/or Mojang accounts.</source>
        <oldsource>Welcome!
If you&apos;re new here, you can click the &quot;Add&quot; button to add your Mojang or Minecraft account.</oldsource>
        <translation type="vanished">欢迎！
如果您是第一次使用 ，您可以点击“添加微软账号”或“添加 Mojang 账号”按钮来连接您的微软和Mojang 账号。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="62"/>
        <source>Welcome!
If you&apos;re new here, you can select the &quot;Add Microsoft&quot; button to link your Microsoft account.</source>
        <translation>欢迎！
如果您是首次来到这里，可以单击“添加 Microsoft 账户”按钮来链接您的 Microsoft 账户。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="95"/>
        <source>No Microsoft Authentication client ID was set.</source>
        <translation>未设置微软身份验证的客户端 ID。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="111"/>
        <source>Context menu</source>
        <translation>功能菜单</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="139"/>
        <source>Add account</source>
        <translation>添加账户</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="140"/>
        <source>How do you want to login?</source>
        <translation>你希望如何登录？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="142"/>
        <source>Legacy</source>
        <translation>旧版</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="143"/>
        <source>Recommended</source>
        <translation>推荐版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="144"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="150"/>
        <source>Please enter your Mojang account email and password to add your account.</source>
        <translation>请输入您要添加的 Mojang 账号的邮箱和密码。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="164"/>
        <source>You must add a Microsoft account that owns Minecraft before you can add an offline account.&lt;br&gt;&lt;br&gt;If you have lost your account you can contact Microsoft for support.</source>
        <translation>您必须先添加一个拥有 Minecraft 的 Microsoft 账户，才能添加其他离线账户。&lt;br&gt;&lt;br&gt;如果您遗失了您的账号，可以联系微软以获得支持。</translation>
    </message>
    <message>
        <source>Microsoft Accounts not available</source>
        <translation type="vanished">微软账户目前不可用</translation>
    </message>
    <message>
        <source>Microsoft accounts are only usable on macOS 10.13 or newer, with fully updated %1.

Please update both your operating system and %1.</source>
        <extracomment>%1 refers to the launcher itself</extracomment>
        <translation type="vanished">微软账户只能在 macOS 10.13 或更新的版本上使用，且必须将 %1 更新到最新版本。

请更新您的操作系统和 %1。</translation>
    </message>
    <message>
        <source>Microsoft accounts are only usable on macOS 10.13 or newer, with fully updated PolyMC.

Please update both your operating system and PolyMC.</source>
        <translation type="vanished">微软账户只能在 macOS 10.13 或更高版本中使用，而且需要完全更新了的 PolyMC。

请把您的操作系统和 PolyMC 全部更新。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="163"/>
        <source>Error</source>
        <translation>发生错误</translation>
    </message>
    <message>
        <source>You must add a Microsoft or Mojang account that owns Minecraft before you can add an offline account.&lt;br&gt;&lt;br&gt;If you have lost your account you can contact Microsoft for support.</source>
        <translation type="vanished">您必须在添加至少一个已购买 Minecraft 的微软或 Mojang 账户之后才能添加离线账号。&lt;br&gt;&lt;br&gt;如果您丢失了您的账号，请联系微软寻求支持。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="171"/>
        <source>Please enter your desired username to add your offline account.</source>
        <translation>请输入您要添加的离线账户的用户名。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="183"/>
        <source>Remove account?</source>
        <translation>删除账号？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="183"/>
        <source>Do you really want to delete this account?</source>
        <translation>你真的想删除这个账号吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="272"/>
        <source>Skin Delete</source>
        <translation>删除皮肤</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/AccountListPage.cpp" line="272"/>
        <source>Failed to delete current skin!</source>
        <translation>无法删除当前皮肤！</translation>
    </message>
</context>
<context>
    <name>AccountTask</name>
    <message>
        <source>Sending request to auth servers...</source>
        <translation type="vanished">正在向身份验证服务器发送请求……</translation>
    </message>
    <message>
        <source>Authentication task succeeded.</source>
        <translation type="vanished">身份验证成功。</translation>
    </message>
    <message>
        <source>Failed to contact the authentication server.</source>
        <translation type="vanished">未能连接上身份验证服务器。</translation>
    </message>
    <message>
        <source>Client ID has changed. New session needs to be created.</source>
        <translation type="vanished">客户端 ID 已更改。您需要创建新的会话。</translation>
    </message>
    <message>
        <source>Encountered an error during authentication.</source>
        <translation type="vanished">在身份验证过程中出现了错误。</translation>
    </message>
    <message>
        <source>Failed to authenticate. The session has expired.</source>
        <translation type="vanished">身份验证失败，会话已过期。</translation>
    </message>
    <message>
        <source>Failed to authenticate. The account no longer exists.</source>
        <translation type="vanished">验证失败，此账号不再存在。</translation>
    </message>
    <message>
        <source>...</source>
        <translation type="vanished">……</translation>
    </message>
    <message>
        <source>Unknown account task state: %1</source>
        <translation type="vanished">未知的账号状态： %1</translation>
    </message>
</context>
<context>
    <name>Application</name>
    <message>
        <location filename="src/launcher/Application.cpp" line="761"/>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="914"/>
        <source>This installation has a update lock file present at: %1

Timestamp: %2
Updating from version %3 to %4
Target install path: %5
Data Path: %6
This likely means that a update attempt failed. Please ensure your installation is in working order before proceeding.
Check the Prism Launcher updater log at: 
%7
for details on the last update attempt.

To delete this lock and proceed select &quot;Ignore&quot; below.</source>
        <translation>在 %1 存在更新锁定文件

时间戳：%2
从版本 %3 更新到 %4
安装目标路径：%5
数据路径：%6
这种情况有很大可能是上次更新失败过，请先确保该启动器安装是正常的再尝试继续。
查看 Prism Launcher 更新安装日志文件： 
%7
以获取有关上次更新的详细信息。

点击下面的“忽略”按钮以删除此锁定文件并继续。</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="931"/>
        <source>Update In Progress</source>
        <translation>更新中</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="956"/>
        <source>An update attempt failed

Please ensure your installation is in working order before proceeding.
Check the Prism Launcher updater log at: 
%1
for details on the last update attempt.</source>
        <translation>更新失败

继续前，请先确保启动器工作正常。
查看 Prism Launcher 更新安装日志：
%1
了解上次更新的详情。</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="964"/>
        <source>Update Failed</source>
        <translation>更新失败</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="989"/>
        <source>Update succeeded

You are now running %1 .
Check the Prism Launcher updater log at: 
%1
for details.</source>
        <translation>更新成功

您现在正在运行 %1 。
请查看 Prism Launcher 更新日志：
%1
查看详情。</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="997"/>
        <source>Update Succeeded</source>
        <translation>更新成功</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="1028"/>
        <source>Your /tmp directory is currently mounted with the &apos;noexec&apos; flag enabled.
Some versions of Minecraft may not launch.
</source>
        <translation>你的 /tmp 目录现在被以 noexec 的状态挂载。
某些 Minecraft 版本可能无法启动。
</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="1030"/>
        <source>Incompatible system configuration</source>
        <translation>系统配置不兼容</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="1366"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="1776"/>
        <source>Old data from %1 was found, but you already have existing data for %2. Sadly you will need to migrate yourself. Do you want to be reminded of the pending data migration next time you start %2?</source>
        <translation>找到了来自 %1 的旧数据，但因在 %2 还有现存数据，因此您只能自行迁移旧数据。是否需要在下次启动 %2 时再次提醒需要进行数据迁移？</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="1780"/>
        <source>It looks like you used %1 before. Do you want to migrate your data to the new location of %2?</source>
        <translation>您似乎曾经使用过 %1。是否需要将您那时的数据迁移到 %2 使用的新位置？</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="1786"/>
        <source>It looks like you used %1 on %2 before. Do you want to migrate your data to the new location of %3?</source>
        <translation>您似乎曾经在 %2 上用过 %1。是否需要将您那时的数据迁移到 %3 使用的新位置？</translation>
    </message>
    <message>
        <location filename="src/launcher/Application.cpp" line="1829"/>
        <source>Migration failed! Reason: %1</source>
        <translation>迁移失败！原因：%1</translation>
    </message>
</context>
<context>
    <name>AssetUpdateTask</name>
    <message>
        <location filename="src/launcher/minecraft/update/AssetUpdateTask.cpp" line="21"/>
        <source>Updating assets index...</source>
        <translation>正在更新资源文件索引……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/AssetUpdateTask.cpp" line="27"/>
        <source>Asset index for %1</source>
        <translation>%1 的资源索引</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/AssetUpdateTask.cpp" line="43"/>
        <location filename="src/launcher/minecraft/update/AssetUpdateTask.cpp" line="80"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/AssetUpdateTask.cpp" line="71"/>
        <source>Failed to read the assets index!</source>
        <translation>读取资源索引失败！</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/AssetUpdateTask.cpp" line="76"/>
        <source>Getting the assets files from Mojang...</source>
        <translation>正在从 Mojang 获取资源文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/AssetUpdateTask.cpp" line="92"/>
        <source>Failed to download the assets index:
%1</source>
        <translation>下载资源索引时出错：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/AssetUpdateTask.cpp" line="97"/>
        <source>Failed to download assets:
%1</source>
        <translation>下载资源时出错：
%1</translation>
    </message>
</context>
<context>
    <name>Atl::FilterModel</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlFilterModel.cpp" line="31"/>
        <source>Sort by Popularity</source>
        <oldsource>Sort by popularity</oldsource>
        <translation>按热度排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlFilterModel.cpp" line="32"/>
        <source>Sort by Name</source>
        <oldsource>Sort by name</oldsource>
        <translation>按名称排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlFilterModel.cpp" line="33"/>
        <source>Sort by Game Version</source>
        <oldsource>Sort by game version</oldsource>
        <translation>按游戏版本排序</translation>
    </message>
</context>
<context>
    <name>AtlOptionalModDialog</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.ui" line="14"/>
        <source>Select Mods To Install</source>
        <translation>选择要安装的 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.ui" line="20"/>
        <source>Install</source>
        <translation>安装</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.ui" line="40"/>
        <source>Select Recommended</source>
        <translation>选择推荐 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.ui" line="33"/>
        <source>Use Share Code</source>
        <translation>使用分享码</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.ui" line="47"/>
        <source>Clear All</source>
        <translation>全不选</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.cpp" line="342"/>
        <source>Select a share code</source>
        <translation>选择分享码</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.cpp" line="342"/>
        <source>Share code:</source>
        <translation>分享码：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.cpp" line="352"/>
        <source>No share code specified!</source>
        <translation>未指定分享码！</translation>
    </message>
</context>
<context>
    <name>AtlOptionalModListModel</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.cpp" line="242"/>
        <source>Are you sure that you want to enable this mod?</source>
        <translation>您确定要启用该 Mod 吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlOptionalModDialog.cpp" line="245"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
</context>
<context>
    <name>AtlPage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlPage.ui" line="86"/>
        <source>Warning: This is still a work in progress. If you run into issues with the imported modpack, it may be a bug.</source>
        <translation>警告：该功能仍未完成，导入的整合包可能由于该功能的漏洞出现问题。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlPage.ui" line="22"/>
        <source>Version selected:</source>
        <translation>所选版本：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlPage.ui" line="64"/>
        <source>Search and filter...</source>
        <oldsource>Search and filter ...</oldsource>
        <translation>搜索与筛选……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlPage.ui" line="74"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <source>No versions are currently available for Minecraft %1</source>
        <translation type="vanished">当前没有适用于Minecraft %1 的版本可用</translation>
    </message>
    <message>
        <source>No versions are currently available</source>
        <translation type="vanished">当前没有版本可用</translation>
    </message>
    <message>
        <source>Couldn&apos;t load or download the version lists!</source>
        <translation type="vanished">无法加载或下载版本列表！</translation>
    </message>
    <message>
        <source>Installing</source>
        <translation type="vanished">安装中</translation>
    </message>
    <message>
        <source>ATLauncher</source>
        <translation type="vanished">ATLauncher</translation>
    </message>
</context>
<context>
    <name>AtlUserInteractionSupportImpl</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlUserInteractionSupportImpl.cpp" line="60"/>
        <source>No versions are currently available for Minecraft %1</source>
        <translation>目前没有用于 Minecraft %1 的版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlUserInteractionSupportImpl.cpp" line="62"/>
        <source>No versions are currently available</source>
        <translation>目前没有适用版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlUserInteractionSupportImpl.cpp" line="64"/>
        <source>Couldn&apos;t load or download the version lists!</source>
        <translation>无法下载或加载下载版本列表！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/atlauncher/AtlUserInteractionSupportImpl.cpp" line="93"/>
        <source>Installing</source>
        <translation>正在安装</translation>
    </message>
</context>
<context>
    <name>AuthFlow</name>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="51"/>
        <source>Finished all authentication steps</source>
        <translation>已完成所有身份认证步骤</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="56"/>
        <source>Initializing</source>
        <translation>正在初始化</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="88"/>
        <source>Waiting...</source>
        <translation>请等待……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="93"/>
        <source>Working...</source>
        <translation>正在处理……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="98"/>
        <source>Authentication task succeeded.</source>
        <translation>身份验证成功。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="104"/>
        <source>Failed to contact the authentication server.</source>
        <translation>连接身份验证服务器失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="111"/>
        <source>Client ID has changed. New session needs to be created.</source>
        <translation>客户端 ID 已更改。需要创建新会话。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="118"/>
        <source>Encountered an error during authentication.</source>
        <translation>在身份验证过程中出现了错误。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="125"/>
        <source>Failed to authenticate. The session has expired.</source>
        <translation>身份验证失败，会话已过期。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="132"/>
        <source>Failed to authenticate. The account no longer exists.</source>
        <translation>验证失败，此账号不再存在。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="139"/>
        <source>...</source>
        <translation>……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AuthFlow.cpp" line="140"/>
        <source>Unknown account task state: %1</source>
        <translation>未知的账号状态： %1</translation>
    </message>
</context>
<context>
    <name>BaseProfiler</name>
    <message>
        <location filename="src/launcher/tools/BaseProfiler.cpp" line="27"/>
        <source>Profiler aborted</source>
        <translation>分析器已停止运作</translation>
    </message>
</context>
<context>
    <name>BlockedModsDialog</name>
    <message>
        <source>Open All</source>
        <translation type="vanished">打开全部</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.cpp" line="174"/>
        <source>All mods found</source>
        <translation>找到的所有 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.cpp" line="177"/>
        <source>Please download the missing mods.</source>
        <translation>请下载缺失的 Mod。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.cpp" line="155"/>
        <source>&lt;span style=&quot;color:green&quot;&gt; &amp;#x2714; Found at %1 &lt;/span&gt;</source>
        <translation>&lt;span style=&quot;color:green&quot;&gt; &amp;#x2714; 在 %1 找到 &lt;/span&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.cpp" line="54"/>
        <source>Open Missing</source>
        <translation>打开下载页面</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.cpp" line="57"/>
        <source>Add Download Folder</source>
        <translation>添加下载文件夹</translation>
    </message>
    <message>
        <source>Your configured global mods folder and default downloads folder are automatically checked for the downloaded mods and they will be copied to the instance if found.&lt;br/&gt;Optionally, you may drag and drop the downloaded mods onto this dialog or add a folder to watch if you did not download the mods to a default location.</source>
        <translation type="vanished">软件会自动检查您配置的全局模组文件夹和默认下载文件夹中是否有下载的模组，如果找到的话，它们将被复制到实例中。&lt;br/&gt;您也可以将下载的模组拖放到此对话框中，或者如果没有将模组下载到默认位置，您可以自定义要监视的文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.cpp" line="138"/>
        <source>Select directory where you downloaded the mods</source>
        <translation>选择下载 Mod 的目录</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.cpp" line="158"/>
        <source>&lt;span style=&quot;color:red&quot;&gt; &amp;#x2718; Not Found &lt;/span&gt;</source>
        <translation>&lt;span style=&quot;color:red&quot;&gt; &amp;#x2718; 未找到 &lt;/span&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.cpp" line="160"/>
        <source>%1: &lt;a href=&apos;%2&apos;&gt;%2&lt;/a&gt; &lt;p&gt;Hash: %3 %4&lt;/p&gt; &lt;br/&gt;</source>
        <translation>%1：&lt;a href=&apos;%2&apos;&gt;%2&lt;/a&gt; &lt;p&gt;哈希值：%3 %4&lt;/p&gt; &lt;br/&gt;</translation>
    </message>
    <message>
        <source>All mods found ✔</source>
        <translation type="vanished">已找到所有模组 ✔</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.ui" line="39"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Your configured global mods folder and default downloads folder are automatically checked for the downloaded mods and they will be copied to the instance if found.&lt;/p&gt;&lt;p&gt;Optionally, you may drag and drop the downloaded mods onto this dialog or add a folder to watch if you did not download the mods to a default location.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启动器会自动在“公共 Mod 文件夹”和“默认下载文件夹”检测新 Mod 并复制到各个实例。&lt;/p&gt;&lt;p&gt;您也可以将下载好的 Mod 拖到此对话框中。如果您没有将 Mod 下载到现有的默认位置，也可以再添加一个默认文件夹。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/BlockedModsDialog.ui" line="62"/>
        <source>Watched Folders:</source>
        <translation>已检查文件夹：</translation>
    </message>
</context>
<context>
    <name>CapeChange</name>
    <message>
        <location filename="src/launcher/minecraft/services/CapeChange.cpp" line="52"/>
        <source>Equipping cape</source>
        <translation>装备披风</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/services/CapeChange.cpp" line="72"/>
        <source>Removing cape</source>
        <translation>移除披风</translation>
    </message>
</context>
<context>
    <name>CheckJava</name>
    <message>
        <location filename="src/launcher/launch/steps/CheckJava.cpp" line="71"/>
        <source>Java checker library could not be found. Please check your installation.</source>
        <translation>未找到 Java 检查器库，请检查 Java 是否正确安装。</translation>
    </message>
</context>
<context>
    <name>ChooseProviderDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ChooseProviderDialog.ui" line="14"/>
        <source>Choose a mod provider</source>
        <translation>选择 Mod 托管平台</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ChooseProviderDialog.ui" line="45"/>
        <source>Skip this mod</source>
        <translation>跳过该 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ChooseProviderDialog.ui" line="52"/>
        <source>Skip all</source>
        <translation>全部跳过</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ChooseProviderDialog.ui" line="59"/>
        <source>Confirm for all</source>
        <translation>全部确认</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ChooseProviderDialog.ui" line="66"/>
        <source>Confirm</source>
        <translation>确认</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ChooseProviderDialog.ui" line="78"/>
        <source>Try to automatically use other providers if the chosen one fails</source>
        <translation>如果创建元数据失败，将会自动尝试其他托管平台</translation>
    </message>
</context>
<context>
    <name>ComponentUpdateTask</name>
    <message>
        <location filename="src/launcher/minecraft/ComponentUpdateTask.cpp" line="172"/>
        <location filename="src/launcher/minecraft/ComponentUpdateTask.cpp" line="211"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/ComponentUpdateTask.cpp" line="232"/>
        <source>Some component metadata load tasks failed.</source>
        <translation>部分组件元数据加载失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/ComponentUpdateTask.cpp" line="434"/>
        <source>Conflicting requirements detected during dependency checking!</source>
        <translation>检测到了冲突的前置 Mod！</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/ComponentUpdateTask.cpp" line="450"/>
        <source>Instance has conflicting dependencies.</source>
        <translation>实例包含冲突的前置 Mod。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/ComponentUpdateTask.cpp" line="455"/>
        <source>Instance has unresolved dependencies while loading/checking for launch.</source>
        <translation>实例在启动前加载/检查时发现了未安装的前置 Mod。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/ComponentUpdateTask.cpp" line="574"/>
        <source>Component metadata update task failed while downloading from remote server:
%1</source>
        <translation>组件元数据更新失败，在从远程服务器下载时出现错误：
%1</translation>
    </message>
</context>
<context>
    <name>ConcurrentTask</name>
    <message>
        <location filename="src/launcher/tasks/ConcurrentTask.cpp" line="95"/>
        <source>Failed to abort all running tasks.</source>
        <translation>未能终止所有运行中的任务。</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/ConcurrentTask.cpp" line="125"/>
        <source>One or more subtasks failed</source>
        <translation>一个或多个子任务运行失败</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/ConcurrentTask.cpp" line="276"/>
        <source>Executing %1 task(s) (%2 out of %3 are done)</source>
        <translation>正在执行 %1 个任务(已完成 %2/%3)</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/ConcurrentTask.cpp" line="280"/>
        <source>Please wait...</source>
        <translation>请稍候……</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/ConcurrentTask.cpp" line="282"/>
        <source>Waiting for a task to start...</source>
        <translation>正在等待任务开始......</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/ConcurrentTask.cpp" line="284"/>
        <source>Executing 1 task:</source>
        <translation>正在执行一个任务：</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/ConcurrentTask.cpp" line="286"/>
        <source>Task finished.</source>
        <translation>任务已完成。</translation>
    </message>
</context>
<context>
    <name>CopyInstanceDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="17"/>
        <source>Copy Instance</source>
        <translation>复制实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="74"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="93"/>
        <source>&amp;Group</source>
        <translation>分组(&amp;G)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="198"/>
        <source>Select all</source>
        <translation>全选</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="131"/>
        <source>Disabling this will still keep the mod loader (ex: Fabric, Quilt, etc.) but erase the mods folder and their configs.</source>
        <translation>禁用此功能将仍然保留 Mod 加载器（如 Forge、Fabric、Quilt 等），但会删除 Mod 文件夹及配置文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="118"/>
        <source>Instance Copy Options</source>
        <translation>实例复制选项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="134"/>
        <source>Copy mods</source>
        <translation>复制 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="151"/>
        <source>Copy the in-game options like FOV, max framerate, etc.</source>
        <translation>复制游戏内选项（如视场角、最大帧率等）。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="154"/>
        <source>Copy game options</source>
        <translation>复制游戏选项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="175"/>
        <source>Copy saves</source>
        <translation>复制存档</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="218"/>
        <source>Advanced Copy Options</source>
        <translation>高级复制选项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="230"/>
        <source>Use symbolic or hard links instead of copying files.</source>
        <translation>使用符号链接或硬链接而非复制文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="233"/>
        <source>Symbolic and Hard Link Options</source>
        <translation>符号链接和硬链接选项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="248"/>
        <source>Links are supported on most filesystems except FAT</source>
        <translation>除 FAT 外，大多数文件系统都支持链接</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="275"/>
        <source>Link each resource individually instead of linking whole folders at once</source>
        <translation>分别链接每个资源，而不是直接链接整个文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="278"/>
        <source>Link files recursively</source>
        <translation>递归链接文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="288"/>
        <source>If &quot;copy saves&quot; is selected world save data will be copied instead of linked and thus not shared between instances.</source>
        <translation>如果选择了“复制存档”，则世界存档数据将复制而非链接，因此存档不会在实例之间共享。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="291"/>
        <source>Don&apos;t link saves</source>
        <translation>不要链接存档</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="304"/>
        <source>Use hard links instead of copying files.</source>
        <translation>使用硬链接而非复制文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="307"/>
        <source>Use hard links</source>
        <translation>使用硬链接</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="314"/>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.cpp" line="103"/>
        <source>Use symbolic links instead of copying files.</source>
        <translation>使用符号链接而非复制文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="317"/>
        <source>Use symbolic links</source>
        <translation>使用符号链接</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="329"/>
        <source>CoW (Copy-on-Write) Options</source>
        <translation>写时复制（Copy-on-Write）选项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="338"/>
        <source>Files cloned with reflinks take up no extra space until they are modified.</source>
        <translation>使用引用链接克隆的文件在修改前不会占用额外空间。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="341"/>
        <source>Clone instead of copying</source>
        <translation>克隆而非复制</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="367"/>
        <source>Your filesystem and/or OS doesn&apos;t support reflinks</source>
        <translation>您的文件系统和/或操作系统不支持引用链接</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="161"/>
        <source>Copy shader packs</source>
        <translation>复制光影包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="168"/>
        <source>Copy servers</source>
        <translation>复制服务器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="144"/>
        <source>Copy resource packs</source>
        <translation>复制资源包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="124"/>
        <source>Keep play time</source>
        <translation>保持游玩时间</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.ui" line="182"/>
        <source>Copy screenshots</source>
        <translation>复制截图</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.cpp" line="74"/>
        <source>No group</source>
        <translation>清除分组</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.cpp" line="96"/>
        <source>Reflinks are supported on %1</source>
        <translation>%1 支持引用链接</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.cpp" line="98"/>
        <source>Reflinks aren&apos;t supported on %1</source>
        <translation>%1 不支持引用链接</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/CopyInstanceDialog.cpp" line="104"/>
        <source>On Windows, symbolic links may require admin permission to create.</source>
        <translation>在 Windows 上，符号链接可能需要管理员权限才能创建。</translation>
    </message>
</context>
<context>
    <name>CoreModFolderPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.h" line="80"/>
        <source>Core mods</source>
        <translation>核心 Mod</translation>
    </message>
</context>
<context>
    <name>CreateGameFolders</name>
    <message>
        <location filename="src/launcher/minecraft/launch/CreateGameFolders.cpp" line="15"/>
        <source>Couldn&apos;t create the main game folder</source>
        <translation>无法创建游戏主文件夹</translation>
    </message>
</context>
<context>
    <name>CustomCommands</name>
    <message>
        <location filename="src/launcher/ui/widgets/CustomCommands.ui" line="32"/>
        <source>&amp;Custom Commands</source>
        <oldsource>Cus&amp;tom Commands</oldsource>
        <translation>自定义命令(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/CustomCommands.ui" line="44"/>
        <source>P&amp;ost-exit command:</source>
        <oldsource>Post-exit command:</oldsource>
        <translation>退出后命令(&amp;O)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/CustomCommands.ui" line="57"/>
        <source>&amp;Pre-launch command:</source>
        <oldsource>Pre-launch command:</oldsource>
        <translation>预启动命令(&amp;P)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/CustomCommands.ui" line="70"/>
        <source>&amp;Wrapper command:</source>
        <oldsource>Wrapper command:</oldsource>
        <translation>包装器命令(&amp;W)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/CustomCommands.ui" line="86"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Pre-launch command runs before the instance launches and post-exit command runs after it exits.&lt;/p&gt;&lt;p&gt;Both will be run in the launcher&apos;s working folder with extra environment variables:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;$INST_NAME - Name of the instance&lt;/li&gt;&lt;li&gt;$INST_ID - ID of the instance (its folder name)&lt;/li&gt;&lt;li&gt;$INST_DIR - absolute path of the instance&lt;/li&gt;&lt;li&gt;$INST_MC_DIR - absolute path of Minecraft&lt;/li&gt;&lt;li&gt;$INST_JAVA - Java binary used for launch&lt;/li&gt;&lt;li&gt;$INST_JAVA_ARGS - command-line parameters used for launch (warning: will not work correctly if arguments contain spaces)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Wrapper command allows launching using an extra wrapper program (like &apos;optirun&apos; on Linux)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Pre-launch command runs before the instance launches and post-exit command runs after it exits.&lt;/p&gt;&lt;p&gt;Both will be run in the launcher&apos;s working folder with extra environment variables:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;$INST_NAME - Name of the instance&lt;/li&gt;&lt;li&gt;$INST_ID - ID of the instance (its folder name)&lt;/li&gt;&lt;li&gt;$INST_DIR - absolute path of the instance&lt;/li&gt;&lt;li&gt;$INST_MC_DIR - absolute path of Minecraft&lt;/li&gt;&lt;li&gt;$INST_JAVA - Java binary used for launch&lt;/li&gt;&lt;li&gt;$INST_JAVA_ARGS - command-line parameters used for launch&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Wrapper command allows launching using an extra wrapper program (like &apos;optirun&apos; on Linux)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;预启动命令会在实例启动之前运行，退出后命令会在实例退出之后运行。&lt;/p&gt;&lt;p&gt;它们均会在启动器的工作目录运行，并带有以下额外环境变量：&lt;/p&gt;&lt;ul&gt;&lt;li&gt;$INST_NAME——实例名&lt;/li&gt;&lt;li&gt;$INST_ID——实例 ID（其所在文件夹名）&lt;/li&gt;&lt;li&gt;$INST_DIR——实例文件夹的绝对路径&lt;/li&gt;&lt;li&gt;$INST_MC_DIR——Minecraft 的绝对路径&lt;/li&gt;&lt;li&gt;$INST_JAVA——运行所使用的 Java 可执行文件&lt;/li&gt;&lt;li&gt;$INST_JAVA_ARGS——运行所使用的命令行参数&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;包装器命令允许使用一个额外的包装器程序来运行游戏（例如 Linux 上的“optirun”）&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>CustomCommandsPage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/CustomCommandsPage.h" line="52"/>
        <source>Custom Commands</source>
        <translation>自定义命令</translation>
    </message>
</context>
<context>
    <name>CustomPage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="58"/>
        <source>Filter</source>
        <translation>过滤器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="68"/>
        <source>Releases</source>
        <translation>发行版</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="81"/>
        <source>Snapshots</source>
        <translation>快照版</translation>
    </message>
    <message>
        <source>Old Snapshots</source>
        <translation type="vanished">旧快照</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="91"/>
        <source>Betas</source>
        <translation>Beta</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="101"/>
        <source>Alphas</source>
        <translation>Alpha</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="111"/>
        <source>Experiments</source>
        <translation>实验性版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="134"/>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="258"/>
        <source>Refresh</source>
        <translation>刷新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="172"/>
        <source>Mod Loader</source>
        <translation>Mod 加载器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="182"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="195"/>
        <source>NeoForge</source>
        <translation>NeoForge</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="205"/>
        <source>Forge</source>
        <translation>Forge</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="215"/>
        <source>Fabric</source>
        <translation>Fabric</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="225"/>
        <source>Quilt</source>
        <translation>Quilt</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.ui" line="235"/>
        <source>LiteLoader</source>
        <translation>LiteLoader</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.h" line="56"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.cpp" line="117"/>
        <source>No Minecraft version is selected.</source>
        <translation>未选择 Minecraft 版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.cpp" line="123"/>
        <source>No mod loader is selected.</source>
        <translation>未选择 Mod 加载器。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/CustomPage.cpp" line="154"/>
        <source>No versions are currently available for Minecraft %1</source>
        <translation>目前没有可用于 Minecraft %1 的版本</translation>
    </message>
</context>
<context>
    <name>DataMigrationTask</name>
    <message>
        <location filename="src/launcher/DataMigrationTask.cpp" line="26"/>
        <source>Scanning files...</source>
        <translation>正在扫描文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/DataMigrationTask.cpp" line="48"/>
        <source>Failed to scan source path.</source>
        <translation>无法扫描源路径。</translation>
    </message>
    <message>
        <location filename="src/launcher/DataMigrationTask.cpp" line="61"/>
        <source>Copying %1…</source>
        <translation>正在复制 %1……</translation>
    </message>
    <message>
        <location filename="src/launcher/DataMigrationTask.cpp" line="73"/>
        <location filename="src/launcher/DataMigrationTask.cpp" line="95"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/DataMigrationTask.cpp" line="86"/>
        <source>Some paths could not be copied!</source>
        <translation>部分路径无法被复制！</translation>
    </message>
</context>
<context>
    <name>DirectJavaLaunch</name>
    <message>
        <source>The wrapper command &quot;%1&quot; couldn&apos;t be found.</source>
        <translation type="vanished">找不到包装器命令“%1”。</translation>
    </message>
    <message>
        <source>Could not launch Minecraft!</source>
        <oldsource>Could not launch minecraft!</oldsource>
        <extracomment>Error message displayed if instance can&apos;t start</extracomment>
        <translation type="vanished">无法启动 Minecraft ！</translation>
    </message>
    <message>
        <source>Game crashed.</source>
        <translation type="vanished">游戏已崩溃。</translation>
    </message>
</context>
<context>
    <name>EditAccountDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/EditAccountDialog.ui" line="14"/>
        <source>Login</source>
        <translation>登录</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/EditAccountDialog.ui" line="33"/>
        <source>Email</source>
        <translation>电子邮箱</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/EditAccountDialog.ui" line="43"/>
        <source>Password</source>
        <translation>密码</translation>
    </message>
</context>
<context>
    <name>EnsureMetadataTask</name>
    <message>
        <location filename="src/launcher/modplatform/EnsureMetadataTask.cpp" line="88"/>
        <source>Checking if mods have metadata...</source>
        <translation>正在检查 Mod 是否有元数据……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/EnsureMetadataTask.cpp" line="165"/>
        <source>Requesting metadata information from %1...</source>
        <translation>正在向 %1 获取 Mod 元数据信息……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/EnsureMetadataTask.cpp" line="167"/>
        <source>Requesting metadata information from %1 for &apos;%2&apos;...</source>
        <translation>正在向 %1 获取“%2”的元数据信息……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/EnsureMetadataTask.cpp" line="246"/>
        <location filename="src/launcher/modplatform/EnsureMetadataTask.cpp" line="335"/>
        <source>Parsing API response from Modrinth for &apos;%1&apos;...</source>
        <translation>正在处理 Modrinth 对“%1”的 API 响应……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/EnsureMetadataTask.cpp" line="402"/>
        <location filename="src/launcher/modplatform/EnsureMetadataTask.cpp" line="469"/>
        <source>Parsing API response from CurseForge for &apos;%1&apos;...</source>
        <translation>正在解析 CurseForge 对“%1”的 API 响应……</translation>
    </message>
</context>
<context>
    <name>EntitlementsStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/EntitlementsStep.cpp" line="20"/>
        <source>Determining game ownership.</source>
        <translation>正在检查您是否已购买游戏。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/EntitlementsStep.cpp" line="52"/>
        <source>Got entitlements</source>
        <translation>已购买过游戏</translation>
    </message>
</context>
<context>
    <name>EnvironmentVariables</name>
    <message>
        <location filename="src/launcher/ui/widgets/EnvironmentVariables.ui" line="14"/>
        <source>Form</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/EnvironmentVariables.ui" line="32"/>
        <source>&amp;Environment Variables</source>
        <translation>环境变量(&amp;E)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/EnvironmentVariables.ui" line="60"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/EnvironmentVariables.ui" line="65"/>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/EnvironmentVariables.ui" line="75"/>
        <source>&amp;Add</source>
        <translation>添加(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/EnvironmentVariables.ui" line="82"/>
        <source>&amp;Remove</source>
        <translation>删除(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/EnvironmentVariables.ui" line="89"/>
        <source>&amp;Clear</source>
        <translation>清除(&amp;C)</translation>
    </message>
</context>
<context>
    <name>EnvironmentVariablesPage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/EnvironmentVariablesPage.cpp" line="44"/>
        <source>Environment Variables</source>
        <translation>环境变量</translation>
    </message>
</context>
<context>
    <name>ExportInstanceDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportInstanceDialog.ui" line="14"/>
        <source>Export Instance</source>
        <translation>导出该实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportInstanceDialog.cpp" line="132"/>
        <source>Export %1</source>
        <translation>导出 %1</translation>
    </message>
    <message>
        <source>Overwrite?</source>
        <translation type="vanished">覆盖文件？</translation>
    </message>
    <message>
        <source>This file already exists. Do you want to overwrite it?</source>
        <translation type="vanished">文件已经存在，你想覆盖它吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportInstanceDialog.cpp" line="144"/>
        <location filename="src/launcher/ui/dialogs/ExportInstanceDialog.cpp" line="152"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportInstanceDialog.cpp" line="144"/>
        <source>Unable to export instance</source>
        <translation>无法导出实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportInstanceDialog.cpp" line="156"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
</context>
<context>
    <name>ExportMrPackDialog</name>
    <message>
        <source>Export Modrinth Pack</source>
        <translation type="vanished">导出 Modrinth 整合包</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="vanished">信息</translation>
    </message>
    <message>
        <source>Summary</source>
        <translation type="vanished">简介</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="vanished">名称</translation>
    </message>
    <message>
        <source>Version</source>
        <translation type="vanished">版本</translation>
    </message>
    <message>
        <source>1.0.0</source>
        <translation type="vanished">1.0.0</translation>
    </message>
    <message>
        <source>Files</source>
        <translation type="vanished">文件</translation>
    </message>
    <message>
        <source>Export %1</source>
        <translation type="vanished">导出 %1</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="vanished">错误</translation>
    </message>
    <message>
        <source>Task aborted</source>
        <translation type="vanished">任务已终止</translation>
    </message>
    <message>
        <source>The task has been aborted by the user.</source>
        <translation type="vanished">任务被用户终止。</translation>
    </message>
    <message>
        <source>Abort</source>
        <translation type="vanished">中止</translation>
    </message>
</context>
<context>
    <name>ExportPackDialog</name>
    <message>
        <source>Export Pack</source>
        <translation type="vanished">导出包</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="vanished">信息</translation>
    </message>
    <message>
        <source>Summary</source>
        <translation type="vanished">简介</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="20"/>
        <source>&amp;Description</source>
        <translation>简介(&amp;D)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="56"/>
        <source>&amp;Summary</source>
        <translation>综述(&amp;S)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="26"/>
        <source>&amp;Name</source>
        <oldsource>Name</oldsource>
        <translation>名称(&amp;N)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="39"/>
        <source>&amp;Version</source>
        <translation>版本(&amp;V)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="89"/>
        <source>&amp;Options</source>
        <translation>选项(&amp;O)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="95"/>
        <source>&amp;Files</source>
        <translation>文件(&amp;F)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="121"/>
        <source>&amp;Mark disabled files as optional</source>
        <translation>将已禁用文件标记为可选(&amp;M)</translation>
    </message>
    <message>
        <source>Version</source>
        <translation type="vanished">版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="49"/>
        <source>1.0.0</source>
        <translation>1.0.0</translation>
    </message>
    <message>
        <source>Files</source>
        <translation type="vanished">文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.cpp" line="49"/>
        <source>Export Modrinth Pack</source>
        <translation>导出 Modrinth 整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.cpp" line="56"/>
        <source>Export CurseForge Pack</source>
        <translation>导出 CurseForge 整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.ui" line="73"/>
        <source>&amp;Author</source>
        <translation>作者(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.cpp" line="131"/>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.cpp" line="138"/>
        <source>Export %1</source>
        <translation>导出 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.cpp" line="156"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.cpp" line="158"/>
        <source>Task aborted</source>
        <translation>任务已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.cpp" line="158"/>
        <source>The task has been aborted by the user.</source>
        <translation>任务已被用户终止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportPackDialog.cpp" line="164"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
</context>
<context>
    <name>ExportToModListDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="14"/>
        <source>Export Pack to ModList</source>
        <translation>将包导出到 Mod 列表</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="25"/>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="32"/>
        <source>HTML</source>
        <translation>HTML</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="37"/>
        <source>Markdown</source>
        <translation>Markdown</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="42"/>
        <source>Plaintext</source>
        <translation>纯文本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="47"/>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="52"/>
        <source>CSV</source>
        <translation>CSV</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="57"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="71"/>
        <source>Template</source>
        <translation>模板</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="96"/>
        <source>Optional Info</source>
        <translation>可选介绍</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="102"/>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="130"/>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="109"/>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="137"/>
        <source>Authors</source>
        <translation>作者</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="116"/>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="144"/>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="123"/>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="151"/>
        <source>Filename</source>
        <translation>文件名</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="170"/>
        <source>Format</source>
        <translation>格式</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="180"/>
        <source>Result</source>
        <translation>结果</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="209"/>
        <source>This depends on the mods&apos; metadata. To ensure it is available, run an update on the instance. Installing the updates isn&apos;t necessary.</source>
        <translation>这取决于这些 Mod 的元数据。如果要保证其可用，可以该实例中运行更新，而不需要将更新安装到实例中。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.ui" line="223"/>
        <source>Copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ExportToModListDialog.cpp" line="162"/>
        <source>Export %1</source>
        <translation>导出 %1</translation>
    </message>
</context>
<context>
    <name>ExternalResourcesPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="35"/>
        <source>Filter:</source>
        <translation>过滤器：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="74"/>
        <source>Actions</source>
        <translation>动作</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="98"/>
        <source>&amp;Add</source>
        <translation>添加(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="101"/>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="106"/>
        <source>&amp;Remove</source>
        <translation>删除(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="109"/>
        <source>Remove selected item</source>
        <translation>删除所选项目</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="114"/>
        <source>&amp;Enable</source>
        <translation>启用(&amp;E)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="117"/>
        <source>Enable selected item</source>
        <translation>启用所选项目</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="122"/>
        <source>&amp;Disable</source>
        <translation>禁用(&amp;D)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="125"/>
        <source>Disable selected item</source>
        <translation>禁用所选项目</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="130"/>
        <source>View &amp;Configs</source>
        <translation>查看配置文件夹(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="133"/>
        <source>Open the &apos;config&apos; folder in the system file manager.</source>
        <translation>在文件管理器中打开“config”文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="138"/>
        <source>View &amp;Folder</source>
        <translation>查看文件夹(&amp;F)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="146"/>
        <source>&amp;Download</source>
        <translation>下载(&amp;D)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="149"/>
        <source>Download a new resource</source>
        <translation>下载新资源</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="168"/>
        <source>Check for &amp;Updates</source>
        <translation>检查更新(&amp;U)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="171"/>
        <source>Try to check or update all selected resources (all resources if none are selected)</source>
        <oldsource>&quot;Tries to find / update all selected resources (all resources if none is selected)&quot;</oldsource>
        <translation>尝试检查或更新所有选中的资源（默认检查并更新所有资源）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="179"/>
        <source>Export modlist</source>
        <translation>导出模组列表</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="182"/>
        <source>Export mod&apos;s metadata to text</source>
        <translation>导出模组元数据为文本文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="157"/>
        <source>Visit mod&apos;s page</source>
        <translation>访问 Mod 页面</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.ui" line="160"/>
        <source>Go to mods home page</source>
        <translation>前往 Mod 主页</translation>
    </message>
    <message>
        <source>Remove metadata</source>
        <translation type="vanished">删除元数据</translation>
    </message>
    <message>
        <source>Remove mod&apos;s metadata</source>
        <translation type="vanished">删除模组的元数据</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="118"/>
        <source>Context menu</source>
        <translation>功能表</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="202"/>
        <source>Select %1</source>
        <comment>Select whatever type of files the page contains. Example: &apos;Loader Mods&apos;</comment>
        <translation>选择 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="232"/>
        <source>You are about to remove %1 items.
This may be permanent and they will be gone from the folder.

Are you sure?</source>
        <translation>您即将删除 %1 项项目。
确定后可能会永久删除。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="237"/>
        <source>You are about to remove the folder &quot;%1&quot;.
This may be permanent and it will be gone from the parent folder.

Are you sure?</source>
        <translation>您即将删除文件夹“%1”。
确定后可能会永久删除。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="244"/>
        <source>Confirm Removal</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="258"/>
        <source>Confirm Delete</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="259"/>
        <source>If you remove this resource while the game is running it may crash your game.
Are you sure you want to do this?</source>
        <translation>在游戏运行时删除此资源，游戏可能会崩溃。
您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="279"/>
        <source>Confirm disable</source>
        <translation>确认禁用</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="280"/>
        <source>If you disable this resource while the game is running it may crash your game.
Are you sure you want to do this?</source>
        <translation>在游戏运行时禁用此资源，游戏可能会崩溃。
您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="326"/>
        <source> (%1 installed, %2 selected)</source>
        <translation> （%1/%2）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ExternalResourcesPage.cpp" line="328"/>
        <source> (%1 installed)</source>
        <translation> （已安装 %1 个）</translation>
    </message>
</context>
<context>
    <name>ExternalToolsPage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="50"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="87"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="124"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="169"/>
        <source>Browse</source>
        <translation>浏览</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="59"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="96"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="133"/>
        <source>Check</source>
        <translation>检查安装</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="150"/>
        <source>External Editors (leave empty for system default)</source>
        <translation>外部编辑器（默认使用系统默认编辑器）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.ui" line="159"/>
        <source>&amp;Text Editor:</source>
        <oldsource>Text Editor:</oldsource>
        <translation>文本编辑器(&amp;T)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.h" line="54"/>
        <source>External Tools</source>
        <translation>外部工具</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="102"/>
        <source>JProfiler Folder</source>
        <translation>JProfiler 文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="108"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="120"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="137"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="149"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="170"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="182"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="108"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="120"/>
        <source>Error while checking JProfiler install:
%1</source>
        <translation>在检查 JProfiler 安装时出现错误：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="122"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="151"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="184"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="122"/>
        <source>JProfiler setup seems to be OK</source>
        <translation>JProfiler 配置正确</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="131"/>
        <source>JVisualVM Executable</source>
        <translation>JVisualVM 可执行文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="137"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="149"/>
        <source>Error while checking JVisualVM install:
%1</source>
        <translation>在检查 JVisualVM 安装时出现错误：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="151"/>
        <source>JVisualVM setup seems to be OK</source>
        <translation>JVisualVM 配置正确</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="161"/>
        <source>MCEdit Application</source>
        <translation>MCEdit 应用程序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="163"/>
        <source>MCEdit Folder</source>
        <translation>MCEdit 文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="170"/>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="182"/>
        <source>Error while checking MCEdit install:
%1</source>
        <translation>在检查 MCEdit 安装时出现错误：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="184"/>
        <source>MCEdit setup seems to be OK</source>
        <translation>MCEdit 配置正确</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="190"/>
        <source>JSON Editor</source>
        <translation>JSON 编辑器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="208"/>
        <source>Invalid</source>
        <translation>无效</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ExternalToolsPage.cpp" line="208"/>
        <source>The file chosen does not seem to be an executable</source>
        <translation>选中的文件似乎不是可执行文件</translation>
    </message>
</context>
<context>
    <name>ExtractNatives</name>
    <message>
        <location filename="src/launcher/minecraft/launch/ExtractNatives.cpp" line="87"/>
        <source>Couldn&apos;t extract native jar &apos;%1&apos; to destination &apos;%2&apos;</source>
        <translation>无法解压原 Jar 文件 “%1” 到目标位置 “%2”</translation>
    </message>
</context>
<context>
    <name>FMLLibrariesTask</name>
    <message>
        <location filename="src/launcher/minecraft/update/FMLLibrariesTask.cpp" line="39"/>
        <source>Checking for FML libraries...</source>
        <translation>正在检查 FML 库文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/FMLLibrariesTask.cpp" line="60"/>
        <source>Downloading FML libraries...</source>
        <translation>下载 FML 库文件中……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/FMLLibrariesTask.cpp" line="72"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/FMLLibrariesTask.cpp" line="88"/>
        <source>Copying FML libraries into the instance...</source>
        <translation>正在复制 FML 库文件到实例中……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/FMLLibrariesTask.cpp" line="97"/>
        <source>Failed creating FML library folder inside the instance.</source>
        <translation>在实例中创建 FML 库文件夹时出错。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/FMLLibrariesTask.cpp" line="101"/>
        <source>Failed copying Forge/FML library: %1.</source>
        <translation>复制 Forge 或 FML 库文件时出错：%1。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/FMLLibrariesTask.cpp" line="114"/>
        <source>Failed to download the following files:
%1

Reason:%2
Please try again.</source>
        <translation>下载以下文件时出错：
%1

原因：%2
请重试。</translation>
    </message>
</context>
<context>
    <name>FTBImportAPP::FilterModel</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ListModel.cpp" line="145"/>
        <source>Sort by Name</source>
        <translation>按名称排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ListModel.cpp" line="146"/>
        <source>Sort by Game Version</source>
        <translation>按游戏版本排序</translation>
    </message>
</context>
<context>
    <name>FTBImportAPP::ImportFTBPage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ImportFTBPage.h" line="44"/>
        <source>FTB App Import</source>
        <translation>从 FTB 导入</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ImportFTBPage.ui" line="56"/>
        <source>Search and filter...</source>
        <translation>搜索和过滤…</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ImportFTBPage.ui" line="66"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ImportFTBPage.ui" line="73"/>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ImportFTBPage.cpp" line="62"/>
        <source>Select FTBApp instances directory</source>
        <translation>选择 FTBApp 实例目录</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ImportFTBPage.ui" line="92"/>
        <source>Note: If your FTB instances are not in the default location, select it using the button next to search.</source>
        <translation>注意：如果您的 FTB 实例不在默认位置，请使用旁边的按钮搜索并选择它。</translation>
    </message>
</context>
<context>
    <name>FTBImportAPP::ListModel</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ListModel.cpp" line="114"/>
        <location filename="src/launcher/ui/pages/modplatform/import_ftb/ListModel.cpp" line="130"/>
        <source>Minecraft %1</source>
        <translation>Minecraft %1</translation>
    </message>
</context>
<context>
    <name>FTBImportAPP::PackInstallTask</name>
    <message>
        <location filename="src/launcher/modplatform/import_ftb/PackInstallTask.cpp" line="35"/>
        <source>Copying files...</source>
        <translation>正在复制文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/import_ftb/PackInstallTask.cpp" line="51"/>
        <source>Copying settings...</source>
        <translation>正在复制设置……</translation>
    </message>
</context>
<context>
    <name>Flame::FileResolvingTask</name>
    <message>
        <location filename="src/launcher/modplatform/flame/FileResolvingTask.cpp" line="31"/>
        <source>Resolving mod IDs...</source>
        <translation>正在解析 Mod ID……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FileResolvingTask.cpp" line="89"/>
        <source>Invalid data returned from the API.</source>
        <translation>API返回了无效的数据。</translation>
    </message>
    <message>
        <source>Some mod ID resolving tasks failed.</source>
        <translation type="vanished">无法解析部分模组 ID。</translation>
    </message>
</context>
<context>
    <name>FlameCheckUpdate</name>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameCheckUpdate.cpp" line="123"/>
        <source>Preparing mods for CurseForge...</source>
        <translation>准备从 CurseForge 获取 Mod……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameCheckUpdate.cpp" line="128"/>
        <source>Disabled mods won&apos;t be updated, to prevent mod duplication issues!</source>
        <translation>为避免 Mod 重复的问题，被停用的 Mod 将不会被更新！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameCheckUpdate.cpp" line="132"/>
        <source>Getting API response from CurseForge for &apos;%1&apos;...</source>
        <oldsource>Getting API response from CurseForge for &apos;%1&apos;</oldsource>
        <translation>正在获取 CurseForge 对“%1”的 API 响应……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameCheckUpdate.cpp" line="143"/>
        <source>Parsing the API response from CurseForge for &apos;%1&apos;...</source>
        <translation>正在解析 CurseForge 对“%1”的 API 响应……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameCheckUpdate.cpp" line="146"/>
        <source>No valid version found for this mod. It&apos;s probably unavailable for the current game version / mod loader.</source>
        <translation>未找到该 Mod 的有效版本。可能由于 Mod 没有适配该游戏版本或该 Mod 加载器。</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameCheckUpdate.cpp" line="154"/>
        <source>Mod has a new update available, but is not downloadable using CurseForge.</source>
        <oldsource>Mod has a new update available, but is opted-out on CurseForge</oldsource>
        <translation>Mod 有可用的更新，但禁止了第三方启动器从 CurseForge 上下载。</translation>
    </message>
</context>
<context>
    <name>FlameCreationTask</name>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="110"/>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="328"/>
        <source>Could not understand pack manifest:
</source>
        <translation>无法解理解包清单：
</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="115"/>
        <source> (version %1)</source>
        <translation> （%1 版本）</translation>
    </message>
    <message>
        <source>Similar modpack was found!</source>
        <translation type="vanished">找到相似的mod整合包!</translation>
    </message>
    <message>
        <source>One or more of your instances are from this same modpack%1. Do you want to create a separate instance, or update the existing one?

NOTE: Make sure you made a backup of your important instance data before updating, as worlds can be corrupted and some configuration may be lost (due to pack overrides).</source>
        <translation type="vanished">你拥有一个或更多的实例说基于此整合包%1。你想创建一个单独实例，还是更新现有的实例？

注：在更新实例前请确保备份了实例的重要数据，存档与配置文件可能会因整合包覆盖而被损坏或遗失。</translation>
    </message>
    <message>
        <source>Update existing instance</source>
        <translation type="vanished">更新现有实例</translation>
    </message>
    <message>
        <source>Create new instance</source>
        <translation type="vanished">创建新实例</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="vanished">取消</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="241"/>
        <source>No index file.</source>
        <translation>无索引文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="242"/>
        <source>We couldn&apos;t find a suitable index file for the older version. This may cause some of the files to be duplicated. Do you want to continue?</source>
        <translation>我们无法找到适合旧版本的索引文件。这可能导致部分文件重复。是否继续？</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="266"/>
        <source>Failed to get local metadata index for %1</source>
        <translation>无法获取 %1 的本地元数据索引</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="299"/>
        <source>Failed to find version for %1 loader</source>
        <translation>无法找到 %1 加载器的合适版本</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="304"/>
        <source>No loader version set for modpack!</source>
        <translation>没有设置整合包的 Mod 加载器版本！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="340"/>
        <source>Could not rename the overrides folder:
</source>
        <translation>无法重命名覆盖的目录：
</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="345"/>
        <source>The specified overrides folder (%1) is missing. Maybe the modpack was already used before?</source>
        <translation>未找到指定覆盖的目录（%1）。或许这个整合包之前已经用过了？</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="374"/>
        <source>Unknown mod loader in manifest: %1</source>
        <translation>清单中包含未知的 Mod 加载器： %1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="388"/>
        <source>Mysterious trailing dots removed from Minecraft version while importing pack.</source>
        <translation>导入包时从 Minecraft 版本移除了神秘的拖尾点。</translation>
    </message>
    <message>
        <source>Could not map recommended Forge version for Minecraft %1</source>
        <translation type="vanished">无法为 Minecraft %1 映射推荐的 Forge 版本</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="442"/>
        <source>Unable to resolve mod IDs:
</source>
        <translation>无法解析 Mod ID：
</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="495"/>
        <source>Blocked mods found</source>
        <translation>找到被屏蔽的 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="496"/>
        <source>The following files are not available for download in third party launchers.&lt;br/&gt;You will need to manually download them and add them to the instance.</source>
        <oldsource>The following mods were blocked on third party launchers.&lt;br/&gt;You will need to manually download them and add them to the modpack</oldsource>
        <translation>以下文件无法在第三方启动器中下载。&lt;br/&gt;您需要手动下载它们并将它们添加到实例中。</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="518"/>
        <source>Mod Download Flame</source>
        <translation>Mod 下载 Flame</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="589"/>
        <source>%1 out of %2 complete</source>
        <translation>已完成 %1/%2</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="603"/>
        <source>Copying Blocked Mods...</source>
        <translation>正在复制被屏蔽的 Mod……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="616"/>
        <source>Copying Blocked Mods (%1 out of %2 are done)</source>
        <translation>正在复制被屏蔽的 Mod（%1/%2）</translation>
    </message>
    <message>
        <source>Mod download</source>
        <translation type="vanished">模组下载</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="555"/>
        <source>This &apos;Folder&apos; may need extracting: %1</source>
        <translation>此 “目录” 可能需要解压：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="569"/>
        <source>Nesting modpacks in modpacks is not implemented, nothing was downloaded: %1</source>
        <translation>不支持在整合包中嵌套整合包。未下载任何数据：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="574"/>
        <source>Unrecognized/unhandled PackageType for: %1</source>
        <translation>无法识别的或未处理的包类型：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameInstanceCreationTask.cpp" line="595"/>
        <source>Downloading mods...</source>
        <translation>正在下载 Mod……</translation>
    </message>
</context>
<context>
    <name>FlameManagedPackPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="414"/>
        <source>&lt;h1&gt;Hey there!&lt;/h1&gt;&lt;h4&gt;It seems like your Pack ID is null. This is because of a bug in older versions of the launcher.&lt;br/&gt;Unfortunately, we can&apos;t do the proper API requests without this information.&lt;br/&gt;&lt;br/&gt;So, in order for this feature to work, you will need to re-download the modpack from the built-in downloader.&lt;br/&gt;&lt;br/&gt;Don&apos;t worry though, it will ask you to update this instance instead, so you&apos;ll not lose this instance!&lt;/h4&gt;</source>
        <translation>&lt;h1&gt;您好！ &lt;/h1&gt;&lt;h4&gt;由于旧版本启动器中存在的漏洞，您的 Pack ID 为空。 &lt;br/&gt;而执行正确的 API 请求需要此信息。 &lt;br/&gt;&lt;br/&gt;为了使该功能正常工作， 您需要用内置下载器重新下载整合包。 &lt;br/&gt;&lt;br/&gt;下载器会从让您该实例进行更新，所以不必担心丢失该实例！ &lt;/h4&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="476"/>
        <source>%1 (Current)</source>
        <translation>%1（当前）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="541"/>
        <source>Choose update file</source>
        <translation>选择更新文件</translation>
    </message>
</context>
<context>
    <name>FlameModPage</name>
    <message>
        <source>Search and filter...</source>
        <oldsource>Search and filter ...</oldsource>
        <translation type="obsolete">搜索和过滤……</translation>
    </message>
    <message>
        <source>Search</source>
        <translation type="obsolete">搜索</translation>
    </message>
    <message>
        <source>Sort by Featured</source>
        <translation type="vanished">按精选内容排序</translation>
    </message>
    <message>
        <source>Sort by Popularity</source>
        <translation type="vanished">按人气排序</translation>
    </message>
    <message>
        <source>Sort by Last Updated</source>
        <oldsource>Sort by last updated</oldsource>
        <translation type="vanished">按最后更新时间排序</translation>
    </message>
    <message>
        <source>Sort by Name</source>
        <translation type="vanished">按名称排序</translation>
    </message>
    <message>
        <source>Sort by Author</source>
        <translation type="vanished">按作者排序</translation>
    </message>
    <message>
        <source>Sort by Downloads</source>
        <translation type="vanished">按下载量排序</translation>
    </message>
    <message>
        <source> by </source>
        <translation type="vanished"> 作者 </translation>
    </message>
    <message>
        <source>CurseForge</source>
        <translation type="obsolete">CurseForge</translation>
    </message>
</context>
<context>
    <name>FlamePackExportTask</name>
    <message>
        <location filename="src/launcher/modplatform/flame/FlamePackExportTask.cpp" line="64"/>
        <source>Searching for files...</source>
        <translation>搜索文件中……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlamePackExportTask.cpp" line="86"/>
        <source>Could not search for files</source>
        <translation>无法找到文件</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlamePackExportTask.cpp" line="103"/>
        <source>Finding file hashes...</source>
        <translation>搜索文件哈希......</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlamePackExportTask.cpp" line="185"/>
        <source>Finding versions for hashes...</source>
        <translation>搜索版本哈希......</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlamePackExportTask.cpp" line="236"/>
        <location filename="src/launcher/modplatform/flame/FlamePackExportTask.cpp" line="298"/>
        <source>Parsing API response from CurseForge for &apos;%1&apos;...</source>
        <translation>正在解析 CurseForge 对“%1”的 API 响应……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlamePackExportTask.cpp" line="255"/>
        <source>Finding project info from CurseForge...</source>
        <translation>正在CurseForge中寻找项目信息......</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlamePackExportTask.cpp" line="334"/>
        <source>Adding files...</source>
        <translation>添加文件中……</translation>
    </message>
    <message>
        <source>Could not create file</source>
        <translation type="vanished">无法新增文件</translation>
    </message>
    <message>
        <source>Could not create index</source>
        <translation type="vanished">无法创建索引</translation>
    </message>
    <message>
        <source>Could not read and compress %1</source>
        <translation type="vanished">无法读取和压缩 %1</translation>
    </message>
    <message>
        <source>A zip error occurred</source>
        <translation type="vanished">Zip 文件发生错误</translation>
    </message>
</context>
<context>
    <name>FlamePage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.ui" line="88"/>
        <source>Version selected:</source>
        <translation>要安装的版本：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.ui" line="44"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.ui" line="22"/>
        <source>Note: CurseForge allows creators to block access to third-party tools like Prism Launcher. As such, you may need to manually download some mods to be able to install a modpack.</source>
        <oldsource>Note: CurseForge allows creators to block access to third-party tools like PolyMC. As such, you may need to manually download some mods to be able to install a modpack.</oldsource>
        <translation>注意：CurseForge 允许创作者阻止从 Prism Launcher 等第三方应用中访问他们的作品。因此，您可能需要手动下载一些 Mod 才能安装整合包。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.ui" line="37"/>
        <source>Search and filter...</source>
        <oldsource>Search and filter ...</oldsource>
        <translation>搜索和筛选……</translation>
    </message>
    <message>
        <source>CurseForge</source>
        <translation type="vanished">CurseForge</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="79"/>
        <source>Sort by Featured</source>
        <oldsource>Sort by featured</oldsource>
        <translation>按精选内容排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="80"/>
        <source>Sort by Popularity</source>
        <oldsource>Sort by popularity</oldsource>
        <translation>按热度排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="81"/>
        <source>Sort by Last Updated</source>
        <oldsource>Sort by last updated</oldsource>
        <translation>按最后更新时间排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="82"/>
        <source>Sort by Name</source>
        <oldsource>Sort by name</oldsource>
        <translation>按名称排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="83"/>
        <source>Sort by Author</source>
        <oldsource>Sort by author</oldsource>
        <translation>按作者排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="84"/>
        <source>Sort by Total Downloads</source>
        <oldsource>Sort by total downloads</oldsource>
        <translation>按总下载量排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="197"/>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="215"/>
        <source>No version is available!</source>
        <translation>没有可用的版本！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="203"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="281"/>
        <source> by </source>
        <translation> 作者 </translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="286"/>
        <source>External links:</source>
        <translation>外部链接：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="290"/>
        <source>Issues: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>问题：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="292"/>
        <source>Wiki: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>Wiki：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/flame/FlamePage.cpp" line="294"/>
        <source>Source code: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>源代码：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>FoldersTask</name>
    <message>
        <location filename="src/launcher/minecraft/update/FoldersTask.cpp" line="50"/>
        <source>Failed to create folder for Minecraft binaries.</source>
        <oldsource>Failed to create folder for minecraft binaries.</oldsource>
        <translation>无法为 Minecraft 可执行文件创建文件夹。</translation>
    </message>
</context>
<context>
    <name>Ftb::FilterModel</name>
    <message>
        <source>Sort by Plays</source>
        <oldsource>Sort by plays</oldsource>
        <translation type="vanished">按游玩次数排序</translation>
    </message>
    <message>
        <source>Sort by Installs</source>
        <oldsource>Sort by installs</oldsource>
        <translation type="vanished">按安装数量排序</translation>
    </message>
    <message>
        <source>Sort by Name</source>
        <oldsource>Sort by name</oldsource>
        <translation type="vanished">按名称排序</translation>
    </message>
</context>
<context>
    <name>FtbPage</name>
    <message>
        <source>Version selected:</source>
        <translation type="vanished">所选版本：</translation>
    </message>
    <message>
        <source>Search and filter...</source>
        <oldsource>Search and filter ...</oldsource>
        <translation type="vanished">搜索和筛选……</translation>
    </message>
    <message>
        <source>FTB</source>
        <translation type="vanished">FTB</translation>
    </message>
</context>
<context>
    <name>GameOptions</name>
    <message>
        <location filename="src/launcher/minecraft/gameoptions/GameOptions.cpp" line="71"/>
        <source>Key</source>
        <translation>键</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/gameoptions/GameOptions.cpp" line="73"/>
        <source>Value</source>
        <translation>值</translation>
    </message>
</context>
<context>
    <name>GameOptionsPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/GameOptionsPage.h" line="61"/>
        <source>Game Options</source>
        <translation>游戏设置</translation>
    </message>
</context>
<context>
    <name>GameType</name>
    <message>
        <location filename="src/launcher/minecraft/World.cpp" line="91"/>
        <source>Survival</source>
        <translation>生存模式</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/World.cpp" line="93"/>
        <source>Creative</source>
        <translation>创造模式</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/World.cpp" line="95"/>
        <source>Adventure</source>
        <translation>冒险模式</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/World.cpp" line="97"/>
        <source>Spectator</source>
        <translation>观察者模式</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/World.cpp" line="102"/>
        <source>Unknown (%1)</source>
        <translation>未知（%1）</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/World.cpp" line="104"/>
        <source>Undefined</source>
        <translation>未定义</translation>
    </message>
</context>
<context>
    <name>GenericProfiler</name>
    <message>
        <location filename="src/launcher/tools/GenericProfiler.cpp" line="39"/>
        <source>Started process: %1</source>
        <translation>开始流程：%1</translation>
    </message>
</context>
<context>
    <name>GetModDependenciesTask</name>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/GetModDependenciesTask.cpp" line="51"/>
        <source>Get dependencies</source>
        <translation>获取前置 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/GetModDependenciesTask.cpp" line="188"/>
        <source>A network error occurred. Could not load project dependencies:%1</source>
        <oldsource>A network error occurred. Could not load project dependenies:%1</oldsource>
        <translation>发生网络错误。无法加载前置 Mod：%1</translation>
    </message>
</context>
<context>
    <name>GetSkinStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/GetSkinStep.cpp" line="12"/>
        <source>Getting skin.</source>
        <translation>正在获取皮肤。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/GetSkinStep.cpp" line="32"/>
        <source>Got skin</source>
        <translation>已获取到皮肤</translation>
    </message>
</context>
<context>
    <name>GoUpdate::DownloadTask</name>
    <message>
        <source>Loading version information...</source>
        <translation type="vanished">加载版本信息……</translation>
    </message>
    <message>
        <source>Failed to download version info files.</source>
        <translation type="vanished">无法下载版本信息文件。</translation>
    </message>
    <message>
        <source>Reading file list for new version...</source>
        <translation type="vanished">载入新版本的文件列表……</translation>
    </message>
    <message>
        <source>Reading file list for current version...</source>
        <translation type="vanished">正在载入当前版本的文件列表……</translation>
    </message>
    <message>
        <source>Processing file lists - figuring out how to install the update...</source>
        <translation type="vanished">处理文件列表中 - 正在确定安装方式……</translation>
    </message>
    <message>
        <source>Failed to process update lists...</source>
        <translation type="vanished">处理更新列表失败……</translation>
    </message>
    <message>
        <source>Downloading one update file.</source>
        <translation type="vanished">正在下载 1 个更新文件。</translation>
    </message>
    <message>
        <source>Downloading %1 update files.</source>
        <translation type="vanished">正在下载 %1 个更新文件。</translation>
    </message>
    <message>
        <source>Failed to download update files: %1</source>
        <translation type="vanished">下载更新文件失败：%1</translation>
    </message>
</context>
<context>
    <name>IconPickerDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/IconPickerDialog.ui" line="14"/>
        <source>Pick icon</source>
        <translation>选择图标</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/IconPickerDialog.cpp" line="63"/>
        <source>Add Icon</source>
        <translation>添加图标</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/IconPickerDialog.cpp" line="64"/>
        <source>Remove Icon</source>
        <translation>移除图标</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/IconPickerDialog.cpp" line="74"/>
        <source>Open Folder</source>
        <translation>打开文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/IconPickerDialog.cpp" line="102"/>
        <source>Select Icons</source>
        <extracomment>The title of the select icons open file dialog</extracomment>
        <translation>选择图标</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/IconPickerDialog.cpp" line="105"/>
        <source>Icons %1</source>
        <translation>图标 %1</translation>
    </message>
</context>
<context>
    <name>ImportPage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.ui" line="24"/>
        <source>Browse</source>
        <translation>浏览</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.ui" line="33"/>
        <source>The following file types are implemented (both for local files and URLs):</source>
        <translation>支持的文件类型如下（包括本地文件和远程 URL）：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.ui" line="43"/>
        <source>- CurseForge modpacks (ZIP / curseforge:// URL)</source>
        <oldsource>- CurseForge modpacks (ZIP)</oldsource>
        <translation>- CurseForge 整合包（.zip 压缩文件 / curseforge:// URL）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.ui" line="53"/>
        <source>- Modrinth modpacks (ZIP and mrpack)</source>
        <translation>- Modrinth 整合包（.zip 或 .mrpack）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.ui" line="63"/>
        <source>- Prism Launcher, PolyMC or MultiMC exported instances (ZIP)</source>
        <oldsource>- PolyMC / MultiMC exported instances (ZIP)</oldsource>
        <translation>- Prism Launcher、PolyMC 或 MultiMC 导出的实例（.zip）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.ui" line="73"/>
        <source>- Technic modpacks (ZIP)</source>
        <translation>- Technic 整合包（.zip）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.ui" line="98"/>
        <source>Local file or link to a direct download:</source>
        <translation>本地文件或直达下载的链接（即直接指向文件而非下载页面）：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.h" line="56"/>
        <source>Import</source>
        <oldsource>Import from zip</oldsource>
        <translation>导入</translation>
    </message>
    <message>
        <source>Modrinth pack (*.mrpack)</source>
        <translation type="vanished">Modrinth 整合包 (*.mrpack)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="140"/>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="153"/>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="171"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="154"/>
        <source>The modpack %1 is blocked for third-parties! Please download it manually.</source>
        <translation>整合包中的的%1将第三方禁用下载！请手动下载。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="171"/>
        <source>This url isn&apos;t a valid modpack !</source>
        <translation>这个 URL 不是一个有效的整合包！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="175"/>
        <source>Abort</source>
        <translation>关于</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="210"/>
        <source>Supported files</source>
        <translation>支持的文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="213"/>
        <source>Modrinth pack</source>
        <extracomment>Option for filtering for *.mrpack files when importing</extracomment>
        <translation>Modrinth 整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ImportPage.cpp" line="214"/>
        <source>Choose modpack</source>
        <translation>选择整合包</translation>
    </message>
    <message>
        <source>Zip (*.zip)</source>
        <translation type="vanished">Zip 压缩文件 (*.zip)</translation>
    </message>
</context>
<context>
    <name>ImportResourceDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ImportResourceDialog.ui" line="14"/>
        <source>Choose instance to import to</source>
        <translation>选择需要导入的实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ImportResourceDialog.ui" line="20"/>
        <source>Choose the instance you would like to import this resource pack to.</source>
        <translation>选择需要导入资源包的实例。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ImportResourceDialog.cpp" line="46"/>
        <source>Choose the instance you would like to import this %1 to.</source>
        <translation>选择需要导入 %1 的实例。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ImportResourceDialog.cpp" line="47"/>
        <source>File: %1</source>
        <translation>文件：%1</translation>
    </message>
</context>
<context>
    <name>ImportResourcePackDialog</name>
    <message>
        <source>Choose instance to import</source>
        <translation type="vanished">选择实例来导入</translation>
    </message>
    <message>
        <source>Choose the instance you would like to import this resource pack to.</source>
        <translation type="vanished">选择你想要导入此资源包的实例。</translation>
    </message>
</context>
<context>
    <name>Index</name>
    <message>
        <source>Name</source>
        <translation type="vanished">名称</translation>
    </message>
</context>
<context>
    <name>InfoFrame</name>
    <message>
        <location filename="src/launcher/ui/widgets/InfoFrame.cpp" line="133"/>
        <source>License: %1</source>
        <translation>许可证：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/InfoFrame.cpp" line="140"/>
        <source>Report issues to: </source>
        <translation>报告问题： </translation>
    </message>
</context>
<context>
    <name>InstallLoaderDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/InstallLoaderDialog.cpp" line="100"/>
        <source>&amp;Refresh</source>
        <translation>刷新(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/InstallLoaderDialog.cpp" line="133"/>
        <source>NeoForge</source>
        <translation>NeoForge</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/InstallLoaderDialog.cpp" line="135"/>
        <source>Forge</source>
        <translation>Forge</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/InstallLoaderDialog.cpp" line="137"/>
        <source>Fabric</source>
        <translation>Fabric</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/InstallLoaderDialog.cpp" line="139"/>
        <source>Quilt</source>
        <translation>Quilt</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/InstallLoaderDialog.cpp" line="141"/>
        <source>LiteLoader</source>
        <translation>LiteLoader</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/InstallLoaderDialog.cpp" line="147"/>
        <source>Install Loader</source>
        <translation>安装 Mod 加载器</translation>
    </message>
</context>
<context>
    <name>InstallLoaderPage</name>
    <message>
        <location filename="src/launcher/ui/dialogs/InstallLoaderDialog.cpp" line="43"/>
        <source>No versions are currently available for Minecraft %1</source>
        <translation>还没有可用于 Minecraft %1 的版本</translation>
    </message>
</context>
<context>
    <name>InstanceCardWidget</name>
    <message>
        <location filename="src/launcher/ui/widgets/InstanceCardWidget.ui" line="27"/>
        <source>&amp;Name:</source>
        <translation>名称(&amp;N)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/InstanceCardWidget.ui" line="40"/>
        <source>&amp;Group:</source>
        <translation>分组(&amp;G)：</translation>
    </message>
</context>
<context>
    <name>InstanceCopyTask</name>
    <message>
        <location filename="src/launcher/InstanceCopyTask.cpp" line="41"/>
        <source>Copying instance %1</source>
        <translation>正在复制实例 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceCopyTask.cpp" line="146"/>
        <source>Instance folder copy failed.</source>
        <translation>实例文件夹复制失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceCopyTask.cpp" line="184"/>
        <source>Instance folder copy has been aborted.</source>
        <translation>已终止复制实例文件夹。</translation>
    </message>
</context>
<context>
    <name>InstanceCreationTask</name>
    <message>
        <source>Creating instance from version %1</source>
        <translation type="vanished">正在从版本 %1 创建实例版本列表</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceCreationTask.cpp" line="29"/>
        <source>Error while creating new instance:
%1</source>
        <translation>创建新实例时出现错误：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceCreationTask.cpp" line="31"/>
        <source>Error while creating new instance.</source>
        <translation>创建新实例时出现错误。</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceCreationTask.cpp" line="42"/>
        <source>Removing old conflicting files...</source>
        <translation>正在删除旧的冲突文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceCreationTask.cpp" line="51"/>
        <source>Failed to remove old conflicting files.</source>
        <translation>无法删除旧的冲突文件。</translation>
    </message>
</context>
<context>
    <name>InstanceImportTask</name>
    <message>
        <location filename="src/launcher/InstanceImportTask.cpp" line="85"/>
        <source>Downloading modpack:
%1</source>
        <translation>正在下载整合包：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceImportTask.cpp" line="99"/>
        <source>Modpack download</source>
        <translation>下载整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceImportTask.cpp" line="148"/>
        <source>Attempting to determine instance type</source>
        <translation>正在尝试确定实例类型</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceImportTask.cpp" line="185"/>
        <source>Extracting modpack</source>
        <translation>正在解压整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceImportTask.cpp" line="155"/>
        <source>Unable to open supplied modpack zip file.</source>
        <translation>无法打开提供的整合包 Zip 文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceImportTask.cpp" line="182"/>
        <location filename="src/launcher/InstanceImportTask.cpp" line="258"/>
        <source>Archive does not contain a recognized modpack type.</source>
        <translation>压缩包未包含可识别的整合包类型。</translation>
    </message>
    <message>
        <source>Failed to extract modpack</source>
        <translation type="vanished">解压整合包失败</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceImportTask.cpp" line="237"/>
        <source>Could not fix permissions for %1</source>
        <translation>无法修复 %1 的权限</translation>
    </message>
    <message>
        <source>Instance import has been aborted.</source>
        <translation type="vanished">实例导入操作被中断。</translation>
    </message>
    <message>
        <source>Could not understand pack manifest:
</source>
        <translation type="vanished">无法解析包清单：
</translation>
    </message>
    <message>
        <source>Could not rename the overrides folder:
</source>
        <translation type="vanished">无法重命名覆盖的目录：
</translation>
    </message>
    <message>
        <source>The specified overrides folder (%1) is missing. Maybe the modpack was already used before?</source>
        <translation type="vanished">未找到指定的覆盖目录（%1）。或许Mod包之前已经使用过了？</translation>
    </message>
    <message>
        <source>Unknown mod loader in manifest: %1</source>
        <translation type="vanished">清单中包含未知的Mod加载器： %1</translation>
    </message>
    <message>
        <source>Mysterious trailing dots removed from Minecraft version while importing pack.</source>
        <translation type="vanished">在导入包时移除了 Minecraft 版本字符串结尾的迷之点。</translation>
    </message>
    <message>
        <source>Could not map recommended Forge version for Minecraft %1</source>
        <oldsource>Could not map recommended forge version for Minecraft %1</oldsource>
        <translation type="vanished">无法为以下 Minecraft 版本提供推荐的 Forge 版本：%1</translation>
    </message>
    <message>
        <source>Blocked mods found</source>
        <translation type="vanished">发现被屏蔽的Mod</translation>
    </message>
    <message>
        <source>The following mods were blocked on third party launchers.&lt;br/&gt;You will need to manually download them and add them to the modpack</source>
        <translation type="vanished">以下Mod屏蔽了第三方启动器。&lt;br/&gt;您需要手动下载它们并将它们添加到Mod包</translation>
    </message>
    <message>
        <source>Mod download</source>
        <translation type="vanished">Mod下载</translation>
    </message>
    <message>
        <source>This &apos;Folder&apos; may need extracting: %1</source>
        <translation type="vanished">此 “目录” 可能需要解压：%1</translation>
    </message>
    <message>
        <source>Nesting modpacks in modpacks is not implemented, nothing was downloaded: %1</source>
        <translation type="vanished">不支持在Mod包中嵌套Mod包。未下载任何数据：%1</translation>
    </message>
    <message>
        <source>Unrecognized/unhandled PackageType for: %1</source>
        <translation type="vanished">无法识别的或未被处理的包类型：%1</translation>
    </message>
    <message>
        <source>Downloading mods...</source>
        <translation type="vanished">正在下载Mod……</translation>
    </message>
    <message>
        <source>Unable to resolve mod IDs:
</source>
        <translation type="vanished">无法解析Mod ID：
</translation>
    </message>
    <message>
        <source>Optional mod detected!</source>
        <translation type="vanished">发现了可选的Mod！</translation>
    </message>
    <message>
        <source>One or more mods from this modpack are optional. They will be downloaded, but disabled by default!</source>
        <translation type="vanished">这个Mod包的一些Mod是可选的。他们将会被下载，但会被默认禁用！</translation>
    </message>
    <message>
        <source>Download URL for %1 is not a correctly formatted URL</source>
        <translation type="vanished">%1 的下载链接格式不正确</translation>
    </message>
    <message>
        <source>Could not rename the client overrides folder:
</source>
        <translation type="vanished">无法重命名客户端覆盖的文件夹：
</translation>
    </message>
    <message>
        <source>Filepath: %1&lt;br&gt;URL: &lt;a href=&apos;%2&apos;&gt;%2&lt;/a&gt;&lt;br&gt;</source>
        <translation type="vanished">文件路径: %1&lt;br&gt;链接: &lt;a href=&apos;%2&apos;&gt;%2&lt;/a&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Non-whitelisted mods found</source>
        <translation type="vanished">找到未列入白名单的模组</translation>
    </message>
    <message>
        <source>The following mods have URLs that are not whitelisted by Modrinth.
Proceed with caution!</source>
        <translation type="vanished">以下模组的链接未被 Modrinth 列入白名单。
谨慎行事！</translation>
    </message>
    <message>
        <source>Could not understand pack index:
</source>
        <translation type="vanished">无法解析包索引
</translation>
    </message>
</context>
<context>
    <name>InstanceList</name>
    <message>
        <location filename="src/launcher/InstanceList.cpp" line="185"/>
        <source>%1 Instance</source>
        <translation>%1 实例</translation>
    </message>
</context>
<context>
    <name>InstancePageProvider</name>
    <message>
        <source>Mods</source>
        <translation type="vanished">模组</translation>
    </message>
    <message>
        <source>Core mods</source>
        <translation type="vanished">核心模组</translation>
    </message>
    <message>
        <location filename="src/launcher/InstancePageProvider.h" line="54"/>
        <source>Edit Instance (%1)</source>
        <translation>编辑实例（%1）</translation>
    </message>
    <message>
        <source>Loader mods</source>
        <translation type="vanished">加载器模组</translation>
    </message>
</context>
<context>
    <name>InstanceSettingsPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="29"/>
        <source>Open Global Settings</source>
        <translation>打开全局设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="32"/>
        <source>The settings here are overrides for global settings.</source>
        <translation>此处的设置将会覆盖全局设置。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="52"/>
        <source>Java insta&amp;llation</source>
        <translation>Java 路径(&amp;L)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="90"/>
        <source>Auto-detect...</source>
        <translation>自动检测……</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="vanished">浏览...</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="97"/>
        <source>Test</source>
        <translation>测试</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="64"/>
        <source>If enabled, the launcher will not check if an instance is compatible with the selected Java version.</source>
        <translation>启用时，启动器将不会检查选中的 Java 是否与实例兼容。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="67"/>
        <source>Skip Java compatibility checks</source>
        <translation>跳过 Java 兼容性检查</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="112"/>
        <source>Memor&amp;y</source>
        <translation>内存(&amp;Y)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="131"/>
        <source>Minimum memory allocation:</source>
        <translation>最小内存分配：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="174"/>
        <source>The maximum amount of memory Minecraft is allowed to use.</source>
        <translation>Minecraft 可以使用的最大内存大小。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="152"/>
        <source>The amount of memory Minecraft is started with.</source>
        <translation>Minecraft 启动时分配的内存总量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="196"/>
        <source>The amount of memory available to store loaded Java classes.</source>
        <translation>可用于储存加载的 Java 类的内存量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="138"/>
        <source>Maximum memory allocation:</source>
        <translation>最大内存分配：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="79"/>
        <source>Browse</source>
        <translation>浏览</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="124"/>
        <source>PermGen:</source>
        <translation>永久代大小：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="145"/>
        <source>Note: Permgen is set automatically by Java 8 and later</source>
        <translation>注意：Java 8 及以后的版本会自动设置永久代大小</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="237"/>
        <source>Java argumen&amp;ts</source>
        <translation>Java 参数(&amp;T)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="256"/>
        <source>Game windows</source>
        <translation>游戏窗口</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="265"/>
        <source>Game Window</source>
        <translation>游戏窗口</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="277"/>
        <source>Start Minecraft maximized</source>
        <oldsource>Start Minecraft maximized?</oldsource>
        <translation>在启动时将 Minecraft 窗口最大化</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="286"/>
        <source>Window height:</source>
        <translation>窗口高度：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="293"/>
        <source>Window width:</source>
        <translation>窗口宽度：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="337"/>
        <source>Conso&amp;le Settings</source>
        <translation>控制台设置(&amp;L)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="349"/>
        <source>Show console while the game is running</source>
        <oldsource>Show console while the game is running?</oldsource>
        <translation>运行游戏时显示控制台</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="356"/>
        <source>Automatically close console when the game quits</source>
        <oldsource>Automatically close console when the game quits?</oldsource>
        <translation>退出游戏时自动关闭控制台</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="363"/>
        <source>Show console when the game crashes</source>
        <oldsource>Show console when the game crashes?</oldsource>
        <translation>游戏崩溃时显示控制台</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="385"/>
        <source>Close the launcher after game window opens</source>
        <translation>在游戏窗口出现后关闭启动器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="392"/>
        <source>Quit the launcher after game window closes</source>
        <translation>在游戏窗口关闭后退出启动器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="416"/>
        <source>Custom commands</source>
        <translation>自定义命令</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="426"/>
        <source>Environment variables</source>
        <translation>环境变量</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="436"/>
        <source>Workarounds</source>
        <translation>运行环境</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="445"/>
        <source>Native libraries</source>
        <translation>本地库</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="464"/>
        <source>&amp;GLFW library path</source>
        <translation>GLFW 图形库框架路径(&amp;G)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="474"/>
        <source>Use system installation of GLFW</source>
        <translation>使用系统 GLFW</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="457"/>
        <source>Use system installation of OpenAL</source>
        <translation>使用系统 OpenAL</translation>
    </message>
    <message>
        <source>Mod loader settings</source>
        <translation type="vanished">模组加载器设置</translation>
    </message>
    <message>
        <source>Disable Quilt Loader Beacon</source>
        <translation type="vanished">禁用 Quilt 加载器计数信标</translation>
    </message>
    <message>
        <source>Disable Quilt loader&apos;s beacon for counting monthly active users</source>
        <translation type="vanished">禁用 Quilt 加载器为计算月活跃用户发出的 Beacon</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="698"/>
        <source>Override default account</source>
        <translation>覆盖默认账号</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="718"/>
        <source>Account:</source>
        <translation>账号：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="373"/>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="600"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="488"/>
        <source>&amp;OpenAL library path</source>
        <translation>OpenAL 程序库路径(&amp;O)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="522"/>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="531"/>
        <source>Performance</source>
        <translation>性能</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="543"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable Feral Interactive&apos;s GameMode, to potentially improve gaming performance.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用 Feral Interactive&apos;s GameMode，可能会提高游戏性能。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="546"/>
        <source>Enable Feral GameMode</source>
        <translation>启用 Feral Interactive&apos;s GameMode</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="553"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable MangoHud&apos;s advanced performance overlay.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用 MangoHud 的高级性能覆盖。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="556"/>
        <source>Enable MangoHud</source>
        <translation>启用 MangoHud</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="563"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Use the discrete GPU instead of the primary GPU.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;使用独显替代核显（适用于双显卡用户）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="566"/>
        <source>Use discrete GPU</source>
        <translation>使用独显</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="573"/>
        <source>Use Zink, a Mesa OpenGL driver that implements OpenGL on top of Vulkan. Performance may vary depending on the situation. Note: If no suitable Vulkan driver is found, software rendering will be used.</source>
        <translation>使用 Zink（用来基于 Vulkan 上实现 OpenGL 的 Mesa OpenGL 驱动程序）。性能可能因情况而异。注：如果没有找到合适的 Vulkan 驱动程序，将使用软件渲染。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="576"/>
        <source>Use Zink</source>
        <translation>使用 Zink</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="606"/>
        <source>Legacy settings</source>
        <translation>旧版设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="618"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Emulates usages of old online services which are no longer operating.&lt;/p&gt;&lt;p&gt;Current fixes include: skin and online mode support.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Emulates usages of old online services which are no longer operating.&lt;/p&gt;&lt;p&gt;This currently allows modern skins to be used.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;模拟官方不再维护的旧在线服务。&lt;/p&gt;&lt;p&gt;目前包含：皮肤与在线模式支持。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="621"/>
        <source>Enable online fixes (experimental)</source>
        <translation>模拟旧版在线服务（实验性）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="634"/>
        <source>Override global game time settings</source>
        <translation>游戏时长</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="646"/>
        <source>Show time spent playing this instance</source>
        <translation>显示此实例的游玩时间</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="653"/>
        <source>Record time spent playing this instance</source>
        <translation>记录此实例的游玩时间</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="663"/>
        <source>Set a server to join on launch</source>
        <translation>启动游戏后直接加入服务器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.ui" line="683"/>
        <source>Server address:</source>
        <translation>服务器地址：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.h" line="59"/>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="345"/>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="352"/>
        <source>Path to %1 library file</source>
        <translation>&amp;1 程序库路径</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="368"/>
        <source>Feral Interactive&apos;s GameMode could not be found on your system.</source>
        <translation>无法在您的系统上找到 Feral Interactive&apos;s GameMode。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="373"/>
        <source>MangoHud could not be found on your system.</source>
        <translation>在您的系统上找不到 MangoHud 。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="400"/>
        <source>Select a Java version</source>
        <translation>选择 Java 版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="417"/>
        <source>Find Java executable</source>
        <translation>寻找 Java 可执行文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="524"/>
        <source>Your maximum memory allocation is smaller than the minimum value</source>
        <translation>您的最大内存分配小于允许的最小值</translation>
    </message>
    <message>
        <source>No default account</source>
        <translation type="vanished">没有默认账户</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="518"/>
        <source>Your maximum memory allocation exceeds your system memory capacity.</source>
        <translation>分配的最大内存超过系统内存容量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/InstanceSettingsPage.cpp" line="521"/>
        <source>Your maximum memory allocation approaches your system memory capacity.</source>
        <translation>分配的最大内存接近系统内存容量。</translation>
    </message>
</context>
<context>
    <name>InstanceStaging</name>
    <message>
        <location filename="src/launcher/InstanceList.cpp" line="890"/>
        <source>Could not create staging folder</source>
        <translation>无法创建临时文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceList.cpp" line="908"/>
        <source>Failed to commit instance, even after multiple retries. It is being blocked by something.</source>
        <translation>多次重试后提交实例失败。更新被某因素阻止。</translation>
    </message>
</context>
<context>
    <name>InstanceView</name>
    <message>
        <location filename="src/launcher/ui/instanceview/InstanceView.cpp" line="485"/>
        <source>Welcome!</source>
        <translation>欢迎！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/instanceview/InstanceView.cpp" line="485"/>
        <source>Click &quot;Add Instance&quot; to get started.</source>
        <translation>从点击“添加实例”开始。</translation>
    </message>
</context>
<context>
    <name>InstanceWindow</name>
    <message>
        <location filename="src/launcher/ui/InstanceWindow.cpp" line="58"/>
        <source>Console window for </source>
        <translation>控制台窗口 - </translation>
    </message>
    <message>
        <location filename="src/launcher/ui/InstanceWindow.cpp" line="82"/>
        <source>Help</source>
        <translation>帮助</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/InstanceWindow.cpp" line="90"/>
        <source>&amp;Launch</source>
        <translation>启动(&amp;L)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/InstanceWindow.cpp" line="98"/>
        <source>&amp;Kill</source>
        <translation>结束进程(&amp;K)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/InstanceWindow.cpp" line="100"/>
        <source>Ctrl+K</source>
        <translation>Ctrl+K</translation>
    </message>
    <message>
        <source>Launch Offline</source>
        <translation type="vanished">离线启动</translation>
    </message>
    <message>
        <source>Launch Demo</source>
        <translation type="vanished">启动演示版</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/InstanceWindow.cpp" line="107"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
    <message>
        <source>Kill</source>
        <translation type="vanished">结束进程</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/InstanceWindow.cpp" line="99"/>
        <source>Kill the running instance</source>
        <translation>强制停止正在运行的实例</translation>
    </message>
    <message>
        <source>Launch</source>
        <translation type="vanished">运行</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/InstanceWindow.cpp" line="91"/>
        <source>Launch the instance</source>
        <translation>运行该实例</translation>
    </message>
</context>
<context>
    <name>JProfiler</name>
    <message>
        <location filename="src/launcher/tools/JProfiler.cpp" line="29"/>
        <source>Listening on port: %1</source>
        <translation>正在监听 %1 端口</translation>
    </message>
    <message>
        <location filename="src/launcher/tools/JProfiler.cpp" line="35"/>
        <source>Profiler aborted</source>
        <translation>Profiler 已终止</translation>
    </message>
</context>
<context>
    <name>JVisualVM</name>
    <message>
        <location filename="src/launcher/tools/JVisualVM.cpp" line="27"/>
        <source>JVisualVM started</source>
        <translation>JVisualVM 已启动</translation>
    </message>
    <message>
        <location filename="src/launcher/tools/JVisualVM.cpp" line="33"/>
        <source>Profiler aborted</source>
        <translation>Profiler 已终止</translation>
    </message>
</context>
<context>
    <name>JavaListLoadTask</name>
    <message>
        <location filename="src/launcher/java/JavaInstallList.cpp" line="159"/>
        <source>Detecting Java installations...</source>
        <translation>正在检测 Java 安装情况……</translation>
    </message>
</context>
<context>
    <name>JavaPage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="45"/>
        <source>Memory</source>
        <translation>内存</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="103"/>
        <source>The maximum amount of memory Minecraft is allowed to use.</source>
        <translation>Minecraft 允许使用的最大内存大小。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="71"/>
        <source>&amp;Minimum memory allocation:</source>
        <oldsource>Minimum memory allocation:</oldsource>
        <translation>最小内存分配(&amp;M)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="51"/>
        <source>Ma&amp;ximum memory allocation:</source>
        <oldsource>Maximum memory allocation:</oldsource>
        <translation>最大内存分配(&amp;X)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="61"/>
        <source>&amp;PermGen:</source>
        <translation>永久代大小(&amp;P)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="81"/>
        <source>The amount of memory Minecraft is started with.</source>
        <translation>Minecraft 启动时分配的内存总量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="125"/>
        <source>The amount of memory available to store loaded Java classes.</source>
        <translation>可用于储存加载的 Java 类的内存量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="160"/>
        <source>Java Runtime</source>
        <translation>Java 运行环境</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="237"/>
        <source>JVM arguments:</source>
        <translation>JVM 参数：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="255"/>
        <source>&amp;Java path:</source>
        <oldsource>Java path:</oldsource>
        <translation>Java 路径(&amp;J)：</translation>
    </message>
    <message>
        <source>J&amp;VM arguments:</source>
        <oldsource>JVM arguments:</oldsource>
        <translation type="obsolete">JVM 参数：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="209"/>
        <source>&amp;Auto-detect...</source>
        <oldsource>Auto-detect...</oldsource>
        <translation>自动查找(&amp;A)……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="222"/>
        <source>&amp;Test</source>
        <oldsource>Test</oldsource>
        <translation>测试 Java (&amp;T)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="274"/>
        <source>Browse</source>
        <translation>浏览</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="283"/>
        <source>If enabled, the launcher will not prompt you to choose a Java version if one isn&apos;t found.</source>
        <translation>如果启用该选项，那么在找不到 Java 的时候启动器将不会提示您选择 Java 版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="286"/>
        <source>Skip Java &amp;Wizard</source>
        <translation>跳过 Java 向导(&amp;W)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="191"/>
        <source>If enabled, the launcher will not check if an instance is compatible with the selected Java version.</source>
        <translation>启用时，启动器将不会检查选中的 Java 是否与实例兼容。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.ui" line="194"/>
        <source>&amp;Skip Java compatibility checks</source>
        <oldsource>Skip Java compatibility checks</oldsource>
        <translation>跳过 Java 兼容性检查(&amp;S)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.h" line="58"/>
        <source>Java</source>
        <translation>Java</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.cpp" line="130"/>
        <source>Select a Java version</source>
        <translation>选择 Java 版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.cpp" line="142"/>
        <source>Find Java executable</source>
        <translation>寻找 Java 可执行文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.cpp" line="194"/>
        <source>Your maximum memory allocation exceeds your system memory capacity.</source>
        <translation>分配的最大内存超过系统内存容量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.cpp" line="197"/>
        <source>Your maximum memory allocation approaches your system memory capacity.</source>
        <translation>分配的最大内存接近系统内存容量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/JavaPage.cpp" line="200"/>
        <source>Your maximum memory allocation is smaller than the minimum value</source>
        <translation>您的最大内存分配小于允许的最小值</translation>
    </message>
</context>
<context>
    <name>JavaSettingsWidget</name>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="159"/>
        <source>No Java version selected</source>
        <translation>未选择 Java 版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="160"/>
        <source>You didn&apos;t select a Java version or selected something that doesn&apos;t work.
%1 will not be able to start Minecraft.
Do you wish to proceed without any Java?

You can change the Java version in the settings later.
</source>
        <translation>您没有选择 Java 版本或选择的 Java 无法工作。
%1 将无法启动 Minecraft。
您想在没有任何 Java 版本的情况下继续吗？

您可以稍后在设置中修改 Java 版本。
</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="259"/>
        <source>Find Java executable</source>
        <translation>寻找 Java 可执行文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="399"/>
        <source>Memory</source>
        <translation>内存</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="400"/>
        <source>The maximum amount of memory Minecraft is allowed to use.</source>
        <translation>Minecraft 可以使用的最大内存大小。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="401"/>
        <source>Minimum memory allocation:</source>
        <translation>最小内存分配：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="402"/>
        <source>Maximum memory allocation:</source>
        <translation>最大内存分配：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="403"/>
        <source>The amount of memory Minecraft is started with.</source>
        <translation>Minecraft 启动时分配的内存总量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="404"/>
        <source>The amount of memory available to store loaded Java classes.</source>
        <translation>可用于储存加载的 Java 类的内存总量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="405"/>
        <source>Browse</source>
        <translation>浏览</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="414"/>
        <source>Your maximum memory allocation exceeds your system memory capacity.</source>
        <translation>分配的最大内存超过系统内存容量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="417"/>
        <source>Your maximum memory allocation approaches your system memory capacity.</source>
        <translation>分配的最大内存接近系统内存容量。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="420"/>
        <source>Your maximum memory allocation is smaller than the minimum value</source>
        <translation>您的最大内存分配小于允许的最小值</translation>
    </message>
</context>
<context>
    <name>JavaWizardPage</name>
    <message>
        <location filename="src/launcher/ui/setupwizard/JavaWizardPage.cpp" line="85"/>
        <source>Java</source>
        <translation>Java</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/JavaWizardPage.cpp" line="87"/>
        <source>You do not have a working Java set up yet or it went missing.
Please select one of the following or browse for a Java executable.</source>
        <oldsource>You do not have a working Java set up yet or it went missing.
Please select one of the following or browse for a java executable.</oldsource>
        <translation>您的 Java 设置无效。
请选择以下选项之一或浏览并选择 Java 可执行文件。</translation>
    </message>
</context>
<context>
    <name>LanguagePage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/LanguagePage.h" line="53"/>
        <source>Language</source>
        <translation>语言</translation>
    </message>
</context>
<context>
    <name>LanguageSelectionWidget</name>
    <message>
        <location filename="src/launcher/ui/widgets/LanguageSelectionWidget.cpp" line="62"/>
        <source>Don&apos;t see your language or the quality is poor?&lt;br/&gt;&lt;a href=&quot;%1&quot;&gt;Help us with translations!&lt;/a&gt;</source>
        <translation>没有找到您使用的语言或翻译质量不尽人意？&lt;br/&gt;&lt;a href=&quot;%1&quot;&gt;来帮助我们翻译吧！&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/LanguageSelectionWidget.cpp" line="65"/>
        <source>Use system locales</source>
        <translation>使用系统语言</translation>
    </message>
</context>
<context>
    <name>LanguageWizardPage</name>
    <message>
        <location filename="src/launcher/ui/setupwizard/LanguageWizardPage.cpp" line="43"/>
        <source>Language</source>
        <translation>语言</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/LanguageWizardPage.cpp" line="44"/>
        <source>Select the language to use in %1</source>
        <translation>设置 %1 使用的语言</translation>
    </message>
</context>
<context>
    <name>LaunchController</name>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="67"/>
        <source>No instance specified!</source>
        <translation>未指定实例！</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="72"/>
        <source>Invalid Java arguments specified. Please fix this first.</source>
        <translation>指定的 Java 参数无效。请先解决这个问题。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="89"/>
        <source>No Accounts</source>
        <translation>无账号</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="90"/>
        <source>In order to play Minecraft, you must have at least one Microsoft account which owns Minecraft logged in. Would you like to open the account manager to add an account now?</source>
        <oldsource>In order to play Minecraft, you must have at least one Microsoft account which owns Minecraft logged in.Would you like to open the account manager to add an account now?</oldsource>
        <translation>在游玩 Minecraft 之前，您至少需要链接一个拥有 Minecraft 的 Microsoft 账户。你想现在打开账号管理添加账号吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="116"/>
        <source>Which account would you like to use?</source>
        <translation>您想使用哪个账号？</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="137"/>
        <source>No account selected for launch.</source>
        <translation>没有选中用于启动游戏的账号。</translation>
    </message>
    <message>
        <source>Your account is currently not logged in. Please enter your password to log in again. &lt;br /&gt; &lt;br /&gt; This could be caused by a password change.</source>
        <translation type="vanished">您的账户已登出。请再次输入密码并重新登录。&lt;br /&gt; &lt;br /&gt; 这可能是因为您更改了密码。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="154"/>
        <source>Continue launch?</source>
        <translation>继续启动？</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="155"/>
        <source>It looks like we couldn&apos;t launch after %1 tries. Do you want to continue trying?</source>
        <translation>在 %1 次尝试后，我们似乎仍无法启动。您想继续尝试吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="191"/>
        <source>Player name</source>
        <translation>玩家名称</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="184"/>
        <source>Choose your offline mode player name.</source>
        <translation>输入离线游戏时使用的玩家名。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="186"/>
        <source>Choose your demo mode player name.</source>
        <translation>选择体验模式玩家名。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="211"/>
        <source>Received undetermined session status during login.</source>
        <translation>登录时收到了不确定的会话状态。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="221"/>
        <source>Play demo?</source>
        <translation>是否游玩演示模式？</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="223"/>
        <source>This account does not own Minecraft.
You need to purchase the game first to play it.

Do you want to play the demo?</source>
        <translation>这个账号还未购买 Minecraft。
您需要先购买该游戏才能正常游玩。

是否游玩演示模式？</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="226"/>
        <source>Play Demo</source>
        <translation>游玩演示</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="227"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="236"/>
        <source>Launch cancelled - account does not own Minecraft.</source>
        <translation>启动已取消——账号未购买 Minecraft。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="251"/>
        <source>Play Offline</source>
        <translation>离线游戏</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="258"/>
        <source>The account has expired and needs to be logged into manually again.</source>
        <translation>账号已过期，需要手动重新登录。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="259"/>
        <source>Account refresh failed</source>
        <translation>账号刷新失败</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="265"/>
        <source>The launcher&apos;s client identification has changed. Please remove this account and add it again.</source>
        <translation>启动器的客户端标识已更改。请删除此账号，然后重新添加。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="266"/>
        <source>Client identification changed</source>
        <translation>客户端标识已更改</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="273"/>
        <source>The account no longer exists on the servers. It may have been migrated, in which case please add the new account you migrated this one to.</source>
        <translation>服务器上不再存在该账号。它可能已迁移，在这种情况下，请添加您迁移到的新账号。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="275"/>
        <source>Account gone</source>
        <translation>账号不存在</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="282"/>
        <source>Failed to launch.</source>
        <translation>启动失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="291"/>
        <location filename="src/launcher/LaunchController.cpp" line="365"/>
        <source>Error!</source>
        <translation>错误！</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="291"/>
        <location filename="src/launcher/LaunchController.cpp" line="292"/>
        <source>Couldn&apos;t load the instance profile.</source>
        <translation>无法加载实例配置文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="298"/>
        <source>Couldn&apos;t instantiate a launcher.</source>
        <translation>无法实例化一个启动器。</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="365"/>
        <source>Profiler check for %1 failed: %2</source>
        <translation>分析器检查 %1 时发生错误：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="378"/>
        <source>&amp;Launch</source>
        <translation>启动(&amp;L)</translation>
    </message>
    <message>
        <source>Couldn&apos;t start profiler: %1</source>
        <translation type="vanished">无法启动 Profiler：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="372"/>
        <source>The game launch is delayed until you press the button. This is the right time to setup the profiler, as the profiler server is running now.

%1</source>
        <translation>游戏启动会延迟，直到您按下按钮。但此时分析器服务器正在运行，您应该在此时设置分析器。

%1</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="376"/>
        <source>Waiting.</source>
        <translation>等待中.</translation>
    </message>
    <message>
        <source>Launch</source>
        <translation type="vanished">运行</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="384"/>
        <source>Couldn&apos;t start the profiler: %1</source>
        <translation>无法启动 Profiler：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="385"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="412"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="425"/>
        <source>Kill Minecraft?</source>
        <translation>强行退出 Minecraft？</translation>
    </message>
    <message>
        <location filename="src/launcher/LaunchController.cpp" line="426"/>
        <source>This can cause the instance to get corrupted and should only be used if Minecraft is frozen for some reason</source>
        <translation>这可能导致实例出现错误，这应该只在 Minecraft 由于一些原因冻结的时候使用</translation>
    </message>
</context>
<context>
    <name>LaunchTask</name>
    <message>
        <source>PolyMC stopped watching the game log because the log length surpassed %1 lines.
You may have to fix your mods because the game is still logging to files and likely wasting harddrive space at an alarming rate!</source>
        <translation type="obsolete">PolyMC停止监听游戏日志，因为日志长度超过了%1行。
你可能需要修复你的mod，因为游戏还在向文件写入日志，并且似乎在以一个惊人的速度浪费你的硬盘空间！</translation>
    </message>
    <message>
        <location filename="src/launcher/launch/LaunchTask.cpp" line="210"/>
        <source>Stopped watching the game log because the log length surpassed %1 lines.
You may have to fix your mods because the game is still logging to files and likely wasting harddrive space at an alarming rate!</source>
        <translation>已停止监视游戏日志，因为日志长度超过 %1 行。
您可能必须修复您的 Mod，因为游戏仍在写入游戏日志，并且可能以惊人的速度浪费硬盘空间！</translation>
    </message>
</context>
<context>
    <name>LauncherLoginStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/LauncherLoginStep.cpp" line="17"/>
        <source>Accessing Mojang services.</source>
        <translation>正在访问 Mojang 服务。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/LauncherLoginStep.cpp" line="56"/>
        <location filename="src/launcher/minecraft/auth/steps/LauncherLoginStep.cpp" line="58"/>
        <source>Failed to get Minecraft access token: %1</source>
        <translation>获取 Minecraft 访问令牌失败：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/LauncherLoginStep.cpp" line="65"/>
        <source>Failed to parse the Minecraft access token response.</source>
        <translation>解析 Minecraft 访问令牌响应失败。</translation>
    </message>
</context>
<context>
    <name>LauncherPage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="45"/>
        <source>Features</source>
        <translation>功能</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="51"/>
        <source>Update Settings</source>
        <translation>更新设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="57"/>
        <source>Check for updates automatically</source>
        <oldsource>Check for updates on start?</oldsource>
        <translation>启动时检查更新</translation>
    </message>
    <message>
        <source>Up&amp;date Channel:</source>
        <translation type="vanished">更新频道（&amp;D）：</translation>
    </message>
    <message>
        <source>No channel selected.</source>
        <translation type="vanished">未选择更新频道。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="67"/>
        <source>Folders</source>
        <translation>公共文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="83"/>
        <source>I&amp;nstances:</source>
        <translation>实例(&amp;N)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="102"/>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="112"/>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="129"/>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="136"/>
        <source>Browse</source>
        <translation>浏览</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="119"/>
        <source>&amp;Mods:</source>
        <translation>Mod(&amp;M)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="143"/>
        <source>&amp;Icons:</source>
        <translation>图标(&amp;I)：</translation>
    </message>
    <message>
        <source>Move the data to new location (will restart the launcher)</source>
        <translation type="vanished">移动数据至新的位置（需要重启启动器）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="256"/>
        <source>User Interface</source>
        <translation>用户界面</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="265"/>
        <source>Instance view sorting mode</source>
        <translation>实例排序模式</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="271"/>
        <source>&amp;By last launched</source>
        <oldsource>By &amp;last launched</oldsource>
        <translation>按最后启动时间(&amp;B)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="281"/>
        <source>By &amp;name</source>
        <translation>按名称(&amp;N)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="294"/>
        <source>Theme</source>
        <translation>主题</translation>
    </message>
    <message>
        <source>&amp;Icons</source>
        <translation type="vanished">图标（&amp;I）</translation>
    </message>
    <message>
        <source>Simple (Dark Icons)</source>
        <translation type="vanished">简单（深色图标）</translation>
    </message>
    <message>
        <source>Simple (Light Icons)</source>
        <translation type="vanished">简单（亮色图标）</translation>
    </message>
    <message>
        <source>Simple (Blue Icons)</source>
        <translation type="vanished">简单（蓝色图标）</translation>
    </message>
    <message>
        <source>Simple (Colored Icons)</source>
        <translation type="vanished">简单（彩色图标）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="166"/>
        <source>Mods</source>
        <translation>Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="172"/>
        <source>Disable using metadata provided by mod providers (like Modrinth or CurseForge) for mods.</source>
        <oldsource>Disable using metadata provided by mod providers (like Modrinth or Curseforge) for mods.</oldsource>
        <translation>停用 Mod 托管平台（如 Modrinth 和 CurseForge）提供的 Mod 元数据。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="175"/>
        <source>Disable using metadata for mods</source>
        <oldsource>Disable using metadata for mods?</oldsource>
        <translation>停用 Mod 元数据</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="182"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600; color:#f5c211;&quot;&gt;Warning&lt;/span&gt;&lt;span style=&quot; color:#f5c211;&quot;&gt;: Disabling mod metadata may also disable some QoL features, such as mod updating!&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600; color:#f5c211;&quot;&gt;Warning&lt;/span&gt;&lt;span style=&quot; color:#f5c211;&quot;&gt;: Disabling mod metadata may also disable some upcoming QoL features, such as mod updating!&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600; color:#f5c211;&quot;&gt;警告&lt;/span&gt;&lt;span style=&quot; color:#f5c211;&quot;&gt;： 禁用 Mod 元数据可能也会禁用一些方便的功能，例如 Mod 更新！&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Breeze Light</source>
        <translation type="vanished">微风浅色</translation>
    </message>
    <message>
        <source>Breeze Dark</source>
        <translation type="vanished">微风深色</translation>
    </message>
    <message>
        <source>Flat</source>
        <translation type="vanished">扁平</translation>
    </message>
    <message>
        <source>Flat (White)</source>
        <translation type="vanished">扁平（白色）</translation>
    </message>
    <message>
        <source>Legacy</source>
        <translation type="vanished">旧版</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="vanished">自定义</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <oldsource>Colors</oldsource>
        <translation type="vanished">颜色（&amp;C）</translation>
    </message>
    <message>
        <source>C&amp;at</source>
        <translation type="vanished">猫（&amp;A）</translation>
    </message>
    <message>
        <source>Background Cat (from MultiMC)</source>
        <translation type="vanished">背景猫（来自MultiMC）</translation>
    </message>
    <message>
        <source>Rory ID 11 (drawn by Ashtaka)</source>
        <translation type="vanished">Rory ID 11（绘者：Ashtaka）</translation>
    </message>
    <message>
        <source>Rory ID 11 (flat edition, drawn by Ashtaka)</source>
        <translation type="vanished">Rory ID 11（扁平化版本，绘者：Ashtaka）</translation>
    </message>
    <message>
        <source>Teawie (drawn by SympathyTea)</source>
        <translation type="vanished">Teawie（绘者：SympathyTea）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="73"/>
        <source>&amp;Downloads:</source>
        <translation>下载(&amp;D)：</translation>
    </message>
    <message>
        <source>...</source>
        <translation type="vanished">……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="153"/>
        <source>When enabled, in addition to the downloads folder, its sub folders will also be searched when looking for resources (e.g. when looking for blocked mods on CurseForge).</source>
        <translation>启用后，在查找资源时除了搜索下载文件夹本身，还会搜索其子文件夹（例如：在寻找 CurseForge 上被屏蔽的 Mod 时）。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="156"/>
        <source>Check downloads folder recursively</source>
        <translation>递归检查下载文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="192"/>
        <source>Disable the automatic detection, installation, and updating of mod dependencies.</source>
        <oldsource>Disable automatically checking and installation of mod dependencies.</oldsource>
        <translation>禁用自动检测、安装和更新前置 Mod。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="195"/>
        <source>Disable automatic mod dependency management</source>
        <translation>禁用自动管理前置 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="205"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="211"/>
        <source>Number of concurrent tasks</source>
        <translation>并发任务数</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="225"/>
        <source>Number of concurrent downloads</source>
        <translation>并发下载数</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="306"/>
        <source>Cat</source>
        <translation>猫</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="312"/>
        <source>Set the cat&apos;s opacity. 0% is fully transparent and 100% is fully opaque.</source>
        <translation>设置猫的不透明度。0% 代表完全透明，100% 代表完全不透明。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="315"/>
        <source>Opacity</source>
        <translation>不透明度</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="325"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="360"/>
        <source>Tools</source>
        <translation>工具</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="366"/>
        <source>The menubar is more friendly for keyboard-driven interaction.</source>
        <translation>菜单栏对于键盘交互更加友好。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="369"/>
        <source>&amp;Replace toolbar with menubar</source>
        <oldsource>Replace toolbar with menubar</oldsource>
        <translation>用菜单栏代替工具栏(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="393"/>
        <source>Console</source>
        <translation>控制台</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="399"/>
        <source>Console Settings</source>
        <translation>控制台设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="405"/>
        <source>Show console while the game is &amp;running</source>
        <oldsource>Show console while the game is &amp;running?</oldsource>
        <translation>在游戏运行时显示控制台(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="412"/>
        <source>&amp;Automatically close console when the game quits</source>
        <oldsource>&amp;Automatically close console when the game quits?</oldsource>
        <translation>在游戏退出后自动关闭控制台(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="419"/>
        <source>Show console when the game &amp;crashes</source>
        <oldsource>Show console when the game &amp;crashes?</oldsource>
        <translation>在游戏崩溃时显示控制台(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="429"/>
        <source>&amp;History limit</source>
        <oldsource>History limit</oldsource>
        <translation>日志行数限制(&amp;H)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="435"/>
        <source>&amp;Stop logging when log overflows</source>
        <oldsource>Stop logging when log overflows</oldsource>
        <translation>在日志到达限制时停止记录(&amp;S)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="448"/>
        <source> lines</source>
        <translation> 行</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.ui" line="476"/>
        <source>Console &amp;font</source>
        <oldsource>Console font</oldsource>
        <translation>控制台字体(&amp;F)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="103"/>
        <source>Instance Folder</source>
        <translation>实例文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="111"/>
        <source>You&apos;re trying to specify an instance folder which&apos;s path contains at least one &apos;!&apos;. Java is known to cause problems if that is the case, your instances (probably) won&apos;t start!</source>
        <translation>您试图指定的实例文件夹路径包含至少一个“!”字符。Java 在这种情况下会出现问题，您的实例（很可能）无法运行！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="116"/>
        <source>Do you really want to use this path? Selecting &quot;No&quot; will close this and not alter your instance path.</source>
        <translation>您确定想使用此路径吗？选择“否”将会关闭且不会改变您目前的实例路径。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="125"/>
        <source>You&apos;re trying to specify an instance folder which was granted temporarily via Flatpak.
This is known to cause problems. After a restart the launcher might break, because it will no longer have access to that directory.

Granting %1 access to it via Flatseal is recommended.</source>
        <oldsource>You&apos;re trying to specify an instance folder which was granted temporaily via Flatpak.
This is known to cause problems. After a restart the launcher might break, because it will no longer have access to that directory.

Granting %1 access to it via Flatseal is recommended.</oldsource>
        <translation>您正在尝试把一个实例的目录设置到一个 Flatpak 的临时目录上。
这很可能会造成问题。重启后启动器可能会损坏，因为它不再能访问到该文件夹。

我们推荐通过 Flatseal 授权 %1。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="132"/>
        <source>Do you want to proceed anyway?</source>
        <translation>您还想继续吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="146"/>
        <source>Icons Folder</source>
        <translation>图标文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="157"/>
        <source>Mods Folder</source>
        <translation>Mod 文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="168"/>
        <source>Downloads Folder</source>
        <translation>下载文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="303"/>
        <source>[Something/ERROR] A spooky error!</source>
        <translation>[Something/ERROR] 一个错误！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="312"/>
        <source>[Test/INFO] A harmless message...</source>
        <translation>[Test/INFO] 一条无害的信息……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.cpp" line="321"/>
        <source>[Something/WARN] A not so spooky warning.</source>
        <translation>[Something/WARN] 一个不严重的警告。</translation>
    </message>
    <message>
        <source>Launcher notifications</source>
        <translation type="vanished">启动器通知</translation>
    </message>
    <message>
        <source>Reset hidden notifications</source>
        <translation type="vanished">取消隐藏通知</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/LauncherPage.h" line="61"/>
        <source>Launcher</source>
        <translation>启动器</translation>
    </message>
</context>
<context>
    <name>LauncherPartLaunch</name>
    <message>
        <location filename="src/launcher/minecraft/launch/LauncherPartLaunch.cpp" line="73"/>
        <source>Launcher library could not be found. Please check your installation.</source>
        <translation>找不到启动所需的运行库。请检查您是否有相应的运行库文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/LauncherPartLaunch.cpp" line="86"/>
        <source>Legacy launcher library could not be found. Please check your installation.</source>
        <translation>找不到旧版启动器库。请检查您是否正确安装启动器。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/LauncherPartLaunch.cpp" line="137"/>
        <source>The wrapper command &quot;%1&quot; couldn&apos;t be found.</source>
        <translation>找不到 wrapper 命令”%1“。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/LauncherPartLaunch.cpp" line="164"/>
        <source>Could not launch Minecraft!</source>
        <oldsource>Could not launch minecraft!</oldsource>
        <extracomment>Error message displayed if instace can&apos;t start</extracomment>
        <translation>无法启动 Minecraft！</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/LauncherPartLaunch.cpp" line="172"/>
        <location filename="src/launcher/minecraft/launch/LauncherPartLaunch.cpp" line="184"/>
        <source>Game crashed.</source>
        <translation>游戏已崩溃。</translation>
    </message>
</context>
<context>
    <name>LegacyFTB::FilterModel</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/ListModel.cpp" line="58"/>
        <source>Sort by Name</source>
        <oldsource>Sort by name</oldsource>
        <translation>按名称排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/ListModel.cpp" line="59"/>
        <source>Sort by Game Version</source>
        <oldsource>Sort by game version</oldsource>
        <translation>按游戏版本排序</translation>
    </message>
</context>
<context>
    <name>LegacyFTB::ListModel</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/ListModel.cpp" line="128"/>
        <source>Public Modpack</source>
        <translation>公开整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/ListModel.cpp" line="130"/>
        <source>Third Party Modpack</source>
        <translation>第三方整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/ListModel.cpp" line="132"/>
        <source>Private Modpack</source>
        <translation>私有整合包</translation>
    </message>
</context>
<context>
    <name>LegacyFTB::PackFetchTask</name>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackFetchTask.cpp" line="116"/>
        <source>Public Packs</source>
        <translation>公开整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackFetchTask.cpp" line="120"/>
        <source>Third Party Packs</source>
        <translation>第三方包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackFetchTask.cpp" line="124"/>
        <source>Failed to download some pack lists: %1</source>
        <translation>下载一些包列表时出错：%1</translation>
    </message>
</context>
<context>
    <name>LegacyFTB::PackInstallTask</name>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackInstallTask.cpp" line="69"/>
        <source>Downloading zip for %1</source>
        <translation>正在下载 %1 的 zip 文件</translation>
    </message>
    <message>
        <source>Downloading zip for %1 (%2%)</source>
        <translation type="vanished">正在为%1下载 Zip 文件（已完成 %2%）</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackInstallTask.cpp" line="99"/>
        <source>Extracting modpack</source>
        <translation>正在解压整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackInstallTask.cpp" line="107"/>
        <source>Failed to open modpack file %1!</source>
        <translation>无法打开整合包文件 %1！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackInstallTask.cpp" line="135"/>
        <source>Installing modpack</source>
        <translation>正在安装整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackInstallTask.cpp" line="141"/>
        <source>Failed to move unzipped Minecraft!</source>
        <oldsource>Failed to move unzipped minecraft!</oldsource>
        <translation>无法移动解压后的 Minecraft 文件！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/legacy_ftb/PackInstallTask.cpp" line="201"/>
        <source>No installation method found!</source>
        <translation>未找到安装方法！</translation>
    </message>
</context>
<context>
    <name>LegacyFTB::Page</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.ui" line="19"/>
        <source>Search and filter...</source>
        <translation>搜索和过滤…</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.ui" line="29"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.ui" line="42"/>
        <source>Public</source>
        <translation>公开</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.ui" line="69"/>
        <source>3rd Party</source>
        <translation>第三方</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.ui" line="96"/>
        <source>Private</source>
        <translation>私有</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.ui" line="115"/>
        <source>Add pack</source>
        <translation>添加整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.ui" line="122"/>
        <source>Remove selected pack</source>
        <translation>删除选中整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.ui" line="142"/>
        <source>Version selected:</source>
        <translation>所选版本：</translation>
    </message>
    <message>
        <source>FTB Legacy</source>
        <translation type="vanished">FTB（旧版）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="208"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="213"/>
        <source>Task aborted</source>
        <translation>任务已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="213"/>
        <source>The task has been aborted by the user.</source>
        <translation>任务已被用户终止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="223"/>
        <source>FTB private packs</source>
        <translation>FTB 私人包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="224"/>
        <source>Failed to download pack information for code %1.
Should it be removed now?</source>
        <translation>无法下载代码为 %1 的整合包信息。
要立即将它移除吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="341"/>
        <source>Add FTB pack</source>
        <translation>添加 FTB 整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="341"/>
        <source>Enter pack code:</source>
        <translation>输入整合包代码：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="356"/>
        <source>Remove pack</source>
        <translation>移除整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/legacy_ftb/Page.cpp" line="356"/>
        <source>Are you sure you want to remove pack %1?</source>
        <translation>是否确定要删除包 %1 ？</translation>
    </message>
</context>
<context>
    <name>LegacyInstance</name>
    <message>
        <source>Legacy</source>
        <translation type="vanished">旧版</translation>
    </message>
    <message>
        <source>Instance from previous versions.</source>
        <translation type="vanished">创建自上一版本的实例。</translation>
    </message>
</context>
<context>
    <name>LegacyUpgradePage</name>
    <message>
        <source>&lt;html&gt;&lt;body&gt;&lt;h1&gt;Upgrade is required&lt;/h1&gt;&lt;p&gt;PolyMC now supports old Minecraft versions and all the required features in the new (OneSix) instance format. As a consequence, the old (Legacy) format has been entirely disabled and old instances need to be upgraded.&lt;/p&gt;&lt;p&gt;The upgrade will create a new instance with the same contents as the current one, in the new format. The original instance will remain untouched, in case anything goes wrong in the process.&lt;/p&gt;&lt;p&gt;Please report any issues on our &lt;a href=&quot;https://github.com/PolyMC/PolyMC/issues&quot;&gt;github issues page&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;There is also a &lt;a href=&quot;https://discord.gg/GtPmv93&quot;&gt;discord channel for testing here&lt;/a&gt;.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="obsolete">&lt;html&gt;&lt;body&gt;&lt;h1&gt;必须进行升级&lt;/h1&gt;&lt;p&gt;PolyMC 现在在新的实例格式（OneSix）中支持了旧的 Minecraft 版本。因此，旧的（Legacy）格式将会被完全禁用，而旧的实例需要被升级。&lt;/p&gt;&lt;p&gt;升级过程将会创建一个使用新格式的与旧实例内容完全相同的新实例。而旧的实例会原样保留，以防止在过程中发生任何问题。&lt;/p&gt;&lt;p&gt;请在我们的&lt;a href=&quot;https://github.com/PolyMC/PolyMC/issues&quot;&gt; Github Issues 页面&lt;/a&gt;报告所有问题。&lt;/p&gt;&lt;p&gt;我们还有一个用于测试的 &lt;a href=&quot;https://discord.gg/GtPmv93&quot;&gt;Discord 频道&lt;/a&gt;。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Upgrade the instance</source>
        <translation type="vanished">升级实例</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="vanished">错误</translation>
    </message>
    <message>
        <source>Abort</source>
        <translation type="vanished">终止</translation>
    </message>
    <message>
        <source>%1 (Migrated)</source>
        <translation type="vanished">%1 （已迁移）</translation>
    </message>
    <message>
        <source>Upgrade</source>
        <translation type="vanished">升级</translation>
    </message>
</context>
<context>
    <name>LegacyUpgradeTask</name>
    <message>
        <source>Copying instance %1</source>
        <translation type="vanished">复制实例 %1 中</translation>
    </message>
    <message>
        <source>Instance folder copy failed.</source>
        <translation type="vanished">复制实例文件夹失败。</translation>
    </message>
    <message>
        <source>Could not decide Minecraft version.</source>
        <translation type="vanished">无法决定 Minecraft 版本。</translation>
    </message>
    <message>
        <source>Instance folder copy has been aborted.</source>
        <translation type="vanished">复制实例文件夹操作被中断。</translation>
    </message>
</context>
<context>
    <name>LibrariesTask</name>
    <message>
        <location filename="src/launcher/minecraft/update/LibrariesTask.cpp" line="15"/>
        <source>Downloading required library files...</source>
        <oldsource>Getting the library files from Mojang...</oldsource>
        <translation>正在下载所需的库文件……</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/LibrariesTask.cpp" line="23"/>
        <source>Libraries for instance %1</source>
        <translation>实例 %1 的依赖库</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/LibrariesTask.cpp" line="31"/>
        <source>Null jar is specified in the metadata, aborting.</source>
        <translation>元数据中指定了空 Jar 文件，操作终止。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/LibrariesTask.cpp" line="59"/>
        <source>Some artifacts marked as &apos;local&apos; are missing their files:
%1

You need to either add the files, or removed the packages that require them.
You&apos;ll have to correct this problem manually.</source>
        <translation>一些被标记为“本地”的包缺失文件。
%1

您需要添加这些文件，或删除要求这些文件的包。
您必须手动修正这个问题。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/LibrariesTask.cpp" line="67"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/update/LibrariesTask.cpp" line="81"/>
        <source>Game update failed: it was impossible to fetch the required libraries.
Reason:
%1</source>
        <translation>游戏更新错误：无法获取所需的库文件。
原因：
%1</translation>
    </message>
</context>
<context>
    <name>LocalModUpdateTask</name>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalModUpdateTask.cpp" line="44"/>
        <source>Updating index for mod:
%1</source>
        <translation>更新 Mod 索引中：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalModUpdateTask.cpp" line="59"/>
        <source>Invalid metadata</source>
        <translation>元数据无效</translation>
    </message>
</context>
<context>
    <name>LogPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="60"/>
        <source>Keep updating</source>
        <translation>保持更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="70"/>
        <source>Wrap lines</source>
        <translation>自动换行</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="93"/>
        <source>Copy the whole log into the clipboard</source>
        <translation>复制整个日志到剪贴板</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="96"/>
        <source>&amp;Copy</source>
        <translation>复制(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="103"/>
        <source>Upload the log to the paste service configured in preferences</source>
        <translation>上传日志到 paste.ee——只会保留一个月</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="106"/>
        <source>Upload</source>
        <translation>上传</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="113"/>
        <source>Clear the log</source>
        <translation>清空日志</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="116"/>
        <source>Clear</source>
        <translation>清空</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="125"/>
        <source>Search:</source>
        <translation>搜索：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="132"/>
        <source>Find</source>
        <translation>寻找</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="142"/>
        <source>Scroll all the way to bottom</source>
        <translation>滚动到底部</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.ui" line="145"/>
        <source>Bottom</source>
        <translation>尾部</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/LogPage.cpp" line="245"/>
        <location filename="src/launcher/ui/pages/instance/LogPage.h" line="57"/>
        <source>Minecraft Log</source>
        <translation>Minecraft 日志</translation>
    </message>
</context>
<context>
    <name>LoggedProcess</name>
    <message>
        <location filename="src/launcher/LoggedProcess.cpp" line="95"/>
        <source>Process exited with code %1.</source>
        <extracomment>Message displayed on instance exit</extracomment>
        <translation>进程退出，代码：%1。</translation>
    </message>
    <message>
        <location filename="src/launcher/LoggedProcess.cpp" line="100"/>
        <source>Process crashed.</source>
        <extracomment>Message displayed on instance crashed</extracomment>
        <translation>进程崩溃了。</translation>
    </message>
    <message>
        <location filename="src/launcher/LoggedProcess.cpp" line="102"/>
        <source>Process crashed with exitcode %1.</source>
        <translation>游戏进程崩溃了。退出代码：%1。</translation>
    </message>
    <message>
        <location filename="src/launcher/LoggedProcess.cpp" line="107"/>
        <source>Process was killed by user.</source>
        <extracomment>Message displayed after the instance exits due to kill request</extracomment>
        <translation>游戏被用户强行关闭。</translation>
    </message>
    <message>
        <location filename="src/launcher/LoggedProcess.cpp" line="116"/>
        <source>The process failed to start.</source>
        <translation>进程启动失败。</translation>
    </message>
</context>
<context>
    <name>LoginDialog</name>
    <message>
        <source>Add Account</source>
        <translation type="vanished">添加账号</translation>
    </message>
    <message>
        <source>Email</source>
        <translation type="vanished">电子邮箱</translation>
    </message>
    <message>
        <source>Password</source>
        <translation type="vanished">密码</translation>
    </message>
</context>
<context>
    <name>MMCZip::ExportToZipTask</name>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="461"/>
        <source>Folder doesn&apos;t exist</source>
        <translation>文件夹不存在</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="464"/>
        <source>Could not create file</source>
        <translation>无法创建文件</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="472"/>
        <source>Could not create:</source>
        <translation>无法创建：</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="493"/>
        <source>Could not read and compress %1</source>
        <translation>无法读取和压缩 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="499"/>
        <source>A zip error occurred</source>
        <translation>尝试用 ZIP 解压文件时出现错误</translation>
    </message>
</context>
<context>
    <name>MMCZip::ExtractZipTask</name>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="545"/>
        <source>Failed to enumerate files in archive</source>
        <translation>无法枚举存档中的文件</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="548"/>
        <source>Extracting empty archives seems odd...</source>
        <translation>提取空档案似乎很奇怪……</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="552"/>
        <source>Failed to seek to first file in zip</source>
        <translation>无法查找 ZIP 中的第一个文件</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="592"/>
        <source>Extracting %1 was cancelled, because it was effectively outside of the target path %2</source>
        <translation>已取消解压 %1，因为它实际上在目标路径 %2 之外</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="598"/>
        <source>Failed to extract file %1 to %2</source>
        <translation>无法将 %1 解压至 %2</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="612"/>
        <source>Could not fix permissions for %1</source>
        <translation>无法修复 %1 的权限</translation>
    </message>
</context>
<context>
    <name>MSADeviceCodeStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSADeviceCodeStep.cpp" line="53"/>
        <source>Logging in with Microsoft account(device code).</source>
        <translation>已通过微软账户登录（设备码）。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSADeviceCodeStep.cpp" line="115"/>
        <source>Device authorization failed: %1</source>
        <translation>设备认证失败：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSADeviceCodeStep.cpp" line="119"/>
        <source>Failed to retrieve device authorization</source>
        <translation>获取设备认证信息失败</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSADeviceCodeStep.cpp" line="125"/>
        <source>Device authorization failed: required fields missing</source>
        <translation>设备认证失败：缺少需要的字段</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSADeviceCodeStep.cpp" line="152"/>
        <source>Task aborted</source>
        <translation>任务已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSADeviceCodeStep.cpp" line="254"/>
        <source>Device Access failed: %1</source>
        <translation>设备访问失败：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSADeviceCodeStep.cpp" line="269"/>
        <source>Got</source>
        <translation>已获取</translation>
    </message>
</context>
<context>
    <name>MSALoginDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/MSALoginDialog.ui" line="20"/>
        <source>Add Microsoft Account</source>
        <translation>添加 Microsoft 账户</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/MSALoginDialog.ui" line="89"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <source>Open page and copy code</source>
        <translation type="vanished">打开登录页并复制代码</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/MSALoginDialog.cpp" line="131"/>
        <source>Browser opened to complete the login process.&lt;br /&gt;&lt;br /&gt;If your browser hasn&apos;t opened, please manually open the below link in your browser:</source>
        <translation>为了完成登录流程，浏览器已经打开。&lt;br /&gt;&lt;br /&gt;如果没有打开，请手动在浏览器里打开此链接：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/MSALoginDialog.cpp" line="157"/>
        <source>&lt;p&gt;Please login in the opened browser. If no browser was opened, please open up %1 in a browser and put in the code &lt;b&gt;%2&lt;/b&gt; to proceed with login.&lt;/p&gt;</source>
        <translation>&lt;p&gt;请在打开的浏览器窗口中登录。如果未打开浏览器，请手动在浏览器中打开 %1 并输入代码 &lt;b&gt;%2&lt;/b&gt; 以继续登录。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/MSALoginDialog.cpp" line="162"/>
        <source>&lt;p&gt;Please open up %1 in a browser and put in the code &lt;b&gt;%2&lt;/b&gt; to proceed with login.&lt;/p&gt;</source>
        <translation>&lt;p&gt;请在浏览器中打开 %1 并输入代码 &lt;b&gt;%2&lt;/b&gt; 以继续登录。&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>MSAStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSAStep.cpp" line="83"/>
        <source>Logging in with Microsoft account.</source>
        <translation>正在使用 Microsoft 账户登录。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSAStep.cpp" line="91"/>
        <source>Microsoft user authentication failed - client identification has changed.</source>
        <translation>Microsoft 账号身份验证失败——客户端标识已更改。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSAStep.cpp" line="67"/>
        <source>Got </source>
        <translation>已获取 </translation>
    </message>
    <message>
        <source>Microsoft user authentication ended with a network error.</source>
        <translation type="vanished">Microsoft 账户认证因网络错误终止。</translation>
    </message>
    <message>
        <source>Microsoft user authentication failed - user no longer exists.</source>
        <translation type="vanished">微软用户身份验证失败——用户不再存在。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MSAStep.cpp" line="71"/>
        <source>Microsoft user authentication failed.</source>
        <translation>微软用户验证失败。</translation>
    </message>
    <message>
        <source>Microsoft user authentication completed with an unrecognized result.</source>
        <translation type="vanished">微软用户身份验证已完成，但结果无法识别。</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <source>Kill</source>
        <translation type="vanished">结束</translation>
    </message>
    <message>
        <source>Kill the running instance</source>
        <translation type="vanished">结束运行中的实例</translation>
    </message>
    <message>
        <source>Launch</source>
        <translation type="vanished">运行</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="345"/>
        <source>Launch the selected instance.</source>
        <translation>运行选中实例。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="35"/>
        <source>Main Toolbar</source>
        <translation>主工具栏</translation>
    </message>
    <message>
        <source>Add Instance</source>
        <translation type="vanished">添加实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="294"/>
        <source>Add a new instance.</source>
        <translation>添加一个新的实例。</translation>
    </message>
    <message>
        <source>&amp;View Instance Folder</source>
        <oldsource>View Instance Folder</oldsource>
        <translation type="vanished">查看实例文件夹(&amp;V)</translation>
    </message>
    <message>
        <source>Open the instance folder in a file browser.</source>
        <translation type="vanished">在文件资源管理器中打开实例文件夹。</translation>
    </message>
    <message>
        <source>View &amp;Central Mods Folder</source>
        <oldsource>View Central Mods Folder</oldsource>
        <translation type="vanished">查看公共模组文件夹(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="578"/>
        <source>Open the central mods folder in a file browser.</source>
        <translation>在文件管理器中打开公共 Mod 文件夹。</translation>
    </message>
    <message>
        <source>Dele&amp;te Instance</source>
        <translation type="vanished">删除实例(&amp;T)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="703"/>
        <source>Folders</source>
        <translation>公共文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="706"/>
        <source>Open one of the folders shared between instances.</source>
        <translation>打开实例间共用的文件夹。</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="vanished">设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="321"/>
        <source>Change settings.</source>
        <translation>更改设置。</translation>
    </message>
    <message>
        <source>Report a Bug</source>
        <translation type="vanished">报告漏洞</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="619"/>
        <source>Open the bug tracker to report a bug with %1.</source>
        <translation>打开漏洞追踪器来报告 %1 的漏洞。</translation>
    </message>
    <message>
        <source>Matrix space</source>
        <oldsource>Matrix</oldsource>
        <translation type="vanished">Matrix 空间</translation>
    </message>
    <message>
        <source>Open %1 Matrix space</source>
        <translation type="vanished">打开 %1 Matrix 空间</translation>
    </message>
    <message>
        <source>Discord guild</source>
        <oldsource>Discord</oldsource>
        <translation type="vanished">Discord 频道</translation>
    </message>
    <message>
        <source>Subreddit</source>
        <oldsource>Reddit</oldsource>
        <translation type="vanished">子版块</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="655"/>
        <source>Open %1 subreddit.</source>
        <translation>打开 %1 的 Reddit 子论坛。</translation>
    </message>
    <message>
        <source>About %1</source>
        <translation type="vanished">关于 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="667"/>
        <source>View information about %1.</source>
        <translation>查看关于 %1 的信息。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="715"/>
        <source>Help</source>
        <translation>帮助</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="718"/>
        <source>Get help with %1 or Minecraft.</source>
        <translation>获取 %1 或 Minecraft 的帮助。</translation>
    </message>
    <message>
        <source>Update</source>
        <translation type="vanished">更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="306"/>
        <source>Check for new updates for %1.</source>
        <translation>检查 %1 的更新。</translation>
    </message>
    <message>
        <source>Meow</source>
        <translation type="vanished">喵~</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="258"/>
        <source>It&apos;s a fluffy kitty :3</source>
        <translation>这是一只毛茸茸的小猫 :3</translation>
    </message>
    <message>
        <source>Manage Accounts</source>
        <translation type="vanished">管理帐户</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="64"/>
        <source>News Toolbar</source>
        <translation>新闻工具栏</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="240"/>
        <source>More news...</source>
        <translation>更多新闻(&amp;N)……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="243"/>
        <source>Open the development blog to read more news about %1.</source>
        <translation>打开开发日志以阅读有关 %1 的更多新闻。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="357"/>
        <source>Kill the running instance.</source>
        <translation>强制退出运行中的实例。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="404"/>
        <source>&amp;Edit...</source>
        <translation>编辑(&amp;E)...</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="419"/>
        <source>&amp;Folder</source>
        <translation>实例文件夹(&amp;F)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="461"/>
        <source>E&amp;xport...</source>
        <translation>导出(&amp;X)...</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="431"/>
        <source>Dele&amp;te</source>
        <translation>删除(&amp;T)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="446"/>
        <source>Cop&amp;y...</source>
        <translation>复制(&amp;Y)...</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="500"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1583"/>
        <source>Create Shortcut</source>
        <translation>创建快捷方式(&amp;S)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="503"/>
        <source>Creates a shortcut on your desktop to launch the selected instance.</source>
        <translation>在桌面上创建启动此实例的快捷方式。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="91"/>
        <source>Instance Toolbar</source>
        <translation>实例工具栏</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="392"/>
        <source>Change Icon</source>
        <translation>更改图标</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="354"/>
        <source>&amp;Kill</source>
        <translation>结束进程(&amp;K)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="342"/>
        <source>&amp;Launch</source>
        <translation>启动(&amp;L)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="291"/>
        <source>Add Instanc&amp;e...</source>
        <translation>添加实例(&amp;E)...</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="185"/>
        <source>F&amp;olders</source>
        <translation>文件夹(&amp;O)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="318"/>
        <source>Setti&amp;ngs...</source>
        <oldsource>Settings...</oldsource>
        <translation>设置(&amp;N)...</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="282"/>
        <source>&amp;Undo Last Instance Deletion</source>
        <translation>撤销上一个实例的删除操作(&amp;U)</translation>
    </message>
    <message>
        <source>View &amp;Instance Folder</source>
        <translation type="vanished">查看实例文件夹(&amp;I)</translation>
    </message>
    <message>
        <source>View Launcher &amp;Root Folder</source>
        <translation type="vanished">查看启动器根文件夹(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="679"/>
        <source>&amp;Clear Metadata Cache</source>
        <translation>清除元数据缓存(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="682"/>
        <source>Clear cached metadata</source>
        <translation>清除已缓存的元数据</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="691"/>
        <source>Install to &amp;PATH</source>
        <translation>安装至 &amp;PATH</translation>
    </message>
    <message>
        <source>Install a prismlauncher symlink to /usr/local/bin</source>
        <translation type="vanished">安装一个 prismlauncher 符号链接至 /usr/local/bin</translation>
    </message>
    <message>
        <source>Report a &amp;Bug...</source>
        <translation type="vanished">反馈问题（&amp;B）……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="640"/>
        <source>&amp;Matrix Space</source>
        <translation>Matrix 聊天室(&amp;M)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="628"/>
        <source>&amp;Discord Guild</source>
        <translation>Discord 公会(&amp;D)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="266"/>
        <source>Status Bar</source>
        <translation>状态栏</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="551"/>
        <source>&amp;Instances</source>
        <translation>实例(&amp;I)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="554"/>
        <source>Open the instances folder in a file browser.</source>
        <translation>在文件管理器中打开实例文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="563"/>
        <source>Launcher &amp;Root</source>
        <translation>启动器根目录(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="575"/>
        <source>&amp;Central Mods</source>
        <translation>公共 Mod(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="587"/>
        <source>Instance Icons</source>
        <translation>实例图标</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="590"/>
        <source>Open the instance icons folder in a file browser.</source>
        <translation>在文件管理器中打开实例图标文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="599"/>
        <source>Logs</source>
        <translation>日志</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="602"/>
        <source>Open the logs folder in a file browser.</source>
        <translation>在文件管理器中打开实例日志文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="652"/>
        <source>Sub&amp;reddit</source>
        <translation>Reddit 子论坛(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="664"/>
        <source>&amp;About %1</source>
        <translation>关于 %1(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="748"/>
        <source>&amp;Widget Themes</source>
        <translation>控件主题(&amp;W)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="751"/>
        <source>Open the widget themes folder in a file browser.</source>
        <translation>在文件管理器中打开控件主题文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="760"/>
        <source>I&amp;con Theme</source>
        <translation>图标主题(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="763"/>
        <source>Open the icon theme folder in a file browser.</source>
        <translation>在文件管理器中打开图标主题文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="772"/>
        <source>Cat Packs</source>
        <translation>猫主题</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="775"/>
        <source>Open the cat packs folder in a file browser.</source>
        <translation>在文件管理器中打开猫主题文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="303"/>
        <source>&amp;Update...</source>
        <translation>更新(&amp;U)……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="255"/>
        <source>&amp;Meow</source>
        <translation>喵(&amp;M)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="333"/>
        <source>&amp;Manage Accounts...</source>
        <translation>账号管理(&amp;M)……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="274"/>
        <source>Lock Toolbars</source>
        <translation>锁定工具栏</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="607"/>
        <source>Themes</source>
        <translation>主题</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="139"/>
        <source>&amp;File</source>
        <translation>文件(&amp;F)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="162"/>
        <source>&amp;Edit</source>
        <translation>编辑(&amp;E)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="171"/>
        <source>&amp;View</source>
        <translation>查看(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Profiles</source>
        <translation type="vanished">配置文件（&amp;P）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="209"/>
        <source>&amp;Help</source>
        <translation>帮助(&amp;H)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="464"/>
        <source>Export the selected instance to supported formats.</source>
        <translation>将选中实例导出为支持的格式。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="473"/>
        <source>Prism Launcher (zip)</source>
        <translation>Prism Launcher（.zip）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="482"/>
        <source>Modrinth (mrpack)</source>
        <translation>Modrinth（.mrpack）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="491"/>
        <source>CurseForge (zip)</source>
        <translation>CurseForge（.zip）</translation>
    </message>
    <message>
        <source>Mod List</source>
        <translation type="vanished">Mod 列表</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="536"/>
        <source>Close &amp;Window</source>
        <translation>关闭窗口(&amp;W)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="539"/>
        <source>Close the current window</source>
        <translation>关闭当前窗口</translation>
    </message>
    <message>
        <source>View &amp;Widget Themes Folder</source>
        <translation type="vanished">查看界面主题文件夹(&amp;W)</translation>
    </message>
    <message>
        <source>View Widget Theme Folder</source>
        <translation type="vanished">查看界面主题文件夹</translation>
    </message>
    <message>
        <source>View I&amp;con Theme Folder</source>
        <translation type="vanished">查看图标主题文件夹(&amp;I)</translation>
    </message>
    <message>
        <source>View Icon Theme Folder</source>
        <translation type="vanished">查看图标主题文件夹</translation>
    </message>
    <message>
        <source>View Cat Packs Folder</source>
        <translation type="vanished">查看猫猫主题文件夹</translation>
    </message>
    <message>
        <source>&amp;View Launcher Root Folder</source>
        <translation type="vanished">查看启动器根文件夹(&amp;V)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="566"/>
        <source>Open the launcher&apos;s root folder in a file browser.</source>
        <translation>在文件管理器中打开启动器的根目录。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="616"/>
        <source>Report a Bug or Suggest a Feature</source>
        <translation>报告程序漏洞或建议新功能(&amp;B)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="643"/>
        <source>Open %1 Matrix space.</source>
        <translation>打开 %1 Matrix 空间。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="694"/>
        <source>Install a %1 symlink to /usr/local/bin</source>
        <translation>在 /usr/local/bin 创建一个 %1 的符号链接</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="736"/>
        <source>%1 &amp;Help</source>
        <oldsource>%1 He&amp;lp</oldsource>
        <translation>%1 帮助(&amp;H)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="739"/>
        <source>Open the %1 wiki</source>
        <translation>打开 %1 Wiki</translation>
    </message>
    <message>
        <source>%1 &amp;News</source>
        <translation type="vanished">%1 新闻（&amp;N）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="395"/>
        <source>Change the selected instance&apos;s icon.</source>
        <translation>更改选中实例的图标。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="369"/>
        <source>Rename</source>
        <translation>重命名</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="372"/>
        <source>Rename the selected instance.</source>
        <translation>重命名选中实例。</translation>
    </message>
    <message>
        <source>Launch &amp;Offline</source>
        <translation type="vanished">离线启动(&amp;O)</translation>
    </message>
    <message>
        <source>Launch &amp;Demo</source>
        <translation type="vanished">启动演示版(&amp;D)</translation>
    </message>
    <message>
        <source>Launch the selected instance in demo mode.</source>
        <translation type="vanished">在体验版上启动所选的实例。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="360"/>
        <source>Ctrl+K</source>
        <translation>Ctrl+K</translation>
    </message>
    <message>
        <source>Edit Inst&amp;ance...</source>
        <translation type="vanished">编辑实例（&amp;A）…</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="410"/>
        <source>Ctrl+I</source>
        <translation>Ctrl+I</translation>
    </message>
    <message>
        <source>E&amp;dit Notes...</source>
        <translation type="vanished">编辑备注（&amp;D）…</translation>
    </message>
    <message>
        <source>View &amp;Mods</source>
        <translation type="vanished">查看Mod（&amp;M）</translation>
    </message>
    <message>
        <source>&amp;View Worlds</source>
        <translation type="vanished">查看世界（&amp;V）</translation>
    </message>
    <message>
        <source>Manage &amp;Screenshots</source>
        <translation type="vanished">管理截图（&amp;S）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="381"/>
        <source>&amp;Change Group...</source>
        <translation>重新分组(&amp;C)...</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="387"/>
        <source>Ctrl+G</source>
        <translation>Ctrl+G</translation>
    </message>
    <message>
        <source>Minec&amp;raft Folder</source>
        <translation type="vanished">Minecraft 文件夹（&amp;R）</translation>
    </message>
    <message>
        <source>Ctrl+M</source>
        <translation type="vanished">Ctrl+M</translation>
    </message>
    <message>
        <source>Confi&amp;g Folder</source>
        <translation type="vanished">配置文件夹（&amp;G）</translation>
    </message>
    <message>
        <source>&amp;Instance Folder</source>
        <translation type="vanished">实例文件夹（&amp;I）</translation>
    </message>
    <message>
        <source>E&amp;xport Instance...</source>
        <translation type="vanished">导出实例（&amp;X）…</translation>
    </message>
    <message>
        <source>Ctrl+E</source>
        <translation type="vanished">Ctrl+M</translation>
    </message>
    <message>
        <source>Dele&amp;te Instance...</source>
        <translation type="vanished">删除实例（&amp;T）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="254"/>
        <source>Backspace</source>
        <translation>空格</translation>
    </message>
    <message>
        <source>Cop&amp;y Instance...</source>
        <translation type="vanished">复制实例（&amp;Y）…</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="452"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <source>Launch Offline</source>
        <translation type="vanished">离线启动</translation>
    </message>
    <message>
        <source>Launch the selected instance in offline mode.</source>
        <translation type="vanished">在离线模式下运行实例。</translation>
    </message>
    <message>
        <source>Edit Instance</source>
        <translation type="vanished">编辑实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="407"/>
        <source>Change the instance settings, mods and versions.</source>
        <translation>修改实例的设置、Mod 和版本。</translation>
    </message>
    <message>
        <source>Edit Notes</source>
        <translation type="vanished">更改备注</translation>
    </message>
    <message>
        <source>Edit the notes for the selected instance.</source>
        <translation type="vanished">编辑所选实例的备注。</translation>
    </message>
    <message>
        <source>View Mods</source>
        <translation type="vanished">查看模组</translation>
    </message>
    <message>
        <source>View the mods of this instance.</source>
        <translation type="vanished">查看此实例的Mod。</translation>
    </message>
    <message>
        <source>View Worlds</source>
        <translation type="vanished">查看世界</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="434"/>
        <source>Delete the selected instance.</source>
        <oldsource>View the worlds of this instance.</oldsource>
        <translation>删除所选实例。</translation>
    </message>
    <message>
        <source>Manage Screenshots</source>
        <translation type="vanished">管理截屏</translation>
    </message>
    <message>
        <source>View and upload screenshots for this instance.</source>
        <translation type="vanished">管理并上传本实例的截图。</translation>
    </message>
    <message>
        <source>Change Group</source>
        <translation type="vanished">更改组</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="384"/>
        <source>Change the selected instance&apos;s group.</source>
        <translation>更改选中实例的组。</translation>
    </message>
    <message>
        <source>Minecraft Folder</source>
        <translation type="vanished">Minecraft 文件夹</translation>
    </message>
    <message>
        <source>Open the selected instance&apos;s Minecraft folder in a file browser.</source>
        <oldsource>Open the selected instance&apos;s minecraft folder in a file browser.</oldsource>
        <translation type="vanished">在文件资源管理器中打开实例的 Minecraft 文件夹。</translation>
    </message>
    <message>
        <source>Config Folder</source>
        <translation type="vanished">配置文件夹</translation>
    </message>
    <message>
        <source>Open the instance&apos;s config folder.</source>
        <translation type="vanished">打开实例的配置文件夹。</translation>
    </message>
    <message>
        <source>Instance Folder</source>
        <translation type="vanished">实例文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="422"/>
        <source>Open the selected instance&apos;s root folder in a file browser.</source>
        <translation>在文件资源管理器中打开实例的根文件夹。</translation>
    </message>
    <message>
        <source>Export Instance</source>
        <translation type="vanished">导出实例</translation>
    </message>
    <message>
        <source>Export the selected instance as a zip file.</source>
        <translation type="vanished">将所选实例导出为 zip 文件。</translation>
    </message>
    <message>
        <source>Delete Instance</source>
        <oldsource>Delete</oldsource>
        <translation type="vanished">移除实例</translation>
    </message>
    <message>
        <source>Copy Instance</source>
        <translation type="vanished">复制实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="449"/>
        <source>Copy the selected instance.</source>
        <translation>复制选中实例。</translation>
    </message>
    <message>
        <source>%1 - Version %2</source>
        <comment>Launcher - Version X</comment>
        <translation type="vanished">%1- 版本 %2</translation>
    </message>
    <message>
        <source> on %1</source>
        <comment>on platform, as in operating system</comment>
        <translation type="vanished"> 运行在 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="355"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="429"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1712"/>
        <source>No instance selected</source>
        <translation>未选择实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="356"/>
        <source>Total playtime: 0s</source>
        <translation>总游玩时长：0 秒</translation>
    </message>
    <message>
        <source>Profiles</source>
        <translation type="vanished">帐户</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="534"/>
        <source>&amp;Create instance</source>
        <oldsource>Create instance</oldsource>
        <translation>创建实例(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="548"/>
        <source>&amp;Delete group</source>
        <oldsource>Delete group &apos;%1&apos;</oldsource>
        <translation>删除分组(&amp;D)</translation>
    </message>
    <message>
        <source>Ctrl+Shift+O</source>
        <translation type="vanished">Ctrl+Shift+O</translation>
    </message>
    <message>
        <source>Launch Demo</source>
        <translation type="vanished">启动演示版</translation>
    </message>
    <message>
        <source>Ctrl+Alt+O</source>
        <translation type="vanished">Ctrl+Alt+O</translation>
    </message>
    <message>
        <source>Profilers</source>
        <translation type="vanished">分析器</translation>
    </message>
    <message>
        <source>%1 Offline</source>
        <translation type="vanished">%1 离线</translation>
    </message>
    <message>
        <source>Profiler not setup correctly. Go into settings, &quot;External Tools&quot;.</source>
        <translation type="vanished">Profiler 没有正确设置。请开启设置，找到“外部工具”。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="512"/>
        <source>No accounts added!</source>
        <translation>未添加账号！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="668"/>
        <source>Ctrl+%1</source>
        <translation>Ctrl+%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="524"/>
        <source>No Default Account</source>
        <translation>不设置默认账号</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="527"/>
        <source>Ctrl+0</source>
        <translation>Ctrl+0</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="779"/>
        <source>Loading news...</source>
        <translation>正在加载新闻……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="789"/>
        <source>No news available.</source>
        <translation>暂无新闻。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="837"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="841"/>
        <source>Task aborted</source>
        <translation>任务已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="841"/>
        <source>The task has been aborted by the user.</source>
        <translation>任务已被用户终止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="845"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="884"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="996"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1022"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="889"/>
        <source>The launcher cannot download Minecraft or update instances unless you have at least one account added.
Please add a Microsoft account.</source>
        <oldsource>The launcher cannot download Minecraft or update instances unless you have at least one account added.
Please add your Microsoft or Mojang account.</oldsource>
        <translation>启动器无法在没有正版账号的情况下下载 Minecraft 或更新实例。
请添加一个 Microsoft 账户。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="985"/>
        <source>The modpack, mod, or resource %1 is blocked for third-parties! Please download it manually.</source>
        <translation>整合包、Mod 或资源包 %1 禁用了第三方下载！请手动下载。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1011"/>
        <source>Modpack download</source>
        <translation>下载整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1153"/>
        <source>Group name</source>
        <translation>群组名</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1153"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1175"/>
        <source>Enter a new group name.</source>
        <translation>输入或选择新群组。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1165"/>
        <source>Delete group</source>
        <translation>删除群组</translation>
    </message>
    <message>
        <source>Are you sure you want to delete the group %1?</source>
        <translation type="vanished">您确定要移除实例组 %1 吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1281"/>
        <source>Instance not editable</source>
        <translation>实例不可被编辑</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1282"/>
        <source>This instance is not editable. It may be broken, invalid, or too old. Check logs for details.</source>
        <translation>该实例不可被编辑。也许它损坏，无效或太旧？请查看日志了解详情。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1317"/>
        <source>Successfully added %1 to PATH</source>
        <translation>成功把 %1 添加至 PATH</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1318"/>
        <source>%1 was successfully added to your PATH. You can now start it by running `%2`.</source>
        <translation>%1 已成功被添加至您的 PATH。您现在可以通过运行 `%2` 来启动它。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1321"/>
        <source>Failed to add %1 to PATH</source>
        <translation>无法把 %1 添加至 PATH</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1322"/>
        <source>An error occurred while trying to add %1 to PATH</source>
        <translation>在把 %1 添加到 PATH 时发生了一个错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1366"/>
        <source>Confirm Deletion</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1367"/>
        <source>You are about to delete &quot;%1&quot;.
This may be permanent and will completely delete the instance.

Are you sure?</source>
        <oldsource>About to delete: %1
This may be permanent and will completely delete the instance.

Are you sure?</oldsource>
        <translation>将要删除：“%1”
这将永久删除此实例。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1379"/>
        <source>There are linked instances</source>
        <translation>存在已链接的实例</translation>
    </message>
    <message numerus="yes">
        <location filename="src/launcher/ui/MainWindow.cpp" line="1380"/>
        <source>The following instance(s) might reference files in this instance:

%1

Deleting it could break the other instance(s), 

Do you wish to proceed?</source>
        <translation>
            <numerusform>以下实例可能引用了此实例中的文件：

%1

删除它可能会破坏其他实例， 

是否要继续？</numerusform>
        </translation>
    </message>
    <message>
        <source>Are you sure you want to delete the group %1</source>
        <translation type="vanished">你确定要移除实例组 %1 吗</translation>
    </message>
    <message>
        <source>CAREFUL!</source>
        <translation type="vanished">当心！</translation>
    </message>
    <message>
        <source>About to delete: %1
This is permanent and will completely delete the instance.

Are you sure?</source>
        <translation type="vanished">你将要删除：%1
接下来将会彻底移除此实例，并且不可恢复。

是否继续？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1506"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1517"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1550"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1566"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1574"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1606"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1617"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1622"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1628"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1630"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1636"/>
        <source>Create instance shortcut</source>
        <translation>创建实例快捷方式</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1506"/>
        <source>Couldn&apos;t find desktop?!</source>
        <translation>无法找到桌面？！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1518"/>
        <source>The launcher is in the folder it was extracted from, therefore it cannot create shortcuts.</source>
        <translation>启动器位于解压出来的文件夹中，无法创建快捷方式。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1628"/>
        <source>Created a shortcut to this instance on your desktop!</source>
        <translation>快捷方式已创建！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1636"/>
        <source>Failed to create instance shortcut!</source>
        <translation>实例快捷方式创建失败！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1551"/>
        <source>Launcher is running as misconfigured AppImage? ($APPIMAGE environment variable is missing)</source>
        <translation>启动器现在是在错误配置的 AppImage 中运行吗？（未找到 $APPIMAGE 环境变量）</translation>
    </message>
    <message>
        <source>Quilt is currently not supported by CurseForge modpacks.</source>
        <translation type="vanished">CurseForge 整合包还未支持 Quilt。</translation>
    </message>
    <message>
        <source>Snapshots are currently not supported by CurseForge modpacks.</source>
        <translation type="vanished">CurseForge 整合包还未支持快照。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="552"/>
        <source>&amp;Rename group</source>
        <translation>重命名群组(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1165"/>
        <source>Are you sure you want to delete the group &apos;%1&apos;?</source>
        <translation>您确定要删除群组“%1”吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1175"/>
        <source>Rename group</source>
        <translation>重命名群组</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1184"/>
        <source>Cannot rename group</source>
        <translation>无法重命名群组</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1184"/>
        <source>Cannot set empty name.</source>
        <translation>名称不能为空。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1184"/>
        <source>Group already exists. :/</source>
        <translation>已存在该群组。:/</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1531"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1542"/>
        <source>Create instance Application</source>
        <translation>创建实例项目</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1531"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1542"/>
        <source>Failed to create icon for Application.</source>
        <translation>无法创建项目图标。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1566"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1574"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1606"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1617"/>
        <source>Failed to create icon for shortcut.</source>
        <translation>无法创建快捷方式的图标。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1583"/>
        <source>Desktop Entries (*.desktop)</source>
        <translation>桌面快捷方式 (*.desktop)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1622"/>
        <source>Not supported on your platform!</source>
        <translation>不支持您的平台！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1630"/>
        <source>Created a shortcut to this instance!</source>
        <translation>为当前实例添加快捷方式！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1718"/>
        <source>Rename Instance</source>
        <translation>重命名实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1730"/>
        <source>Your instance folder contains &apos;!&apos; and this is known to cause Java problems!</source>
        <translation>您的实例文件夹包含“!”符号，这可能会导致 Java 出现问题！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1731"/>
        <source>You have now two options: &lt;br/&gt; - change the instance folder in the settings &lt;br/&gt; - move this installation of %1 to a different folder</source>
        <translation>您现在有两个选项可选：&lt;br/&gt; - 在设置中修改实例文件夹 &lt;br/&gt; - 将 %1 移动至其他文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1739"/>
        <source>This is a problem: &lt;br/&gt; - The launcher will likely be deleted without warning by the operating system &lt;br/&gt; - close the launcher now and extract it to a real location, not a temporary folder</source>
        <translation>发现一个问题：&lt;br/&gt; - 操作系统可能会在没有事先警告的情况下自动删除此启动器 &lt;br/&gt; - 马上关闭启动器并将启动器解压至其他目录，而非临时文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1745"/>
        <source>Your instance folder contains &apos;Rar$&apos; - that means you haven&apos;t extracted the launcher archive!</source>
        <translation>您的实例文件夹包含“Rar$”——这意味着您并未解压启动器压缩包！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1751"/>
        <source>Your instance folder is in a temporary folder: &apos;%1&apos;!</source>
        <translation>您的实例文件夹位于临时文件夹：%1 中！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1765"/>
        <source>Total playtime: %1</source>
        <translation>总游戏时长：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="833"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="881"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="888"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="970"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="984"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="1017"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="631"/>
        <source>Open %1 Discord guild.</source>
        <translation>打开 %1 Discord 频道。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="204"/>
        <source>&amp;Accounts</source>
        <translation>账号(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.ui" line="727"/>
        <location filename="src/launcher/ui/MainWindow.cpp" line="743"/>
        <source>Accounts</source>
        <translation>账号</translation>
    </message>
    <message>
        <source>Couldn&apos;t create folder for update downloads:
%1</source>
        <translation type="vanished">无法为升级下载创建文件夹：
%1</translation>
    </message>
    <message>
        <source>Open %1 discord voice chat.</source>
        <translation type="vanished">打开 %1 Discord 语音聊天室。</translation>
    </message>
</context>
<context>
    <name>ManagedPackPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="37"/>
        <source>Pack information</source>
        <translation>整合包信息</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="45"/>
        <source>Pack name:</source>
        <translation>整合包名称：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="63"/>
        <source>Current version:</source>
        <translation>当前版本：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="87"/>
        <source>Provider information:</source>
        <translation>托管平台信息：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="133"/>
        <source>Update to version:</source>
        <translation>更新到版本：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="152"/>
        <source>Fetching versions...</source>
        <translation>获取版本中……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="165"/>
        <source>Update from file</source>
        <translation>从文件更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="180"/>
        <source>Changelog</source>
        <translation>更新日志</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="186"/>
        <source>No changelog available for this version!</source>
        <translation>此版本没有可用的更新日志！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.ui" line="201"/>
        <source>Reload page</source>
        <translation>重新加载页面</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="146"/>
        <source>This is a local modpack.
This can be updated only using a file in %1 format
</source>
        <translation>这是本地整合包。
只能使用 %1 格式文件更新
</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="153"/>
        <source>Website: &lt;a href=%1&gt;%2&lt;/a&gt;    |    Pack ID: %3    |    Version ID: %4</source>
        <translation>网站：&lt;a href=%1&gt;%2&lt;/a&gt;    |    整合包 ID：%3    |    版本 ID：%4</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="196"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="200"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="203"/>
        <source>Task aborted</source>
        <translation>任务已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="203"/>
        <source>The task has been aborted by the user.</source>
        <translation>任务已被用户终止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="208"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="216"/>
        <source>Update pack</source>
        <translation>更新整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="227"/>
        <source>Failed to search for available versions.</source>
        <translation>搜索可用版本失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="230"/>
        <source>Failed to request changelog data for this modpack.</source>
        <translation>无法获取此整合包的更新日志数据。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="232"/>
        <source>Cannot update!</source>
        <translation>无法更新！</translation>
    </message>
</context>
<context>
    <name>Meta::Index</name>
    <message>
        <location filename="src/launcher/meta/Index.cpp" line="65"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
</context>
<context>
    <name>MigrationEligibilityStep</name>
    <message>
        <source>Checking for migration eligibility.</source>
        <translation type="vanished">正在检查迁移资格。</translation>
    </message>
    <message>
        <source>Got migration flags</source>
        <translation type="vanished">已成功获取迁移标志</translation>
    </message>
</context>
<context>
    <name>MinecraftAccount</name>
    <message>
        <location filename="src/launcher/minecraft/auth/MinecraftAccount.cpp" line="129"/>
        <location filename="src/launcher/minecraft/auth/MinecraftAccount.cpp" line="144"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
</context>
<context>
    <name>MinecraftInstance</name>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="250"/>
        <source>&amp;Launch</source>
        <translation>启动(&amp;L)</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="252"/>
        <source>Launch &amp;Offline</source>
        <translation>离线启动(&amp;O)</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="253"/>
        <source>Ctrl+Shift+O</source>
        <translation>Ctrl+Shift+O</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="254"/>
        <source>Launch &amp;Demo</source>
        <translation>启动演示模式(&amp;D)</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="255"/>
        <source>Ctrl+Alt+O</source>
        <translation>Ctrl+Alt+O</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="263"/>
        <source>Profilers</source>
        <translation>分析器</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="273"/>
        <source>&amp;No Profiler</source>
        <translation>不使用分析器(&amp;N)</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="919"/>
        <source>&lt;SESSION ID&gt;</source>
        <translation>&lt;SESSION ID&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="922"/>
        <source>&lt;ACCESS TOKEN&gt;</source>
        <translation>&lt;ACCESS TOKEN&gt;</translation>
    </message>
    <message>
        <source>&lt;CLIENT TOKEN&gt;</source>
        <translation type="vanished">&lt;CLIENT TOKEN&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="924"/>
        <source>&lt;PROFILE ID&gt;</source>
        <translation>&lt;PROFILE ID&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="990"/>
        <source>broken</source>
        <translation>损坏</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="1001"/>
        <source>Minecraft %1</source>
        <translation>Minecraft %1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="1006"/>
        <source>, last played on %1 for %2</source>
        <translation>，上一次是在 %1 时游玩了 %2</translation>
    </message>
    <message>
        <source>Minecraft %1 (%2)</source>
        <translation type="vanished">Minecraft %1 （%2）</translation>
    </message>
    <message>
        <source>, last played for %1</source>
        <translation type="vanished">，最后一次游玩时长: %1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="1013"/>
        <source>, total played for %1</source>
        <translation>，此实例总游玩时长：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MinecraftInstance.cpp" line="1018"/>
        <source>, has crashed.</source>
        <translation>，最后一次运行发生崩溃。</translation>
    </message>
</context>
<context>
    <name>MinecraftLoadAndCheck</name>
    <message>
        <location filename="src/launcher/minecraft/MinecraftLoadAndCheck.cpp" line="20"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
</context>
<context>
    <name>MinecraftPage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="48"/>
        <source>Window Size</source>
        <translation>窗口大小</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="54"/>
        <source>Start Minecraft &amp;maximized</source>
        <oldsource>Start Minecraft &amp;maximized?</oldsource>
        <translation>启动时最大化 Minecraft 窗口(&amp;M)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="63"/>
        <source>Window &amp;height:</source>
        <oldsource>Window hei&amp;ght:</oldsource>
        <translation>窗口高度(&amp;H)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="73"/>
        <source>Window &amp;width:</source>
        <oldsource>W&amp;indow width:</oldsource>
        <translation>窗口宽度(&amp;W)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="197"/>
        <source>Tweaks</source>
        <translation>微调</translation>
    </message>
    <message>
        <source>Mod loader settings</source>
        <translation type="vanished">模组加载器设置</translation>
    </message>
    <message>
        <source>Disable Quilt Loader Beacon</source>
        <translation type="vanished">禁用 Quilt 加载器计数 Beacon</translation>
    </message>
    <message>
        <source>Disable Quilt loader&apos;s beacon for counting monthly active users</source>
        <translation type="vanished">禁用 Quilt 加载器为计算月活跃用户发出的 Beacon</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="203"/>
        <source>Legacy settings</source>
        <translation>旧版设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="209"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Emulates usages of old online services which are no longer operating.&lt;/p&gt;&lt;p&gt;Current fixes include: skin and online mode support.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Emulates usages of old online services which are no longer operating.&lt;/p&gt;&lt;p&gt;This currently allows modern skins to be used.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;模拟官方不再维护的旧在线服务。&lt;/p&gt;&lt;p&gt;目前包含：皮肤与在线模式支持。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="212"/>
        <source>Enable online fixes (experimental)</source>
        <translation>模拟旧版在线服务（实验性）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="222"/>
        <source>Native library workarounds</source>
        <translation>系统运行库</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="228"/>
        <source>Use system installation of &amp;GLFW</source>
        <oldsource>Use system installation of GLFW</oldsource>
        <translation>使用系统 GLFW(&amp;G)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="235"/>
        <source>&amp;GLFW library path</source>
        <translation>GLFW 图形库框架路径(&amp;G)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="245"/>
        <source>Use system installation of &amp;OpenAL</source>
        <oldsource>Use system installation of OpenAL</oldsource>
        <translation>使用系统 OpenAL(&amp;O)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="252"/>
        <source>&amp;OpenAL library path</source>
        <translation>OpenAL 程序库路径(&amp;O)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="279"/>
        <source>Performance</source>
        <translation>性能</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="285"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable Feral Interactive&apos;s GameMode, to potentially improve gaming performance.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用 Feral Interactive&apos;s GameMode，可能会提高游戏性能。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="288"/>
        <source>Enable Feral GameMode</source>
        <translation>启用 Feral Interactive&apos;s GameMode</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="295"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable MangoHud&apos;s advanced performance overlay.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用 MangoHud 的高级性能覆盖。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="298"/>
        <source>Enable MangoHud</source>
        <translation>启用 MangoHud</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="305"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Use the discrete GPU instead of the primary GPU.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;使用独显替代核显（适用于双显卡用户）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="308"/>
        <source>Use discrete GPU</source>
        <translation>使用独显</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="315"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Use Zink, a Mesa OpenGL driver that implements OpenGL on top of Vulkan. Performance may vary depending on the situation. Note: If no suitable Vulkan driver is found, software rendering will be used.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;使用 Zink（用来基于 Vulkan 上实现 OpenGL 的 Mesa OpenGL 驱动程序）。性能可能因情况而异。注：如果没有找到合适的 Vulkan 驱动程序，将使用软件渲染。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="318"/>
        <source>Use Zink</source>
        <translation>使用 Zink</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="117"/>
        <source>Game time</source>
        <translation>游戏时长</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="42"/>
        <source>General</source>
        <translation>常规</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="123"/>
        <source>Show time spent &amp;playing instances</source>
        <oldsource>Show time spent playing instances</oldsource>
        <translation>显示单实例的游玩时长(&amp;P)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="130"/>
        <source>Show time spent playing across &amp;all instances</source>
        <oldsource>Show time spent playing across all instances</oldsource>
        <translation>显示游玩所有实例的总时长(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="137"/>
        <source>&amp;Record time spent playing instances</source>
        <oldsource>Record time spent playing instances</oldsource>
        <translation>记录单实例的游玩时长(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="144"/>
        <source>Show time spent playing in hours</source>
        <translation>以小时为单位显示游玩时间</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="154"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="160"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The launcher will automatically reopen when the game crashes or exits.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;PolyMC will automatically reopen when the game crashes or exits.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;当游戏崩溃或退出时，启动器会自动重新打开。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="163"/>
        <source>&amp;Close the launcher after game window opens</source>
        <oldsource>Close the launcher after game window opens</oldsource>
        <translation>游戏启动后关闭启动器(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="170"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The launcher will automatically quit after the game exits or crashes.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;PolyMC will automatically exit if the game crashes or exists.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;如果游戏启动或崩溃后，启动器将自动退出。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.ui" line="173"/>
        <source>&amp;Quit the launcher after game window closes</source>
        <oldsource>Quit the launcher after game window closes</oldsource>
        <translation>游戏窗口关闭后退出启动器(&amp;Q)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.h" line="58"/>
        <source>Minecraft</source>
        <translation>Minecraft</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.cpp" line="139"/>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.cpp" line="146"/>
        <source>Path to %1 library file</source>
        <translation>&amp;1 程序库路径</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.cpp" line="142"/>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.cpp" line="149"/>
        <source>Auto detected path: %1</source>
        <translation>自动检测到路径：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.cpp" line="163"/>
        <source>Feral Interactive&apos;s GameMode could not be found on your system.</source>
        <translation>无法在您的系统上找到 Feral Interactive&apos;s GameMode。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/MinecraftPage.cpp" line="168"/>
        <source>MangoHud could not be found on your system.</source>
        <translation>无法在您的系统上找到 MangoHud 。</translation>
    </message>
</context>
<context>
    <name>MinecraftProfileStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MinecraftProfileStep.cpp" line="14"/>
        <source>Fetching the Minecraft profile.</source>
        <translation>正在获取 Minecraft 档案。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MinecraftProfileStep.cpp" line="39"/>
        <source>Account has no Minecraft profile.</source>
        <translation>此账号没有 Minecraft 档案。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MinecraftProfileStep.cpp" line="53"/>
        <location filename="src/launcher/minecraft/auth/steps/MinecraftProfileStep.cpp" line="55"/>
        <source>Minecraft Java profile acquisition failed: %1</source>
        <translation>Minecraft Java 版档案获取失败：%1</translation>
    </message>
    <message>
        <source>Minecraft Java profile acquisition failed.</source>
        <translation type="vanished">Minecraft Java 版个人资料获取失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MinecraftProfileStep.cpp" line="61"/>
        <source>Minecraft Java profile response could not be parsed</source>
        <translation>获取 Minecraft Java 版档案时收到的响应无法解析</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/MinecraftProfileStep.cpp" line="65"/>
        <source>Minecraft Java profile acquisition succeeded.</source>
        <translation>Minecraft Java 版档案获取成功。</translation>
    </message>
</context>
<context>
    <name>MinecraftProfileStepMojang</name>
    <message>
        <source>Fetching the Minecraft profile.</source>
        <translation type="vanished">获取 Minecraft 档案中。</translation>
    </message>
    <message>
        <source>A UUID is required to get the profile.</source>
        <translation type="vanished">必须指定一个 UUID。</translation>
    </message>
    <message>
        <source>Account has no Minecraft profile.</source>
        <translation type="vanished">此账号没有 Minecraft 档案。</translation>
    </message>
    <message>
        <source>Minecraft Java profile acquisition failed: %1</source>
        <translation type="vanished">Minecraft Java 版档案获取失败：%1</translation>
    </message>
    <message>
        <source>Minecraft Java profile acquisition failed.</source>
        <translation type="vanished">Minecraft Java 版个人资料获取失败。</translation>
    </message>
    <message>
        <source>Minecraft Java profile response could not be parsed</source>
        <translation type="vanished">获取 Minecraft Java 版档案时收到的响应无法解析</translation>
    </message>
    <message>
        <source>Minecraft Java profile acquisition succeeded.</source>
        <translation type="vanished">Minecraft Java 版档案获取成功。</translation>
    </message>
</context>
<context>
    <name>MinecraftUpdate</name>
    <message>
        <location filename="src/launcher/minecraft/MinecraftUpdate.cpp" line="82"/>
        <source>Aborted by user.</source>
        <translation>操作被用户终止。</translation>
    </message>
</context>
<context>
    <name>ModDownloadDialog</name>
    <message>
        <source>Review and confirm</source>
        <translation type="vanished">检查并确认</translation>
    </message>
    <message>
        <source>Ctrl+Return</source>
        <translation type="vanished">Ctrl+Return</translation>
    </message>
    <message>
        <source>Opens a new popup to review your selected mods and confirm your selection. Shortcut: Ctrl+Return</source>
        <translation type="vanished">打开一个新的弹出窗口来检查你选择的模组并确认你的选择。快捷方式：Ctrl+Return</translation>
    </message>
    <message>
        <source>Download mods</source>
        <translation type="vanished">下载模组</translation>
    </message>
    <message>
        <source>Confirm mods to download</source>
        <translation type="vanished">确认要下载的模组</translation>
    </message>
</context>
<context>
    <name>ModDownloadTask</name>
    <message>
        <source>Downloading mod:
%1</source>
        <translation type="vanished">正在下载模组：
%1</translation>
    </message>
    <message>
        <source>Mod download</source>
        <translation type="vanished">模组下载</translation>
    </message>
</context>
<context>
    <name>ModFilterWidget</name>
    <message>
        <location filename="src/launcher/ui/widgets/ModFilterWidget.ui" line="21"/>
        <source>Minecraft versions</source>
        <translation>Minecraft 版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ModFilterWidget.cpp" line="22"/>
        <source>failed to get version index</source>
        <translation>获取版本索引失败</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ModFilterWidget.cpp" line="58"/>
        <source>Strict match (= %1)</source>
        <translation>严格匹配（= %1）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ModFilterWidget.cpp" line="63"/>
        <source>Major version match (= %1.%2.x)</source>
        <translation>主要版本匹配（= %1.%2.x）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ModFilterWidget.cpp" line="65"/>
        <source>Major version match (unsupported)</source>
        <translation>主要版本匹配（不支持）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ModFilterWidget.cpp" line="68"/>
        <source>Any version</source>
        <translation>任意版本</translation>
    </message>
</context>
<context>
    <name>ModFolderModel</name>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="89"/>
        <source>Folder</source>
        <translation>文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="91"/>
        <source>File</source>
        <translation>文件</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="103"/>
        <source>Unknown</source>
        <extracomment>Unknown mod provider (i.e. not Modrinth, CurseForge, etc...)</extracomment>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="116"/>
        <source>
Warning: This resource is symbolically linked from elsewhere. Editing it will also change the original.
Canonical Path: %1</source>
        <translation>
警告：此资源使用符号链接链接到其他资源，编辑时原资源也会改变。
规范路径：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="122"/>
        <source>
Warning: This resource is hard linked elsewhere. Editing it will also change the original.</source>
        <translation>
警告：此资源使用硬链接链接到其他地方，编辑时原资源也会改变。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="66"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="66"/>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <source>Last changed</source>
        <translation type="vanished">最后更改</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="66"/>
        <source>Provider</source>
        <translation>托管平台</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="66"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="66"/>
        <source>Image</source>
        <translation>图标</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="66"/>
        <source>Last Modified</source>
        <translation>最近修改</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="170"/>
        <source>Is the mod enabled?</source>
        <translation>此 Mod 是否启用。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="172"/>
        <source>The name of the mod.</source>
        <translation>Mod 的名称。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="174"/>
        <source>The version of the mod.</source>
        <translation>Mod 版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="176"/>
        <source>The date and time this mod was last changed (or added).</source>
        <translation>该 Mod 最后一次更改（或添加）的准确时间。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ModFolderModel.cpp" line="178"/>
        <source>Where the mod was downloaded from.</source>
        <translation>Mod 下载处。</translation>
    </message>
</context>
<context>
    <name>ModFolderPage</name>
    <message>
        <source>Filter:</source>
        <translation type="vanished">过滤器：</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation type="vanished">选择</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="vanished">添加（&amp;A）</translation>
    </message>
    <message>
        <source>Add</source>
        <translation type="vanished">添加</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="vanished">删除（&amp;R）</translation>
    </message>
    <message>
        <source>Remove selected mods</source>
        <translation type="vanished">删除选定的模组</translation>
    </message>
    <message>
        <source>&amp;Enable</source>
        <translation type="vanished">启用（&amp;E）</translation>
    </message>
    <message>
        <source>Enable selected mods</source>
        <translation type="vanished">启用选中的模组</translation>
    </message>
    <message>
        <source>&amp;Disable</source>
        <translation type="vanished">禁用（&amp;D）</translation>
    </message>
    <message>
        <source>Disable selected mods</source>
        <translation type="vanished">禁用选中的模组</translation>
    </message>
    <message>
        <source>View &amp;Configs</source>
        <translation type="vanished">查看配置（&amp;C）</translation>
    </message>
    <message>
        <source>Open the &apos;config&apos; folder in the system file manager.</source>
        <translation type="vanished">在文件资源管理器中打开“config“文件夹。</translation>
    </message>
    <message>
        <source>View &amp;Folder</source>
        <translation type="vanished">查看文件夹（&amp;F）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="78"/>
        <source>Download mods</source>
        <translation>下载 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="79"/>
        <source>Download mods from online mod platforms</source>
        <translation>从 Mod 托管平台下载 Mod</translation>
    </message>
    <message>
        <source>Add .jar</source>
        <translation type="vanished">添加 .jar 文件</translation>
    </message>
    <message>
        <source>Add mods via local file</source>
        <translation type="vanished">通过本地文件添加模组</translation>
    </message>
    <message>
        <source>Context menu</source>
        <translation type="vanished">上下文菜单</translation>
    </message>
    <message>
        <source>Select %1</source>
        <comment>Select whatever type of files the page contains. Example: &apos;Loader Mods&apos;</comment>
        <translation type="vanished">选择 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="81"/>
        <source>Add file</source>
        <translation>添加文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="82"/>
        <source>Add a locally downloaded file</source>
        <translation>添加本地文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="96"/>
        <source>Check for Updates</source>
        <translation>检查更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="97"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="117"/>
        <source>Try to check or update all selected mods (all mods if none are selected)</source>
        <oldsource>Tries to find / update all selected mods (all mods if none is selected)</oldsource>
        <translation>尝试检查并更新所有选中的 Mod（默认全选）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="100"/>
        <source>Verify Dependencies</source>
        <translation>同时更新前置 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="102"/>
        <source>Try to update and check for missing dependencies all selected mods (all mods if none are selected)</source>
        <translation>尝试检查并更新选定的 Mod（默认全选）是否缺少前置 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="110"/>
        <source>Reset update metadata</source>
        <translation>重置更新元数据</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="121"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="140"/>
        <source>Go to mod&apos;s home page</source>
        <translation>前往 Mod 主页</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="111"/>
        <source>Remove mod&apos;s metadata</source>
        <translation>删除 Mod 元数据</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="139"/>
        <source>Visit mod&apos;s page</source>
        <translation>访问 Mod 页面</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="143"/>
        <source>Visit mods&apos; pages</source>
        <translation>访问 Mod 页面</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="144"/>
        <source>Go to the pages of the selected mods</source>
        <translation>前往已选 Mod 页面</translation>
    </message>
    <message>
        <source>Remove mods&apos; metadata</source>
        <translation type="vanished">删除模组的元数据</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="197"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="205"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="239"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="243"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="288"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="197"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="239"/>
        <source>Please install a mod loader first!</source>
        <translation>请先安装一个 Mod 加载器！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="209"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="269"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="292"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="209"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="292"/>
        <source>Download stopped by user.</source>
        <translation>下载被用户终止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="215"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="298"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="225"/>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="308"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="243"/>
        <source>Mod updates are unavailable when metadata is disabled!</source>
        <translation>当元数据被禁用时， Mod 更新不可用！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="248"/>
        <source>Confirm Update</source>
        <translation>确认更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="249"/>
        <source>Updating mods while the game is running may cause mod duplication and game crashes.
The old files may not be deleted as they are in use.
Are you sure you want to do this?</source>
        <oldsource>If you update mods while the game is running may cause mod duplication and game crashes.
The old files may not be deleted as they are in use.
Are you sure you want to do this?</oldsource>
        <translation>在游戏运行时更新 Mod，可能会导致 Mod 重复或游戏崩溃。
由于游戏正在使用旧版本的 Mod，他们可能不会被删除。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="269"/>
        <source>The mod updater was aborted!</source>
        <translation>Mod 更新已终止！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="278"/>
        <source>All selected mods are up-to-date! :)</source>
        <translation>选中 Mod 均为最新版本！:)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="281"/>
        <source>Update checker</source>
        <translation>检查更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="366"/>
        <source>Confirm Removal</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="367"/>
        <source>You are about to remove the metadata for %1 mods.
Are you sure?</source>
        <translation>您将要删除 %1 个 Mod 的元数据。
您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="273"/>
        <source>&apos;%1&apos; is up-to-date! :)</source>
        <translation>“%1”已更新至最新版本！:)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="178"/>
        <source>Confirm Delete</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="179"/>
        <source>If you remove mods while the game is running it may crash your game.
Are you sure you want to do this?</source>
        <translation>在游戏运行时删除 Mod 可能导致崩溃。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.cpp" line="276"/>
        <source>All mods are up-to-date! :)</source>
        <oldsource>All %1mods are up-to-date! :)</oldsource>
        <translation>所有 Mod 均已是最新版本！:)</translation>
    </message>
    <message>
        <source>selected</source>
        <translation type="vanished">已选择</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.h" line="52"/>
        <source>Mods</source>
        <translation>Mod</translation>
    </message>
</context>
<context>
    <name>ModMinecraftJar</name>
    <message>
        <location filename="src/launcher/minecraft/launch/ModMinecraftJar.cpp" line="53"/>
        <source>Couldn&apos;t create the bin folder for Minecraft.jar</source>
        <translation>为 Minecraft.jar 创建 bin 文件夹时出错</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/ModMinecraftJar.cpp" line="58"/>
        <source>Couldn&apos;t remove stale jar file: %1</source>
        <translation>无法移除旧的 .jar 文件：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/ModMinecraftJar.cpp" line="71"/>
        <source>Failed to create the custom Minecraft jar file.</source>
        <translation>无法创建自定义 Minecraft.jar 文件。</translation>
    </message>
</context>
<context>
    <name>ModPage</name>
    <message>
        <source>Search</source>
        <translation type="vanished">搜索</translation>
    </message>
    <message>
        <source>Search for mods...</source>
        <oldsource>Search and filter...</oldsource>
        <translation type="vanished">搜索模组……</translation>
    </message>
    <message>
        <source>Version selected:</source>
        <translation type="vanished">所选版本：</translation>
    </message>
    <message>
        <source>Select mod for download</source>
        <translation type="vanished">选择要下载的模组</translation>
    </message>
    <message>
        <source>Filter options</source>
        <translation type="vanished">过滤选项</translation>
    </message>
    <message>
        <source> by </source>
        <translation type="vanished"> 作者 </translation>
    </message>
    <message>
        <source>Loading versions...</source>
        <translation type="vanished">正在加载版本……</translation>
    </message>
    <message>
        <source>No valid version found.</source>
        <translation type="vanished">未找到有效版本。</translation>
    </message>
    <message>
        <source>No valid version found!</source>
        <translation type="vanished">未找到有效版本！</translation>
    </message>
    <message>
        <source>Cannot select invalid version :(</source>
        <translation type="vanished">不能选择无效的版本 :(</translation>
    </message>
    <message>
        <source>Deselect mod for download</source>
        <translation type="vanished">取消选择要下载的模组</translation>
    </message>
    <message>
        <source>Donate information: </source>
        <translation type="vanished">赞助信息： </translation>
    </message>
    <message>
        <source>External links:</source>
        <translation type="vanished">外部链接：</translation>
    </message>
    <message>
        <source>Issues: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation type="vanished">问题：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Wiki: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation type="vanished">Wiki：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Source code: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation type="vanished">源代码：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Discord: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation type="vanished">Discord：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>ModPlatform::ListModel</name>
    <message>
        <source>Error</source>
        <translation type="vanished">错误</translation>
    </message>
    <message>
        <source>A network error occurred. Could not load mods.</source>
        <translation type="vanished">发生网络错误。无法加载模组。</translation>
    </message>
    <message>
        <source>API version too old!
Please update %1!</source>
        <extracomment>%1 refers to the launcher itself</extracomment>
        <translation type="vanished">API 版本太旧！
请更新 %1！</translation>
    </message>
</context>
<context>
    <name>ModUpdateDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="45"/>
        <source>Confirm mods to update</source>
        <translation>确认所要更新的 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="56"/>
        <source>You&apos;re about to update the following mods:</source>
        <translation>以下 Mod 即将更新：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="57"/>
        <source>Only mods with a check will be updated!</source>
        <translation>只有检查过的 Mod 会更新！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="75"/>
        <source>Mod name: %1&lt;br&gt;File name: %2&lt;br&gt;Reason: %3&lt;br&gt;&lt;br&gt;</source>
        <translation>Mod 名称：%1&lt;br/&gt;文件名：%2&lt;br/&gt;原因：%3&lt;br/&gt;&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="78"/>
        <source>Metadata generation failed</source>
        <translation>元数据生成失败</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="79"/>
        <source>Could not generate metadata for the following mods:&lt;br&gt;Do you wish to proceed without those mods?</source>
        <translation>无法为以下 Mod 生成元数据：&lt;br&gt;您想在不包含这些 Mod 的情況下继续吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="93"/>
        <source>Checking for updates</source>
        <translation>正在检查更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="112"/>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="196"/>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="339"/>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="354"/>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="409"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="117"/>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="201"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="123"/>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="206"/>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="365"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="124"/>
        <source>Checking for updates...</source>
        <translation>正在检查更新……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="170"/>
        <source>Mod name: %1</source>
        <translation>Mod 名称：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="172"/>
        <source>Reason: %1</source>
        <translation>原因：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="175"/>
        <source>Possible solution: Getting the latest version manually:&lt;br&gt;%1&lt;br&gt;</source>
        <extracomment>%1 is the link to download it manually</extracomment>
        <translation>可能的解决方案：手动获取最新版本：&lt;br&gt;%1&lt;br&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="207"/>
        <source>Checking for dependencies...</source>
        <translation>正在检查前置 Mod……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="310"/>
        <source>The mod &apos;%1&apos; does not have a metadata yet. We need to generate it in order to track relevant information on how to update this mod. To do this, please select a mod provider which we can use to check for updates for this mod.</source>
        <translation>Mod “%1” 还没有元数据。我们需要生成相关信息用于检查 Mod 更新。因此，请选择一个 Mod 托管平台，并使用它来检查此 Mod 的更新。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="413"/>
        <source>Couldn&apos;t find a valid version on the selected mod provider(s)</source>
        <translation>在所选 Mod 托管平台上找不到有效版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="424"/>
        <source>Mod was disabled as it may be already instaled.</source>
        <translation>可能有相同版本已被安装，故此模组被禁用。</translation>
    </message>
    <message>
        <source>Possible solution: </source>
        <translation type="vanished">可能的解决方法： </translation>
    </message>
    <message>
        <source>Getting the latest version manually:</source>
        <translation type="vanished">手动获取最新版本：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="180"/>
        <source>Failed to check for updates</source>
        <translation>检查更新失败</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="181"/>
        <source>Could not check or get the following mods for updates:&lt;br&gt;Do you wish to proceed without those mods?</source>
        <translation>无法获取以下 Mod 更新：&lt;br&gt;您想在不包含这些 Mod 的情況下继续吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="267"/>
        <source>Looking for metadata</source>
        <translation>正在查找元数据</translation>
    </message>
    <message>
        <source>This mod (%1) does not have a metadata yet. We need to create one in order to keep relevant information on how to update this mod. To do this, please select a mod provider from which we can search for updates for %1.</source>
        <translation type="vanished">Mod（%1）还没有Metadata。我们需要创建一份Metadata，以保留如何更新此Mod的相关信息。请先选择一个Mod托管平台，我们将通过此平台查询 %1 是否有可用更新。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="366"/>
        <source>Generating metadata...</source>
        <translation>生成元数据中……</translation>
    </message>
    <message>
        <source>Didn&apos;t find a valid version on the selected mod provider(s)</source>
        <translation type="vanished">无法在所选择的Mod托管平台上找到可用的版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="430"/>
        <source>Provider: %1</source>
        <translation>Mod 托管平台：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="433"/>
        <source>Old version: %1</source>
        <translation>旧版本：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="433"/>
        <source>Not installed</source>
        <translation>未安装</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="436"/>
        <source>New version: %1</source>
        <translation>新版本：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="440"/>
        <source>New Version Type: %1</source>
        <translation>新版本类型：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="446"/>
        <source>Required by: %1</source>
        <translation>%1 的前置 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="448"/>
        <source>Required by:</source>
        <translation>为以下 Mod 的前置 Mod：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ModUpdateDialog.cpp" line="462"/>
        <source>Changelog of the latest version</source>
        <translation>最新版本的更新日志</translation>
    </message>
</context>
<context>
    <name>ModpacksCH::PackInstallTask</name>
    <message>
        <source>Aborted</source>
        <translation type="vanished">中断</translation>
    </message>
    <message>
        <source>Getting the manifest...</source>
        <translation type="vanished">获取清单中……</translation>
    </message>
    <message>
        <source>Failed to find pack version %1</source>
        <translation type="vanished">无法找到包版本 %1</translation>
    </message>
    <message>
        <source>Could not understand pack manifest:
</source>
        <translation type="vanished">无法解析包清单：
</translation>
    </message>
    <message>
        <source>Resolving mods...</source>
        <translation type="vanished">解析模组中……</translation>
    </message>
    <message>
        <source>Invalid manifest: There&apos;s no information available to download the file &apos;%1&apos;!</source>
        <translation type="vanished">无效清单：下载 &apos;%1&apos;文件的信息不可用！</translation>
    </message>
    <message>
        <source>Blocked files found</source>
        <translation type="vanished">发现了被屏蔽的文件</translation>
    </message>
    <message>
        <source>The following files are not available for download in third party launchers.&lt;br/&gt;You will need to manually download them and add them to the instance.</source>
        <translation type="vanished">在第三方启动器中无法下载下列文件。&lt;br/&gt;你需要手动下载它们并将它们添加到实例中。</translation>
    </message>
    <message>
        <source>Creating the instance...</source>
        <translation type="vanished">正在创建实例……</translation>
    </message>
    <message>
        <source>Downloading mods...</source>
        <translation type="vanished">正在下载模组……</translation>
    </message>
    <message>
        <source>Mod download</source>
        <translation type="vanished">模组下载</translation>
    </message>
    <message>
        <source>Copying Blocked Mods...</source>
        <translation type="vanished">正在复制被屏蔽的模组……</translation>
    </message>
    <message>
        <source>Copying Blocked Mods (%1 out of %2 are done)</source>
        <translation type="vanished">正在复制被屏蔽的模组（已完成 %2 中的 %1 项）</translation>
    </message>
    <message>
        <source>Copying modpack files...</source>
        <translation type="vanished">正在复制 mod 整合包文件…</translation>
    </message>
    <message>
        <source>Installing modpack...</source>
        <translation type="vanished">正在安装 mod 整合包…</translation>
    </message>
    <message>
        <source>Copying modpack files</source>
        <translation type="vanished">正在复制模组包文件</translation>
    </message>
    <message>
        <source>Failed to copy files</source>
        <translation type="vanished">复制文件失败</translation>
    </message>
    <message>
        <source>Installing modpack</source>
        <translation type="vanished">正在安装模组包</translation>
    </message>
</context>
<context>
    <name>Modrinth::ListModel</name>
    <message>
        <source>Error</source>
        <translation type="obsolete">错误</translation>
    </message>
</context>
<context>
    <name>Modrinth::ModpackListModel</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthModel.cpp" line="357"/>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthModel.cpp" line="360"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthModel.cpp" line="357"/>
        <source>A network error occurred. Could not load modpacks.</source>
        <translation>发生网络错误，无法加载整合包。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthModel.cpp" line="364"/>
        <source>API version too old!
Please update %1!</source>
        <extracomment>%1 refers to the launcher itself</extracomment>
        <translation>API 版本太旧！
请更新 %1！</translation>
    </message>
</context>
<context>
    <name>ModrinthCheckUpdate</name>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthCheckUpdate.cpp" line="32"/>
        <source>Preparing mods for Modrinth...</source>
        <translation>正在从 Modrinth 准备 Mod……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthCheckUpdate.cpp" line="44"/>
        <source>Disabled mods won&apos;t be updated, to prevent mod duplication issues!</source>
        <translation>为避免 Mod 重复的问题，被停用的 Mod 将不会被更新！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthCheckUpdate.cpp" line="87"/>
        <source>Parsing the API response from Modrinth...</source>
        <translation>正在分析 Modrinth 的 API 返回数据……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthCheckUpdate.cpp" line="102"/>
        <source>No valid version found for this mod. It&apos;s probably unavailable for the current game version / mod loader.</source>
        <translation>未找到该 Mod 的有效版本。可能由于 Mod 没有适配该游戏版本或该 Mod 加载器。</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthCheckUpdate.cpp" line="132"/>
        <source>Mod has an empty download URL</source>
        <translation>Mod 的下载链接为空</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthCheckUpdate.cpp" line="176"/>
        <source>Waiting for the API response from Modrinth...</source>
        <translation>正在等待 Modrinth API 回应……</translation>
    </message>
</context>
<context>
    <name>ModrinthCreationTask</name>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="63"/>
        <source> (version %1)</source>
        <translation> （%1 版本）</translation>
    </message>
    <message>
        <source>Similar modpack was found!</source>
        <translation type="vanished">找到了相似的 mod 整合包！</translation>
    </message>
    <message>
        <source>One or more of your instances are from this same modpack%1. Do you want to create a separate instance, or update the existing one?

NOTE: Make sure you made a backup of your important instance data before updating, as worlds can be corrupted and some configuration may be lost (due to pack overrides).</source>
        <translation type="vanished">你拥有一个或更多的实例说基于此整合包%1。你想创建一个单独实例，还是更新现有的实例？

注：在更新实例前请确保备份了实例的重要数据，存档与配置文件可能会因整合包覆盖而被损坏或遗失。</translation>
    </message>
    <message>
        <source>Create new instance</source>
        <translation type="vanished">创建新实例</translation>
    </message>
    <message>
        <source>Update existing instance</source>
        <translation type="vanished">更新现有实例</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="vanished">取消</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="142"/>
        <source>No index file.</source>
        <translation>无索引文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="143"/>
        <source>We couldn&apos;t find a suitable index file for the older version. This may cause some of the files to be duplicated. Do you want to continue?</source>
        <translation>我们无法找到适合旧版本的索引文件，这可能导致部分文件重复。是否继续？</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="187"/>
        <source>Could not rename the overrides folder:
</source>
        <translation>无法重命名覆盖文件夹：
</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="200"/>
        <source>Could not rename the client overrides folder:
</source>
        <translation>无法重命名客户端覆盖文件夹：
</translation>
    </message>
    <message>
        <source>Mod download</source>
        <translation type="vanished">模组下载</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="237"/>
        <source>Mod Download Modrinth</source>
        <translation>从 Modrinth 下载 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="250"/>
        <source>One of the files has a path that leads to an arbitrary location (%1). This is a security risk and isn&apos;t allowed.</source>
        <translation>其中一个文件具有通向任意位置的路径（%1）。此操作因为有安全风险不被允许。</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="283"/>
        <source>%1 out of %2 complete</source>
        <translation>已完成 %1/%2</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="288"/>
        <source>Downloading mods...</source>
        <translation>正在下载 Mod……</translation>
    </message>
    <message>
        <source>Optional mod detected!</source>
        <translation type="vanished">检测到可选的模组！</translation>
    </message>
    <message>
        <source>One or more mods from this modpack are optional. They will be downloaded, but disabled by default!</source>
        <translation type="vanished">这个整合包中的一些模组是可选的。它们会被下载，但默认禁用！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="383"/>
        <source>Download URL for %1 is not a correctly formatted URL</source>
        <translation>%1 的下载链接格式不正确</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthInstanceCreationTask.cpp" line="436"/>
        <source>Could not understand pack index:
</source>
        <translation>无法解析整合包索引
</translation>
    </message>
</context>
<context>
    <name>ModrinthManagedPackPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="305"/>
        <source>%1 (Current)</source>
        <translation>%1（当前）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="317"/>
        <source>Fetching changelogs...</source>
        <translation>正在获取更新日志……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ManagedPackPage.cpp" line="374"/>
        <source>Choose update file</source>
        <translation>选择更新文件</translation>
    </message>
</context>
<context>
    <name>ModrinthModPage</name>
    <message>
        <source>Sort by Relevance</source>
        <translation type="vanished">按相关度排序</translation>
    </message>
    <message>
        <source>Sort by Downloads</source>
        <translation type="vanished">按下载量排序</translation>
    </message>
    <message>
        <source>Sort by Follows</source>
        <translation type="vanished">按关注数排序</translation>
    </message>
    <message>
        <source>Sort by Last Updated</source>
        <translation type="vanished">按最后更新时间排序</translation>
    </message>
    <message>
        <source>Sort by Newest</source>
        <translation type="vanished">按时间排序</translation>
    </message>
</context>
<context>
    <name>ModrinthPackExportTask</name>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthPackExportTask.cpp" line="54"/>
        <source>Searching for files...</source>
        <translation>搜索文件中……</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthPackExportTask.cpp" line="76"/>
        <source>Could not search for files</source>
        <translation>无法找到文件</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthPackExportTask.cpp" line="92"/>
        <source>Finding file hashes...</source>
        <translation>寻找文件哈希......</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthPackExportTask.cpp" line="157"/>
        <source>Finding versions for hashes...</source>
        <translation>寻找版本哈希......</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthPackExportTask.cpp" line="192"/>
        <source>Failed to parse versions response: %1</source>
        <translation>无法解析版本响应：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthPackExportTask.cpp" line="201"/>
        <source>Adding files...</source>
        <translation>新增文件中……</translation>
    </message>
    <message>
        <source>Could not create file</source>
        <translation type="vanished">无法新增文件</translation>
    </message>
    <message>
        <source>Could not create index</source>
        <translation type="vanished">无法创建索引</translation>
    </message>
    <message>
        <source>Could not read and compress %1</source>
        <translation type="vanished">无法读取和压缩 %1</translation>
    </message>
    <message>
        <source>A zip error occurred</source>
        <translation type="vanished">一个 Zip 文件发生错误</translation>
    </message>
</context>
<context>
    <name>ModrinthPage</name>
    <message>
        <source>Note: Modrinth modpacks are still in alpha phase. Some things may be rough on the edges, or not working at all! Use it with caution.</source>
        <translation type="vanished">注意： Modrinth 整合包仍处于 alpha 阶段。有些功能可能做得很粗糙，或者根本不能用！请谨慎使用。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.ui" line="69"/>
        <source>Search and filter ...</source>
        <translation>搜索和筛选……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.ui" line="76"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.ui" line="52"/>
        <source>Version selected:</source>
        <translation>已选版本：</translation>
    </message>
    <message>
        <source>Search and filter...</source>
        <oldsource>Search and filter ...</oldsource>
        <translation type="obsolete">搜索和过滤……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="81"/>
        <source>Sort by Relevance</source>
        <oldsource>Sort by Relevence</oldsource>
        <translation>按相关度排序</translation>
    </message>
    <message>
        <source>Sort by Downloads</source>
        <translation type="vanished">按下载量排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="83"/>
        <source>Sort by Follows</source>
        <translation>按关注数排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="85"/>
        <source>Sort by Last Updated</source>
        <oldsource>Sort by last updated</oldsource>
        <translation>按更新时间排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="84"/>
        <source>Sort by Newest</source>
        <oldsource>Sort by newest</oldsource>
        <translation>按发布时间排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="82"/>
        <source>Sort by Total Downloads</source>
        <translation>按总下载量排序</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="189"/>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="245"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="270"/>
        <source> by </source>
        <translation> 作者 </translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="274"/>
        <source>&lt;b&gt;This project has been archived. It will not receive any further updates unless the author decides to unarchive the project.&lt;/b&gt;</source>
        <translation>&lt;b&gt;该项目已归档。它将不会收到任何进一步的更新，除非作者决定取消归档该项目。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="279"/>
        <source>Donate information: </source>
        <translation>赞助信息： </translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="292"/>
        <source>External links:</source>
        <translation>外部链接：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="296"/>
        <source>Issues: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>问题： &lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="298"/>
        <source>Wiki: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>Wiki：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="300"/>
        <source>Source code: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>源代码：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.cpp" line="302"/>
        <source>Discord: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>Discord：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/modrinth/ModrinthPage.h" line="64"/>
        <source>Modrinth</source>
        <translation>Modrinth</translation>
    </message>
</context>
<context>
    <name>MultipleOptionsTask</name>
    <message>
        <source>Making attempt #%1 out of %2</source>
        <translation type="vanished">正在尝试 %2 次中的第 #%1 次</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/MultipleOptionsTask.cpp" line="49"/>
        <source>All attempts have failed!</source>
        <translation>所有尝试均失败！</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/MultipleOptionsTask.cpp" line="60"/>
        <source>Attempting task %1 out of %2</source>
        <translation>正在尝试 %2 任务中的任务 %1</translation>
    </message>
</context>
<context>
    <name>Net::Download</name>
    <message>
        <source>Downloading %1</source>
        <translation type="vanished">下载 %1 中</translation>
    </message>
    <message>
        <source>%1 / %2</source>
        <extracomment>Current amount of bytes downloaded, out of the total amount of bytes in the download</extracomment>
        <translation type="vanished">%1 / %2</translation>
    </message>
    <message>
        <source>unknown</source>
        <translation type="vanished">未知</translation>
    </message>
    <message>
        <source>%1 /s (%2)</source>
        <extracomment>Download speed, in bytes per second (remaining download time in parenthesis)</extracomment>
        <translation type="vanished">%1 /s (%2)</translation>
    </message>
    <message>
        <source>0 B/s</source>
        <extracomment>Download speed at 0 bytes per second</extracomment>
        <translation type="vanished">0 B/s</translation>
    </message>
</context>
<context>
    <name>Net::NetRequest</name>
    <message>
        <location filename="src/launcher/net/NetRequest.cpp" line="66"/>
        <source>Requesting %1</source>
        <translation>正在请求 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/net/NetRequest.cpp" line="144"/>
        <source>%1 / %2</source>
        <extracomment>Current amount of bytes downloaded, out of the total amount of bytes in the download</extracomment>
        <translation>%1 / %2</translation>
    </message>
    <message>
        <location filename="src/launcher/net/NetRequest.cpp" line="148"/>
        <source>unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="src/launcher/net/NetRequest.cpp" line="150"/>
        <source>%1 /s (%2)</source>
        <extracomment>Download speed, in bytes per second (remaining download time in parenthesis)</extracomment>
        <translation>%1 /s (%2)</translation>
    </message>
    <message>
        <location filename="src/launcher/net/NetRequest.cpp" line="153"/>
        <source>0 B/s</source>
        <extracomment>Download speed at 0 bytes per second</extracomment>
        <translation>0 B/s</translation>
    </message>
</context>
<context>
    <name>Net::Upload</name>
    <message>
        <source>Uploading %1</source>
        <translation type="vanished">上传中 %1</translation>
    </message>
</context>
<context>
    <name>NetJob</name>
    <message>
        <source>Job &apos;%1&apos; failed to process:
%2</source>
        <translation type="vanished">任务“%1”处理失败：
%2</translation>
    </message>
    <message>
        <location filename="src/launcher/net/NetJob.cpp" line="114"/>
        <source>Failed to abort all tasks in the NetJob!</source>
        <translation>未能终止 NetJob 的所有任务！</translation>
    </message>
    <message>
        <location filename="src/launcher/net/NetJob.cpp" line="140"/>
        <source>Executing %1 task(s) (%2 out of %3 are done)</source>
        <translation>正在执行 %1 个任务（%2/%3）</translation>
    </message>
</context>
<context>
    <name>NewComponentDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/NewComponentDialog.ui" line="17"/>
        <source>Add Empty Component</source>
        <translation>添加空组件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/NewComponentDialog.ui" line="30"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/NewComponentDialog.ui" line="37"/>
        <source>uid</source>
        <translation>uid</translation>
    </message>
</context>
<context>
    <name>NewInstanceDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/NewInstanceDialog.ui" line="17"/>
        <location filename="src/launcher/ui/dialogs/NewInstanceDialog.cpp" line="187"/>
        <source>New Instance</source>
        <translation>新实例</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/NewInstanceDialog.ui" line="39"/>
        <source>&amp;Group:</source>
        <translation>分组(&amp;G)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/NewInstanceDialog.ui" line="56"/>
        <source>&amp;Name:</source>
        <translation>名称(&amp;N)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/NewInstanceDialog.cpp" line="90"/>
        <source>No group</source>
        <translation>未分类</translation>
    </message>
</context>
<context>
    <name>NewsChecker</name>
    <message>
        <location filename="src/launcher/news/NewsChecker.cpp" line="112"/>
        <source>Failed to load news RSS feed:
%1</source>
        <translation>无法加载新闻 RSS 源：
%1</translation>
    </message>
</context>
<context>
    <name>NewsDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/NewsDialog.ui" line="14"/>
        <source>News</source>
        <translation>新闻</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/NewsDialog.ui" line="79"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/NewsDialog.ui" line="86"/>
        <location filename="src/launcher/ui/dialogs/NewsDialog.cpp" line="52"/>
        <source>Hide article list</source>
        <translation>隐藏文章列表</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/NewsDialog.cpp" line="50"/>
        <source>Show article list</source>
        <translation>显示文章列表</translation>
    </message>
</context>
<context>
    <name>NewsEntry</name>
    <message>
        <location filename="src/launcher/news/NewsEntry.cpp" line="23"/>
        <location filename="src/launcher/news/NewsEntry.cpp" line="51"/>
        <source>Untitled</source>
        <translation>无标题</translation>
    </message>
    <message>
        <location filename="src/launcher/news/NewsEntry.cpp" line="24"/>
        <location filename="src/launcher/news/NewsEntry.cpp" line="52"/>
        <source>No content.</source>
        <translation>无内容。</translation>
    </message>
</context>
<context>
    <name>NilModFolderPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ModFolderPage.h" line="93"/>
        <source>Nilmods</source>
        <translation>Nilmod</translation>
    </message>
</context>
<context>
    <name>NotesPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/NotesPage.h" line="54"/>
        <source>Notes</source>
        <translation>备注</translation>
    </message>
</context>
<context>
    <name>NotificationDialog</name>
    <message>
        <source>Notification</source>
        <translation type="vanished">通知</translation>
    </message>
    <message>
        <source>Don&apos;t show again</source>
        <translation type="vanished">不再提示</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="vanished">关闭</translation>
    </message>
</context>
<context>
    <name>NullInstance</name>
    <message>
        <location filename="src/launcher/NullInstance.h" line="52"/>
        <source>Unknown instance type</source>
        <translation>未知实例类型</translation>
    </message>
</context>
<context>
    <name>OfflineLoginDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/OfflineLoginDialog.ui" line="20"/>
        <source>Add Account</source>
        <translation>添加账号</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/OfflineLoginDialog.ui" line="42"/>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/OfflineLoginDialog.ui" line="49"/>
        <source>Usernames longer than 16 characters cannot be used for LAN games or offline-mode servers.</source>
        <translation>超过 16 个字符的用户名不能用于局域网联机或离线模式（关闭正版验证的）服务器。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/OfflineLoginDialog.ui" line="52"/>
        <source>Allow long usernames</source>
        <translation>允许超长用户名</translation>
    </message>
</context>
<context>
    <name>OfflineStep</name>
    <message>
        <source>Creating offline account.</source>
        <translation type="vanished">正在创建离线账户。</translation>
    </message>
    <message>
        <source>Created offline account.</source>
        <translation type="vanished">离线账户已成功创建。</translation>
    </message>
</context>
<context>
    <name>OptionalModDialog</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/OptionalModDialog.ui" line="14"/>
        <source>Select Optional Mods</source>
        <translation>选择可选 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/OptionalModDialog.ui" line="34"/>
        <source>Select All</source>
        <translation>全选</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/OptionalModDialog.ui" line="41"/>
        <source>Deselect All</source>
        <translation>全不选</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/OptionalModDialog.ui" line="61"/>
        <source>Unchecked mods will be disabled.</source>
        <translation>未选中的 Mod 会被禁用。</translation>
    </message>
</context>
<context>
    <name>OtherLogsPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="42"/>
        <source>Find</source>
        <translation>寻找</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="64"/>
        <source>Copy the whole log into the clipboard</source>
        <translation>复制整个日志到剪贴板</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="67"/>
        <source>&amp;Copy</source>
        <translation>复制(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="74"/>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="94"/>
        <source>Clear the log</source>
        <translation>清空日志</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="77"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="84"/>
        <source>Upload the log to the paste service configured in preferences.</source>
        <translation>上传日志到 paste.ee——只会保留一个月.</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="87"/>
        <source>Upload</source>
        <translation>上传</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="97"/>
        <source>Clean</source>
        <translation>清空</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="104"/>
        <source>Reload</source>
        <translation>重新加载</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.ui" line="123"/>
        <source>Search:</source>
        <translation>搜索：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="139"/>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="211"/>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="250"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="139"/>
        <source>Unable to open %1 for reading: %2</source>
        <translation>无法打开 %1 来读取：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="153"/>
        <source>The file (%1) is too big. You may want to open it in a viewer optimized for large files.</source>
        <translation>文件（%1）过大。需要用为大文件优化过的查看器打开。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="165"/>
        <source>The file (%1) is not readable.</source>
        <translation>文件（%1）不可读。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="196"/>
        <source>Confirm Deletion</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="197"/>
        <source>You are about to delete &quot;%1&quot;.
This may be permanent and it will be gone from the logs folder.

Are you sure?</source>
        <translation>将要删除：“%1”。
可能会将其从日志文件夹中永久删除。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="222"/>
        <source>Confirm Cleanup</source>
        <translation>确认清理</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="224"/>
        <source>Are you sure you want to delete all log files?</source>
        <translation>您确定要删除所有日志文件吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="227"/>
        <source>Are you sure you want to delete all these files?
%1</source>
        <translation>您确定要将这些文件全部删除吗？
%1</translation>
    </message>
    <message>
        <source>Do you really want to delete %1?</source>
        <translation type="vanished">你真的想要删除 %1 吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="211"/>
        <source>Unable to delete %1: %2</source>
        <translation>无法删除 %1：%2</translation>
    </message>
    <message>
        <source>Clean up</source>
        <translation type="vanished">清理</translation>
    </message>
    <message>
        <source>Do you really want to delete all log files?</source>
        <translation type="vanished">你真的要删除所有的日志文件吗？</translation>
    </message>
    <message>
        <source>Do you really want to delete these files?
%1</source>
        <translation type="vanished">你真的想要删除这些文件吗？
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="252"/>
        <source>Couldn&apos;t delete some files!</source>
        <translation>无法删除某些文件！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.cpp" line="255"/>
        <source>Couldn&apos;t delete some files:
%1</source>
        <translation>无法删除某些文件：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/OtherLogsPage.h" line="58"/>
        <source>Other logs</source>
        <translation>其他日志</translation>
    </message>
</context>
<context>
    <name>PackProfile</name>
    <message>
        <location filename="src/launcher/minecraft/PackProfile.cpp" line="344"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/PackProfile.cpp" line="571"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/PackProfile.cpp" line="573"/>
        <source>Version</source>
        <translation>版本</translation>
    </message>
</context>
<context>
    <name>PastePage</name>
    <message>
        <source>Log Upload</source>
        <translation type="obsolete">上传日志</translation>
    </message>
</context>
<context>
    <name>PasteUpload</name>
    <message>
        <location filename="src/launcher/net/PasteUpload.cpp" line="141"/>
        <source>Uploading to %1</source>
        <translation>正在上传至 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/net/PasteUpload.cpp" line="157"/>
        <source>Network error: %1</source>
        <translation>网络错误：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/net/PasteUpload.cpp" line="162"/>
        <source>Error: %1 returned unexpected status code %2 %3</source>
        <translation>错误：%1 返回了意外状态码 %2 %3</translation>
    </message>
    <message>
        <location filename="src/launcher/net/PasteUpload.cpp" line="180"/>
        <location filename="src/launcher/net/PasteUpload.cpp" line="202"/>
        <location filename="src/launcher/net/PasteUpload.cpp" line="226"/>
        <source>Error: %1 returned a malformed response body</source>
        <translation>错误：%1 返回了格式错误的响应体</translation>
    </message>
    <message>
        <location filename="src/launcher/net/PasteUpload.cpp" line="196"/>
        <source>Error: %1 returned an error: %2</source>
        <translation>错误：%1 返回错误：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/net/PasteUpload.cpp" line="219"/>
        <source>Error: %1 returned an error code: %2
Error message: %3</source>
        <translation>错误：%1 返回错误代码：%2
错误消息：%3</translation>
    </message>
</context>
<context>
    <name>PasteWizardPage</name>
    <message>
        <location filename="src/launcher/ui/setupwizard/PasteWizardPage.ui" line="14"/>
        <source>Form</source>
        <translation>格式</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/PasteWizardPage.ui" line="20"/>
        <source>The default paste service has changed to mclo.gs, please choose what you want to do with your settings.</source>
        <translation>默认剪切板服务已更改为 mclo.gs ，请选择您要对设置进行的操作。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/PasteWizardPage.ui" line="37"/>
        <source>Use new default service</source>
        <translation>使用新服务的默认设置</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/PasteWizardPage.ui" line="50"/>
        <source>Keep previous settings</source>
        <translation>保留以前的设置</translation>
    </message>
</context>
<context>
    <name>PixmapCache</name>
    <message>
        <location filename="src/launcher/MTPixmapCache.h" line="124"/>
        <source>pixmap cache misses by eviction happened too fast, doing nothing as the cache size reached it&apos;s limit</source>
        <translation>由于过于频繁的驱逐（eviction）导致无法命中 PixMap 缓存，在缓存达到容量限制时不执行任何操作</translation>
    </message>
    <message>
        <location filename="src/launcher/MTPixmapCache.h" line="127"/>
        <source>pixmap cache misses by eviction happened too fast, increasing cache size to</source>
        <translation>由于过于频繁的驱逐（eviction）导致无法命中 PixMap 缓存，在缓存达到容量限制时，将其大小增至</translation>
    </message>
</context>
<context>
    <name>PostLaunchCommand</name>
    <message>
        <location filename="src/launcher/launch/steps/PostLaunchCommand.cpp" line="55"/>
        <location filename="src/launcher/launch/steps/PostLaunchCommand.cpp" line="61"/>
        <source>Running Post-Launch command: %1</source>
        <translation>执行后执行命令：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/launch/steps/PostLaunchCommand.cpp" line="68"/>
        <source>Post-Launch command failed with code %1.

</source>
        <translation>启动后指令执行失败，错误代码 %1。

</translation>
    </message>
    <message>
        <location filename="src/launcher/launch/steps/PostLaunchCommand.cpp" line="84"/>
        <source>Post-Launch command ran successfully.

</source>
        <translation>后执行命令成功执行。

</translation>
    </message>
</context>
<context>
    <name>PreLaunchCommand</name>
    <message>
        <location filename="src/launcher/launch/steps/PreLaunchCommand.cpp" line="55"/>
        <location filename="src/launcher/launch/steps/PreLaunchCommand.cpp" line="61"/>
        <source>Running Pre-Launch command: %1</source>
        <translation>执行预执行命令：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/launch/steps/PreLaunchCommand.cpp" line="68"/>
        <source>Pre-Launch command failed with code %1.

</source>
        <translation>预执行命令执行失败，代码：%1。

</translation>
    </message>
    <message>
        <location filename="src/launcher/launch/steps/PreLaunchCommand.cpp" line="84"/>
        <source>Pre-Launch command ran successfully.

</source>
        <translation>预执行命令成功执行。

</translation>
    </message>
</context>
<context>
    <name>PrismExternalUpdater</name>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="89"/>
        <source>Checking for updates...</source>
        <translation>正在检查更新……</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="118"/>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="139"/>
        <source>Update Check Failed</source>
        <translation>更新检查失败</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="119"/>
        <source>Failed to start after 5 seconds
Reason: %1.</source>
        <translation>5 秒后仍然无法开始
原因：%1。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="140"/>
        <source>Updater failed to close 60 seconds
Reason: %1.</source>
        <translation>更新程序在 60 秒后未关闭
原因：%1。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="165"/>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="301"/>
        <source>No Update Available</source>
        <translation>无可用更新</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="165"/>
        <source>You are running the latest version.</source>
        <translation>您正在使用最新版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="176"/>
        <source>Update Check Error</source>
        <translation>检查更新出错</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="177"/>
        <source>There was an error running the update check.</source>
        <translation>在检查更新时发生错误。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="204"/>
        <source>Unknown Update Error</source>
        <translation>未知更新错误</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="205"/>
        <source>The updater exited with an unknown condition.
Exit Code: %1</source>
        <translation>更新程序因未知状况退出。
退出代码：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="207"/>
        <source>StdOut: %1
StdErr: %2</source>
        <translation>标准输出（StdOut）：%1
标准错误（StdErr）：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/PrismExternalUpdater.cpp" line="301"/>
        <source>There are no new updates available.</source>
        <translation>没有可用的更新。</translation>
    </message>
</context>
<context>
    <name>PrismUpdaterApp</name>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="224"/>
        <source>Use a custom path as application root (use &apos;.&apos; for current directory).</source>
        <translation>使用自定义路径作为应用程序根目录（“.”表示当前目录）。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="224"/>
        <source>directory</source>
        <translation>目录</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="226"/>
        <source>Use this version as the installed launcher version. (provided because stdout can not be reliably captured on windows)</source>
        <translation>使用此版本作为已安装的启动程序版本。[因在 Windows 上无法可靠地获取标准输出（StdOut）而提供]</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="227"/>
        <source>installed launcher version</source>
        <translation>已安装启动器版本</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="228"/>
        <source>version name</source>
        <translation>版本名</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="229"/>
        <source>Update from the specified repo.</source>
        <translation>从指定的仓库获取更新。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="229"/>
        <source>github repo url</source>
        <translation>Github 仓库网址</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="231"/>
        <source>Only check if an update is needed. Exit status 100 if true, 0 if false (or non 0 if there was an error).</source>
        <translation>仅检查是否需要更新。若需要，退出代码为 100 ，否则为 0（除非发生错误）。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="232"/>
        <source>Allow updating to pre-release releases</source>
        <translation>允许更新到预发布版本</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="233"/>
        <source>Force an update, even if one is not needed.</source>
        <translation>强制更新，即使不需要。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="234"/>
        <source>List available releases.</source>
        <translation>列出可用发行版。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="235"/>
        <source>Log debug to console.</source>
        <translation>将调试记录到控制台。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="236"/>
        <source>Select the version to install with a GUI.</source>
        <translation>使用 GUI 选择要安装的版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="237"/>
        <source>Allow the updater to downgrade to previous versions.</source>
        <translation>允许更新程序降级到以前的版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="248"/>
        <source>MacOS Not Supported</source>
        <translation>不支持 MacOS</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="248"/>
        <source>The updater does not support installations on MacOS</source>
        <translation>更新程序不支持在 MacOS 上安装</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="254"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="267"/>
        <source>Unsupported Installation</source>
        <translation>不支持此安装</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="255"/>
        <source>Updater is running as misconfigured AppImage? ($APPIMAGE environment variable is missing)</source>
        <translation>更新程序正在配置错误的 AppImage 中运行？（缺少环境变量“APPIMAGE”）</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="267"/>
        <source>The updater can not find the main executable.</source>
        <translation>更新程序找不到主可执行文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="363"/>
        <source>The launcher data folder is not writable!</source>
        <translation>启动器数据文件夹不可写入！</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="364"/>
        <source>The updater couldn&apos;t create a log file - the data folder is not writable.

Make sure you have write permissions to the data folder.
(%1)

The updater cannot continue until you fix this problem.</source>
        <translation>更新程序无法创建日志文件——数据文件夹不可写入。

请确保您有数据文件夹的写入权限。
（%1）

解决此问题后更新程序才能继续。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="573"/>
        <source>Updating flatpack not supported</source>
        <translation>Flatpak 不支持更新</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="573"/>
        <source>Actions outside of checking if an update is available are not supported when running the flatpak version of Prism Launcher.</source>
        <translation>运行 Flatpak 版本的 Prism Launcher 时，不支持检查更新以外的任何操作。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="585"/>
        <source>Updating Not Supported</source>
        <translation>不支持更新</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="586"/>
        <source>Updating non-portable linux installations is not supported. Please use your system package manager</source>
        <translation>不支持更新便携版以外的 Linux 安装。请使用您的包管理器</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="636"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1085"/>
        <source>Reading manifest from %1</source>
        <translation>正在从 %1 读取清单</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="648"/>
        <source>Manifest empty, making best guess of the directory contents of %1</source>
        <translation>清单为空，正在对 %1 的目录内容进行最佳猜测</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="654"/>
        <source>Installing the following to %1 :
 %2</source>
        <translation>正在将以下内容安装到 %1：
 %2</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="658"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="665"/>
        <source>Installing from %1</source>
        <translation>正在从 %1 安装</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="670"/>
        <source>Installing %1 from %2</source>
        <translation>正在从 %2 安装 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="674"/>
        <source>Failed copy %1 to %2</source>
        <translation>无法将 %1 复制到 %2</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="689"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1162"/>
        <source>File doesn&apos;t exist, ignoring: %1</source>
        <translation>文件不存在，忽略：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="702"/>
        <source>There were errors installing the update.</source>
        <translation>安装更新时出错。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="706"/>
        <source>Update succeed.</source>
        <translation>更新成功。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="863"/>
        <source>No Valid Release Assets</source>
        <translation>没有有效的资源版本</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="864"/>
        <source>Github release %1 has no valid assets for this platform: %2</source>
        <translation>%1 的 Github 发行版中没有适用于 %2 的有效资源</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="866"/>
        <source>%1 portable: %2</source>
        <translation>%1 便携版：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="866"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1038"/>
        <source>yes</source>
        <translation>是</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="866"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1038"/>
        <source>no</source>
        <translation>否</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="874"/>
        <source>No version selected.</source>
        <translation>未选择版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="874"/>
        <source>No version was selected.</source>
        <translation>没有选择任何版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="881"/>
        <source>Failed to Download</source>
        <translation>无法下载</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="881"/>
        <source>Failed to download the selected asset.</source>
        <translation>无法下载选中的资源。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="983"/>
        <source>Update already in progress
</source>
        <translation>更新正在进行
</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="985"/>
        <source>This installation has a update lock file present at: %1

Timestamp: %2
Updating from version %3 to %4
Target install path: %5
Data Path: %6
This likely means that a previous update attempt failed. Please ensure your installation is in working order before proceeding.
Check the Prism Launcher updater log at: 
%7
for details on the last update attempt.

To overwrite this lock and proceed with this update anyway, select &quot;Ignore&quot; below.</source>
        <translation>在 %1 存在更新锁定文件

时间戳：%2
从版本 %3 更新到 %4
安装目标路径：%5
数据路径：%6
可能是上次尝试更新失败。我们不能确保您的这次安装可以正常工作。
检查 Prism Launcher 更新程序日志： 
%7
以获取有关上次更新尝试的详细信息。

点击下面的“忽略”按钮可以删除此锁定文件并继续。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1015"/>
        <source>Update Aborted</source>
        <translation>更新已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1015"/>
        <source>The update attempt was aborted</source>
        <translation>更新尝试已被中止</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1023"/>
        <source>Updating from %1 to %2</source>
        <translation>从 %1 更新到 %2</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1026"/>
        <source>Updating portable install at %1</source>
        <translation>正在在 %1 更新便携版安装</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1029"/>
        <source>Running installer file at %1</source>
        <translation>正在运行安装程序文件 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1038"/>
        <source>Process start result: %1</source>
        <translation>进程启动结果：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1045"/>
        <source>Backing up install</source>
        <translation>从备份安装</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1066"/>
        <source>Starting new updater at &apos;%1&apos;</source>
        <translation>正在 %1 处启动新的更新程序</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1068"/>
        <source>Failed to launch &apos;%1&apos; %2</source>
        <translation>无法启动 %1（%2）</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1119"/>
        <source>Backing up:
  %1</source>
        <translation>正在备份：
  %1</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1130"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1137"/>
        <source>Backing up install at %1</source>
        <translation>从备份 %1 安装</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1142"/>
        <source>Backing up and then removing %1</source>
        <translation>备份并移除 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1146"/>
        <source>Failed to backup %1 to %2</source>
        <translation>无法将 %1 备份到 %2</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1149"/>
        <source>Failed to remove %1</source>
        <translation>无法删除 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1184"/>
        <source>Extracted the following to &quot;%1&quot;:
  %2</source>
        <translation>已将以下内容解压到 %1：
  %2</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1186"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1188"/>
        <source>Failed to extract %1 to %2</source>
        <translation>无法将 %1 解压到 %2</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1195"/>
        <source>Running: `%1 %2`</source>
        <translation>正在执行：`%1 %2`</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1199"/>
        <source>Failed to launcher child process &quot;%1 %2&quot;.</source>
        <translation>无法启动启动器子进程“%1 %2”。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1201"/>
        <source>Failed extract archive</source>
        <translation>无法解压压缩文件</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1208"/>
        <source>Child process &quot;%1 %2&quot; failed.</source>
        <translation>子进程“%1 %2”运行失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1210"/>
        <source>Failed to extract archive</source>
        <translation>无法解压压缩文件</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1215"/>
        <source>Unknown archive format for %1</source>
        <translation>%1 的压缩格式未知</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1230"/>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1234"/>
        <source>Failed to Check Version</source>
        <translation>无法检查版本</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1230"/>
        <source>Failed to launcher child launcher process to read version.</source>
        <translation>无法启动子启动程序进程以读取版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="1234"/>
        <source>Child launcher process failed.</source>
        <translation>子启动器进程失败。</translation>
    </message>
</context>
<context>
    <name>ProfileSelectDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSelectDialog.ui" line="14"/>
        <source>Select an Account</source>
        <translation>选择账号</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSelectDialog.ui" line="20"/>
        <source>Select a profile.</source>
        <translation>选择档案。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSelectDialog.ui" line="38"/>
        <source>Use as default?</source>
        <translation>用作默认账号？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSelectDialog.ui" line="45"/>
        <source>Use as default for this instance only?</source>
        <translation>仅用于本实例？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSelectDialog.cpp" line="40"/>
        <location filename="src/launcher/ui/dialogs/ProfileSelectDialog.cpp" line="42"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSelectDialog.cpp" line="49"/>
        <source>%1 (in use)</source>
        <translation>%1 （使用中）</translation>
    </message>
</context>
<context>
    <name>ProfileSetupDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSetupDialog.ui" line="14"/>
        <source>Choose Minecraft name</source>
        <translation>选择 Minecraft 名称</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSetupDialog.ui" line="26"/>
        <source>You just need to take one more step to be able to play Minecraft on this account.

Choose your name carefully:</source>
        <translation>只差最后一步就可在此账号上游玩 Minecraft 了。

请慎重选择您在游戏里的名称：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSetupDialog.cpp" line="121"/>
        <source>Name is too short - must be between 3 and 16 characters long.</source>
        <translation>名称太短——长度必须介于 3 到 16 个字符之间。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSetupDialog.cpp" line="180"/>
        <source>Minecraft profile with name %1 already exists.</source>
        <translation>名为 %1 的 Minecraft 档案已存在。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSetupDialog.cpp" line="182"/>
        <source>The name %1 is not allowed.</source>
        <translation>不允许将“%1”作为名称。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSetupDialog.cpp" line="184"/>
        <source>Unhandled profile name status: %1</source>
        <translation>无法处理的个人档案状态：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSetupDialog.cpp" line="187"/>
        <source>Failed to check name availability.</source>
        <translation>无法检查名称可用性。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProfileSetupDialog.cpp" line="261"/>
        <source>The server returned the following error:</source>
        <translation>服务器返回以下错误：</translation>
    </message>
</context>
<context>
    <name>ProgressDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ProgressDialog.ui" line="26"/>
        <source>Please wait...</source>
        <translation>请稍候……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProgressDialog.ui" line="49"/>
        <source>Global Task Status...</source>
        <translation>全局任务状态……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProgressDialog.ui" line="59"/>
        <source>Global Status Details...</source>
        <translation>全局状态详情……</translation>
    </message>
    <message>
        <source>Task Status...</source>
        <translation type="vanished">任务状态……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ProgressDialog.ui" line="136"/>
        <source>Skip</source>
        <translation>跳过</translation>
    </message>
    <message>
        <source>Aborted by user</source>
        <translation type="vanished">被用户中止</translation>
    </message>
</context>
<context>
    <name>ProxyPage</name>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="42"/>
        <source>This only applies to the launcher. Minecraft does not accept proxy settings.</source>
        <translation>此设定仅用于启动器。Minecraft 本身不接受代理设置。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="55"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="61"/>
        <source>Uses your system&apos;s default proxy settings.</source>
        <translation>使用系统默认代理设置。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="64"/>
        <source>&amp;Default</source>
        <translation>默认(&amp;D)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="74"/>
        <source>&amp;None</source>
        <translation>无(&amp;N)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="84"/>
        <source>&amp;SOCKS5</source>
        <oldsource>SOC&amp;KS5</oldsource>
        <translation>SOCKS5(&amp;S)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="94"/>
        <source>&amp;HTTP</source>
        <oldsource>H&amp;TTP</oldsource>
        <translation>HTTP(&amp;H)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="107"/>
        <source>&amp;Address and Port</source>
        <oldsource>Address and Port</oldsource>
        <translation>地址及端口(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="139"/>
        <source>Authentication</source>
        <translation>认证</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="148"/>
        <source>&amp;Username:</source>
        <oldsource>Username:</oldsource>
        <translation>用户名(&amp;U)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="158"/>
        <source>&amp;Password:</source>
        <oldsource>Password:</oldsource>
        <translation>密码(&amp;P)：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.ui" line="175"/>
        <source>Note: Proxy username and password are stored in plain text inside the launcher&apos;s configuration file!</source>
        <translation>注意：代理服务器用户名和密码会以明文形式存储在启动器的配置文件中！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/global/ProxyPage.h" line="57"/>
        <source>Proxy</source>
        <translation>代理服务器</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="src/launcher/ui/themes/DarkTheme.cpp" line="12"/>
        <source>Dark</source>
        <translation>深色</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/themes/SystemTheme.cpp" line="84"/>
        <source>System</source>
        <translation>系统默认</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/themes/BrightTheme.cpp" line="12"/>
        <source>Bright</source>
        <translation>浅色</translation>
    </message>
    <message>
        <source>&lt;p&gt;There are no code changes between your current version and latest %1.&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;当前版本与来自 %1 频道的最新版本没有任何区别，请静静等待下一个更新！&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Following commits were added since last update:&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;这些提交在最后一次更新之前被添加：&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;The update removes %1 commits and adds the following %2:&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;此次更新移除了 %1 个提交并添加了以下 %2：&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;You can &lt;a href=&quot;%1&quot;&gt;look at the changes on github&lt;/a&gt;.&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;你可以&lt;a href=&quot;%1&quot;&gt;在 GitHub 查看这些更新&lt;/a&gt;。&lt;/p&gt;</translation>
    </message>
    <message>
        <source>PolyMC Developers</source>
        <comment>About Credits</comment>
        <translation type="obsolete">开发人员</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="55"/>
        <source>Website</source>
        <translation>网站</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="75"/>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="94"/>
        <source>%1 Developers</source>
        <comment>About Credits</comment>
        <extracomment>%1 is the name of the launcher, determined at build time, e.g. &quot;Prism Launcher Developers&quot;</extracomment>
        <translation>%1 开发人员</translation>
    </message>
    <message>
        <source>%1 Contributors</source>
        <comment>About Credits</comment>
        <extracomment>%1 is the name of the launcher, determined at build time, e.g. &quot;Prism Launcher Contributors&quot;</extracomment>
        <translation type="vanished">%1 贡献者</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/AboutDialog.cpp" line="102"/>
        <source>With thanks to</source>
        <comment>About Credits</comment>
        <translation>感谢</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/MainWindow.cpp" line="136"/>
        <source>%1 (in use)</source>
        <translation>%1 （使用中）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/GuiUtil.cpp" line="68"/>
        <source>Confirm Upload</source>
        <translation>确认上传</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/GuiUtil.cpp" line="69"/>
        <source>You are about to upload &quot;%1&quot; to %2.
You should double-check for personal information.

Are you sure?</source>
        <translation>即将将“%1”上传到“%2”。
请确认日志中没有包含个人信息。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/GuiUtil.cpp" line="85"/>
        <source>Upload failed</source>
        <translation>上传失败</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/GuiUtil.cpp" line="91"/>
        <source>Upload finished</source>
        <translation>上传完成</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/GuiUtil.cpp" line="92"/>
        <source>The &lt;a href=&quot;%1&quot;&gt;link to the uploaded log&lt;/a&gt; has been placed in your clipboard.</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;到上传的日志的链接&lt;/a&gt;已自动复制到了您的剪贴板中。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="277"/>
        <source>The specified file either doesn&apos;t exist or is not a proper executable.</source>
        <translation>指定的文件不存在或不是一个正常的可执行文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="281"/>
        <source>The specified Java binary didn&apos;t start properly.&lt;br /&gt;</source>
        <oldsource>The specified java binary didn&apos;t start properly.&lt;br /&gt;</oldsource>
        <translation>指定的 Java 二进制文件未正常启动。&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="291"/>
        <source>The specified Java binary returned unexpected results:&lt;br /&gt;</source>
        <oldsource>The specified java binary returned unexpected results:&lt;br /&gt;</oldsource>
        <translation>指定的 Java 二进制文件无法使用您提供的参数工作：&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="301"/>
        <source>Java test succeeded!&lt;br /&gt;Platform reported: %1&lt;br /&gt;Java version reported: %2&lt;br /&gt;</source>
        <translation>Java 测试成功！&lt;br /&gt;平台已报告：%1&lt;br /&gt;Java 版本已报告：%2&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="79"/>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="310"/>
        <source>Java test success</source>
        <translation>Java 测试成功</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="89"/>
        <location filename="src/launcher/JavaCommon.cpp" line="98"/>
        <location filename="src/launcher/JavaCommon.cpp" line="105"/>
        <location filename="src/launcher/ui/widgets/JavaSettingsWidget.cpp" line="310"/>
        <source>Java test failure</source>
        <translation>Java 测试失败</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.cpp" line="62"/>
        <source>Minecraft Server</source>
        <translation>Minecraft 服务器</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/Component.cpp" line="261"/>
        <source>Patch is not loaded yet.</source>
        <translation>补丁未加载。</translation>
    </message>
    <message>
        <source>processArguments is set to unknown value &apos;%1&apos;</source>
        <translation type="vanished">processArguments 设置为了未知值 &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MojangVersionFormat.cpp" line="175"/>
        <source>The &apos;minimumLauncherVersion&apos; value of this version (%1) is higher than supported by %3 (%2). It might not work properly!</source>
        <translation>该版本（%1）的“minimumLauncherVersion”值（最小启动器版本）比 %3 支持的版本（%2）高。可能无法正常工作！</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/MojangVersionFormat.cpp" line="293"/>
        <source>Library %1 name is broken and cannot be processed.</source>
        <translation>库 %1 的名称已损坏，不能处理。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/PackProfile.cpp" line="203"/>
        <source>Invalid component file version, expected %1</source>
        <translation>无效组件版本，应为 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/OneSixVersionFormat.cpp" line="120"/>
        <source>The component&apos;s &apos;uid&apos; contains illegal characters! This can cause security issues.</source>
        <translation>组件的“uid”包含非法字符！这可能会导致安全问题。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/OneSixVersionFormat.cpp" line="189"/>
        <source>Version file has both &apos;+libraries&apos; and &apos;libraries&apos;. This is no longer supported.</source>
        <translation>版本文件同时包含&quot;+libraries&quot;和&quot;libraries&quot;，这不再受到支持。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/OneSixVersionFormat.cpp" line="234"/>
        <source>URL for the main jar could not be determined - Mojang removed the server that we used as fallback.</source>
        <translation>无法确定主 Jar 的网址——Mojang 删除了我们用作备份的服务器。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/OneSixVersionFormat.cpp" line="260"/>
        <source>Version file contains unsupported element &apos;tweakers&apos;</source>
        <translation>版本文件包含不支持的元素“tweakers”</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/OneSixVersionFormat.cpp" line="263"/>
        <source>Version file contains unsupported element &apos;-libraries&apos;</source>
        <translation>版本文件包含不支持的元素“-libraries”</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/OneSixVersionFormat.cpp" line="266"/>
        <source>Version file contains unsupported element &apos;-tweakers&apos;</source>
        <translation>版本文件包含不支持的元素“-tweakers”</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/OneSixVersionFormat.cpp" line="269"/>
        <source>Version file contains unsupported element &apos;-minecraftArguments&apos;</source>
        <translation>版本文件包含不支持的元素“-minecraftArguments”</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/OneSixVersionFormat.cpp" line="272"/>
        <source>Version file contains unsupported element &apos;+minecraftArguments&apos;</source>
        <translation>版本文件包含不支持的元素“+minecraftArguments”</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/AssetsUtils.cpp" line="312"/>
        <source>Assets for %1</source>
        <translation>%1 的 assets 资源</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/ProfileUtils.cpp" line="79"/>
        <source>Invalid order file version, expected %1</source>
        <translation>无效文件版本，应为 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/ProfileUtils.cpp" line="116"/>
        <source>Unable to open the version file %1: %2.</source>
        <translation>无法打开版本文件 %1：%2。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/ProfileUtils.cpp" line="134"/>
        <source>Unable to process the version file %1: %2 at line %3 column %4.</source>
        <translation>无法处理版本文件 %1：%2 在 %3 行 %4 列。</translation>
    </message>
    <message>
        <source>Unable to process the version file %1.</source>
        <translation type="vanished">无法处理版本文件%1。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountData.cpp" line="360"/>
        <source>No profile (%1)</source>
        <translation>无档案（%1）</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/AccountData.cpp" line="370"/>
        <source>&lt;Offline&gt;</source>
        <translation>&lt;离线&gt;</translation>
    </message>
    <message>
        <source>Update failed!</source>
        <translation type="vanished">更新失败！</translation>
    </message>
    <message>
        <source>Rollback failed!</source>
        <translation type="vanished">回滚失败！</translation>
    </message>
    <message>
        <source>Couldn&apos;t replace file %1. Changes will be reverted.
See the %2 log file for details.</source>
        <translation type="vanished">无法替换文件 %1。更改将会回滚。
详情请见 %2 日志文件。</translation>
    </message>
    <message>
        <source>Couldn&apos;t remove file %1. Changes will be reverted.
See the %2 log file for details.</source>
        <translation type="vanished">无法删除文件 %1。更改将会回滚。
详情请见 %2 日志文件。</translation>
    </message>
    <message>
        <source>The new version didn&apos;t start or is too old and doesn&apos;t respond to startup checks.

Roll back to previous version?</source>
        <translation type="vanished">新版本未启动或该版本太老而无法响应启动检查。

回滚到上一版本？</translation>
    </message>
    <message>
        <source>The rollback failed too.
You will have to repair %1 manually.
Please let us know why and how this happened.</source>
        <translation type="vanished">更新失败了，并且回滚也失败了。
你需要手动修复 %1 了。
请给我们反馈，让我们知悉这种情况为何、如何发生的。</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCTime.cpp" line="34"/>
        <source>%1min %2s</source>
        <oldsource>%1m %2s</oldsource>
        <translation>%1 分 %2 秒</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCTime.cpp" line="37"/>
        <source>%1h %2min</source>
        <oldsource>%1h %2m</oldsource>
        <translation>%1 时 %2 分</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCTime.cpp" line="39"/>
        <source>%1d %2h %3min</source>
        <oldsource>%1d %2h %3m</oldsource>
        <translation>%1 天 %2 时 %3 分</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCTime.cpp" line="76"/>
        <source>days</source>
        <translation>天</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCTime.cpp" line="81"/>
        <source>h</source>
        <translation>小时</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCTime.cpp" line="86"/>
        <source>m</source>
        <translation>分钟</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCTime.cpp" line="91"/>
        <source>s</source>
        <translation>秒</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCTime.cpp" line="96"/>
        <source>ms</source>
        <translation>毫秒</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="46"/>
        <source>You tried to manually set a JVM memory option (using &quot;-XX:PermSize&quot;, &quot;-XX-MaxHeapSize&quot;, &quot;-XX:InitialHeapSize&quot;, &quot;-Xmx&quot; or &quot;-Xms&quot;).
There are dedicated boxes for these in the settings (Java tab, in the Memory group at the top).
This message will be displayed until you remove them from the JVM arguments.</source>
        <oldsource>You tried to manually set a JVM memory option (using &quot;-XX:PermSize&quot;, &quot;-XX-MaxHeapSize&quot;, &quot;-XX:InitialHeapSize&quot;,  &quot;-Xmx&quot; or &quot;-Xms&quot;).
There are dedicated boxes for these in the settings (Java tab, in the Memory group at the top).
This message will be displayed until you remove them from the JVM arguments.</oldsource>
        <translation>您正在尝试手动设置 JVM 内存选项（使用“-XX:PermSize”，-XX-MaxHeapSize&quot;， &quot;-XX:InitialHeapSize&quot;，“-Xmx”或“-Xms”选项）。
这些选项已包含在设置（“Java”栏，顶端的“内存”分组）中，您无需手动设置。
此信息将一直显示，除非删除这些参数。</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="51"/>
        <location filename="src/launcher/JavaCommon.cpp" line="60"/>
        <source>JVM arguments warning</source>
        <translation>JVM 参数警告</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="56"/>
        <source>You tried to pass required Java version argument to the JVM (using &quot;-version:xxx&quot;). This is not safe and will not be allowed.
This message will be displayed until you remove this from the JVM arguments.</source>
        <translation>您试图通过 JVM 参数指定所需的 Java 版本（使用“-version=xxx”），这并不安全也不被允许。
此信息将一直显示，除非删除这些参数。</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="69"/>
        <source>Java test succeeded!&lt;br /&gt;Platform reported: %1&lt;br /&gt;Java version reported: %2&lt;br /&gt;Java vendor reported: %3&lt;br /&gt;</source>
        <translation>Java测试成功！&lt;br /&gt;平台：%1&lt;br /&gt;Java版本：%2&lt;br /&gt;Java 供应商： %3&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="77"/>
        <source>&lt;br /&gt;Warnings:&lt;br /&gt;&lt;font color=&quot;orange&quot;&gt;%1&lt;/font&gt;</source>
        <translation>&lt;br /&gt;警告：&lt;br /&gt;&lt;font color=&quot;orange&quot;&gt;%1&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="87"/>
        <source>The specified Java binary didn&apos;t work with the arguments you provided:&lt;br /&gt;</source>
        <oldsource>The specified java binary didn&apos;t work with the arguments you provided:&lt;br /&gt;</oldsource>
        <translation>指定的 Java 二进制文件无法使用您提供的参数工作：&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="95"/>
        <source>The specified Java binary didn&apos;t work.&lt;br /&gt;You should use the auto-detect feature, or set the path to the Java executable.&lt;br /&gt;</source>
        <oldsource>The specified java binary didn&apos;t work.&lt;br /&gt;You should use the auto-detect feature, or set the path to the java executable.&lt;br /&gt;</oldsource>
        <translation>指定的 Java 二进制文件无法工作。&lt;br /&gt;您应该使用自动检测功能，或者设置 Java 可执行文件的路径。&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/JavaCommon.cpp" line="104"/>
        <source>Java checker library could not be found. Please check your installation.</source>
        <oldsource>Java checker library could not be found. Please check your installation</oldsource>
        <translation>无法找到 Java 检查库。请检查是否安装了相应运行库。</translation>
    </message>
    <message>
        <location filename="src/launcher/meta/BaseEntity.cpp" line="103"/>
        <source>Download of meta file %1</source>
        <translation>下载元数据文件 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/meta/JsonFormat.cpp" line="129"/>
        <location filename="src/launcher/meta/JsonFormat.cpp" line="141"/>
        <location filename="src/launcher/meta/JsonFormat.cpp" line="153"/>
        <source>Unknown format version!</source>
        <translation>未知格式版本！</translation>
    </message>
    <message>
        <location filename="src/launcher/tools/JProfiler.cpp" line="86"/>
        <location filename="src/launcher/tools/JVisualVM.cpp" line="80"/>
        <source>Empty path</source>
        <translation>空路径</translation>
    </message>
    <message>
        <location filename="src/launcher/tools/JVisualVM.cpp" line="85"/>
        <source>Invalid path to JVisualVM</source>
        <translation>无效的 JVisualVM 路径</translation>
    </message>
    <message>
        <location filename="src/launcher/tools/MCEditTool.cpp" line="35"/>
        <location filename="src/launcher/tools/JProfiler.cpp" line="91"/>
        <source>Path does not exist</source>
        <translation>路径不存在</translation>
    </message>
    <message>
        <location filename="src/launcher/tools/JProfiler.cpp" line="95"/>
        <source>Invalid JProfiler install</source>
        <translation>无效的 JProfiler 安装</translation>
    </message>
    <message>
        <location filename="src/launcher/tools/MCEditTool.cpp" line="30"/>
        <source>Path is empty</source>
        <translation>空路径</translation>
    </message>
    <message>
        <location filename="src/launcher/tools/MCEditTool.cpp" line="40"/>
        <source>Path does not seem to be a MCEdit path</source>
        <translation>这个路径似乎不是 MCEdit 的路径</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthPackIndex.cpp" line="58"/>
        <source>No author(s)</source>
        <translation>无作者</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceTask.cpp" line="10"/>
        <source>Change instance name</source>
        <translation>更改实例名称</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceTask.cpp" line="11"/>
        <source>The instance&apos;s name seems to include the old version. Would you like to update it?

Old name: %1
New name: %2</source>
        <translation>该实例的名称似乎包含旧版本。 您想更新它吗？

旧名称：%1
新名称：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceTask.cpp" line="26"/>
        <source>Similar modpack was found!</source>
        <translation>找到了类似的整合包！</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceTask.cpp" line="27"/>
        <source>One or more of your instances are from this same modpack%1. Do you want to create a separate instance, or update the existing one?

NOTE: Make sure you made a backup of your important instance data before updating, as worlds can be corrupted and some configuration may be lost (due to pack overrides).</source>
        <translation>您拥有一个或多个来自此整合包（%1）的实例。您想创建一个独立的实例，还是更新现有的实例？

注意：在更新实例前请确保备份了实例的重要数据，游戏数据与配置文件可能会损坏或遗失（由于整合包会覆盖）。</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceTask.cpp" line="33"/>
        <source>Update existing instance</source>
        <translation>更新现有实例</translation>
    </message>
    <message>
        <location filename="src/launcher/InstanceTask.cpp" line="34"/>
        <source>Create new instance</source>
        <translation>创建新实例</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="vanished">取消</translation>
    </message>
    <message>
        <source>Simple (Colored Icons)</source>
        <translation type="vanished">简洁（彩色）</translation>
    </message>
    <message>
        <source>Simple (Light Icons)</source>
        <translation type="vanished">简洁（浅色）</translation>
    </message>
    <message>
        <source>Simple (Dark Icons)</source>
        <translation type="vanished">简洁（深色）</translation>
    </message>
    <message>
        <source>Simple (Blue Icons)</source>
        <translation type="vanished">简洁（蓝色）</translation>
    </message>
    <message>
        <source>Breeze Light</source>
        <translation type="vanished">Breeze 微风浅色</translation>
    </message>
    <message>
        <source>Breeze Dark</source>
        <translation type="vanished">Breeze 微风深色</translation>
    </message>
    <message>
        <source>OSX</source>
        <translation type="vanished">OSX</translation>
    </message>
    <message>
        <source>iOS</source>
        <translation type="vanished">iOS</translation>
    </message>
    <message>
        <source>Flat</source>
        <translation type="vanished">扁平</translation>
    </message>
    <message>
        <source>Flat (White)</source>
        <translation type="vanished">扁平（白色）</translation>
    </message>
    <message>
        <source>Legacy</source>
        <translation type="vanished">传统</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="vanished">自定义</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/themes/ThemeManager.cpp" line="271"/>
        <source>Background Cat (from MultiMC)</source>
        <translation>背景猫（来自 MultiMC）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/themes/ThemeManager.cpp" line="272"/>
        <source>Rory ID 11 (drawn by Ashtaka)</source>
        <translation>Rory ID 11（Ashtaka 绘）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/themes/ThemeManager.cpp" line="273"/>
        <source>Rory ID 11 (flat edition, drawn by Ashtaka)</source>
        <translation>Rory ID 11（扁平化版本，Ashtaka 绘）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/themes/ThemeManager.cpp" line="274"/>
        <source>Teawie (drawn by SympathyTea)</source>
        <translation>Teawie（SympathyTea 绘）</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalResourceParse.cpp" line="33"/>
        <source>resource pack</source>
        <translation>资源包</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalResourceParse.cpp" line="34"/>
        <source>texture pack</source>
        <translation>纹理包</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalResourceParse.cpp" line="35"/>
        <source>data pack</source>
        <translation>数据包</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalResourceParse.cpp" line="36"/>
        <source>shader pack</source>
        <translation>光影包</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalResourceParse.cpp" line="37"/>
        <source>world save</source>
        <translation>世界存档</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalResourceParse.cpp" line="38"/>
        <source>mod</source>
        <translation>Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/tasks/LocalResourceParse.cpp" line="39"/>
        <source>unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameAPI.cpp" line="214"/>
        <source>Sort by Featured</source>
        <translation>按精选内容排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameAPI.cpp" line="215"/>
        <source>Sort by Popularity</source>
        <translation>按热门度排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameAPI.cpp" line="216"/>
        <location filename="src/launcher/modplatform/modrinth/ModrinthAPI.cpp" line="121"/>
        <source>Sort by Last Updated</source>
        <translation>按最后更新时间排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameAPI.cpp" line="217"/>
        <source>Sort by Name</source>
        <translation>按名称排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameAPI.cpp" line="218"/>
        <source>Sort by Author</source>
        <translation>按作者排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameAPI.cpp" line="219"/>
        <location filename="src/launcher/modplatform/modrinth/ModrinthAPI.cpp" line="118"/>
        <source>Sort by Downloads</source>
        <translation>按下载量排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameAPI.cpp" line="220"/>
        <source>Sort by Category</source>
        <translation>按分类排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/flame/FlameAPI.cpp" line="221"/>
        <source>Sort by Game Version</source>
        <translation>按游戏版本排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthAPI.cpp" line="117"/>
        <source>Sort by Relevance</source>
        <translation>按相关度排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthAPI.cpp" line="119"/>
        <source>Sort by Follows</source>
        <translation>按关注数排序</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/modrinth/ModrinthAPI.cpp" line="120"/>
        <source>Sort by Newest</source>
        <translation>按最近更新排序</translation>
    </message>
    <message>
        <location filename="src/launcher/filelink/FileLink.cpp" line="77"/>
        <source>a batch MKLINK program for windows to be used with prismlauncher</source>
        <translation>适用于Windows的MKLINK程序，可与PrismLauncher一起使用</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/instanceview/VisualGroup.cpp" line="167"/>
        <source>Ungrouped</source>
        <translation>未分组</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/PrismUpdater.cpp" line="221"/>
        <source>An auto-updater for Prism Launcher</source>
        <translation>Prism Launcher 的自动更新程序</translation>
    </message>
    <message>
        <location filename="src/launcher/MMCZip.cpp" line="346"/>
        <source>Could not fix permissions for %1</source>
        <translation>无法修复 %1 的权限</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ModDownloadDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.h" line="104"/>
        <source>mods</source>
        <extracomment>String that gets appended to the mod download dialog title (&quot;Download &quot; + resourcesString())</extracomment>
        <translation>Mod</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ModPage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ModPage.h" line="46"/>
        <source>mods</source>
        <extracomment>The plural version of &apos;mod&apos;</extracomment>
        <translation>Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ModPage.h" line="48"/>
        <source>mod</source>
        <extracomment>The singular version of &apos;mods&apos;</extracomment>
        <translation>Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ModPage.cpp" line="141"/>
        <source>No valid version found!</source>
        <translation>未找到有效版本！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ModPage.cpp" line="142"/>
        <source>Cannot select invalid version :(</source>
        <translation>不能选择无效的版本（ノへ￣、）</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ResourceDownloadDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.cpp" line="70"/>
        <source>Review and confirm</source>
        <translation>检查并确认</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.cpp" line="71"/>
        <source>Ctrl+Return</source>
        <translation>Ctrl+Return</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.cpp" line="118"/>
        <source>Opens a new popup to review your selected %1 and confirm your selection. Shortcut: Ctrl+Return</source>
        <translation>打开一个新的弹窗以查看并确认您选中的%1。快捷键：Ctrl + Return</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.cpp" line="132"/>
        <source>Confirm %1 to download</source>
        <translation>确认要下载的 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.cpp" line="138"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.cpp" line="143"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.cpp" line="149"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.cpp" line="150"/>
        <source>Checking for dependencies...</source>
        <translation>正在检查前置 Mod……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.h" line="59"/>
        <source>resources</source>
        <extracomment>String that gets appended to the download dialog title (&quot;Download &quot; + resourcesString())</extracomment>
        <translation>资源</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.h" line="61"/>
        <source>Download %1</source>
        <translation>下载 %1</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ResourceModel</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="212"/>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="236"/>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="448"/>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="452"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <source>A network error occurred. Could not load project versions:%1</source>
        <translation type="vanished">发生网络错误。无法加载项目版本：%1</translation>
    </message>
    <message>
        <source>A network error occurred. Could not load project info:%1</source>
        <translation type="vanished">发生网络错误。 无法加载项目信息：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="213"/>
        <source>A network error occurred. Could not load project versions: %1</source>
        <translation>发生网络错误。无法加载项目版本：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="236"/>
        <source>A network error occurred. Could not load project info: %1</source>
        <translation>发生网络错误。无法加载项目信息：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="242"/>
        <source>The request was aborted for an unknown reason</source>
        <oldsource>The request was abborted for an unknown reason</oldsource>
        <translation>请求因未知原因终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="448"/>
        <source>A network error occurred. Could not load mods.</source>
        <translation>发生网络错误。无法加载mods。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourceModel.cpp" line="453"/>
        <source>API version too old!
Please update %1!</source>
        <translation>API 版本太旧！
请更新 %1！</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ResourcePackDownloadDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.h" line="124"/>
        <source>resource packs</source>
        <extracomment>String that gets appended to the resource pack download dialog title (&quot;Download &quot; + resourcesString())</extracomment>
        <translation>资源包</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ResourcePackResourcePage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePackPage.h" line="35"/>
        <source>resource packs</source>
        <extracomment>The plural version of &apos;resource pack&apos;</extracomment>
        <translation>资源包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePackPage.h" line="37"/>
        <source>resource pack</source>
        <extracomment>The singular version of &apos;resource packs&apos;</extracomment>
        <translation>资源包</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ResourcePage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="100"/>
        <source>Search for %1...</source>
        <extracomment>String in the search bar of the mod downloading dialog</extracomment>
        <translation>搜索%1……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="101"/>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="253"/>
        <source>Select %1 for download</source>
        <translation>选择要下载的%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="200"/>
        <source> by </source>
        <translation> 作者 </translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="205"/>
        <source>&lt;b&gt;This project has been archived. It will not receive any further updates unless the author decides to unarchive the project.&lt;/b&gt;</source>
        <translation>&lt;b&gt;该项目已归档。它将不会收到任何进一步的更新，除非作者决定取消归档该项目。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="210"/>
        <source>Donate information: </source>
        <translation>赞助信息： </translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="223"/>
        <source>External links:</source>
        <translation>外部链接：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="227"/>
        <source>Issues: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>问题：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="229"/>
        <source>Wiki: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>Wiki：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="231"/>
        <source>Source code: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>源代码：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="233"/>
        <source>Discord: &lt;a href=%1&gt;%1&lt;/a&gt;</source>
        <translation>Discord：&lt;a href=%1&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="255"/>
        <source>Deselect %1 for download</source>
        <translation>取消选择要下载的%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="282"/>
        <source>No valid version found.</source>
        <translation>未找到有效版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="283"/>
        <source>Cannot select invalid version :(</source>
        <translation>不能选择无效的版本（ノへ￣、）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.cpp" line="299"/>
        <source>Loading versions...</source>
        <translation>正在加载版本……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.h" line="47"/>
        <source>resources</source>
        <extracomment>The plural version of &apos;resource&apos;</extracomment>
        <translation>资源</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.h" line="49"/>
        <source>resource</source>
        <extracomment>The singular version of &apos;resources&apos;</extracomment>
        <translation>资源</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ShaderPackDownloadDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.h" line="160"/>
        <source>shader packs</source>
        <extracomment>String that gets appended to the shader pack download dialog title (&quot;Download &quot; + resourcesString())</extracomment>
        <translation>光影包</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::ShaderPackResourcePage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ShaderPackPage.h" line="35"/>
        <source>shader packs</source>
        <extracomment>The plural version of &apos;shader pack&apos;</extracomment>
        <translation>光影包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ShaderPackPage.h" line="37"/>
        <source>shader pack</source>
        <extracomment>The singular version of &apos;shader packs&apos;</extracomment>
        <translation>光影包</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::TexturePackDownloadDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/ResourceDownloadDialog.h" line="143"/>
        <source>texture packs</source>
        <extracomment>String that gets appended to the texture pack download dialog title (&quot;Download &quot; + resourcesString())</extracomment>
        <translation>纹理包</translation>
    </message>
</context>
<context>
    <name>ResourceDownload::TexturePackResourcePage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/TexturePackPage.h" line="37"/>
        <source>texture packs</source>
        <extracomment>The plural version of &apos;texture pack&apos;</extracomment>
        <translation>纹理包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/TexturePackPage.h" line="39"/>
        <source>texture pack</source>
        <extracomment>The singular version of &apos;texture packs&apos;</extracomment>
        <translation>纹理包</translation>
    </message>
</context>
<context>
    <name>ResourceDownloadTask</name>
    <message>
        <location filename="src/launcher/ResourceDownloadTask.cpp" line="43"/>
        <source>Resource download</source>
        <translation>资源下载</translation>
    </message>
    <message>
        <location filename="src/launcher/ResourceDownloadTask.cpp" line="44"/>
        <source>Downloading resource:
%1</source>
        <translation>下载资源中：
%1</translation>
    </message>
</context>
<context>
    <name>ResourceFolderModel</name>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.cpp" line="430"/>
        <source>
Warning: This resource is symbolically linked from elsewhere. Editing it will also change the original.
Canonical Path: %1</source>
        <translation>
警告：此资源使用符号链接链接到其他资源，编辑它原资源也会改变。
规范路径：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.cpp" line="437"/>
        <source>
Warning: This resource is hard linked elsewhere. Editing it will also change the original.</source>
        <translation>
警告：此资源使用硬链接链接到其他地方，编辑它原资源也会改变。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.h" line="200"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.h" line="200"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.h" line="200"/>
        <source>Last Modified</source>
        <translation>最近修改</translation>
    </message>
    <message>
        <source>Last modified</source>
        <translation type="vanished">最后修改</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.cpp" line="469"/>
        <source>Confirm toggle</source>
        <translation>确认启用/禁用</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.cpp" line="470"/>
        <source>If you enable/disable this resource while the game is running it may crash your game.
Are you sure you want to do this?</source>
        <translation>在游戏运行时启用或禁用此资源，游戏可能会崩溃。
您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.cpp" line="500"/>
        <source>Is the resource enabled?</source>
        <extracomment>Here, resource is a generic term for external resources, like Mods, Resource Packs, Shader Packs, etc.</extracomment>
        <translation>是否启用外部资源？</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.cpp" line="503"/>
        <source>The name of the resource.</source>
        <extracomment>Here, resource is a generic term for external resources, like Mods, Resource Packs, Shader Packs, etc.</extracomment>
        <translation>资源名称。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.cpp" line="506"/>
        <source>The date and time this resource was last changed (or added).</source>
        <extracomment>Here, resource is a generic term for external resources, like Mods, Resource Packs, Shader Packs, etc.</extracomment>
        <translation>上次更改（或添加）此资源的日期和时间。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourceFolderModel.cpp" line="547"/>
        <source>Show / Hide Columns</source>
        <translation>显示/隐藏栏</translation>
    </message>
</context>
<context>
    <name>ResourcePackFolderModel</name>
    <message>
        <source>Is the resource pack enabled?</source>
        <translation type="vanished">资源包是否启用?</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="53"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="53"/>
        <source>Image</source>
        <translation>图标</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="53"/>
        <source>Last Modified</source>
        <translation>最近修改</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="77"/>
        <source>Unrecognized</source>
        <translation>未识别</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="103"/>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="160"/>
        <source>The resource pack format ID, as well as the Minecraft versions it was designed for.</source>
        <extracomment>The string being explained by this is in the format: ID (Lower version - Upper version)</extracomment>
        <translation>资源包格式 ID，以及适配的 Minecraft 版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="108"/>
        <source>
Warning: This resource is symbolically linked from elsewhere. Editing it will also change the original.
Canonical Path: %1</source>
        <translation>
警告：此资源使用符号链接链接到其他资源，编辑它原资源也会改变。
规范路径：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="115"/>
        <source>
Warning: This resource is hard linked elsewhere. Editing it will also change the original.</source>
        <translation>
警告：此资源使用硬链接链接到其他地方，编辑它原资源也会改变。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="53"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="53"/>
        <source>Pack Format</source>
        <translation>包格式</translation>
    </message>
    <message>
        <source>Last changed</source>
        <translation type="vanished">最后更改</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="155"/>
        <source>Is the resource pack enabled? (Only valid for ZIPs)</source>
        <translation>是否启用该资源包？（仅对 .zip 文件有效）</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="157"/>
        <source>The name of the resource pack.</source>
        <translation>资源包的名称。</translation>
    </message>
    <message>
        <source>The version of the resource pack.</source>
        <translation type="vanished">资源包的版本.</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/ResourcePackFolderModel.cpp" line="162"/>
        <source>The date and time this resource pack was last changed (or added).</source>
        <translation>该资源包最后一次更改（或添加）的日期和时间。</translation>
    </message>
</context>
<context>
    <name>ResourcePackPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ResourcePackPage.h" line="50"/>
        <source>Resource packs</source>
        <translation>资源包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ResourcePackPage.cpp" line="49"/>
        <source>Download packs</source>
        <translation>下载资源包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ResourcePackPage.cpp" line="50"/>
        <source>Download resource packs from online platforms</source>
        <translation>从网络平台下载资源包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ResourcePackPage.cpp" line="78"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ResourcePackPage.cpp" line="82"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ResourcePackPage.cpp" line="82"/>
        <source>Download stopped by user.</source>
        <translation>下载被用户停止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ResourcePackPage.cpp" line="88"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ResourcePackPage.cpp" line="98"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
</context>
<context>
    <name>ResourcePage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.ui" line="47"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.ui" line="62"/>
        <source>Version selected:</source>
        <translation>选中版本：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/ResourcePage.ui" line="80"/>
        <source>Filter options</source>
        <translation>过滤选项</translation>
    </message>
</context>
<context>
    <name>ReviewMessageBox</name>
    <message>
        <source>Confirm mod selection</source>
        <translation type="vanished">确认所选</translation>
    </message>
    <message>
        <source>You&apos;re about to download the following mods:</source>
        <translation type="vanished">您将要下载以下模组：</translation>
    </message>
    <message>
        <source>Only mods with a check will be downloaded!</source>
        <translation type="vanished">只有勾选的模组才会被下载！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="14"/>
        <source>Back</source>
        <translation>返回</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="41"/>
        <source>Mod was disabled as it may be already instaled.</source>
        <translation>可能有相同版本已被安装，故此模组被禁用。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="45"/>
        <source>Filename: %1</source>
        <translation>文件名：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="52"/>
        <source>This download will be placed in: %1</source>
        <translation>此下载将放置在：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="59"/>
        <source>This file will be downloaded to a folder location different from the default, possibly due to its loader requiring it.</source>
        <translation>该文件将下载到与默认位置不同的文件夹，可能是因为其加载器需要这样做。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="63"/>
        <source>Provider: %1</source>
        <translation>Mod 托管平台：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="70"/>
        <source>Required by: %1</source>
        <translation>%1 的前置 Mod</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="72"/>
        <source>Required by:</source>
        <translation>后置：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="87"/>
        <source>Version Type: %1</source>
        <translation>版本类型：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="112"/>
        <source>Confirm %1 selection</source>
        <translation>确认选择 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="114"/>
        <source>You&apos;re about to download the following %1:</source>
        <translation>您将要下载以下 %1：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.cpp" line="115"/>
        <source>Only %1 with a check will be downloaded!</source>
        <translation>只会下载勾选的 %1！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/ReviewMessageBox.ui" line="54"/>
        <source>Toggle Dependencies</source>
        <translation>切换前置 Mod</translation>
    </message>
</context>
<context>
    <name>ScreenshotsPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="41"/>
        <source>Actions</source>
        <translation>行动</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="61"/>
        <source>Upload</source>
        <translation>上传</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="66"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="71"/>
        <source>Rename</source>
        <translation>重命名</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="76"/>
        <source>View Folder</source>
        <translation>查看文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="81"/>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="84"/>
        <source>Copy Image</source>
        <translation>复制图片</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="89"/>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.ui" line="92"/>
        <source>Copy File(s)</source>
        <translation>复制文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.h" line="69"/>
        <source>Screenshots</source>
        <translation>截图</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="305"/>
        <source>Context menu</source>
        <translation>上下文菜单</translation>
    </message>
    <message>
        <source>You are about to upload %1 screenshots.

Are you sure?</source>
        <translation type="vanished">将要上传：%1张截图。

确认上传？</translation>
    </message>
    <message>
        <source>You are about to upload the selected screenshot.

Are you sure?</source>
        <translation type="vanished">将要上传：已选择的截图。

确认上传？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="366"/>
        <source>You are about to upload %1 screenshots to %2.
You should double-check for personal information.

Are you sure?</source>
        <translation>您即将上传 %1 张截图到 %2 。
请确认截图中没有包含个人信息。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="371"/>
        <source>You are about to upload the selected screenshot to %1.
You should double-check for personal information.

Are you sure?</source>
        <translation>您即将上传选中的截图到 %1 。
请确认其中没有包含个人信息。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="396"/>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="437"/>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="448"/>
        <source>Failed to upload screenshots!</source>
        <translation>截图上传失败！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="448"/>
        <source>Unknown error</source>
        <translation>未知错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="412"/>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="455"/>
        <source>Upload finished</source>
        <translation>上传完成</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="387"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="399"/>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="440"/>
        <source>Screenshots upload aborted</source>
        <translation>截图已中止上传</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="399"/>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="440"/>
        <source>The task has been aborted by the user.</source>
        <translation>任务已被用户终止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="413"/>
        <source>The &lt;a href=&quot;%1&quot;&gt;link  to the uploaded screenshot&lt;/a&gt; has been placed in your clipboard.</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;上传的截图链接&lt;/a&gt;已自动复制到了您的剪贴板中。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="456"/>
        <source>The &lt;a href=&quot;%1&quot;&gt;link  to the uploaded album&lt;/a&gt; has been placed in your clipboard.</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;上传的截图链接&lt;/a&gt;已自动复制到了您的剪贴板中。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="504"/>
        <source>You are about to delete %1 screenshots.
This may be permanent and they will be gone from the folder.

Are you sure?</source>
        <translation>即将删除 %1 张截图。
这可能将其从文件夹中永久删除。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="509"/>
        <source>You are about to delete the selected screenshot.
This may be permanent and it will be gone from the folder.

Are you sure?</source>
        <translation>即将删除选中的截图。
这可能将其从文件夹中永久删除。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ScreenshotsPage.cpp" line="515"/>
        <source>Confirm Deletion</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <source>Are you sure?</source>
        <translation type="vanished">你确定吗？</translation>
    </message>
    <message>
        <source>This will delete all selected screenshots.</source>
        <translation type="vanished">这会删除所有选择的截图。</translation>
    </message>
</context>
<context>
    <name>SelectReleaseAssetDialog</name>
    <message>
        <location filename="src/launcher/updater/prismupdater/UpdaterDialogs.cpp" line="116"/>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/UpdaterDialogs.cpp" line="116"/>
        <source>Published Date</source>
        <translation>发布日期</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/UpdaterDialogs.cpp" line="119"/>
        <source>Select a version to install.</source>
        <translation>选择要安装的版本。</translation>
    </message>
</context>
<context>
    <name>SelectReleaseDialog</name>
    <message>
        <location filename="src/launcher/updater/prismupdater/SelectReleaseDialog.ui" line="14"/>
        <source>Select Release to Install</source>
        <translation>选择要安装的发行版</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/SelectReleaseDialog.ui" line="23"/>
        <source>Please select the release you wish to update to.</source>
        <translation>请选择要更新到的发行版。</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/UpdaterDialogs.cpp" line="44"/>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/UpdaterDialogs.cpp" line="44"/>
        <source>Published Date</source>
        <translation>发布日期</translation>
    </message>
    <message>
        <location filename="src/launcher/updater/prismupdater/UpdaterDialogs.cpp" line="47"/>
        <source>Select a version to install.

Currently installed version: %1</source>
        <translation>选择要安装的版本。

已安装版本：%1</translation>
    </message>
</context>
<context>
    <name>SequentialTask</name>
    <message>
        <source>One of the tasks failed!</source>
        <translation type="vanished">多个任务中的一个任务失败了！</translation>
    </message>
    <message>
        <location filename="src/launcher/tasks/SequentialTask.cpp" line="53"/>
        <source>Executing task %1 out of %2</source>
        <translation>正在执行 %2 中的任务 %1</translation>
    </message>
</context>
<context>
    <name>ServersModel</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.cpp" line="295"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.cpp" line="297"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.cpp" line="299"/>
        <source>Latency</source>
        <translation>延迟</translation>
    </message>
</context>
<context>
    <name>ServersPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="72"/>
        <source>&amp;Name</source>
        <translation>名称(&amp;N)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="85"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="98"/>
        <source>Reso&amp;urces</source>
        <translation>资源包(&amp;U)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="109"/>
        <source>Ask to download</source>
        <translation>要求下载时下载</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="114"/>
        <source>Always download</source>
        <translation>总是下载</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="119"/>
        <source>Never download</source>
        <translation>从不下载</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="130"/>
        <source>Actions</source>
        <translation>行动</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="155"/>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="160"/>
        <source>Remove</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="165"/>
        <source>Move Up</source>
        <translation>上移</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="170"/>
        <source>Move Down</source>
        <translation>下移</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.ui" line="175"/>
        <source>Join</source>
        <translation>加入</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.h" line="65"/>
        <source>Servers</source>
        <translation>服务器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.cpp" line="572"/>
        <source>Context menu</source>
        <translation>上下文菜单</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.cpp" line="703"/>
        <source>Confirm Removal</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ServersPage.cpp" line="704"/>
        <source>You are about to remove &quot;%1&quot;.
This is permanent and the server will be gone from your list forever (A LONG TIME).

Are you sure?</source>
        <translation>即将删除：“%1”
该服务器将从您的服务器列表永久删除（真的很久）。

您确定吗？</translation>
    </message>
</context>
<context>
    <name>SetupWizard</name>
    <message>
        <location filename="src/launcher/ui/setupwizard/SetupWizard.cpp" line="29"/>
        <source>&amp;Next &gt;</source>
        <translation>下一个(&amp;N) &gt;</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/SetupWizard.cpp" line="30"/>
        <source>&lt; &amp;Back</source>
        <translation>&lt; 上一个(&amp;B)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/SetupWizard.cpp" line="31"/>
        <source>&amp;Finish</source>
        <translation>完成(&amp;F)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/SetupWizard.cpp" line="32"/>
        <source>&amp;Refresh</source>
        <translation>刷新(&amp;R)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/SetupWizard.cpp" line="33"/>
        <source>%1 Quick Setup</source>
        <translation>%1 快速设置</translation>
    </message>
</context>
<context>
    <name>ShaderPackPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/ShaderPackPage.h" line="48"/>
        <source>Shader packs</source>
        <translation>光影包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ShaderPackPage.cpp" line="52"/>
        <source>Download shaders</source>
        <translation>下载光影包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ShaderPackPage.cpp" line="53"/>
        <source>Download shaders from online platforms</source>
        <translation>从网络平台下载光影包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ShaderPackPage.cpp" line="70"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ShaderPackPage.cpp" line="74"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ShaderPackPage.cpp" line="74"/>
        <source>Download stopped by user.</source>
        <translation>下载被用户停止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ShaderPackPage.cpp" line="80"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/ShaderPackPage.cpp" line="90"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
</context>
<context>
    <name>SkinDelete</name>
    <message>
        <location filename="src/launcher/minecraft/services/SkinDelete.cpp" line="52"/>
        <source>Deleting skin</source>
        <translation>正在删除皮肤</translation>
    </message>
</context>
<context>
    <name>SkinUpload</name>
    <message>
        <location filename="src/launcher/minecraft/services/SkinUpload.cpp" line="80"/>
        <source>Uploading skin</source>
        <translation>上传皮肤中</translation>
    </message>
</context>
<context>
    <name>SkinUploadDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.ui" line="14"/>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="75"/>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="82"/>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="94"/>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="112"/>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="116"/>
        <source>Skin Upload</source>
        <translation>皮肤上传</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.ui" line="20"/>
        <source>Skin File</source>
        <translation>皮肤文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.ui" line="26"/>
        <source>Leave empty to keep current skin</source>
        <translation>留空以保留当前皮肤</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.ui" line="39"/>
        <source>Browse</source>
        <translation>浏览</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.ui" line="49"/>
        <source>Player Model</source>
        <translation>玩家模型</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.ui" line="55"/>
        <source>Steve Model</source>
        <translation>Steve 模型</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.ui" line="65"/>
        <source>Alex Model</source>
        <translation>Alex 模型</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.ui" line="75"/>
        <source>Cape</source>
        <translation>披风</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="75"/>
        <source>Using remote URLs for setting skins is not implemented yet.</source>
        <translation>使用远程网址设置皮肤目前并没有实现。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="82"/>
        <source>You cannot use an invalid URL for uploading skins.</source>
        <translation>您不能使用无效的网址来上传皮肤。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="94"/>
        <source>Skin file does not exist!</source>
        <translation>皮肤文件不存在！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="112"/>
        <source>Failed to upload skin!</source>
        <translation>皮肤上传失败！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="116"/>
        <source>Success</source>
        <translation>成功</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="123"/>
        <source>Select Skin Texture</source>
        <translation>选择皮肤材质</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/SkinUploadDialog.cpp" line="138"/>
        <source>No Cape</source>
        <translation>无披风</translation>
    </message>
</context>
<context>
    <name>SubTaskProgressBar</name>
    <message>
        <location filename="src/launcher/ui/widgets/SubTaskProgressBar.ui" line="20"/>
        <source>Form</source>
        <translation>格式</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/SubTaskProgressBar.ui" line="45"/>
        <source>Sub Task Status...</source>
        <translation>子任务状态……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/SubTaskProgressBar.ui" line="66"/>
        <source>Status Details</source>
        <translation>状态详情</translation>
    </message>
</context>
<context>
    <name>Technic::SingleZipPackInstallTask</name>
    <message>
        <location filename="src/launcher/modplatform/technic/SingleZipPackInstallTask.cpp" line="44"/>
        <source>Downloading modpack:
%1</source>
        <translation>正在下载整合包：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SingleZipPackInstallTask.cpp" line="49"/>
        <source>Modpack download</source>
        <translation>下载整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SingleZipPackInstallTask.cpp" line="64"/>
        <source>Extracting modpack</source>
        <translation>正在解压整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SingleZipPackInstallTask.cpp" line="71"/>
        <source>Unable to open supplied modpack zip file.</source>
        <translation>无法打开提供的整合包 Zip 文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SingleZipPackInstallTask.cpp" line="99"/>
        <source>Failed to extract modpack</source>
        <translation>解压整合包时发生错误</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SingleZipPackInstallTask.cpp" line="120"/>
        <source>Could not fix permissions for %1</source>
        <translation>无法修复 %1 的权限设置</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SingleZipPackInstallTask.cpp" line="135"/>
        <source>Instance import has been aborted.</source>
        <translation>实例导入操作被终止。</translation>
    </message>
</context>
<context>
    <name>Technic::SolderPackInstallTask</name>
    <message>
        <source>Finding recommended version:
%1</source>
        <translation type="vanished">查找推荐版本：
%1</translation>
    </message>
    <message>
        <source>Finding recommended version</source>
        <translation type="vanished">查找推荐版本</translation>
    </message>
    <message>
        <source>Resolving modpack files:
%1</source>
        <translation type="vanished">正在解析整合包文件：
%1</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="71"/>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="73"/>
        <source>Resolving modpack files</source>
        <translation>正在解析整合包文件</translation>
    </message>
    <message>
        <source>Downloading modpack:</source>
        <translation type="vanished">正在下载整合包：</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="86"/>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="109"/>
        <source>Downloading modpack</source>
        <translation>正在下载整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="101"/>
        <source>Could not understand pack manifest:
</source>
        <translation>无法解析包清单：
</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="139"/>
        <source>Extracting modpack</source>
        <translation>正在解压整合包</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="182"/>
        <source>Failed to extract modpack</source>
        <translation>解压整合包时失败</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="203"/>
        <source>Could not fix permissions for %1</source>
        <translation>无法修复 %1 的权限</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/SolderPackInstallTask.cpp" line="218"/>
        <source>Instance import has been aborted.</source>
        <translation>实例导入操作被终止。</translation>
    </message>
</context>
<context>
    <name>Technic::TechnicPackProcessor</name>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="58"/>
        <source>Unable to open &quot;bin/modpack.jar&quot; file!</source>
        <translation>无法打开“bin/modpack.jar”文件！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="67"/>
        <source>Unable to open &quot;fmlversion.properties&quot;!</source>
        <translation>无法打开 &quot;fmlversion.properties&quot;！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="80"/>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="127"/>
        <source>Unable to open &quot;version.json&quot;!</source>
        <translation>无法打开 &quot;version.json&quot;！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="87"/>
        <source>Could not find &quot;version.json&quot; inside &quot;bin/modpack.jar&quot;, but Minecraft version is unknown</source>
        <oldsource>Could not find &quot;version.json&quot; inside &quot;bin/modpack.jar&quot;, but minecraft version is unknown</oldsource>
        <translation>无法在“bin/modpack.jar”中找到“version.json”，且 Minecraft 版本未知</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="99"/>
        <source>Unable to open &quot;forgeversion.properties&quot;</source>
        <translation>无法打开 &quot;forgeversion.properties&quot;</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="113"/>
        <source>Invalid &quot;forgeversion.properties&quot;!</source>
        <translation>无效的 &quot;forgeversion.properties&quot;！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="134"/>
        <source>Unable to find a &quot;version.json&quot;!</source>
        <translation>无法找到 &quot;version.json&quot;！</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="144"/>
        <source>Could not understand &quot;version.json&quot;:
inheritsFrom is missing</source>
        <translation>无法解析 &quot;version.json&quot;：
缺少 inheritsFrom</translation>
    </message>
    <message>
        <location filename="src/launcher/modplatform/technic/TechnicPackProcessor.cpp" line="200"/>
        <source>Could not understand &quot;version.json&quot;:
</source>
        <translation>无法解析 &quot;version.json&quot;：
</translation>
    </message>
</context>
<context>
    <name>TechnicPage</name>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/technic/TechnicPage.ui" line="22"/>
        <source>Version selected:</source>
        <translation>选中版本：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/technic/TechnicPage.ui" line="74"/>
        <source>Search and filter...</source>
        <oldsource>Search and filter ...</oldsource>
        <translation>搜索和筛选……</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/technic/TechnicPage.ui" line="81"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/technic/TechnicPage.cpp" line="214"/>
        <location filename="src/launcher/ui/pages/modplatform/technic/TechnicPage.cpp" line="266"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/modplatform/technic/TechnicPage.cpp" line="232"/>
        <source> by </source>
        <translation> 作者 </translation>
    </message>
    <message>
        <source>Technic</source>
        <translation type="vanished">Technic</translation>
    </message>
</context>
<context>
    <name>TexturePackFolderModel</name>
    <message>
        <source>Is the texture pack enabled?</source>
        <translation type="vanished">是否已启用此材质包？</translation>
    </message>
    <message>
        <source>The name of the texture pack.</source>
        <translation type="vanished">材质包的名字.</translation>
    </message>
    <message>
        <source>The version of the texture pack.</source>
        <translation type="vanished">材质包的版本.</translation>
    </message>
    <message>
        <source>The date and time this texture pack was last changed (or added).</source>
        <translation type="vanished">此材质包最后一次修改（或添加）的日期和时间。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="48"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="48"/>
        <source>Image</source>
        <translation>图标</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="48"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="48"/>
        <source>Last Modified</source>
        <translation>最近修改</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="86"/>
        <source>
Warning: This resource is symbolically linked from elsewhere. Editing it will also change the original.
Canonical Path: %1</source>
        <translation>
警告：此资源使用符号链接链接到其他资源，编辑时原资源的内容也会改变。
规范路径：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="93"/>
        <source>
Warning: This resource is hard linked elsewhere. Editing it will also change the original.</source>
        <translation>
警告：此资源使用硬链接链接到其他地方，编辑时原资源的内容也会改变。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="138"/>
        <source>Is the resource enabled?</source>
        <extracomment>Here, resource is a generic term for external resources, like Mods, Resource Packs, Shader Packs, etc.</extracomment>
        <translation>资源是否启用？</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="141"/>
        <source>The name of the resource.</source>
        <extracomment>Here, resource is a generic term for external resources, like Mods, Resource Packs, Shader Packs, etc.</extracomment>
        <translation>资源的名称。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/mod/TexturePackFolderModel.cpp" line="144"/>
        <source>The date and time this resource was last changed (or added).</source>
        <extracomment>Here, resource is a generic term for external resources, like Mods, Resource Packs, Shader Packs, etc.</extracomment>
        <translation>添加或最近更改此资源的日期和时间。</translation>
    </message>
</context>
<context>
    <name>TexturePackPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/TexturePackPage.h" line="50"/>
        <source>Texture packs</source>
        <translation>纹理包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/TexturePackPage.cpp" line="51"/>
        <source>Download packs</source>
        <translation>下载资源包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/TexturePackPage.cpp" line="52"/>
        <source>Download texture packs from online platforms</source>
        <translation>从网络平台下载纹理包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/TexturePackPage.cpp" line="80"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/TexturePackPage.cpp" line="84"/>
        <source>Aborted</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/TexturePackPage.cpp" line="84"/>
        <source>Download stopped by user.</source>
        <translation>下载被用户停止。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/TexturePackPage.cpp" line="90"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/TexturePackPage.cpp" line="100"/>
        <source>Abort</source>
        <translation>终止</translation>
    </message>
</context>
<context>
    <name>ThemeCustomizationWidget</name>
    <message>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="37"/>
        <source>&amp;Icons</source>
        <translation>图标(&amp;I)</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation type="vanished">颜色(&amp;C)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="62"/>
        <source>View icon themes folder.</source>
        <translation>查看图标主题文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="80"/>
        <source>&amp;Widgets</source>
        <translation>控件(&amp;W)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="105"/>
        <source>View widget themes folder.</source>
        <translation>查看控件主题文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="123"/>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="147"/>
        <source>The cat appears in the background and is not shown by default. It is only made visible when pressing the Cat button in the Toolbar.</source>
        <translation>猫出现在背景中且默认不会显示。它可以通过点击工具栏上的猫按钮来显示。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="126"/>
        <source>C&amp;at</source>
        <translation>猫(&amp;A)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="154"/>
        <source>View cat packs folder.</source>
        <translation>查看猫主题文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/ThemeCustomizationWidget.ui" line="189"/>
        <source>Refresh all</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ThemeWizardPage</name>
    <message>
        <location filename="src/launcher/ui/setupwizard/ThemeWizardPage.ui" line="14"/>
        <source>WizardPage</source>
        <translation>向导页面</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/ThemeWizardPage.ui" line="20"/>
        <source>Select the Theme you wish to use</source>
        <translation>选择您想要使用的主题</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/ThemeWizardPage.ui" line="37"/>
        <source>Hint: The cat appears in the background and is not shown by default. It is only made visible when pressing the Cat button in the Toolbar.</source>
        <translation>提示：猫出现在背景中且默认不会显示。它可以通过点击工具栏上的猫按钮来显示。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/ThemeWizardPage.ui" line="54"/>
        <source> Preview:</source>
        <translation> 预览：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/setupwizard/ThemeWizardPage.ui" line="331"/>
        <source>The cat appears in the background and does not serve a purpose, it is purely visual.</source>
        <translation>猫出现在背景中且没有任何目的，它只提供一个视觉效果。</translation>
    </message>
</context>
<context>
    <name>TranslationsModel</name>
    <message>
        <location filename="src/launcher/translations/TranslationsModel.cpp" line="375"/>
        <source>%1:
%2 translated
%3 fuzzy
%4 total</source>
        <translation>%1：
%2 已翻译
%3 模糊
%4 总计</translation>
    </message>
    <message>
        <location filename="src/launcher/translations/TranslationsModel.cpp" line="391"/>
        <source>Language</source>
        <translation>语言</translation>
    </message>
    <message>
        <location filename="src/launcher/translations/TranslationsModel.cpp" line="394"/>
        <source>Completeness</source>
        <translation>完整性</translation>
    </message>
    <message>
        <location filename="src/launcher/translations/TranslationsModel.cpp" line="400"/>
        <source>The native language name.</source>
        <translation>母语名称。</translation>
    </message>
    <message>
        <location filename="src/launcher/translations/TranslationsModel.cpp" line="403"/>
        <source>Completeness is the percentage of fully translated strings, not counting automatically guessed ones.</source>
        <translation>完整性是完全翻译字符串所占的百分比，不包括自动猜测的字符串。</translation>
    </message>
</context>
<context>
    <name>Update</name>
    <message>
        <location filename="src/launcher/launch/steps/Update.cpp" line="22"/>
        <source>Task aborted.</source>
        <translation>任务已终止。</translation>
    </message>
    <message>
        <location filename="src/launcher/launch/steps/Update.cpp" line="49"/>
        <source>Instance update failed because: %1

</source>
        <translation>实例更新失败，因为：%1

</translation>
    </message>
</context>
<context>
    <name>UpdateAvailableDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.ui" line="14"/>
        <source>Update Available</source>
        <translation>有可用更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.ui" line="73"/>
        <source>A new version is available!</source>
        <translation>启动器更新了！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.ui" line="80"/>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.cpp" line="43"/>
        <source>Version %1 is now available - you have %2 . Would you like to download it now?</source>
        <translation>版本 %1 现在可用——您正在使用 %2 。你想现在下载吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.ui" line="93"/>
        <source>Release Notes:</source>
        <translation>发布说明：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.ui" line="109"/>
        <source>Skip This Version</source>
        <translation>跳过该版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.ui" line="129"/>
        <source>Remind Me Later</source>
        <translation>稍后提醒</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.ui" line="142"/>
        <source>Install Update</source>
        <translation>安装更新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/UpdateAvailableDialog.cpp" line="41"/>
        <source>A new version of %1 is available!</source>
        <translation>有新版本的 %1 可用！</translation>
    </message>
</context>
<context>
    <name>UpdateDialog</name>
    <message>
        <source>Launcher Update</source>
        <oldsource>PolyMC Update</oldsource>
        <translation type="vanished">启动器更新</translation>
    </message>
    <message>
        <source>Update now</source>
        <translation type="vanished">现在升级</translation>
    </message>
    <message>
        <source>Don&apos;t update yet</source>
        <translation type="vanished">现在不升级</translation>
    </message>
    <message>
        <source>A new %1 update is available!</source>
        <translation type="vanished">新的 %1 升级可用！</translation>
    </message>
    <message>
        <source>No %1 updates found. You are running the latest version.</source>
        <translation type="vanished">无来自 %1 频道的更新，您正在运行最新版本。</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="vanished">关闭</translation>
    </message>
    <message>
        <source>&lt;center&gt;&lt;h1&gt;Loading changelog...&lt;/h1&gt;&lt;/center&gt;</source>
        <translation type="vanished">&lt;center&gt;&lt;h1&gt;正在加载更新日志……&lt;/h1&gt;&lt;/center&gt;</translation>
    </message>
    <message>
        <source>&lt;p align=&quot;center&quot; &lt;span style=&quot;font-size:22pt;&quot;&gt;Failed to fetch changelog... Error: %1&lt;/span&gt;&lt;/p&gt;</source>
        <translation type="vanished">&lt;p align=&quot;center&quot; &lt;span style=&quot;font-size:22pt;&quot;&gt;版本更新修改日志获取失败…… 错误：%1&lt;/span&gt;&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>VanillaCreationTask</name>
    <message>
        <location filename="src/launcher/minecraft/VanillaInstanceCreationTask.cpp" line="20"/>
        <source>Creating instance from version %1</source>
        <translation>从版本 %1 创建实例</translation>
    </message>
</context>
<context>
    <name>VanillaPage</name>
    <message>
        <source>Filter</source>
        <translation type="vanished">过滤器</translation>
    </message>
    <message>
        <source>Releases</source>
        <translation type="vanished">常规发布</translation>
    </message>
    <message>
        <source>Snapshots</source>
        <translation type="vanished">快照</translation>
    </message>
    <message>
        <source>Old Snapshots</source>
        <translation type="vanished">旧快照</translation>
    </message>
    <message>
        <source>Betas</source>
        <translation type="vanished">Beta</translation>
    </message>
    <message>
        <source>Alphas</source>
        <translation type="vanished">Alpha</translation>
    </message>
    <message>
        <source>Experiments</source>
        <translation type="vanished">实验</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation type="vanished">刷新</translation>
    </message>
    <message>
        <source>Mod Loader</source>
        <translation type="vanished">模组加载器</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="vanished">无</translation>
    </message>
    <message>
        <source>Forge</source>
        <translation type="vanished">Forge</translation>
    </message>
    <message>
        <source>Fabric</source>
        <translation type="vanished">Fabric</translation>
    </message>
    <message>
        <source>Quilt</source>
        <translation type="vanished">Quilt</translation>
    </message>
    <message>
        <source>LiteLoader</source>
        <translation type="vanished">LiteLoader</translation>
    </message>
    <message>
        <source>Vanilla</source>
        <translation type="vanished">原版</translation>
    </message>
    <message>
        <source>No Minecraft version is selected.</source>
        <translation type="vanished">未选择 Mineccraft 版本.</translation>
    </message>
    <message>
        <source>No mod loader is selected.</source>
        <translation type="vanished">未选择模组加载器。</translation>
    </message>
    <message>
        <source>No versions are currently available for Minecraft %1</source>
        <translation type="vanished">当前没有适用于Minecraft %1 的版本</translation>
    </message>
</context>
<context>
    <name>VerifyJavaInstall</name>
    <message>
        <source>Minecraft 1.18 Pre Release 2 and above require the use of Java 17</source>
        <translation type="vanished">Minecraft 1.18-pre2（1.18 预发布版 2） 及以上版本需要使用 Java 17</translation>
    </message>
    <message>
        <source>Minecraft 21w19a and above require the use of Java 16</source>
        <translation type="vanished">Minecraft 21w19a 及以上版本需要使用 Java16</translation>
    </message>
    <message>
        <source>Minecraft 17w13a and above require the use of Java 8</source>
        <translation type="vanished">Minecraft 17w13a 及以上版本需要使用 Java8</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/VerifyJavaInstall.cpp" line="60"/>
        <source>Java major version is incompatible. Things might break.</source>
        <translation>Java 大版本不兼容。可能会出问题。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/VerifyJavaInstall.cpp" line="65"/>
        <source>This instance is not compatible with Java version %1.
Please switch to one of the following Java versions for this instance:</source>
        <translation>此实例与 Java 版本 %1 不兼容。
请为此实例切换到以下 Java 版本之一：</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/VerifyJavaInstall.cpp" line="70"/>
        <source>Java version %1</source>
        <translation>Java 版本 %1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/launch/VerifyJavaInstall.cpp" line="72"/>
        <source>Go to instance Java settings to change your Java version or disable the Java compatibility check if you know what you&apos;re doing.</source>
        <translation>请前往实例设置中修改您的Java版本，或者（如果您明白自己在做什么的话）跳过Java兼容性检查。</translation>
    </message>
</context>
<context>
    <name>VersionListView</name>
    <message>
        <location filename="src/launcher/ui/widgets/VersionListView.cpp" line="46"/>
        <source>No versions are currently available.</source>
        <translation>当前没有版本可用。</translation>
    </message>
</context>
<context>
    <name>VersionPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="53"/>
        <source>Filter:</source>
        <translation>过滤器：</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="75"/>
        <source>Actions</source>
        <translation>行动</translation>
    </message>
    <message>
        <source>Change version</source>
        <translation type="vanished">修改版本</translation>
    </message>
    <message>
        <source>Change version of the selected package.</source>
        <translation type="vanished">修改选定包的版本。</translation>
    </message>
    <message>
        <source>Move up</source>
        <translation type="vanished">上移</translation>
    </message>
    <message>
        <source>Make the selected package apply sooner.</source>
        <translation type="vanished">提前应用所选包。</translation>
    </message>
    <message>
        <source>Move down</source>
        <translation type="vanished">下移</translation>
    </message>
    <message>
        <source>Make the selected package apply later.</source>
        <translation type="vanished">延后应用所选包。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="139"/>
        <source>Remove</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Remove selected package from the instance.</source>
        <translation type="vanished">从实例删除选定包。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="147"/>
        <source>Customize</source>
        <translation>自定义</translation>
    </message>
    <message>
        <source>Customize selected package.</source>
        <translation type="vanished">自定义选定包。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="155"/>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <source>Edit selected package.</source>
        <translation type="vanished">编辑选定的包。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="163"/>
        <source>Revert</source>
        <translation>还原</translation>
    </message>
    <message>
        <source>Revert the selected package to default.</source>
        <translation type="vanished">还原选定的包到默认状态。</translation>
    </message>
    <message>
        <source>Install Forge</source>
        <translation type="vanished">安装 Forge</translation>
    </message>
    <message>
        <source>Install the Minecraft Forge package.</source>
        <translation type="vanished">安装 Minecraft Forge。</translation>
    </message>
    <message>
        <source>Install Fabric</source>
        <translation type="vanished">安装 Fabric</translation>
    </message>
    <message>
        <source>Install the Fabric Loader package.</source>
        <translation type="vanished">安装 Fabric Loader。</translation>
    </message>
    <message>
        <source>Install Quilt</source>
        <translation type="vanished">安装 Quilt</translation>
    </message>
    <message>
        <source>Install the Quilt Loader package.</source>
        <translation type="vanished">安装 Quilt Loader。</translation>
    </message>
    <message>
        <source>Install LiteLoader</source>
        <translation type="vanished">安装 LiteLoader</translation>
    </message>
    <message>
        <source>Install the LiteLoader package.</source>
        <translation type="vanished">安装 LiteLoader。</translation>
    </message>
    <message>
        <source>Install mods</source>
        <translation type="vanished">安装模组</translation>
    </message>
    <message>
        <source>Install normal mods.</source>
        <translation type="vanished">安装普通模组。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="179"/>
        <source>Add to Minecraft.jar</source>
        <translation>安装 Mod 到 Minecraft.jar 中</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="182"/>
        <source>Add a mod into the Minecraft jar file.</source>
        <translation>将一个 Mod 安装到 Minecraft.jar 文件中。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="187"/>
        <source>Replace Minecraft.jar</source>
        <translation>替换 Minecraft.jar 文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="192"/>
        <source>Add Agents</source>
        <translation>添加探针</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="195"/>
        <source>Add Java agents.</source>
        <translation>添加 Java 探针（Java Agent）。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="200"/>
        <source>Add Empty</source>
        <translation>添加空项</translation>
    </message>
    <message>
        <source>Add an empty custom package.</source>
        <translation type="vanished">新建一个空的自定义包。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="208"/>
        <source>Reload</source>
        <translation>重新加载</translation>
    </message>
    <message>
        <source>Reload all packages.</source>
        <translation type="vanished">重新加载所有包。</translation>
    </message>
    <message>
        <source>Download All</source>
        <translation type="vanished">下载完整文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="115"/>
        <source>Change Version</source>
        <translation>更改版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="118"/>
        <source>Change version of the selected component.</source>
        <translation>更改选中组件的版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="123"/>
        <source>Move Up</source>
        <translation>上移</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="126"/>
        <source>Make the selected component apply sooner.</source>
        <translation>使选中的组件更早应用。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="131"/>
        <source>Move Down</source>
        <translation>下移</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="134"/>
        <source>Make the selected component apply later.</source>
        <translation>使选中的组件更迟应用。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="142"/>
        <source>Remove selected component from the instance.</source>
        <translation>从实例中删除选中的组件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="150"/>
        <source>Customize selected component.</source>
        <translation>自定义选中的组件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="158"/>
        <source>Edit selected component.</source>
        <translation>编辑选中的组件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="166"/>
        <source>Revert the selected component to default.</source>
        <translation>将选中的组件恢复为默认状态。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="171"/>
        <source>Install Loader</source>
        <translation>安装 Mod 加载器</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="174"/>
        <source>Install a mod loader.</source>
        <translation>安装一个 Mod 加载器。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="203"/>
        <source>Add an empty custom component.</source>
        <translation>添加空的自定义组件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="211"/>
        <source>Reload all components.</source>
        <translation>重新加载所有组件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="216"/>
        <source>Download all</source>
        <translation>全部下载</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="219"/>
        <source>Download the files needed to launch the instance now.</source>
        <translation>立刻下载运行实例需要的文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="224"/>
        <source>Open .minecraft</source>
        <translation>打开 .minecraft 文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="227"/>
        <source>Open the instance&apos;s .minecraft folder.</source>
        <translation>打开实例的 .minecraft 文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="232"/>
        <source>Open libraries</source>
        <translation>打开 libraries 目录</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="235"/>
        <source>Open the instance&apos;s local libraries folder.</source>
        <translation>打开实例的本地 libraries 文件夹。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="240"/>
        <source>Import Components</source>
        <translation>导入组件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.ui" line="243"/>
        <source>Import existing component JSON files.</source>
        <translation>导入现有的组件的 JSON 文件。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="190"/>
        <source>Context menu</source>
        <translation>上下文菜单</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="206"/>
        <source>%1 possibly has issues.</source>
        <translation>%1 可能有问题。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="209"/>
        <source>%1 has issues!</source>
        <translation>%1 有问题！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="221"/>
        <source>Error: </source>
        <translation>错误： </translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="223"/>
        <source>Warning: </source>
        <translation>警告： </translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="256"/>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="259"/>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="291"/>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="349"/>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="359"/>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="405"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="259"/>
        <source>Couldn&apos;t load the instance profile.</source>
        <translation>无法加载实例配置。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="278"/>
        <source>Confirm Removal</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="279"/>
        <source>You are about to remove &quot;%1&quot;.
This is permanent and will completely remove the custom component.

Are you sure?</source>
        <translation>将要删除：“%1”
这将永久删除自定义组件。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="291"/>
        <source>Couldn&apos;t remove file</source>
        <translation>无法删除文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="300"/>
        <source>Select jar mods</source>
        <translation>选择 .jar 格式 Mod 文件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="300"/>
        <source>Minecraft.jar mods (*.zip *.jar)</source>
        <translation>需要添加到 Minecraft.jar 中的 Mod (*.zip *.jar)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="310"/>
        <source>Select jar</source>
        <translation>选择 Jar</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="310"/>
        <source>Minecraft.jar replacement (*.jar)</source>
        <translation>用于替换的 Minecraft.jar 文件（*.jar）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="320"/>
        <source>Select components</source>
        <translation>选择组件</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="320"/>
        <source>Components (*.json)</source>
        <translation>组件 (*.json)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="325"/>
        <source>Failed to import components</source>
        <translation>组件导入失败</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="326"/>
        <source>Some components could not be imported. Check logs for details</source>
        <translation>某些组件导入失败。查看日志以了解详情</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="335"/>
        <source>Select agents</source>
        <translation>选择探针</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="335"/>
        <source>Java agents (*.jar)</source>
        <translation>Java 探针(*.jar)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="378"/>
        <source>Change %1 version</source>
        <translation>修改 %1 版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="380"/>
        <source>No intermediary mappings versions are currently available.</source>
        <translation>当前没有可用的intermediary mappings版本。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="381"/>
        <source>Couldn&apos;t load or download the intermediary mappings version lists!</source>
        <translation>无法加载或下载intermediary mappings版本列表！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="406"/>
        <source>Cannot download Minecraft or update instances unless you have at least one account added.
Please add a Microsoft account.</source>
        <oldsource>Cannot download Minecraft or update instances unless you have at least one account added.
Please add your Microsoft or Mojang account.</oldsource>
        <translation>不允许在没有正版账号的情况下下载 Minecraft 或更新实例。
请添加一个已购买 Minecraft 的 Microsoft 账户。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="542"/>
        <source>Confirm Reversion</source>
        <translation>确认还原</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="543"/>
        <source>You are about to revert &quot;%1&quot;.
This is permanent and will completely revert your customizations.

Are you sure?</source>
        <translation>即将重置：“%1”。
这将永久还原您更改过的内容。

您确定吗？</translation>
    </message>
    <message>
        <source>PolyMC cannot download Minecraft or update instances unless you have at least one account added.
Please add your Mojang or Minecraft account.</source>
        <translation type="obsolete">在无任何帐户登录时，PolyMC 无法下载 Minecraft 或更新实例.
请添加你的 Minecraft 帐户.</translation>
    </message>
    <message>
        <source>Select Forge version</source>
        <translation type="vanished">选择 Forge 版本</translation>
    </message>
    <message>
        <source>No Forge versions are currently available for Minecraft </source>
        <translation type="vanished">当前没有适用于此 Minecraft 版本的 Forge 可用 </translation>
    </message>
    <message>
        <source>Couldn&apos;t load or download the Forge version lists!</source>
        <translation type="vanished">无法加载或下载 Forge 版本列表！</translation>
    </message>
    <message>
        <source>Select Fabric Loader version</source>
        <translation type="vanished">选择 Fabric Loader 版本</translation>
    </message>
    <message>
        <source>No Fabric Loader versions are currently available.</source>
        <translation type="vanished">当前没有 Fabric Loader 版本可用。</translation>
    </message>
    <message>
        <source>Couldn&apos;t load or download the Fabric Loader version lists!</source>
        <translation type="vanished">无法加载或下载 Fabric Loader 版本列表！</translation>
    </message>
    <message>
        <source>Select Quilt Loader version</source>
        <translation type="vanished">选择 Quilt 加载器版本</translation>
    </message>
    <message>
        <source>No Quilt Loader versions are currently available.</source>
        <translation type="vanished">目前没有可用的 Quilt 加载器版本。</translation>
    </message>
    <message>
        <source>Couldn&apos;t load or download the Quilt Loader version lists!</source>
        <translation type="vanished">无法加载或下载 Quilt 加载器版本列表！</translation>
    </message>
    <message>
        <source>Select LiteLoader version</source>
        <translation type="vanished">选择 LiteLoader 版本</translation>
    </message>
    <message>
        <source>No LiteLoader versions are currently available for Minecraft </source>
        <translation type="vanished">当前没有适用于此 Minecraft 版本的 LiteLoader 可用 </translation>
    </message>
    <message>
        <source>Couldn&apos;t load or download the LiteLoader version lists!</source>
        <translation type="vanished">无法加载或下载 LiteLoader 版本列表！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.cpp" line="482"/>
        <source>Error updating instance</source>
        <translation>更新实例时出错</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/VersionPage.h" line="59"/>
        <source>Version</source>
        <translation>版本</translation>
    </message>
</context>
<context>
    <name>VersionProxyModel</name>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="110"/>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="112"/>
        <source>Minecraft</source>
        <translation>Minecraft</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="114"/>
        <source>Branch</source>
        <translation>分支</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="116"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="118"/>
        <source>Architecture</source>
        <translation>架构</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="120"/>
        <source>Path</source>
        <translation>路径</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="122"/>
        <source>Released</source>
        <translation>发布于</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="127"/>
        <source>The name of the version.</source>
        <translation>版本的名称。</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="129"/>
        <source>Minecraft version</source>
        <translation>Minecraft 版本</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="131"/>
        <source>The version&apos;s branch</source>
        <translation>版本的分支</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="133"/>
        <source>The version&apos;s type</source>
        <translation>版本的类型</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="135"/>
        <source>CPU Architecture</source>
        <translation>CPU 架构</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="137"/>
        <source>Filesystem path to this version</source>
        <translation>此版本的文件路径</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="139"/>
        <source>Release date of this version</source>
        <translation>该版本的发布日期</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="158"/>
        <source>%1 (installed)</source>
        <translation>%1（已安装）</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="182"/>
        <source>Recommended</source>
        <translation>推荐版本</translation>
    </message>
    <message>
        <location filename="src/launcher/VersionProxyModel.cpp" line="186"/>
        <source>Latest</source>
        <translation>最新版本</translation>
    </message>
</context>
<context>
    <name>VersionSelectDialog</name>
    <message>
        <location filename="src/launcher/ui/dialogs/VersionSelectDialog.cpp" line="95"/>
        <source>Choose Version</source>
        <translation>选择版本</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/VersionSelectDialog.cpp" line="96"/>
        <source>Reloads the version list.</source>
        <translation>重新加载版本列表。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/dialogs/VersionSelectDialog.cpp" line="97"/>
        <source>&amp;Refresh</source>
        <translation>刷新(&amp;R)</translation>
    </message>
</context>
<context>
    <name>VersionSelectWidget</name>
    <message>
        <location filename="src/launcher/ui/widgets/VersionSelectWidget.cpp" line="36"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/VersionSelectWidget.cpp" line="158"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/widgets/VersionSelectWidget.cpp" line="158"/>
        <source>List update failed:
%1</source>
        <translation>列表更新失败：
%1</translation>
    </message>
</context>
<context>
    <name>WideBar</name>
    <message>
        <location filename="src/launcher/ui/widgets/WideBar.cpp" line="220"/>
        <source>Customize toolbar actions</source>
        <translation>自定义工具栏操作</translation>
    </message>
</context>
<context>
    <name>WorldList</name>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="200"/>
        <source>This world is symbolically linked from elsewhere.</source>
        <translation>这个世界被符号链接链接到了其他地方。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="203"/>
        <source>
This world is hard linked elsewhere.</source>
        <translation>
这个世界被硬链接到了其他地方。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="222"/>
        <source>Warning: This world is symbolically linked from elsewhere. Editing it will also change the original.
Canonical Path: %1</source>
        <translation>警告：这个世界被符号链接链接到了其他地方。如果修改也会同步修改原位置的存档。
规范路径：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="227"/>
        <source>Warning: This world is hard linked elsewhere. Editing it will also change the original.</source>
        <translation>这个世界被硬链接到了其他地方。如果修改也会同步修改原位置的存档。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="264"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="266"/>
        <source>Game Mode</source>
        <translation>游戏模式</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="268"/>
        <source>Last Played</source>
        <translation>最后游玩于</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="271"/>
        <source>Size</source>
        <extracomment>World size on disk</extracomment>
        <translation>大小</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="274"/>
        <source>Info</source>
        <extracomment>special warnings?</extracomment>
        <translation>信息</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="282"/>
        <source>The name of the world.</source>
        <translation>世界的名称。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="284"/>
        <source>Game mode of the world.</source>
        <translation>世界的游戏模式。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="286"/>
        <source>Date and time the world was last played.</source>
        <translation>最后一次进入此世界的日期和时间。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="288"/>
        <source>Size of the world on disk.</source>
        <translation>世界在磁盘上的大小。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/WorldList.cpp" line="290"/>
        <source>Information and warnings about the world.</source>
        <translation>这个世界的警告和信息。</translation>
    </message>
</context>
<context>
    <name>WorldListPage</name>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="65"/>
        <source>Actions</source>
        <translation>行动</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="97"/>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="102"/>
        <source>Rename</source>
        <translation>重命名</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="107"/>
        <source>Copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="vanished">移除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="112"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="117"/>
        <source>MCEdit</source>
        <translation>MCEdit</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="122"/>
        <source>Copy Seed</source>
        <translation>复制种子</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="127"/>
        <source>Refresh</source>
        <translation>刷新</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="132"/>
        <source>View Folder</source>
        <translation>查看文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="137"/>
        <source>Reset Icon</source>
        <translation>重置图标</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="140"/>
        <source>Remove world icon to make the game re-generate it on next load.</source>
        <translation>删除世界图标，使游戏在下次加载时重新生成图标。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="145"/>
        <source>Datapacks</source>
        <translation>数据包</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.ui" line="148"/>
        <source>Manage datapacks inside the world.</source>
        <translation>管理世界内的数据包。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.h" line="59"/>
        <source>Worlds</source>
        <translation>世界</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="140"/>
        <source>Context menu</source>
        <translation>右键菜单</translation>
    </message>
    <message>
        <source>Are you sure?</source>
        <translation type="vanished">你确定吗？</translation>
    </message>
    <message>
        <source>This will remove the selected world permenantly.
The world will be gone forever (A LONG TIME).

Do you want to continue?</source>
        <translation type="vanished">这会永久删除所选世界。
这个世界将会永远消失（真的很久！！）

你想继续吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="221"/>
        <source>Open World Datapacks Folder</source>
        <translation>打开世界数据包文件夹</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="275"/>
        <source>Open World in MCEdit</source>
        <translation>在 MCEdit 中打开世界</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="295"/>
        <source>No MCEdit found or set up!</source>
        <translation>未找到 MCEdit 或未设置！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="296"/>
        <source>You do not have MCEdit set up or it was moved.
You can set it up in the global settings.</source>
        <translation>您没有设置好 MCEdit 的路径或它被移动了。
您可以在全局设置里面设置它。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="302"/>
        <source>MCEdit failed to start!</source>
        <translation>MCEdit 启动失败！</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="303"/>
        <source>MCEdit failed to start.
It may be necessary to reinstall it.</source>
        <translation>MCEdit 启动失败。
可能需要重新安装它。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="346"/>
        <source>Select a Minecraft world zip</source>
        <translation>选择 Minecraft 存档（.zip 文件）</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="346"/>
        <source>Minecraft World Zip File (*.zip)</source>
        <translation>Minecraft 世界 Zip 文件 (*.zip)</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="381"/>
        <source>Copy World</source>
        <translation>复制世界</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="366"/>
        <source>Changing a world while Minecraft is running is potentially unsafe.
Do you wish to proceed?</source>
        <translation>在 Minecraft 运行时修改世界可能导致错误。
您真的要继续吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="192"/>
        <source>Confirm Deletion</source>
        <translation>确认删除</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="193"/>
        <source>You are about to delete &quot;%1&quot;.
The world may be gone forever (A LONG TIME).

Are you sure?</source>
        <translation>即将删除：“%1”。
您的世界将会永久失去（真的很久）。

您确定吗？</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="388"/>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="409"/>
        <source>World name</source>
        <translation>世界名称</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="388"/>
        <source>Enter a new name for the copy.</source>
        <translation>输入复制的世界的名称。</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="402"/>
        <source>Rename World</source>
        <translation>重命名世界</translation>
    </message>
    <message>
        <location filename="src/launcher/ui/pages/instance/WorldListPage.cpp" line="409"/>
        <source>Enter a new world name.</source>
        <translation>输入一个新的世界名称。</translation>
    </message>
</context>
<context>
    <name>XboxAuthorizationStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="20"/>
        <source>Getting authorization to access %1 services.</source>
        <translation>正在获得访问 %1 服务的授权。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="63"/>
        <source>Failed to get authorization for %1 services. Error %2.</source>
        <oldsource>Failed to get authorization for %1 services. Error %1.</oldsource>
        <translation>无法获得 %1 服务的授权。错误 %2。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="66"/>
        <source>Unknown STS error for %1 services: %2</source>
        <translation>%1 服务未知 STS 错误：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="70"/>
        <source>Failed to get authorization for %1 services: %2</source>
        <translation>获取 %1 服务授权失败：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="78"/>
        <source>Could not parse authorization response for access to %1 services.</source>
        <translation>无法解析访问 %1 服务的授权响应。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="84"/>
        <source>Server has changed %1 authorization user hash in the reply. Something is wrong.</source>
        <translation>服务器更改了响应中的 %1 授权用户哈希值。有点不对劲。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="90"/>
        <source>Got authorization to access %1</source>
        <translation>成功获得了访问 %1 的授权</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="101"/>
        <source>Cannot parse %1 authorization error response as JSON: %2</source>
        <translation>无法将 %1 的授权错误响应解析为 JSON：%2</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="109"/>
        <source>XErr element is missing from %1 authorization error response.</source>
        <translation>%1 授权错误响应中缺少 XErr 元素。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="115"/>
        <source>This Microsoft account does not have an XBox Live profile. Buy the game on %1 first.</source>
        <translation>此 Microsoft 账户没有 Xbox Live 档案。请先在 %1 购买游戏。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="121"/>
        <source>XBox Live is not available in your country. You&apos;ve been blocked.</source>
        <translation>Xbox Live 服务在您的国家或地区不可用。您的登录请求已被屏蔽。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="127"/>
        <source>This Microsoft account is underaged and is not linked to a family.

Please set up your account according to %1.</source>
        <translation>此 Microsoft 账户拥有者为未成年用户，且该账号尚未绑定到一个家庭。

请根据 %1 设置您的账号。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="134"/>
        <source>This Microsoft account requires proof of age to play. Please login to %1 to provide proof of age.</source>
        <translation>此 Microsoft 账户需要进行年龄认证。请登录 %1 以确认你的年龄。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="139"/>
        <source>This Microsoft account has reached its limit for playtime. This Microsoft account has been blocked from logging in.</source>
        <translation>此 Microsoft 账户已达到游戏时间限制。此 Microsoft 账户已被阻止登录。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="143"/>
        <source>This Microsoft account was banned by Xbox for violating one or more Community Standards for Xbox and is unable to be used.</source>
        <translation>此 Microsoft 账户因违反 Xbox 社区规定而被停用，此账户无法使用。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="149"/>
        <source>This Microsoft account is currently restricted and your guardian has not given you permission to play online. Login to %1 and have your guardian change your permissions.</source>
        <translation>此 Microsoft 账户目前受到限制，您的监护人未授予您游戏权限。登录到 %1 并让您的监护人更改您的权限。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="156"/>
        <source>This Microsoft account has not accepted Xbox&apos;s Terms of Service. Please login and accept them.</source>
        <translation>此 Microsoft 账户未接受 Xbox 的服务条款。请登录并接受条款。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxAuthorizationStep.cpp" line="161"/>
        <source>XSTS authentication ended with unrecognized error(s):

%1</source>
        <translation>XSTS 身份验证过程中发生了未知的错误：

%1</translation>
    </message>
</context>
<context>
    <name>XboxProfileStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxProfileStep.cpp" line="15"/>
        <source>Fetching Xbox profile.</source>
        <translation>正在获取 Xbox 档案。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxProfileStep.cpp" line="53"/>
        <location filename="src/launcher/minecraft/auth/steps/XboxProfileStep.cpp" line="55"/>
        <source>Failed to retrieve the Xbox profile: %1</source>
        <translation>无法获取 Xbox 档案：%1</translation>
    </message>
    <message>
        <source>Failed to retrieve the Xbox profile.</source>
        <translation type="vanished">获取 Xbox 个人资料失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxProfileStep.cpp" line="62"/>
        <source>Got Xbox profile</source>
        <translation>成功获取 Xbox 档案</translation>
    </message>
</context>
<context>
    <name>XboxUserStep</name>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxUserStep.cpp" line="14"/>
        <source>Logging in as an Xbox user.</source>
        <translation>以 Xbox 用户身份登录。</translation>
    </message>
    <message>
        <source>XBox user authentication failed.</source>
        <translation type="vanished">Xbox 用户验证失败。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxUserStep.cpp" line="56"/>
        <location filename="src/launcher/minecraft/auth/steps/XboxUserStep.cpp" line="58"/>
        <source>XBox user authentication failed: %1</source>
        <translation>Xbox 用户身份验证失败：%1</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxUserStep.cpp" line="66"/>
        <source>XBox user authentication response could not be understood.</source>
        <translation>无法识别 Xbox 用户认证响应。</translation>
    </message>
    <message>
        <location filename="src/launcher/minecraft/auth/steps/XboxUserStep.cpp" line="70"/>
        <source>Got Xbox user token</source>
        <translation>成功获取 Xbox 用户令牌</translation>
    </message>
</context>
<context>
    <name>Yggdrasil</name>
    <message>
        <source>Authentication server didn&apos;t send a client token.</source>
        <translation type="vanished">验证服务器未发送客户端令牌（Client Token）.</translation>
    </message>
    <message>
        <source>Authentication server attempted to change the client token. This isn&apos;t supported.</source>
        <translation type="vanished">验证服务器尝试修改客户端令牌。该操作不被支持。</translation>
    </message>
    <message>
        <source>Authentication server didn&apos;t send an access token.</source>
        <translation type="vanished">验证服务器没有提供访问令牌（Access Token）。</translation>
    </message>
    <message>
        <source>Authentication server didn&apos;t send a selected profile.</source>
        <translation type="vanished">身份验证服务器未发送选定的档案。</translation>
    </message>
    <message>
        <source>Authentication server didn&apos;t send a UUID in selected profile.</source>
        <translation type="vanished">身份验证服务器没有为所选档案提供 UUID。</translation>
    </message>
    <message>
        <source>Authentication operation timed out.</source>
        <translation type="vanished">身份验证操作已超时。</translation>
    </message>
    <message>
        <source>Authentication operation cancelled.</source>
        <translation type="vanished">身份验证操作已取消。</translation>
    </message>
    <message>
        <source>&lt;b&gt;SSL Handshake failed.&lt;/b&gt;&lt;br/&gt;There might be a few causes for it:&lt;br/&gt;&lt;ul&gt;&lt;li&gt;You use Windows and need to update your root certificates, please install any outstanding updates.&lt;/li&gt;&lt;li&gt;Some device on your network is interfering with SSL traffic. In that case, you have bigger worries than Minecraft not starting.&lt;/li&gt;&lt;li&gt;Possibly something else. Check the log file for details&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="vanished">&lt;b&gt;SSL 握手失败。&lt;/b&gt;&lt;br/&gt;可能的原因如下：&lt;br/&gt;&lt;ul&gt;&lt;li&gt;您正在使用 Windows 并且需要更新您的根证书，请在系统更新处安装那些突出显示的更新。&lt;/li&gt;&lt;li&gt;您的网络上有设备正在干扰 SSL 流量，在这种情况下，您该担心的不仅仅是 Minecraft 无法启动。&lt;/li&gt;&lt;li&gt;可能的原因还有很多，请查看日志文件以获取详细信息&lt;/li&gt;&lt;/ul&gt;</translation>
    </message>
    <message>
        <source>The Mojang account no longer exists. It may have been migrated to a Microsoft account.</source>
        <translation type="vanished">此 Mojang 账户不再存在，它可能已迁移至微软账户。</translation>
    </message>
    <message>
        <source>Authentication operation failed due to a network error: %1 (%2)</source>
        <translation type="vanished">身份验证操作因为一个网络错误而失败：%1 （%2）</translation>
    </message>
    <message>
        <source>Failed to parse authentication server response JSON response: %1 at offset %2.</source>
        <translation type="vanished">解析验证服务器 JSON 回复失败：%1 在位置 %2。</translation>
    </message>
    <message>
        <source>An unknown error occurred when trying to communicate with the authentication server: %1</source>
        <translation type="vanished">尝试与认证服务器通信时发生未知错误：%1</translation>
    </message>
    <message>
        <source>An unknown Yggdrasil error occurred.</source>
        <translation type="vanished">发生未知 Yggdrasil 错误。</translation>
    </message>
</context>
<context>
    <name>YggdrasilStep</name>
    <message>
        <source>Logging in with Mojang account.</source>
        <translation type="vanished">正在使用 Mojang 账户登录。</translation>
    </message>
    <message>
        <source>Logged in with Mojang</source>
        <translation type="vanished">已使用 Mojang 账户登录</translation>
    </message>
    <message>
        <source>Mojang user authentication failed.</source>
        <translation type="vanished">Mojang 用户验证失败。</translation>
    </message>
    <message>
        <source>Mojang user authentication ended with a network error.</source>
        <translation type="vanished">Mojang 账户认证因网络错误终止。</translation>
    </message>
</context>
</TS>
