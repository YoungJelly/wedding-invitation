/*global moment*/
const calDiffStr = (oldDate, newDate = Date.now()) => {
  const oldMoment = moment(oldDate);
  const newMoment = moment(newDate);
  const duration = moment.duration(newMoment.diff(oldMoment));
  return Math.floor(duration.as('d')) + '天';
}


const BOY = '🐷';
const GIRL = '🐱';
const DATE_MAP = {
  MEET: new Date('2014-02-21'),
  CONFESSION: new Date('2017-09-01'),
  CONFESSION_YES: new Date('2020-05-13'),
  JIEHUN: new Date('2020-10-18'),
};


export default {
  code: 
`
// 今天心情好
// 我给你表演写代码
// 我要开始写啦
const { ${BOY}, ${GIRL} } = 🇨🇳;
(${BOY}, ${GIRL}).相遇.在潍坊('${moment(DATE_MAP.MEET).format('LL')}');
(${BOY}, ${GIRL}).读研.在杭州.('${moment(DATE_MAP.CONFESSION).format('LL')}');
(${BOY}, ${GIRL}).婚纱照.在深圳.('${moment(DATE_MAP.CONFESSION_YES).format('LL')}');
(${BOY}, ${GIRL}).结婚.在济宁.('${moment(DATE_MAP.CONFESSION_YES).format('LL')}');

${BOY}.say('WoW，已经${calDiffStr(DATE_MAP.CONFESSION_YES)}了！');
....

// 希望不远的将来 (预计今年10月18号)
${BOY}.say('嫁给我吧!❤️');
${GIRL}.response('Yes, I do！');

(${BOY}, ${GIRL}).结婚('2020年10月18日')
(${BOY}, ${GIRL}).发请帖('2020年05月20日');

// 好了我写完了
// 我要开始运行啦`,
  executions: [{
    name:'初始化',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'解压中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'组装中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'打包中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'微笑🙂',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'大笑😄',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'编译中...',
    time: '',
    visible: false
  }],
  barrages: [
    '66666666',
    '愿你美梦成真',
    '你的邀请函真是美',
    '人美心更美',
    '你是最棒的',
    '哇哇哇',
    '还差女朋友吗',
    '今晚翻你牌',
    '看朕给你打下的江山',
    '你写代码老快了',
    '你的代码真是棒',
    '😗 😙 😚 😋 ',
    '只要代码写得好，单身永远跑不了'
  ],
}