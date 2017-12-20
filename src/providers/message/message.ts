import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public alerCtrl: AlertController) {

  }

  showAlert1() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用后在当前房间随机放置6个即爆炸弹，有可能伤及自身。宝物房、书店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert2() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使人物在当前房间获得飞行能力，在妈腿，妈心战斗时使用可以秒杀boss。但是以撒或者？？？在撒旦和以撒战斗时使用会立即杀死自己。商店、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert3() {
    let alert = this.alerCtrl.create({
      title: '第一次通关解锁。',
      subTitle: '当前房间基础伤害+2点，如果玩家拥有荆棘头环（Blood of the Martyr）则最终伤害x1.5，对魔法菇（Magic Mushroom）没有加成。增加25%恶魔房间出现的几率。书店、恶魔房道具。犹大出生自带。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert4() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家10秒内无敌。但是如果这时进行恶魔交易依然要损失心之容器。宝物房、书店道具。（AT立场全开',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert5() {
    let alert = this.alerCtrl.create({
      title: '击败任意一个天启骑士解锁。',
      subTitle: '获得一个魂心并使本关卡boss变成天启四骑士之一(游戏中每一层都有洞穴1洞穴2地下室1地下室2的标示，1和2是层数，前面的是关卡名。非2合1层子宫层、固定boss如妈腿妈心无法替换，且一次游戏最多出现4次天启boss).增加35%恶魔房出现的概率。宝物房、书店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert6() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使角色获得跳跃能力，可以越过障碍，跳跃过程中无敌。如果角色拥有飞行能力，使用该道具会使得玩家向一个方向冲锋一段距离。宝物房、书店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert7() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当前房间随机召唤一个小跟班，即使这个小跟班还没有被解锁。宝物房、书店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert8() {
    let alert = this.alerCtrl.create({
      title: '使用塔罗牌-死亡4次解锁。',
      subTitle: '对当前房间内的敌人造成伤害。书店、隐藏房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert9() {
    let alert = this.alerCtrl.create({
      title: '用阿萨谢尔通关大教堂解锁。',
      subTitle: '使用后给予一颗黑心。宝物房、书店、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert10() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用后给予半颗永恒之心。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert11() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当前房间内使角色的眼泪带有追踪效果。书店、宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert12() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '随机产生一个基础掉落或者胶囊或者卡牌。书店、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert13() {
    let alert = this.alerCtrl.create({
      title: '用伊甸击败撒旦解锁',
      subTitle: '每层只能使用三次，使用效果相当于随机各发动一次寻宝图（显示本层房间分布）指南针（显示本层的特殊房间的位置，但是不会显示隐藏房间，超级隐藏房间和普通房间的位置）蓝色地图（显示本层隐藏房间和超级隐藏房间的位置）的效果，顺序不固定，用过3次之后无法再次使用，到了下一层才能再次使用。宝物房、书店、隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert14() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '丢出鲍勃腐烂的脑袋并造成额外的伤害并使敌人中毒5秒，可以破坏岩石。会受到我的镜像（My Reflection）小小星球（Tiny Planet）等被动道具的影响。宝物房、金色宝箱道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert15() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '召唤2-4个蓝色苍蝇。猫套装之一。恶魔房、诅咒房、红箱子、金箱子道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert16() {
    let alert = this.alerCtrl.create({
      title: '第一次击败恶魔房boss坎卜斯解锁。',
      subTitle: '向四个方向发射硫磺火。造成成吨的伤害。击败坎卜斯有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert17() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予角色飞行能力并增加移动速度，使用后按方向键会以角色1.5倍的移动速度冲锋，并对沿途撞到的敌人造成伤害。击败无头骑士后若没有则必定掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert18() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在使用时角色将在选定的方向上无敌并且发动冲锋，对接触到的敌人造成损伤。并且附带有天裂的攻击效果。装备时，增加角色的移动速度并给   角色飞行能力。击败征服骑士时没有则必定掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert19() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '向角色周围10个方向发动和当前角色相同的攻击（眼泪、硫磺火、妈刀、吐根、炸弹等），每个方向的攻击都和本身攻击相同并且带有原本眼泪带有的特殊效果。如果以撒的左右眼子弹不一样，会继承最近一发子弹的效果，如果玩家拥有科技2，塔米猫的头是不继承科激光效果的。金色宝箱道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert20() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用后小范围释放有毒气体，造成少量伤害的同时使周围敌人中毒。宝物房道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert21() {
    let alert = this.alerCtrl.create({
      title: '破坏100坨便便解锁。',
      subTitle: '推开自身周围的敌人。宝物房道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert22() {
    let alert = this.alerCtrl.create({
      title: '往存款机里存入900块解锁。',
      subTitle: '使用时角色会举着一个蜡烛并且移动速度降低，通过攻击键丢出一团蓝火对一条线上的敌人造成伤害，也能抵消敌人的弹幕（蓝火可以越过沟壑但是不能穿过岩石和大便）。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert23() {
    let alert = this.alerCtrl.create({
      title: '往存款机存入400元解锁。',
      subTitle: '发射的红黄色火焰而且不会消失而是一直移动到头并持续存在，可以被自己的眼泪浇灭，随着消灭敌人火会渐渐熄灭。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert24() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '按住空格键会开始消耗能量，当能量消耗完毕的时候会使得玩家进入短暂的无敌状态，松开空格键后回复能量，如果能量为空的时候依然按住空格约1-2秒后将会开始消耗血量。可以利用该道具无伤进出刺房。同理可以凭借这个无伤使用献血机以及卖血给恶魔乞丐。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert25() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '显示本层地图并且随机掉落一张塔罗牌或者一个魂心。刷爆预言机有几率掉落。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert26() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '把当前房间内的所有小怪变成大便，某些怪物不起效果，天启四骑士免疫该效果。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert27() {
    let alert = this.alerCtrl.create({
      title: '用？？？击败撒旦解锁。',
      subTitle: '使用后消失。重置本层，包括一切的房间，掉落，怪物，boss。宝物房、隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert28() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '满血的时候可以储存红心，最多储存4个，使用后可以把红心丢在地上。拥有空罐子并且里面有红心的情况下替换为其他主动道具，红心会被扔到地上。tips：在白心或黑心的超级隐藏房里丢下空罐的红心会被替换成白心or黑心。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert29() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '恐惧全屏敌人5秒，他们将会逃离你。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert30() {
    let alert = this.alerCtrl.create({
      title: '用伊甸击败以撒。',
      subTitle: '使用时复制当前携带塔罗牌或者卢恩符文的效果。宝物房、商店、隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert31() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当前房间随机召唤几道圣光，对碰到的敌人造成伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert32() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用后在玩家当前位置放置一个可以吸引敌人仇恨的宝宝并在一段时间后爆炸，爆炸范围略大于炸弹。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert33() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '飞飞出后造成微小伤害，并且有很大几率眩晕敌人3秒。到达极限距离或者击中敌人后返回，返程的时候并不会造成眩晕。并且可以勾回基础掉落。飞行的距离受人物射程属性的影响。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert34() {
    let alert = this.alerCtrl.create({
      title: '用参孙击败撒旦解锁。',
      subTitle: '对自己造成一个红心的伤害并且对全房间的敌人造成伤害。正常状态使用扣1血，受伤无敌状态使用扣半血，无敌（全家福(The Polaroid)，凯尔特十字架(Celtic Cross)等）使用不扣血。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert35() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '随机产生2-4个蓝蜘蛛。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert36() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用时以两个魂心或者黑心换一个心之容器。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert37() {
    let alert = this.alerCtrl.create({
      title: '用？？？击败以撒解锁。',
      subTitle: '重新刷新当前房间的未拾取的道具，但是刷新的道具仍然受到当前房间掉落列表的限制，可以roll商店的道具。宝物房道具。以撒出生自带。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert38() {
    let alert = this.alerCtrl.create({
      title: '炸毁老虎机30次解锁。',
      subTitle: '重置全身除了D4以外的道具，对于心之容器的增加效果依然保留。不会roll掉阿萨谢尔的硫磺火。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert39() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '重置当前房间活着的怪物。不能重置BOSS。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert40() {
    let alert = this.alerCtrl.create({
      title: '用以撒通过宝箱关解锁。',
      subTitle: '重置当前房间的基础掉落。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert41() {
    let alert = this.alerCtrl.create({
      title: '用the lost通关boss rush关卡解锁。',
      subTitle: '重置全身除了D100以外的道具，对于心之容器的增加效果依然保留，重新刷新当前房间的未拾取的道具，但是刷新的道具仍然受到当前房间掉落列表的限制，可以roll商店的道具,重置当前房间的基础掉落,如果已经变成猫则不会消失。使用后D100不会消失。也就是D4，D6，D20的集合体。	宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert42() {
    let alert = this.alerCtrl.create({
      title: '通关大教堂之之后，一局游戏炸毁两次天使房雕像，击败堕天使boss凑齐一把完整的钥匙解锁。',
      subTitle: '打开当前房间周围的门，可以打开隐藏房间、超级隐藏房间、商店、宝物房和宝箱关/黑暗层的金色大门，双重锁链门会减少一道锁。不能打开恶魔房或者天使房的大门。在挑战房的挑战开始后无法打开挑战房的大门。宝物房道具，钥匙乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert43() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '激随机产生一个主动道具的效果。（恶魔之书，死灵书，暗影之书，罪恶之书，启示录，无政府主义者的菜谱，妈妈的胸罩，妈妈的卫生巾，妈妈的药瓶，炸弹先生，塔米猫的头，神风特攻队（不消耗能量），鲍勃的腐烂脑袋，传送！，美味的心，论外事故，嗖-哒-呜！，沙漏，我的小独角兽，恶魔钉，我们需要去更深处！，一副卡牌，Monstro的牙齿，游戏掌机，锯齿剪）宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert44() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '随机掉落一张塔罗牌。宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert45() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在地面上出现一个红色准星（类似于史诗婴儿）可以用用攻击方向键控制。准星出现6秒后或再按下的空格会掉落一个巨大的导弹，对爆炸范围内的敌人造成伤害。宝物房道具。第三只眼会使得掉落的导弹数目增加到3个。突变蜘蛛会使得掉落的导弹数目增加到4个。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert46() {
    let alert = this.alerCtrl.create({
      title: '进入赌博房10次解锁。',
      subTitle: '使用后在5秒内开启吃豆人模式。角色会变成吃豆人，获得加速、无敌，触碰到敌人造成伤害，每杀死两个敌人回复半个红心。你的敌人会变成蓝色并恐惧地逃离你。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert47() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '用一个心之容器换3个魂心。没有红心时无法使用。猫套装之一。转换器配合可以刷心之容器上限或者魂心。力量卡牌给予的心之容器的上限是临时的。恶魔房、诅咒房、红箱子道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert48() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '降低本层房间内敌人和子弹飞行速度7.67秒。	宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert49() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '扣半血，获得随机数额的硬币（通常为1），在子宫层以后，扣血将变成1颗红心。在无敌时间内可以多次使用的bug在重生里面已经修复了。	刷爆献血机有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert50() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在角色所在位置制造一小滩黄色液体，对路过上面的地面敌人造成伤害。双人模式下似乎只有一半的伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert51() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '消消耗1金币对本房间内敌人造成伤害，伤害大小基于角色自身伤害，有几率触发子弹的特殊效果。（让你见识一下土豪的力量！宝物房、商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert52() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '随机给予一个胶囊，Q栏如果有物品则该物品会被丢在地上。宝物房、商店、挑战房道具，普通乞丐和恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert53() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '石化当前房间的敌人大约4秒。	宝物房、挑战房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert54() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在角色所在地方立即引发爆炸，对爆炸半径内的敌人造成伤害，并且对自己造成半颗红心的伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert55() {
    let alert = this.alerCtrl.create({
      title: '首次通关地下室2层解锁。',
      subTitle: '召唤出一个Monstro随机砸在当前房间内的一个敌人头上，有可能波及玩家。。不能攻击Monstro,	但是可以攻击Monstro II. 如果房间内没有敌人则会伤害自己。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert56() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '放置一个大炸弹。伤害以及爆炸范围要大于普通炸弹。宝物房、BOSS RUSH房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert57() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '增加少许移动速度并使玩家5秒内处于无敌状态。这时角色无法发射眼泪但是可以碰撞敌人来造成伤害。在快要结束的时候进入宝箱关会导致整个游戏运行速度加快，所以退出读档吧少年们。（卡牌战车也是一样宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert58() {
    let alert = this.alerCtrl.create({
      title: '用阿萨谢尔通关boss rush解锁。',
      subTitle: '使用后基础伤害+0.7，移动速度-0.18，增加一颗魂心并且使角色拥有破坏石头的能力，对触碰到的敌人造成伤害但是自身也会受到伤害。恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert59() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使角色在当前房间内举着镐子并破坏所触碰到的岩石骷髅等，但是在举着镐子的时候无法攻击和拾取东西。受到伤害后也会解除举着镐子的状态。可以打开隐藏房和超级隐藏房的房间。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert60() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '咔嚓一声剪断你的头，当前房间内，你变成头和身体两部分。头有飞行，由你自己操控。身体会自动寻敌并攻击。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert61() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在角色当前位置产生一坨大便，破坏后有可能掉落硬币或者心。宝物房道具。？？？出生自带。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert62() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '   老虎机相同，用金币有几率换取基础掉落。商店道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert63() {
    let alert = this.alerCtrl.create({
      title: '用夏娃击败撒旦解锁。',
      subTitle: '对自己造成1颗心的伤害，当前房间攻击力+1.2。不会影响无伤成就。恶魔房道具',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert64() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '拿到时给予5颗炸弹，丢出去的炸弹只有在使用引爆器的时候才会爆炸。能提前引爆婴儿博士的炸弹，但是不能延长引爆时间。可以同时引爆很多炸弹。宝物房、商店、BOSS RUSH房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert65() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用后用方向键或鼠标控制，向某个方向发射一道激光。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert66() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '对房间内所有敌人造成伤害，并对敌人以及敌人的子弹造成减速效果。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert67() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '随机传送到本层的一个房间。无法传送进入REEOR房。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert68() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用后移动速度+0.28并且在一段时间内无敌，但是无法发射眼泪并且碰到敌人时也不会对敌人造成伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert69() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '直接制造出一个进入下一层的入口。如果在子宫层中使用，你会进入到地狱层。即使你还没有解锁地狱。1/10的可能性挖出的是通往地下房间的入口而不是进入下一层的入口。隐藏房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert70() {
    let alert = this.alerCtrl.create({
      title: '用以撒击败以撒解锁。',
      subTitle: '使用后向周围八个方向发射眼泪，发射的眼泪同样具有原来眼泪带有的特殊效果。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert71() {
    let alert = this.alerCtrl.create({
      title: '用拉萨路通关黑暗层',
      subTitle: '使用后随机给予一个道具/两个道具/2个基础掉落/20枚硬币/2把钥匙/2个炸弹/2个或者4个魂心/什么都没有。商店、红箱子道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert72() {
    let alert = this.alerCtrl.create({
      title: '死亡100次解锁。',
      subTitle: '使角色头和身体分离，头只能在原地漂浮，身体可操控，头和身体都能发射眼泪但是头发射眼泪的速度比身体慢得多，伤害判定在身体。同一房间内可以存在多个脑袋。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert73() {
    let alert = this.alerCtrl.create({
      title: '用伊甸通关boss rush解锁',
      subTitle: '将角色传送到隐藏房，超级隐藏房，宝物房或者ERROR房。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert74() {
    let alert = this.alerCtrl.create({
      title: '一次游戏中心之容器到达7个解锁。',
      subTitle: '使用后恢复一颗红心。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert76() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在路过的路上漏一滩蓝色的尿，并对走到上面的敌人造成伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert77() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '移动速度+0.25，并且对碰到的敌人造成少量伤害。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert78() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '你的角色变成像章鱼一样的形状，增加3颗蓝心，触碰到敌人会造成毒性伤害。你在受伤之后的一段时间，所有伤害强制变为半颗心的伤害。（即受到一次伤害后获得短时间圣饼效果）。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert79() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，基础伤害+0.5，射速+0.16，移动速度+0.1，射程+0.15，眼泪飞行速度+0.1，增加一块钱一个炸弹一个钥匙。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert80() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '产生一个连体婴儿，连体婴儿会自动攻击进入攻击范围的敌人。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert81() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '你在走过障碍物的时候将会碾碎他们（石头、蘑菇、骷髅、罐子等）切记：碾碎蘑菇有很大的几率出毒雾，血少/药片不好就不要碾了。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert82() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '予6个硬币6个炸弹6把钥匙，平衡数值高和数值低的属性使得他们更接近平均值。以后获得的使得单一属性提升的道具也会因该道具使得提升效果分配到其他属性上（例如获得了原本应该某大幅度增加攻击的道具，效果会变成全属性提升一部分）。适用：攻击，射速，射程，移动速度这四项属性。如果已经获得了例如豆浆这种使得单一属性提升到极端值的道具后再获得该道具会使得其他属性也得到很大提升。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert83() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '移动速度+0.2并且使眼泪具有穿透敌人的效果，眼泪会变成三角形。无法穿透障碍物。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert84() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '恢复所有红心，当玩家受到伤害时有几率会产生一个临时性的护盾。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert85() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射速+0.16，并且使眼泪有几率击退敌人。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert86() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得时移动速度-0.28，当房间内有敌人的时候移动速度会以每秒0.065的速度逐渐增加，当速度增加到2的时候会获得独角兽的效果：无敌并且通过碰撞对敌人造成伤害，持续5秒。如果人物具有较高的基础速度会更快的触发该效果。每个房间只能触发一次。第一次进入没有敌人的房间无法触发这样的效果，例如挑战房和boss rush房。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert87() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射速降低，每次都会发射发光并且带毒的眼泪，每个眼泪必定会使敌人中毒。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert88() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个发射普通眼泪的小跟班。一般出现在宝物房和恶魔房。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert89() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: 'v1.01版本以后吃1.5个红心吐出1个魂心。v1.0版本则是1换1。有可能掉落黑心，邪恶值和罪恶值有关。如果超级隐藏房间是子宫主题血房，它会吃掉所有红心并且在离开超隐之后吐出魂心/黑心，如果角色一直呆在血房里它只会吐出红心。本作最强随从，有了他，相当于你的血量上限变为12。有了他，所有的心之容器都是累赘（如果能用猫爪子的话就全弄掉吧！）有了他，手残通关再无压力！宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert90() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '受到伤害之后会飞出一只鸟去攻击敌人，仅限当前房间。宝物房道具。夏娃出生自带。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert91() {
    let alert = this.alerCtrl.create({
      title: '用阿萨谢尔通关黑暗层解锁。',
      subTitle: '一个恶魔宝宝小跟班，会自动攻击对进入射程的敌人。射速快。宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert92() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个可以抵挡敌人弹幕的小跟班，宝宝受到弹幕攻击的时候有几率触发死灵书的效果。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert93() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个能发射穿透障碍物子弹的小跟班。宝物房、恶魔房道具，通过炸Depths 和Necropolis的骷髅也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert94() {
    let alert = this.alerCtrl.create({
      title: '用抹大拉击败撒旦解锁。',
      subTitle: '产生一个围绕玩家旋转的守护天使，对触碰到的敌人造成伤害，可以抵挡子弹，并且使玩家周围的环绕物的旋转速度变为原来的两倍。天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert95() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个无头小跟班跟在玩家后面漏红色的尿，对路过的敌人造成伤害。	宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert96() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个V字形斜方向发射2个眼泪的小跟班。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert97() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '每次受到伤害的时候产生1-3只蓝苍蝇。苍蝇套之一。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert98() {
    let alert = this.alerCtrl.create({
      title: '击败查德解锁。',
      subTitle: '一个每两个房间掉落半个红心的小跟班。宝物房道具，击败BOSS C·H·A·D也会掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert99() {
    let alert = this.alerCtrl.create({
      title: '首次通关洞穴2层解锁。',
      subTitle: '和玩家眼泪一起飞出去，对碰到的敌人造成伤害，需要一定的冷却时间才能再次发射。如果你的眼泪是斜着发射的，它也会斜着飞出去。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert100() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个会发射硫磺火的小跟班，需要蓄力。宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert101() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个会追逐并恐惧敌人的小跟班。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert102() {
    let alert = this.alerCtrl.create({
      title: '击败史蒂夫解锁。',
      subTitle: '一个发射跟踪眼泪的小跟班。宝物房、BOSS房道具列表。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert103() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '复制一个小跟班的眼泪效果。如果只有蒙戈宝宝一个小跟班，它会发射普通眼泪。获得时有可能会使得所有小跟班消失，进入下一层恢复正常。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert104() {
    let alert = this.alerCtrl.create({
      title: '收集鲍勃的腐烂脑袋，九命猫，塔米猫的头，克里吉特的头中的两件解锁。',
      subTitle: '使玩家的眼泪在碰到敌人和障碍物的时候分裂成两个并在垂直方向发射出去。分裂出去的眼泪如果继续碰到敌人和障碍物还会继续分裂。当然眼泪的体积和伤害依次递减。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert105() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个发射激光的小跟班，类似于科技。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert106() {
    let alert = this.alerCtrl.create({
      title: '完成挑战16解锁。',
      subTitle: '一个可以用攻击键控制移动的机器人宝宝。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert107() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个每隔一段时间释放出一只蓝苍蝇来攻击敌人的小跟班。宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert108() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个发射血泪的小跟班。宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert109() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '替身会随机在房间里走动并且吸引敌人。替身能否被破坏还是未知。出气筒虽然不会攻击和主动靠近敌人，但是可以抵挡弹幕。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert110() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得99个炸弹。宝物房，隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert111() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，恢复所有红心。宝物房、BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert112() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一次发射两个眼泪，但是不会像第三只眼和突变蜘蛛那样降低射速。会被科技覆盖。会被萌死戳的肺覆盖。会被硫磺火覆盖。血块叠加会交替发射高伤眼泪和普通眼泪。悬浮科技叠加会变成一个小眼泪围绕大眼泪旋转。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert113() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '进入房间后随机给予一个特殊的眼泪效果，直到进入下一个房间。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert114() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射程+5，人物受到伤害的时候会在路过的路上漏一滩断断续续的红色的尿直到人物离开当前房间。一段时间后红色的论外会消失。	拉萨路重生后自带。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert115() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射速+0.32。按住攻击键时发射的眼泪会悬浮在原地，直到停止发射眼泪。悬浮在原地的眼泪也能对撞到的敌人造成伤害。一次最多可以悬浮10滴眼泪，如果超过10滴眼泪，它们会自动飞出去。对萌死戳的肺没有影响。硫磺火叠加会在原地留下一个的硫磺火球，体积先变大然后再变小最后由硫磺火的形式发射出去。煤块叠加眼泪会停在原地但是伤害会逐渐增加。科技2叠加玩家的另一只眼睛不能再发射眼泪，不过会略微加强科技2的激光。鲍勃的腐烂脑袋叠加脑袋会在空中悬浮徘徊，按下攻击键会发射出去。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert116() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个绷带球绕着角色旋转，可以挡子弹以及对碰到的敌人造成伤害，肉妹的组成部分。一个绷带球会绕玩家旋转，抵挡弹幕并对碰到的敌人造成伤害。两个绷带球会变成肉妹的头，绕玩家旋转抵挡弹幕并对碰到的敌人造成伤害，同时发射粉红色的眼泪，有几率魅惑敌人。三个绷带球会变成一个小肉妹，发射具有魅惑效果的粉红色眼泪。四个绷带球会变成大肉妹。击败天启骑士后有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert117() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在路过的路上漏一滩黑色的尿，并且对走到上面的敌人造成缓速效果，使人物发射的眼泪有几率混进黑色眼泪，击中敌人后也让敌人缓速。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert118() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '可以使主动道具可以过度充能到原来的两倍。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert119() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '移动速度+0.3。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert120() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '受到伤害之后会召唤出一只   敬而远之（红苍蝇）相似的的苍蝇来攻击敌人。苍蝇套之一。宝物房道具，钥匙乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert121() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '加强小跟班，小跟班体积变大，伤害也有所增加。对于身边的环绕物，爸爸的腿也有明显的体积变大。使得2p玩家能够控制小跟班的射击方向。双子座的连体婴儿的体积和伤害也会提升。会使得BBF的体积增大，爆炸伤害增加。使得使用嗝屁猫的头召唤出的蓝苍蝇数目增加。商店道具，钥匙乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert122() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '生成一个在房间里飞的炸弹苍蝇，碰到敌人就会发生爆炸，并且对范围内的敌人造成伤害，有可能伤害到自己造成1颗红心的伤害。爆炸后消失，10秒之后重新产生一只炸弹苍蝇。苍蝇套之一。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert123() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: 'BigFan是和炸弹苍蝇长得很像的保护型小跟班，围绕人物旋转并且抵挡子弹。不过在碰到敌人时造成的伤害是所有小跟班里面最低的。而且该道具不会被算做三个环绕物之一，也就是获得该道具的玩家最多可以拥有4个环绕物围绕自己旋转。还有就是旋转速度低的令人发指。。。（喂喂喂该减肥了喂，同时还会拉低玩家的移动速度宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert124() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '受到伤害时放屁，对范围内的敌人造成伤害并且使敌人中毒。效果类似于主动道具豆子。宝物房道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert125() {
    let alert = this.alerCtrl.create({
      title: '往存款机存入150元解锁。',
      subTitle: '免疫诅咒，获得时如果当前层有诅咒则立即解除，获得一个黑心，邪恶值提升。对于挑战自带的诅咒无效。对于失忆症药丸造成的效果无效。商店、诅咒房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert126() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予一个心之容器，一个魂心，一个黑心。隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert127() {
    let alert = this.alerCtrl.create({
      title: '使用献血机30次解锁。',
      subTitle: '增加一个心之容器，并且恢复5颗红心。通过刷爆献血机获得。和前作不同的是该道具在重生中并不会增加移动速度。只能通过刷爆献血机有几率获得。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert128() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+1，射程+5。发射的第二滴眼泪会变成红色眼泪，会造成更大的伤害。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert129() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+1，将玩家的眼泪变为血泪。如果玩家处于恶魔之书(Book Of Belial)或者XV 恶魔(TheDevil)卡牌的效果中，最终伤害*1.5，退出增益效果后伤害修正消失。一般出现在宝物房，   前作不同的是重生中该道具不作为天使房道具出现。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert130() {
    let alert = this.alerCtrl.create({
      title: '用参孙击败以撒解锁。',
      subTitle: '射程变得很远但是伤害很低，受到伤害时，射程下降伤害增加，本层持续有效。最多叠加6次，基础伤害总共+6.5，每次叠加分别增加0.5，0.5，0.5，1.66，1.66，1.66。随着伤害叠加人物颜色会逐渐变红。参孙出生自带道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert131() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，射速+0.7，眼泪飞行速度-0.16。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert132() {
    let alert = this.alerCtrl.create({
      title: '往存款机存入10元解锁。',
      subTitle: '在地图上显示隐藏房间和超级隐藏房间。商店道具，普通乞丐和钥匙乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert133() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '会向角色发射眼泪的方向瞄准敌人飞出，可以飞过岩石和沟壑，如果击中敌人就会像鲍勃的脑袋一样发生爆炸，有可能伤到自己并造成1颗红心的伤害。撞到墙上会返回到角色身边。爆炸后一段时间会重新生成一个。不过经常打不到移动的敌人。宝物房，金箱子道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert134() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪击中敌人时有几率使敌人中毒2.5秒。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert135() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予5个炸弹并且炸弹爆炸时带有中毒效果。宝物房，BOSS RUSH房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert136() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予5个炸弹，并且放置的炸弹会自动靠近最近的敌人。宝物房、BOSS RUSH房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert137() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '你每捡起一个炸弹，将会获得两个！Bogo是营销用语，意思是Buy one get one（买一送一）',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert138() {
    let alert = this.alerCtrl.create({
      title: '用该隐击败撒旦解锁。',
      subTitle: '一个小袋子跟着角色，每三个房间随机掉落一个炸弹/1+1炸弹/即爆炸弹。宝物房、隐藏房、BOSS RUSH房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert139() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '被动道具。给予10颗炸弹。人物头上会长出一根导火线。宝物房、BOSS RUSH房道具',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert140() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '掉落一个硬币一个钥匙一颗心（有可能是魂心）一个炸弹（有可能是即爆炸弹）一个胶囊一张卡牌一个饰品。BOSS房、挑战房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert141() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1。BOSS房道具，普通乞丐也有几率掉落。道具列表ROLL完之后出现的道具会变成该形式出现以防止游戏崩溃。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert142() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '你的攻击变为一种特殊的蓄能攻击，在短暂的蓄力（按住方向键）之后，松开方向键将会喷出一条穿透性的血柱，伤害直线上的所有敌人。特别地，角色Azazel（阿扎兹尔）开局将带有一个短程的硫磺火，在拾取到普通硫磺火之后置换为长程版本。硫磺火是一个值得大书特书的物品，因为在重生中，它和其他物品有了无尽的配合！巧克力牛奶：硫磺火变得暗淡，但是并不会显著改变其威力和蓄能时间。黑暗物质：硫磺火有一定几率恐惧敌人 婴儿博士：被婴儿博士所覆盖钩型虫：从直线的硫磺火改变为奇怪的折线，显著地增加了硫磺火的宽度吐根：硫磺火带有毒性：有一定几率造成”混乱“效果——类似眩晕 妈妈的眼影：将硫磺火变为粉色 萌死戳的肺：萌死戳的肺被完全覆盖 占卜板：将硫磺火变为透明 蜘蛛之咬：硫磺火造成减速效果，颜色变为浅粉色 S型虫：硫磺火将会波形扭曲地射出 寄生虫：并没有影响反重力眼泪：先在原地造成一个血色漩涡，漩涡扩大并造成伤害，然后缩小并射出硫火。阿扎兹尔使用本装备后将会很难击中敌人，所以并不推荐。天眼：同时射出3发硫磺火，同时极大地增加蓄力时间。鲁多维科科技，或称科技3：硫磺火变成一个可操作的血色圆圈。妈妈的眼：有几率在背后也射出硫磺火 妈刀：硫磺火变成妈刀的洪流，向四面八方射出。可以几乎不蓄力射出，这样会首先飞出1把妈刀，然后再飞出一堆妈刀。四眼：硫磺火变为4道，极大地增加伤害和蓄力时间。尿液：极大地减少蓄力时间，同时将硫磺火变为黄色大眼：显著地增加伤害和蓄力时间 圣心：增加伤害，给予导向追踪效果，但是Azazel的短途硫磺火并不会附加追踪。弯曲的勺子：将硫磺火变为紫色，并呈弯曲状追踪敌人。，但是Azazel的短途硫磺火并不会附加追踪。白猫头：激活之后，向四面八方射出硫磺火！（毁天灭地硫磺火扫场攻击！清不了场我叫你爸爸！）	小小星球：激光将会在角色身边环绕一圈然后射出时间变短。	Azazel的短程硫磺火小小星球   短程硫磺火科技3硫磺火——圆圈可控制小小星球+S型虫+硫磺火',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert143() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '进入房间时有小几率使所有敌人被缓速，有更小的几率使得全体加速。BGM也会随着游戏加速或者减速，不要误以为是自己的游戏出了问题。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert144() {
    let alert = this.alerCtrl.create({
      title: '解锁抹大拉时解锁。',
      subTitle: '给给予两个空的心之容器，恢复半个红心，移动速度-0.2。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert145() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '产生一个小乞丐跟着玩家，会自动捡钱并且私吞，拾取一定数量的硬币之后会产生一个基础掉落或者胶囊、塔罗牌或饰品。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert146() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予玩家5颗炸弹，放置的炸弹的形状变成便便，爆炸后释放毒雾对全房间敌人造成一定伤害并使得全体敌人短暂进入混乱状态。宝物房、BOSS RUSH房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert147() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '移动速度+0.3，减小角色体积，并且给予一个随机药丸。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert148() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个在房间内随机移动的眼睛并且会和角色发射相同方向的眼泪。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert149() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家的蓝苍蝇和蓝蜘蛛体积变大，伤害增加。苍蝇套之一。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert150() {
    let alert = this.alerCtrl.create({
      title: '用？？？通关boss rush关卡',
      subTitle: '一个可以用攻击键控制飞行的苍蝇，碰到敌人会对敌人造成伤害，伤害不高但是伤害频率很高，类似于科技2。操作方法   悬浮科技类似。苍蝇套之一。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert151() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '拾取后有一个小绿蘑菇跟着玩家。给予一次额外的生命，死亡时在上一个房间满状态复活并且失去1up。隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert152() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用主动道具时会残留一格能量。可以   饰品AAA电池的效果叠加，因为AAA电池使得主动道具最后2格充能只需清理一个房间就能一次充满，而9伏特是减少一格使用主动道具时消耗的能量。会使得道具锋利的插头失效，因为该道具会使得道具始终至少残留一格能量。只有一格充能的道具，当房间里有敌人的时候，使用后将缓慢充能。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert153() {
    let alert = this.alerCtrl.create({
      title: '用阿萨谢尔通关宝箱关解锁。',
      subTitle: '基础伤害+1.5、基础速度+0.2以及提升邪恶值，并且眼泪有几率使敌人恐惧。移除所有心之容器同时给予6颗黑心。不会移除？？？的魂心。恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert154() {
    let alert = this.alerCtrl.create({
      title: '用该隐通关黑暗层解锁。',
      subTitle: '这个随从会   你作完全相反的运动，射出方向相反的眼泪。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert155() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '角色死亡的时候将以？？？的形式复活。复活后拥有3颗魂心。以？？？复活后可以解锁   ？？？相关的成就。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert156() {
    let alert = this.alerCtrl.create({
      title: '用the lost击败？？？解锁。',
      subTitle: '心之容器+3。使得玩家拥有一对健♂壮的麒♂麟♂臂。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert157() {
    let alert = this.alerCtrl.create({
      title: '用the lost击败撒旦解锁。',
      subTitle: '永久显示所有层地图。但是诅咒效果依然对其有影响。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert158() {
    let alert = this.alerCtrl.create({
      title: '用the lost通关黑暗层解锁。',
      subTitle: '增加2颗魂心。使玩家获得一个蓝色的脉冲光圈，可以排斥飞行以及地面上的敌人，还能排斥敌人的弹幕，当角色保持原地静止的时候能够在大多数情况下不被敌人的弹幕击中。但是由于能排斥地面的敌人，所以玩家会受到更强的击退效果。秒表叠加能够使弹幕更容易受到排斥而偏转。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert159() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+0.1，眼泪飞行速度+0.23。只会出现在BOSS房。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert160() {
    let alert = this.alerCtrl.create({
      title: '用抹大拉通关宝箱关解锁。',
      subTitle: '受到伤害时有20%的概率生成一个AT立场，7秒以内无敌。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert161() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予3个黑心并且提升罪恶值（sin值）。并且在接下来的游戏中每进入下一层增加1基础伤害，虽然英文说是持续到这轮游戏结束，但是我测试之后发现游戏后期这种增加在面板上难以体现，或许和以撒非线性的攻击收益有关。总之是个好东西就对了，拿拿拿。恶魔房，诅咒房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert162() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+1，增加精英怪出现的几率从5%提高到20%。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert163() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '每杀死13个敌人恢复半颗红心。可以通过清理房间直到仅剩一个敌人的时候退出保存，然后读档反复刷的方法来刷满红心。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert164() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '左眼发射的眼泪变成红色并且基础伤害+2，右眼依然发射正常伤害的普通眼泪。该隐(Cain)因为只有一只眼睛，所以发射的子弹有50%概率基础伤害+2，有可能连续发射提升伤害的眼泪。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert165() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '按住可以蓄力，使眼泪的伤害增加并且体积变大。如果已经有了像第三只眼这种限制玩家射速的道具则不会起作用。按攻击键按的够快的话会以更快的速度发射正常伤害的眼泪。宝物房道具。可以改变硫磺火的颜色，增加硫磺火的伤害，但是似乎对于蓄力时间没有影响。能够大大增加萌死戳的肺的伤害。可以大幅增加独眼巨人的伤害，但是蓄力时间似乎不受影响。科技会覆盖巧克力牛奶但是科技的伤害会明显降低。诅咒之眼叠加会发射出一个完整蓄力的大眼泪后面跟着3个未蓄力的小眼泪。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert166() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '显示本层的特殊房间，但是不会显示隐藏房间，超级隐藏房间和普通房间。但是能够显示出隐藏房间内有小贪婪或者超级贪婪的存在。配合藏宝图可以显示本层除了超级隐藏房间的所有房间。受到黑暗诅咒时无效。商店道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert167() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '极大的提升清理房间后掉落箱子的概率，同时会产生两个掉落。同时会大幅度提升BOSS房称为“Double Trouble”房的可能性，也就是一个房间内出现两个BOSS。恶魔房、诅咒房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert168() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础射速+0.16，射程-10，并且眼泪落地或者击中敌人之后会分裂成四个很小的眼泪溅射开来，小眼泪的射程伤害飞行速度等受人物基础属性的影响。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert169() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+0.5，最终伤害x1.5。并且使眼泪体积变大且具有更强的击退效果。一般出现在金色宝箱以及宝物房。前作中该道具名字是马克思的头（Max’s Head），重生改名为克里吉特的头。克里吉特是作者家的宠物狗的名字。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert170() {
    let alert = this.alerCtrl.create({
      title: '首次击败妈腿解锁。',
      subTitle: '同绷带球，可以进化成为肉哥。一阶段的肉块可以抵挡弹幕并且对碰到的敌人造成7点伤害。二阶段能够发射眼泪。第三阶段会变成小肉哥，主动去攻击敌人。第四阶段会变成大肉哥，伤害增强。不过肉哥智商堪忧。最多能有3个环绕物，如果已经有了3个环绕物，拾取肉块的时候会替代其中一个。只有天启BOSS掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert171() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使眼泪具有穿透敌人的效果，但是眼泪失去击退能力。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert172() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '你的攻击变成蓄力4连发。你受到伤害的时候，有几率被传送出房间！！！注：只会在【蓄力】的时候被传送走，不在蓄力状态受到伤害不会被传。注2：只会在被【敌人】伤害到的时候才会传送，比如被自己的炸弹炸到就不会传走。注3：奇怪的是，如果你捡到诅咒之眼之后捡到了【吐根】，吐根似乎会无效。注3：这个小小的眼球可以说是【最烂物品】没有之一，拿到基本就是本局已废的节奏。注4：你问为什么？除非你是大触手，打Boss无伤，不然打两下就传走，你受得了？',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert173() {
    let alert = this.alerCtrl.create({
      title: '困难模式下用The Lost通关宝箱关、黑暗层以及boss rush关卡解锁。',
      subTitle: '使人物的眼泪具有跟踪效果，基础伤害+0.5，射速-0.2，射程+1.2，眼泪飞行速度-0.3，同时眼泪会带有一大圈光晕，光晕有伤害判定（多次伤害判定，叠加起来能造成大量伤害），但是只有中心的眼泪具有击退效果。只能天使房获得。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert174() {
    let alert = this.alerCtrl.create({
      title: '对身上携带的胶囊/塔罗牌，饰品，基础掉落等没有影响。隐藏房道具。用拉萨路通关boss rush关卡解锁。',
      subTitle: '每进入一层就会roll身上的被动道具，并且新给予一个本轮游戏没有获得过的道具。对身上携带的胶囊/塔罗牌，饰品，基础掉落等没有影响。隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert175() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '这个物品将会创造出一个爸腿的阴影跟随你，并攻击房间里的敌人。爸腿砸下的延时1秒，再充能时间4秒。优先攻击Boss和精英怪，如果没有，则攻击离你最近的敌人。能秒杀绝大部分的小怪，对Boss伤害约为八分之一的血量。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert176() {
    let alert = this.alerCtrl.create({
      title: '击败妈心11次',
      subTitle: '基础伤害增加1.0，眼泪有几率使敌人恐惧。恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert177() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '将心之容器上限强制重置为1，并且有9次复活机会。可以增加心之容器上限，但是再次复活之后会被重置为1。猫套装之一。当拥有12个魂心黑心而没有心之容器的情况下拾取死猫可以使生命上限暂时突破12，但是如果是具有12颗魂心的？？？获得死猫之后魂心数量会变成1。一次游戏可以多次获得九命猫，然后复活次数会叠加。恶魔房、诅咒房、红箱子道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert178() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使眼泪能够穿过障碍物并且获得飞行能力。天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert179() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射程-0.25，眼泪飞行速度-0.4，眼泪失去击退效果，眼泪体积变大，能够穿透敌人和物体。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert180() {
    let alert = this.alerCtrl.create({
      title: '完成挑战17解锁。',
      subTitle: '基础伤害+1.5，射速-0.3，攻击方式由眼泪变成镰刀并且能够穿透敌人，眼泪变成镰刀也意味着变相的增大了眼泪的体积。宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert181() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1。BOSS房道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert182() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1。BOSS房道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert183() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个红色苍蝇以中距离围绕你旋转并对敌人造成伤害。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert184() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予99块钱，刷爆老虎机有几率掉落，一次游戏可以多次获得。只能通过刷爆老虎机出现。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert185() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '你的攻击变为吐出子弹，以下物品有交互效果：1、Inner Eye：第三只眼。你吐出的子弹变为3颗。攻速减慢。2、Ipecac：吐根。你不会因为自己的子弹而受伤，增加伤害，增加毒素效果3、Sacred Heart：圣心。你的炸弹变为跟踪炸弹。4、Soy milk：豆奶。你射出多枚炸弹。重生版本的婴儿博士丢出去的炸弹要比正常放置的炸弹伤害低，但是受角色的攻击、射程、射速、伤害修正以及道具的影响。也就是会受到各种炸弹道具的加成，但是不受便便炸弹、伤心炸弹和燃烧炸弹的加成，不知道是不是bug。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert186() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '摸到玩家的敌人会变成一坨翔。对BOSS Pepper的窥视者眼睛同样有效。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert187() {
    let alert = this.alerCtrl.create({
      title: '完成挑战19解锁。',
      subTitle: '攻击方式变成导弹。博士的遥控器相同。按下攻击键后脚下出现一个红色准星，通过攻击键来移动准星，几秒后落下一个导弹。有可能炸到自己。宝物房，隐藏房道具。第三只眼叠加会一次迅速落下3颗导弹。突变蜘蛛叠加会一次迅速落下4颗导弹。洛基的角叠加有几率向四个方向发射导弹，但是只有从角色正面发射出去的准星可以控制。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert188() {
    let alert = this.alerCtrl.create({
      title: '用夏娃通关boss rush解锁。',
      subTitle: '最终伤害x2，射速减半（延迟x2），眼泪飞行速度-0.5，有可能使眼泪飞行速度降低到最低飞行速度以下。而且射速减半是在射速计算公式最后x1/2，也就是即使获得了增加射速的道具最终射速也只有一半，除非获得了豆浆或者萌死戳的肺这些道具。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert189() {
    let alert = this.alerCtrl.create({
      title: '击败妈心7次解锁。',
      subTitle: '随机分配人物的全部属性，并且各项属性的总和相比分配前有所增加。该分配对心之容器的数量也有可能有影响。并不是每项属性都比之前有所提升，而是能力值的平均值要高于以前的平均值。细分到每个属性的话则是有的提升有的降低。宝物房、BOSS房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert190() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '血量减少一颗完整的心的时候会随机掉落基础掉落。商店道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert191() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家获得飞行能力并且获得一个永恒之心。金色宝箱道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert192() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '有一定几率会爆炸，有可能炸伤玩家自己，爆炸后留下火焰持续大概15秒，敌人碰到火焰也会受到伤害。有一定几率造成攻击对象进入燃烧状态。萌死戳的肺叠加，蓄力后发射的眼泪落地后会造成大范围爆炸并且在地上留下一堆火。硫磺火叠加会增加燃烧伤害但是不会造成爆炸。吐根、史诗婴儿叠加会在眼泪/导弹爆炸之后留下火焰。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert193() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '产生一个蓝色的苍蝇围着玩家转，对碰到的敌人造成伤害，伤害比红苍蝇要低。苍蝇套之一。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert194() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '受到伤害的时候有15%的概率掉落一个魂心或者黑心。宝物房、恶魔房、诅咒房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert195() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '角色会长出浣熊尾巴，站在原地不动并且停止射击1秒后变成石像并且进入无敌状态，但是仇恨依然在，怪物仍然会攻击玩家只是无法造成伤害。宝物房道具。配合双子座，爸爸的长腿，玩家周围的环绕物可以站着撸。配合点石成金有奇效。石像状态下使用主动道具血之权利不会打破无敌状态。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert196() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '三个：①防止任何来源于正上方的伤害（比如说一个跳跳怪物蹦到你头上，但是无法防止来自爆炸物、妈腿、妈手的伤害）②每踩扁15条蛆，回复半格红心。（就是那些在地上蠕动的白色条状物）③每层必定出天使或者恶魔房间，即使是在第一层。恶魔房、诅咒房、红箱子、金箱子道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert197() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+1，移动速度+0.4。BOSS房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert198() {
    let alert = this.alerCtrl.create({
      title: '用犹大击败以撒解锁。',
      subTitle: '基础伤害+1，射速+0.16，使玩家的头离开身体并且围绕身体漂浮旋转，且头也具有类似肉块/绷带球等环绕物抵挡弹幕的效果。获得妈刀的话，妈刀是从身体发射出来而不是从头部发射出来。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert199() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '50%的概率死后半血复活。使用后不会像1up一样消失，而是可以多次使用。重生中新加入的猫套装组件之一。恶魔房、诅咒房、红箱子道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert200() {
    let alert = this.alerCtrl.create({
      title: '收集猫套中的3件变成猫解锁。',
      subTitle: '一个跟着玩家的毛团，通过行走的惯性甩出去攻击敌人，消灭敌人后毛团体积会变大，当然伤害也会随着体积变大而增高。重生中毛球也被加入作为猫套的部分之一。恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert201() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '极大提升清理房间后出现金箱子和普通箱子的概率，同时会降低清理房间后出现钥匙和炸弹的概率。猫套装之一。恶魔房、诅咒房、红箱子道具。钥匙终结者。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert202() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '受到伤害的时候给主动道具充能清理完一个房间增加的能量。如果主动道具是启示录相当于在一定程度上减少每次所受到的伤害。商店、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert203() {
    let alert = this.alerCtrl.create({
      title: '用圣经杀死妈腿解锁。',
      subTitle: '心之容器+1，基础伤害+0.3，基础射速+0.2，射程+0.25，移动速度+0.3。宝物房、BOSS房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert204() {
    let alert = this.alerCtrl.create({
      title: '在身边有3个环绕物的情况下通关游戏。',
      subTitle: '产生2只小苍蝇围着玩家旋转，可以抵挡子弹，对碰到的敌人能造成伤害。最多能有三只苍蝇围绕玩家旋转。苍蝇套之一。一般出现在宝物房，钥匙乞丐也有几率掉落该道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert205() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '增加一个空的容器并获得飞行的效果。天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert206() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使进入每个房间受到的第一次伤害无效化。可以凭借该道具无伤进♂出诅咒房。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert207() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '玩家受到伤害的时候瓶子会被打碎，里面会漏出蓝色的尿，对路过上面不会飞的敌人造成伤害。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert208() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '炸弹爆炸后会在爆炸点留下一团燃烧的火焰，敌人触碰到火焰会受到伤害, 获得时增加5个炸弹。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert209() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使掉落的红心，钥匙，钱币，炸弹都成对出现。对于使用罪恶之书产生的基础掉落没有加倍效果。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert210() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个棕色或者灰色的面具，有几率免疫弹幕。宝物房、金箱子、隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert211() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '除了被蓝蜘蛛撞死的敌人都会被变成蓝蜘蛛，比如被眼泪打死，被蓝苍蝇打死，被爸爸的腿踩死等各种蠢蠢的死法。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert212() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪变成一次发射3个，但是将射速大幅降低(延迟 = 延迟 * 2.1 + 3)。一般出现在宝物房。硫磺火叠加变成三道硫磺火。婴儿博士以及史诗婴儿叠加一次发射三个炸弹。科技叠加一次发射三道激光。射速不变。妈刀叠加一次扔三把刀，总之就是花式x3。悬浮科技叠加，增加两颗围绕大眼泪旋转的小眼泪。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert213() {
    let alert = this.alerCtrl.create({
      title: '击败妈心6次解锁。',
      subTitle: '发射眼泪变成从嘴里发射带毒的会爆炸的弹丸。在3.5基础伤害上额外增加40爆炸伤害。射速下降（延迟=延迟x2+10）。宝物房道具。硫磺火叠加可以使硫磺火带毒，但是硫磺火不带有爆炸伤害。伤心炸弹叠加爆炸后会向6个方向散射吐根弹幕。橡胶水泥叠加撞到墙上会反弹而不是爆炸。萌死戳的肺叠加会吐出一大波吐根弹幕，而且能分别带有原先眼泪具有的魅惑恐惧眩晕等效果。诅咒之眼叠加，蓄力后吐根会像眼泪一样飞出去，单个发射吐根则是不同的效果。寄生虫叠加，吐根在碰到障碍物的时候会分裂成两个，继续碰到障碍物会继续分裂。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert214() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+0.3，击中敌人有机会使敌人眩晕。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert215() {
    let alert = this.alerCtrl.create({
      title: '用the lost击败以撒解锁。',
      subTitle: '一个悬浮的心脏跟着以撒，使以撒免疫所有伤害，但是如果心脏受到伤害，以撒也会受伤，由于心脏是漂浮的，所以以撒可以免疫来自地面蠕动敌人的伤害和地刺的伤害，并且这个道具可以让以撒无偿使用献血机以及无伤和恶魔乞丐交易。配合圣神斗篷心脏可以承受一击而不受伤害。会替代无头宝宝并且心脏本身会开始滴血。拥有该道具之后无法再使用锋利的插头的效果。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert216() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+0.5，射程+0.25。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert217() {
    let alert = this.alerCtrl.create({
      title: '用犹大通关boss tush关卡解锁。',
      subTitle: '增加额外的一条生命，死后重生为犹大之影，有两个黑心，原先道具保留。犹大之影2基础射速2移动速度1基础射程2眼泪飞行速度1幸运，基础伤害是重生前角色的两倍。宝物房。恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert218() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个小跟班，也会漏一滩白色的尿，对路过的敌人造成缓速的debuff，并且每清理一个房间随机召唤1-2只蓝蜘蛛。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert219() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '通关宝箱关之后的游戏里通过炸毁天使房的雕像打败天使boss获得，另外半个钥匙凑成完整的钥匙用来打开通往BOSS	Mega Satan的门。只能通过击败炸毁天使房天使雕像后出现的堕天使BOSS获得。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert220() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '幸运+1，并且掉落两个钥匙，同时给予一个魂心。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert221() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '自动在宽度为1的沟壑上放置一个梯子使玩家可以通过。宽度大于1的沟壑无法放置梯子。	商店道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert222() {
    let alert = this.alerCtrl.create({
      title: '用拉萨路击败以撒解锁。',
      subTitle: '使得玩家死后可以像拉萨路一样复活。复活后的角色拥有一个心之容器并且带有贫血道具。复活后的角色视作拉萨路而不是原来的角色。如果是角色是阿萨谢尔，重生后将失去短距离硫磺火的能力。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert223() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一个水蛭小跟班，每次杀死敌人的时候能恢复玩家半个红心。恢复红心的效果在没有心之容器的时候无效。对于再生怪这种再生速度比水蛭杀死他们的速度要快的敌人，可以利用水蛭来无限刷红心。宝物房道具。。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert224() {
    let alert = this.alerCtrl.create({
      title: '一次游戏获得两种不同的针类道具解锁。',
      subTitle: '随机给玩家一个药丸，并且增加一个药丸槽，使得身上携带的卡牌/符文变成胶囊。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert225() {
    let alert = this.alerCtrl.create({
      title: '首次击败杰士解锁。',
      subTitle: '一个发射黑色眼泪的小跟班，击中敌人时会对敌人造成缓速效果。射速慢。宝物房道具，击败BOSS Gish也会掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert226() {
    let alert = this.alerCtrl.create({
      title: '击败洛基（分裂型）解锁。',
      subTitle: '有几率向四个方向发射眼泪。几率由人物幸运值决定。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert227() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得飞行能力，基础速度+1。恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert228() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪飞行速度-0.16，每个眼泪带有一个护盾可以抵消一次敌人的子弹。硫磺火叠加会把硫磺火隔断。敌人触碰到护盾并不会受到伤害，只有一段一段的硫磺火本体才能杀死敌人。宝物房、隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert229() {
    let alert = this.alerCtrl.create({
      title: '一次游戏中累计身上有55块钱解锁。',
      subTitle: '幸运+1。降低吃到坏药丸的几率，增加清理完一个房间后出现基础掉落和箱子的几率，增加在骗钱乞丐获得物品的几率，增加从金箱子获得物品的几率。宝物房道具。该隐出生自带。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert230() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '发射一大颗眼泪并且悬浮在空中，可以用攻击键控制眼泪飞行，对碰到的敌人造成伤害。宝物房道具。吐根叠加，眼泪不会爆炸，伤害大大减少。饰品环形虫叠加眼泪会极速的转圈圈。饰品摇摆虫叠加眼泪会变成星形。20/20叠加会变成一个小眼泪围绕大眼泪旋转。煤块叠加，眼泪变成黑色，而且随着离玩家距离的增加眼泪体积会变大。硫磺火叠加变成一个硫磺火环，只有边缘才有伤害。硫磺火+弯勺叠加，硫磺火环会扭曲攻击火环附近的敌人。硫磺火+煤块叠加，火环的半径会随着距离的增加而变大。硫磺火+眼球突出叠加，火环半径会随着距离的增大而变小。暗物质叠加，眼泪会变成一个黑色的流星，并且可以使敌人恐惧。婴儿博士叠加，会发射出一个可以操控的炸弹，直到炸弹爆炸。火之意志叠加，眼泪碰到敌人有几率爆炸，爆炸后在玩家角色身边重新生成一个眼泪。丢失的隐形眼镜叠加，眼泪可以抵消敌人的弹幕。妈刀叠加，大眼泪会被替换成妈刀。弯勺叠加，眼泪会自动攻击附近的敌人。突变蜘蛛叠加，会有3个小眼泪围绕大眼泪旋转。科技2叠加，眼泪正常操控，玩家会向眼泪移动的相反方向发射激光。科技叠加，眼泪变成一个巨大的激光环。感冒叠加，眼泪会闪烁绿色然后有几率使敌人中毒。寄生虫叠加，眼泪在攻击敌人的时候会分裂出2个小眼泪。突出眼球叠加，眼泪离玩家越远体积越小。突变蜘蛛+妈刀叠加 ，会有三把妈刀围绕可以控制的那把妈刀旋转。丘比特的暗箭叠加，眼泪会变成一支箭的形状，如果不控制的话箭头会指向玩家。射手座叠加，眼泪会变成三角形。科技2+弯勺叠加，激光环会扭曲自动攻击激光环附近的敌人。注：如果同时拥有妈刀，悬浮科技和硫磺火，叠加的效果只相当于，妈刀和悬浮科技的叠加。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert231() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪的体积和伤害会随着眼泪飞行距离的时间增加。小小星球叠加会使得眼泪在角色周围的环绕时间变长并造成更大的伤害。科技叠加会使得更远的敌人受到更多的伤害。反重力叠加会使得眼泪的体积和伤害变大，并且眼泪能在空中悬停更长时间。击败坎卜斯有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert232() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1。BOSS房道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert233() {
    let alert = this.alerCtrl.create({
      title: '用抹大拉通关boss rush关卡解锁。',
      subTitle: '血量上限+1，吃到红心的时候恢复双倍的红心数量。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert234() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪飞行速度+0.16并且掉落一个塔罗牌。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert235() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，基础伤害+0.3，最终伤害x1.5，射程+5.25，移动速度+0.3，但是不会增加射速，虽然获得该道具的时候提示的是全属性提升（AllStats Up） 同时恢复全部红心，角色体积增大。宝物房道具，通过Caves/Catacombs中的蘑菇也有可能出现。neta马里奥中的红蘑菇。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert236() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，幸运+1。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert237() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '吸引基础掉落，无视石头沟壑等障碍，但是道具无法通过需要锁才能打开的障碍。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert238() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+1，移动速度+0.2，增加一个魂心。恶魔房、诅咒房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert239() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予一个黑心，掉落3个炸弹。增加邪恶值。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert240() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，基础伤害+0.3。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert241() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '碰到玩家的小怪必定会变成金色并且定在原地，在此状态下被击杀后掉落1-4枚硬币。Boss有几率被金子化而且时间很短。主动道具冲洗！配合能使得房间中的怪物全部变成金色大便   大肠杆菌叠加可以使敌人变成金色大便。在使用暗影之书后等处于无敌状态的时候能够通过触碰敌人把敌人变成金色大便而免受伤害。被咬过的树叶组合，变成无敌状态之后，凡是碰到玩家的敌人都会被秒杀并且变成硬币。在于妈腿战斗的时候射击眼泪有可能金子化妈腿，而且这时候触碰妈腿不会受到伤害。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert242() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '移动速度+0.3，射程-4.25但是眼泪飞行高度+1.5，最后使得实际射程要比一开始要更远。玩家体积变小。宝物房道具，通过Caves/Catacombs中的蘑菇也有可能出现。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert243() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予一颗黑心，提升邪恶值，血量降到1血的时候会发动死灵书的效果。恶魔房，隐藏房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert244() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '掉落的红心替换成魂心的几率提升50%。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert245() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '随机掉落4个胶囊。商店、BOSS房、挑战房道具，普通乞丐、恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert246() {
    let alert = this.alerCtrl.create({
      title: '收集3个妈妈类道具解锁。',
      subTitle: '有几率石化敌人。并不会像前作那样增加射程。宝物房、挑战房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert247() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '让你的攻击有几率同时从脑后射出（即同时向前向后攻击），几率取决于你的幸运值（Luck）',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert248() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使得发射的小部分眼泪变成粉红色并且能魅惑对手。被魅惑的敌人会去攻击其他敌人。宝物房，BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert249() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础射程+5.25。BOSS房、挑战房道具',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert250() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予两把钥匙，额外增加宝箱中的基础掉落。商店、挑战房道具，钥匙乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert251() {
    let alert = this.alerCtrl.create({
      title: '用以撒击败撒旦解锁。',
      subTitle: '不再发射眼泪而是发射一把刀，可通过蓄力来增加刀飞出去的距离，也可以贴身作为近战使用。宝物房、恶魔房、挑战房道具。妈刀会覆盖科技，但是不会覆盖科技2和科技5。克里吉特的身体和第一名会极大降低妈刀射程。洛基的角使得角色有几率向四个方向发射妈刀，几率受人物运气的影响。悬浮科技可以使得妈刀悬浮并可操控。突变蜘蛛将使得一次性发射四把妈刀并造成巨大伤害。圣心会大大提升妈刀伤害并且使得妈刀具有追踪效果。小小星球使得妈刀扔出去后可以围绕角色旋转，旋转半径和蓄力时间有关。眼球突出会极大提升妈刀的伤害而且妈刀体积并不会随着飞行距离而减小。第三只眼能够让玩家一次发射3把刀。吐根叠加会使得妈刀变绿但是并不会带上毒性。注：如果同时拥有妈刀，悬浮科技和硫磺火，叠加的效果只相当于，妈刀和悬浮科技的叠加。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert252() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础射程+5.25。BOSS房、挑战房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert253() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础射速+0.16，并且有15%的概率发射黄色眼泪，黄色眼泪击中敌人会使敌人害怕。宝物房、挑战房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert254() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '增加一个饰品栏。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert255() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础射程+5.25。BOSS房、挑战房道具',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert256() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '不论房间内有没有敌人，按住攻击键随机在1-30秒的间隔内召唤出蓝蜘蛛。一个房间最多存在5只蓝蜘蛛。蜂巢叠加能够使得蓝蜘蛛存在的上限增加到10只，并且使得蓝蜘蛛的体积更大。硫磺火、巧克力牛奶、萌死戳的肺等蓄力方式的攻击能够一次召唤一堆蓝蜘蛛。宝物房、挑战房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert257() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '每一块钱增加0.04基础伤害，99块钱能增加3.96基础伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert258() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '伤害增加。发射眼泪时必须按住攻击键蓄力，然后眼泪会像Monstro一样散射出去。会被硫磺火，妈刀，婴儿博士和史诗婴儿覆盖。第三只眼叠加会延长蓄力时间，貌似不会增加伤害。弯勺叠加会使的命中率降低，略坑。巧克力牛奶叠加会大大增加伤害。独眼巨人叠加会大大的增加伤害，但是蓄力时间会变得更长。如果已有科技，再拾取萌死戳的肺则没有影响。科技2叠加一只眼睛发射激光，一边蓄力。小小星球叠加眼泪会绕玩家飞一圈然后掉在地上。基本不会命中目标。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert259() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得时给予5个炸弹，使得放置的炸弹体积更大，爆炸范围更大，伤害更高。宝物房、BOSS RUSH房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert260() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '击中敌人的时候有几率产生一只蓝苍蝇。苍蝇套之一。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert261() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一次发射4个眼泪，极大的降低射速（延迟=延迟x2.1+3）。宝物房道具。硫磺火叠加可以一次发射四道硫磺火，伤害增加，蓄力时间增加。可以婴儿博士以及史诗婴儿叠加，一次攻击炸弹数量增加到4个。悬浮科技叠加会形成获得3个在轨道上旋转的眼泪。妈刀叠加一次发射4把刀，伤害极大。科技叠加一次发射4道激光。吐根叠加一次丢出4个吐根。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert262() {
    let alert = this.alerCtrl.create({
      title: '解锁妈心进阶时解锁。',
      subTitle: '射程+1.5，眼泪飞行速度+0.6。使得眼泪到达最大距离之后会往回飞一段距离。一般出现在宝物房。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert263() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪中敌人或者物体后会在地上留下一滩绿色的尿，对站在上面的敌人造成伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert264() {
    let alert = this.alerCtrl.create({
      title: '用伊甸通关黑暗层解锁',
      subTitle: '获得后会有一个袋子跟着玩家，每清理完2个房间后掉落一格基础掉落。宝物房，隐藏房道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert265() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础射速+1.5，射程-15.78。眼泪变成黄色。一般出现在宝物房。硫磺火叠加会使硫磺火颜色变成黄色。会降低阿萨谢尔自带的短程硫磺火的射程。妈刀叠加会使妈刀变成黄色而且最大射程显著降低。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert266() {
    let alert = this.alerCtrl.create({
      title: '通关5次地狱后解锁',
      subTitle: '允许玩家进入地狱层之后的黑暗层。如果玩家受到伤害红心减少到半颗则会触发死灵书的效果，对房间敌人造成伤害。解锁后打完妈腿必定掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert267() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，基础伤害+0.3，基础射程+0.25，移动速度-0.1。宝物房、隐藏房道具，通过炸蘑菇也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert268() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射速+1.7，移动速度+0.3，伤害降低（基础伤害x0.9-0.4）宝物房、隐藏房道具，通过炸蘑菇也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert269() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '增加一个空的心之容器。受到伤害的时候有几率掉落红心。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert270() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家的眼泪能够穿透障碍物。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert271() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+0.5，射速——0.7，获得两个魂心。恶魔房、诅咒房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert272() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在玩家周围掉落7个硬币。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert273() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '通关宝箱关之后的游戏里通过炸毁天使房的雕像打败天使boss获得，   另外半个钥匙凑成完整的钥匙用来打开通往BOSSMega Satan的门。只能通过击败炸毁天使房天使雕像后出现的堕天使BOSS获得。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert274() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '路过时自动打开隐藏房间和超级隐藏房间的入口。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert275() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使碰到玩家的敌人中毒，但是不会像前作那样使得中毒的敌人移动速度下降。宝物房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert276() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家获得一个在房间里游荡的眼睛，对碰到的敌人造成伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert277() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+1，增加恶魔房间出现的几率。BOSS房、诅咒房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert278() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '被动道具。不会吃到坏药丸且药丸会显示名称，卖血机掉落更多的钱，获得时恢复2颗红心并且掉落一个胶囊。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert279() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '移动速度+0.3。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert280() {
    let alert = this.alerCtrl.create({
      title: '获得时给予3硬币，每次受到伤害的时候会掉落1个或2个硬币。宝物房、商店道具。',
      subTitle: '小猪银行',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert281() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1。游戏每进行1-5分钟有几率恢复半个红心，对没有心之容器的角色无效（比如阿萨谢尔和？？？）时间似乎是随机的，总之有足够时间挂机就能回满红心。对于房间内是否有敌人没有要求，也不需要换房间。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert282() {
    let alert = this.alerCtrl.create({
      title: '通关5次大教堂解锁。',
      subTitle: '如果玩家受到伤害后血量将低于一个红心的话，就会触发一个类似于暗影之书的护盾使玩家进入无敌状态，持续5秒。触发这个效果并不计算魂心和黑心的数量，所以阿萨谢尔和？？？这样只有魂心或黑心的角色始终能触发。并且使得玩家能在通关大教堂之后进入宝箱关。解锁后击败妈腿必定掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert283() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射出一个巨大的眼泪，伤害增加（最终伤害=2x（基础伤害+4））射速降低（延迟=延迟x2.1+3）如果眼泪杀死了敌人，那么它会减小体积并且继续飞行。宝物法规道具。硫磺火叠加能大大增加硫磺火的伤害，但是会增加硫磺火的蓄力时间。巧克力牛奶能增加硫磺火的伤害但是蓄力时间似乎不受影响。第三只眼/突变蜘蛛叠加一次会发射3/4颗眼泪。塔米猫的头叠加会向十个方向发射巨大的眼泪。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert284() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪一开始具有很高攻击，一段距离后眼泪体积减小伤害降低。配合煤块眼泪的体积不会变化，伤害也不会变化。会增加硫磺火，科技的伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert285() {
    let alert = this.alerCtrl.create({
      title: '击败妈心4次解锁。',
      subTitle: '基础射速+0.7。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert286() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得5个炸弹，玩家受到爆炸伤害时恢复1颗红心。如果是？？？受到爆炸伤害不会回复魂心，但是会使得？？？免疫爆炸伤害。能让玩家免疫妈妈的腿以及撒旦的腿的践踏伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert287() {
    let alert = this.alerCtrl.create({
      title: '击败妈心8次解锁。',
      subTitle: '获得25块钱。很小几率通过炸毁Basement/Cellar的罐子获得。宝物房、隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert288() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '每次随机发射一种子弹的小跟班。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert289() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+2，恢复所有红心。	隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert290() {
    let alert = this.alerCtrl.create({
      title: '用抹大拉击败以撒解锁。',
      subTitle: '每清理5个房间掉落一个魂心。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert291() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '移动速度+0.6，而且   获得道具的提示不同，狂暴针并不会增加射程。宝物房、BOSS房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert292() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得三个魂心，提升信仰值，增加商店出售圣经的几率。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert293() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1。BOSS房、BOSS RUSH房道具。普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert294() {
    let alert = this.alerCtrl.create({
      title: '击败妈心2次解锁。',
      subTitle: '眼泪遇到障碍物可以反弹。对主动道具鲍勃的脑袋同样有效。具有穿透效果的子弹击中敌人的时候会反弹而不是穿过。激光也会反弹。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert295() {
    let alert = this.alerCtrl.create({
      title: '用该隐击败以撒解锁。',
      subTitle: '替每清理2个掉落一个硬币，一般是1分钱，有可能掉落5分镍币。宝物房、隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert296() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得时给予一个魂心并且恢复全部红心，眼泪具有跟踪能力。伤害大幅增加（最终伤害=基础伤害x2.3+1），射速-0.4，眼泪飞行速度-0.25，射程+0.375。可以增加爸爸的腿的伤害。硫磺火叠加会增加硫磺火的伤害并且使得硫磺火能向敌人弯曲。妈刀叠加会增加妈刀的伤害并且使妈刀能够追踪敌人。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert297() {
    let alert = this.alerCtrl.create({
      title: '用夏娃通关宝箱关解锁。',
      subTitle: '一个围绕玩家旋转的匕首，对碰到的敌人造成巨大伤害。可以抵挡弹幕。和暗影之书等无敌类道具配合有很不错的效果。宝物房、恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert298() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得时增加5颗炸弹。炸弹爆炸的时候不但会造成爆炸伤害，还会向8个方向发射眼泪，眼泪适用自己眼泪带有的特殊效果。爆炸产生的眼泪伤害比人物正常发射的眼泪伤害要高。宝物房、BOSS RUSH房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert299() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础射速+0.7。一般出现在宝物房。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert300() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射程+5.25，眼泪飞行速度+0.16，增加一个黑心，提升邪恶值。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert301() {
    let alert = this.alerCtrl.create({
      title: '用参孙通关boss rush关卡',
      subTitle: '略微降低角色的移动速度（对于人物的移动速度的数值并没有影响，但是因为脚镣的重量会略微降低人物的移动速度）。能够抵挡弹幕。类似嗝屁猫的毛球，但是没有惯性，可以对碰到的敌人造成伤害，对空中的敌人也有效。能粉碎碰到的石头骷髅头之类的东西。宝物房、隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert302() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当玩家受到伤害红心降到半个时获得一个魂心，每个房间只能发动一次这个效果。可以利用这个效果反复进♂出房间刷献血机。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert303() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪飞行速度+0.2，射速+0.5。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert304() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '按空格键花费2颗红心使得道具完全充能。如果玩家只有一颗魂心或者黑心，只会花费这一颗魂心/黑心而不会消耗红心。如果拥有圣饼或者触发了巨蟹座效果后只会消耗半颗红心。道具有能量残余的时候该道具无效。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert305() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一只长腿欧巴（其实人家是妹子）在房间内随机移动并且产生蓝蜘蛛攻击敌人。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert306() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '一切苍蝇类型的敌人不再向玩家发射子弹，红色的小苍蝇会在出现后立即变为黑色的无害苍蝇，分裂苍蝇不再分裂，爆炸苍蝇移速下降。苍蝇套之一。只能在骗钱乞丐处通过头骨游戏获得。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert307() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当玩家红心降到半颗的时候发动，不论魂心和黑心的数量。使得玩家在当前房间提升1.5的伤害和0.3的移动速度，如果带着巴比伦娼妇的效果进入加一个房间，伤害加成会降低到1.5，移动速度加成会减少到0.3。夏娃出生自带且只需要在血量降到1颗红心的时候就会发动。恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert308() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予99把钥匙。宝物房、隐藏房道具。（开脑洞神器',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert309() {
    let alert = this.alerCtrl.create({
      title: '摧毁蓝色石头100次解锁。',
      subTitle: '基础伤害+1。重生中不会像前作一样会影响玩家的射速和移动速度。只能通过炸毁宝箱石头获得。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert310() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '玩家受到伤害时，苍蝇会飞出去攻击造成这次伤害的敌人，然后会每次盯着一个敌人攻击直至敌人死亡，效果持续到房间里面的敌人被清理完。苍蝇套之一。宝物房道具，钥匙乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert311() {
    let alert = this.alerCtrl.create({
      title: '完成挑战14解锁。',
      subTitle: '心之容器+1，基础伤害+0.3，射速+0.2，射程+0.5，移动速度+0.2，获得时恢复红心。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert312() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '增加一个心之容器。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert313() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪体积减小伤害减少80%，但是射速变得非常快（延迟/4）-2。宝物房道具。硫磺火叠加，伤害大幅度降低，但是可以瞬发硫磺火。萌死戳的肺叠加，蓄力时间大幅度减少。吐根叠加，发射大量吐根，爆炸范围能够填满半个房间。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert314() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '移动速度+0.3，子弹飞行速度+0.2。宝物房、BOSS房道具，恶魔乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert315() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '经过时在小地图显示隐藏和超级隐藏房间的位置，如果里面有小贪婪或者超级贪婪也会标示出来。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert316() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '击中敌人时有几率使敌人缓速2.5秒。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert317() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '受到伤害时随机召唤出1-2个蓝蜘蛛。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert318() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '获得飞行能力并且子弹能穿透障碍物。恶魔房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert319() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使眼泪能够追踪敌人。一般出现在宝物房。可以使硫磺火自动弯曲攻击弹道附近的敌人，可以使科技、科技2变成可弯曲的激光。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert320() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '增加基础射速+0.4，掉落两个魂心。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert321() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '给予玩家两个卡片槽，胶囊和符文会被卡牌所替代。拥有两张卡牌的时候可以用Ctrl来切换。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert322() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '商店物品半价，无法除尽的四舍五入。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert323() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，恢复半个红心，眼泪飞行速度+0.16。宝物房、BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert324() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础伤害+1。击败Steven有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert325() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，基础伤害+0.3。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert326() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家的眼泪能够吸引基础掉落，箱子和怪物。对硫磺火无效，但是对于硫磺火+反重力是有效的。有可能使得敌人以一种非常奇葩反人类的行动路线移动。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert327() {
    let alert = this.alerCtrl.create({
      title: '往存款机存入999元解锁。',
      subTitle: '每进入一个房间就会永久缓速当前房间内的敌人。但是对自己没有影响。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert328() {
    let alert = this.alerCtrl.create({
      title: '第一次合成肉妹解锁。',
      subTitle: '增加一个心之容器并且给予两个魂心。宝物房、BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert329() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '基础攻击+1，射程+5.25。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert330() {
    let alert = this.alerCtrl.create({
      title: '完成挑战18解锁。',
      subTitle: '给玩家第三只眼睛并且在玩家攻击时随机发射一种激光。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert331() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '攻击方式变成发射无限射程的激光，可以穿透敌人但是无法穿透障碍物，而且没有击退效果。宝物房道具。萌死戳的肺、硫磺火、会覆盖科技。吐根会使得激光带有毒性。克里吉特的身体会大幅增加激光的射速和伤害。巧克力牛奶会使得激光的伤害明显降低。突变蜘蛛会使得玩家一次发射4道激光。弯勺使得激光可以弯曲。圣心能够提升科技的伤害并且使得科技能像弯勺那样弯曲。小煤块能增加激光的伤害。小小星球则会让激光在角色身边围绕之后再继续原来的路径发射出去。橡胶水泥和20/20对科技没有影响。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert332() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家连续发射激光同时还能发射眼泪，激光始终保持最高射速但是最终伤害降低35%。激光也是无限射程，可以穿透敌人但是无法穿透障碍物，而且激光没有击退效果。弯勺叠加可以使激光弯曲。宝物房道具。圣心叠加会使激光能够弯曲并且伤害大幅增加。独眼巨人会大大增加科技2的伤害。萌死戳的肺叠加，按住攻击键会一边发射激光一边蓄力。科技2可以覆盖阿萨谢尔出生自带的短程硫磺火。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert333() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '增大攻击范围，发射的眼泪会围绕玩家旋转直到掉落到地上。饰品钩虫对于弹道没有影响。1.01中获得小小星球之后有可能使得玩家无法清理某些房间。煤块叠加会使得眼泪滞空时间变长并且造成更大的伤害。硫磺火叠加会使硫磺火绕玩家一圈再发射出去，并且会减少硫磺火的蓄力时间。硫磺火+塔米猫的头结合能造成更大范围的伤害。（阿萨谢尔同样）   弯勺结合眼泪会绕玩家飞行但是依然会追踪敌人。科技叠加会使得激光绕玩家一圈之后再发射出去。悬浮科技叠加会造成很奇怪的效果，不控制眼泪的时候眼泪会围绕玩家旋转，控制的时候眼泪的移动路径会有所扭曲。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert334() {
    let alert = this.alerCtrl.create({
      title: '往存款机存入50元解锁。',
      subTitle: '击败boss后会出现两个道具供玩家选择，但是只能拿一个。Bug：如果在获得一个道具的同时使用D6，另一个道具会被roll掉而且可以获得。商店道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert335() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使得玩家受到的所有伤害都降为半心。子宫层以后该道具会很有效。宝物房、天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert336() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '心之容器+1，移动速度-0.4。使玩家具有破坏碰到的岩石、骷髅、蘑菇等可破坏地形物体的能力。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert337() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '+0.7射速，+0.16眼泪飞行速度。BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert338() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '射速+0.7，眼泪飞行速度+0.16。宝物房、BOSS房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert339() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '随机发射牙齿，造成普通眼泪3.2倍的伤害。宝物房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert340() {
    let alert = this.alerCtrl.create({
      title: '击败妈心3次解锁。',
      subTitle: '使玩家身体消失，获得飞行能力。隐藏房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert341() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '显示每层房间分布。会显示普通隐藏房间的位置但是不会显示超级隐藏房间的位置。受到黑暗诅咒时无效。商店道具，普通乞丐也有几率掉落。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert342() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '玩家面前出现一个护盾，可以挡住正面的弹幕以及爆炸伤害。天使房道具。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert343() {
    let alert = this.alerCtrl.create({
      title: '使用???通过黑暗层',
      subTitle: '一个以类似窥视者(ThePeeper)行进路径的方式在房间内游荡的小跟班，发射能够发射穿透障碍物并且跟踪敌人的子弹，造成3.5伤害。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert344() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '主动道具最后2格充能只需清理一个房间就能一次充满。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert345() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '提升清理完房间后得到塔罗牌和开箱子的时候获得塔罗牌的机会。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert346() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '信仰值提升，增加开天使房的几率和获得永恒之心的几率',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert347() {
    let alert = this.alerCtrl.create({
      title: '用夏娃通关黑暗层解锁',
      subTitle: '提升邪恶（Evil）值。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert348() {
    let alert = this.alerCtrl.create({
      title: '用参孙通关宝箱关解锁',
      subTitle: '当拾取硬币时，有1/2的概率掉落半颗红心。结合卖血机或卖血袋（IV Bag）可以有不错的效果。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert349() {
    let alert = this.alerCtrl.create({
      title: '用拉萨路击败撒旦解锁',
      subTitle: '当携带这个道具的时候，死亡后有几率以？？？的形式复活。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert350() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '只会吸钱。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert351() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使用主动道具的时候把角色传送到其他房间。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert352() {
    let alert = this.alerCtrl.create({
      title: '完成挑战13',
      subTitle: '当拾取硬币时，有1/2的概率掉落一颗炸弹。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert353() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '每当拾取一枚硬币时以撒会放屁。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert354() {
    let alert = this.alerCtrl.create({
      title: '用该隐通过宝箱关',
      subTitle: '入每一层时，有25%的几率获得指南针(The Compass)效果。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert355() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '防止任何地面障碍物的伤害（尖刺，姨妈等），献祭房也不会掉血。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert356() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪发射延迟-2，可以超过攻速上限。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert357() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '受到伤害时有几率启动吃豆人模式。效果类似于游戏掌机（The Gamekid）',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert358() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '1/10概率清理完房间给红心，2/3的概率在开箱子的时候给红心。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert359() {
    let alert = this.alerCtrl.create({
      title: '在骗钱乞丐处玩100次头骨游戏',
      subTitle: '在拾取硬币时有50%的几率额外增加1金钱；在打碎金大便(GoldenPoop)的时候有1/3的概率掉落。通过打烂金色大便或者杀死乞丐获得。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert360() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当玩家受伤后生命值降至半颗红心或更低时，将被传送到上一房间；只拥有魂心的人物将在受到任何伤害后被传送。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert361() {
    let alert = this.alerCtrl.create({
      title: '用犹大通关黑暗层解锁',
      subTitle: '最终伤害+2。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert362() {
    let alert = this.alerCtrl.create({
      title: '用夏娃通过大教堂',
      subTitle: '击杀敌人时有1/20几率在当前房间召唤一只死亡之鸟攻击敌人，造成2点伤害，   死鸟(DeadBird)的触发效果类似。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert363() {
    let alert = this.alerCtrl.create({
      title: '用阿萨谢尔击败撒旦',
      subTitle: '极大几率使得非特定的心变成黑心。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert364() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '玩家受到攻击时产生蓝苍蝇，蓝苍蝇对敌人造成玩家的两倍伤害。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert365() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当拾取硬币时，有1/2的概率掉落一把钥匙，也有可能掉落金钥匙。但是不会掉一对钥匙。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert366() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '玩家的眼泪变成椭圆形并且提升击退效果。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert367() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '速度提升0.15，可以超过上限(初始速度为1，上限为2)。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert368() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '眼泪会交替左右移位飞行，射程+10但是由于眼泪的飞行方式使得最后实际射程和获得该道具前差不多，对硫磺火（ imstone）有效。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert369() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '1/10的概率清理房间后恢复半颗红心。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert370() {
    let alert = this.alerCtrl.create({
      title: '用以撒通关boss rush关卡',
      subTitle: '一个发射子弹能穿透敌人的小跟班，造成3.5伤害。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert371() {
    let alert = this.alerCtrl.create({
      title: '用犹大击败撒旦',
      subTitle: '在恶魔房中需要花费2个心之容器换取的物品只花费1个心之容器，需要魂心的物品价格不变，必须在进入恶魔房间之前装备才有效。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert372() {
    let alert = this.alerCtrl.create({
      title: '击杀作者或者使用犹大通关宝箱关',
      subTitle: '把所有的普通宝箱和金色宝箱替换成红色宝箱。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert373() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在进入房间时有25%的几率随机获得一种蘑菇的效果（迷你菇（Mini Mush），奇怪的蘑菇（粗大）（Odd Mushroom(Thin)），奇怪的蘑菇（细小）（Odd Mushroom (Thick)）），离开房间后消失。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert374() {
    let alert = this.alerCtrl.create({
      title: '炸毁商店老板20次',
      subTitle: '幸运+1，清理房间后获得掉落物品的概率提升大约10%，如果有幸运脚只额外提升大约2%。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert375() {
    let alert = this.alerCtrl.create({
      title: '摧毁100个石头',
      subTitle: '破坏石头会掉落钱币。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert376() {
    let alert = this.alerCtrl.create({
      title: '用抹大拉通过黑暗关',
      subTitle: '在每层开始时获得一颗永恒之心。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert377() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '1/10概率清理完房间后得到一个炸弹；2/3的概率开箱子的时候得到一个炸弹。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert378() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在受到伤害的时候有1/20的概率触发效果   死灵之书(The Necronomicon)的效果。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert379() {
    let alert = this.alerCtrl.create({
      title: '用以撒通关黑暗层解锁',
      subTitle: '带着这个道具在献祭房死亡会出现拼图碎片，集齐拼图碎片会告诉玩家关于解锁The Lost的秘密。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert380() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '提升10%魂心替代红心的概率，效果可以   主教之冠(Mitre)叠加。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert381() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '妈妈的脚每隔1分钟会随机踩在房间的一处地方。有可能踩到玩家自己。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert382() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当玩家血量减少到半颗红心的时候会给予1颗黑心当总共触发3次时，猴爪消失。可以在同一房间内连续触发。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert383() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '随机的在玩家所在的地方生成一坨大便。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert384() {
    let alert = this.alerCtrl.create({
      title: '用伊甸通关宝箱关解锁',
      subTitle: '敌人有几率掉落半颗红心。受到伤害的时候有几率触发被动道具全家福或者饰品遗失的书页的效果。带着这个道具在献祭房死亡会出现拼图碎片，集齐拼图碎片会告诉玩家关于解锁TheLost的秘密。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert385() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '极大的提高破坏便便时给予基础掉落的几率。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert386() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '打开金箱子时不需要任何钥匙，喂饱钥匙乞丐时100%掉落。如果喂饱钥匙乞丐时已有回形针，会随机掉落其他道具。对带锁的门无效。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert387() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '1/10概率发射带4点毒伤的眼泪。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert388() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '普通挑战房变成BOSS挑战房的概率提高，精英怪物出现的几率提高。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert389() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '有1/10的几率发射一枚穿透障碍物的子弹，或者一枚穿透敌人的子弹。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert390() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '子弹变得忽大忽小，只有视觉效果。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert391() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当受到伤害时，有1/5概率在当前房间内提升攻击力，每次基础伤害+1.8，类似于剃须刀片(Razor Blade)使用效果。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert392() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '子弹飞行速度极大加快，并绕圈前进',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert393() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '提升信仰值。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert394() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '1/10概率在清理房间后掉落钥匙或者宝箱，2/3概率开箱子掉落一把钥匙。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert395() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '提高清理完房间掉落胶囊的概率，2/3的概率在开箱子的时候掉落胶囊。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert396() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '杀死敌人时，有1/15几率基础伤害+0.5，最多+2.3(最终伤害+3.3)离开房间后效果消失。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert397() {
    let alert = this.alerCtrl.create({
      title: '用拉萨路通关宝箱关',
      subTitle: '获得后在下次进入商店时所有道具变成0元，购买一个物品之后消失，商品恢复原价。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert398() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '每当受到伤害时，掉落1-2枚硬币',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert399() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当进入boss房间时，Boss的血量削减15%，为玩家恢复1颗红心。一旦拾取就无法替换为其他饰品或者丢弃！如果拥有妈妈的钱包（Mom’sPurse）可以同时持有另一个饰品。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert400() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '子弹轨迹变为S形并且提高射速，对硫磺火（ imstone）有效。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert401() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '子弹飞行速度+0.5。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert402() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '当玩家生命值降低至半颗红心或更少时(不计算魂心和永恒之心)，在当前房间内召唤小史蒂夫(LittleSteve)跟班，离开房间后消失。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert403() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '将玩家传送到当前层的起始房间。提示：可用于传出挑战房、妈腿房和诅咒房。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert404() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家的子弹在当前房间具有追踪能力，同弯勺（Spoon Bender）效果和傻瓜心灵感应教程（Telepathy ForDummies）的使用效果类似。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert405() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '召唤妈妈的大脚践踏某个敌人，造成350点伤害。如果当前房间没有敌人，或者在   妈妈战斗，则会践踏玩家本身。踩踏动作能够摧毁岩石或者打开隐藏房间的入口。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert406() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在当前房间，给予玩家类似巴比伦娼妇（Whore Of Babylon）的效果，基础伤害+3.375，并增加0.3移动速度。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert407() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '传送到本层的Boss房，在最后一层使用是最理想的状态。如果在Boss战中使用，会重置战斗，令Boss恢复到满血，但可能改变Boss的颜色和对应技，如果在打完妈妈的脚后使用，可以让玩家离开这个房间。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert408() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '掉落(而非直接给予)两颗魂心。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert409() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '掉落(而非直接给予)两颗红心。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert410() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使玩家无敌180帧(6s)，提升0.28速度，对碰到的敌人造成40点伤害，但持续时间内无法攻击(除非拥有妈刀)。我的小独角兽（MyLittle Unicorn）的使用效果类似。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert411() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '掉落(而非直接给予)一颗炸弹，一把钥匙，一枚硬币和一颗红心，   基础掉落一样，其中的任何一个都可能被同类替代。提示：在子宫主题超级隐藏房必掉红心，或大教堂主题超级隐藏房必掉永恒之心。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert412() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '将玩家传送到该层的商店，这通常可以为你省下一把用于打开商店大门的钥匙。如果该层没有商店，效果等同于一次普通的传送。在子宫层和之后的层使用会随机传送到任意房间，因为没有商店了。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert413() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '生成一台老虎机，或者一台预言机。在超级隐藏房间产生的必定是预言机。提示：如果在Boss房间使用老虎机产生苍蝇，不击杀而直接离开可以重置房间，在普通初始有怪房间（挑战房除外）和街机室（可能将老虎机刷新为占卜机）一样有效。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert414() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在当前房间使玩家基础伤害+0.3，增加1个心之容器(生命上限+1)，射程+1(基础射程+3)，速度+0.3，人物头部变大20%。离开房间后效果消失，但随着心之容器带来的1颗红心的恢复效果会被保留。如果玩家角色为神秘小蓝人(???)，则使用后永久性的给予一颗蓝心。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert415() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在当前房间移除玩家的身体，使之获得飞行能力。如果你已经获得了硫磺火( imstone)，则不会移除身体，而是给予一双翅膀。超凡升天(Transcendence)的效果类似，已经是有飞行能力时无效。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert416() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '对房间内的所有敌人造成60点伤害，和死灵书(TheNecronomicon)使用效果相似，伤害更高。特别适合会召唤小怪的Boss。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert417() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '生成一台献血机。尽可能在其他献血机旁边使用这张卡片，利用碰触一台献血机之后的短暂无敌时间无偿使用其他献血机，来最大化收益。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert418() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在当前房间中使玩家的基础伤害+2，如果有殉难者头环(Blood Of TheMartyr)最终伤害*1.5。效果类似于恶魔之书(The Book Of Belial)。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert419() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '在房间中随机六个位置生成即爆炸弹（每个伤害40，可能伤及自身），   无政府主义者的菜谱(AnarchistCookbook)的效果相同。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert420() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '传送玩家到宝物房(TreasureRoom)，在未打开藏宝室的情况下传送，能够省下一把钥匙。如果本层没有藏宝室，相当于一次普通的随机传送。在受到迷宫之诅咒（Curse ofthe Labyrinth）的影响下，如果有两个藏宝室会随机选择一个进行传送。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert421() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '将玩家传送到隐藏房间(不会传送到超级隐藏房间)，并在房间墙壁上随机打开一个出口，所以没有炸弹的时候也能离开房间。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert422() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '恢复全部红心(不会的对神秘小蓝人(???)或没有心之容器的角色产生效果)、显示本层的地图、标示本层的特殊房间(不显示顶级隐藏房间)、并对当前房间的所有敌人造成100点伤害(比死灵书(TheNecronomicon)伤害更高)。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert423() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '生成一个乞丐(beggar)，也有1/3的概率生成一个恶魔乞丐(DevilBeggar)。恶魔乞丐有1/4的概率（有幸运脚(LuckyFoot)时为1/3）掉落基础物品。乞丐在收取足够金钱后掉落主动或被动道具并离开（8金币之后必掉落物品），离开时留下的主动道具或被动道具取决于乞丐所在的房间的掉落列表，因此尽量尝试在恶魔房间(DevilRoom)或者天使房间(Angel Room)中使用此卡片并最终获取道具。退而求其次，在隐藏房间(SecretRoom)或者诅咒房间(Curse Room)中放下乞丐也是可行的。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert424() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '显示本层的全部地图，并标示所有特殊房间(不包括顶级隐藏房间)。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert425() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '将玩家传送到本层的天使房间(Angel Room)或者恶魔房间(DevilRoom)，离开时回到本层的起始房间。击败Boss后出现的天使/恶魔房间是同一间(即没有新的掉落)，在子宫2层进入只有向下的洞。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert426() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使当前的炸弹数量×2。如果没有炸弹，给予两颗炸弹。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert427() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使当前的钥匙数量×2。如果没有钥匙，给予两把钥匙。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert428() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使当前的金钱数量×2，如果没有金钱，给予2金钱。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert429() {
    let alert = this.alerCtrl.create({
      title: '无条件解锁',
      subTitle: '使当前的红心数量×2，最多恢复至满血。如果只剩余半颗红心，会恢复到2颗红心。整个过程不计算魂心或永恒之心，对???无效。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert430() {
    let alert = this.alerCtrl.create({
      title: '完成挑战7',
      subTitle: '角色立即死亡，掉落一大堆基础掉落并且随机出现一个道具。如果没有复活道具慎用。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert431() {
    let alert = this.alerCtrl.create({
      title: '完成挑战9',
      subTitle: '丢出一张卡片，清理掉飞行路径上的所有可以清理掉的东西（石块，骷髅，小怪，boss等），除了撒旦。也可以用来打开普通房间的门。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert432() {
    let alert = this.alerCtrl.create({
      title: '完成挑战10',
      subTitle: '在商店和恶魔房中使用能够免费捡起一个道具，在商店外使用无效。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert433() {
    let alert = this.alerCtrl.create({
      title: '完成挑战11',
      subTitle: '使用后在屏幕上显示一条随机加密的消息，类似预言机。',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert434() {
    let alert = this.alerCtrl.create({
      title: '完成挑战12',
      subTitle: '将房间内除去人物以及障碍的地方填满大便。',
      buttons: ['OK']
    });
    alert.present();
  }

}
