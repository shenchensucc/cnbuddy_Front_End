import React from 'react';
import buddyForeverLogo from './images/buddyforever.png';
import { Link } from 'react-router-dom';

function BuddyForeverIntro() {
  return (
    <div>
      <img src={buddyForeverLogo} alt="cnbuddy" style={{ width: '200px', height: '150px' }} />
      <h2>buddy-forever是谁</h2>
      <p>@buddy-forever 是@cnbuddy 的附属项目，主要作用就是为了提高cnbuddy大股东的回报。方法就是给所有的股东每天1贴的100%点赞，并且没有期限限制，forever。另外还提供了代理方案，股东可以收到利息+点赞的回报模式。</p>
      <p>@buddy-forever will give all its stake holders a 100% vote per day, FOREVER.</p>
      <h2>简单规则</h2>
      <li>成为@cnbuddy的大股东，就可以得到@buddy-forever的每天一贴100% VP的点赞。</li>
      <p>Become a @cnbuddy a VIP delegator, will get a 100% vote per day.</p>
      <li>成为@cnbuddy的大股东满100天，就可以终身得到@buddy-forever的每天一贴100% VP的点赞。即使以后不是cnbuddy的股东了，也会有终身的点赞。</li>
      <p>Been a @cnbuddy a VIP delegator for more than 3 month, will get a 100% vote per day, FOREVER. Even if not been a cnbuddy delegator anymore, @buddy-forever will keep voting the user.</p>
      <li>@buddy-forever 提供支付年息10%代理利息，需要私信@shenchensucc来手动确认代理；但是由于目前的代理是从Dlease平台来的，已经提前支付了利息给平台的，所以暂时不能用程序实现。</li>
      <p>虽然@buddy-forever 的代理年息属于各个利息平台里面相对较低的，但是由于buddy-forever的点赞规则和代理并不冲突，所以对于已经是buddy-forever股东的客户，其实是提供了利息+点赞超高回报模式。</p>
      <p>@buddy-forever provide a YTD 10% interest for delegators, but need to message @shenchensucc to manual setup; since some of the delegation is from Dlease platform, so that there hard to code.</p>
      <p>Even @buddy-forever has provide a interest lower than most of the other platform, but since this interest is not conflict with its voting policy, so that the delegator will enjoy both interet + voting 's super high return model.</p>
  
      <h3>cnbuddy项目详情请看 (For more information about cnbuddy):</h3>
      <p>
         <Link to="/">
         cnbuddy 介绍 (Introduction)
         </Link>
      </p>

      <h3>buddy-forever 点赞名单 (Voting list of buddy-forever):</h3>
      <p>
         <Link to="/buddy-forever-voting">
         cnbuddy 介绍 (Introduction)
         </Link>
      </p>
    </div>
  );
}

export default BuddyForeverIntro;
