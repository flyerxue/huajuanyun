<template>
    <div class="home">
        <div class="top-bg" ref="top-bg"></div>

        <div class="h-content-box" ref="h-content-box">
            <div class="top-search" ref="top-search">
                <van-search
                    placeholder="搜啥都有优惠券"
                    background="transparent"
                    shape="round"
                    v-model="keywords"
                />
                <van-row>
                    <van-col span="20">
                        <!-- <div class="h-tabs">
                     <span class="h-tab" 
                        :class="{active: tabIndex === index}" 
                        v-for="index in 12" 
                        :key="index"
                        @click="changeTab(index)">
                        {{'标签' + index}}
                    </span>
                        </div>-->
                        <div class="h-tabs-box">
                            <van-tabs
                                background="transparent"
                                :line-height="lineHeight"
                                class="h-tabs-box"
                            >
                                <van-tab
                                    v-for="index in 12"
                                    :key="index"
                                    @click="changeTab(index)"
                                    :title="'标签 ' + index"
                                ></van-tab>
                            </van-tabs>
                        </div>
                    </van-col>
                    <van-col span="4" class="h-tabs-rg van-hairline--left">
                        <span class="h-tabs-rg-text">全部</span>
                    </van-col>
                </van-row>
            </div>
            <div class="h-swipe-box" ref="h-swipe-box">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <div class="swipe-item-box">
                            <img v-lazy="image">
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="many-eyes-box" ref="many-eyes-box">
                <van-swipe>
                    <van-swipe-item v-for="(eyesList, index) in swipeEyesList" :key="index">
                        <div class="many-eyes">
                            <div class="item" v-for="(item, idx) in eyesList" :key="'item' + idx">
                                <img :src="item.icon" alt>
                                <span>{{item.label}}</span>
                            </div>
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>

            <div class="news-box">
                <div class="news-title">
                    <img src="../assets/images/icon-news.png" alt>
                </div>
                <div class="news-content van-hairline--left">
                    言阿言成功出单
                    <span class="red-text">获得1.02元</span>
                </div>
            </div>

            <div class="hot-goods-box">
                <div class="hot-title">
                    <div class="van-hairline--left">
                        <span class="hot-title-text">爆款商品</span>
                        <span class="hot-title-tips">每日实时更新</span>
                    </div>
                    <div class="more-btn">更多></div>
                </div>
                <div class="hot-content">
                    <div class="item">
                        <div class="item-img">
                            <img src="../assets/images/img.png" alt>
                        </div>
                        <div class="item-title">方头包头低跟百搭粗跟外穿夏季半拖</div>
                        <div class="item-price">
                            <div class="item-price-coupon">
                                <span class="small-name-10">券后</span>
                                <span class="price-unit small-name-8">¥</span>
                                <span class="coupon-price">89</span>
                            </div>
                            <div class="saled-count">
                                <span class="small-name-10 text-rg">已售1289</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-img">
                            <img src="../assets/images/img.png" alt>
                        </div>
                        <div class="item-title">方头包头低跟百搭粗跟外穿夏季半拖</div>
                        <div class="item-price">
                            <div class="item-price-coupon">
                                <span class="small-name-10">券后</span>
                                <span class="price-unit small-name-8">¥</span>
                                <span class="coupon-price">89</span>
                            </div>
                            <div class="saled-count">
                                <span class="small-name-10 text-rg">已售1289</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-img">
                            <img src="../assets/images/img.png" alt>
                        </div>
                        <div class="item-title">方头包头低跟百搭粗跟外穿夏季半拖</div>
                        <div class="item-price">
                            <div class="item-price-coupon">
                                <span class="small-name-10">券后</span>
                                <span class="price-unit small-name-8">¥</span>
                                <span class="coupon-price">89</span>
                            </div>
                            <div class="saled-count">
                                <span class="small-name-10 text-rg">已售1289</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="h-classify">
                <div
                    class="h-title"
                    v-for="(item, index) in classifyArray"
                    :class="{active: classifyIndex === index}"
                    @click="changeClassify(index)"
                    :key="index"
                >
                    <div class="h-title-name">{{item.name}}</div>
                    <div class="h-title-desc small-name-10">{{item.desc}}</div>
                </div>
            </div>

            <van-tabs
                :line-height="lineHeight"
                class="h-classify-tabs-box"
                @click="changeClassifyTab"
            >
                <van-tab v-for="(item, index) in tabArray" :key="index" :title="item">
                    <div slot="title">
                        {{item}}
                        <div class="arrow" v-if="item == '价格' || item == '佣金'">
                            <van-icon
                                size="10"
                                name="play"
                                class="arrow1"
                                :class="{red: !isUp && activeIndex === index}"
                            />
                            <van-icon
                                size="10"
                                name="play"
                                class="arrow2"
                                :class="{red: isUp && activeIndex === index}"
                            />
                        </div>
                    </div>
                </van-tab>
            </van-tabs>

            <div class="goods-box hot-content">
                <div class="item" v-for="index in 6" :key="index">
                    <div class="item-img">
                        <img src="../assets/images/img.png" alt>
                    </div>
                    <div class="item-title">方头包头低跟百搭粗跟外穿夏季半拖</div>
                    <div class="item-price">
                        <div class="item-price-coupon">
                            <span class="small-name-10">券后</span>
                            <span class="price-unit small-name-8">¥</span>
                            <span class="coupon-price">89</span>
                        </div>
                        <div class="saled-count">
                            <span class="small-name-10 text-rg">已售1289</span>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <div class="coupon-tag">
                            <span class="coupon-tag-text">券</span>
                            <span class="coupon-tag-price">10</span>
                            <span class="circle circle-lf"></span>
                            <span class="circle circle-rg"></span>
                        </div>
                        <div class="update-tips">
                            <div class="update-icon">
                                <img src="../assets/images/icon-upgrade.png" alt>
                            </div>
                            <span>升级可赚1.66元</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Search, Tabs, Tab, Row, Col, Swipe, SwipeItem, Icon } from "vant";
