import React from 'react'
import {
    NamedLink,
    ExternalLink,
    LayoutComposer,
    Heading,
    H3
  } from '../../components';

import StaticPage from '../PageBuilder/StaticPage';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import FooterContainer from '../FooterContainer/FooterContainer';

import css from './ComprehensiveResourcePage.module.css'

const ComprehensiveResourcePage = () => {

    const layoutAreas = `
    topbar
    main
    footer
  `;

  return (
    <StaticPage
      className={css.root}
      title='Resources' 
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ComprehensiveResourcePage',
        description: 'all in one solution for the buyers',
        name: 'Comprehensive Resource page',
      }}
    >
        <LayoutComposer areas={layoutAreas} className={css.layout}>
        {() => (
        <>
            <TopbarContainer />
            <div className={css.content}>
                <H3>Comprehensive Resource Map</H3>
                <p className={css.contentPara}>This map includes both our marketplace providers and a broader list of public businesses that offer valuable services and resources for children and families. Search by your location, category, or simply type in any keyword like karate or art. If you would like to have your business added or updated please complete the form at the bottom of this page.</p>
                <div className={css.resourceMap}>
                <iframe width="100%" src="https://viewer.mapme.com/3041e69c-c008-4443-b04c-ccdebd5ba3e1" frameborder="0" allowfullscreen allow="fullscreen; geolocation" scrolling="no" style={{minHeight: "90vh", maxHeight: "90vh", border:"1px solid lightgrey", borderRadius: "2px"}}></iframe>
                </div>
            </div>
            <FooterContainer />
        </>
        )}
        </LayoutComposer>
    </StaticPage>
  )
}

export default ComprehensiveResourcePage