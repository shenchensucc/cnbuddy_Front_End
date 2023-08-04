import React from 'react';
import cnbuddyLogo from './images/cnbuddy.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <img src={cnbuddyLogo} alt="cnbuddy" style={{ width: '140px', height: '150px'}} />
      <h2>cnbuddy是谁</h2>
      <p>@cnbuddy 是cn区几位志同道合的小伙伴一起在2017年10月创立的一个公共账号，其最初用意是给cn区建立一个最低保障系统，让cn区的小伙伴们可以更多的注重自己的帖子质量而不是过多的注意收益。但是如果要实现这个理想，需要巨量的Steem Power (SP) 来支持，所以前期基本无法实现。</p>
      <h2>回报最高的点赞</h2>
      <p>@cnbuddy 理念的实现方式简单来说就是“用大号的SP来支持新人小号，用不活跃用户的SP来支持活跃用户的”。小机器人一直以来都有各种各样的活动来支持新人，希望新人可以快速融入社区，找到自己的定位。很长时间以来也是大家都熟悉的存在了。另外，cnbuddy的代理2sp 给1%固定点赞，应该仍然是steem里面回报最高的项目，不接受反驳，哈哈。</p>
      <h2>具体规则</h2>
      <ol>
          <li>代理 2-100 SP的小股东，固定点赞力度1%，每天限两贴。这里建议SP相对较少的账号只代理2SP，按照目前 @cnbuddy 的总SP来言，这个点赞力度相当于大约300倍于2SP的点赞，全网回报最高，不接受反驳。</li>
          <p></p>
          <li>代理100-4000* SP的中层股东，点赞力度根据线性公式计算，目前由于许多代理账号不够活跃，所以点赞回报率大概在20倍于代理的SP。简单来说，如果账号A有1000 SP，他全部代理给了 @cnbuddy，那么A发一个帖子得到的点赞力度相当于A不发20个帖子自己点自己。</li>
          <p></p>
          <li>代理 4000* SP以上的大股东，会有一个固定的点赞力度100%点赞，每天仍然限两贴，以此希望大号们多支持 @cnbuddy，把一部分闲散SP拿来获得很高点赞收益的同时，也支持cn区的活跃度。</li>
          <p>这里的 "4000* SP" 是根据cnbuddy的总有效sp量来不断调整的，目前cnbuddy总有效sp为7w+, 加上buddy-forever的4w+有效sp。每贴的点赞大概相当于代理的25倍，那么每贴两贴就是接近50倍自己代理sp的点赞。因此，100%点赞的大股东需要4000SP的代理。</p>
          <li>关于大股东，最初设立大股东的时候由于cnbuddy当时sp不足3w，所以设立了2000SP作为100%点赞。目前cnbuddy做了大股东代理sp调整，为了感谢所有2021年11月之前的大股东支持。所有cnbuddy的现有大股东会得到新项目 @buddy-forever 终身100% 点赞。</li>
          <h3>buddy-forever项目详情:</h3>
          <p>
            <Link to="/buddy-forever-intro">
              buddy-forever 介绍
            </Link>
          </p>

          <h3>cnbuddy 点赞名单 (Voting list of cnbuddy):</h3>
      <p>
         <Link to="/cnbuddy-delegator">
         cnbuddy 代理名单 (Delegator)
         </Link>
      </p>
      </ol>
    </div>
  );
}

export default Home;
