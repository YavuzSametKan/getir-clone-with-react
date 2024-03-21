import React, {useState} from 'react'
import DownloadGetir from "./DownloadGetir";
import {DiscoveryLinks, HelpLinks, PartnershipLinks} from "./Footer.config";
import FooterLinks from "./FooterLinks";
import License from "./License";
import FooterContainer from "./FooterContainer";
import CopyrightAndBottomBar from "./CopyrightAndBottomBar";

function Footer() {
    const [selectedFooterLinks, setSelectedFooterLinks] = useState(
        {
            discoveryLinks: true,
            helpLinks: false,
            partnershipLinks: false
        }
    )

    const handleFooterLinkClick = linkType => {
        setSelectedFooterLinks(prevState => ({
            discoveryLinks: false,
            helpLinks: false,
            partnershipLinks: false,
            [linkType]: !prevState[linkType]
        }))
    }

    return (
        <footer className={'bg-white'}>
                <FooterContainer>
                    <div className={'flex max-md:flex-col py-10 max-md:gap-6'}>
                        <DownloadGetir/>
                        <FooterLinks
                            footerLinks={DiscoveryLinks}
                            selected={selectedFooterLinks.discoveryLinks}
                            onClick={() => handleFooterLinkClick('discoveryLinks')}
                        />
                        <FooterLinks
                            footerLinks={HelpLinks}
                            selected={selectedFooterLinks.helpLinks}
                            onClick={() => handleFooterLinkClick('helpLinks')}
                        />
                        <FooterLinks
                            footerLinks={PartnershipLinks}
                            selected={selectedFooterLinks.partnershipLinks}
                            onClick={() => handleFooterLinkClick('partnershipLinks')}
                        />
                        <License/>
                    </div>
                </FooterContainer>
                <FooterContainer className={'max-md:bg-gray-100'}>
                    <CopyrightAndBottomBar/>
                </FooterContainer>
        </footer>
    );
}

export default Footer;