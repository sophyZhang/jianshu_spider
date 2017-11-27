const path = require('path');
// 配置文件
module.exports = {
  excelFile: {
 		path: path.join(__dirname, 'public/excel/')
 	},	
	data: [
		{name:"1凤凰磐石",url:"http://www.jianshu.com/u/bc551309edf1"},
		{name:"2花京体验",url:"http://www.jianshu.com/u/7654365ac9e5"},
		{name:"3夏大耳朵",url:"http://www.jianshu.com/u/d582362d6bef"},
	/**	{name:"4御前带枪刺客",url:"http://www.jianshu.com/u/af7eebec5ba7"},
		{name:"5临溪为砚",url:"http://www.jianshu.com/u/7629d45a7121"},
		{name:"6Lilydancing",url:"http://www.jianshu.com/u/e4226643765d"},
		{name:"7陌上尘兮",url:"http://www.jianshu.com/u/351d2f0a554b"},
		{name:"8Hushcookies",url:"http://www.jianshu.com/u/c6f59eed32c4"},
		{name:"9文绾",url:"http://www.jianshu.com/u/bcb6210e48c7"},
		{name:"10牛牛七",url:"http://www.jianshu.com/u/e3db1950300a"},
		{name:"11刘艺诺",url:"http://www.jianshu.com/u/b1e8aece6f53"},
		{name:"12穷途小姐",url:"http://www.jianshu.com/u/073203e6570a"}, 
		{name:"13雪雪泥",url:"http://www.jianshu.com/u/9a54a55bfd82"},
		{name:"14大海悦",url:"http://www.jianshu.com/u/8b442080445b"},
		{name:"15杨三儿",url:"http://www.jianshu.com/u/80a1ff7e5555"},
		{name:"16南社后生",url:"http://www.jianshu.com/u/941fdfba861d"},
		{name:"17风飘絮语",url:"http://www.jianshu.com/u/6d818534cfde"},
		{name:"18泡芙甜",url:"http://www.jianshu.com/u/0d94b1f1ee04"},
		{name:"19Dear酱子",url:"http://www.jianshu.com/u/3a6854e6f61c"},
		{name:"20苏小逃",url:"http://www.jianshu.com/u/6985905da3d0"},

		{name:"21彭小说",url:"http://www.jianshu.com/u/aab46ea02e66"},
		{name:"22林西燃",url:"http://www.jianshu.com/u/4f0a716356da"},
		{name:"23洪一念",url:"http://www.jianshu.com/u/113e982806e1"},
		{name:"24烟行",url:"http://www.jianshu.com/u/27dcba74615c"},
		{name:"25厦九九",url:"http://www.jianshu.com/u/1c1baec74364"},
		{name:"26日洋儿",url:"http://www.jianshu.com/u/c04b493ed0a3"},
		{name:"27珍珠相思",url:"http://www.jianshu.com/u/1142d0717047"},
		{name:"28老山健",url:"http://www.jianshu.com/u/d025917a8dae"},
		{name:"29蔡子璇",url:"http://www.jianshu.com/u/afb804243c88"},
		{name:"30鲸北晨",url:"http://www.jianshu.com/u/f57076f3a97a"},

		{name:"31舟树",url:"http://www.jianshu.com/u/906cd20904c5"},
		{name:"32三寸泥",url:"http://www.jianshu.com/u/d1b7399b278e"},
		{name:"33兮水Jim",url:"http://www.jianshu.com/u/2951dbcd7f3f"},
		{name:"34大V小M",url:"http://www.jianshu.com/u/5a34c023a2a3"},
		{name:"35懒云朵朵",url:"http://www.jianshu.com/u/33c7f9aa933e"},
		{name:"36嘉懿与清穆",url:"http://www.jianshu.com/u/0f34d9cfdb24"},
		{name:"37黄梅枝",url:"http://www.jianshu.com/u/9dd32530cc25"},
		{name:"38戒闲",url:"http://www.jianshu.com/u/fb2d5e104ef3"},
		{name:"39小雅的时光",url:"http://www.jianshu.com/u/0e0b6c7a81ce"},
		{name:"40霍一帆",url:"http://www.jianshu.com/u/37b1fa483975"},

		{name:"41暧春",url:"http://www.jianshu.com/u/a1dc930404e2"},
		{name:"42慕容歌",url:"http://www.jianshu.com/u/43430fc83d41"},
		{name:"43不知子骞",url:"http://www.jianshu.com/u/b5eccd3df67d"},
		{name:"44哈哈巧克力",url:"http://www.jianshu.com/u/c0dcacc061ed"},
		{name:"45大肚鱼",url:"http://www.jianshu.com/u/99f8dd6c33d8"},
		{name:"46凌晨的鬼",url:"http://www.jianshu.com/u/0f473bbb96c8"},
		{name:"47舒千阳",url:"http://www.jianshu.com/u/71a41a52b229"},
		{name:"48苏小池",url:"http://www.jianshu.com/u/b2e62828d5a4"},
		{name:"49绛洞花王",url:"http://www.jianshu.com/u/b7592e3e31d7"},
		{name:"50蒋血",url:"http://www.jianshu.com/u/260c7d262ebd"},

		{name:"51Albus _shaw",url:"http://www.jianshu.com/u/5c305857bc11"},
		{name:"52黑白无",url:"http://www.jianshu.com/u/5dfe9aa4585d"},
		{name:"53尔青筝",url:"http://www.jianshu.com/u/557176f8be3f"},
		{name:"54大黄的小黑屋",url:"http://www.jianshu.com/u/09a05d24f187"},
		{name:"55意大利面小姐姐",url:"http://www.jianshu.com/u/d4c1f55cba93"},
		{name:"56浅雪寻梅",url:"http://www.jianshu.com/u/87451635968c"},
		{name:"57拾字小酱",url:"http://www.jianshu.com/u/d25f82d536f1"},
		{name:"58末渡",url:"http://www.jianshu.com/u/543698d766c0"},
		{name:"59粥小唯",url:"http://www.jianshu.com/u/6d7b041602d1"},
		{name:"60橙小芒",url:"http://www.jianshu.com/u/aba54d1b2ea9"},

		{name:"61高山小溪水",url:"http://www.jianshu.com/u/e9c1bcd1ab49"},
		{name:"62凡久匠",url:"http://www.jianshu.com/u/26542cb36403"},
		{name:"65糕小糕",url:"http://www.jianshu.com/u/eeb221fb7dac"},
		{name:"66曦怡Winyi",url:"http://www.jianshu.com/u/214829f8c21c"},
		{name:"67黄昏的书屋",url:"http://www.jianshu.com/u/aa9946ec0cea"},
		{name:"68白梨安",url:"http://www.jianshu.com/u/c25461889b94"},
		{name:"69你好呀小铃铛",url:"http://www.jianshu.com/u/b178da20af77"},
		{name:"70豆豆姑娘",url:"http://www.jianshu.com/u/ae36d2eb804b"},

		{name:"71鱼我同行",url:"http://www.jianshu.com/u/725e5de47184"},
		{name:"72方方的心好累好想退休",url:"http://www.jianshu.com/u/a898869a79ab"},
		{name:"73安狸洛",url:"http://www.jianshu.com/u/fcfc108b63e0"},
		{name:"74葡萄阿姨",url:"http://www.jianshu.com/u/a0d91e542159"},
		{name:"75酒七的馆 ",url:"http://www.jianshu.com/u/8ddeae237e25"},
		{name:"76小悟空",url:"http://www.jianshu.com/u/1906ff132696"},
		{name:"77温言燕语",url:"http://www.jianshu.com/u/e5def3df9545"},
		{name:"79一苇渡乌江",url:"http://www.jianshu.com/u/20a0152b1f22"},
		{name:"80七毛毛",url:"http://www.jianshu.com/u/0fefe55368cf"},
		{name:"81秋浦闲客",url:"http://www.jianshu.com/u/a36d893c2931"},
		{name:"82素衣莫莫",url:"http://www.jianshu.com/u/74800f6c3334"},
		{name:"83星飞飞",url:"http://www.jianshu.com/u/8439f44f8e4e"}**/

	]
}



