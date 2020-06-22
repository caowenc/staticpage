<template>
  <div>
    <div class="head">
      <img class="img" @click="gopersonal" src="@/assets/images/drawable-xhdpi/jt1.png" width="35px" />
      <span class="text">用户隐私协议</span>
    </div>
    <div class="body">
      <span style="position: absolute;margin-left:10px;margin-top:10px">小目标软件许可及服务协议</span>
      <span style="position: absolute;margin-left:10px;margin-top:50px">欢迎使用小目标！</span>
      <span style="position: absolute;margin-left:10px;margin-top:90px;background-color:#fffb0f">第一条 特别提示</span>
      <span style="position: absolute;margin-left:10px;margin-top:130px">1、小目标在此特别提醒您（用户）在注册成为用户之前，请认真阅读本《小目标软件许可及服务协议》（以下简称“协议”），本协议系您与重庆赋比兴科技有限公司所订立的相关权利义务规范，用以描述重庆赋比兴科技有限公司通过小目标软件向您提供服务及您使用小目标软件服务（以下简称”服务“）所涉及的详细规定。请确保您充分理解本协议中各条款，包括免除小目标软件责任的条款及限制用户权利的条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。</span>
      <span style="position: absolute;margin-left:10px;margin-top:420px">2、本协议可由小目标软件随时更新， 更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在小目标</span>
      <span style="position: absolute;margin-left:188px;margin-top:461px; color: #c01a28;">个人中心</span>
      <span style="position: absolute;margin-left:252px;margin-top:461px">查阅最新版协议</span>
      <span style="position: absolute;margin-left:10px;margin-top:482px">条款。在小目标软件修改协议条款后，如果用户不接受修改后的条款，请立即停止使用小目标软件提供的服务，用户继续使用小目标软件提供的服务将被视为接受并愿意遵守修改后的协议。</span>
      <span style="position: absolute;margin-left:10px;margin-top:590px">3、只要您开始使用小目标软件，即表示您已无条件接受了本协议的相关规定，并愿意受其约束。如果发生纠纷，您应自行承担事实上未认真阅读本条款的责任，不得以未仔细阅读为由进行抗辩。</span>
      <span style="position: absolute;margin-left:10px;margin-top:695px">4、小目标为一款可免费下载使用的软件，不允许任何欺诈推广行为，特此提醒用户警惕冒用“小目标”名义的收费行为，避免遭受不必要的损失。</span>
      <span style="position: absolute;margin-left:10px;margin-top:780px;background-color:#fffb0f">第二条 用户账号</span>
      <span style="position: absolute;margin-left:10px;margin-top:820px;">1、用户在使用本服务前需要注册一个“小目标”账号，请了解账号在注册之后不可变更，用户须提供真实、有效的身份识别资料。“小目标”账号应当使用微信和手机号码绑定注册， 请用户使用尚未与“小目标”账号绑定的微信和手机号码，以及未被小目标软件根据本协议封禁的手机号码注册“小目标”账号。 小目标软件可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。</span>
      <span style="position: absolute;margin-left:10px;margin-top:1000px;">2、如果注册申请者有被小目标软件封禁的先例或涉嫌虚假注册及滥用他人名义注册，及其他不能得到许可的理由， 小目标软件将拒绝其注册申请。</span>
      <span style="position: absolute;margin-left:10px;margin-top:1080px;">3、用户注册时所填写的个人信息如有变动，用户需通过“账号设置”界面及时更改。若您所提供的资料与事实不符或所提供的资料业已变更而未更新或有任何误导之嫌而导致无法为您提供或继续提供服务的，您应自行承担由此引发的损失而与小目标无关。</span>
      <span style="position: absolute;margin-left:10px;margin-top:1220px;">5、未经小目标的事先书面同意，您不得以任何形式将自身账号及密码转让、赠予、出借、售卖予第三方或者以其他方式许可非初始注册人对其进行使用，否则小目标有权封禁、删除该账号。如您并非当前所使用账号的原始注册人，您应立即停止对该账号的一切使用及操作，由此引发的全部责任及损失与小目标无关。</span>
      <span style="position: absolute;margin-left:10px;margin-top:1380px;">6、您有义务妥善保管在注册时获得的账号及密码，如因黑客、第三人行为或您自身保管疏忽导致账号、密码遭他人非法使用并给您造成损失的，小目标就此不承任何责任。用户如果遗失自己的登陆密码，需及时通知小目标软件，并按照小目标软件的指导来解决该问题，如果该用户没有完成小目标号与手机号的绑定导致账户收入丢失，小目标软件对此不负任何责任。</span>
      <span style="position: absolute;margin-left:10px;margin-top:1560px;">7、如您发现自身账号遭他人非法使用或有异常使用的情形，应立即通知小目标，并提供与原始注册人相一致的个人有效身份信息。小目标在核实您所提供的个人有效身份信息后，将尽可能为您维护自身合法权利提供必要协助，但并不承诺您一定能通过该途径找回账号。</span>
      <span style="position: absolute;margin-top:1700px;background-color:#fffb0f">第三条 服务内容</span>
      <span style="position: absolute;margin-left:10px;margin-top:1740px;">1、本服务的具体内容由小目标软件根据实际情况提供，包括但不限于：</span>
      <span style="position: absolute;margin-left:15px;margin-top:1800px;">（1） 广告播放：用户安装运行“小目标”软件后可以在软件界面观看广告；</span>
      <span style="position: absolute;margin-left:15px;margin-top:1860px;">（2） 收入制：完成本协议第四条相关规定的用户可获得收入奖励；</span>
      <span style="position: absolute;margin-left:10px;margin-top:1920px;">2、在遵守相关法律法规前提下，根据合作广告主的要求，小目标软件有权决定用户在“小目标”软件界面上看到的广告内容。</span>
      <span style="position: absolute;margin-top:2000px;background-color:#fffb0f">第四条 使用规则</span>
      <span style="position: absolute;margin-left:10px;margin-top:2040px;">1、用户需从官方渠道下载安装小目标软件提供的App。</span>
      <span style="position: absolute;margin-left:10px;margin-top:2100px;">2、用户可以在“小目标”钱包中查看自己累计的收入情况。</span>
      <span style="position: absolute;margin-left:10px;margin-top:2155px;">3、用户收入作为“小目标”软件中的虚拟记录符号，不能在用户间相互转让， 不能使用包括人民币在内的任何法定货币购买，不具有在“小目标”软件以外的环境中进行交易结算的功能。</span>
      <span style="position: absolute;margin-top:2260px;background-color:#fffb0f">第五条 提现兑换</span>
      <span style="position: absolute;margin-left:10px;margin-top:2295px;">1、 我们将有权决定我们所提供的平台服务的资费标准和提现方式，我们可能会就不同的平台服务制定不同的资费标准和提现方式，也可能按照我们所提供的平台服务的不同阶段确定不同的资费标准和提现方式。另外，我们也可能不时地修改我们的资费和提现政策。我们会将有关软件服务的的资费标准、提现方式或其他有关政策的信息放置在该软件显著位置。</span>
      <span style="position: absolute;margin-left:10px;margin-top:2485px;background-color:#fffb0f ">第六条 收入累计及收入有效期</span>
      <span style="position: absolute;margin-left:10px;margin-top:2520px;">1、如果用户的累计收入数量出现错误，用户可以自出现错误之日起90天以内向小目标软件提出更正要求，小目标软件如果确定该用户的要求为正当合理，应在用户提出要求之日起90天以内更正错误。</span>
      <span style="position: absolute;margin-left:10px;margin-top:2620px;">2、如果用户采用擅自更改“小目标”软件程序或通过刷机刷量等技术手段邀请虚假用户或在没有充分告知其他潜在用户的情况下使得该潜在用户虽然安装了“小目标”软件但没有正常使用行为的或使用黑客手段攻击小目标软件服务器等不正当手段来获取收入， 小目标软件视为用户作弊行为而有权取消该用户资格并删除该用户所有收入， 并保留对攻击小目标软件服务器等黑客行为追究法律责任的权力。</span>
      <span style="position: absolute;margin-left:10px;margin-top:2810px;">3、长期不运行“小目标”软件的用户（非活跃用户）所获得收入自动被清零。 长期不运行指3个月内没有运行“小目标”软件。</span>
      <span style="position: absolute;margin-left:10px;margin-top:2900px;background-color:#fffb0f">第七条 使用规则</span>
      <span style="position: absolute;margin-left:10px;margin-top:2935px;">1、您应就自身使用小目标的行为负责，并保证在使用过程中遵循以下原则：</span>
      <span style="position: absolute;margin-left:10px;margin-top:2995px;">（1）遵守中国有关的法律和法规和本条款的相关规定；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3045px;">（2）遵守社会公序良德；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3080px;">（3）不得以任何形式侵犯第三方及小目标的合法利益；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3135px;">（4）不得将小目标提供的服务用于任何非法或侵权活动，包括但不限于将其用于展示、传播包含色情、种族主义、低级趣味、淫秽、诽谤中伤、污辱性质的资料，以及传播任何针对宗教、民族传统、人种、性别、年龄的各种仇恨、歧视和偏见的内容。</span>
      <span style="position: absolute;margin-left:10px;margin-top:3275px;">3、您应保证自身对小目标软件的使用行为的合法性、正当性，且不得对客户端进行反编译、反汇编、破解等行为。</span>
      <span style="position: absolute;margin-left:10px;margin-top:3355px;">4、如果小目标根据自身独立判断认为您对本软件的使用超出了合理范围，我们有权对您就软件的使用进行限制，您应自行承担由此引发的责任及损失。</span>
      <span style="position: absolute;margin-left:10px;margin-top:3445px;background-color:#fffb0f">第八条 服务的变更、中断、终止</span>
      <span style="position: absolute;margin-left:10px;margin-top:3485px;">1、因设备维修或更换、故障和通信中断等技术原因而中断业务，小目标软件可视情况事前或事后通知用户。</span>
      <span style="position: absolute;margin-left:10px;margin-top:3555px;">2、小目标软件临时中断业务时将在小目标软件发布公告。</span>
      <span style="position: absolute;margin-left:10px;margin-top:3605px;">3、如果因小目标软件临时中断业务而导致用户收入数据丢失，小目标软件会给予丢失数据的用户相应的收入补偿， 具体补偿收入数量由小目标软件决定。但因不可抗力导致的业务中断发生时,小目标软件不给予用户补偿。</span>
      <span style="position: absolute;margin-left:10px;margin-top:3720px;">4、当小目标软件用户发生如下情况时，小目标软件可单方面终止本协议，取消用户继续使用小目标软件产品及服务的资格：</span>
      <span style="position: absolute;margin-left:10px;margin-top:3790px;">（1） 用户死亡；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3820px;">（2） 盗用他人的个人信息或手机；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3850px;">（3） 注册用户时提供虚假信息；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3880px;">（4） 以非法手段（包括且不限于黑客攻击等）来积累或使用收入；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3930px;">（5） 妨碍其他用户的正常使用；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3960px;">（6） 伪称是小目标软件的工作人员或管理人员；</span>
      <span style="position: absolute;margin-left:10px;margin-top:3990px;">（7） 擅自强行更改小目标软件的计算机系统，或威胁侵入系统；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4040px;">（8） 擅自传播谣言，用各种手段来毁损小目标软件的名誉与妨碍小目标软件的正常营业；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4090px;">（9） 利用小目标软件的产品及服务宣传垃圾广告等法律法规严禁传播的广告内容；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4135px;">（10）假借或冒用“小目标”名义行使诈骗、集资等违法行为；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4185px;">（11）其他违反本协议的行为及违法行为。</span>
      <span style="position: absolute;margin-left:10px;margin-top:4215px;">（12）用户如因上述第4-（1）条原因而被取消用户资格，用户法定财产继承人可在用户资格被取消之日起30日 内向小目标软件提出书面申请，将该用户剩余收入转移至自己所有的小目标软件账号下， 否则小目标软件有权删除该用户剩余收入。</span>
      <span style="position: absolute;margin-left:10px;margin-top:4325px;">（13） 用户如因上述第4-（2）条到第4-（10）条的原因而被取消用户资格，小目标软件有权立即删除该用户的全部收入。</span>
      <span style="position: absolute;margin-left:10px;margin-top:4410px;background-color:#fffb0f" >第九条 用户个人隐私信息保护</span>
      <span style="position: absolute;margin-left:10px;margin-top:4450px;">1、小目标承诺将采取必要措施保护您存放在本服务器上的个人数据及隐私信息的安全，未经用户同意不向任何第三方公开、透露用户个人隐私信息。</span>
      <span style="position: absolute;margin-left:10px;margin-top:4530px;">2、在以下情况下，小目标对您个人数据及隐私信息的披露将不是为违约，具体包括：</span>
      <span style="position: absolute;margin-left:10px;margin-top:4580px;">（1） 小目标软件根据法律法规规定，负有披露义务的；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4630px;">（2）司法机关或行政机关基于法定程序要求小目标提供的；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4675px;">（3） 为维护社会公共利益及小目标的合法权益，在合理范围内进行披露的；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4725px;">（4）小目标已获得您的明确授权的；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4755px;">（5）由于用户将其用户密码告知他人或与他人共享注册帐户与密码，由此导致的任何个人信息的泄漏， 或其他非因小目标软件原因导致的个人隐私信息的泄露；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4845px;">（6） 用户与小目标软件及第三方合作单位之间就用户个人隐私信息的使用公开达成约定， 如该第三方同意承担与小目标同等的隐私保护责任的，小目标软件因此向该第三方公开用户个人隐私信息；</span>
      <span style="position: absolute;margin-left:10px;margin-top:4935px;" >（7） 任何由于黑客攻击、电脑病毒侵入及其他非因小目标软件原因导致用户个人隐私信息的泄露。</span>
      <span style="position: absolute;margin-left:10px;margin-top:4995px;">2、用户同意小目标软件可在以下事项中使用用户的个人隐私信息：</span>
      <span style="position: absolute;margin-left:10px;margin-top:5045px;">（1） 向用户及时发送重要通知，如软件更新、本协议条款的变更；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5095px;">（2） 小目标软件内部进行审计、数据分析和研究等，以改进小目标软件的产品、服务和与用户之间的沟通；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5165px;">（3） 依本协议约定，小目标软件管理、审查用户信息及进行处理措施；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5215px;">（4） 适用法律法规规定的其他事项。</span>
      <span style="position: absolute;margin-left:10px;margin-top:5255px;background-color:#fffb0f">第十条 用户使用规范</span>
      <span style="position: absolute;margin-left:10px;margin-top:5285px;">1、小目标软件用户不能利用小目标账号或小目标软件提供的服务进行如下行为：</span>
      <span style="position: absolute;margin-left:10px;margin-top:5335px;">（1） 用户擅自更改、消除或毁损小目标软件广告业务提供的各种信息；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5385px;">（2） 利用技术手段批量建立虚假账号；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5415px;">（3） 侵害小目标软件以及第三者的知识产权；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5445px;">（4） 提交、发布虚假信息，或盗用他人资料，冒充、利用他人名义；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5485px;">（5） 未经小目标软件许可,而传播广告或淫秽暴力等信息；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5525px;">（6） 其他不遵守本协议的行为；</span>
      <span style="position: absolute;margin-left:10px;margin-top:5555px;" >（7） 其他违法以及不正当的行为。</span>
      <span style="position: absolute;margin-left:10px;margin-top:5610px;background-color:#fffb0f">第十一条 免责条款</span>
      <span style="position: absolute;margin-left:10px;margin-top:5650px;" >1、小目标软件提供的服务中包括广告，用户同意在使用过程中显示小目标软件与第三方供应商、 合作伙伴提供的广告。我们对其中任何内容的合法性、准确性、完整性和可靠性概不负责，亦不承担任何法律责任，亦不对该等链接到的内容作出任何明示或默示的保证，包括但不限于有关所有权、质量、没有侵犯第三方权利、没有病毒的保证。除法律法规明确规定外，用户应自行对依该广告信息进行的交易负责， 对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，小目标软件不承担任何责任。</span>
      <span style="position: absolute;margin-left:10px;margin-top:5890px;">2、我们将以最大努力维护小目标软件正常运行，但您应对使用软件的结果自行承担风险，我们对此不做任何承诺或保证，不保证服务不中断，不保证您所浏览的视频内容的安全性、准确性、完整性、合法性及可靠性，不保证第三方网站是否对其所提供的视频作品均拥有合法、有效、完整的知识产权，对您的数据损失、丢失或服务停止不承担任何责任，由于网络带宽、手机（或其他电子设备）硬件限制等任何原因造成您无法正常使用小目标软件，我们不承担任何法律责任。</span>
      <span style="position: absolute;margin-left:10px;margin-top:6110px;">3、“小目标”并未授权任何第三方进行收费推广，任何以“小目标”名义进行收费的行为均为欺诈冒用，若因用户未能有效甄别，蒙受损失的，“小目标”对此不承担任何责任。</span>
      <span style="position: absolute;margin-left:10px;margin-top:6220px;background-color:#fffb0f">第十二条 知识产权保护</span>
      <span style="position: absolute;margin-left:10px;margin-top:6250px;">1、小目标软件的相关著作权、专利权、商标、广告业务以及所提供的有关广告内容的知识产权、商业秘密，均由小目标独占性所有。 用户从小目标软件获得的信息内容不经小目标在线的许可不能擅自复制、改编、发布与出版等。</span>
      <span style="position: absolute;margin-left:10px;margin-top:6380px;background-color:#fffb0f">第十三条 其他</span>
      <span style="position: absolute;margin-left:10px;margin-top:6410px;">1、小目标软件郑重提醒用户注意本协议中免除小目标软件责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险。 未成年人应在法定监护人的陪同下阅读本协议。</span>
      <span style="position: absolute;margin-left:10px;margin-top:6500px;">2、本协议的效力、解释及纠纷的解决，适用于中华人民共和国法律。若用户和小目标软件之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户同意将纠纷或争议提交小目标软件住所地有管辖权的人民法院管辖。</span>
      <span style="position: absolute;margin-left:10px;margin-top:6610px;">3、本协议的任何条款无论因何种原因无效或不具可执行性，其余条款仍有效，对双方具有约束力。</span>
      <span style="position: absolute;margin-left:10px;margin-top:6660px;">4、本协议的版权由小目标软件所有，小目标软件保留一切解释和修改的权力。</span>
      <span style="position: absolute;margin-left:10px;margin-top:6710px;">5、本协议从2019年01月1日起适用。</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    gopersonal() {
      this.$router.push('/personal')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.head {
  width: 100%;
  height: 60px;
  background-color: #ffd430;
  position: fixed;
  z-index: 1;
}
.body {
  position: absolute;
  margin-top: 70px;
  width: 100%;
  height: 7000;
  background-color: #f3f7f8;
}
.img {
  margin-left: 10px;
  margin-top: 10px;
}
.text {
  position: absolute;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 80px;
  text-align: center;
  font-weight: bold;
}
</style>
