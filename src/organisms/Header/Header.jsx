import React, {useState, useEffect} from "react";

import * as S from './Header.styles'

import * as Icons from '../../resources/svgs'

console.log("Icons", Icons)
const headerContent = {
    nodes: ['New', 'Outerwear', 'Jackets','Shoes', 'Bags']
}

const Logo = Icons.Tesla
const Burger = Icons.Burger

const renderNodes = (nodes) => {
    return nodes.map(node => {
        return <S.NavNode>
            {node}
            </S.NavNode>
    })
}

const Header = () => {
    const [abc, setAbc] = useState('')
    useEffect(() => {
        console.log("abc", abc)
    })
    return <S.ContentContainer>
        <S.HeaderMenu>{renderNodes(headerContent.nodes)}</S.HeaderMenu>
        <S.HeaderLogo><Logo/></S.HeaderLogo>
        <S.HeaderMore><S.BurgerContainer><Burger /></S.BurgerContainer></S.HeaderMore>
        </S.ContentContainer>
}

export default Header