import logo from "../assets/images/1.png";

export default {
    components: {
        [Search.name]: Search,
        [Tabs.name]: Tabs,
        [Tab.name]: Tab,
        [Row.name]: Row,
        [Col.name]: Col,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Icon.name]: Icon
    },
    data() {
        return {
            keywords: null,
            tabIndex: 1,
            images: [
                "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
                "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
                "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
            ],
            lineHeight: 0,
            swipeHeight: 110,
            eyesArray: [
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                },
                {
                    icon: logo,
                    label: "1"
                }
            ],
            swipeEyesList: [],
            classifyArray: [
                {
                    name: "淘宝",
                    desc: "全球好货"
                },
                {
                    name: "京东",
                    desc: "大牌正品"
                },
                {
                    name: "拼多多",
                    desc: "超值好货"
                }
            ],
            classifyIndex: 0,
            tabArray: ["默认", "销量", "价格", "佣金"],
            activeIndex: 0,
            isUp: false
        };
    },
    created() {},
    mounted() {
        let searchHeight = this.$refs["top-search"].offsetHeight;
        let swipeHeight = this.$refs["h-swipe-box"].offsetHeight;
        this.$refs["top-bg"].style.height =
            searchHeight + swipeHeight * 0.6 + "px";
        this.$refs["many-eyes-box"].style.marginTop =
            -(swipeHeight * 0.4 + 10) + "px";
        this.$refs["many-eyes-box"].style.paddingTop =
            swipeHeight * 0.4 + 20 + "px";

        const result = Array.apply(null, {
            length: Math.ceil(this.eyesArray.length / 10)
        }).map((x, i) => {
            return this.eyesArray.slice(i * 10, (i + 1) * 10);
        });
        this.swipeEyesList = result;
    },
    methods: {
        changeTab(index) {
            this.tabIndex = index;
        },
        changeClassify(index) {
            this.classifyIndex = index;
        },
        changeClassifyTab(index) {
            // console.log(title)
            if (this.activeIndex === index) {
                this.isUp = !this.isUp;
            } else {
                this.isUp = true;
            }
            this.activeIndex = index;
        }
    }
};
</script>

