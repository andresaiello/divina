const express = require('express');

const router = express.Router();

const x = {
  elems: [
    {
      previous: null,
      results: [{
        name: 'Pull and Bear', id: 38, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/pullbear.png', url: 'https://www.pullandbear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ADIDAS', id: 30, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/adidas.png', url: 'http://adidas.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ASOS', id: 51, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/asos_640-01.png', url: 'http://www.asos.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Double Agent', id: 24, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/doubleagent.png', url: 'http://www.doubleagentusa.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ARIZONA VINTAGE', id: 128, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/arizona_vintage.png', url: 'https://www.arizonavintage.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Au revoir Cinderella', id: 73, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-au_revoir_cinderella.png', url: 'http://www.aurevoircinderella.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Abercrombie & Fitch', id: 91, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ABERCROMBIE.png', url: 'http://es-eu.abercrombie.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Aristocrazy', id: 123, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ARISTOCRAZY.png', url: 'http://aristocrazy.cm/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Aloha States', id: 444, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-aloha_state.png', url: 'http://alohastates.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Aware Clothing', id: 176, logo: null, url: 'http://awareclothingstore.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Andreas', id: 247, logo: null, url: 'http://www.andreasbcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'American Apparel', id: 77, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/AMERICAN_APPAREL.png', url: 'http://store.americanapparel.net/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'THE-ARE', id: 169, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-the_are.png', url: 'https://www.the-are.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'UGG Australia', id: 92, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/UGG.png', url: 'http://www.uggaustralia.eu/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Amarettoshop', id: 825, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/amaretto.png', url: 'http://amarettoshop.com/index.php', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'AliExpress', id: 663, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ALIEXPRESS.png', url: 'http://es.aliexpress.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Aque Swimwear', id: 145, logo: null, url: 'http://www.aqueswimwear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ASICS Tiger', id: 97, logo: null, url: 'http://www.asicstiger.com/es/es-es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ale-hop', id: 394, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ale_hop.png', url: 'http://www.ale-hop.org', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Adolfo Dominguez', id: 244, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ADOLFO_DOMINGUEZ.png', url: 'http://www.adolfodominguez.com/en-us/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Asics', id: 643, logo: null, url: 'http://www.asics.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Atelier', id: 494, logo: null, url: 'http://www.atelierbadajoz.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'El armario de la tele', id: 477, logo: null, url: 'http://www.elarmariodelatele.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Alohas Sandals', id: 104, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/alohas.png', url: 'http://www.alohassandals.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'C&A', id: 335, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/C_A.png', url: 'https://www.c-and-a.com/es/es/shop', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Amazon', id: 81, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Amazon1.png', url: 'http://www.amazon.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Alessandro Simoni', id: 940, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ALESSANDRO_SIMONI.png', url: 'http://www.alessandrosimoni.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Amitié', id: 903, logo: null, url: 'https://www.elcorteingles.es/amitie/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Trend Actually', id: 196, logo: null, url: 'http://trendactually.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ariane Jewels', id: 164, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ariane.png', url: 'http://www.arianejewels.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ARMANI', id: 215, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ARMANI.png', url: 'http://www.armani.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'AND OTHER STORIES', id: 271, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/other_stories.png', url: 'http://www.stories.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ana Angulo', id: 464, logo: null, url: 'http://anaangulo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Alpe', id: 240, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/alpe.png', url: 'http://www.alpeteam.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'American Eagle', id: 232, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/american_eagle_outfitters.png', url: 'http://m.ae.com/web/browse/hp_womens.jsp?catId=womens&navdetail=top:women:p2', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hemi Mata Atelier', id: 140, logo: null, url: 'http://hmatelier.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'American Vintage', id: 338, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/american_vintage.png', url: 'http://www.americanvintage-store.com/en/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Abbacino', id: 472, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/abbacino.png', url: 'http://www.abbacino.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Anchelor', id: 939, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/anchelor.png', url: 'https://anchelor.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Luna Australia', id: 642, logo: null, url: 'http://lunaaustralia.com.au/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Alameda Turquesa', id: 662, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/almadeturquesa.png', url: 'http://alamedaturquesa.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Aguita Swimwear', id: 197, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/AGUITA_SWIM.png', url: 'http://aguita.net/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ANINE BING', id: 325, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/anine_bing.png', url: 'http://www.aninebing.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Axel Arigato', id: 256, logo: null, url: 'https://axelarigato.com/eur/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'American Socks', id: 354, logo: null, url: 'http://www.americansocks.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Alongside', id: 292, logo: null, url: 'http://www.alongsideclothing.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ADA Barcelona', id: 159, logo: null, url: 'http://www.adabarcelona.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ame Concept', id: 392, logo: null, url: 'http://ame-concept.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'AllSisters', id: 463, logo: null, url: 'http://www.allsisters.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Arisalia Moda', id: 1106, logo: null, url: 'http://arisaliamoda.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Pull and Bear', id: 38, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/pullbear.png', url: 'https://www.pullandbear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Bershka', id: 39, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/beshka.png', url: 'http://www.bershka.com/es/', is_in_catalog: true, is_barcode_working: true, are_products_categorized: true,
      }, {
        name: 'Brandy Melville', id: 50, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brandymelville.png', url: 'http://www.brandymelvilleusa.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ray-Ban', id: 53, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/rayban-75.png', url: 'http://www.ray-ban.com/spain', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Bimba Y Lola', id: 45, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Bimba_y_Lola.png', url: 'http://www.bimbaylola.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Brownie', id: 44, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/BROWNIE.png', url: 'http://www.browniespain.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Natural by Lila', id: 268, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Natural.png', url: 'http://naturalbylila.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Blanco', id: 170, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Blanco.png', url: 'https://www.blanco.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'New Balance', id: 109, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/new_balance.png', url: 'http://www.newbalance.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Buylevard', id: 385, logo: null, url: 'http://www.buylevard.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Mus & Bombon', id: 142, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MusBombon.png', url: 'http://musbombon.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Meller Brand', id: 116, logo: null, url: 'http://www.mellerbrand.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Berry Village', id: 233, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-berry_village.png', url: 'http://www.berryvillage.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Boohoo', id: 645, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/BOONHOO.png', url: 'http://es.boohoo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Bosanova', id: 313, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/bosanova.png', url: 'http://www.bosanova.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Benetton', id: 125, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/BENETTON.png', url: 'http://es.benetton.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Black Limba', id: 646, logo: null, url: 'https://www.blacklimba.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'BURBERRY', id: 217, logo: null, url: 'https://es.burberry.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Mura Boutique', id: 505, logo: null, url: 'http://www.muraboutique.com.au/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Behind Hemlines', id: 664, logo: null, url: 'https://behindhemlines.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Luna Beach Swimwear', id: 10, logo: null, url: 'https://lunabeachswimwear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Gewel Boutique', id: 83, logo: null, url: 'https://gewelboutique.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'byzibaka', id: 911, logo: null, url: 'http://www.byzibaka.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Jessica Buurman', id: 261, logo: null, url: 'http://www.shopjessicabuurman.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'COSI BCN', id: 98, logo: null, url: 'https://www.cosibcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Bebohochic', id: 93, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/BEBOHOCHIC.png', url: 'http://bebohochic.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Vagn Blacs', id: 470, logo: null, url: 'http://www.vagnblacs-glamlife.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Balber', id: 165, logo: null, url: 'http://balbertime.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: '21 Buttons', id: 488, logo: null, url: 'http://www.21buttons.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'SWEET BCN', id: 175, logo: null, url: 'http://www.sweetbcn.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Bulgari', id: 213, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/bulgari.png', url: 'http://www.bulgari.com/es-es/?cm_mmc=cpc-_-google-_-GOO_SP_SPA_CRO_BRA_S_D-_-Brand-Exact&gclid=COaCkv6bkMwCFcWVGwodfcsFHg', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Margarette Barcelona', id: 152, logo: null, url: 'http://www.margarettebcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hels BCN', id: 193, logo: null, url: 'http://www.helsbcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Barbarrosa', id: 650, logo: null, url: 'http://www.barbarrosa.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lolita Blu', id: 462, logo: null, url: 'http://www.lolitablu.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Brussosa', id: 34, logo: null, url: 'http://brussosa.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Guell BCN', id: 321, logo: null, url: 'http://www.guellbcn.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Bdba', id: 199, logo: null, url: 'http://www.bdba.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Güell BCN', id: 188, logo: null, url: 'http://www.guellbcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Sunfire Bay', id: 674, logo: null, url: 'http://www.sunfirebay.com/index.php', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Benatty', id: 220, logo: null, url: 'http://benatty.es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Emian Bohe', id: 293, logo: null, url: 'http://www.emian-eyewear.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'BHappy', id: 659, logo: null, url: 'http://www.bhappybarcelona.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Vicky Bargallo', id: 72, logo: null, url: 'http://www.vickybargallo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ANINE BING', id: 325, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/anine_bing.png', url: 'http://www.aninebing.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lima Limon BCN', id: 668, logo: null, url: 'http://www.limalimonbcn.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mon Petit Bikini', id: 497, logo: null, url: 'http://www.monpetitbikini.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Blanco y Negro', id: 302, logo: null, url: 'http://www.modablancoynegro.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Breef Watches', id: 468, logo: null, url: 'https://www.breefwatches.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Codigo Basico', id: 458, logo: null, url: 'http://codigobasico.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Converse', id: 78, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/converse.png', url: 'http://www.converse.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Au revoir Cinderella', id: 73, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-au_revoir_cinderella.png', url: 'http://www.aurevoircinderella.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'CASIO', id: 112, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CASIO.png', url: 'http://www.casio-europe.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Las Cosas de Coco', id: 259, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/LAS_COSAS_DE_COCO.png', url: 'http://lascosasdecoco.bigcartel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Calvin Klein', id: 19, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-calvin_klein.png', url: 'http://www.calvinklein.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Calzados Victoria', id: 89, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/VICTORIA.png', url: 'http://www.calzadosvictoria.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'CHANEL', id: 135, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-chanel.png', url: 'http://www.chanel.com/es_ES/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Cluse', id: 108, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CLUSE.png', url: 'http://clusewatches.com/shop', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'OH MY COLLECTION', id: 115, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-oh_my.png', url: 'https://www.ohmycollection.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'El Corte Ingles', id: 75, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-corte_ingles.png', url: 'https://www.elcorteingles.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Aware Clothing', id: 176, logo: null, url: 'http://awareclothingstore.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Cichic', id: 482, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CICHIC.png', url: 'http://es.cichic.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "Claire's", id: 251, logo: null, url: 'http://www.claires.com/?lang=eu', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Coolway', id: 230, logo: null, url: 'http://www.coolway.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Green Coast', id: 894, logo: null, url: 'https://www.elcorteingles.es/green-coast/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Chollo Moda', id: 489, logo: null, url: 'https://www.chollomoda.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Chloe', id: 64, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/chloe.png', url: 'http://www.chloe.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Jeffrey Campbell', id: 139, logo: null, url: 'http://www.jeffreycampbellshoes.com/new-arrivals', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Cortefiel', id: 141, logo: null, url: 'http://cortefiel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Robin Collection', id: 157, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ROBIN.png', url: 'http://www.robincollection.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Necessary Clothing', id: 492, logo: null, url: 'http://www.necessaryclothing.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tiffany & Co', id: 137, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/TIFFANY.png', url: 'http://www.tiffany.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'C&A', id: 335, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/C_A.png', url: 'https://www.c-and-a.com/es/es/shop', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Le Coq Sportif', id: 173, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/le_coq_sportif.png', url: 'http://www.lecoqsportif.com/es-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'CELINE', id: 172, logo: null, url: 'https://www.celine.com/en', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Carolina Herrera', id: 223, logo: null, url: 'http://www.carolinaherrera.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Carhartt WIP', id: 236, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/carhartt.png', url: 'http://shop.carhartt-wip.com/view/es/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Calzedonia', id: 66, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/calzedonia.png', url: 'http://es.calzedonia.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'COSI BCN', id: 98, logo: null, url: 'https://www.cosibcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Casas', id: 478, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CASA.png', url: 'https://www.casasclub.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Christian Louboutin', id: 391, logo: null, url: 'http://eu.christianlouboutin.com/es_en/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Chiara Ferragni', id: 267, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CHIARA_FERRAGNI.png', url: 'http://www.chiaraferragnicollection.com/eu_en', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Coco & Lola', id: 459, logo: null, url: 'http://cocoylola.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'CARTIER', id: 210, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CARTIER.png', url: 'http://www.cartier.es/‎', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Custo', id: 414, logo: null, url: 'https://custo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Cheriè', id: 672, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CHERIE.png', url: 'http://www.cherieshop.es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Curet Sunglasses', id: 305, logo: null, url: 'http://curetbrand.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Carrera', id: 340, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/carrera.png', url: 'http://www.carreraworld.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Cupshe', id: 495, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CUPSHE.png', url: 'http://www.cupshe.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Southern Cotton', id: 904, logo: null, url: 'https://www.elcorteingles.es/southern-cotton/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'OWL CREATION', id: 120, logo: null, url: 'http://www.owlcreationofficial.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'COS', id: 221, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/cos.png', url: 'http://www.cosstores.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Cache cache', id: 411, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/cache.png', url: 'http://www.cache-cache.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Cayler & Sons', id: 383, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CAYLER.png', url: 'http://shop.caylerandsons.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Complementos3love', id: 258, logo: null, url: 'http://complementos3love.tictail.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Cru Swimwear', id: 667, logo: null, url: 'http://cruswimwear.bigcartel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Charlotte Russe', id: 245, logo: null, url: 'http://m.charlotterusse.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Jewel Cloning', id: 453, logo: null, url: 'http://jewelcloningshop.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Studio Classics', id: 897, logo: null, url: 'https://www.elcorteingles.es/studio-classics/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Con El Día Tonto', id: 941, logo: null, url: 'http://coneldiatonto.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Daniel Wellington', id: 52, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-daniel_wellington.png', url: 'https://www.danielwellington.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Double Agent', id: 24, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/doubleagent.png', url: 'http://www.doubleagentusa.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Massimo Dutti', id: 31, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MASSIMO_DUTTI.png', url: 'http://www.massimodutti.com/es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Las Cosas de Coco', id: 259, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/LAS_COSAS_DE_COCO.png', url: 'http://lascosasdecoco.bigcartel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Public Desire', id: 337, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-public_desire.png', url: 'http://www.publicdesire.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dr Martens', id: 644, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/drmartens.png', url: 'http://www.drmartens.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Dior', id: 146, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DIOR.png', url: 'http://www.dior.com/home/es_es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Decathlon', id: 151, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DECATHLON.png', url: 'http://www.decathlon.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Desigual', id: 9, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DESIGUAL.png', url: 'http://www.desigual.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Adolfo Dominguez', id: 244, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ADOLFO_DOMINGUEZ.png', url: 'http://www.adolfodominguez.com/en-us/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'D.Franklin', id: 185, logo: null, url: 'https://www.dfranklincreation.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dulceida Shop', id: 665, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Dulceida_shop.png', url: 'http://dulceidashop.com/shop/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Dolce & Gabbana', id: 415, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DOLCE_AND_GABBANA.png', url: 'https://store.dolcegabbana.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'El armario de la tele', id: 477, logo: null, url: 'http://www.elarmariodelatele.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dishee', id: 499, logo: null, url: 'http://www.disheefashion.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pedro del Hierro', id: 200, logo: null, url: 'http://www.pedrodelhierro.com/‎', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Morgan de Toi', id: 21, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/morgan.png', url: 'http://www.morgandetoi.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Dsquared2', id: 384, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/dsquared2.png', url: 'http://www.dsquared2.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Diesel', id: 322, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/diesel.png', url: 'http://store.diesel.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'duckkiss', id: 238, logo: null, url: 'http://www.duckkiss.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'El Rincón de Nina', id: 944, logo: null, url: 'http://elrincondenina.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'DKNY', id: 209, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DKNY.png', url: 'http://www.dkny.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'dear tee', id: 280, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DEAR_TEE.png', url: 'http://www.deartee.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Con El Día Tonto', id: 941, logo: null, url: 'http://coneldiatonto.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Olivia de Gala', id: 375, logo: null, url: 'http://oliviadegala.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Depor village', id: 276, logo: null, url: 'http://www.deporvillage.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dress Lily', id: 1708, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/dresslily.png', url: 'https://www.dresslily.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dorothy Perkins', id: 2024, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_dorothy_perkins.png', url: 'http://euro.dorothyperkins.com/?geoip=home', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Desigual Kids', id: 2132, logo: null, url: 'https://www.desigual.com/es_ES/moda-infantil/ropa-ninas/ver-todos/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dorothy mambo', id: 1242, logo: null, url: 'https://www.dorothymambo.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Duruss', id: 2492, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/duruss.png', url: 'https://duruss.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Druni', id: 2829, logo: null, url: 'https://www.druni.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Drew Barcelona', id: 397, logo: null, url: 'http://www.drewbarcelona.es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'DXB', id: 1304, logo: null, url: 'http://www.dxbwood.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dosaes', id: 2566, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/dosaes.png', url: 'https://dosaes.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Dr Fish', id: 971, logo: null, url: 'http://drfish.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Drupe', id: 1210, logo: null, url: 'http://drupe-la.com/?lang=es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Diva Zapatos', id: 1867, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/diva.png', url: 'https://divazapatos.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Diadora', id: 350, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DIADORA.png', url: 'http://www.diadora.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'D-BOHO', id: 319, logo: null, url: 'http://www.d-boho.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'dinh van', id: 390, logo: null, url: 'http://www.dinhvan.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dolls Kill', id: 1701, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/dolls_kill.png', url: 'https://www.dollskill.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'DSW', id: 2519, logo: null, url: 'https://www.dsw.com/en/us/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Debenhams', id: 2814, logo: null, url: 'https://www.debenhams.com/en-es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Denver shops', id: 1241, logo: null, url: 'http://www.denver-shops.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dandalion', id: 2675, logo: null, url: 'https://dandalionclothes.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dog Flute Clothing', id: 1198, logo: null, url: 'https://dogfluteclothing.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Urban Decay', id: 1540, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/urban_decay.png', url: 'https://www.urbandecay.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kat Von D', id: 864, logo: null, url: 'http://www.katvondbeauty.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Isabel de Pedro', id: 1228, logo: null, url: 'https://isabeldepedro.com/eshop', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Zara', id: 1, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/zara.png', url: 'http://www.zara.com', is_in_catalog: true, is_barcode_working: true, are_products_categorized: true,
      }, {
        name: 'Stradivarius', id: 23, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/stradivaruis.png', url: 'https://www.stradivarius.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Pull and Bear', id: 38, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/pullbear.png', url: 'https://www.pullandbear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Bershka', id: 39, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/beshka.png', url: 'http://www.bershka.com/es/', is_in_catalog: true, is_barcode_working: true, are_products_categorized: true,
      }, {
        name: 'ADIDAS', id: 30, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/adidas.png', url: 'http://adidas.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Mango', id: 5, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/mango.png', url: 'http://shop.mango.com/ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'H&M', id: 6, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/hym.png', url: 'http://m2.hm.com/m/es_es/index.html', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Nike', id: 28, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/nike-09.png', url: 'http://www.nike.com/es/es_es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Primark', id: 47, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/primark-76.png', url: 'https://www.primark.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ASOS', id: 51, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/asos_640-01.png', url: 'http://www.asos.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Brandy Melville', id: 50, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brandymelville.png', url: 'http://www.brandymelvilleusa.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Converse', id: 78, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/converse.png', url: 'http://www.converse.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ray-Ban', id: 53, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/rayban-75.png', url: 'http://www.ray-ban.com/spain', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "Levi's", id: 3, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/levis.png', url: 'http://www.levi.com/ES/es_ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Oysho', id: 41, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/OYSHO-77.png', url: 'http://www.oysho.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Daniel Wellington', id: 52, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-daniel_wellington.png', url: 'https://www.danielwellington.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'SheIn', id: 37, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/SHEIN3-01.png', url: 'http://es.shein.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lefties', id: 107, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/lefties.png', url: 'http://www.lefties.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Romwe', id: 434, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/romwe.png', url: 'http://es.romwe.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Double Agent', id: 24, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/doubleagent.png', url: 'http://www.doubleagentusa.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Forever 21', id: 71, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Forever21.png', url: 'http://www.forever21.com/eu/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hollister', id: 57, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/HOLLISTER.png', url: 'http://es-eu.hollisterco.com/shop/eu', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Parfois', id: 111, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Parfois.png', url: 'https://www.parfois.com/es/es/home/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Shana', id: 29, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Shana.png', url: 'http://www.shana.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Vans', id: 48, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/vans-95.png', url: 'http://www.vans.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Women Secret', id: 33, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_WomenSecret.png', url: 'http://womensecret.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ARIZONA VINTAGE', id: 128, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/arizona_vintage.png', url: 'https://www.arizonavintage.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Bimba Y Lola', id: 45, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Bimba_y_Lola.png', url: 'http://www.bimbaylola.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Pimkie', id: 110, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PIMKIE.png', url: 'http://www.pimkie.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Topshop', id: 59, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/tophop.png', url: 'http://m.eu.topshop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tous', id: 7, logo: null, url: 'http://www.tous.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Puma', id: 36, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PUMA.png', url: 'http://es-eu.puma.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Springfield', id: 96, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Springfield.png', url: 'http://myspringfield.com/es/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Brownie', id: 44, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/BROWNIE.png', url: 'http://www.browniespain.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Au revoir Cinderella', id: 73, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-au_revoir_cinderella.png', url: 'http://www.aurevoircinderella.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'SUBDUED', id: 49, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/SUBDUED.png', url: 'http://www.subdued.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Frankie Phoenix', id: 425, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-frankie_phoenix.png', url: 'http://frankie-phoenix.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'MARYPAZ', id: 122, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MARYPAZ.png', url: 'http://www.marypaz.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Michael Kors', id: 70, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/michael_kors-21.png', url: 'http://www.michaelkors.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'CASIO', id: 112, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CASIO.png', url: 'http://www.casio-europe.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'SABO', id: 160, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-sabo.png', url: 'http://saboskirt.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Natural by Lila', id: 268, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Natural.png', url: 'http://naturalbylila.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Zatro', id: 46, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-zatro.png', url: 'http://www.zatro.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Sfera', id: 129, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Sfera.png', url: 'https://www.elcorteingles.es/sfera/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Un Paso Mas', id: 55, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/UN_PASO_MAS.png', url: 'https://www.unpasomas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Massimo Dutti', id: 31, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MASSIMO_DUTTI.png', url: 'http://www.massimodutti.com/es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Blanco', id: 170, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Blanco.png', url: 'https://www.blanco.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Zaful', id: 465, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Zaful.png', url: 'http://www.zaful.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Las Cosas de Coco', id: 259, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/LAS_COSAS_DE_COCO.png', url: 'http://lascosasdecoco.bigcartel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'In Love With', id: 32, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/in_love_with_-75.png', url: 'http://www.inlovewith.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Forever 21', id: 71, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Forever21.png', url: 'http://www.forever21.com/eu/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Frankie Phoenix', id: 425, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-frankie_phoenix.png', url: 'http://frankie-phoenix.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Footlocker', id: 84, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/FOOT_LOOCKER.png', url: 'http://www.footlocker.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Abercrombie & Fitch', id: 91, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ABERCROMBIE.png', url: 'http://es-eu.abercrombie.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'White Fox', id: 435, logo: null, url: 'http://www.whitefoxboutique.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fórmula Joven', id: 893, logo: null, url: 'https://www.elcorteingles.es/formula-joven/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Free People', id: 432, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/freepeople.png', url: 'https://www.freepeople.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fashion Nova', id: 429, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/FASHION_NOVA.png', url: 'http://www.fashionnova.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Furla', id: 155, logo: null, url: 'http://www.furla.com/es/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lioness Fashion', id: 673, logo: null, url: 'https://www.lionessfashion.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'FENDI', id: 180, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/FENDI.png', url: 'http://www.fendi.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "Friday's Project", id: 201, logo: null, url: 'http://www.fridaysproject.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Chiara Ferragni', id: 267, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CHIARA_FERRAGNI.png', url: 'http://www.chiaraferragnicollection.com/eu_en', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fashion Pills', id: 14, logo: null, url: 'http://fashion-pills.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The North Face', id: 303, logo: null, url: 'http://www.thenorthface.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fioccobcn', id: 174, logo: null, url: 'http://fioccobcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'The Wild Flower Shop', id: 918, logo: null, url: 'http://www.thewildflowershop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Flamingo Sunglasses', id: 307, logo: null, url: 'https://flamingosun.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Water Melon Flops', id: 888, logo: null, url: 'https://www.watermelonflops.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Linda Farrow', id: 26, logo: null, url: 'http://eu.lindafarrow.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Feler Sunglasses', id: 379, logo: null, url: 'http://www.felersunglasses.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Farfetch', id: 1571, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/farfetch.png', url: 'https://www.farfetch.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'FWRD', id: 2236, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/forward.png', url: 'https://www.fwrd.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fashionette', id: 358, logo: null, url: 'http://www.fashionette.es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Forzieri', id: 2626, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/forzieri.png', url: 'https://www.es.forzieri.com/esp/salea.asp?l=esp&c=ita&gr=1', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Foot shop', id: 1818, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/footshop.png', url: 'https://www.footshop.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Flory Day', id: 2370, logo: null, url: 'https://www.floryday.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Foreo', id: 1357, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/foreo.png', url: 'https://www.foreo.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Freshly Cosmetics', id: 1256, logo: null, url: 'https://www.freshlycosmetics.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fracap', id: 2740, logo: null, url: 'https://fracap.it/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Faye', id: 2686, logo: null, url: 'https://es.faye.co/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Santa Firenze', id: 1152, logo: null, url: 'https://www.santafirenze.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Siara Fashion', id: 881, logo: null, url: 'http://siarafashion.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rebellious Fashion', id: 2156, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/REBELLIOUS.png', url: 'https://www.rebelliousfashion.co.uk/?___store=eur', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Compañia Fantastica', id: 2469, logo: null, url: 'https://www.companiafantastica.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nathalia Forkin', id: 2444, logo: null, url: 'https://www.nathaliaforkin.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Margarita flops', id: 1255, logo: null, url: 'https://margaritaflops.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dr Fish', id: 971, logo: null, url: 'http://drfish.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pietro Ferrante', id: 2546, logo: null, url: 'https://www.pietroferrante.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dog Flute Clothing', id: 1198, logo: null, url: 'https://dogfluteclothing.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'I Saw It First', id: 1535, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/I_SAW_IT_FIRST.png', url: 'https://www.isawitfirst.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Gucci', id: 124, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/gucci-88.png', url: 'http://www.gucci.com/es/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Guess', id: 76, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/GUESS.png', url: 'http://www.guess.eu/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Verge Girl', id: 378, logo: null, url: 'http://www.vergegirl.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Purificacion Garcia', id: 428, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PURIFICACION_GARCIA.png', url: 'http://www.purificaciongarcia.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "Gloria's", id: 503, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-glorias.png', url: 'http://www.gloriasshop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Green Coast', id: 894, logo: null, url: 'https://www.elcorteingles.es/green-coast/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'EL GANSO', id: 161, logo: null, url: 'http://www.elganso.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Gap', id: 177, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/gap.png', url: 'http://m.gap.eu/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Gioseppo', id: 286, logo: null, url: 'http://gioseppo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Dolce & Gabbana', id: 415, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DOLCE_AND_GABBANA.png', url: 'https://store.dolcegabbana.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Nasty Gal', id: 260, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/nastygal.png', url: 'http://www.nastygal.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Gewel Boutique', id: 83, logo: null, url: 'https://gewelboutique.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Goiclothing', id: 481, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/goiclothing-56.png', url: 'http://www.goiclothing.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Shop Gocase', id: 923, logo: null, url: 'http://www.shop-gocase.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'G-STAR', id: 154, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/g_star_war.png', url: 'https://www.g-star.com/es_es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ZE GARCIA', id: 143, logo: null, url: 'http://www.zegarcia.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tino Gonzalez', id: 235, logo: null, url: 'http://www.tinogonzalez.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'GIVENCHY', id: 211, logo: null, url: 'https://www.givenchy.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Gloria Ortiz y Elogy', id: 895, logo: null, url: 'https://www.elcorteingles.es/gloria-ortiz/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Goandstyle', id: 933, logo: null, url: 'http://www.goandstyle.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Gran Optic', id: 149, logo: null, url: 'https://www.granoptic.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Guell BCN', id: 321, logo: null, url: 'http://www.guellbcn.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Grey Sunglasses', id: 306, logo: null, url: 'http://www.greysunglasses.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Güell BCN', id: 188, logo: null, url: 'http://www.guellbcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Great Times', id: 386, logo: null, url: 'http://greatimes.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Olivia de Gala', id: 375, logo: null, url: 'http://oliviadegala.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Grain', id: 501, logo: null, url: 'http://www.shopgrain.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'gocustomized', id: 374, logo: null, url: 'http://www.gocustomized.es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Golden Goose Deluxe Brand', id: 1335, logo: null, url: 'http://www.goldengoosedeluxebrand.com/es/en', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Göhe', id: 1145, logo: null, url: 'http://gohe.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ginas Collection', id: 2834, logo: null, url: 'https://ginascollection.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Get Amber', id: 399, logo: null, url: 'http://www.get-amber.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'G83', id: 1114, logo: null, url: 'https://www.g83.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Golf Wang', id: 1325, logo: null, url: 'http://www.golfwang.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Green Cornerss', id: 1577, logo: null, url: 'https://greencornerss.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Gala Black', id: 1616, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/gala_black.png', url: 'https://www.galablack.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Gamiss', id: 1775, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/gamiss.png', url: 'https://www.gamiss.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Geox', id: 1866, logo: null, url: 'https://www.geox.com/es-ES/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'GERARD DAREL', id: 204, logo: null, url: 'http://www.gerarddarel.com/en_es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Guapa y con estilo shop', id: 2825, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/guapayconestilo.png', url: 'https://guapayconestiloshop.com/tienda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lorette Group', id: 2414, logo: null, url: 'https://lorettegroup.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'I Am Gia', id: 1485, logo: null, url: 'https://iamgia.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pippa & Go', id: 967, logo: null, url: 'http://pippaandgo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Amanda Galvany', id: 1321, logo: null, url: 'http://www.google.es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Renatta & Go', id: 946, logo: null, url: 'https://www.renattandgo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'H&M', id: 6, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/hym.png', url: 'http://m2.hm.com/m/es_es/index.html', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hollister', id: 57, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/HOLLISTER.png', url: 'http://es-eu.hollisterco.com/shop/eu', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hawkers', id: 85, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/hawkers-03.png', url: 'http://hawkersco.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Tommy Hilfiger', id: 127, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/tommy_hilfiguer-04.png', url: 'http://es.tommy.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Miss Hamptons', id: 264, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-miss_hamptons.png', url: 'http://misshamptons.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ale-hop', id: 394, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ale_hop.png', url: 'http://www.ale-hop.org', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hunter', id: 207, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/HUNTER.png', url: 'http://es.hunterboots.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Behind Hemlines', id: 664, logo: null, url: 'https://behindhemlines.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Happy Socks', id: 131, logo: null, url: 'https://www.happysocks.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Carolina Herrera', id: 223, logo: null, url: 'http://www.carolinaherrera.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The Hip Tee', id: 656, logo: null, url: 'http://www.thehiptee.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pedro del Hierro', id: 200, logo: null, url: 'http://www.pedrodelhierro.com/‎', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Howland', id: 192, logo: null, url: 'http://www.howlandteam.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hels BCN', id: 193, logo: null, url: 'http://www.helsbcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hattieduke', id: 418, logo: null, url: 'http://www.hattieduke.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hemi Mata Atelier', id: 140, logo: null, url: 'http://hmatelier.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mr. Happiness', id: 666, logo: null, url: 'http://mr-happiness.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hackett', id: 330, logo: null, url: 'http://www.hackett.com/gb/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Higher Woods', id: 357, logo: null, url: 'http://www.higherwoods.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'HRPR Clothing', id: 419, logo: null, url: 'https://www.hrprclothing.com/#shop', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'HOT!MESS', id: 460, logo: null, url: 'http://hot-mess.co.uk/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'HP', id: 2316, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/hp-26.png', url: 'https://www.elcorteingles.es/electronica/hp-sprocket/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Horma', id: 1129, logo: null, url: 'http://www.hormashop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hard Rock', id: 1280, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/HARD_ROCK.png', url: 'https://rockshop.hardrock.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hotels Combined', id: 1744, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/hotels_combined.png', url: 'https://www.hotelscombined.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hugo Boss', id: 1948, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/HUGO_BOSS.png', url: 'https://www.hugoboss.com/es/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Happiness Boutique', id: 2640, logo: null, url: 'https://www.happinessboutique.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hanes', id: 2796, logo: null, url: 'https://www.hanes.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Holly Hope', id: 1110, logo: null, url: 'https://www.hollyhopeco.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Helly Hansen', id: 1512, logo: null, url: 'https://www.hellyhansen.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hale', id: 1112, logo: null, url: 'http://wearehale.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hawkers', id: 1944, logo: null, url: 'https://www.hawkers.co/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Havaianas', id: 807, logo: null, url: 'http://www.havaianas-store.com/es/?cCode=ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Harper & Brooks', id: 295, logo: null, url: 'https://harperandbrooks.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Heylove', id: 848, logo: null, url: 'https://www.heylove.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hangar Zapatos', id: 951, logo: null, url: 'http://tienda.hangarzapatos.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hermes', id: 2394, logo: null, url: 'https://www.hermes.com/es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hoff', id: 969, logo: null, url: 'http://www.thehoffbrand.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hunkemoller', id: 1123, logo: null, url: 'https://www.hunkemoller.es/es_es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hazelnut Jewelry', id: 1142, logo: null, url: 'https://hazelnutjewelry.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "Hella's", id: 1319, logo: null, url: 'https://hellashop.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Raceu hats', id: 323, logo: null, url: 'http://www.raceuhats.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Creu Hand Made', id: 1528, logo: null, url: 'https://www.creuhandmade.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Silvian Heach', id: 1265, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-silvian_heach.png', url: 'http://www.silvianheach.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Elena Hernandez', id: 1127, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ELENA_HERNANDEZ.png', url: 'http://www.elenahernandez.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Sunglass Hut', id: 2366, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/sunglass_hut.png', url: 'https://www.sunglasshut.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Paul Hewitt', id: 1339, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/paul_hewit.png', url: 'https://www.paul-hewitt.com/es/sp', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'In Love With', id: 32, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/in_love_with_-75.png', url: 'http://www.inlovewith.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'El Corte Ingles', id: 75, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-corte_ingles.png', url: 'https://www.elcorteingles.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ILEVAHC', id: 144, logo: null, url: 'http://www.ilevahc.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Inside', id: 272, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/INSIDE.png', url: 'http://inside-shops.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Intimissimi', id: 206, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/intimissimi-54.png', url: 'https://es.intimissimi.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Isidora the label', id: 441, logo: null, url: 'http://www.isidorathelabel.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'River Island', id: 351, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_river_island.png', url: 'http://eu.riverisland.com/women/going-out/_/N-8hs?icid=hp/prm1/w/going-out/cat', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Italia Independent', id: 479, logo: null, url: 'http://www.italiaindependent.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Isabel Marant', id: 285, logo: null, url: 'http://www.isabelmarant.com/en/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'indi & cold', id: 278, logo: null, url: 'http://www.indiandcold.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Indi Lisbon', id: 446, logo: null, url: 'http://www.indilisbon.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Light in the box', id: 370, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/light_in_the_box.png', url: 'http://www.lightinthebox.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'I Saw It First', id: 1535, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/I_SAW_IT_FIRST.png', url: 'https://www.isawitfirst.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Intropia', id: 1349, logo: null, url: 'https://www.intropia.com/es-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ioffer', id: 1195, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/IOFFER.png', url: 'https://www.ioffer.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ikrush', id: 1541, logo: null, url: 'https://www.ikrush.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ivrose', id: 1709, logo: null, url: 'https://www.ivrose.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Illusive London', id: 1739, logo: null, url: 'http://www.illusivelondon.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Imperium Maris', id: 910, logo: null, url: 'http://imperiummaris.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Iconeta', id: 1240, logo: null, url: 'https://www.iconeta.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Isabel de Pedro', id: 1228, logo: null, url: 'https://isabeldepedro.com/eshop', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'I Am Gia', id: 1485, logo: null, url: 'https://iamgia.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ikks', id: 2052, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ikks.png', url: 'https://www.ikks.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'I-RiFashion', id: 954, logo: null, url: 'http://i-rifashion.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Esencia-ibiza', id: 1246, logo: null, url: 'https://esencia-ibiza.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Mirror in the Sky', id: 241, logo: null, url: 'http://mirrorintheskyshop.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'All i want', id: 1918, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/alliewant.png', url: 'https://www.alliwant.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Oh Juliette', id: 443, logo: null, url: 'http://ohjuliettestore.tictail.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pepe Jeans', id: 118, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-pepe_jeans.png', url: 'https://www.pepejeans.com/es_es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Jeffrey Campbell', id: 139, logo: null, url: 'http://www.jeffreycampbellshoes.com/new-arrivals', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fórmula Joven', id: 893, logo: null, url: 'https://www.elcorteingles.es/formula-joven/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Panama Jack', id: 283, logo: null, url: 'https://www.panamajack.es/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'MARC JACOBS', id: 218, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/marc_jacobs.png', url: 'http://www.marcjacobs.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ariane Jewels', id: 164, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ariane.png', url: 'http://www.arianejewels.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Jessica Buurman', id: 261, logo: null, url: 'http://www.shopjessicabuurman.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Jewel Cloning', id: 453, logo: null, url: 'http://jewelcloningshop.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Jaleo', id: 585, logo: null, url: 'http://www.jaleohk-europe.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Jack & Jones', id: 1955, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/jack_jones.png', url: 'https://www.jackjones.com/es/es/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Jacob Cohen', id: 353, logo: null, url: 'http://jacobcohen.it', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Just Strong', id: 2653, logo: null, url: 'https://juststrong.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Joy Colors', id: 1140, logo: null, url: 'http://www.joycolorsco.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Jose Saenz', id: 1148, logo: null, url: 'http://josesaenz.es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Jvz Shop', id: 1155, logo: null, url: 'https://jvzshop.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Hazelnut Jewelry', id: 1142, logo: null, url: 'https://hazelnutjewelry.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lia Jeans', id: 1315, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/lia_jeans.png', url: 'https://liajeans.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ararat Joyas', id: 959, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ararat.png', url: 'http://www.araratjoyas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Wander Jewelry', id: 355, logo: null, url: 'http://www.wanderjewelry.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Phantom Jewels', id: 2699, logo: null, url: 'https://phantomjewels.co.uk/?currency=EUR', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Joylife', id: 1237, logo: null, url: 'https://joylifeco.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Jd Sports', id: 1345, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/JD.png', url: 'https://www.jdsports.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Javier Simorra', id: 2320, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/JAVIER_SIMORA.png', url: 'https://www.javiersimorra.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'J. Crew', id: 2057, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/J.CREW.png', url: 'https://www.jcrew.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Justfab', id: 2625, logo: null, url: 'https://www.justfab.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Majale New Jewel', id: 875, logo: null, url: 'http://majale-newjewel.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lavani Jewels', id: 1529, logo: null, url: 'https://www.lavanijewels.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: '2 Jewels', id: 2235, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/2jewels.png', url: 'https://www.2jewels.it/ahi/cms/ENG/home.html', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Michael Kors', id: 70, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/michael_kors-21.png', url: 'http://www.michaelkors.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Calvin Klein', id: 19, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-calvin_klein.png', url: 'http://www.calvinklein.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'NA-KD', id: 420, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/nakd-09.png', url: 'https://na-kd.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'KAOA', id: 396, logo: null, url: 'http://www.kaoashop.pt', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Kaotiko', id: 339, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/KAOTIKO.png', url: 'http://www.kaotikobcn.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kiko', id: 274, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/KIKO.png', url: 'http://www.kikocosmetics.com/es-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'KIABI', id: 737, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/kiabi.png', url: 'http://www.kiabi.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Krack', id: 490, logo: null, url: 'http://www.krackonline.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'KAPTEN&SON', id: 461, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/KAPTEN_AND_SON.png', url: 'https://kapten-son.es/?___store=spanish&___from_store=spanish', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kling', id: 382, logo: null, url: 'http://www.kling.es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kiini', id: 466, logo: null, url: 'http://kiini.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The Knitted Troopers', id: 932, logo: null, url: 'https://www.theknittedtroopers.com/collections/strangers', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Khong Boon', id: 282, logo: null, url: 'http://www.khongboonswimwear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kiss Me Bang Bang', id: 931, logo: null, url: 'http://www.kissmebangbang.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Koketta', id: 1320, logo: null, url: 'http://www.koketta.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Kipling', id: 1846, logo: null, url: 'https://www.kipling.com/es-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Kennel & Schmenger', id: 2660, logo: null, url: 'https://www.kennel-schmenger.com/es-es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'kenay lifestyle', id: 1823, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/kenay-10.png', url: 'https://kenaylifestyle.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Koroshi', id: 1855, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/koroshi.png', url: 'https://www.koroshishop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Koker', id: 2701, logo: null, url: 'https://kokeronline.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kat Von D', id: 864, logo: null, url: 'http://www.katvondbeauty.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kingsman', id: 1067, logo: null, url: 'http://www.kingsmanclothes.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "Kiehl's", id: 1507, logo: null, url: 'https://www.kiehls.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Desigual Kids', id: 2132, logo: null, url: 'https://www.desigual.com/es_ES/moda-infantil/ropa-ninas/ver-todos/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: "We Don't Kill Animals", id: 1132, logo: null, url: 'http://www.wedontkillanimals.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kalk', id: 1361, logo: null, url: 'https://www.kalkstore.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'The Kooples', id: 1312, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/the_kooples.png', url: 'http://www.thekooples.com/en/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Cath Kidston', id: 2820, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CATH_KIDSTON.png', url: 'https://www.cathkidston.com/pws/ShippingOptions.ice?onSuccess=home&lng=&ctry=ES&channel=PWS_EN', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Dolls Kill', id: 1701, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/dolls_kill.png', url: 'https://www.dollskill.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Charles & Keith', id: 2334, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/CHARLES_AND_KEITH.png', url: 'https://www.charleskeith.eu/eu/?shipto=es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: "Levi's", id: 3, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/levis.png', url: 'http://www.levi.com/ES/es_ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lefties', id: 107, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/lefties.png', url: 'http://www.lefties.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Bimba Y Lola', id: 45, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Bimba_y_Lola.png', url: 'http://www.bimbaylola.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Natural by Lila', id: 268, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Natural.png', url: 'http://naturalbylila.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Las Cosas de Coco', id: 259, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/LAS_COSAS_DE_COCO.png', url: 'http://lascosasdecoco.bigcartel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'In Love With', id: 32, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/in_love_with_-75.png', url: 'http://www.inlovewith.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Louis Vuitton', id: 58, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/LOUIS_VUITTON.png', url: 'http://es.louisvuitton.com/esp-es/homepage', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ralph Lauren', id: 132, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ralph_lauren.png', url: 'http://www.ralphlauren.fr/home/index.jsp?locale=en_FR&ab=footer_cs_spain_US', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lacoste', id: 35, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/LACOSTE.png', url: 'http://www.lacoste.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'LOAVIES', id: 795, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/LOAVIES.png', url: 'https://www.loavies.com/eu/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Longchamp', id: 88, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/longchamp.png', url: 'http://es.longchamp.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Black Limba', id: 646, logo: null, url: 'https://www.blacklimba.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lulus', id: 653, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/lulus.png', url: 'https://www.lulus.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'El armario de la tele', id: 477, logo: null, url: 'http://www.elarmariodelatele.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lookbook Store', id: 167, logo: null, url: 'http://www.lookbookstore.co/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Luna Beach Swimwear', id: 10, logo: null, url: 'https://lunabeachswimwear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Saint Laurent Paris', id: 22, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ives_saint_laurent-52.png', url: 'http://www.ysl.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Skinnidip London', id: 119, logo: null, url: 'http://www.skinnydiplondon.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Loewe', id: 413, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/loewe.png', url: 'http://www.loewe.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rare London', id: 671, logo: null, url: 'http://www.rarelondon.com/clothing/tops-1.html', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Le Coq Sportif', id: 173, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/le_coq_sportif.png', url: 'http://www.lecoqsportif.com/es-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lioness Fashion', id: 673, logo: null, url: 'https://www.lionessfashion.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lowlita&You', id: 191, logo: null, url: 'http://www.lowlitaandyou.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Isidora the label', id: 441, logo: null, url: 'http://www.isidorathelabel.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Leztinstreet', id: 480, logo: null, url: 'http://www.leztinstreet.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Christian Louboutin', id: 391, logo: null, url: 'http://eu.christianlouboutin.com/es_en/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'La Redoute', id: 366, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/la_redoute-55.png', url: 'http://m.laredoute.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Coco & Lola', id: 459, logo: null, url: 'http://cocoylola.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'SIsters the label', id: 647, logo: null, url: 'http://au.sistersthelabel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lia Swimwear', id: 451, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/lia_swimwear.png', url: 'http://www.liaswimwear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'LORD WILMORE', id: 179, logo: null, url: 'http://lordwilmore.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lolita Blu', id: 462, logo: null, url: 'http://www.lolitablu.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Luna Australia', id: 642, logo: null, url: 'http://lunaaustralia.com.au/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lima Limon BCN', id: 668, logo: null, url: 'http://www.limalimonbcn.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: "Lloyd's", id: 902, logo: null, url: 'https://www.elcorteingles.es/lloyds/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Linda Farrow', id: 26, logo: null, url: 'http://eu.lindafarrow.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Indi Lisbon', id: 446, logo: null, url: 'http://www.indilisbon.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lola Li', id: 483, logo: null, url: 'https://lolali.com/es/e-boutique', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Light in the box', id: 370, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/light_in_the_box.png', url: 'http://www.lightinthebox.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lodi', id: 1729, logo: null, url: 'https://www.lodi.es/es-ES/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'luvyle', id: 1723, logo: null, url: 'https://www.luvyle.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Last Call Anna', id: 1289, logo: null, url: 'http://www.lastcallanna.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Live your life', id: 1245, logo: null, url: 'http://liveyourlifeclothing.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'laaklook', id: 254, logo: null, url: 'https://www.laklook.fr/fr/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lovely Daniela', id: 1136, logo: null, url: 'https://lovelydaniela.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lotus', id: 791, logo: null, url: 'http://www.lotus-watches.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Le Cocco', id: 2791, logo: null, url: 'https://lecocco.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lack Of Color', id: 2691, logo: null, url: 'https://lackofcolor.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lavani Jewels', id: 1529, logo: null, url: 'https://www.lavanijewels.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "L'Occitane", id: 2076, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/l_occitane.png', url: 'https://es.loccitane.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Mango', id: 5, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/mango.png', url: 'http://shop.mango.com/ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'H&M', id: 6, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/hym.png', url: 'http://m2.hm.com/m/es_es/index.html', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Brandy Melville', id: 50, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brandymelville.png', url: 'http://www.brandymelvilleusa.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'MARYPAZ', id: 122, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MARYPAZ.png', url: 'http://www.marypaz.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Michael Kors', id: 70, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/michael_kors-21.png', url: 'http://www.michaelkors.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Un Paso Mas', id: 55, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/UN_PASO_MAS.png', url: 'https://www.unpasomas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Massimo Dutti', id: 31, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MASSIMO_DUTTI.png', url: 'http://www.massimodutti.com/es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Maria-Pascual', id: 69, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MARIA_PASCUAL.png', url: 'http://www.maria-pascual.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Morris York', id: 90, logo: null, url: 'http://www.morrisyorkco.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'OH MY COLLECTION', id: 115, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-oh_my.png', url: 'https://www.ohmycollection.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'MISSGUIDED', id: 431, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/missguided.png', url: 'https://www.missguided.eu/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mango Outlet', id: 265, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MANGO_OUTLET.png', url: 'http://www.mangooutlet.com/ES/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Mulaya', id: 433, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MULAYA.png', url: 'https://www.mulaya.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Dr Martens', id: 644, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/drmartens.png', url: 'http://www.drmartens.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Miss Hamptons', id: 264, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-miss_hamptons.png', url: 'http://misshamptons.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Mrboho', id: 94, logo: null, url: 'http://mrboho.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mus & Bombon', id: 142, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MusBombon.png', url: 'http://musbombon.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Meller Brand', id: 116, logo: null, url: 'http://www.mellerbrand.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Chollo Moda', id: 489, logo: null, url: 'https://www.chollomoda.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Steve Madden', id: 314, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/steve_madden.png', url: 'http://www.stevemadden.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Misspap', id: 504, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/misspap-29.png', url: 'http://www.misspap.co.uk/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Moonday', id: 938, logo: null, url: 'http://www.moondaybrand.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mura Boutique', id: 505, logo: null, url: 'http://www.muraboutique.com.au/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'misako', id: 237, logo: null, url: 'http://www.misako.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'MARC JACOBS', id: 218, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/marc_jacobs.png', url: 'http://www.marcjacobs.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Stella McCartney', id: 376, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/STELLA_MCCARTNEY.png', url: 'http://www.stellamccartney.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mr Wonderful', id: 136, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MR_WONDERFUL.png', url: 'http://www.mrwonderfulshop.es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: "Marlo's", id: 493, logo: null, url: 'https://www.marlosonline.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Mishkah', id: 652, logo: null, url: 'http://www.mishkah.com.au/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Manebi', id: 457, logo: null, url: 'http://manebi.eu/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Muutz', id: 506, logo: null, url: 'http://muutz.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Moschino', id: 327, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MOSCHINO.png', url: 'http://www.moschino.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Vero Moda', id: 658, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/vero_moda.png', url: 'http://www.veromoda.com/?forcecountry=ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Munich', id: 416, logo: null, url: 'http://www.munichshop.net/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Morgan de Toi', id: 21, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/morgan.png', url: 'http://www.morgandetoi.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'MamOriginals', id: 475, logo: null, url: 'https://mamoriginals.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Miu Miu', id: 341, logo: null, url: 'http://www.miumiu.com/en/ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Max Mara', id: 186, logo: null, url: 'http://es.maxmara.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Macson', id: 2, logo: null, url: 'http://www.macsonshop.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Margarette Barcelona', id: 152, logo: null, url: 'http://www.margarettebcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Sita Murt', id: 25, logo: null, url: 'http://www.sitamurt.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Monki', id: 401, logo: null, url: 'http://www.monki.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'MAJORICA', id: 195, logo: null, url: 'http://www.majorica.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hemi Mata Atelier', id: 140, logo: null, url: 'http://hmatelier.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mr. Happiness', id: 666, logo: null, url: 'http://mr-happiness.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'MAKARTHY', id: 486, logo: null, url: 'http://www.makarthy.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Moncler', id: 226, logo: null, url: 'http://www.moncler.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Water Melon Flops', id: 888, logo: null, url: 'https://www.watermelonflops.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Isabel Marant', id: 285, logo: null, url: 'http://www.isabelmarant.com/en/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mon Petit Bikini', id: 497, logo: null, url: 'http://www.monpetitbikini.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Nike', id: 28, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/nike-09.png', url: 'http://www.nike.com/es/es_es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Natural by Lila', id: 268, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Natural.png', url: 'http://naturalbylila.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'NA-KD', id: 420, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/nakd-09.png', url: 'https://na-kd.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'New Balance', id: 109, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/new_balance.png', url: 'http://www.newbalance.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nelton Watches', id: 150, logo: null, url: 'http://neltonwatches.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Tiendas Natura', id: 126, logo: null, url: 'https://www.naturaselection.com/v1/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fashion Nova', id: 429, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/FASHION_NOVA.png', url: 'http://www.fashionnova.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'NAPAPIJRI', id: 184, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/NAPAPIJRI.png', url: 'http://www.napapijri.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Necessary Clothing', id: 492, logo: null, url: 'http://www.necessaryclothing.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nias Swimwear', id: 422, logo: null, url: 'http://www.niasswimwear.bigcartel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nasty Gal', id: 260, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/nastygal.png', url: 'http://www.nastygal.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'NorthWeek', id: 474, logo: null, url: 'http://www.northweek.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'The North Face', id: 303, logo: null, url: 'http://www.thenorthface.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nice Things Paloma S.', id: 162, logo: null, url: 'http://www.nicethingspalomas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'El Rincón de Nina', id: 944, logo: null, url: 'http://elrincondenina.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Nixon Watches', id: 281, logo: null, url: 'http://www.nixon.com/es/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Naffta', id: 915, logo: null, url: 'https://www.naffta.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Blanco y Negro', id: 302, logo: null, url: 'http://www.modablancoynegro.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nuwa', id: 917, logo: null, url: 'https://nuwasocialshopping.com/shop-3', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Nou Moscada', id: 469, logo: null, url: 'http://www.noumoscada.com/es/botiga/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Moises Nieto', id: 889, logo: null, url: 'http://www.moisesnieto.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Neon Boots', id: 1113, logo: null, url: 'https://www.neonboots.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'NEW LOOK', id: 786, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_new_look.png', url: 'http://www.newlook.com/row?language=en&currency=EUR&country=ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'New Chic', id: 2376, logo: null, url: 'https://g.newchic.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Noon', id: 1301, logo: null, url: 'http://www.noonspain.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Newhebe', id: 362, logo: null, url: 'http://newhebe.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Neon Coco', id: 2319, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/neon_coco_test_1.png', url: 'https://www.neoncoco.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Next', id: 2121, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_next.png', url: 'http://www.next.es/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nars', id: 865, logo: null, url: 'http://www.narscosmetics.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Naked Wolfe', id: 2766, logo: null, url: 'https://nakedwolfe.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Class Nudo', id: 955, logo: null, url: 'https://www.classnudo.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Sam Newman', id: 856, logo: null, url: 'http://samnewmanclothing.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Liz Nation', id: 2426, logo: null, url: 'https://liznation.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'El Naturalista', id: 1024, logo: null, url: 'http://www.elnaturalista.com/en/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Northolz', id: 846, logo: null, url: 'http://northolz.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nokout', id: 1257, logo: null, url: 'https://www.nokoutco.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'New Yorker', id: 759, logo: null, url: 'http://www.newyorker.de/es/fashion/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nathalia Forkin', id: 2444, logo: null, url: 'https://www.nathaliaforkin.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nyx', id: 1205, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/NYX.png', url: 'http://www.nyxcosmetics.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Majale New Jewel', id: 875, logo: null, url: 'http://majale-newjewel.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'New York Yankees', id: 2358, logo: null, url: 'https://www.mlbshop.com/new-york-yankees/t-14881032+z-9318197-555862172', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Oysho', id: 41, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/OYSHO-77.png', url: 'http://www.oysho.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Urban Outfitters', id: 67, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/URBANOUTFITTERS.png', url: 'http://www.urbanoutfitters.com/en-gb/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'OH MY COLLECTION', id: 115, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-oh_my.png', url: 'https://www.ohmycollection.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Oh Juliette', id: 443, logo: null, url: 'http://ohjuliettestore.tictail.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'OKEYSI', id: 718, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/OKEYSI.png', url: 'https://www.okeysi.com/default.aspx', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mango Outlet', id: 265, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MANGO_OUTLET.png', url: 'http://www.mangooutlet.com/ES/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ootdfash', id: 252, logo: null, url: 'http://www.ootdfash.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ONLY', id: 153, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ONLY.png', url: 'http://only.com/?forcecountry=ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Oxygene', id: 43, logo: null, url: 'http://www.buyoxygene.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'White & One', id: 269, logo: null, url: 'http://www.whiteandone.es/store/c1/Productos_presentados.html', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Oakley', id: 406, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/oakley.png', url: 'http://es.oakley.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Gloria Ortiz y Elogy', id: 895, logo: null, url: 'https://www.elcorteingles.es/gloria-ortiz/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'AND OTHER STORIES', id: 271, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/other_stories.png', url: 'http://www.stories.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Gran Optic', id: 149, logo: null, url: 'https://www.granoptic.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: '338 online', id: 892, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/338.png', url: 'http://www.338online.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'OWL CREATION', id: 120, logo: null, url: 'http://www.owlcreationofficial.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Piece of Sin', id: 275, logo: null, url: 'http://www.pieceofsin.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Olivia de Gala', id: 375, logo: null, url: 'http://oliviadegala.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Outfit Of The Day BCN', id: 849, logo: null, url: 'http://www.outfitofthedaybcn.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Olea', id: 1417, logo: null, url: 'https://oleashoes.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Orbbays', id: 320, logo: null, url: 'http://www.orbbays.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: "O'Neill", id: 1553, logo: null, url: 'http://www.oneill.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'O Bag', id: 1279, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/O_BAG.png', url: 'https://www.obag.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Our South Sunglasses', id: 1231, logo: null, url: 'https://www.oursouthsun.com/index.php', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Onebone', id: 948, logo: null, url: 'https://www.weareonebone.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Outfitbook', id: 2647, logo: null, url: 'https://outfitbook.fr/en/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Oui Petit', id: 1309, logo: null, url: 'https://ouipetit.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Off White', id: 1503, logo: null, url: 'https://www.off---white.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Oshoe', id: 1247, logo: null, url: 'http://www.oshoe.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Onepiece', id: 381, logo: null, url: 'http://www.onepiece.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Lack Of Color', id: 2691, logo: null, url: 'https://lackofcolor.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Thom Olson', id: 1921, logo: null, url: 'https://www.elcorteingles.es/thom-olson/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Surf Own', id: 2494, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/surfown.png', url: 'https://surfown.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rocio Osorno', id: 1322, logo: null, url: 'http://www.rocioosorno.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Moda Ocasión', id: 783, logo: null, url: 'http://modaocasion.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Colors of Aurora', id: 823, logo: null, url: 'http://www.colorsofaurora.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Pull and Bear', id: 38, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/pullbear.png', url: 'https://www.pullandbear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Primark', id: 47, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/primark-76.png', url: 'https://www.primark.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Parfois', id: 111, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Parfois.png', url: 'https://www.parfois.com/es/es/home/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Pimkie', id: 110, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PIMKIE.png', url: 'http://www.pimkie.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Puma', id: 36, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PUMA.png', url: 'http://es-eu.puma.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Frankie Phoenix', id: 425, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-frankie_phoenix.png', url: 'http://frankie-phoenix.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Un Paso Mas', id: 55, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/UN_PASO_MAS.png', url: 'https://www.unpasomas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Maria-Pascual', id: 69, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MARIA_PASCUAL.png', url: 'http://www.maria-pascual.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pepe Jeans', id: 118, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-pepe_jeans.png', url: 'https://www.pepejeans.com/es_es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Public Desire', id: 337, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-public_desire.png', url: 'http://www.publicdesire.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Purificacion Garcia', id: 428, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PURIFICACION_GARCIA.png', url: 'http://www.purificaciongarcia.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Pell Tolra', id: 100, logo: null, url: 'http://pelltolra.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pompeiibrand', id: 181, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-pompeii.png', url: 'http://www.pompeiibrand.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'PANDORA', id: 231, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PANDORA.png', url: 'http://www.pandora.net/es-es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Pura Vida', id: 426, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PURAVIDA.png', url: 'http://puravidaclothes.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Paristchymomo', id: 448, logo: null, url: 'http://paristchymomo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Peppermayo', id: 326, logo: null, url: 'http://www.peppermayo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'PRADA', id: 212, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PRADA.png', url: 'http://www.prada.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Free People', id: 432, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/freepeople.png', url: 'https://www.freepeople.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Panama Jack', id: 283, logo: null, url: 'https://www.panamajack.es/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'PDPAOLA', id: 190, logo: null, url: 'http://www.pdpaola.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Saint Laurent Paris', id: 22, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ives_saint_laurent-52.png', url: 'http://www.ysl.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pedro del Hierro', id: 200, logo: null, url: 'http://www.pedrodelhierro.com/‎', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'SANDRO PARIS', id: 171, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/sandro.png', url: 'http://us.sandro-paris.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Poète', id: 654, logo: null, url: 'http://www.tiendapoete.com/es-ES/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "Friday's Project", id: 201, logo: null, url: 'http://www.fridaysproject.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Fashion Pills', id: 14, logo: null, url: 'http://fashion-pills.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'PETRA SWIMWEAR', id: 194, logo: null, url: 'http://www.petraswimwear.net/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nice Things Paloma S.', id: 162, logo: null, url: 'http://www.nicethingspalomas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'PHILPARK', id: 343, logo: null, url: 'http://m.philpark.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pieces', id: 246, logo: null, url: 'http://pieces.com/?forcecountry=ES&redirected=1', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mon Petit Bikini', id: 497, logo: null, url: 'http://www.monpetitbikini.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Reset Priority', id: 455, logo: null, url: 'http://www.resetpriority.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Etxart & Panno', id: 942, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ETXART_PANNO.png', url: 'http://www.etxartpanno.com/es-ES/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'RCB POLO CLUB', id: 208, logo: null, url: 'http://www.poloclub.com.ar/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'palens', id: 400, logo: null, url: 'http://www.palens.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Piece of Sin', id: 275, logo: null, url: 'http://www.pieceofsin.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pulgaritas', id: 42, logo: null, url: 'http://www.pulgaritas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Polinesiatees', id: 633, logo: null, url: 'http://www.polinesiatees.com.br/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Plata Pura', id: 1107, logo: null, url: 'http://platapura.es/index.php', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pikara', id: 304, logo: null, url: 'http://pikara.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Pulaa Brand', id: 957, logo: null, url: 'http://pulaabrand.com/en/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Promod', id: 1483, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/promod-07.png', url: 'https://www.promod.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Paul Hewitt', id: 1339, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/paul_hewit.png', url: 'https://www.paul-hewitt.com/es/sp', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Princely London', id: 2787, logo: null, url: 'https://www.princely-london.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Perfumes Club', id: 1922, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/perfumes_club.png', url: 'https://www.perfumesclub.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Paulagonushop', id: 1179, logo: null, url: 'https://paulagonushop.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Panambi', id: 1306, logo: null, url: 'https://www.panambicollection.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Posturopa', id: 1108, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/POSTUROPA.png', url: 'http://posturopa.com/index.php', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Parabita', id: 1727, logo: null, url: 'https://www.parabita.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Quanticlo', id: 427, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/QUANTICLO.png', url: 'http://www.quanticlo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Quicksilver', id: 360, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/quicksilver.png', url: 'http://www.quiksilver.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Q2 store', id: 1252, logo: null, url: 'https://q2.com.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'By Queendom', id: 1582, logo: null, url: 'https://byqueendom.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Quanticlo', id: 427, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/QUANTICLO.png', url: 'http://www.quanticlo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Quicksilver', id: 360, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/quicksilver.png', url: 'http://www.quiksilver.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Q2 store', id: 1252, logo: null, url: 'https://q2.com.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'By Queendom', id: 1582, logo: null, url: 'https://byqueendom.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Ray-Ban', id: 53, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/rayban-75.png', url: 'http://www.ray-ban.com/spain', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Romwe', id: 434, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/romwe.png', url: 'http://es.romwe.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Au revoir Cinderella', id: 73, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-au_revoir_cinderella.png', url: 'http://www.aurevoircinderella.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Reebok', id: 311, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/reebok.png', url: 'http://www.reebok.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ralph Lauren', id: 132, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ralph_lauren.png', url: 'http://www.ralphlauren.fr/home/index.jsp?locale=en_FR&ab=footer_cs_spain_US', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rad', id: 491, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-rad.png', url: 'http://www.rad.co/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'REVOLVE', id: 133, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/REVOLVE.png', url: 'http://www.revolveclothing.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Robin Collection', id: 157, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ROBIN.png', url: 'http://www.robincollection.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Rosegal', id: 660, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/rosegal.png', url: 'http://www.rosegal.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rare London', id: 671, logo: null, url: 'http://www.rarelondon.com/clothing/tops-1.html', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Roxy', id: 371, logo: null, url: 'http://www.roxy.es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Elephant Rooms', id: 456, logo: null, url: 'https://elephantrooms.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'La Redoute', id: 366, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/la_redoute-55.png', url: 'http://m.laredoute.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'River Island', id: 351, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_river_island.png', url: 'http://eu.riverisland.com/women/going-out/_/N-8hs?icid=hp/prm1/w/going-out/cat', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rams23', id: 467, logo: null, url: 'http://www.rams23.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'RABAT', id: 216, logo: null, url: 'https://www.rabat.net/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'El Rincón de Nina', id: 944, logo: null, url: 'http://elrincondenina.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Charlotte Russe', id: 245, logo: null, url: 'http://m.charlotterusse.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rumbo', id: 388, logo: null, url: 'http://www.calzadosrumbo.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Rebecca Stella', id: 424, logo: null, url: 'https://rebeccastella.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Reformation', id: 669, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/reformation.png', url: 'https://www.thereformation.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Beach Riot', id: 648, logo: null, url: 'http://beachriot.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Reiko', id: 395, logo: null, url: 'http://www.reikojeans.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Reset Priority', id: 455, logo: null, url: 'http://www.resetpriority.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'RCB POLO CLUB', id: 208, logo: null, url: 'http://www.poloclub.com.ar/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'RebelBlood', id: 473, logo: null, url: 'http://www.rebelbloodco.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'RETROSUPERFUTURE', id: 410, logo: null, url: 'http://retrosuperfuture.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'R de Reina', id: 867, logo: null, url: 'http://rdereina.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rebeca Sanver', id: 408, logo: null, url: 'http://rebecasanver.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Renegade', id: 1111, logo: null, url: 'http://www.renegade-shop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Rarely', id: 1080, logo: null, url: 'https://www.rarelyshop.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ritaros', id: 1271, logo: null, url: 'https://www.ritaros.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Rebellious Fashion', id: 2156, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/REBELLIOUS.png', url: 'https://www.rebelliousfashion.co.uk/?___store=eur', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'rapha', id: 349, logo: null, url: 'http://www.rapha.cc', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Rolex', id: 2415, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/rolex.png', url: 'https://www.rolex.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Red Cocci', id: 947, logo: null, url: 'https://www.redcocci.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Riverside', id: 1261, logo: null, url: 'https://www.riverside.es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Renatta & Go', id: 946, logo: null, url: 'https://www.renattandgo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Rocio Osorno', id: 1322, logo: null, url: 'http://www.rocioosorno.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Raceu hats', id: 323, logo: null, url: 'http://www.raceuhats.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hard Rock', id: 1280, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/HARD_ROCK.png', url: 'https://rockshop.hardrock.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Satine Rose', id: 1230, logo: null, url: 'https://www.satinerose.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Makeup Revolution', id: 2663, logo: null, url: 'https://www.makeuprevolution.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Costurero Real', id: 1216, logo: null, url: 'http://costureroreal.bigcartel.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yves Rocher', id: 2243, logo: null, url: 'https://www.yves-rocher.es/control/main/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'I-RiFashion', id: 954, logo: null, url: 'http://i-rifashion.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mistress Rocks', id: 1974, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/mistress_rocks.png', url: 'https://www.mistressrocks.com/index.php?currency=EUR', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Skull Rider', id: 1254, logo: null, url: 'https://www.skullriderinc.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Viktor & Rolf', id: 2672, logo: null, url: 'http://www.viktor-rolf.com/concept-store/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Banana Republic', id: 1906, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/banan_republic.png', url: 'https://www.bananarepublic.eu/es_ES/homepage', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Stradivarius', id: 23, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/stradivaruis.png', url: 'https://www.stradivarius.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'SheIn', id: 37, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/SHEIN3-01.png', url: 'http://es.shein.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Shana', id: 29, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Shana.png', url: 'http://www.shana.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Women Secret', id: 33, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_WomenSecret.png', url: 'http://womensecret.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Springfield', id: 96, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Springfield.png', url: 'http://myspringfield.com/es/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'SUBDUED', id: 49, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/SUBDUED.png', url: 'http://www.subdued.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'SABO', id: 160, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-sabo.png', url: 'http://saboskirt.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Sfera', id: 129, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Sfera.png', url: 'https://www.elcorteingles.es/sfera/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'San Saru', id: 502, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/SAN_SARU.png', url: 'http://sansarushop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Superga', id: 158, logo: null, url: 'http://superga.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Showpo', id: 439, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-showpo.png', url: 'http://www.showpo.com/eu/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Aloha States', id: 444, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-aloha_state.png', url: 'http://alohastates.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Victoria Secret', id: 95, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/victorias_secret.png', url: 'https://www.victoriassecret.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Sixtyseven Shoes', id: 79, logo: null, url: 'http://www.sixtyseven.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Storets', id: 440, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/storets.png', url: 'http://www.storets.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Shif Store', id: 655, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/SHIF_STORE.png', url: 'http://shifstore.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Simmi Shoes', id: 447, logo: null, url: 'http://www.simmi.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Shoesklar', id: 445, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-shoesklar.png', url: 'http://shoesklar.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Steve Madden', id: 314, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/steve_madden.png', url: 'http://www.stevemadden.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Aque Swimwear', id: 145, logo: null, url: 'http://www.aqueswimwear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Scalpers', id: 148, logo: null, url: 'https://scalperscompany.com/es_es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Superdry', id: 138, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/superdry.png', url: 'http://www.superdry.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Dulceida Shop', id: 665, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Dulceida_shop.png', url: 'http://dulceidashop.com/shop/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Zoe Shop', id: 500, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ZOE_SHOP.png', url: 'http://zoeshop.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lookbook Store', id: 167, logo: null, url: 'http://www.lookbookstore.co/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Luna Beach Swimwear', id: 10, logo: null, url: 'https://lunabeachswimwear.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Nias Swimwear', id: 422, logo: null, url: 'http://www.niasswimwear.bigcartel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Sephora', id: 300, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/SEPHORA.png', url: 'http://www.sephora.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Saint Laurent Paris', id: 22, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ives_saint_laurent-52.png', url: 'http://www.ysl.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Skinnidip London', id: 119, logo: null, url: 'http://www.skinnydiplondon.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Spartbcn', id: 496, logo: null, url: 'http://www.spartbcn.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Happy Socks', id: 131, logo: null, url: 'https://www.happysocks.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Alohas Sandals', id: 104, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/alohas.png', url: 'http://www.alohassandals.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Stella McCartney', id: 376, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/STELLA_MCCARTNEY.png', url: 'http://www.stellamccartney.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Le Coq Sportif', id: 173, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/le_coq_sportif.png', url: 'http://www.lecoqsportif.com/es-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Shop Gocase', id: 923, logo: null, url: 'http://www.shop-gocase.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'KAPTEN&SON', id: 461, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/KAPTEN_AND_SON.png', url: 'https://kapten-son.es/?___store=spanish&___from_store=spanish', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Alessandro Simoni', id: 940, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ALESSANDRO_SIMONI.png', url: 'http://www.alessandrosimoni.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'G-STAR', id: 154, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/g_star_war.png', url: 'https://www.g-star.com/es_es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'SWAROVSKI', id: 309, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/SWAROVSKI.png', url: 'http://www.swarovski.com/Web_ES/es/index', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Sarenza', id: 106, logo: null, url: 'http://www.sarenza.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Saroem', id: 559, logo: null, url: 'http://www.saroem.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Silbon', id: 134, logo: null, url: 'http://www.silbon.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'SANDRO PARIS', id: 171, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/sandro.png', url: 'http://us.sandro-paris.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Salsa', id: 198, logo: null, url: 'http://www.salsastore.com/es‎', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Soul Sister Spain', id: 670, logo: null, url: 'http://soulsisterspain.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'AND OTHER STORIES', id: 271, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/other_stories.png', url: 'http://www.stories.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'SWEET BCN', id: 175, logo: null, url: 'http://www.sweetbcn.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'systemaction', id: 239, logo: null, url: 'http://systemaction.es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'PETRA SWIMWEAR', id: 194, logo: null, url: 'http://www.petraswimwear.net/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Topshop', id: 59, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/tophop.png', url: 'http://m.eu.topshop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tous', id: 7, logo: null, url: 'http://www.tous.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Tommy Hilfiger', id: 127, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/tommy_hilfiguer-04.png', url: 'http://es.tommy.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Tezenis', id: 156, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/TEZENIS.png', url: 'http://es.tezenis.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Triangl', id: 27, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/triangl.png', url: 'http://international.triangl.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Pell Tolra', id: 100, logo: null, url: 'http://pelltolra.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'THE-ARE', id: 169, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-the_are.png', url: 'https://www.the-are.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'TOPMAN', id: 105, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/topman.png', url: 'http://eu.topman.com/?geoip=home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Timberland', id: 430, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/TIMBERLAND.png', url: 'http://www.timberland.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ASICS Tiger', id: 97, logo: null, url: 'http://www.asicstiger.com/es/es-es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tiendas Natura', id: 126, logo: null, url: 'https://www.naturaselection.com/v1/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'El armario de la tele', id: 477, logo: null, url: 'http://www.elarmariodelatele.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tiffany & Co', id: 137, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/TIFFANY.png', url: 'http://www.tiffany.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The Hip Tee', id: 656, logo: null, url: 'http://www.thehiptee.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tintoretto', id: 900, logo: null, url: 'http://www.elcorteingles.es/tintoretto/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'The Tipi Tent', id: 484, logo: null, url: 'http://www.thetipitent.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Trend Actually', id: 196, logo: null, url: 'http://trendactually.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Morgan de Toi', id: 21, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/morgan.png', url: 'http://www.morgandetoi.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Tino Gonzalez', id: 235, logo: null, url: 'http://www.tinogonzalez.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Isidora the label', id: 441, logo: null, url: 'http://www.isidorathelabel.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'TwinkleDeals', id: 423, logo: null, url: 'http://www.twinkledeals.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tiffosi', id: 356, logo: null, url: 'http://www.tiffosi.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The North Face', id: 303, logo: null, url: 'http://www.thenorthface.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Nice Things Paloma S.', id: 162, logo: null, url: 'http://www.nicethingspalomas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'triwa', id: 250, logo: null, url: 'https://triwa.com/en-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'SIsters the label', id: 647, logo: null, url: 'http://au.sistersthelabel.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Thomas Sabo', id: 347, logo: null, url: 'http://www.thomassabo.com/EU/es_ES/start', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'TWIN-SET', id: 18, logo: null, url: 'http://www.twinset.com/‎', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'The Wild Flower Shop', id: 918, logo: null, url: 'http://www.thewildflowershop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'dear tee', id: 280, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/DEAR_TEE.png', url: 'http://www.deartee.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Alameda Turquesa', id: 662, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/almadeturquesa.png', url: 'http://alamedaturquesa.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'TCN', id: 102, logo: null, url: 'http://www.tcn.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Trucco', id: 255, logo: null, url: 'http://truccoshop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Con El Día Tonto', id: 941, logo: null, url: 'http://coneldiatonto.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'TIWI', id: 291, logo: null, url: 'http://www.tiwiworld.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Great Times', id: 386, logo: null, url: 'http://greatimes.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The Knitted Troopers', id: 932, logo: null, url: 'https://www.theknittedtroopers.com/collections/strangers', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Light in the box', id: 370, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/light_in_the_box.png', url: 'http://www.lightinthebox.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The Tripletz', id: 1323, logo: null, url: 'https://thetripletzshop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Twenty3', id: 297, logo: null, url: 'http://www.twenty3.my/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'TheWhiteBrand', id: 1329, logo: null, url: 'https://www.thewhitebrand.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'TheGCollectionSpain', id: 1548, logo: null, url: 'http://thegcollectionspain.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tot-Em', id: 958, logo: null, url: 'https://www.tot-em.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'TicTail', id: 367, logo: null, url: 'http://tictail.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tigha', id: 398, logo: null, url: 'http://www.tigha.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Tutto Piccolo', id: 2095, logo: null, url: 'https://www.tuttopiccolo.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Tiwel', id: 1243, logo: null, url: 'http://tiwel.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: "Tre's", id: 2769, logo: null, url: 'http://tresshoponline.com/shop/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The Body Shop', id: 1774, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/the_body_shop.png', url: 'https://www.thebodyshop.com/es-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Twins&Bros', id: 449, logo: null, url: 'http://twinsandbros.com/es/3-coleccion', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Un Paso Mas', id: 55, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/UN_PASO_MAS.png', url: 'https://www.unpasomas.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Urban Outfitters', id: 67, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/URBANOUTFITTERS.png', url: 'http://www.urbanoutfitters.com/en-gb/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Uterqüe', id: 189, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/UTERQUE.png', url: 'http://www.uterque.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Ulanka', id: 227, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ULANKA.png', url: 'http://www.ulanka.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'UGG Australia', id: 92, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/UGG.png', url: 'http://www.uggaustralia.eu/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'UNOde50', id: 316, logo: null, url: 'http://www.unode50.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'uniqfind', id: 253, logo: null, url: 'http://www.uniqfind.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Uniqlo', id: 229, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/uniqlo.png', url: 'http://www.uniqlo.com/eu/en/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Untamed', id: 476, logo: null, url: 'http://www.untamed-store.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Urban Decay', id: 1540, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/urban_decay.png', url: 'https://www.urbandecay.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Unisa', id: 1491, logo: null, url: 'https://www.unisa-europa.com/es-ES/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Uissos', id: 1579, logo: null, url: 'http://www.uissos.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ursulitas', id: 377, logo: null, url: 'http://ursulitas.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Under armour', id: 1575, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/UNDER_ARMOUR.png', url: 'https://www.underarmour.es/es-es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Vans', id: 48, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/vans-95.png', url: 'http://www.vans.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ARIZONA VINTAGE', id: 128, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/arizona_vintage.png', url: 'https://www.arizonavintage.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Calzados Victoria', id: 89, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/VICTORIA.png', url: 'http://www.calzadosvictoria.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Louis Vuitton', id: 58, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/LOUIS_VUITTON.png', url: 'http://es.louisvuitton.com/esp-es/homepage', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Verge Girl', id: 378, logo: null, url: 'http://www.vergegirl.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Victoria Secret', id: 95, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/victorias_secret.png', url: 'https://www.victoriassecret.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Berry Village', id: 233, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-berry_village.png', url: 'http://www.berryvillage.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Pura Vida', id: 426, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/PURAVIDA.png', url: 'http://puravidaclothes.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Venca', id: 471, logo: null, url: 'http://www.venca.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Valentino', id: 187, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/VALENTINO.png', url: 'http://www.valentino.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Vogue', id: 15, logo: null, url: 'http://www.vogue.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Vero Moda', id: 658, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/vero_moda.png', url: 'http://www.veromoda.com/?forcecountry=ES', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Vagn Blacs', id: 470, logo: null, url: 'http://www.vagnblacs-glamlife.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Zadig&Voltaire', id: 348, logo: null, url: 'http://www.zadig-et-voltaire.com/eu/en/?redirected=true', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Valtico', id: 912, logo: null, url: 'http://valtico.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Volcom', id: 249, logo: null, url: 'http://www.volcom.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'American Vintage', id: 338, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/american_vintage.png', url: 'http://www.americanvintage-store.com/en/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Versace', id: 219, logo: null, url: 'http://www.versace.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Vicky Bargallo', id: 72, logo: null, url: 'http://www.vickybargallo.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'VEJA', id: 336, logo: null, url: 'http://www.veja-store.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Depor village', id: 276, logo: null, url: 'http://www.deporvillage.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Valnüd', id: 1264, logo: null, url: 'https://valnud.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Visionario shop', id: 1235, logo: null, url: 'http://visionarioshop.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Vives shoes', id: 1236, logo: null, url: 'http://www.vivesonline.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Votre Miroir', id: 243, logo: null, url: 'http://www.votremiroir.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Verdugo', id: 363, logo: null, url: 'http://www.verdugoclothing.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Viceroy', id: 841, logo: null, url: 'http://www.viceroy.es/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Vertbaudet', id: 2257, logo: null, url: 'https://www.vertbaudet.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Viktor & Rolf', id: 2672, logo: null, url: 'http://www.viktor-rolf.com/concept-store/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Vera & The Birds', id: 1917, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/vera_and_the_birds.png', url: 'https://veraandthebirds.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'dinh van', id: 390, logo: null, url: 'http://www.dinhvan.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Maniere De Voir', id: 2754, logo: null, url: 'https://www.manieredevoir.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Kat Von D', id: 864, logo: null, url: 'http://www.katvondbeauty.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Daniel Wellington', id: 52, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-daniel_wellington.png', url: 'https://www.danielwellington.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Women Secret', id: 33, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_WomenSecret.png', url: 'http://womensecret.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'In Love With', id: 32, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/in_love_with_-75.png', url: 'http://www.inlovewith.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Wolfnoir', id: 365, logo: null, url: 'http://wolfnoir.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Easy Wear', id: 898, logo: null, url: 'https://www.elcorteingles.es/easy-wear/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Nelton Watches', id: 150, logo: null, url: 'http://neltonwatches.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'White Fox', id: 435, logo: null, url: 'http://www.whitefoxboutique.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mr Wonderful', id: 136, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/MR_WONDERFUL.png', url: 'http://www.mrwonderfulshop.es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'WINDSORSMITH', id: 168, logo: null, url: 'http://www.windsorsmith.com.au/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Carhartt WIP', id: 236, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/carhartt.png', url: 'http://shop.carhartt-wip.com/view/es/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Wolflamb', id: 288, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/WOLFLAMB.png', url: 'http://www.wolflamb.es/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'White & One', id: 269, logo: null, url: 'http://www.whiteandone.es/store/c1/Productos_presentados.html', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Woodys', id: 11, logo: null, url: 'http://woodysbarcelona.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'LORD WILMORE', id: 179, logo: null, url: 'http://lordwilmore.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Nixon Watches', id: 281, logo: null, url: 'http://www.nixon.com/es/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'The Wild Flower Shop', id: 918, logo: null, url: 'http://www.thewildflowershop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Water Melon Flops', id: 888, logo: null, url: 'https://www.watermelonflops.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Breef Watches', id: 468, logo: null, url: 'https://www.breefwatches.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Watxandco', id: 402, logo: null, url: 'http://www.watxandcolors.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Higher Woods', id: 357, logo: null, url: 'http://www.higherwoods.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'White Lion', id: 1508, logo: null, url: 'https://whitelionshop.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Woolrich', id: 2462, logo: null, url: 'https://www.woolrich.eu/es/es/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Wildlife co', id: 1232, logo: null, url: 'https://www.wildlifecompany.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Woodenson', id: 1420, logo: null, url: 'https://www.woodenson.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Warehouse', id: 2287, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_warehouse.png', url: 'https://www.warehouse-london.com/row/home', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Wish', id: 1170, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/WISH.png', url: 'https://wish.com.au/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Wakabanga', id: 920, logo: null, url: 'https://www.wakabanga.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Swell Wear', id: 1115, logo: null, url: 'http://www.swellwear.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Midtown wear', id: 1233, logo: null, url: 'http://www.midtownwear.es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Wander Jewelry', id: 355, logo: null, url: 'http://www.wanderjewelry.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Wycon', id: 2278, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/WYCON.png', url: 'https://www.wyconcosmetics.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: "We Don't Kill Animals", id: 1132, logo: null, url: 'http://www.wedontkillanimals.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Golf Wang', id: 1325, logo: null, url: 'http://www.golfwang.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Mvmt Watches', id: 2505, logo: null, url: 'https://www.mvmtwatches.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Naked Wolfe', id: 2766, logo: null, url: 'https://nakedwolfe.com', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Stuart Weitzman', id: 1747, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/stuart_weizman.png', url: 'http://eu.stuartweitzman.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Chic wish', id: 1704, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/chickwish.png', url: 'https://www.chicwish.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Cristian Paul Watches', id: 308, logo: null, url: 'http://www.christianpaul.com.au/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'All i want', id: 1918, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/alliewant.png', url: 'https://www.alliwant.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Ethnic Watches', id: 1051, logo: null, url: 'https://ethnicwatches.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Off White', id: 1503, logo: null, url: 'https://www.off---white.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Alexander Wang', id: 1980, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/alexander_wang.png', url: 'https://www.alexanderwang.com/es', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Xti', id: 203, logo: null, url: 'http://xtistore.es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Xylvester', id: 436, logo: null, url: 'https://www.xylvester.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Bimba Y Lola', id: 45, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/Bimba_y_Lola.png', url: 'http://www.bimbaylola.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Morris York', id: 90, logo: null, url: 'http://www.morrisyorkco.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yellowshop', id: 438, logo: null, url: 'http://shop.yellowshop.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Lowlita&You', id: 191, logo: null, url: 'http://www.lowlitaandyou.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yoins', id: 257, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/YOINS.png', url: 'http://m.yoins.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yokono', id: 649, logo: null, url: 'http://yokono.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Gloria Ortiz y Elogy', id: 895, logo: null, url: 'https://www.elcorteingles.es/gloria-ortiz/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'YAMAMAY', id: 487, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/YAMAMAY.png', url: 'http://www.yamamay.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yera', id: 901, logo: null, url: 'https://www.elcorteingles.es/yera/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Blanco y Negro', id: 302, logo: null, url: 'http://www.modablancoynegro.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yves Rocher', id: 2243, logo: null, url: 'https://www.yves-rocher.es/control/main/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yow Surf', id: 2493, logo: null, url: 'http://yowsurf.com/es/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yuiva', id: 2723, logo: null, url: 'https://yuiva.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yeezys', id: 2727, logo: null, url: 'http://www.yeezys.com.co/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'YesStyle', id: 1712, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/yesstyle.png', url: 'https://www.yesstyle.com/en/home.html', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Yoox', id: 2268, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/yoox.png', url: 'https://www.yoox.com/es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'New York Yankees', id: 2358, logo: null, url: 'https://www.mlbshop.com/new-york-yankees/t-14881032+z-9318197-555862172', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Guapa y con estilo shop', id: 2825, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/guapayconestilo.png', url: 'https://guapayconestiloshop.com/tienda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'New Yorker', id: 759, logo: null, url: 'http://www.newyorker.de/es/fashion/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Live your life', id: 1245, logo: null, url: 'http://liveyourlifeclothing.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },
    {
      previous: null,
      results: [{
        name: 'Zara', id: 1, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/zara2.png', url: 'http://www.zara.com', is_in_catalog: true, is_barcode_working: true, are_products_categorized: true,
      }, {
        name: 'Zatro', id: 46, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon-zatro.png', url: 'http://www.zatro.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Zaful', id: 465, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/brand_web_icon_Zaful.png', url: 'http://www.zaful.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Zalando', id: 68, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/zalando.png', url: 'https://www.zalando.es/nino-home/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Zoe Shop', id: 500, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/ZOE_SHOP.png', url: 'http://zoeshop.es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'ZE GARCIA', id: 143, logo: null, url: 'http://www.zegarcia.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'ZeroUV', id: 661, logo: null, url: 'http://www.shopzerouv.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Zadig&Voltaire', id: 348, logo: null, url: 'http://www.zadig-et-voltaire.com/eu/en/?redirected=true', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Zendra', id: 906, logo: null, url: 'https://www.elcorteingles.es/zendra-el-corte-ingles/moda/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Zegna', id: 641, logo: null, url: 'https://www.zegna.es/es-es/home.html', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Zapaterías Margall', id: 298, logo: null, url: 'http://www.zapateriasmargall.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Sport Zone', id: 407, logo: null, url: 'http://www.sportzone.es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Zimmermann', id: 2262, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/zimerman.png', url: 'https://eu.zimmermannwear.com/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Zalando Prive', id: 2321, logo: null, url: 'https://www.zalando-prive.es/#/', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Zazzle', id: 345, logo: null, url: 'http://www.zazzle.es', is_in_catalog: false, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Zacaris', id: 242, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/zacaris.png', url: 'http://www.zacaris.com', is_in_catalog: true, is_barcode_working: false, are_products_categorized: false,
      }, {
        name: 'Hangar Zapatos', id: 951, logo: null, url: 'http://tienda.hangarzapatos.com/es/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }, {
        name: 'Diva Zapatos', id: 1867, logo: 'https://clothingwarehouse.s3-eu-west-1.amazonaws.com:443/brands/logos/diva.png', url: 'https://divazapatos.com/', is_in_catalog: true, is_barcode_working: false, are_products_categorized: true,
      }],
      next: null,
    },


  ],
};
function compare (a, b) {
  if (a.name < b.name) { return -1; }
  if (a.name > b.name) { return 1; }
  return 0;
}

router.get('/brands', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const y = x.elems.reduce((acc, item) => [...acc, ...item.results], []);
  const ret = y.sort(compare);

  res.send(
    JSON.stringify(ret),
  );
});

module.exports = router;
