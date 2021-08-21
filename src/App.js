import React, { Component } from "react";
import "./App.css";
import Aside from "./Aside";
import Welcome from "./Welcome";
import List from "./List";
import Show from "./Show";

class App extends Component {
  state = {
    wishes: [
      {
        img: "https://resource01-proxy.ulifestyle.com.hk/res/v3/image/content/2750000/2753326/1234_1024.jpg",
        title: "吃麻辣鍋",
        id: "1",
      },
      {
        img: "https://1.share.photo.xuite.net/kate2008/1143a5d/20399492/1201203673_x.jpg",
        title: "居酒屋吃串燒",
        id: "2",
      },
      {
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/bkyi25bcisjnqb8e7j92/%E5%8F%B0%E6%9D%B1%EF%BD%9C%E8%98%AD%E5%B6%BC%E6%97%85%E9%81%8A%E6%BD%9B%E6%B0%B4%EF%BD%9C%E9%9C%80%E6%BD%9B%E6%B0%B4%E8%AD%89%E7%85%A7.jpg",
        title: "蘭嶼潛水",
        id: "3",
      },
      {
        img: "https://sw.cool3c.com/user/100672/2019/4c9b29ec-0c88-475d-ab96-465e61d731f9.jpg?fit=max&w=1400&q=80",
        title: "聽萬人演唱會",
        id: "4",
      },
    ],
    moreinfo: [
      {
        img: "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_21318/20190219063201_kUakA/jpg",
        title: "北海道吃帝王蟹",
        id: "5",
      },
      {
        img: "https://nadailynews.com/wp-content/uploads/2018/10/man-sues-disney-world-feature-770x511.jpg",
        title: "加州迪士尼",
        id: "6",
      },
      {
        img: "https://dimg06.c-ctrip.com/images/350p0t000000iah618788_C_500_280_Q80.jpg",
        title: "皇后鎮滑雪",
        id: "7",
      },
      {
        img: "https://1.bp.blogspot.com/-v0l8gNGlJQw/XbZM-XDgbcI/AAAAAAAA6qM/t5kcXH0Qie8356ntEjFaCe5GwJdawqYNACLcBGAsYHQ/s1600/aurora.jpg",
        title: "冰島看極光",
        id: "8",
      },
    ],
    textChange: false,
    isShow: false,
    isAside: false,
  };

  h1Click = () => {
    this.setState({
      textChange: !this.state.textChange,
    });
  };

  switchShow = () =>
    this.setState({
      isShow: !this.state.isShow,
    });

  switchAside = () =>
    this.setState({
      isAside: !this.state.isAside,
    });

  render() {
    return (
      <div className="App">
        <Aside switchAside={this.switchAside} isAside={this.state.isAside} />
        <Welcome h1Click={this.h1Click} textChange={this.state.textChange} />
        <List wishes={this.state.wishes} />
        <Show
          moreinfo={this.state.moreinfo}
          switchShow={this.switchShow}
          isShow={this.state.isShow}
        />
      </div>
    );
  }
}

export default App;
