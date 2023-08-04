import React from 'react';
import buddyForeverLogo from './images/buddyforever.png';
import { Link } from 'react-router-dom';

function BuddyForeverIntro() {
  return (
    <div>
      <img src={buddyForeverLogo} alt="cnbuddy" style={{ width: '200px', height: '150px' }} />
      <h2>buddy-forever是谁</h2>
      <p>@buddy-forever 是@cnbuddy 的附属项目，主要作用就是为了提高cnbuddy大股东的回报。方法就是给所有的股东每天1贴的100%点赞，并且没有期限限制，forever。</p>
      <p>@buddy-forever will give all its stake holders a 100% vote per day, FOREVER.</p>
      <h2>简单规则</h2>
      <li>成为@cnbuddy的大股东，就可以得到@buddy-forever的每天一贴100% VP的点赞。</li>
      <p>Become a @cnbuddy a VIP delegator, will get a 100% vote per day.</p>
      <li>成为@cnbuddy的大股东满100天，就可以终身得到@buddy-forever的每天一贴100% VP的点赞。即使以后不是cnbuddy的股东了，也会有终身的点赞。</li>
      <p>Been a @cnbuddy a VIP delegator for more than 3 month, will get a 100% vote per day, FOREVER. Even if not been a cnbuddy delegator anymore, @buddy-forever will keep voting the user.</p>

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
