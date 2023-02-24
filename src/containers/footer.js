import React from 'react'
import Footer from '../components/footer'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
            <Footer.LeftColumn>
                <Footer.Title><img src={require('../CONK_LOGO.png')} style={{wdith: 30, width: 30}} alt='logo' /> &nbsp;ShibaPoconk </Footer.Title>
                    $CONK is a meme token created by an artist and treated as an art project
                </Footer.LeftColumn>
                <Footer.Column>
                <Footer.Title>NFT Friends</Footer.Title>
                    <Footer.Link href="https://wovven.io/conk" target="_blank">wovven.io</Footer.Link>
                    <Footer.Link href="https://conkpunks.vercel.app/" target="_blank">CONK Punks</Footer.Link>
                    <Footer.Link href="#">Tombheads</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>DeFi Friends</Footer.Title>
                    <Footer.Link href="https://beets.fi/" target="_blank">Beethoven X</Footer.Link>
                    <Footer.Link href="https://equalizer.exchange/" target="_blank">Equalizer</Footer.Link>
                    <Footer.Link href="https://conk.rave.cyou/" target="_blank">Rave Names</Footer.Link>
                    <Footer.Link href="https://fantom.foundation/">Fantom Foundation</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>CONK</Footer.Title>
                    <Footer.Link href="/mani">Manifesto</Footer.Link>
                    <Footer.Link href="/multi" target="_blank">Multisig</Footer.Link>
                    <Footer.Link href="https://medium.com/@nftossico/conks-liquidity-generation-event-draws-to-a-close-c92c78ae61d6" target="_blank">Medium Articles</Footer.Link>
                    <Footer.Link href="https://ftmscan.com/token/0xb715F8DcE2F0E9b894c753711bd55eE3C04dcA4E" target="_blank">FTM Scan</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>

        </Footer>
    )
}