<style lang="less">
.home {
    position: relative;
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #fff;
    }
    input:-moz-placeholder,
    textarea:-moz-placeholder {
        color: #fff;
    }
    input::-moz-placeholder,
    textarea::-moz-placeholder {
        color: #fff;
    }
    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #fff;
    }
    .text-rg {
        text-align: right;
    }
    .red {
        color: #f32e17;
    }
    .van-icon-search {
        color: #fff;
    }
    .van-hairline--top-bottom::after {
        border-width: 0;
    }
    .van-tabs__line {
        background-color: #fff;
    }
    .h-tabs {
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        width: auto;
        margin: 0 10px;
    }
    .h-tab {
        display: inline-block;
        color: #fff;
        font-size: 14px;
        margin: 0 5px;
    }
    .h-tabs-rg {
        text-align: center;
        line-height: 24px;
    }
    .h-tabs-rg-text {
        color: #fff;
        font-size: 14px;
        display: inherit;
    }
    .van-hairline--left::after {
        top: -24%;
        bottom: -24%;
    }
    .h-tabs-box {
        margin: 0 5px;
        .van-tabs--line {
            padding-top: 0;
            &.van-tabs {
                height: 24px;
            }
            .van-tabs__wrap {
                height: 24px;
            }
        }
        .van-tab {
            line-height: 24px;
            span {
                color: #fff;
            }
        }
        .van-tab.van-tab--active {
            display: block;
            display: inline-block;
            background: #fff;
            border-radius: 12px;
            span {
                color: #d34b36;
            }
        }
    }
    .top-bg {
        background-color: #d34b36;
    }
    .top-search {
        top: 0;
        left: 0;
        right: 0;
        .van-search__content {
            background: rgba(0, 0, 0, 0.2);
        }
    }
    .h-content-box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .h-swipe-box {
        margin-top: 10px;
    }
    .swipe-item-box {
        width: 94%;
        height: 100%;
        margin: 0 auto;
        border-radius: 8px;
        overflow: hidden;
    }
    .h-swipe-box .van-swipe {
        height: 110px;
        img {
            width: 100%;
            height: 100%;
            display: block;
            box-sizing: border-box;
            background-color: #fff;
            pointer-events: none;
            object-fit: cover;
        }
    }
    .many-eyes-box {
        background: #fff;
        .van-swipe-item {
            padding-bottom: 20px;
        }
        .many-eyes {
            display: flex;
            justify-items: center;
            flex-wrap: wrap;
            background: #fff;
            padding-top: 20px;
            .item {
                width: 20%;
                img {
                    width: 45px;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                }
                span {
                    display: block;
                    text-align: center;
                    font-size: 14px;
                    padding: 8px 0;
                }
            }
        }
    }
    .news-box {
        display: flex;
        justify-items: center;
        align-items: center;
        margin: 10px;
        padding: 12px;
        background: #fff;
        border-radius: 10px;
        .news-title {
            width: 63px;
            padding-right: 10px;
            img {
                width: 100%;
            }
        }
        .news-content {
            font-size: 12px;
            color: #bcbcbc;
            padding-left: 10px;
            span {
                color: #f32e17;
                padding-left: 5px;
            }
        }
    }
    .hot-goods-box {
        background: #fff;
        .hot-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            &-text {
                color: #444;
                font-size: 14px;
                border-left: 3px solid #f32e17;
                padding: 0 5px 0 7px;
                font-weight: bold;
            }
            &-tips {
                color: #bcbcbc;
                font-size: 12px;
            }
            .more-btn {
                color: #444;
                font-size: 12px;
            }
        }
    }
    .hot-content {
        display: flex;
        justify-content: space-evenly;
        overflow: hidden;
        padding-bottom: 10px;
        &.goods-box {
            flex-wrap: wrap;
            .item {
                width: 172px !important;
                border-radius: 7px;
                background: #fff;
                margin-top: 10px;
                &-img {
                    width: 172px;
                    height: 172px;
                }
                &-title {
                    padding: 5px 4px 8px 4px;
                }
                &-price {
                    padding: 0 4px;
                }
                &-bottom {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    align-items: center;
                    padding: 15px 5px 10px 5px;
                    .coupon-tag {
                        position: relative;
                        background: #fa5b33;
                        border-radius: 3px;
                        padding: 0px 8px;
                        &-text {
                            color: #fff;
                        }
                        &-price {
                            font-size: 14px;
                            color: #fff;
                        }
                        .circle{
                            background: #fff;
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            display: inline-block;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                        .circle-lf{
                            left: -3px;
                        }
                        .circle-rg{
                            right: -3px;
                        }
                        
                    }
                    .update-tips {
                        background: #ffeeea;
                        padding: 2px 5px;
                        color: #eaa08d;
                        .update-icon {
                            width: 10px;
                            height: 10px;
                            display: inline-block;
                            padding-right: 5px;
                            img {
                                width: 100%;
                                height: auto;
                            }
                        }
                        span{
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .item {
            width: 110px;
            &-img {
                height: 110px;
                border-radius: 7px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &-title {
                font-size: 12px;
                color: #444444;
                padding: 5px 0 8px 0;
                font-weight: bold;
            }
            &-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                &-coupon {
                    position: relative;
                    font-size: 12px;
                    color: #f32e17;
                    .price-unit {
                        position: absolute;
                        display: inline-block;
                        left: 20px;
                        top: 1px;
                    }
                    .coupon-price {
                        position: absolute;
                        display: inline-block;
                        font-size: 14px;
                        left: 30px;
                        top: -1px;
                        font-weight: bold;
                    }
                }
                .saled-count {
                    font-size: 8px;
                    color: #bcbcbc;
                }
            }
        }
    }
    .h-classify {
        margin: 10px 0;
        display: flex;
        justify-content: space-evenly;
        .h-title {
            text-align: center;
            &-name {
                font-size: 16px;
                color: #444444;
            }
            &-desc {
                background: #e3e3e3;
                border-radius: 15px;
                color: #fff;
                padding: 5px 2px;
            }
        }
        .active {
            .h-title {
                &-name {
                    font-size: 16px;
                    color: #f32e17;
                }
                &-desc {
                    background: #f32e17;
                    border-radius: 15px;
                    color: #fff;
                }
            }
        }
        .h-tabs-box {
            .van-tab.van-tab--active {
                background: transparent;
            }
        }
        .van-tabs--line .van-tabs__wrap {
            height: auto;
        }
    }
    .h-classify-tabs-box {
        .van-icon,
        .van-icon::before {
            display: inline-block;
            transform: scale(0.7);
        }
        .arrow {
            display: inline-block;
            position: relative;
            top: -12px;
        }
        .arrow1 {
            position: absolute;
            top: 2px;
            display: block;
            &.van-icon::before {
                transform: rotate(90deg);
            }
        }
        .arrow2 {
            position: absolute;
            top: -2px;
            display: block;
            &.van-icon::before {
                transform: rotate(270deg);
            }
        }
    }
}
</style>
