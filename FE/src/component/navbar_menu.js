import React from "react";
import MenuLinkButton from "./navbar_menu-link";
import '../styles/navbar_menu.css'

function NavMenu(props) {

    return (
        <main id="menu">
            <div id="menu-box">
                <div id="menu-links" onClick={() => props.setView(false)}>
                    <MenuLinkButton title={"주식"} sub1={"국가별"} sub2={"미국 지표"} sub3={"MSCI"} />
                    <MenuLinkButton title={"채권"} sub1={"10년 채권"} sub2={"미국 채권 지표"} sub3={"기타 지표"} sub4={""} />
                    <MenuLinkButton title={"암호화폐"} sub1={""} sub2={""} sub3={""} sub4={""} />
                    <MenuLinkButton title={"환율"} sub1={"환율 지표"} sub2={"달러 지표"} sub3={""} sub4={""} />
                    <MenuLinkButton title={"원자재"} sub1={"금속"} sub2={"원유"} sub3={"반도체"} sub4={"실리콘"} />
                    <MenuLinkButton title={"한국"} sub1={"경기"} sub2={"부동산"} sub3={"기업"} sub4={"무역"} />
                    <MenuLinkButton title={"미국"} sub1={"경기"} sub2={"부동산"} sub3={"기업"} />
                    <MenuLinkButton title={"중국"} sub1={"경기"} sub2={"부동산"} sub3={"기업"} />
                    <MenuLinkButton title={"유로"} sub1={"경기"} sub2={"부동산"} sub3={"기업"} />
                    <MenuLinkButton title={"북마크"} sub1={""} sub2={""} sub3={""} sub4={""} />
                </div>
                <i id="menu-designline"></i>
            </div>
        </main>
    );
}

export default NavMenu;